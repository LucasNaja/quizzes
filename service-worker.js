// const CACHE_NAME = 'v1.0.0'
// 

// this.oninstall = (event) => {
// 	event.waitUntil(
// 		caches.open(CACHE_NAME)
// 		.then((cache) => {
// 			return cache.addAll(CACHE_FILES)
// 		})
// 		// caches.keys().then(cacheNames => {

// 		// 	cacheNames.forEach(item => {
// 		// 		caches.delete(item)
// 		// 	})

// 		// })
// 	)
// }

// this.onfetch = event => {
// 	event.respondWith(
// 		caches.match(event.request)
// 		.then(response => response || fetch(event.request))
// 		.catch(() => caches.match('/offline.html'))
// 	)
// }

const CACHE_VERSION = 1
let CURRENT_CACHES = {
	offline: 'offline-v' + CACHE_VERSION
}
const OFFLINE_URL = '/offline/index.html'
const CACHE_FILES = [
	'/',
	'/images/quizzes_dark.png',
	'/manifest.json',
	'/offline.html'
]

function createCacheBustedRequest(url) {
	let request = new Request(url, {
		cache: 'reload'
	})

	if ('cache' in request) {
		return request
	}

	let bustedUrl = new URL(url, self.location.href)
	bustedUrl.search += (bustedUrl.search ? '&' : '') + 'cachebust=' + Date.now()
	return new Request(bustedUrl)
}

self.addEventListener('install', event => {
	event.waitUntil(
		fetch(createCacheBustedRequest(OFFLINE_URL)).then(async response => {
			const cache = await caches.open(CURRENT_CACHES.offline)
			return cache.put(OFFLINE_URL, response)
		})
	)
})

self.addEventListener('activate', event => {
	let expectedCacheNames = Object.keys(CURRENT_CACHES).map(key => {
		return CURRENT_CACHES[key]
	})

	event.waitUntil(
		caches.keys().then(cacheNames => {
			return Promise.all(
				cacheNames.map(cacheName => {
					if (expectedCacheNames.indexOf(cacheName) === -1) {
						return caches.delete(cacheName)
					}
				})
			)
		})
	)
})

self.addEventListener('fetch', event => {
	if (event.request.mode === 'navigate' || (event.request.method === 'GET' && event.request.headers.get('accept').includes('text/html'))) {
		event.respondWith(
			fetch(event.request).catch(() => {
				return caches.match(OFFLINE_URL)
			})
		)
	}
})
