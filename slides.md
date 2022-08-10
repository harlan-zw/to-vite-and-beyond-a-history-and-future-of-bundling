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

# To Vite and Beyond

## <div class="mt-10 text-2xl text-gray-300">A brief history of building frontend <br> and what the future holds</div>

<div class="opacity-80 text-sm absolute -bottom-2 right-10">Presentation By Harlan Wilton <img src="/img.png" class="w-8 h-8 ml-2 rounded-full inline-block" /></div>

<!--
- Welcome everyone, great to be here and see some familiar faces. This is the first meetup I've been too in a long time, so very exciting to talk

- Today I wanted to talk about Vite. Sure you've all heard of it by now.

- With Laravel 9 adopting Vite, 

- cover a brief history building frontend and what the future holds, pivotal moment for the space a lot of exciting things are happening

- I've tried to keep it simple and high level but let me know if you have any questions as we go
-->

---
layout: two-cols
size: lg
image: https://source.unsplash.com/collection/94734566/1920x1080
---

# About Me

::left::

- Harlan
- Freelancer / Open Source Dev
- Building in the Vue, Nuxt and Vite ecosystems
- On the <windi-icon /> WindiCSS and <logos-vue /> VueUse teams
- Sponsored by <logos-nuxt-icon /> Nuxt

::right::


<img src="/img.png" class="w-50 h-50 rounded mx-auto" />

<!--
- My name is Harlan
- Living in Canberra currently
- Been doing open-source for over a year now
- If you use Twitter, then you should definitely give me a follow
-->

---
layout: two-cols
---

# Quick Glossary (in simple terms)

::left::

## Bundling (building)

1. With some assets (js, css, images, etc)
2. Maybe transform them
3. And give them a smooshing (minify, concat)

- Basis of optimising assets in the browser

(webpack, rollup, grunt, gulp, shell)

::right::

## Modules

- Some code that exports something that you can import
- In PHP you could consider a class a module
- Sticks to a standard
- Focus: Reusable and sharable code

(App.vue, main.css, bootstrap.js, etc)

<!--
- Very quickly want to give you a glossary of these terms in case they're completely new to
- think any file is going to be a module

- module is a term that you come across when working with javascript packages OR frontend bundlers such as webpack

- we'll go through these a bit more later, so all good if that doesn't make sense
-->

---
class: text-center
layout: section
---

# Travel back in time...

<img src="https://i.giphy.com/media/3oxRmvU3GAJay6F60g/giphy.webp" class="w-60 mx-auto rounded-full" />

Building frontend through the ages

<!--
- Now let's get into it

- We're going to go back in time and see how we've dealt with bundling over the ages
-->


---
layout: two-cols-side
size: xl
---

# Stone Age: Birth of Modules 

<div class="font-mono text-lg italic opacity-90 -mt-5">~ 2008 - 2012</div>

- No build step
- No node_modules
- No fancy reactive javascript
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
<img src="/img_2.png" class="h-80 rounded mx-auto my-auto">
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

<div class="font-mono text-lg italic opacity-90 -mt-5">~ 2012 - 2014</div>

- Task Runners are adopted (Grunt, Gulp)
- CSS pre-processors take on wide adoption (SASS, LESS, etc)
- Started seeing some abstractions pop up (Laravel Elixir)
- Angular joins the chat
- Module wars start, code for node (+ transpile) or browser

::highlights::

<div><logos-grunt /> Grunt</div>
<div> <logos-gulp /> Gulp</div>
<div><logos-require /> Require.js</div>
<div><logos-bower /> Bower</div>
<div><logos-browserify-icon /> Browserify</div>
<div><logos-laravel /> Laravel Elixir</div>
<div><logos-nodejs-icon /> Node.js</div>
<div><logos-npm /> NPM</div>
<div><logos-angular-icon class="bg-white" /> Angular</div>

::modules::

CJS, AMD, UMD, IIFE

<!--
- Now we enter the bronze age

- The era of "It's a web app actually", our web tools are getting better and more complicated as the scope of our websites grow

- Lot of interesting tools as you can see there, Laravel Elixir is worth noting which was an abstraction of gulp, similar to Laravel Mix but for Laravel 4/5

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

- Browser: <material-symbols-cancel-rounded class="text-red-300" /> requires transpiling
- Node <material-symbols-check-circle class="text-green-300" />

<!--
- standard 

- CommonJS modules were the original way to package JavaScript code for Node.js.
- A browser does not understand this so would need to be transpiled
- Fairly easy to optimise

- advantages of code reusability and sharing, especially with NPM up and running now
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

- Browser & Node: <material-symbols-check-circle class="text-green-300" /> (with Require.js, no transpiling needed)

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

- Browser & Node: <material-symbols-check-circle class="text-green-300" />

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
- Task runners are not always intuitive and painful to configure
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
<img src="/img_1.png" class="h-85 rounded mx-auto my-auto">
</div>

<!--
- yup this is us now, bit frustrating
-->

---
layout: two-cols-side
size: sm
---

# Iron Age: Webpack Time

<div class="font-mono text-lg italic opacity-90 -mt-5">~ 2014 - 2016</div>

- Dev Server with Hot Module Replacement
- Code Splitting
- Tree Shaking
- Dependency graph resolving
- CJS adoption grows

::highlights::

<div><logos-webpack /> webpack</div>
<div><logos-vue /> Vue.js</div>
<div><logos-react /> React</div>

::modules::

CJS, AMD, IIFE,  UMD

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

- Use a HTTP server (express) to serve build modules locally (listening on port 3000, 8080 usually)
- Websocket communicating file changes so modules can be reloaded (HMR)
- HMR requires code to be in a module standard unless you want to reload everything


---
layout: section
size: sm
---

# Quick Glossary (in simple terms)

## Code Splitting

- Split your code into multiple bundles to optimise performance
- Bundles: vendor, app, lib, etc
- Dynamic imports
- e.g. separate pages js/css into their own bundles (network requests)

<!--
- when you build your code you can provide some hints to webpack on how the code should be split into different bundles

- historically you would have say a vendor bundle with all your node_Modules

- say a app bundle with all your code

- maybe a lib bundle with all your frameworks code

- but yeh splitting for pages
-->

---
layout: section
size: sm
---

# Quick Glossary (in simple terms)

## Tree Shaking

- Remove dead code
- Only use code we need from external modules
- e.g. Use a single function from lodash instead of loading the entire package


---
layout: section
---

# Webpack Config Example

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
- Builds are not scaling well, getting very slow as application grows
- Lots of boilerplate
- node_modules big

<!--
- because you're transpiling everything before you start, it's very slow
-->

---

<div class="h-full flex items-center">
<img src="/img_9.png" class="w-125 mx-auto rounded" width="450">
</div>

<!--
- yarn did try and solve this in a way but it's still a big issue
-->

---
layout: section
---

<div class="h-full flex items-center">
<img src="/img_4.png" class="w-85 mx-auto rounded" width="450">
</div>

<!--
- we thought we were very clever and we did some solve big issues with webpack, but the developer experience was getting worst in some ways

- dx wasn't there
-->

---
size: sm
layout: two-cols-side
---

# Middle Ages: ES6 And Solving Webpack

<div class="font-mono text-lg italic opacity-90 -mt-5">~ 2016 - 2020</div>

- Release of finalised ES6
- Babel ships, allowing ES6 to ES5 transpiling
- Powerful abstraction layers and frameworks released (Laravel Mix, Nuxt, Next, etc)
- Much less boilerplate, things _just work_
- ESM modules start gaining some interest, but difficult to support
- Rollup provides a much nicer API than webpack
- Rollup, a vastly improved webpack, grows its ecosystem
- Reactive frameworks offering SSR

::highlights::

<div><logos-rollup /> Rollup</div>
<div><logos-laravel /> Laravel Mix</div>
<div><logos-nuxt-icon /> Nuxt.js</div>
<div><logos-nextjs-icon class="bg-white px-1px rounded" /> Next.js</div>
<div><logos-babel /> Babel</div>
<div><logos-yarn /> Yarn</div>

::modules::

ESM, CJS, AMD, UMD, IIFE

<!--
- Middle ages I characterise as ES^ and age of solving webpack

- Solving the complexity of configuring, which showed itself through abstraction layers and frontend frameworks, such as Laravel Mix, Nuxt, Next, etc

- Babel which was a core loader of webpack had performance issues which people wanted to solve, specifically esbuild

- With the ecosystem now using each others packages more, we needed a stricter way and less buggy way to communicate package APIs, hense the shift of things towards TypeScript

- Rollup grew out of the frustrations of the webpack API and documentation
-->

---
layout: section
size: xl
---

# ES6 - ECMAScript 2016

- Next iteration of JavaScript after ES5, 10 years in the making
- ES5 was released in 2009, first major revision to JS. Node and browsers supported this quite early
- ES6 is a HUGE DX improvements over vanilla JS
- array functions, await / async, reduce, deprecates a lot of Lodash functions
- Browsers and node do not understand it. Needs to be transpiled


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


Browsers & Node: <material-symbols-cancel-rounded class="text-red-300" /> Babel is required to transpile.

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
- Builds are still not scaling well and our applications are getting even bigger
- The ecosystem is divided between webpack, Rollup and other solutions
- Module compatibility is a frustrating topic for Open Source Devs (ESM, CJS. AMD, UMD, IIFE)

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
- things felt pretty good, but underneath it, we werent happy with webpack, our build times or module compatibility issues

- es6 is out but no clear path to using it
-->

---
layout: two-cols-side
---

# Modern Era: Just In Time

<div class="font-mono text-lg italic opacity-90 -mt-5">~ 2020 - PRESENT</div>

- Leverage native browser ESM support and caching
- Zero config solutions
- Minimal building with JIT (stubbing)
- Rollup is now established with a good ecosystem around it
- New JavaScript runtimes (DENO)
- Native TypeScript support default
- Esbuild speeds things up a lot
- Package managers are mostly solving the node_modules problem (pnpm)

::highlights::

<div><logos-esbuild class="mr-1" /> esbuild</div>
<div><logos-typescript-icon class="mr-1" /> TypeScript</div>
<div><logos-vitejs class="mr-1" /> Vite</div>
<div><logos-javascript class="mr-1" /> JITI</div>
<div><logos-snowpack class="bg-white px-2px rounded mr-1" /> Snowpack</div>
<div><logos-parcel-icon class="mr-1" /> Parcel</div>
<div><logos-wmr class="mr-1" /> WMR</div>
<div><logos-deno class="mr-1" /> Deno</div>
<div><logos-pnpm class="mr-1" /> PNPM</div>
<div><logos-vitest class="mr-1" /> Vitest</div>

::modules::

Default: ESM and CJS (export both)

Legacy support: AMD, UMD

<!--
- we've arrived at todays era, the modern era
-->

---

# Esbuild Performance

<img src="https://raw.githubusercontent.com/evanw/esbuild/master/images/benchmark-dark.svg" />

- replaces babel / tsc / minifies / etc

<!--
- esbuild is just insanely fast

- if you know a legacy project using babel, you could boost your build speed signicantly just be switching to esbuild
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
- Delivers JIT built modules one-by-one over HTTP requests rather building them all together
- Acts as a low-mid level layer between bundlers (Rollup) and frameworks (Laravel) that any framework or language can adopt
- Build step produces concat'd, minified, tree-shaken and code split ESM native code

<!--
- enhanced native ESM, this is just about it replacing file paths when importing so the browser better understands what's going on
-->

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

# Vite Ecosystem

<div class="flex items-center">
<img src="/img_10.png" class="w-100 mx-auto rounded" width="700">
</div>

---
layout: section
---

# Modern Era Issues

- Lots of new frameworks popping up, hard to keep across them (Astro, Fresh, Solid, etc)
- Still, quite a bit of JavaScript for basic sites
- Migration can be difficult, many stuck in the Middle Ages
- Supporting legacy module standards is still an issue, but it's better


---

<div class="h-full flex items-center">
<img src="/img_5.png" class="w-85 mx-auto rounded" width="350">
</div>

<!--
this is us now, we've finally accomplished a might big brain
-->

---
layout: two-cols-side
---

# Future Era: Efficient DX and Ecosystem

<div class="font-mono text-lg italic opacity-90 -mt-5">PRESENT - FUTURE</div>

- JS packages will run anywhere, without bindings for node / browser (UnJS)
- JIT, no build step, rendering on the edge
- Experimental runtimes offering unparalleled speeds (bun)
- Partial hydration, 0kb js runtime overhead
- Custom JS runtimes supporting native TypeScript (vite-node) 
- Powerful online IDE and runtimes like StackBlitz
- CSS Pre-Processors are on the way out

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

Default: ESM

Legacy support: CJS

<!--
- by anywhere?
-->

---

<div class="h-full flex items-center">
<img src="/img_8.png" class="w-120 mx-auto rounded">
</div>

<!--
- final form
-->

---
layout: section
---

# Takeaways

- Vite was the natural next step of the frontend ecosystem with ESM modules getting node and browser support

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

# Thanks!

## Learn More

- Vite docs
- patak.dev blog
- Vite conf October 11th

## Follow me

<div class="opacity-85 text-sm mt-10">Twitter: <logos-twitter /> @harlan_zw</div>

<div class="opacity-85 text-sm mt-10">GitHub: <logos-github /> @harlan-zw</div>
