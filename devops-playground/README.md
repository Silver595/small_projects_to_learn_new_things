# DevOps Playground (Python multi-service)

This workspace contains a minimal scaffold for practicing DevOps & Docker workflows with two Python services:

- `service-api` — FastAPI HTTP service
- `service-worker` — simple background worker

Included:
- Dockerfiles and `docker-compose.yml` (added next)
- GitHub Actions CI (lint & tests)
- VS Code devcontainer for reproducible development
- Makefile for common commands

How to use (local):

1. Build and start services with docker-compose (after Dockerfiles are added):
   ```sh
   make build
   make up
   ```
2. Run tests:
   ```sh
   make test
   ```

I'll add Dockerfiles, docker-compose, CI, and devcontainer next. You can add this to a repo later when you're ready.