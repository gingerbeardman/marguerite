audio_initialized=0;noAudio=0;silentMode=1;audioObj=new Array();audioObj[0]=null;audio_alertFlag=0;function AUDIO_INIT(){if(audio_initialized) return;audio_initialized=1;if(navigator.userAgent.indexOf('Android')>-1 ||    navigator.userAgent.indexOf('iPhone')>-1 ||    navigator.userAgent.indexOf('iPod')>-1 ||    navigator.userAgent.indexOf('iPad')>-1){noAudio=1;setMenuItem('MENU_AUDIO', 8, 5, '無音モード', 'NOAUDIO_ALERT()', 1);return;}if(navigator.userAgent.indexOf('Goanna/')>-1){noAudio=2;setMenuItem('MENU_AUDIO', 8, 5, '無音モード', 'NOAUDIO_ALERT()', 1);return;}else {try {j=4; while(--j>-1){i='kirifuda'+j;audioObj[i]=new Audio;audioObj[i].controls=false;audioObj[i].autoplay=true;audioObj[i].src=audio['kirifuda'];audioObj[i].load();audioObj[i].volume=0;}j=4; while(--j>-1){i='mekurifuda'+j;audioObj[i]=new Audio;audioObj[i].controls=false;audioObj[i].autoplay=true;audioObj[i].src=audio['mekurifuda'];audioObj[i].load();audioObj[i].volume=0;}for(i in audio){audioObj[i]=new Audio;audioObj[i].controls=false;audioObj[i].autoplay=false;audioObj[i].src=audio[i];audioObj[i].load();}}catch (e){noAudio=3;setMenuItem('MENU_AUDIO', 8, 5, '無音モード', 'AUDIO_TOGGLE()', 0);return;}}silentMode=0;audioObj[0]=null;setMenuItem('MENU_AUDIO', 8, 5, '有音モード', 'AUDIO_TOGGLE()', 0);}function SHOW_AUDIOMODE(){if(noAudio){setMenuItem('MENU_AUDIO', 8, 5, '無音モード', 'NOAUDIO_ALERT()', 1);}else {if(silentMode) setMenuItem('MENU_AUDIO', 8, 5, '無音モード', 'AUDIO_TOGGLE()', 0);else setMenuItem('MENU_AUDIO', 8, 5, '有音モード', 'AUDIO_TOGGLE()', 0);}}function NOAUDIO_ALERT(){if(noAudio>1) alert('ペールムーンでは不具合があるため、音声出力を停止しております。');else if(noAudio>2) alert('お使いの端末では音声出力がサポート出来ません。');else alert('モバイル端末では音声出力をサポートしておりません。');}function AUDIO_TOGGLE(){if(silentMode){silentMode=0;var i, j;setMenuItem('MENU_AUDIO', 8, 5, '有音モード', 'AUDIO_TOGGLE()', 0);return;}setMenuItem('MENU_AUDIO', 8, 5, '無音モード', 'AUDIO_TOGGLE()', 0);silentMode=1;}function AUDIO_OUTPUT(audio_data, ifLoop){if(noAudio || silentMode || !audioObj[audio_data]) return;audioObj[audio_data].loop=ifLoop;audioObj[audio_data].volume=1;audioObj[audio_data].play();}