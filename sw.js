/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("workbox-v3.5.0/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v3.5.0"});

workbox.core.setCacheNameDetails({prefix: "gatsby-plugin-offline"});

workbox.skipWaiting();
workbox.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "webpack-runtime-c0eec223324f46434f47.js"
  },
  {
    "url": "app.c4c01d266bd430687c83.css"
  },
  {
    "url": "app-4396b13a158ff40b8684.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-7a3086b12086276d1106.js"
  },
  {
    "url": "index.html",
    "revision": "268d04bee58ec83744fd2663bb162cd7"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "433afdfdd5282f5712094a61855cff66"
  },
  {
    "url": "component---src-components-pages-index-js.c98095aee6f38bb3e6ab.css"
  },
  {
    "url": "7-b2f1bc135f586ef85f8d.js"
  },
  {
    "url": "component---src-components-pages-index-js-3d402249755c9a3a9ebf.js"
  },
  {
    "url": "0-2d7a3d83514ff815bc78.js"
  },
  {
    "url": "static/d/107/path---index-6a9-qHK3sAyaoNHFgSAt6YWTcdrF4GA.json",
    "revision": "02f497d0c03d5e1866c88d0784cb4ac5"
  },
  {
    "url": "component---src-components-pages-404-js-a07649909aa7467ba926.js"
  },
  {
    "url": "static/d/164/path---404-html-516-62a-NZuapzHg3X9TaN1iIixfv1W23E.json",
    "revision": "c2508676a2f33ea9f1f0bf472997f9a0"
  },
  {
    "url": "static/d/520/path---offline-plugin-app-shell-fallback-a-30-c5a-NZuapzHg3X9TaN1iIixfv1W23E.json",
    "revision": "c2508676a2f33ea9f1f0bf472997f9a0"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "8bf70ddf99bcc5b217a71147f81169a2"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute("/niwalab-mdblog/offline-plugin-app-shell-fallback/index.html", {
  whitelist: [/^[^?]*([^.?]{5}|\.html)(\?.*)?$/],
  blacklist: [/\?(.+&)?no-cache=1$/],
});

workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/, workbox.strategies.staleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https:/, workbox.strategies.networkFirst(), 'GET');
"use strict";

/* global workbox */
self.addEventListener("message", function (event) {
  var api = event.data.api;

  if (api === "gatsby-runtime-cache") {
    var resources = event.data.resources;
    var cacheName = workbox.core.cacheNames.runtime;
    event.waitUntil(caches.open(cacheName).then(function (cache) {
      return Promise.all(resources.map(function (resource) {
        return cache.add(resource).catch(function (e) {
          // ignore TypeErrors - these are usually due to
          // external resources which don't allow CORS
          if (!(e instanceof TypeError)) throw e;
        });
      }));
    }));
  }
});