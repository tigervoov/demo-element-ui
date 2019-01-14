# e_platform

## Project structure
```
Structure:
        <build>/
        ├── build.js
        ├── vue-loader.conf.js
        ├── webpack.base.conf.js 
        ├── webpack.dev.conf.js
        └── webpack.prod.conf.js -- define configure in different environment for webpack
        <config>/
        ├── dev.env.js
        ├── index.js
        ├── prod.env.js
        └── sit.env.js -- set different environment value in different environment
        <src>/
        ├── <api>/
        |   ├── login.js
        |   ├── market.js
        |   └── userProfile.js -- define api call
        ├── <assets>/
        |   └── ...
        ├── <conponents>/
        |   ├── <ErrorLog>/
        |   |   └── index.vue -- define reusable vue component
        |   └── ...
        ├── <filters>/
        |   └── ... -- not used yet
        ├── <icons>/
        |   ├── <svg>/
		    |   |   └── ... -- store svg here
        |   └── index.js
        ├── <lang>/
        |   ├── index.js -- internationalization
        |   ├── zh.js
        |   └── en.js
        ├── <mock>/
        |   ├── index.js 
        |   ├── login.js -- define different mock if no backend api ready yet
        |   └── ...
        ├── <router>/
        |   ├── <modules>/
        |   |   ├── market.js -- define specific route mapping
        |   |   └── ...
        |   └── index.js
        ├── <store>/
        |   ├── <modules>/ -- define different module in vuex
        |   |   ├── app.js
        |   |   └── ...
        |   ├── getters.js -- getter for value of state
        |   └── index.js
        ├── <styles>/
        |   ├── mixin.scss -- example scss
        |   └── ... -- other scss or something like this
        ├── <utils>/
        |   ├── auth.js -- utility functions
        |   └── ...
        ├── <views>/
        |   ├── <order>/ 
        |   |   └──  order.vue
        |   └── ... -- definec pages
        ├── App.vue -- root
        ├── main.js -- entry
        └── ...
```

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run dev
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```
