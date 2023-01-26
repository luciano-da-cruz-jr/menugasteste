'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "884df89db2fad20f3660e92fce6c3d5b",
"assets/assets/logo.png": "2c1fe3019122ee546ba90b2fd0a4d134",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/imagens/_01LOGOLARANJA.png": "591db9ba613fde3ab64aa713038962e2",
"assets/imagens/_02mapasMENUBRBUSCAR.png": "ec658d1b606dd83bcd79a1e7710a411f",
"assets/imagens/_03google-signin-button.png": "c9e3d9ec5f77cd618e2763256f9be97b",
"assets/imagens/_04bolinhatodaazul.png": "c1c257c77d95c5a6f673477c2d235777",
"assets/imagens/_05bolinhatodaazul.png": "6d99297941f95b49fde6ab06d78b8d7f",
"assets/imagens/_06UAUU.png": "ea80fe1cc6cb5094801a1f425cdb7c31",
"assets/NOTICES": "a1d19c9f4445cc7f21f7502acc2e296f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "99f29024aee8f4672a47cc3a81b9b84a",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "48ce1bb8a42776caa951cb782d277730",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "d8e9b6203ce2657c991f0b339ccb3a6d",
"assets/shaders/ink_sparkle.frag": "3711a1300dfae3a161efbc6b23decda9",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "51bb19043abe89acc5c64cfb76c54498",
"/": "343e77612456f81a60a76775e05c1c8a",
"main.dart.js": "309036f3a10a481d0a0f66b0de821eb8",
"manifest.json": "7a0a451aaf11ba5159fc46f09f94eb3a",
"menugasteste/.git/config": "9965cbed4f94437504f0e5cab8629c02",
"menugasteste/.git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
"menugasteste/.git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
"menugasteste/.git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
"menugasteste/.git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
"menugasteste/.git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
"menugasteste/.git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
"menugasteste/.git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
"menugasteste/.git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
"menugasteste/.git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
"menugasteste/.git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
"menugasteste/.git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
"menugasteste/.git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
"menugasteste/.git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
"menugasteste/.git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
"menugasteste/.git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
"menugasteste/.git/index": "12685bacb964f645062dd76ec4fe9154",
"menugasteste/.git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"menugasteste/.git/logs/HEAD": "3269d95e9bfb1a30cc7c21fa09ae8720",
"menugasteste/.git/logs/refs/heads/master": "3269d95e9bfb1a30cc7c21fa09ae8720",
"menugasteste/.git/logs/refs/remotes/origin/HEAD": "3269d95e9bfb1a30cc7c21fa09ae8720",
"menugasteste/.git/objects/pack/pack-413852a2d67bd4cabb4c1ab18a471c651799b023.idx": "76b3593f765b1a9e160ff0b54e1a5975",
"menugasteste/.git/objects/pack/pack-413852a2d67bd4cabb4c1ab18a471c651799b023.pack": "ec30475be092a02281365d022163c999",
"menugasteste/.git/packed-refs": "d2e5ac20badf01fd9fb375a41dd54ec2",
"menugasteste/.git/refs/heads/master": "ffee78858d622cac514bfe46cc510b92",
"menugasteste/.git/refs/remotes/origin/HEAD": "73a00957034783b7b5c8294c54cd3e12",
"menugasteste/assets/AssetManifest.json": "884df89db2fad20f3660e92fce6c3d5b",
"menugasteste/assets/assets/logo.png": "2c1fe3019122ee546ba90b2fd0a4d134",
"menugasteste/assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"menugasteste/assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"menugasteste/assets/imagens/04_LOGOUT.PNG": "61acbb6baa6d926b0333bb4e3f42972f",
"menugasteste/assets/imagens/_01LOGOLARANJA.png": "591db9ba613fde3ab64aa713038962e2",
"menugasteste/assets/imagens/_02mapasMENUBRBUSCAR.png": "ec658d1b606dd83bcd79a1e7710a411f",
"menugasteste/assets/imagens/_03google-signin-button.png": "c9e3d9ec5f77cd618e2763256f9be97b",
"menugasteste/assets/imagens/_04bolinhatodaazul.png": "c1c257c77d95c5a6f673477c2d235777",
"menugasteste/assets/imagens/_05bolinhatodaazul.png": "6d99297941f95b49fde6ab06d78b8d7f",
"menugasteste/assets/imagens/_06UAUU.png": "ea80fe1cc6cb5094801a1f425cdb7c31",
"menugasteste/assets/NOTICES": "a1d19c9f4445cc7f21f7502acc2e296f",
"menugasteste/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"menugasteste/assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "99f29024aee8f4672a47cc3a81b9b84a",
"menugasteste/assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "48ce1bb8a42776caa951cb782d277730",
"menugasteste/assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "d8e9b6203ce2657c991f0b339ccb3a6d",
"menugasteste/assets/shaders/ink_sparkle.frag": "3711a1300dfae3a161efbc6b23decda9",
"menugasteste/canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"menugasteste/canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"menugasteste/canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"menugasteste/canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"menugasteste/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"menugasteste/flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"menugasteste/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"menugasteste/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"menugasteste/icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"menugasteste/icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"menugasteste/index.html": "343e77612456f81a60a76775e05c1c8a",
"menugasteste/main.dart.js": "309036f3a10a481d0a0f66b0de821eb8",
"menugasteste/manifest.json": "7a0a451aaf11ba5159fc46f09f94eb3a",
"menugasteste/version.json": "3aa71dbbb25f71342e85c31002d77c84",
"version.json": "3aa71dbbb25f71342e85c31002d77c84"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
