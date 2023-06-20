_t_sysPWA=1;

var cache_name='Hanafuda';

//	本作品で使用しているキャッシュ
var cache0=cache_name+'0-R020611-1';
var urls0=[
	'/Games/Marguerite_Hanafuda/Hanafuda.html',
	'/Games/Marguerite_Hanafuda/HTML5_Resouces/vals.js',
	];
var cache1=cache_name+'1-R020611-1';
var urls1=[
	'/Games/Marguerite_Hanafuda/HTML5_Resouces/judge01.js',
	'/Games/Marguerite_Hanafuda/HTML5_Resouces/judge02.js',
	'/Games/Marguerite_Hanafuda/HTML5_Resouces/judge03.js',
	'/Games/Marguerite_Hanafuda/HTML5_Resouces/judge04.js',
	'/Games/Marguerite_Hanafuda/HTML5_Resouces/routines01.js',
	'/Games/Marguerite_Hanafuda/HTML5_Resouces/routines02.js',
	];
var cache2=cache_name+'2-R020610-1';
var urls2=[
	'/Games/Marguerite_Hanafuda/HTML5_Resouces/audioLib.js',
	'/Games/Marguerite_Hanafuda/HTML5_Resouces/graphcLib.js',
	'/Games/Marguerite_Hanafuda/HTML5_Resouces/graphc1.js',
	'/Games/Marguerite_Hanafuda/HTML5_Resouces/graphc2.js',
	'/Games/Marguerite_Hanafuda/HTML5_Resouces/graphc3.js',
	'/Games/Marguerite_Hanafuda/HTML5_Resouces/graphc4.js',
	'/Games/Marguerite_Hanafuda/HTML5_Resouces/graphc5.js',
	];
var cache3=cache_name+'3-R020518-1';
var urls3=[
	'/Games/Marguerite_Hanafuda/HTML5_Resouces/Fuda-Base.GIF',
	'/Games/Marguerite_Hanafuda/HTML5_Resouces/Atract.GIF',
	];
var cache4=cache_name+'4-R011115-1';
var urls4=[
	'/Games/Marguerite_Hanafuda/HTML5_Resouces/audio1.js',
	'/Games/Marguerite_Hanafuda/HTML5_Resouces/audio2.js',
	'/Games/Marguerite_Hanafuda/HTML5_Resouces/audio3.js',
	'/Games/Marguerite_Hanafuda/HTML5_Resouces/audio4.js',
	'/Games/Marguerite_Hanafuda/HTML5_Resouces/audio5.js',
	];

// インストール処理
self.addEventListener('install',
	function(event) {
		event.waitUntil(self.skipWaiting());

		event.waitUntil(
			caches.open(cache0).then(
				function(c) {
					return c.addAll(urls0);
					}
				)
			);

		event.waitUntil(
			caches.open(cache1).then(
				function(c) {
					return c.addAll(urls1);
					}
				)
			);

		event.waitUntil(
			caches.open(cache2).then(
				function(c) {
					return c.addAll(urls2);
					}
				)
			);

		event.waitUntil(
			caches.open(cache3).then(
				function(c) {
					return c.addAll(urls3);
					}
				)
			);

		if (urls4.length>0) {
			event.waitUntil(
				caches.open(cache4).then(
					function(c) {
						return c.addAll(urls4);
						}
					)
				);
			}
		}
	);

//	キャッシュ更新確認
self.addEventListener('activate',
	function(event) {
		event.waitUntil(self.clients.claim());
		event.waitUntil(
			caches.keys().then(
				function(keys) {
					return (Promise.all(
						keys.map(
							function(key) {
								if (key.substring(0, cache_name.length)==cache_name && key!=cache0 && key!=cache1 && key!=cache2 && key!=cache3 && key!=cache4) {
									return (caches.delete(key));
									}
								}
							)
						));
					}
				)
			);
		}
	);

//	リソースリクエスト時
//	※ここでは新たなキャッシュ追加はしない
self.addEventListener('fetch',
	function(event) {
		event.respondWith(
			caches.match(event.request).then(
				function(response) {
					// キャッシュがあったのでレスポンスを返す
					if (response) {
						return(response);
						}
					// キャッシュになかったのでネットワークから取得させる
					return fetch(event.request);
					}
				)
			);
		}
	);
