const CACHE_NAME = "portfolio-shell-v1";
const APP_ROUTES = [
  "/",
  "/resume",
  "/projects/readora",
  "/projects/quickseat",
  "/projects/notiva",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => cache.addAll(APP_ROUTES))
      .then(() => self.skipWaiting()),
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((cacheNames) =>
        Promise.all(
          cacheNames
            .filter((cacheName) => cacheName !== CACHE_NAME)
            .map((cacheName) => caches.delete(cacheName)),
        ),
      )
      .then(() => self.clients.claim()),
  );
});

self.addEventListener("fetch", (event) => {
  const { request } = event;
  const requestUrl = new URL(request.url);

  if (request.method !== "GET" || requestUrl.origin !== self.location.origin) {
    return;
  }

  if (request.mode === "navigate") {
    event.respondWith(
      fetch(request)
        .then((response) => {
          const responseCopy = response.clone();
          void caches
            .open(CACHE_NAME)
            .then((cache) => cache.put(request, responseCopy));
          return response;
        })
        .catch(async () => (await caches.match(request)) ?? caches.match("/")),
    );
    return;
  }

  event.respondWith(
    caches.match(request).then(async (cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse;
      }

      const response = await fetch(request);
      if (response.ok && response.type === "basic") {
        const responseCopy = response.clone();
        void caches
          .open(CACHE_NAME)
          .then((cache) => cache.put(request, responseCopy));
      }

      return response;
    }),
  );
});
