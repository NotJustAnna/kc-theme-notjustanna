import { mkdirSync, cpSync, existsSync, rmSync, watch, readdirSync } from 'fs';
import { join } from 'path';
import { spawn, execSync } from 'child_process';

const THEME_DIR = 'src/resources/theme';
const DIST_DIR = 'dist/theme';
const LUCIDE_FONT_SRC = 'node_modules/lucide-static/font';

// Auto-detect theme
const themeName = readdirSync(THEME_DIR, { withFileTypes: true })
  .filter(d => d.isDirectory())[0]?.name;

if (!themeName) {
  console.error('✗ No theme found in src/resources/theme/');
  process.exit(1);
}

const SRC_THEME = join(THEME_DIR, themeName);
const DIST_THEME = join(DIST_DIR, themeName);
const LUCIDE_FONT_DEST = join(DIST_THEME, 'login/resources/vendor/lucide');
const CSS_OUTPUT = join(DIST_THEME, 'login/resources/css/tw-build.css');

// Get mode from CLI args
const mode = process.argv[2]; // 'build' or 'watch'

if (mode === 'watch') {
  watchMode();
} else {
  buildOnce();
}

function buildOnce() {
  console.log(`🔨 Building theme: ${themeName}\n`);
  copyTheme();
  copyLucideFont();
  buildCSS();
  console.log('\n✅ Build complete!\n');
}

function watchMode() {
  console.log(`👀 Watching theme: ${themeName}\n`);
  
  // Initial build
  copyTheme();
  copyLucideFont();
  
  // Start Tailwind in watch mode
  const tailwind = spawn('npx', ['tailwindcss', '--input', 'src/config/tailwind.css', '--output', CSS_OUTPUT, '--watch'], {
    stdio: 'inherit',
    shell: true
  });
  
  let debounceTimer = null;
  
  // Watch source files
  watch(SRC_THEME, { recursive: true }, (eventType, filename) => {
    if (!filename) return;
    console.log(`📝 Changed: ${filename}`);
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => syncFile(filename), 100);
  });
  
  process.on('SIGINT', () => {
    console.log('\n👋 Stopping...');
    tailwind.kill();
    process.exit(0);
  });
}

function buildCSS() {
  console.log('🎨 Building CSS...');
  execSync(`npx tailwindcss --input src/config/tailwind.css --output ${CSS_OUTPUT} --minify`, {
    stdio: 'inherit'
  });
}

function copyTheme() {
  console.log('📦 Copying theme...');
  
  if (existsSync(DIST_THEME)) {
    rmSync(DIST_THEME, { recursive: true, force: true });
  }
  mkdirSync(DIST_THEME, { recursive: true });
  cpSync(SRC_THEME, DIST_THEME, { recursive: true });
  
  console.log('✓ Theme copied');
}

function copyLucideFont() {
  console.log('🔤 Copying Lucide font...');
  
  if (existsSync(LUCIDE_FONT_DEST)) {
    rmSync(LUCIDE_FONT_DEST, { recursive: true, force: true });
  }
  mkdirSync(LUCIDE_FONT_DEST, { recursive: true });
  cpSync(LUCIDE_FONT_SRC, LUCIDE_FONT_DEST, { recursive: true });
  
  console.log('✓ Lucide font copied');
}

function syncFile(filename) {
  const srcPath = join(SRC_THEME, filename);
  const distPath = join(DIST_THEME, filename);
  
  // Don't touch the generated CSS file
  if (filename.includes('tw-build.css')) {
    return;
  }
  
  // If file was deleted
  if (!existsSync(srcPath)) {
    if (existsSync(distPath)) {
      rmSync(distPath, { recursive: true, force: true });
      console.log(`✓ Removed ${filename}`);
    }
    return;
  }
  
  // Copy/update file
  const distDir = join(DIST_THEME, filename.split(/[/\\]/).slice(0, -1).join('/'));
  mkdirSync(distDir, { recursive: true });
  cpSync(srcPath, distPath, { recursive: true });
  console.log(`✓ Synced ${filename}`);
}
