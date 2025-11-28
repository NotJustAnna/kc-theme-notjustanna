# Makefile for building Keycloak theme JAR
# For use on Linux/Mac or Windows with Make installed

THEME_NAME = notjustanna
JAR_NAME = keycloak-theme-$(THEME_NAME).jar
BUILD_DIR = build-temp
DIST_DIR = dist

.PHONY: all clean build help

all: build

help:
	@echo "Keycloak Theme Build System"
	@echo ""
	@echo "Usage:"
	@echo "  make build    - Build the theme JAR"
	@echo "  make clean    - Remove build artifacts"
	@echo "  make help     - Show this help message"

build: clean
	@echo "🎨 Building Keycloak Theme JAR..."
	@mkdir -p $(BUILD_DIR)/theme
	@mkdir -p $(DIST_DIR)
	
	@echo "📦 Copying META-INF..."
	@cp -r META-INF $(BUILD_DIR)/
	
	@echo "📦 Copying theme files..."
	@cp -r themes/$(THEME_NAME) $(BUILD_DIR)/theme/
	
	@echo "🔨 Creating JAR file..."
	@cd $(BUILD_DIR) && jar -cf ../$(DIST_DIR)/$(JAR_NAME) *
	
	@echo "🧹 Cleaning up..."
	@rm -rf $(BUILD_DIR)
	
	@echo ""
	@echo "✅ SUCCESS!"
	@echo "JAR file created: $(DIST_DIR)/$(JAR_NAME)"
	@ls -lh $(DIST_DIR)/$(JAR_NAME)
	@echo ""
	@echo "📋 Next steps:"
	@echo "1. Copy $(JAR_NAME) to Keycloak providers/ directory"
	@echo "2. Run: bin/kc.sh build"
	@echo "3. Restart Keycloak"

clean:
	@echo "🧹 Cleaning build artifacts..."
	@rm -rf $(BUILD_DIR)
	@rm -rf $(DIST_DIR)
	@echo "✓ Clean complete"
