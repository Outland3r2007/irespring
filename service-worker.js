const CACHE_NAME="iRespring";self.addEventListener("install",(s=>{s.waitUntil(caches.open(CACHE_NAME).then((s=>s.addAll(["/","index.html","styles.css","app.js","apps.json","https://cdn.jsdelivr.net/npm/framework7@8.3.4/framework7-bundle.min.js","https://cdn.jsdelivr.net/npm/framework7-icons@5.0.5/css/framework7-icons.css","background.png","https://cdn.jsdelivr.net/npm/framework7@8.3.4/framework7-bundle.min.css","https://raw.githubusercontent.com/Outland3r2007/irespring/refs/heads/main/springboard/app.plist","https://github.com/Outland3r2007/irespring/raw/refs/heads/main/springboard/SpringBoard.ipa"]))))})),self.addEventListener("fetch",(s=>{s.respondWith(fetch(s.request).then((e=>{const t=e.clone();return caches.open(CACHE_NAME).then((e=>e.put(s.request,t))),e})).catch((()=>caches.match(s.request))))}));
