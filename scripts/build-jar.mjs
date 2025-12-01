import { execSync } from 'child_process';
import { mkdirSync, cpSync, rmSync, existsSync, readdirSync } from 'fs';
import { join } from 'path';

// Auto-detect theme
const themeName = readdirSync('src/resources/theme', { withFileTypes: true })
  .filter(d => d.isDirectory())[0]?.name;

if (!themeName) {
  console.error('✗ No theme found in src/resources/theme/');
  process.exit(1);
}

const JAR_NAME = `keycloak-theme-${themeName}.jar`;

console.log(`📦 Building JAR: ${themeName}\n`);

// Build theme first
execSync('node scripts/build.mjs build', { stdio: 'inherit' });

// Check for jar command
try {
  execSync('jar --version', { stdio: 'pipe' });
} catch {
  console.error('✗ JAR tool not found! Install JDK from https://adoptium.net/');
  process.exit(1);
}

// Create build directory
const buildDir = 'build-temp';
if (existsSync(buildDir)) rmSync(buildDir, { recursive: true, force: true });
mkdirSync(buildDir, { recursive: true });

// Copy files
cpSync('src/resources/META-INF', join(buildDir, 'META-INF'), { recursive: true });
mkdirSync(join(buildDir, 'theme'), { recursive: true });
cpSync(join('dist/theme', themeName), join(buildDir, 'theme', themeName), { recursive: true });

// Create JAR
mkdirSync('dist', { recursive: true });
execSync(`jar -cf ../dist/${JAR_NAME} *`, { cwd: buildDir, stdio: 'inherit' });
rmSync(buildDir, { recursive: true, force: true });

console.log(`\n✅ JAR created: dist/${JAR_NAME}\n`);

