const CACHE_NAME = "static-cache-v2";
const DATA_CACHE_NAME = "data-cache-v1";

const iconSizes = ["192", "512"];
const iconFiles = iconSizes.map(
  (size) => `/assets/images/icons/icon-${size}x${size}.png`
);

const staticFilesToPreCache = [
  "/",
  "/index.html",
  "/index.js",
  "/manifest.webmanifest",
  "/style.css"
].concat(iconFiles);

// install
self.addEventListener("install", function(evt) {
  evt.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      console.log("Your files were pre-cached successfully!");
      return cache.addAll(staticFilesToPreCache);
    })
  );

  self.skipWaiting();
});