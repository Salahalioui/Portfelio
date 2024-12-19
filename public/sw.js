const CACHE_NAME = 'portfolio-v1'
const DYNAMIC_CACHE = 'dynamic-v1'

// Assets to cache on install
const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/manifest.json',
  '/favicon.ico',
  '/assets/images/og-image.jpg',
  // Add other static assets here
]

// Install event - cache static assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(STATIC_ASSETS)
    })
  )
  self.skipWaiting()
})

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys
          .filter((key) => key !== CACHE_NAME && key !== DYNAMIC_CACHE)
          .map((key) => caches.delete(key))
      )
    })
  )
  self.clients.claim()
})

// Fetch event - network first with cache fallback strategy
self.addEventListener('fetch', (event) => {
  // Skip non-GET requests
  if (event.request.method !== 'GET') return

  // Handle API requests differently
  if (event.request.url.includes('/api/')) {
    event.respondWith(networkFirst(event.request))
    return
  }

  // For other requests, try cache first with network fallback
  event.respondWith(cacheFirst(event.request))
})

// Cache first strategy
async function cacheFirst(request) {
  const cachedResponse = await caches.match(request)
  if (cachedResponse) {
    return cachedResponse
  }
  try {
    const networkResponse = await fetch(request)
    if (networkResponse.ok) {
      const cache = await caches.open(DYNAMIC_CACHE)
      cache.put(request, networkResponse.clone())
    }
    return networkResponse
  } catch (error) {
    return new Response('Network error happened', {
      status: 408,
      headers: { 'Content-Type': 'text/plain' },
    })
  }
}

// Network first strategy
async function networkFirst(request) {
  try {
    const networkResponse = await fetch(request)
    if (networkResponse.ok) {
      const cache = await caches.open(DYNAMIC_CACHE)
      cache.put(request, networkResponse.clone())
    }
    return networkResponse
  } catch (error) {
    const cachedResponse = await caches.match(request)
    if (cachedResponse) {
      return cachedResponse
    }
    return new Response('Network error happened', {
      status: 408,
      headers: { 'Content-Type': 'text/plain' },
    })
  }
}
