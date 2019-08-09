# Vue with ES modules

[Luke Jackson](https://github.com/lukejacksonn) showed us alternative to building for react ecosystem:
https://formidable.com/blog/2019/no-build-step/. We deserve something similar for Vue – [it is time](https://caniuse.com/#feat=es6-module) as
JS modules are widely supported in all modern browsers.

Vue itself already serves ES browser build. See https://unpkg.com/vue@2.6.10/dist/
`vue.esm.browser.js` and `vue.esm.browser.min.js` files will work just fine with `<script type="module" />`.
So I opened PR's for [vuex](https://github.com/vuejs/vuex/pull/1533) and
[vue-router](https://github.com/vuejs/vue-router/pull/2705) to build a minified browser ES module.
Both are now merged and browser ES builds are now available for you to use.

## CDN: pika.dev vs unpkg.com

`import Vue from 'https://cdn.pika.dev/vue/v2'` won't work because it will pick up runtime version. We must use
`import Vue from 'https://unpkg.com/vue/dist/vue.esm.browser.min.js'`

```javascript
import Vuex, { Store, mapGetters, mapActions } from 'https://cdn.pika.dev/vuex/v3'
import VueRouter from 'https://cdn.pika.dev/vue-router/v3'
```

`vuex` and `vue-router` work fine.

## To consider

We might also want to build vue browser esm without compiler for smaller file size and instead use [htm](https://github.com/developit/htm)
same as [egoist](https://github.com/egoist) already did with [vue-htm](https://github.com/egoist/vue-html).
But there is unfortunately known issue with [vue-router](https://github.com/egoist/vue-html/issues/3).
`vue-htm` also won't be fully compatible vue app because it won't support `v-model`. And probably some other unknown issues 🤷‍♂️.

## Good to know

Every component in own file has to import Vue. If for example `Counter` component is importing minified vue, it won't be
seen in dev tools.
