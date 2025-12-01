# Keycloak Custom Theme

A custom Keycloak theme built with Tailwind CSS and Lucide icons for modern, beautiful authentication pages.

## Features

- 🎨 **Tailwind CSS** - Utility-first styling with Tailwind v4
- 🎭 **Lucide Icons** - Beautiful icon font integration
- 🔄 **Hot Reload** - Fast development with watch mode
- 🐳 **Docker Ready** - Includes Docker Compose setup for testing
- 📦 **JAR Export** - Build production-ready theme archives

## Prerequisites

- **Node.js** (v18 or higher)
- **Docker** (for local testing)
- **JDK** (for building JAR files)

## Quick Start

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Start development mode**
   ```bash
   npm run dev
   ```

3. **Start Keycloak**
   ```bash
   npm start
   ```

4. **Access Keycloak**
   - URL: http://localhost:8080
   - Admin: `admin` / `admin`

## Project Structure

```
kc-extend-theme/
├── src/
│   ├── config/
│   │   ├── tailwind.css      # Tailwind configuration
│   │   └── custom.css        # Custom styles
│   └── resources/
│       ├── META-INF/          # JAR metadata
│       └── theme/
│           └── notjustanna/   # Theme name
│               └── login/     # Login theme files
├── dist/                      # Build output
├── scripts/
│   ├── build.mjs             # Build script
│   └── build-jar.mjs         # JAR packaging script
└── docker-compose.yml        # Local Keycloak setup
```

## Development

### Watch Mode

Automatically rebuilds theme files and CSS on changes:

```bash
npm run dev
```

This will:
- Copy theme files to `dist/`
- Copy Lucide icon fonts
- Run Tailwind in watch mode
- Auto-sync file changes

### Production Build

Build optimized theme files:

```bash
npm run build
```

### Build JAR

Create a deployable JAR file:

```bash
npm run jar
```

Output: `dist/keycloak-theme-notjustanna.jar`

## Deployment

### Local Testing (Docker)

The included Docker Compose configuration:
- Runs Keycloak 26.0
- Mounts `dist/theme` directory
- Disables theme caching for development
- Exposes port 8080

```bash
npm start
```

### Production Deployment

1. Build the JAR:
   ```bash
   npm run jar
   ```

2. Deploy to Keycloak:
   - Copy `dist/keycloak-theme-notjustanna.jar` to Keycloak's `providers/` directory
   - Restart Keycloak
   - Select theme in realm settings

## Customization

### Theme Name

The theme name is auto-detected from the directory in `src/resources/theme/`. To rename:

1. Rename `src/resources/theme/notjustanna/` to your theme name
2. Rebuild the theme

### Styling

- **Tailwind**: Edit `src/config/tailwind.css`
- **Custom CSS**: Edit `src/config/custom.css`
- **Templates**: Modify files in `src/resources/theme/[theme-name]/login/`

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Watch mode for development |
| `npm run build` | Build theme once |
| `npm run jar` | Build deployable JAR |
| `npm start` | Start Keycloak with Docker |

## Technologies

- [Keycloak](https://www.keycloak.org/) - Identity and access management
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Lucide Icons](https://lucide.dev/) - Beautiful icon library
- [Docker](https://www.docker.com/) - Containerization

## License

This project is private and not licensed for public use.
