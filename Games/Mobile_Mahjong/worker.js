var cache_name='Mobile_Mahjong';

//	本作品で使用しているキャッシュ
var cache0=cache_name+'0-R030105-1';
var urls0=[
	'/Games/Mobile_Mahjong/HTML5_Resouces/val.js',
	];
var cache1=cache_name+'1-R030105-1';
var urls1=[
	'/Games/Mobile_Mahjong/HTML5_Resouces/judge0.js',
	'/Games/Mobile_Mahjong/HTML5_Resouces/judge1.js',
	'/Games/Mobile_Mahjong/HTML5_Resouces/judge2.js',
	'/Games/Mobile_Mahjong/HTML5_Resouces/judge3.js',
	'/Games/Mobile_Mahjong/HTML5_Resouces/judge4.js',
	'/Games/Mobile_Mahjong/HTML5_Resouces/proc.js',
	];
var cache2=cache_name+'2-R030105-1';
var urls2=[
	'/Games/Mobile_Mahjong/HTML5_Resouces/audioLib.js',
	'/Games/Mobile_Mahjong/HTML5_Resouces/graphcLib.js',
	'/Games/Mobile_Mahjong/HTML5_Resouces/graphics.js',
	'/Games/Mobile_Mahjong/HTML5_Resouces/graphics1.js',
	'/Games/Mobile_Mahjong/HTML5_Resouces/graphics2.js',
	];
var cache3=cache_name+'3-R010827-1';
var urls3=[
	'/Games/Mobile_Mahjong/HTML5_Resouces/Tiles.GIF',
	];
var cache4=cache_name+'4-H301001';
var urls4=[
	'/Games/Mobile_Mahjong/HTML5_Resouces/audio_data.js',
	'/Games/Mobile_Mahjong/HTML5_Resouces/audio_voice.MP3',
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

		event.waitUntil(
			caches.open(cache4).then(
				function(c) {
					return c.addAll(urls4);
					}
				)
			);
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


