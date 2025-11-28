# 🚀 Production Deployment Guide

This guide explains how to package and deploy the theme to a production Keycloak instance.

## Building the JAR

### Prerequisites
- JDK (Java Development Kit) installed
- The `jar` command available in your PATH

### Build Steps

**Windows (PowerShell):**
```powershell
.\build-jar.ps1
```

**Linux/Mac (Manual):**
```bash
# Create build directory
mkdir -p build-temp/theme
mkdir -p dist

# Copy files
cp -r META-INF build-temp/
cp -r themes/notjustanna build-temp/theme/

# Create JAR
cd build-temp
jar -cf ../dist/keycloak-theme-notjustanna.jar *
cd ..

# Cleanup
rm -rf build-temp
```

The JAR file will be created in the `dist/` directory.

## Deploying to Keycloak

### Method 1: Using the providers/ directory (Recommended)

1. **Copy the JAR file** to your Keycloak server:
   ```bash
   scp dist/keycloak-theme-notjustanna.jar user@keycloak-server:/opt/keycloak/providers/
   ```

2. **Rebuild Keycloak** (Quarkus build):
   ```bash
   cd /opt/keycloak
   bin/kc.sh build
   ```

3. **Restart Keycloak**:
   ```bash
   # If using systemd
   sudo systemctl restart keycloak
   
   # Or manually
   bin/kc.sh start
   ```

4. **Configure in Admin Console**:
   - Login to Keycloak Admin Console
   - Select your realm
   - Go to **Realm Settings** → **Themes**
   - Set **Login Theme** to `notjustanna`
   - Click **Save**

### Method 2: Docker Deployment

**Add to Dockerfile:**
```dockerfile
FROM quay.io/keycloak/keycloak:26.0

# Copy theme JAR
COPY dist/keycloak-theme-notjustanna.jar /opt/keycloak/providers/

# Build Keycloak with the theme
RUN /opt/keycloak/bin/kc.sh build

# ... rest of your Dockerfile
```

**Or using docker-compose:**
```yaml
services:
  keycloak:
    image: quay.io/keycloak/keycloak:26.0
    volumes:
      - ./dist/keycloak-theme-notjustanna.jar:/opt/keycloak/providers/keycloak-theme-notjustanna.jar
    command:
      - start
      - --optimized
    # ... rest of your config
```

### Method 3: Kubernetes Deployment

**Using an init container:**
```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: keycloak
spec:
  template:
    spec:
      initContainers:
        - name: theme-provider
          image: busybox
          command: ['sh', '-c', 'cp /theme/keycloak-theme-notjustanna.jar /providers/']
          volumeMounts:
            - name: theme
              mountPath: /theme
            - name: providers
              mountPath: /providers
      containers:
        - name: keycloak
          image: quay.io/keycloak/keycloak:26.0
          volumeMounts:
            - name: providers
              mountPath: /opt/keycloak/providers
      volumes:
        - name: theme
          configMap:
            name: keycloak-theme
        - name: providers
          emptyDir: {}
```

## Verification

After deployment, verify the theme is loaded:

1. **Check Keycloak logs** for theme loading:
   ```bash
   # Look for theme registration messages
   tail -f /opt/keycloak/data/log/keycloak.log
   ```

2. **Admin Console**:
   - The theme should appear in the dropdown under Realm Settings → Themes
   - Theme name: `notjustanna`

3. **Test the login page**:
   - Navigate to: `https://your-keycloak/realms/your-realm/account`
   - You should see the custom theme with the daily rotating wallpaper

## Troubleshooting

### Theme not appearing in dropdown
- Ensure the JAR is in the correct location: `/opt/keycloak/providers/`
- Run `bin/kc.sh build` to rebuild Keycloak
- Restart Keycloak completely
- Check file permissions on the JAR file

### Theme loads but assets are missing
- Verify the JAR structure:
  ```bash
  jar -tf keycloak-theme-notjustanna.jar
  ```
- Should contain:
  - `META-INF/keycloak-themes.json`
  - `theme/notjustanna/login/theme.properties`
  - `theme/notjustanna/login/resources/css/styles.css`
  - `theme/notjustanna/login/resources/js/script.js`

### Wallpaper not loading
- Check browser console for CORS or network errors
- Verify the wallpaper URLs are accessible from the client browser
- Check if a Content Security Policy is blocking external images

### After updating the theme
1. Rebuild the JAR: `.\build-jar.ps1`
2. Replace the JAR in `providers/`
3. Run: `bin/kc.sh build`
4. Restart Keycloak
5. Clear browser cache (Ctrl+Shift+R)

## Production Considerations

### Performance
- The theme uses external CDN URLs for wallpapers
- Consider hosting wallpapers on your own CDN for better control
- Minify CSS/JS for production (currently not minified)

### Security
- External wallpaper URLs use HTTPS
- Review Content Security Policy settings
- Ensure external resources are from trusted sources

### Caching
- In production, Keycloak caches themes by default
- To update the theme, you must rebuild and restart
- Browser caching: Users may need to clear cache to see updates

### Customization for Production
Before deploying, consider:
- Removing development console.log statements from `script.js`
- Customizing wallpaper list to your organization's images
- Setting a specific wallpaper instead of daily rotation
- Adding organization branding to the footer

## JAR File Structure

The JAR should have this structure:
```
keycloak-theme-notjustanna.jar
├── META-INF/
│   └── keycloak-themes.json
└── theme/
    └── notjustanna/
        └── login/
            ├── theme.properties
            ├── resources/
            │   ├── css/
            │   │   └── styles.css
            │   └── js/
            │       └── script.js
            └── (other template files if any)
```

## Version Management

Consider versioning your theme JAR:
- `keycloak-theme-notjustanna-1.0.0.jar`
- Update the build script to include version numbers
- Keep old versions for rollback capability

## Monitoring

After deployment, monitor:
- Keycloak startup time (theme loading impact)
- Login page load time
- Browser console errors
- User feedback on theme appearance

---

**Need help?** Check the main README.md for development setup and customization options.
