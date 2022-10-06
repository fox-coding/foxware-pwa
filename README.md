# shopware-pwa-project

## Build Setup

```bash
# install dependencies
$ yarn install

# in nuxt.config.js:
target: 'static',

# in firebase.json:
"public": "dist"

# generate static project
$ yarn generate
$ firebase deploy

# build for production and launch server
$ yarn build
$ yarn start

# generate plugins from backend:
$ yarn shopware-pwa plugins

```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
