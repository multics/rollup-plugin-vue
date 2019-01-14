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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "58313f37b9f4952de8232531c8a861bb"
  },
  {
    "url": "assets/css/0.styles.dcae4551.css",
    "revision": "6d079eb24adec22d599ddb69f525f6dd"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.f8f97ce2.js",
    "revision": "146e6a05d0344088c1fcb2ed252787c7"
  },
  {
    "url": "assets/js/2.cf0f7d64.js",
    "revision": "1c6b048b81dfea0ce9854bdbb68e1bc2"
  },
  {
    "url": "assets/js/3.95697403.js",
    "revision": "c5436d4cde72297a593df31511a09a83"
  },
  {
    "url": "assets/js/4.3be7c7ef.js",
    "revision": "deb622ac7896d5fb2f37e577244a4208"
  },
  {
    "url": "assets/js/5.d198a83e.js",
    "revision": "e648ea3393859b8acd4cd267cdd46281"
  },
  {
    "url": "assets/js/6.9644e781.js",
    "revision": "fef372ae939c4813fde6e77c2507c28e"
  },
  {
    "url": "assets/js/7.610a3829.js",
    "revision": "23130fa1add89b8b2be89f9019a517fa"
  },
  {
    "url": "assets/js/8.60bc2663.js",
    "revision": "dff950ac54627b70576e46f7be9f821e"
  },
  {
    "url": "assets/js/9.9e4efe59.js",
    "revision": "d7d75d7f9d278f7909838610e38b8e33"
  },
  {
    "url": "assets/js/app.0e2a5a69.js",
    "revision": "44d35658bf17982e2bbde5033fcafb03"
  },
  {
    "url": "changelog.html",
    "revision": "93a6f3cd6efd5add1523c40a615f3aa1"
  },
  {
    "url": "examples.html",
    "revision": "cf71447e9992542538936db5d4c48380"
  },
  {
    "url": "faqs.html",
    "revision": "8575654b6c941baefd6f69d078277406"
  },
  {
    "url": "getting-started.html",
    "revision": "1fc95d6f80ae9f0c534d60e15cadbc4a"
  },
  {
    "url": "index.html",
    "revision": "567d594a8187688d507ff89e8240b086"
  },
  {
    "url": "logo.png",
    "revision": "b8c50251399a8890d798d2d531ca4d3b"
  },
  {
    "url": "migrating.html",
    "revision": "cc4aa677673a001b02c8752830a3fdc5"
  },
  {
    "url": "options.html",
    "revision": "260da368a42d94fc19ac1a800b93cbdb"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
