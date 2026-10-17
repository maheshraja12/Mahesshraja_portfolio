Add-Type -AssemblyName System.Drawing

$srcPath = "C:\Users\mahes\.gemini\antigravity-ide\brain\6ec24683-918d-4ae5-bc22-10983db74169\.user_uploaded\media_1792178443764.jpg"
$src = [System.Drawing.Bitmap]::FromFile($srcPath)

# Project thumbnail dimensions and boxes:
# Card 1: x: 41, y: 374, w: 142, h: 71
# Card 2: x: 195, y: 374, w: 142, h: 71
# Card 3: x: 349, y: 374, w: 142, h: 71
# Card 4: x: 502, y: 374, w: 142, h: 71

$projects = @(
  @{ Name = "realestate.jpg"; X = 41; Y = 374; W = 142; H = 71 },
  @{ Name = "fsindhu.jpg"; X = 195; Y = 374; W = 142; H = 71 },
  @{ Name = "cleansweep.jpg"; X = 349; Y = 374; W = 142; H = 71 },
  @{ Name = "lungcancer.jpg"; X = 502; Y = 374; W = 142; H = 71 }
)

foreach ($p in $projects) {
  $cropRect = New-Object System.Drawing.Rectangle($p.X, $p.Y, $p.W, $p.H)
  $cropped = $src.Clone($cropRect, $src.PixelFormat)
  
  # High-quality resize to 600x300 for sharp rendering
  $dest = New-Object System.Drawing.Bitmap(600, 300)
  $g = [System.Drawing.Graphics]::FromImage($dest)
  $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
  $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
  $g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
  $g.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality

  $destRect = New-Object System.Drawing.Rectangle(0, 0, 600, 300)
  $g.DrawImage($cropped, $destRect)
  $g.Dispose()

  $outPath = "d:\MAHESHRAJA PORTFOLIO\public\projects\" + $p.Name
  $dest.Save($outPath, [System.Drawing.Imaging.ImageFormat]::Jpeg)
  $dest.Dispose()
  $cropped.Dispose()
  Write-Output "Saved $outPath"
}

$src.Dispose()
