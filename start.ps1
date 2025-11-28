# Quick Start Script for Windows PowerShell
# This script helps you get started with the Keycloak MyTheme tutorial

Write-Host "🎨 Keycloak MyTheme Tutorial - Quick Start" -ForegroundColor Cyan
Write-Host "=========================================" -ForegroundColor Cyan
Write-Host ""

# Check if Docker is running
Write-Host "Checking Docker..." -ForegroundColor Yellow
try {
    $dockerVersion = docker --version
    Write-Host "✓ Docker found: $dockerVersion" -ForegroundColor Green
} catch {
    Write-Host "✗ Docker not found or not running!" -ForegroundColor Red
    Write-Host "Please install Docker Desktop and ensure it's running." -ForegroundColor Red
    exit 1
}

# Check if docker-compose is available
Write-Host "Checking Docker Compose..." -ForegroundColor Yellow
try {
    $composeVersion = docker-compose --version
    Write-Host "✓ Docker Compose found: $composeVersion" -ForegroundColor Green
} catch {
    Write-Host "✗ Docker Compose not found!" -ForegroundColor Red
    exit 1
}

Write-Host ""
Write-Host "Starting Keycloak with MyTheme..." -ForegroundColor Yellow
docker-compose up -d

if ($LASTEXITCODE -eq 0) {
    Write-Host ""
    Write-Host "✓ Keycloak is starting!" -ForegroundColor Green
    Write-Host ""
    Write-Host "📋 Next Steps:" -ForegroundColor Cyan
    Write-Host "1. Wait 30-60 seconds for Keycloak to fully start"
    Write-Host "2. Open your browser to: http://localhost:8080"
    Write-Host "3. Login with username: admin, password: admin"
    Write-Host "4. Create a new realm (or use master realm)"
    Write-Host "5. Go to Realm Settings → Themes"
    Write-Host "6. Set Login Theme to 'mytheme' and Save"
    Write-Host "7. Visit: http://localhost:8080/realms/YOUR_REALM/account"
    Write-Host ""
    Write-Host "📊 Check status with: docker-compose logs -f keycloak" -ForegroundColor Yellow
    Write-Host "🛑 Stop with: docker-compose down" -ForegroundColor Yellow
    Write-Host ""
    Write-Host "Happy theming! 🎉" -ForegroundColor Green
} else {
    Write-Host "✗ Failed to start Keycloak!" -ForegroundColor Red
    Write-Host "Check the error messages above." -ForegroundColor Red
}
