vue on esm

Luke Jackson showed us alternative to building for react ecosystem: https://formidable.com/blog/2019/no-build-step/
I think we deserve something similar for Vue!

Vue itself already serves ES browser build. See https://unpkg.com/vue@2.6.10/dist/

`vue.esm.browser.js` and `vue.esm.browser.min.js` files will work just fine with `<script type="module" />`

https://github.com/vuejs/vue/blob/dev/scripts/config.js#L86-L105


Today I opened similar PR's for [vuex](https://github.com/vuejs/vuex/pull/1533) and [vue-router](https://github.com/vuejs/vue-router/pull/2705).

We might also want to build vue browser esm without compiler for smaller file size and instead use [htm](https://github.com/developit/htm) same as @EGOIST already did with [vue-htm](https://github.com/egoist/vue-html).
But there is unfortunately known issue with [vue-router](https://github.com/egoist/vue-html/issues/3).