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

## <div class="mt-10 text-2xl text-gray-300">A history and future <br> of bundling.</div>

<div class="opacity-80 text-sm absolute -bottom-2 right-10">Talk By Harlan Wilton <img src="/img.png" class="w-8 h-8 ml-2 rounded-full inline-block" /></div>

<!--
- Welcome everyone, great to be here and see some familiar faces. This is the first meetup I've been too in a long time, so very exciting to talk

- Today I wanted to talk about Vite. Sure you've all heard of it by now.

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

- Worked with Max at 4mation, mostly WordPress / some Laravel
- Full time Freelancing and Open Source
- <logos-nuxt-icon /> Nuxt (insider), <logos-vue /> VueUse, <windi-icon /> WindiCSS, <logos-vitejs /> Vite (ecosystem)

(still <openmoji-blue-heart/> <logos-laravel/>)

::right::


<img src="/img.png" class="w-50 h-50 rounded mx-auto" />

<!--
- My name is Harlan
- Living in Canberra currently
- Been doing open-source for over a year now
- If you use Twitter, then you should definitely give me a follow
-->


---
class: text-center
layout: section
---

# Why does Vite exist?

<div v-click>
<h2 class="font-normal">Devs are not happy</h2>
</div>

<v-click>

<p class="text-6xl mt-3">
<span class="animated animate-pulse">🐌</span>
<span class="animated animate-pulse animate-delay-0.3s">🐌</span>
<span class="animated animate-pulse animate-delay-0.7s">🐌</span>
</p>

</v-click>

<div v-click>
<h2>Ecosystem is divided</h2>
</div>


<!--
- Now let's get into it

- We're going to go back in time and see how we've dealt with bundling over the ages
-->


---
class: text-center
layout: section
---

# How to make developers happy?

<div v-click>


<img src="https://i.giphy.com/media/HdcimOKferlkI/giphy.webp" class="w-1/2 mx-auto" />

</div>


---
layout: two-cols
---

# How to go fast? Some questions...

::left::

<div v-click>

### What are native ESM modules?

</div>

<div v-click>

### What is Rollup? <logos-rollup />


</div>

<div v-click>

### What is esbuild? <logos-esbuild />

</div>

<div v-click>

### What is a dev server?

</div>

::right::

<div v-click>

### What are these other modules: CJS / AMD / IIFE?

</div>

<div v-click>

### What is webpack? <logos-webpack />

</div>

<div v-click>

### What is HMR?

</div>

<div v-click>

### What is babel? <logos-babel />

</div>



<!--
- Now let's get into it

- We're going to go back in time and see how we've dealt with bundling over the ages
-->

---
layout: two-cols
---

# How to unite the ecosystem?



---
class: text-center
layout: section
---

# Too many questions.

## <div class="mt-10 text-2xl text-gray-300">Let's go back in time to when it was simple.</div>


---
layout: two-cols
---

# Quick Glossary

::left::

<v-click>

## Bundling

> Using tools that crawl, process and concatenate our source modules into files that can run in the browser.

</v-click>

::right::

<v-click>

## Modules

> Mechanisms for splitting JavaScript programs up into separate modules that can be imported when needed.

</v-click>

<!--
- Very quickly want to give you a glossary of these terms in case they're completely new to
- think any file is going to be a module

- module is a term that you come across when working with javascript packages OR frontend bundlers such as webpack

- we'll go through these a bit more later, so all good if that doesn't make sense
-->

---
class: text-center
layout: section
background: 'https://i.giphy.com/media/3oxRmvU3GAJay6F60g/giphy.webp'
---

# Travel back in time...

<img src="https://i.giphy.com/media/3oxRmvU3GAJay6F60g/giphy.webp" class="w-80 mx-auto rounded-full" />

<!--
- Now let's get into it

- We're going to go back in time and see how we've dealt with bundling over the ages
-->


---
layout: section
size: xl
---

# Stone Age: Birth of Modules 

<div class="font-mono text-lg italic opacity-90 -mt-5">~ 2008 - 2012</div>

<style>
.slidev-icon {
  width: 70px !important;
  height: auto !important;
  margin-right: 15px;
  background-color: white;
  padding: 10px;
  border-radius: 4px;
}
</style>

<br>

<v-click>
<logos-html-5 />
<logos-css-3 />
<logos-jquery/>
<logos-bootstrap /> 
<logos-sass />
<logos-brackets />
<logos-sublimetext-icon />
</v-click>

<v-clicks>

- Apps are not too complex. 
- No build step, no node_modules, no reactive javascript
- IIFE modules: jQuery, Bootstrap, Polyfill, Lodash, etc

</v-clicks>


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
---

<div class="h-full flex items-center">
<img src="/img_11.png" class="h-80 rounded mx-auto my-auto">
</div>

<!--
- This is the representation of a Stone Age web developer

- While it was extra manual work to optimise things, it wasn't too complicated, not a bad time

- Who amongst us is was part of this? Maybe you still build your sites like this?
-->

---
layout: section
---

# Immediately Invoked Function Expression (IIFE)

> IIFE modules were the first way we could split our code into separate files. 

<v-click>

- Immediately invoked functions that are wrapped in a closure, allowing a private scope for code.

</v-click>

<v-click>

```javascript {all|1,7|2}
(function () {
  window.$myLib = {
    greeting() {
      console.log('Hello world!')
    }
  }
})();
```

</v-click>

<v-click>

```html {3}
<script src="./myLib.js" type="text/javascript" />
<script>
$myLib.greeting()
</script>
```

</v-click>

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

```html {all|4,7}
<!DOCTYPE html>
<html>
<head>
  <script type="text/javascript" href="./lib/jquery-2.1.3.min.js" />
</head>
<body>
    <script type="text/javascript" src="./app-concat.min.js" />
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

- IIFE modules are big, websites getting slow 
- Maintaining third-party code is not fun
- Many cross browser bugs

<!--
- IIFE were very difficult to optimise, you'd need to roll your own version of a package only picking the things you were going to use

- The browser engines were way out of sync, you'd run into a lot of issues when testing between the browsers of what was supported, what needed vendor prefixes, etc
-->


---
layout: section
---

# Bronze Age: Web App Time

<div class="font-mono text-lg italic opacity-90 -mt-5">~ 2012 - 2014</div>

<style>
.slidev-icon {
  width: 70px !important;
  height: auto !important;
  margin-right: 15px;
  background-color: white;
  padding: 10px;
  border-radius: 4px;
}
</style>

<br>

<v-click>
<logos-grunt />
<logos-gulp />
<logos-require/>
<logos-bower /> 
<logos-browserify-icon />
<logos-nodejs-icon />
<logos-npm />
<logos-angular-icon />
</v-click>

<v-clicks>

- Apps and bundling getting more complex, task Runners are needed (Grunt, Gulp)
- Angular joins the chat
- Ecosystem divides on modules, transpiling for node or the browser (CJS, AMD, UMD, IIFE)

</v-clicks>


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

# CommonJS (CJS)

> CommonJS modules are the original way to package JavaScript code for Node.js. 

<v-click>

- They are synchronous and are loaded at runtime.

</v-click>

<v-click>

```javascript {1}
modules.exports.greeting = function() {
  console.log('Hello world!')
}
```

</v-click>

<v-click>

```javascript {1}
const $myLib = require('./myLib.js')
$myLib.greeting()
```

</v-click>

<v-click>

- Browser: <material-symbols-cancel-rounded class="text-red-300" /> requires transpiling
- Node <material-symbols-check-circle class="text-green-300" />

</v-click>

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

# Async Module Definition (AMD)

> AMD modules are the original way to package JavaScript code for the browser. 

<v-click>

- They are asynchronous and are loaded at runtime. Created by RequireJS.

</v-click>


<v-click>

```javascript {1,7}
define(function () {
    return { greeting: function () { console.log('Hello world!') }  };
});
```

</v-click>

<v-click>

```javascript {1}
const $myLib = require('./myLib.js')
$myLib.greeting()
```

</v-click>

<v-click>

- Browser & Node: <material-symbols-check-circle class="text-green-300" /> (with Require.js, no transpiling needed)

</v-click>

<!--
- AMD was developed by Require.js
- It did work in the browser but wasn't easy to optimize, no transpiling needed
-->

---
layout: section
size: xl
---

# Universal Module Definition (UMD)

> UMD modules are a way to package JavaScript code for the browser and Node.js.

<v-click>

- Aims to be compatible with both CommonJS and AMD

</v-click>

<v-click>

```javascript  {all|10}
(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], factory);
    } else if (typeof module === 'object' && module.exports) {
        module.exports = factory();
    } else {
        root.returnExports = factory();
  }
}(typeof self !== 'undefined' ? self : this, function () {
    return { greeting () { console.log('Hello World') } };
}));
```

</v-click>

<v-click>

- Browser & Node: <material-symbols-check-circle class="text-green-300" />

</v-click>

<!--
- UMD was a way to ship a package that could be used from AMD or CommonJS module
- Bit complex and hacky
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
layout: section
---

# Iron Age: Webpack Time

<div class="font-mono text-lg italic opacity-90 -mt-5">~ 2014 - 2016</div>

<style>
.slidev-icon {
  width: 70px !important;
  height: auto !important;
  margin-right: 15px;
  background-color: white;
  padding: 10px;
  border-radius: 4px;
}
</style>

<br>

<v-click>
<logos-webpack />
<logos-vue />
<logos-react />
</v-click>

<v-clicks>

- Webpack adopted as the module bundler for JavaScript applications
- Seriously complex apps are being built

</v-clicks>

<!--
- webpack came out at a similar time to Gulp, but Gulp had a lot more traction
- eventually webpack took over once the loader ecosystem caught up
- around the same time as babel

- babel let you write ES6 code and transpile it to something Node and the browser could understand
-->

---
layout: section
---

# Webpack

> Webpack is a module bundler for JavaScript applications.

<v-clicks>

- Dev Server with Hot Module Replacement
- Code Splitting
- Tree Shaking
- Dependency graph resolving
- Module bundling
- Asset bundling
- Code minification

</v-clicks>

---
layout: section
size: sm
---

# Dev Server (Hot Module Replacement)

<v-clicks>

- Use an HTTP server (express) to serve build modules locally
- Websocket communicating file changes so modules can be reloaded (HMR)
- HMR requires code to be in a module standard unless you want to reload everything

</v-clicks>

---
layout: section
size: sm
---

# Code Splitting

<v-clicks>

- Split your code into multiple bundles to optimise performance
- Bundles: vendor, app, lib, etc
- Dynamic imports
- e.g. separate pages js/css and vendor code into their own bundles

</v-clicks>

<!--
- when you build your code you can provide some hints to webpack on how the code should be split into different bundles

- historically you would have say a vendor bundle with all your node_Modules

- say a app bundle with all your code

- maybe a lib bundle with all your frameworks code

- but yeh splitting for pages
-->

---
layout: section
---

# Tree Shaking

<v-clicks>

- Remove dead code
- Only use code we need from external modules
- Only use code we need from our own code
- e.g. Use a single function from lodash instead of loading the entire package
- e.g. Use a single component from a UI library instead of loading the entire package

</v-clicks>


---
layout: section
---

# Iron Age Problems

<v-clicks>

- Incredibly painful to understand, configure and debug webpack
- Builds are not scaling well, getting very slow as application grows
- Lots of boilerplate
- node_modules big

</v-clicks>

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
layout: section
---

# Middle Ages: ES6

<div class="font-mono text-lg italic opacity-90 -mt-5">~ 2016 - 2020</div>


<style>
.slidev-icon {
  width: 70px !important;
  height: auto !important;
  margin-right: 15px;
  background-color: white;
  padding: 10px;
  border-radius: 4px;
}
</style>

<br>

<v-click>
<logos-rollup />
<logos-nuxt-icon />
<logos-nextjs-icon />
<logos-babel /> 
</v-click>

<v-clicks>

- Release of ES6, requires Babel to use
- Greater need for module compatibility with Server Side Rendering gaining popularity
- Webpack abstraction layers and frameworks released
- ESM modules start gaining some traction, but have poor support
- Rollup, a nicer API than webpack and more performant

</v-clicks>

<!--
- Middle ages I characterise as ES6 and age of solving webpack

- Solving the complexity of configuring, which showed itself through abstraction layers and frontend frameworks, such as Laravel Mix, Nuxt, Next, etc

- Babel which was a core loader of webpack had performance issues which people wanted to solve, specifically esbuild

- With the ecosystem now using each others packages more, we needed a stricter way and less buggy way to communicate package APIs, hense the shift of things towards TypeScript

- Rollup grew out of the frustrations of the webpack API and documentation
-->

---
layout: section
---

# ECMAScriptModule (ESM)

> ESM is a standard for defining JavaScript modules. It is the successor to the CommonJS module standard.

<v-clicks>

- Next iteration of JavaScript, 10 years in the making
- ES6 is a HUGE DX improvements over vanilla JS, array functions, await / async, reduce, etc.

</v-clicks>

<v-click>

```javascript {all|1,5}
export function greeting () {
  console.log('Hello world!')
}

import { greeting } from './myLib.js'
greeting()
```

</v-click>

<v-click>

Browsers & Node: <material-symbols-cancel-rounded class="text-red-300" /> Babel is required to transpile.

</v-click>

<!--
- had to transpile this at one point to CJS or AMD

- ES6 was a huge update and included many other improvements besides the esmodule

- You may see MJS files, these are ESM
-->

---
layout: section
---

# Rollup

> Rollup is a module bundler for JavaScript. Created by Rich Harris, the creator of Svelte

<v-clicks>

- Alternative to webpack. Nicer API, more performant and smaller bundles (better tree shaking)

</v-clicks>

<v-click>

<img src="/img_12.png" class="w-110 mx-auto rounded" width="400">

</v-click>

---
layout: section
size: xs
---

# Middle Ages Issues

<v-clicks>

- Transpiling ES6 using Babel is slow
- Transpiling mixed module formats are poorly supported (can't import CJS from ESM)
- Maintainers frustrated by inconsistent module formats

</v-clicks>

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
layout: section
---

# Modern Era: Just In Time, Fall of Webpack

<div class="font-mono text-lg italic opacity-90 -mt-5">~ 2020 - PRESENT</div>

<style>
.slidev-icon {
  width: 70px !important;
  height: auto !important;
  margin-right: 15px;
  background-color: white;
  padding: 10px;
  border-radius: 4px;
}
</style>

<br>

<v-click>
<logos-esbuild class="mr-1" />
<logos-vitejs class="mr-1" />
<logos-typescript-icon class="mr-1" />
<logos-snowpack class="bg-white px-2px rounded mr-1" /> 
<logos-parcel-icon class="mr-1" /> 
<logos-wmr class="mr-1" /> 
<logos-deno class="mr-1" /> 
</v-click>

<v-clicks>

- Solutions to babel performance issues (Esbuild, SWC, Sucrase)
- Browsers start supporting ESM natively (Vite, Snowpack, WMR)
- Rollup is established with a solid ecosystem
- TypeScript becomes a default
- New JavaScript runtimes (DENO)

</v-clicks>


::modules::

Default: ESM and CJS (export both)

Legacy support: AMD, UMD

<!--
- we've arrived at todays era, the modern era
-->


---
layout: section
---

# Native ESModules

> Native ESModules are supported in all modern browsers and Node 12+. No transpiling required.

<v-clicks>

- Same syntax as ESM / ES6
- In the browser handles static and dynamic imports as HTTP requests, honouring cache headers

</v-clicks>

<v-click>

```html
<script type="module">import "/myLib.js"</script>

<!-- GET /myLib.js -->
```

</v-click>

<v-click>

Browsers & Node: <material-symbols-check-circle class="text-green-300" />

</v-click>

<!--
- had to transpile this at one point to CJS or AMD

- ES6 was a huge update and included many other improvements besides the esmodule

- You may see MJS files, these are ESM
-->

---
layout: section
---

# Esbuild

> An extremely fast JavaScript bundler and minifier, written in Go.

<v-clicks>

- Replaces babel, around 10x faster
- Made by the CTO of Figma

</v-clicks>

<v-click>

<img src="https://raw.githubusercontent.com/evanw/esbuild/master/images/benchmark-dark.svg" />

</v-click>


<!--
- esbuild is just insanely fast

- if you know a legacy project using babel, you could boost your build speed signicantly just be switching to esbuild
-->

---
layout: section
---

# Vite Revisited

<v-clicks>

- Browser native ESM support (no dev bundling required) 
- Supports any framework (Vue, React, Svelte, etc)
- Vast plugin ecosystem, fast production bundling performance with <logos-rollup /> Rollup
- Fast transpiling performance with <logos-esbuild /> Esbuild
- Optimised dev server / HMR

</v-clicks>

<v-click>

```html {all|1,3}
<script type="module">import "/vite/client"</script>
<div id="app"></div>
<script type="module" src="/@app/index.js"></script>
```

</v-click>

<!--
- enhanced native ESM, this is just about it replacing file paths when importing so the browser better understands what's going on
-->



---
layout: section
---

<div class="flex items-center">
<img src="/img_10.png" class="w-120 mx-auto rounded" width="700">
</div>


---
layout: section
---

# Modern Era Issues

- Lots of new frameworks popping up, hard to keep across them (Astro, Fresh, Solid, etc)
- Still, quite a bit of JavaScript for basic sites
- Migration can be difficult, many stuck in the Middle Ages
- Packages support new node runtimes


---

<div class="h-full flex items-center">
<img src="/img_5.png" class="w-85 mx-auto rounded" width="350">
</div>

<!--
this is us now, we've finally accomplished a might big brain
-->

---
layout: section
---

# Future Era: Efficient DX and Ecosystem

<div class="font-mono text-lg italic opacity-90 -mt-5">PRESENT - FUTURE</div>

<br>

<v-clicks>

<div><logos-vitejs /> Vite Node (runtime)</div>
<div><logos-vercel-icon /> Edge Rendering</div>
<div><logos-chrome /> Web Workers</div>
<div><logos-bun /> Bun</div>
<div><logos-stackblitz-icon /> Stackblitz</div>
<div><logos-javascript /> UnJS</div>
<div><logos-nuxt-icon /> Nuxt v3</div>
<div><logos-fresh /> Fresh</div>
<div>Turbopack</div>

</v-clicks>


<!--
- by anywhere?
-->

---
layout: section
---

<v-clicks>

- JS packages will run anywhere, without bindings for node / browser (UnJS)
- JIT, no build step, rendering on the edge
- Experimental runtimes offering unparalleled speeds (bun)
- Island hydration, 0kb js runtime overhead
- Custom JS runtimes supporting native TypeScript (vite-node)
- Powerful online IDE and runtimes like StackBlitz

</v-clicks>

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

- Vite docs, discord
- patak.dev, antfu.me blogs

## Upcoming

- Presenting at NuxtNation (free online conference) November 16th-17th

## Follow me

<div class="opacity-85 text-sm mt-10">Twitter: @harlan_zw</div>

<div class="opacity-85 text-sm mt-3">GitHub: @harlan-zw</div>
