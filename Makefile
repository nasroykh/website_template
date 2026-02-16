.PHONY: help build up down logs restart clean validate build-prod shell test-build

# Default target
help: ## Show this help message
	@echo 'Usage: make [target]'
	@echo ''
	@echo 'Available targets:'
	@awk 'BEGIN {FS = ":.*?## "} /^[a-zA-Z_-]+:.*?## / {printf "  %-20s %s\n", $$1, $$2}' $(MAKEFILE_LIST)

# Production targets
build: ## Build production Docker image (ignore cache errors on first build)
	@docker compose build 2>&1 | grep -v "importing cache manifest" || docker compose build

up: ## Start production containers in detached mode
	docker compose up -d

down: ## Stop and remove production containers
	docker compose down

logs: ## View production container logs
	docker compose logs -f

restart: ## Restart production containers
	make down && make up

ps: ## Show running containers
	docker compose ps

# Build targets
build-prod: ## Build production image only (no compose)
	docker build \
		--build-arg NEXT_PUBLIC_DOMAIN_NAME=$${NEXT_PUBLIC_DOMAIN_NAME:-example.com} \
		-t website-template:latest \
		.

test-build: ## Test build without caching
	docker build --no-cache \
		--build-arg NEXT_PUBLIC_DOMAIN_NAME=test.com \
		-t website-template:test \
		.

# Utility targets
shell: ## Open shell in running production container
	docker compose exec app sh

validate: ## Validate Docker configuration
	@chmod +x docker-validate.sh
	@./docker-validate.sh

clean: ## Remove containers, images, and volumes
	docker compose down -v
	docker rmi website-template:latest 2>/dev/null || true

prune: ## Clean up all unused Docker resources
	docker system prune -a --volumes -f

# Health and monitoring
health: ## Check container health status
	docker compose ps
	docker inspect website-template --format='{{.State.Health.Status}}' 2>/dev/null || echo "Container not running"

stats: ## Show container resource usage
	docker stats website-template --no-stream 2>/dev/null || echo "Container not running"

# Security scanning
scan: ## Scan production image for vulnerabilities (requires Docker Scout)
	docker scout quickview website-template:latest 2>/dev/null || echo "Docker Scout not available"

# Multi-architecture builds
buildx-setup: ## Set up buildx for multi-arch builds
	docker buildx create --name multiarch --use || true
	docker buildx inspect --bootstrap

buildx-build: ## Build multi-architecture image (amd64, arm64)
	docker buildx build \
		--platform linux/amd64,linux/arm64 \
		--build-arg NEXT_PUBLIC_DOMAIN_NAME=$${NEXT_PUBLIC_DOMAIN_NAME:-example.com} \
		-t website-template:latest \
		.

# Environment setup
env-setup: ## Copy .env.example to .env if .env doesn't exist
	@if [ ! -f .env ]; then \
		cp .env.example .env; \
		echo "Created .env from .env.example"; \
		echo "Please update NEXT_PUBLIC_DOMAIN_NAME in .env"; \
	else \
		echo ".env already exists"; \
	fi
