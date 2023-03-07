'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "e2b6f78693da2fb8e24993e8161e7a17",
"index.html": "ef1afdff8239ed5abcef42a7cd3dba6d",
"/": "ef1afdff8239ed5abcef42a7cd3dba6d",
"main.dart.js": "a76de4d015112a7a79ce781ed0b7ca2e",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "4f654520ada7a2cfd83aa5f6c2bd0ce6",
".git/config": "7ff9b1b5bfc4b2caaf4dc2ea3c236c0d",
".git/objects/61/1742be7ddf4fb06bf788c183da906540f86e2a": "2a54312074a0f4428ef6b9a8f985eb95",
".git/objects/5f/a307f2b5ddd7355e8daad9537cfd022d2d7f88": "51a625fb60c748308f293d942b6b5c11",
".git/objects/05/da387b9d4d3250e1ce380e709092df2db74bd4": "2422435c491170fa9cfa3db4cdac2e39",
".git/objects/a3/56f5fde2c02a61aa4f2fce23640ac9230bd125": "194ef8ed9df9e80bc5186247c025614b",
".git/objects/d9/12457722a0d234ffefd6c3edd79be466a45769": "1670024825e74b8365b28abda466be3b",
".git/objects/bb/aecc5a86721b17dc620b348d237b0fcd1491b1": "ee42528bdc81856e2f7f35ff64ad9088",
".git/objects/d0/63369a8f95761abee27ea0e99b8f7949abdbc9": "cd96d042608ae6a6d112642a2fe4938f",
".git/objects/be/c1d320f3adf0ed1485f64329618fe83d2bdebb": "f5146acb0ad83b36ae22cd72e13130d7",
".git/objects/a5/3dbb6e075cb7f0488b07988a1556ddbe72e029": "51427b7d4fdfe1a743b1cc2c76cfc0de",
".git/objects/d1/315149fda6f0e00ca1948a36f59710900adac7": "d66d154e74fce12085d96e4065181bff",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/e2/98e2da8a1a02089da2e034837e6c32ab762b21": "c7c57e4a50a6c0daf6285966c6234495",
".git/objects/f4/8c33b5561582005e91767509ba825bfccace1d": "23d3d6d38a16969414b2e40fdcaca3d4",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/fd/27fa2e2cf7a320d3809ac36ba68b6959e7724c": "923da0fa60d342bc4ccfba0ac2a41bf1",
".git/objects/e3/1604b9bce9207bf90667160f56a43aee60dc1a": "fa919fc959df59b2859f1e659d7d2a4b",
".git/objects/ca/0536bfe6db3c888324c5b6d2acce1d9cf2ca41": "ea89c040a8b3a68711ae90d0f99d0e9d",
".git/objects/fe/dac35992feb1a482ff97e31f34af1a946689d1": "06b8948157ce2ee9f4b62f7db461af90",
".git/objects/c1/b917d5c258fc2f79f159b9b1d91d53d62f951a": "180348c268647b87cf6ec16c8ea84bcb",
".git/objects/4e/3d0d737d795a3c24f2fb901ed773d56235b980": "296171edaedfea14215405563e1ab226",
".git/objects/73/f596a581db56ad9f80d14725bf3a4a7ec1ae42": "7122ae51f73a52154f9f29a63fd4896c",
".git/objects/1a/cffb18d52e9236880c27b2828ef4881fbf5819": "0973655ac11bafb5ece9516e8afc8423",
".git/objects/28/2fd7f45ac9bd90b881361c024f2490e5dab2a2": "b285d17ecf8ec81798f6d8bcbb68360b",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/7e/8b196df8fadf05620f9ec822bb3a573d15264f": "a3fd8b56f5ce8be860ec953f7f332921",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6b/f5eba5f522c58ae52b786f76be920bbebc2000": "0eb5e67b92a52986d684c9700c83225b",
".git/objects/5c/668147b53c85d30d39af37e0709d8364347527": "1833170f003fc473c4d47b9126f35a71",
".git/objects/37/edb86b2bb1daf6d693a70c588ab57d905e144a": "53275b41baa30e4f68ad1f1bcb783f37",
".git/objects/6c/dc144779742a955b8430b56f8274e4a506b278": "2f91550b7e28b254c64d33c943ce6cfb",
".git/objects/0a/7b68a4b13d37708346c036788085b38d18c3c1": "e34d39495e21c7568ddb0c951209c778",
".git/objects/b1/fc4c696d8a248bec07694fccccf2f51347cd5b": "2526b9a7dda3451dc2519a202ea205a9",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/e8/f99dd4ad3f562440a8a56ee9ae63361a7d613e": "80f59a978793ff3163d81f5e390dbce9",
".git/objects/e9/c80da561234390590663ca9be588eb275948d3": "ca25c32f2d1b77a2596ffb757e9ab5f4",
".git/objects/e7/54cbd3eca7ee20bbad39d857abc238c61f9198": "91261ec52542d724af6e407e8d1de67c",
".git/objects/cb/34465220f435a0fc9d5cdf3254a42b0eb524a2": "cece1841f89df3124e6e711aeadc4b05",
".git/objects/cb/52607facb2f370eca9be95446aac38f793170a": "48c40ebeeea5b36e639a09618f4caf28",
".git/objects/79/906c622ab5a229d184704de3911f2892c6a1d8": "650aefdcd0bd5943b5e0b9f77e4be0c2",
".git/objects/4a/9e978834a22e4f0a93fbd77db11af78cc976b6": "79819f2ded110ce474afafbefd00c0cd",
".git/objects/12/8179e49cca9088ca3d408ffe0e10fc37b7bb0b": "b49d29d1a1523f3a92e910558062cd34",
".git/objects/78/ced7319db40839bd667eefd2bce31702d16942": "17d1955e860980f61d17845b44cf6011",
".git/objects/14/96272ad233a52523a223ac5afbf08a1e48a6e5": "a7cbd153c02ef862b872359899a795cf",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "f47a1c510f408484b34959f36fc504de",
".git/logs/refs/heads/main": "42150d68070387696e6ff82b7f455be7",
".git/logs/refs/remotes/origin/main": "da850bd1f087189c519cf6223045ddd7",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "01fcd9db0c0c7b67ed8c3e60bb86df85",
".git/refs/remotes/origin/main": "01fcd9db0c0c7b67ed8c3e60bb86df85",
".git/index": "ca2bf2f965ee1a15e071b1e2e961662c",
".git/COMMIT_EDITMSG": "69b64623f86def16ce17d454b8be41ae",
"assets/AssetManifest.json": "66282f9533b207a0610f005f1c9e2a19",
"assets/NOTICES": "bac882f5e4d806b36d0ac1b586131b98",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/youtube_player_iframe/assets/player.html": "dc7a0426386dc6fd0e4187079900aea8",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e"
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
