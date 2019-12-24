# Image Renderer

## Getting started

```sh
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
--build-arg RUN_JEST=true
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
