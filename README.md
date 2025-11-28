# 🎨 Keycloak Custom Theme Tutorial - MyTheme

This project implements the complete [Keycloak Theme Customization Tutorial](https://www.keycloak.org/ui-customization/themes) with a ready-to-run Docker setup for easy testing and experimentation.

## 📋 What's Included

This tutorial implementation includes:

- ✅ **Custom Login Theme** with styled pages
- ✅ **Custom CSS** with gradient backgrounds and modern styling
- ✅ **Custom JavaScript** with animations and interactive features
- ✅ **Custom HTML Templates** (login.ftl, footer.ftl)
- ✅ **Custom Email Templates** with branded messages
- ✅ **Custom Logo** (SVG)
- ✅ **Docker Setup** for instant local testing
- ✅ **Development Mode** with caching disabled for live theme editing

## 🚀 Quick Start

### Prerequisites

- Docker and Docker Compose installed on your system
- A web browser

### Running Keycloak with MyTheme

1. **Start Keycloak:**
   ```powershell
   docker-compose up -d
   ```

2. **Wait for Keycloak to start** (about 30-60 seconds). Check status:
   ```powershell
   docker-compose logs -f keycloak
   ```
   Wait for the message: "Listening on: http://0.0.0.0:8080"

3. **Access Keycloak Admin Console:**
   - URL: http://localhost:8080
   - Username: `admin`
   - Password: `admin`

4. **Configure the Theme:**
   - Login to Admin Console
   - Click on the realm dropdown (top-left) and select "Create Realm"
   - Name it "mytheme-demo" and click "Create"
   - Go to **Realm Settings** → **Themes** tab
   - Set **Login Theme** to `mytheme`
   - Set **Email Theme** to `mytheme`
   - Set **Account Theme** to `mytheme` (optional)
   - Click **Save**

5. **View Your Custom Theme:**
   - Open: http://localhost:8080/realms/mytheme-demo/account
   - You'll be redirected to the login page with your custom theme! 🎉

## 🎯 What You'll See

### Custom Login Page Features:
- **Beautiful gradient background** (purple to violet)
- **Animated form entrance**
- **Floating particles** background effect
- **Custom styling** for inputs and buttons
- **Caps Lock warning** on password field
- **Custom footer** with links
- **Welcome header** with emoji
- **Smooth hover effects**

### Custom Email Templates:
- Branded password reset emails
- HTML formatted with gradient buttons
- Custom messaging

## 📁 Project Structure

```
kc-extend-theme/
├── docker-compose.yml          # Docker setup with dev mode enabled
├── themes/
│   └── mytheme/
│       ├── login/              # Login theme
│       │   ├── theme.properties    # Theme configuration
│       │   ├── login.ftl          # Custom login template
│       │   ├── footer.ftl         # Custom footer
│       │   ├── resources/
│       │   │   ├── css/
│       │   │   │   └── styles.css # Custom styles
│       │   │   ├── js/
│       │   │   │   └── script.js  # Custom JavaScript
│       │   │   └── img/
│       │   │       └── logo.svg   # Custom logo
│       ├── email/              # Email theme
│       │   ├── theme.properties
│       │   └── messages/
│       │       └── messages_en.properties
│       └── account/            # Account console theme
│           └── theme.properties
└── README.md
```

## 🛠️ Development & Customization

### Live Theme Editing

The Docker setup has **caching disabled**, so you can edit theme files and see changes immediately:

1. Edit any file in `themes/mytheme/`
2. Refresh your browser (Ctrl+F5 for hard refresh)
3. Changes appear instantly!

### Customization Ideas

#### Change Colors (CSS)
Edit `themes/mytheme/login/resources/css/styles.css`:
```css
.login-pf body {
    background: linear-gradient(135deg, #YOUR_COLOR_1 0%, #YOUR_COLOR_2 100%);
}
```

#### Modify JavaScript Behavior
Edit `themes/mytheme/login/resources/js/script.js`:
- Adjust particle count
- Change animation speeds
- Add new interactive features

#### Customize Templates
Edit `themes/mytheme/login/login.ftl`:
- Change the welcome message
- Modify form layout
- Add custom HTML elements

#### Update Footer
Edit `themes/mytheme/login/footer.ftl`:
- Add/remove links
- Change copyright text
- Add social media links

## 📚 Tutorial Features Implemented

Based on the official Keycloak documentation:

- ✅ Creating a theme (mytheme)
- ✅ Setting theme properties
- ✅ Extending parent themes (keycloak base)
- ✅ Adding custom stylesheets
- ✅ Adding custom scripts
- ✅ Creating custom HTML templates (FreeMarker)
- ✅ Adding custom footer
- ✅ Customizing email messages
- ✅ Adding images/logos
- ✅ Development mode setup

## 🔧 Useful Commands

### Docker Management
```powershell
# Start Keycloak
docker-compose up -d

# View logs
docker-compose logs -f keycloak

# Stop Keycloak
docker-compose down

# Restart Keycloak
docker-compose restart

# Stop and remove all data (fresh start)
docker-compose down -v
```

### Testing Different Scenarios

**Test Password Reset Email:**
1. Create a test user in Admin Console
2. Click "Forgot Password" on login page
3. Check Docker logs to see the email content (in dev mode, emails are logged)

**Test User Registration:**
1. Go to Realm Settings → Login
2. Enable "User registration"
3. Visit login page and click "Register"

## 🎓 Learning Path

If you're learning Keycloak theming, try these exercises:

1. **Beginner:**
   - Change the background color
   - Modify the welcome message
   - Add a new footer link

2. **Intermediate:**
   - Add a custom logo image
   - Create a light/dark theme toggle
   - Style the registration page

3. **Advanced:**
   - Create conditional styling based on realm
   - Add multi-language support
   - Implement custom form validation

## 🐛 Troubleshooting

**Theme not appearing:**
- Ensure Docker container is running: `docker-compose ps`
- Check theme is selected in Realm Settings → Themes
- Try hard refresh (Ctrl+F5)

**Changes not showing:**
- Verify caching is disabled in docker-compose.yml
- Check file paths match exactly (case-sensitive)
- Restart Docker container: `docker-compose restart`

**Cannot access admin console:**
- Wait 60 seconds after starting
- Check logs: `docker-compose logs keycloak`
- Verify port 8080 is not in use

## 📖 Additional Resources

- [Official Keycloak Theme Documentation](https://www.keycloak.org/ui-customization/themes)
- [FreeMarker Template Documentation](https://freemarker.apache.org/docs/)
- [Keycloak Quickstarts](https://github.com/keycloak/keycloak-quickstarts)
- [PatternFly Design System](https://www.patternfly.org/) (used by Keycloak)

## 🚀 Production Deployment

To package this theme for production use:

```powershell
# Build the JAR file
.\build-jar.ps1
```

This creates `dist/keycloak-theme-notjustanna.jar` which you can deploy to production:

1. Copy the JAR to your Keycloak server's `providers/` directory
2. Run `bin/kc.sh build` (or restart Keycloak)
3. Select the theme in Admin Console

**For detailed deployment instructions**, see [DEPLOYMENT.md](DEPLOYMENT.md)

## 🎉 Next Steps

After mastering this tutorial:
- Explore the Admin Console theme customization
- Learn about theme deployment in production (JAR archives)
- Study the Theme SPI for advanced customization
- Create themes for specific clients
- Implement dark mode variants

## 📝 Notes

- This setup uses **development mode** for easy testing
- Admin credentials are `admin/admin` - **NEVER use in production**
- Themes are mounted as volumes for live editing
- H2 database is used (dev-file mode)
- For production, see official Keycloak deployment guides

## 💡 Tips

- Use browser DevTools to inspect Keycloak's default styles
- Check `themes/keycloak/login/` for base theme reference
- Test on multiple browsers for compatibility
- Keep backups of working theme versions
- Document your customizations

---

**Happy Theming! 🎨**

Created following the official [Keycloak Theme Tutorial](https://www.keycloak.org/ui-customization/themes)
