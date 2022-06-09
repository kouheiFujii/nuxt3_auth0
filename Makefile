#!make

AWS_ACCOUNT_ID := 000000000000
REGISTRY_DOMAIN := dkr.ecr.ap-northeast-1.amazonaws.com
REPOSITORY_NAME := nuxt3-auth0

IMAGE_NAME := ${AWS_ACCOUNT_ID}.${REGISTRY_DOMAIN}/${REPOSITORY_NAME}

.PHONY: aws.ecr.login
aws.ecr.login: # AWS ECR Login
	@aws ecr get-login-password --region ap-northeast-1 | \
		docker login \
			--username AWS \
			--password-stdin ${AWS_ACCOUNT_ID}.${REGISTRY_DOMAIN}

.PHONY: image.build
image.build: # Docker image build.
	@docker build --no-cache \
		-t ${IMAGE_NAME}:latest \
		.

.PHONY: image.run
image.run: # Run docker image.
	@docker run --rm -it -p 3000:3000 --env-file .env ${IMAGE_NAME}:latest


.PHONY: image.push
image.push: # Image push
	@docker push ${IMAGE_NAME}:latest
