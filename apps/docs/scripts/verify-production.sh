#!/bin/bash

# Production CSS Verification Script
# This script helps verify that CSS is properly loading in production

echo "🔍 Verifying production build..."

# Check if .next directory exists
if [ ! -d ".next" ]; then
    echo "❌ .next directory not found. Run 'npm run build' first."
    exit 1
fi

echo "✅ .next directory found"

# Check if CSS files are generated
CSS_FILES=$(find .next/static/css -name "*.css" 2>/dev/null | wc -l)
if [ "$CSS_FILES" -eq 0 ]; then
    echo "❌ No CSS files found in .next/static/css"
    echo "This indicates a CSS generation problem."
else
    echo "✅ Found $CSS_FILES CSS files in build"
fi

# Check if CSS contains ForteUI variables
if grep -r "color-primary-main" .next/static/css/ 2>/dev/null; then
    echo "✅ ForteUI CSS variables found in production build"
else
    echo "❌ ForteUI CSS variables NOT found in production build"
    echo "This is likely the cause of the styling issues in production."
fi

# Check for potential CSS import issues
echo "🔍 Checking for CSS import patterns..."
if grep -r "@import" .next/static/css/ 2>/dev/null; then
    echo "⚠️  Found @import statements in production CSS - this might cause loading issues"
else
    echo "✅ No @import statements in production CSS (good)"
fi

# Start production server for local testing
echo "🚀 Starting production server for testing..."
echo "Visit http://localhost:3000 to test the production build locally"
echo "Compare the appearance with your deployed version"

npm run start
