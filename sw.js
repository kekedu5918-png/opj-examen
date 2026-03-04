const CACHE = 'opj-v1';
const FILES = [
  '/opj-examen/',
  '/opj-examen/index.html',
  '/opj-examen/icon.png',
  '/opj-examen/manifest.json'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(c => c.addAll(FILES))
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request))
  );
});
