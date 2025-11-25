#!/bin/bash
# ===========================================
# Next.js Deployment Script for aaPanel
# Run this AFTER uploading the two zip files
# to /www/wwwroot/frontend/
# ===========================================

set -e

echo "=== Step 1: Installing Node.js 20 ==="
if ! command -v node &> /dev/null; then
    curl -fsSL https://deb.nodesource.com/setup_20.x | sudo bash -
    sudo apt-get install -y nodejs
else
    echo "Node.js already installed: $(node -v)"
fi

echo "=== Step 2: Installing PM2 ==="
if ! command -v pm2 &> /dev/null; then
    sudo npm install -g pm2
else
    echo "PM2 already installed"
fi

echo "=== Step 3: Setting up frontend ==="
cd /www/wwwroot/frontend

echo "Extracting files..."
unzip -o frontend-deploy.zip
mkdir -p .next
unzip -o frontend-static.zip -d .next/

echo "=== Step 4: Creating .env ==="
cat > .env << 'EOF'
NEXT_PUBLIC_WORDPRESS_URL=https://cms.pagcorcasino.ph
EOF

echo "=== Step 5: Updating PM2 config path ==="
sed -i "s|/www/wwwroot/pagcorcasino.ph/frontend|/www/wwwroot/frontend|g" ecosystem.config.js

echo "=== Step 6: Starting app with PM2 ==="
pm2 delete review-platform 2>/dev/null || true
pm2 start ecosystem.config.js
pm2 save
pm2 startup

echo ""
echo "=== DONE ==="
echo "Next.js is running on port 3000"
echo ""
echo "REMAINING MANUAL STEPS IN AAPANEL:"
echo "1. Add site 'cms.pagcorcasino.ph' pointing to your WordPress directory"
echo "2. Add DNS A record for cms.pagcorcasino.ph -> your server IP"
echo "3. Update pagcorcasino.ph Nginx config to proxy to port 3000"
echo "4. Update WordPress URLs in wp-admin to cms.pagcorcasino.ph"
echo "5. Request SSL cert for cms.pagcorcasino.ph in aaPanel"
