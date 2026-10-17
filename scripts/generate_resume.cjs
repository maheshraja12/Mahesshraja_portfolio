const fs = require('fs');
const path = require('path');

// Simple valid single-page PDF generator
function createResumePdf(outputPath) {
  const content = [
    "%PDF-1.4",
    "1 0 obj << /Type /Catalog /Pages 2 0 R >> endobj",
    "2 0 obj << /Type /Pages /Kids [3 0 R] /Count 1 >> endobj",
    "3 0 obj << /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Resources << /Font << /F1 4 0 R /F2 5 0 R >> >> /Contents 6 0 R >> endobj",
    "4 0 obj << /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >> endobj",
    "5 0 obj << /Type /Font /Subtype /Type1 /BaseFont /Helvetica >> endobj",
  ];

  const streamLines = [
    "BT",
    "/F1 20 Tf",
    "50 740 Td",
    "(GARIDEPALLI MAHESH RAJA) Tj",
    "0 -22 Td",
    "/F2 11 Tf",
    "(AI Software Engineer | Python, AI/ML & Full-Stack Developer) Tj",
    "0 -16 Td",
    "(Hyderabad, Telangana, India | +91-9398961621 | maheshrajagaridepalli954@gmail.com) Tj",
    "0 -14 Td",
    "(GitHub: https://github.com/maheshraja12 | Vercel: https://vercel.com/maheshraja12) Tj",
    "0 -26 Td",
    "/F1 13 Tf",
    "(PROFESSIONAL SUMMARY) Tj",
    "0 -16 Td",
    "/F2 10 Tf",
    "(Early-career Computer Science and Engineering graduate with hands-on experience in AI/ML,) Tj",
    "0 -13 Td",
    "(Python backend systems, automated workflows, and full-stack web applications.) Tj",
    "0 -24 Td",
    "/F1 13 Tf",
    "(FEATURED ENGINEERING PROJECTS) Tj",
    "0 -16 Td",
    "/F1 10 Tf",
    "(1. SV Real Estate Hyderabad - Full-Stack Real Estate Platform) Tj",
    "0 -13 Td",
    "/F2 9.5 Tf",
    "(- Built complete platform with Node.js, Express, EJS, and SQLite/PostgreSQL/Supabase.) Tj",
    "0 -11 Td",
    "(- Implemented appointment scheduling, public enquiry handling, and admin portal.) Tj",
    "0 -16 Td",
    "/F1 10 Tf",
    "(2. AEGIS V3 - Autonomous Infrastructure Resilience Engine) Tj",
    "0 -13 Td",
    "/F2 9.5 Tf",
    "(- Python prototype for AI-assisted incident repair with FastAPI, AST checks, and pytest.) Tj",
    "0 -11 Td",
    "(- Explored child-process verification heuristics and simulated consensus guards.) Tj",
    "0 -16 Td",
    "/F1 10 Tf",
    "(3. CleanSweep - Data Cleaner Web Application) Tj",
    "0 -13 Td",
    "/F2 9.5 Tf",
    "(- Flask/Python application for CSV dataset cleaning, outlier detection, and preprocessing.) Tj",
    "0 -11 Td",
    "(- Integrated pandas and scikit-learn with Docker containerization support.) Tj",
    "0 -16 Td",
    "/F1 10 Tf",
    "(4. JARVIS Swarm - Personal Assistant System) Tj",
    "0 -13 Td",
    "/F2 9.5 Tf",
    "(- Local-first assistant architecture with FastAPI HUD, persistent memory, and tool routing.) Tj",
    "0 -24 Td",
    "/F1 13 Tf",
    "(EDUCATION) Tj",
    "0 -16 Td",
    "/F1 10 Tf",
    "(B.Tech in Computer Science and Engineering | 2023 - 2026 | CGPA: 7.38/10) Tj",
    "0 -12 Td",
    "/F2 9.5 Tf",
    "(Institute of Aeronautical Engineering (IARE), Hyderabad) Tj",
    "0 -15 Td",
    "/F1 10 Tf",
    "(Diploma in Computer Science and Engineering | 2020 - 2023 | CGPA: 6.68/10) Tj",
    "0 -12 Td",
    "/F2 9.5 Tf",
    "(St. Mary's Group of Institutions, Hyderabad) Tj",
    "0 -15 Td",
    "/F1 10 Tf",
    "(SSC / Class X | CGPA: 10/10) Tj",
    "0 -12 Td",
    "/F2 9.5 Tf",
    "(MJBTBCWRIC Boys Convent School) Tj",
    "0 -24 Td",
    "/F1 13 Tf",
    "(RESEARCH & PRESENTATION) Tj",
    "0 -16 Td",
    "/F2 9.5 Tf",
    "(Computationally Efficient AI Framework for Early-Stage Lung Cancer Classification) Tj",
    "0 -12 Td",
    "(Presented at ICCET 2026 (March 2026) - Focus on stain-invariant histopathological features.) Tj",
    "0 -24 Td",
    "/F1 13 Tf",
    "(TECHNICAL SKILLS) Tj",
    "0 -16 Td",
    "/F2 9.5 Tf",
    "(Languages & Backend: Python, JavaScript, Java, SQL, Node.js, Express, Flask, FastAPI) Tj",
    "0 -12 Td",
    "(Frontend & UI: React, HTML5, CSS3, Tailwind CSS, Responsive Design) Tj",
    "0 -12 Td",
    "(AI/ML & Data: TensorFlow, Keras, CNNs, pandas, numpy, scikit-learn, Excel, Power Query) Tj",
    "0 -12 Td",
    "(Databases & Tools: SQLite, PostgreSQL, MySQL, Supabase, Git, GitHub, Docker, Vercel) Tj",
    "ET"
  ];

  const streamContent = streamLines.join("\n");
  const streamLength = Buffer.byteLength(streamContent, 'utf-8');

  content.push(`6 0 obj << /Length ${streamLength} >> stream\n${streamContent}\nendstream\nendobj`);

  // xref table
  let offset = 0;
  const offsets = [0];
  const body = content.join("\n") + "\n";
  
  // Calculate offsets for objects 1 through 6
  const lines = body.split("\n");
  let currentPos = 0;
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const match = line.match(/^(\d+) 0 obj/);
    if (match) {
      const objNum = parseInt(match[1]);
      offsets[objNum] = currentPos;
    }
    currentPos += Buffer.byteLength(line, 'utf-8') + 1; // +1 for newline
  }

  const xrefPos = currentPos;
  let xref = `xref\n0 ${offsets.length}\n0000000000 65535 f \n`;
  for (let i = 1; i < offsets.length; i++) {
    const offStr = String(offsets[i]).padStart(10, '0');
    xref += `${offStr} 00000 n \n`;
  }

  const trailer = `trailer << /Size ${offsets.length} /Root 1 0 R >>\nstartxref\n${xrefPos}\n%%EOF\n`;

  const finalPdf = body + xref + trailer;
  fs.writeFileSync(outputPath, finalPdf, 'binary');
  console.log(`Resume PDF written successfully to: ${outputPath}`);
}

const targetPath = path.resolve(__dirname, '../public/Mahesh_Raja_Resume.pdf');
createResumePdf(targetPath);
