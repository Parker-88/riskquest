const CACHE="riskquest-1786520476675";
const ASSETS=[
  "./assets/curriculum.Ca37niSf.js",
  "./assets/home-BMySrwuU.css",
  "./assets/index-BCGZ7Hfs.css",
  "./assets/index-ocFxaVVl.js",
  "./assets/interview-DvjklYc5.css",
  "./assets/pages-home-home.B_p0WsJH.js",
  "./assets/pages-interview-interview.CBpQuADB.js",
  "./assets/pages-profile-profile.B7E2IMCB.js",
  "./assets/pages-roadmap-roadmap.D4CBIdJF.js",
  "./assets/pages-train-train.DdDyLAew.js",
  "./assets/profile-CzhyCvLe.css",
  "./assets/roadmap-DL05_JKM.css",
  "./assets/train-B0lrwda-.css",
  "./assets/uni.9848b6a9.css",
  "./assets/_plugin-vue_export-helper.BCo6x5W8.js",
  "./icons/icon-192.svg",
  "./icons/icon-512.svg",
  "./index.html",
  "./manifest.webmanifest",
  "./offline.html"
];
self.addEventListener('install',event=>{event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(ASSETS)).then(()=>self.skipWaiting()))});
self.addEventListener('activate',event=>{event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(key=>key!==CACHE).map(key=>caches.delete(key)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',event=>{
  if(event.request.method!=='GET')return;
  event.respondWith(caches.match(event.request).then(cached=>cached||fetch(event.request).then(response=>{
    if(response&&response.ok&&new URL(event.request.url).origin===self.location.origin){const copy=response.clone();caches.open(CACHE).then(cache=>cache.put(event.request,copy))}
    return response;
  }).catch(()=>event.request.mode==='navigate'?caches.match('./index.html').then(r=>r||caches.match('./offline.html')):caches.match('./offline.html'))));
});