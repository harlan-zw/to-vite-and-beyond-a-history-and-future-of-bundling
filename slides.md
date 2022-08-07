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

# Getting to Laravel Vite<div class="mt-10 text-2xl">A brief history of bundling modules</div>

<div class="opacity-80 text-sm absolute -bottom-2 right-10">Presentation By Harlan Wilton <img src="img.png" class="w-8 h-8 ml-2 rounded-full inline-block" /></div>

<!--
- A lot has been happenining in frontend world, Vite being one of the biggest
- Laravel 9 has adopted Vite
- But to understand why Vite is being adopted, you need the full context
- The history of how we've dealt with modules and bundling over time

- I've tried to keep it high level but let me know if you have any questions as it's pretty technical
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
- My name is Harlan
- Living in Canberra currently
- Been doing open-source for over a year now
- If you use Twitter then you should definitely give me a follow
-->

---
layout: section
---

# Quick Glossary

## Bundling

- Taking an entry module or modules and transforming them and their dependencies into a discrete output
- Could involve dependency graph resolving, concatenating, minifying, transforming, etc
- Basis of optimising assets in the browser

<!--
- Very quickly want to give you a glossary of these terms in case they're completely new to
-->

---
layout: section
---

# Quick Glossary

## Module (according to webpacK)

- Discrete chunk of functionality. 
- A solid abstractions and encapsulation of boundaries with a coherent design and a clear purpose within the overall application.

## In other words

- Anything that you can import.
- In PHP you could consider a PHP Class or Namespace a module.
- A module usually sticks to a specific standard so that the ecosystem can work togethor

<!--
- think any file is going to be a module
-->

---
class: text-center
layout: section
---

# Travel back in time...

Look at how we've solved the bundling problem through the ages

<!--
- Now let's get into it

- We're going to go back in time and see how we've dealt with bundling over the ages
-->

---
layout: two-cols
size: sm
---

# Stone Age: Birth of Tooling


**Tools**: <logos-html-5 /> HTML 5, <logos-css-3 /> CSS 3, <logos-sass /> Sass,  jQuery, maybe your IDE helped you

**Module Standard**: IIFE

### Innovations

::left::

- No build step ⚡ INSTANT START ⚡
- No node_modules, download dependencies 🙃

::right::

- Manually run most tools if your IDE didn't for you
- Caching?

<!--
- We are back in time, to the Stone age. 

- When we had no tools

- Everything was manual, you'd google minify css or minify js and copy the output

- It was a pretty nice time though no build steps, no node_modules, just downloaded the dependencies we needed

- Caching wasn't really a thing

- We use modules which are called IIFE

- We don't talk about anything before the stone age
-->

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

<!--
- Immediately Invoked Function Expressions

- You may have seen these, this is how popular libraries were packaged, they would add their APIs to the global scope

- Think jQuery or bootstrap

- Very simple, just run the code and let it do its thing
-->

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

<!--
- A  basic example of what it looked like, pretty easy and nice
- so the jQuery there would be an IIFE module
-->

---
layout: section
size: xl
---

# Stone Age Problems

- Many cross browser bugs
- Unoptimised code
- IIFE modules eager loading and global scope
- Manually refresh the page!

<!--
- It did have some notable issues though

- The browser engines were way out of sync, you'd run into a lot of issues when testing between the browsers of what was supported, what needed vendor prefixes, etc

- Websites were slow, while generally they had less scripts than today, the optimisations around them were minimal

- IIFE were very difficult to optimise and you could run into conflicts within the global scope

- Of course, had to manually refresh the page when making code changes, although some IDEs did have solutions for that
-->

---
layout: section
---

<div class="h-full flex items-center">
<img src="img_2.png" class="h-75 mx-auto my-auto">
</div>

<!--
- This is the represtation of a Stone Age web developer

- While it was extra manual work to optimise things, it wasn't too complicated, not a bad time

- Who amongst us is was part of this? Maybe you still build your sites like this?
-->

---
layout: two-cols
size: sm
---

# Bronze Age: It's a Web App Actually

**Tools**: <logos-grunt /> Grunt, <logos-gulp /> Gulp, <logos-browserify-icon /> Browserify, <logos-bower /> Bower, <logos-require /> Require.js, <logos-laravel /> Laravel Elixir

**Module Standards**: CommonJS, AMD, UMD, IIFE

::left::

- Pipeline paradigm
- Watch for changes, rebuild and automatic refreshes!
- Start of the great module wars

::right::

- Lots of competing module standards
- Dependency management with Bower
- CSS pre-processors take on wide adoption

<!--
- Now we enter the bronze age

- The era of "It's a web app actually", our web tools are getting better and more complicated as the scope of our websites grow

- Lot of interesting tools as you can see there, Laravel Elixer is worth noting which was an abstraction of gulp, similar to Laravel Mix but for Laravel 4/5

- The paradigm was on "Task Running", so having a pipeline of tasks to execute things

- So begins in the Bronze age the great Module wars, as you can see there, we have now have four competing module types

- Let's see what different they have
-->

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

<!--
- CommonJS modules were the original way to package JavaScript code for Node.js.
- A browser does not understand this so would need to be transpiled
- Fairly easy to optimise
-->

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

<!--
- AMD was developed by Require.js
- It did work in the browser but wasn't easy to optimize, no transpiling needed
-->

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

<!--
- UMD was a way to ship a package that could be used from AMD or CommonJS module
- Bit complex and hacky
-->

---
layout: section
---

# Pipeline Paradigm (gulp)

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

<!--
- Example of the pipeline paradigm in which we were in
-->

---
layout: two-cols
---

# Bronze Age Problems

- Many competing tools and module standards
- Task runners are not intuitive and painful to configure
- Builds are slow, full rebuilds needed for code changes
- The Ecosystem is not efficient, hard for packages to leverage each other's code

<!--
- bit of fratration out of this age, package authors were fighting against the standards
- devs were struggling to configure these task runners
- build times were slow
- Overall the ecosystem wasn't efficient
-->

---
layout: section
---

<div class="h-full flex items-center">
<img src="img_1.png" class="h-85 mx-auto my-auto">
</div>

<!--
- yup this is us now, bit frastrating
-->

---
layout: two-cols
size: sm
---

# Iron Age: Dependency Graph / Loaders Paradigm

**Tools**: <logos-webpack /> webpack, <logos-babel /> Babel, <logos-npm-icon /> NPM

**Module Standards**: CJS, AMD, UMD, IIFE 

### Innovations

::left::

* Dev Server with Hot Module Replacement
* Code Splitting
* Tree Shaking

::right::

- Dependency graphs
- NPM and babel are now the norm
- CJS exports becomes the norm, AMD and UMD losing favour


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
layout: section
---

# Loaders Example

```ts {all|5-6,9-14}
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

<!--
- this is an example of a webpack config file (common js)
- you can see here we set rules on which rules should go through which loaders
-->

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

**Tools**: <logos-laravel /> Laravel Mix, <logos-rollup /> Rollup, <logos-esbuild /> esbuild, <logos-parcel-icon /> Parcel, <logos-typescript-icon /> TypeScript

**Module Standard**: ESM (new), CommonJS

### Innovations

::left::

- Age of the frontend framework
- Much less boilerplate, things _just work_
- DX is pretty good

::right::

- ESM modules start gaining some interest, exporting CJS is now the standard
- Esbuild speeds builds up a lot
- Rollup provides a much nicer API than webpack


---
layout: section
size: xl
---

# ESM (ECMAScript module)

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
size: xs
---

# Middle Ages Issues

- Build and HMR time for mid-large size apps is becoming a problem, even with tools like esbuild
- The ecosystem is divided between webpack and other bunlders (Rollup)
- Module compatibility remains a frustrating topic (CJS, ESM)


---

<div class="h-full flex items-center">
<img src="img_3.png" class="w-85 mx-auto">
</div>

---
layout: two-cols
---

# Modern Era: Paradigm Shift

**Tools**: <logos-vitejs /> Vite, <logos-snowpack /> Snowpack, <logos-wmr /> WMR, <logos-deno /> Deno

**Module Standards**: ESM only

## Innovations

::left::

- Delivery native ESM to browsers
- Just-In-Time file transpiling
- Leverage browser native support and caching

::right::

- Drop webpack for Rollup
- New JavaScript runtimes
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

**Module Standard**: ESM

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
