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

## Useing example

`src/digest/enums.js`

```
colors = {
  green: '#12D600',
  pink: '#FF3666',
  violet: '#5E40DD',
  yellow: '#FFC800',
  gray: '#EDEFF2',
  black: '#000',
  white: '#FFF'
};
```

```
colors.green, // 0
colors.pink, // 1
colors.violet, // 2
colors.yellow, // 3
colors.gray, // 4
colors.black, // 5
colors.white // 6
```

### routes

```
app.get('/proba', (req, res, next) => {
  res.sendfile(path.join(__dirname, './index.html'));
});
```

#### html

```
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>Моя тестовая страница</title>
  </head>
  <body>
    <img
      src="/user-weekly-digest.jpg?days[0]=1:0,2:1,1:2,1:3&days[1]=2:0,2:1,1:3&days[2]=5:0&days[3]=4:2,1:3&days[4]=2:5,1:1,1:4,1:3&days[5]=2:5,1:1,1:4,1:3&days[6]=2:5,1:1,1:4,1:3"
      alt="Моё тестовое изображение"
    />
    <img src="/company-rating-insights.jpg?ratings[0]=0.20,1&ratings[1]=0.20,2&ratings[2]=0.20,3&ratings[3]=0.20,4&ratings[4]=0.20,1">
    <img src="/weekly-digest-counter.jpg?text=42%,42,4,2%">
  </body>
</html>


```
