#!make

.PHONY: image.build
image.build: # Docker image build.
	@docker build --no-cache \
		-t nuxt_auth:latest \
		.
