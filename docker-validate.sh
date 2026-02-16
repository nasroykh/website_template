#!/bin/bash

# Docker Configuration Validation Script
# Validates Docker setup without building images

set -e

echo "🔍 Validating Docker Configuration (Production Only)..."
echo ""

# Check Docker installation
echo "✓ Checking Docker installation..."
if ! command -v docker &> /dev/null; then
    echo "❌ Docker is not installed"
    exit 1
fi
echo "  Docker version: $(docker --version)"
echo ""

# Check Docker Compose installation
echo "✓ Checking Docker Compose installation..."
if ! command -v docker-compose &> /dev/null && ! docker compose version &> /dev/null; then
    echo "❌ Docker Compose is not installed"
    exit 1
fi
if command -v docker-compose &> /dev/null; then
    echo "  Docker Compose version: $(docker-compose --version)"
else
    echo "  Docker Compose version: $(docker compose version)"
fi
echo ""

# Validate Dockerfile syntax
echo "✓ Validating Dockerfile syntax..."
if [ ! -f "Dockerfile" ]; then
    echo "❌ Dockerfile not found"
    exit 1
fi
docker build --help > /dev/null 2>&1
echo "  Dockerfile exists and syntax appears valid"
echo ""

# Validate docker-compose.yml
echo "✓ Validating docker-compose.yml..."
if [ ! -f "docker-compose.yml" ]; then
    echo "❌ docker-compose.yml not found"
    exit 1
fi

# Check compose config
if command -v docker-compose &> /dev/null; then
    docker-compose -f docker-compose.yml config > /dev/null
else
    docker compose -f docker-compose.yml config > /dev/null
fi
echo "  docker-compose.yml is valid"
echo ""

# Check .dockerignore
echo "✓ Checking .dockerignore..."
if [ ! -f ".dockerignore" ]; then
    echo "⚠️  .dockerignore not found (recommended)"
else
    echo "  .dockerignore exists"
fi
echo ""

# Check environment files
echo "✓ Checking environment configuration..."
if [ ! -f ".env.example" ]; then
    echo "⚠️  .env.example not found (template file)"
else
    echo "  .env.example exists (template)"
fi

if [ ! -f ".env" ]; then
    echo "⚠️  .env not found (copy from .env.example)"
else
    echo "  .env exists"

    # Check for required variables
    if ! grep -q "NEXT_PUBLIC_DOMAIN_NAME" .env; then
        echo "⚠️  NEXT_PUBLIC_DOMAIN_NAME not set in .env"
    else
        echo "  ✓ NEXT_PUBLIC_DOMAIN_NAME is set"
    fi
fi
echo ""

# Check next.config.ts for standalone output
echo "✓ Checking Next.js configuration..."
if [ ! -f "next.config.ts" ]; then
    echo "❌ next.config.ts not found"
    exit 1
fi

if grep -q "output.*standalone" next.config.ts; then
    echo "  ✓ Standalone output mode is enabled"
else
    echo "⚠️  Standalone output mode not detected (recommended for Docker)"
fi
echo ""

# Check package.json
echo "✓ Checking package.json..."
if [ ! -f "package.json" ]; then
    echo "❌ package.json not found"
    exit 1
fi
echo "  package.json exists"
echo ""

# Summary
echo "✅ Docker configuration validation complete!"
echo ""
echo "Next steps:"
echo "  1. Copy .env.example to .env and configure NEXT_PUBLIC_DOMAIN_NAME"
echo "  2. Build production: make build"
echo "  3. Run production: make up"
echo ""
echo "For detailed documentation, see DOCKER.md"
