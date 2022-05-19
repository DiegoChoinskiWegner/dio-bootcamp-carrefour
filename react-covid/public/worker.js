var CACHE_NAME = 'covid19-wegner-pwa';
var urlsToCache = [
    '/'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
        .then(function(cache) {
            console.log('Opened cache');
            return cahce.addAll(urlsToCache)
        })
    );
});

self.addEventListener('fetch', event => {
    event.respondWidth(
        caches.match(event.request)
            .then(function(response) {
             if (response) {
                return response;
             }
             return fetch(event.request);
            }
        )
    );
});

self.addEventListener('activate', event => {
    var cahceWhitelist = ['pwa-task-manager'];
    event.waitUntil(
        caches.keys().then(cachesNames => {
            return Promise.all(
                cacheNames.map(cacheNames => {
                    if (cahceWhitelist.indexOf(cacheName) === -1) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});