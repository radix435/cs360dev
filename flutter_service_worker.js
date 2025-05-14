'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "63bebb4ea01df8caf609932fc1f03d6c",
"version.json": "c2290b934bab670763108971b98e2f0d",
"splash/img/light-background.png": "f8bbc1c8573637d392d3118ad752bcd1",
"index.html": "e39a8b3341d898e580603905d6dad31a",
"/": "e39a8b3341d898e580603905d6dad31a",
"main.dart.js": "0284bc24ef862b1193b234e4d2b17449",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "bcc104c1c1586fe13a115a20181fa0a0",
"assets/AssetManifest.json": "d1f3b1d9443626e55a7ef6d9981ef927",
"assets/NOTICES": "7d0ecb567373c51e741b9d1c1d77aad6",
"assets/FontManifest.json": "d8a8e01e59e9eb1a85df1a42006fa56e",
"assets/AssetManifest.bin.json": "02f394bb124fd4ba39d267833ab87758",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "04f83c01dded195a11d21c2edf643455",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "f3307f62ddff94d2cd8b103daf8d1b0f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "17ee8e30dde24e349e70ffcdc0073fb0",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "7bc4b67776ade625927d6691fb6f5366",
"assets/fonts/OpenSans-SemiBold.ttf": "e2ca235bf1ddc5b7a350199cf818c9c8",
"assets/fonts/OpenSans-Italic.ttf": "60fdf6ed7b4901c1ff534577a68d9c0c",
"assets/fonts/OpenSans-MediumItalic.ttf": "349744a1905053fad6b9ef13c74657db",
"assets/fonts/OpenSans-Bold.ttf": "0a191f83602623628320f3d3c667a276",
"assets/fonts/OpenSans-Medium.ttf": "dac0e601db6e3601159b4aae5c1fda39",
"assets/fonts/MaterialIcons-Regular.otf": "86de0f78b2891684afb09c89d890b8c4",
"assets/fonts/OpenSans-Regular.ttf": "931aebd37b54b3e5df2fedfce1432d52",
"assets/assets/images/collapse_24.svg": "c0ed45af14db982a1bb77172c8eb46df",
"assets/assets/images/icon.png": "e97a9df42a643ef407079cf072a72499",
"assets/assets/images/draw.svg": "d03398d1c0218f1d13f2a180cfa0e13c",
"assets/assets/images/nav_back.svg": "92ae3004ac9faac1a0d8369bba52de83",
"assets/assets/images/arrow_back.svg": "6f89d9d18430961898d0d6cc0f003ab0",
"assets/assets/images/red_pen.svg": "7686f9cd2cd0ff3fe7d28fdac30d9d60",
"assets/assets/images/swipe_24.svg": "3110c8ef55335f3690affabd2b0bfdad",
"assets/assets/images/blue_pen.svg": "fa1d0a770f0bed629f0edc0125e440e7",
"assets/assets/images/video_24.svg": "b2f4a1f1a4471436f9b306c0cbdaa423",
"assets/assets/images/splash_12.png": "f01e6384c24ad4a4630dacb8628705fc",
"assets/assets/images/expand_24.svg": "0ddbf355bb9b586f177b121cd6e3630f",
"assets/assets/images/save.svg": "3889f78bcae6f7b2d418b51fec0a903f",
"assets/assets/images/green_pen.svg": "7135c1a54fc0775367d0a6c133626aa0",
"assets/assets/images/splash.png": "f8bbc1c8573637d392d3118ad752bcd1",
"assets/assets/images/draw_annotate.webp": "bfa8afcfdc0abcaf6028485d5fb2b617",
"assets/assets/images/risk_factors.webp": "7c72cd1c91fe2f892bfd1fa760defa66",
"assets/assets/images/search_duo.svg": "539ac2f2f6e4b7134c185318a3661f2e",
"assets/assets/images/heart-backdrop.webp": "ac29ce5da6d0e7bdf7762ef26c65cffa",
"assets/assets/images/heart_anatomy.webp": "87a67aac750c94511e9dd5a0f7f70f4d",
"assets/assets/images/nav_draw.svg": "04b0a38dd192362d1b691fce73d189bb",
"assets/assets/images/nav_home.svg": "b425b76af585584d54bb2fc8fb5de7b7",
"assets/assets/images/rotate_24.svg": "0b52c780bd06b118f11322288ece2b5e",
"assets/assets/images/delete.svg": "32534a63ef48516ad207434da854c425",
"assets/assets/images/nav_info.svg": "3c69ab11e51b11577afd4b66172827a7",
"assets/assets/images/draw_24.svg": "6a90bce35d2e36f46fe75eee0c494e41",
"assets/assets/images/finger_pointer.svg": "6e6287f74a894ad530e623f46af3fa86",
"assets/assets/images/undo.svg": "9328ec10a90f6586c6997b629dace65d",
"assets/assets/images/nav_search.svg": "dd217ddfbabfb10452a77861efc82577",
"assets/assets/images/logo.svg": "7b16efa75dca89bf74ed21ca833143e0",
"assets/assets/images/arrow_forward.svg": "0de8c2ef4905ea98fd2c1c463e546e4c",
"assets/assets/images/conditions_treatments.webp": "39926943597cd8af75bdcef8b7fc5f65",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
