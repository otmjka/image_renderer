# Image Renderer

## Getting started

```sh
# Initialize docker-compose
docker-compose -f docker-compose.dev.yml up -d

# copy environment config
cp .env.example .env

# install dependencies
yarn

# launch the service
yarn start
```

## Advanced

Build **for local environment**:

```bash
$ docker build -t image-renderer:dev --network="host" \
--build-arg NODE_ENV=development \
--build-arg RUN_ESLINT=true \
--build-arg RUN_JEST=true \
--build-arg DATABASE_HOST=127.0.0.1 \
--build-arg DATABASE_PORT=3306 \
--build-arg DATABASE_NAME=wuway \
--build-arg DATABASE_USER=root \
--build-arg DATABASE_PASSWORD= \
.
```

Deployment:

```bash
TARGET=staging TAG_NAME=xxx sh scripts/deploy.sh
```

## FAQ

### How to fail with an error code?

```js
import createError from 'http-errors';

return next(createError(400, { code: 'bannedProfileId.invalid' }));
```
