---
theme: ./theme
background: https://source.unsplash.com/collection/94734566/1920x1080
class: text-center
highlighter: shiki
lineNumbers: false
info: |
  ## Slidev Starter Template
  Presentation slides for developers.

  Learn more at [Sli.dev](https://sli.dev)
drawings:
  persist: false
css: windicss
title: Laravel's Vite Adoption
---

# Getting to Vite<div class="mt-10 text-2xl">A brief history of bundling modules</div>

<div class="opacity-80 text-sm absolute -bottom-2 right-10">Presentation By Harlan Wilton <img src="img.png" class="w-8 h-8 ml-2 rounded-full inline-block" /></div>

<!--
The last comment block of each slide will be treated as slide notes. It will be visible and editable in Presenter Mode along with the slide. [Read more in the docs](https://sli.dev/guide/syntax.html#notes)
-->

---
layout: two-cols
size: lg
image: https://source.unsplash.com/collection/94734566/1920x1080
---

# About Me

::left::

- Freelancer / Open Source Dev
- Building in the Vue, Nuxt and Vite ecosystems
- On the <windi-icon /> WindiCSS and <logos-vue /> VueUse teams
- Sponsored by <logos-nuxt-icon /> Nuxt

<div class="opacity-85 text-sm mt-10">Follow me <logos-twitter /> @harlan_zw</div>

::right::


<img src="img.png" class="w-50 h-50 rounded mx-auto" />

<!--
You can have `style` tag in markdown to override the style for the current page.
Learn more: https://sli.dev/guide/syntax#embedded-styles
-->

---
class: text-center
layout: section
---

# Travel back in time...

Look at how we've solved the bundling problem through the ages

---
layout: two-cols
size: sm
---

# Stone Age: No Tooling


**Bundling**: Manual minify / concats / linting, just download dependencies 🙃

**Modules**: IIFE

### Innovations

::left::

- No build step ⚡ INSTANT START ⚡
- No node_modules

::right::

- Manually lint and minify assets
- Caching?

---
layout: section
size: xl
---

# IIFE (Immediately Invoked Function Expression)

```javascript
(function () {
  window.$myLib = {
    greeting() {
      console.log('Hello world!')
    }
  }
})();
```

```html
<script src="./myLib.js" type="text/javascript" />
<script>
$myLib.greeting()
</script>
```

---
layout: section
size: sm
---

# HTML Example

```html {all|4-5,10}
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" type="text/css" href="./css/style.css" />
  <script type="text/javascript" href="./lib/jquery-2.1.3.min.js" />
  <title>My cool app</title>
</head>
<body>
    <!--  ... -->
    <script type="text/javascript" src="./App.js" />
</body>
</html>
```


---
layout: section
size: xl
---

# Stone Age Problems

- Many cross browser bugs
- Unoptimised code
- IIFE modules polluted global scope and impossible to optimise
- Manually refresh the page!

---
layout: section
---

<div class="h-full flex items-center">
<img src="img_2.png" class="h-50 mx-auto my-auto">
</div>

---
layout: two-cols
size: sm
---

# Bronze Age: It's a Web App Actually

**Tools**: <logos-grunt /> Grunt, <logos-gulp /> Gulp, <logos-browserify-icon /> Browserify, <logos-bower /> Bower, <logos-require /> Require.js, <logos-laravel /> Laravel Elixir

**Modules**: CommonJS, AMD, UMD

::left::

- Build a pipeline to generate your own optimised bundle
- Watch for changes, rebuild and automatic refreshes!
- Start of the great module wars

::right::

- Dependency management with Bower
- CSS pre-processors become the norm (LESS, SASS, etc)

---
layout: section
size: xl
---

# CommonJS

```javascript myLib.js
modules.exports.greeting = function() {
  console.log('Hello world!')
}
```

```javascript
const $myLib = require('./myLib.js')
$myLib.greeting()
```

Note: The browser **does not** understand this code.

---
layout: section
size: xl
---

# AMD (Async Module Definition)

```javascript myLib.js
define(function () {
    return {
        greeting: function () {
            console.log('Hello world!')
        }
    };
});
```

```javascript
const $myLib = require('./myLib.js')
$myLib.greeting()
```

Note: The browser **does** understand this code.

---
layout: section
size: xl
---

# UMD (Universal Module Definition)

```javascript myLib.js
(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], factory);
    } else if (typeof module === 'object' && module.exports) {
        module.exports = factory();
    } else {
        root.returnExports = factory();
  }
}(typeof self !== 'undefined' ? self : this, function () {
    return {
      greeting () { console.log('Hello World') }
    };
}));
// ...
const $myLib = require('./myLib.js')
$myLib.greeting()
```

Note: The browser and Node understands this code.


---
layout: section
---

# Gulp Config Example

```ts
const source = './src/js/*.js';

src(source)
  .pipe(changed(source))
  .pipe(concat('bundle.js'))
  .pipe(uglify())
  .pipe(rename({
    extname: '.min.js'
  }))
  .pipe(dest('./assets/js/'))
  .pipe(browsersync.stream());
```

---
layout: two-cols
---

# Bronze Age Problems

- Many competing tools and module formats
- Ecosystem is not efficient
- Task runners are not intuitive and painful to configure
- Full rebuilds for code changes
- Slow and clunky

---
layout: section
---

<div class="h-full flex items-center">
<img src="img_1.png" class="h-50 mx-auto my-auto">
</div>

---
layout: two-cols
size: sm
---

# Iron Age: It's bundling time

**Tools**: <logos-webpack /> webpack, <logos-npm-icon /> NPM, <logos-yarn /> Yarn

**Modules**: CommonJS, ESM (minor)

### Innovations

::left::

* Dev Server (HMR)
* Code Splitting
* Tree Shaking

::right::

- Babel taking over
- NPM is now the norm
- CJS exports becomes the norm, AMD and UMD losing favour

---
layout: section
size: xl
---

# ESM (ECMAScript modules)

```javascript myLib.js
function greeting () {
  console.log('Hello world!')
}

export { greeting }
```

```javascript
import { greeting } from './myLib.js'

// Hello World
greeting()
```

Note: Node understands this. Browsers will eventually understand this.

---
layout: section
---

# Webpack Config Example

```ts
module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
      },
      {
        test: /\.s?css$/i,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
    ],
  }
}
```

---
layout: section
size: sm
---

# Dev Server (Hot Module Replacement)

- Use a HTTP server to serve bmodules locally (listening on port 3000, 8080 usually)
- Websocket communicating file changes so modules can be reloaded

---
layout: section
size: sm
---

# Code Splitting

- Split your code into multiple bundles to optimise performance
- Dynamic imports
- e.g. separate pages js/css into their own bundles (network requests)

---
layout: section
size: sm
---

# Tree Shaking

- Remove dead code
- e.g. Use a single function from lodash instead of loading the entire package

---
layout: two-cols
size: xs
---

::left::

# Iron Age Problems

- Incredibly painful to understand and configure webpack
- Slow and hard to debug webpack
- Dev-server and HMR builds do not scale well
- Lots of boilerplate


---
layout: section
---


<div class="h-full flex items-center">
<img src="img_4.png" class="w-85 mx-auto">
</div>

---
layout: two-cols
size: sm
---

# Middle Ages: Abstractions and new tools

**Tools**: <logos-laravel /> Laravel Mix, <logos-rollup /> Rollup, <logos-parcel-icon /> Parcel, <logos-esbuild /> esbuild

**Modules**: CommonJS, ESM

### Innovations

::left::

- Age of the frontend framework
- Much less boilerplate, things _just work_
- DX is pretty good

::right::

- Exporting CJS is now the standard
- esbuild speeds builds up a lot
- Rollup provides a much nicer API than webpack

---
layout: section
size: xs
---

# Middle Ages Issues

- The Ecosystem is still divided and not efficient
- Module compatibility remains a frustrating topic


---

<div class="h-full flex items-center">
<img src="img_3.png" class="w-85 mx-auto">
</div>

---
layout: two-cols
---

# Modern Era: Paradigm Shift

**Tools**: Vite, Snowpack, WMR, Rollup, TypeScript

**Modules**: ESM only

## Innovations

::left::

- Delivery native ESM to browsers
- Just-In-Time file transpiling
- Leverage browser native support and caching

::right::

- Drop webpack for Rollup
- Native TypeScript

---

<div class="h-full flex items-center">
<img src="img_5.png" class="w-85 mx-auto">
</div>

---
layout: section
---

# Vite

- Bundling and pre-bundling uses an opinionated Rollup configuration
- other fact

---
layout: two-cols
---

# Future Era: An efficient ecosystem

**Tools**: vite-node, Web Workers, Edge Rendering, Bun, StackBlitz, unjs

**Modules**: ESM

## Innovations

::left::

- JavaScript packages must run anywhere, without bindings for any environment
- Edge rendering for all web apps
- Experimental runtimes like bun offering unparalleled speeds

::right::

- Custom runtimes supporting native TypeScript (vite-node) 
- Powerful online IDE and runtimes like StackBlitz
- Ecosystem initiatives to drop old ways of doing things (unjs)

---
layout: section
---

# Takeaways

- ESM is now the norm, CJS is slowly losing relevance but will be around for a while
- The ecosystem is aligning, expect better efficiency across languages and more innovation
- Browsers are now catching up, transpiling for production at some point may not be needed

---
layout: section
---

# Learn More

- Vite docs
- patak.dev blog
- Vite conf October 11th
