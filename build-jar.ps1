# Build script for creating Keycloak theme JAR
# This packages the theme for production deployment

Write-Host "🎨 Building Keycloak Theme JAR" -ForegroundColor Cyan
Write-Host "===============================" -ForegroundColor Cyan
Write-Host ""

# Check if jar command is available
try {
    $jarVersion = jar --version 2>&1
    if ($LASTEXITCODE -ne 0) {
        throw "jar command failed"
    }
    Write-Host "✓ JAR tool found" -ForegroundColor Green
} catch {
    Write-Host "✗ JAR tool not found!" -ForegroundColor Red
    Write-Host "Please install JDK (Java Development Kit) to get the jar command." -ForegroundColor Yellow
    Write-Host "Download from: https://adoptium.net/" -ForegroundColor Yellow
    exit 1
}

# Set variables
$themeName = "notjustanna"
$jarName = "keycloak-theme-${themeName}.jar"
$outputDir = "dist"

# Create output directory
if (-not (Test-Path $outputDir)) {
    New-Item -ItemType Directory -Path $outputDir | Out-Null
    Write-Host "✓ Created output directory: $outputDir" -ForegroundColor Green
}

# Create temporary build directory
$buildDir = "build-temp"
if (Test-Path $buildDir) {
    Remove-Item -Recurse -Force $buildDir
}
New-Item -ItemType Directory -Path $buildDir | Out-Null
Write-Host "✓ Created build directory" -ForegroundColor Green

# Copy META-INF
Write-Host "📦 Copying META-INF..." -ForegroundColor Yellow
Copy-Item -Recurse -Path "META-INF" -Destination "$buildDir\META-INF"

# Copy theme files
Write-Host "📦 Copying theme files..." -ForegroundColor Yellow
New-Item -ItemType Directory -Path "$buildDir\theme" -Force | Out-Null
Copy-Item -Recurse -Path "themes\$themeName" -Destination "$buildDir\theme\$themeName"

# Create JAR file
Write-Host "🔨 Creating JAR file..." -ForegroundColor Yellow
Push-Location $buildDir
jar -cf "..\$outputDir\$jarName" *
Pop-Location

if ($LASTEXITCODE -eq 0) {
    # Cleanup
    Remove-Item -Recurse -Force $buildDir
    
    Write-Host ""
    Write-Host "✅ SUCCESS!" -ForegroundColor Green
    Write-Host ""
    Write-Host "JAR file created: $outputDir\$jarName" -ForegroundColor Cyan
    
    # Get file size
    $jarFile = Get-Item "$outputDir\$jarName"
    $sizeKB = [math]::Round($jarFile.Length / 1KB, 2)
    Write-Host "File size: $sizeKB KB" -ForegroundColor Gray
    
    Write-Host ""
    Write-Host "📋 Deployment Instructions:" -ForegroundColor Cyan
    Write-Host "1. Copy $jarName to your Keycloak server" -ForegroundColor White
    Write-Host "2. Place it in the providers/ directory:" -ForegroundColor White
    Write-Host "   KEYCLOAK_HOME/providers/$jarName" -ForegroundColor Gray
    Write-Host "3. Restart Keycloak (or run: kc.sh build)" -ForegroundColor White
    Write-Host "4. In Admin Console, go to Realm Settings → Themes" -ForegroundColor White
    Write-Host "5. Select '$themeName' as your Login Theme" -ForegroundColor White
    Write-Host ""
    
} else {
    Write-Host ""
    Write-Host "✗ Failed to create JAR file!" -ForegroundColor Red
    Remove-Item -Recurse -Force $buildDir -ErrorAction SilentlyContinue
    exit 1
}
