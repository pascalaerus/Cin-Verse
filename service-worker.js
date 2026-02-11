const CACHE_NAME = "cineverse-cache-v1";
const urlsToCache = [
  "/index.html",
  "/manifest.json",
  "/style.css",
  "/script.js",
  "/icon-192.png",
  "/icon-512.png"
];

self.addEventListener("install", event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache)));
});

self.addEventListener("activate", event => console.log("Service Worker activated"));

self.addEventListener("fetch", event => {
  event.respondWith(caches.match(event.request).then(resp => resp || fetch(event.request)));
});