// service-worker.js

self.addEventListener("install", function (event) {
  event.waitUntil(
    caches.open("cache-v1").then(function (cache) {
      return cache.addAll([
        "/",
        "/index.html",
        "styles/css/style.css",
        "scripts/script.js",
        "assets/avatar2.png",
        "assets/languages/c--4.svg",
        "assets/languages/css.svg",
        "assets/languages/figma.svg",
        "assets/languages/html.svg",
        "assets/languages/javascript.svg",
        "assets/languages/next-js.svg",
        "assets/languages/react-2.svg",
        "assets/languages/React-icon.svg",
        "assets/languages/react-native-1.svg",
        "assets/languages/sass.svg",
        "assets/languages/tailwindcss.svg",
      ]);
    })
  );
});

self.addEventListener("fetch", function (event) {
  event.respondWith(
    caches.match(event.request).then(function (response) {
      return response || fetch(event.request);
    })
  );
});
