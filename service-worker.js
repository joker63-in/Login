const CACHE_NAME = "wifi-cache-v1";
const FILES_TO_CACHE = [
  "index.html",
  "halaman.html",
  "codes.json",
  "logo.png",
  "background.png",
  "manifest.json"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(FILES_TO_CACHE);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});