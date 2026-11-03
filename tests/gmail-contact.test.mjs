import test from 'node:test';
import assert from 'node:assert/strict';

// Helper that mirrors the contact form URL generation logic
function generateGmailComposeUrl({ name, email, subject, message }) {
  const trimmedName = name.trim();
  const trimmedEmail = email.trim();
  const trimmedSubject = subject.trim();
  const trimmedMessage = message.trim();

  const bodyContent = [
    'Dear Mahesh Raja,',
    '',
    trimmedMessage,
    '',
    '---',
    `From: ${trimmedName}`,
    `Email: ${trimmedEmail}`,
  ].join('\n');

  const params = new URLSearchParams();
  params.set('view', 'cm');
  params.set('fs', '1');
  params.set('to', 'maheshrajagaridepalli954@gmail.com');
  params.set('su', trimmedSubject);
  params.set('body', bodyContent);

  return `https://mail.google.com/mail/?${params.toString().replace(/\+/g, '%20')}`;
}

function validateContactForm({ name, email, subject, message }) {
  const errors = {};
  const trimmedName = (name || '').trim();
  if (!trimmedName) {
    errors.name = 'Please provide your full name.';
  } else if (trimmedName.length < 2) {
    errors.name = 'Name must be at least 2 characters long.';
  }

  const trimmedEmail = (email || '').trim();
  if (!trimmedEmail) {
    errors.email = 'Please provide your email address.';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
    errors.email = 'Please provide a valid email format (e.g. name@domain.com).';
  }

  const trimmedSubject = (subject || '').trim();
  if (!trimmedSubject) {
    errors.subject = 'Please enter a subject.';
  } else if (trimmedSubject.length < 2) {
    errors.subject = 'Subject must be at least 2 characters long.';
  }

  const trimmedMessage = (message || '').trim();
  if (!trimmedMessage) {
    errors.message = 'Please enter your message.';
  } else if (trimmedMessage.length < 10) {
    errors.message = 'Message must be at least 10 characters long.';
  }

  return { isValid: Object.keys(errors).length === 0, errors };
}

test('Validation: Rejects empty or invalid inputs', () => {
  const emptyRes = validateContactForm({ name: '', email: '', subject: '', message: '' });
  assert.equal(emptyRes.isValid, false);
  assert.ok(emptyRes.errors.name);
  assert.ok(emptyRes.errors.email);
  assert.ok(emptyRes.errors.subject);
  assert.ok(emptyRes.errors.message);

  const invalidEmailRes = validateContactForm({
    name: 'Sarah Connor',
    email: 'not-an-email',
    subject: 'AI Engineer Hiring',
    message: 'Hello, I would like to schedule an interview.'
  });
  assert.equal(invalidEmailRes.isValid, false);
  assert.ok(invalidEmailRes.errors.email);
});

test('Validation: Accepts valid inputs', () => {
  const validRes = validateContactForm({
    name: "O'Connor & Associates",
    email: 'hiring@example.com',
    subject: 'Senior AI / Full-Stack Role @ TechCorp',
    message: "We'd love to discuss our engineering opening in Hyderabad!"
  });
  assert.equal(validRes.isValid, true);
  assert.deepEqual(validRes.errors, {});
});

test('Gmail URL Generation: Handles spaces, apostrophes, symbols, and multi-line text', () => {
  const url = generateGmailComposeUrl({
    name: "Dr. Jane O'Reilly & Partners",
    email: 'jane.oreilly@tech-venture.co.uk',
    subject: "Interview Invitation: AI/ML & Full-Stack Lead (Hyderabad / Remote)",
    message: "Hello Mahesh,\n\nWe reviewed your GitHub projects (including SV Real Estate & Aegis V3).\nWe're very impressed with your work!\n\nCan we meet tomorrow at 3:00 PM?"
  });

  // Check URL scheme and host
  assert.ok(url.startsWith('https://mail.google.com/mail/?view=cm&fs=1&to=maheshrajagaridepalli954%40gmail.com'));

  // Parse back URL to verify all parameters match perfectly
  const parsed = new URL(url);
  assert.equal(parsed.searchParams.get('view'), 'cm');
  assert.equal(parsed.searchParams.get('fs'), '1');
  assert.equal(parsed.searchParams.get('to'), 'maheshrajagaridepalli954@gmail.com');
  assert.equal(parsed.searchParams.get('su'), "Interview Invitation: AI/ML & Full-Stack Lead (Hyderabad / Remote)");

  const body = parsed.searchParams.get('body');
  assert.ok(body.includes('Dear Mahesh Raja,'));
  assert.ok(body.includes("Dr. Jane O'Reilly & Partners"));
  assert.ok(body.includes('jane.oreilly@tech-venture.co.uk'));
  assert.ok(body.includes("We reviewed your GitHub projects"));
  assert.ok(body.includes("Can we meet tomorrow at 3:00 PM?"));

  // Check no literal unencoded newlines exist in the URL string
  assert.ok(!url.includes('\n'));
  assert.ok(!url.includes('\r'));
});

