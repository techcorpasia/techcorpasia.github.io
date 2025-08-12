#!/bin/bash

# Tech Corp Asia Website Deployment Script
# This script helps build and deploy the website to production

echo "🚀 Starting Tech Corp Asia Website Deployment..."

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js first."
    exit 1
fi

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed. Please install npm first."
    exit 1
fi

echo "✅ Node.js and npm are installed"

# Install dependencies
echo "📦 Installing dependencies..."
npm install

if [ $? -ne 0 ]; then
    echo "❌ Failed to install dependencies"
    exit 1
fi

echo "✅ Dependencies installed successfully"

# Run linting
echo "🔍 Running linting..."
npm run lint

if [ $? -ne 0 ]; then
    echo "⚠️  Linting found issues, but continuing with build..."
fi

# Build the project
echo "🏗️  Building the project..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Build failed"
    exit 1
fi

echo "✅ Build completed successfully"

# Check if .next directory exists
if [ ! -d ".next" ]; then
    echo "❌ Build directory not found"
    exit 1
fi

echo "🎉 Deployment preparation completed!"
echo ""
echo "📋 Next steps:"
echo "1. For Vercel deployment:"
echo "   - Push your code to GitHub"
echo "   - Connect your repository to Vercel"
echo "   - Deploy automatically"
echo ""
echo "2. For manual deployment:"
echo "   - Copy the .next directory to your server"
echo "   - Run: npm start"
echo ""
echo "3. For static export (if needed):"
echo "   - Add 'export' to next.config.js"
echo "   - Run: npm run export"
echo ""
echo "🌐 Your website is ready for deployment!"
echo "📧 Contact: info@techcorpasia.com"
echo "📞 Phone: +1 (555) 123-4567" 