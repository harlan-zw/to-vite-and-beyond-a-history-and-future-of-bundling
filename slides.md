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
title: A brief history of bundling
---

# To Laravel Vite and Beyond

## <div class="mt-10 text-2xl text-gray-300">A brief history of bundling<br> and what the future holds</div>

<div class="opacity-80 text-sm absolute -bottom-2 right-10">Presentation By Harlan Wilton <img src="/img.png" class="w-8 h-8 ml-2 rounded-full inline-block" /></div>

<!--
- Welcome everyone, great to be here and see some familiar faces. This is the first meetup I've been too in a long time

- Today I wanted to talk about Vite. Sure you've all heard of it by now.

- With Laravel 9 adopting Vite, I thought it might be worth sharing a refresher on frontend space, specifically around bundling

- But also looking at where things are now and where the frontend space is headed

- I've tried to keep it simple and  high level but let me know if you have any questions as we go
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


<img src="/img.png" class="w-50 h-50 rounded mx-auto" />

<!--
- My name is Harlan
- Living in Canberra currently
- Been doing open-source for over a year now
- If you use Twitter, then you should definitely give me a follow
-->

---
layout: section
---

# Things to cover

- How did we get to Vite?
- How does it supersede Laravel Mix?
- What is the future of frontend bundling?
- Some fun nostalgia

---
layout: two-cols
---

# Quick Glossary (in simple terms)

::left::

## Bundling

1. With some assets (js, css, images, etc)
1. Maybe transform them
2. And give them a good smooshing (minify, concat)

- Basis of optimising assets in the browser

::right::

## Module

- Some code that exports something that you can import
- In PHP you could consider a class a module
- Sticks to a standard

<!--
- Very quickly want to give you a glossary of these terms in case they're completely new to
- think any file is going to be a module

- module is a term that you come accross when working with javascript packages OR frontend bundlers such as webpack

- we'll go through these a bit more later so all good if that doesn't make sense
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
layout: two-cols-side
size: xl
---

# Stone Age: Birth of Modules 

<div class="font-mono text-lg italic opacity-90 -mt-5">2008 - 2012</div>

- No build step
- No node_modules
- No JavaScript Server-Side Rendering
- Lots of useful packages: jQuery, Bootstrap, Polyfill, Lodash, etc

::highlights::

<div><logos-html-5 /> HTML 5</div>
<div><logos-css-3 /> CSS 3 </div>
<div>jQuery</div>
<div><logos-bootstrap /> Bootstrap</div>
<div><logos-sass /> Sass</div>
<div><logos-brackets /> Brackets</div>
<div><logos-sublimetext-icon /> Sublime</div>

::modules::

IIFE

<!--
- We are back in time, to the Stone age. 

- When we had no tools

- Everything was manual, you'd google minify css or minify js and copy the output

- It was a pretty nice time though no build steps, no node_modules, just downloaded the dependencies we needed

- Caching wasn't really a thing

- We use modules which are called IIFE

- We don't talk about anything before the stone age

- Sublime /
-->

---
layout: section
size: xl
---

# IIFE (Immediately Invoked Function Expression)

```javascript {all|1,7|2}
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
- A basic example of what it looked like, pretty easy and nice
- so the jQuery there would be an IIFE module
-->

---
layout: section
size: xl
---

# Stone Age Problems

- Websites are bloating quickly with IIFE modules
- Maintaining third-party packages is cumbersome
- Many cross browser bugs

<!--
- IIFE were very difficult to optimise, you'd need to roll your own version of a package only picking the things you were going to use

- The browser engines were way out of sync, you'd run into a lot of issues when testing between the browsers of what was supported, what needed vendor prefixes, etc
-->

---
layout: section
---

<div class="h-full flex items-center">
<img src="/img_2.png" class="h-75 mx-auto my-auto">
</div>

<!--
- This is the representation of a Stone Age web developer

- While it was extra manual work to optimise things, it wasn't too complicated, not a bad time

- Who amongst us is was part of this? Maybe you still build your sites like this?
-->

---
layout: two-cols-side
size: sm
---

# Bronze Age: It's a Web App Actually

<div class="font-mono text-lg italic opacity-90 -mt-5">2012 - 2014</div>

- Task Runners are adopted (Grunt, Gulp)
- CSS pre-processors take on wide adoption (SASS, LESS, etc)
- Community split in module choice, coding for Browser or Node

::highlights::

<div><logos-grunt /> Grunt</div>
<div> <logos-gulp /> Gulp</div>
<div><logos-require /> Require.js</div>
<div><logos-bower /> Bower</div>
<div><logos-browserify-icon /> Browserify</div>
<div><logos-laravel /> Laravel Elixir</div>
<div><logos-nodejs-icon /> Node.js</div>
<div><logos-npm /> NPM</div>
<div><logos-angular /> Angular</div>

::modules::

CJS, AMD, UMD, IIFE


<!--
- Now we enter the bronze age

- The era of "It's a web app actually", our web tools are getting better and more complicated as the scope of our websites grow

- Lot of interesting tools as you can see there, Laravel Elixer is worth noting which was an abstraction of gulp, similar to Laravel Mix but for Laravel 4/5

- The paradigm was on "Task Running", so having a pipeline of tasks to execute things

- So begins in the Bronze age the great Module wars, as you can see there, we now have four competing module types

- Let's see what different they have

- todo: LARAVEL MIX / GULP
-->

---
layout: section
size: xl
---

# CJS (CommonJS) - Node Standard

```javascript {all|1}
modules.exports.greeting = function() {
  console.log('Hello world!')
}
```

```javascript {all|1}
const $myLib = require('./myLib.js')
$myLib.greeting()
```

- Browser: Does not support this, requires transpiling.
- Node: Supports this.

<!--
- CommonJS modules were the original way to package JavaScript code for Node.js.
- A browser does not understand this so would need to be transpiled
- Fairly easy to optimise
-->

---
layout: section
---

# AMD (Async Module Definition) - Browser Standard

```javascript {all|1}
define(function () {
    return {
        greeting: function () {
            console.log('Hello world!')
        }
    };
});
```

```javascript {all|1}
const $myLib = require('./myLib.js')
$myLib.greeting()
```

- Browser & Node: Does support this (with Require.js), no transpiling needed.

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

- Browser & Node: Does support this, but not recommended.

<!--
- UMD was a way to ship a package that could be used from AMD or CommonJS module
- Bit complex and hacky
-->

---
layout: section
---

# Gulp Pipelines Example

```ts {all|4-11}
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
- The ecosystem is not efficient, hard for packages to leverage each other's code

<!--
- bit of frustration out of this age, package authors were fighting against the standards
- devs were struggling to configure these task runners
- build times were slow
- Overall the ecosystem wasn't efficient
-->

---
layout: section
---

<div class="h-full flex items-center">
<img src="/img_1.png" class="h-85 mx-auto my-auto">
</div>

<!--
- yup this is us now, bit frustrating
-->

---
layout: two-cols-side
size: sm
---

# Iron Age: Webpack Time

<div class="font-mono text-lg italic opacity-90 -mt-5">2014 - 2016</div>

- Dev Server with Hot Module Replacement
- Code Splitting
- Tree Shaking
- Dependency graph resolving
- Some ES6 adoption is 
- NPM and babel are now the norm
- CJS exports becomes the norm, UMD is dead

::highlights::

<div><logos-webpack /> webpack</div>
<div><logos-babel /> Babel</div>
<div><logos-yarn /> Yarn</div>
<div><logos-vue /> Vue.js</div>
<div><logos-react /> React</div>

::modules::

CJS, AMD, UMD, IIFE

<!--
- webpack came out at a similar time to Gulp, but Gulp had a lot more traction
- eventually webpack took over once the loader ecosystem caught up
- around the same time as babel

- babel let you write ES6 code and transpile it to something Node and the browser could understand
-->

---
layout: section
size: sm
---

# Quick Glossary (in simple terms)

## Dev Server (Hot Module Replacement)

- Use a HTTP server to serve modules locally (listening on port 3000, 8080 usually)
- Websocket communicating file changes so modules can be reloaded

---
layout: section
size: sm
---

# Quick Glossary (in simple terms)

## Code Splitting

- Split your code into multiple bundles to optimise performance
- Dynamic imports
- e.g. separate pages js/css into their own bundles (network requests)

---
layout: section
size: sm
---

# Quick Glossary (in simple terms)

## Tree Shaking

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
layout: section
---

# Iron Age Problems

- Incredibly painful to understand, configure and debug webpack
- Dev-server and HMR builds do not scale well, very slow
- Lots of boilerplate
- node_modules big

<!--
- because you're transpiling everything before you start, it's very slow
-->

---


<div class="h-full flex items-center">
<img src="/img_9.png" class="w-125 mx-auto rounded" width="450">
</div>

---
layout: section
---

<div class="h-full flex items-center">
<img src="/img_4.png" class="w-85 mx-auto rounded" width="450">
</div>

<!--
- we thought we were very clever and we did some solve big issues with webpack, but the developer experience was getting worst in some ways
-->

---
size: sm
layout: two-cols-side
---

# Middle Ages: ES6 And Solving Webpack

<div class="font-mono text-lg italic opacity-90 -mt-5">~ 2016 - 2020</div>

- Release of ES6
- Powerful abstraction layers (Mix, Nuxt, Next, etc)
- Much less boilerplate, things _just work_
- ESM modules start gaining some interest, exporting CJS is now the standard
- Rollup provides a much nicer API than webpack

::highlights::

<div><logos-webpack /> Webpack 5</div>
<div><logos-rollup /> Rollup</div>
<div><logos-laravel /> Laravel Mix</div>
<div><logos-nuxt-icon /> Nuxt.js</div>
<div><logos-nextjs-icon class="bg-white px-1px rounded" /> Next.js</div>

::modules::

ESM, CJS, AMD, UMD, IIFE

<!--
- Middle ages I characterise as ES^ and age of solving webpack

- Solving the complexity of configuring, which showed itself through abstraction layers and frontend frameworks, such as Laravel Mix, Nuxt, Next, etc

- Babel which was a core loader of webpack had performance issues which people wanted to solve, specifically esbuild

- With the ecosystem now using each others packages more, we needed a stricter way and less buggy way to communicate package APIs, hense the shift of things towards TypeScript

- Rollup grew out of the frastrations of the webpack API and documentation
-->

---
layout: section
size: xl
---

# ES6 - ECMAScript 2016

- Next iteration of JavaScript, 10 years in the making
- ES5 was released in 2009, first major revision to JS. Node and browsers understood this
- HUGE DX improvements over vanilla JS
- await / async
- ES6 needed to be transpiled to ES5 for browsers and node


---
layout: section
size: xl
---

# ESM (ECMAScript module) - ES6

```javascript {all|1,7}
// myLib.js
export function greeting () {
  console.log('Hello world!')
}

// app.js
import { greeting } from './myLib.js'
greeting()
```


Browsers & Node: Do not understand this (yet). Babel or esbuild is needed to transpile.

<!--
- had to transpile this at one point to CJS or AMD

- ES6 was a huge update and included many other improvements besides the esmodule

- You may see MJS files, these are ESM
-->

---
layout: section
size: xs
---

# Middle Ages Issues

- Browsers and Node do not understand the new ES6 or ESM
- Build and HMR time for mid-large size apps is becoming a problem
- The ecosystem is divided between webpack, Rollup and other solutions
- Module compatibility becomes increasing frustrating (ESM, CJS. AMD, UMD, IIFE)

<!--
- this is specifically what Laravel Mix has issues with
- main issue is really performance for most developers, it's just too slow-

- todo: formodule devs
-->

---

<div class="h-full flex items-center">
<img src="/img_3.png" class="w-140 mx-auto rounded" width="650">
</div>

<!--
- all had our big brain masks on but we were still having a lot of issues
-->

---
layout: two-cols-side
---

# Modern Era: Just In Time

<div class="font-mono text-lg italic opacity-90 -mt-5">2021 - PRESENT</div>

- Zero config solutions
- Minimal building with JIT
- Leverage native browser ESM support and caching
- Rollup taking over webpack
- New JavaScript runtimes (deno)
- Native TypeScript support default
- Esbuild speeds things up a lot

::highlights::

<div><logos-esbuild class="mr-1" /> esbuild</div>
<div><logos-typescript-icon class="mr-1" /> TypeScript</div>
<div><logos-vitejs class="mr-1" /> Vite</div>
<div><logos-snowpack class="bg-white px-2px rounded mr-1" /> Snowpack</div>
<div><logos-wmr class="mr-1" /> WMR</div>
<div><logos-deno class="mr-1" /> Deno</div>
<div><logos-pnpm class="mr-1" /> PNPM</div>
<div><logos-vitest class="mr-1" /> Vitest</div>

::modules::

ESM is preferred

Legacy support: CJS, AMD

<!--
- Welcome to the modern era, the era of things being just in time
-->


---

# Esbuild Performance

<img src="https://raw.githubusercontent.com/evanw/esbuild/master/images/benchmark-dark.svg" />

<!--
- esbuild is just insanely fast
-->

---

# TypeScript Growth

<div class="flex items-center">
<img src="/img_6.png" class="w-170 mx-auto rounded" width="700">
</div>

<!--
- typescript usage had a slow growth but has really exploded
-->

---
layout: section
---

# Vite

Tech: <logos-rollup /> Rollup,  <logos-esbuild /> esbuild, <logos-typescript-icon /> TypeScript, Express

- Not a "bundler", rather, it's a pre-configured build environment using the Rollup bundler and a tool for local development
- "Enhanced" Native ESM
- Delivers modules one-by-one over HTTP requests rather building them all togethor
- Language agnostic

- Acts as a low-mid level layer between bundlers (Rollup) and frameworks (Laravel)

---
layout: section
---

# Vite Code

```html {all|1,3}
<script type="module">import "/vite/client"</script>
<div id="app"></div>
<script type="module" src="/@app/index.js"></script>
```

---
layout: section
---

# Modern Era Issues

- Lots of new frameworks popping up, hard to keep accross them (Astro, Fresh, Solid, etc)
- Still quite a bit of JavaScript for basic sites
- Migration can be difficult, many stuck in the Middle ages
- Supporting legacy module standards is ambiguous

---

<div class="h-full flex items-center">
<img src="/img_5.png" class="w-85 mx-auto rounded" width="350">
</div>

---
layout: two-cols-side
---

# Future Era: Efficient DX and Ecosystem

<div class="font-mono text-lg italic opacity-90 -mt-5">PRESENT - FUTURE</div>

- JS packages will run anywhere, without bindings for node / browser (UnJS)
- No build step
- JIT rendering on the edge
- Experimental runtimes offering unparalleled speeds
- Island based reactivity, 0 js runtime overhead
- Custom JS runtimes supporting native TypeScript (vite-node) 
- Powerful online IDE and runtimes like StackBlitz
- CSS Pre Processors are on the way out

::highlights::

<div><logos-vitejs /> Vite Node (runtime)</div>
<div><logos-vercel-icon /> Edge Rendering</div>
<div><logos-chrome /> Web Workers</div>
<div><logos-bun /> Bun</div>
<div><logos-stackblitz-icon /> Stackblitz</div>
<div><logos-javascript /> UnJS</div>
<div><logos-nuxt-icon /> Nuxt v3</div>
<div><logos-fresh /> Fresh</div>

::modules::

ESM is default

Legacy support: CJS, AMD

<!--
- by anywhere?
-->

---

<div class="h-full flex items-center">
<img src="/img_8.png" class="w-120 mx-auto rounded">
</div>


---
layout: section
---

# Takeaways

- Vite was the natural next step of the frontend ecosystem

- New ecosystem efficiency is unlocked with aligning at a low / mid level and on the ESM module standard

- Has taken almost 6 years for Browsers and Node to support a language update (ES5 -> ES6)

- Probably still easier to just SSR with PHP / Laravel

<!--
# Takeaways

- Relative to the PHP world, frontend has had a lot of inefficiencies in working togethor due to competing technologies

- Things are getting better with language agnostic tools like Vite and standards being agreed on (ESM)

- CJS is slowly losing relevance but will be around for a while

- Browsers are now catching up with WebKit adoption, we'll need to do less to make code production ready
-->

---
layout: section
---

# Learn More

- Vite docs
- patak.dev blog
- Vite conf October 11th
