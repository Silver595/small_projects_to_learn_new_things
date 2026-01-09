# Simple Makefile for common tasks
.PHONY: build up down logs test lint

build:
	docker compose build

up:
	docker compose up -d --remove-orphans

down:
	docker compose down

logs:
	docker compose logs -f

test:
	pytest -q

lint:
	ruff check .
