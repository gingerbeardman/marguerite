audio_initialized=0;noAudio=0;silentMode=1;audioObj=new Array();audioObj[0]=null;audio_alertFlag=0;function AUDIO_INIT(){if(audio_initialized) return;audio_initialized=1;audioObj[0]=null;if(navigator.userAgent.indexOf('Android')>-1 ||    navigator.userAgent.indexOf('iPhone')>-1 ||    navigator.userAgent.indexOf('iPod')>-1 ||    navigator.userAgent.indexOf('iPad')>-1){noAudio=1;if(_t_lang=='en') setMenuItem('MENU_AUDIO', 8, 5, 'Silent Mode.', 'NOAUDIO_ALERT()', 1);else setMenuItem('MENU_AUDIO', 8, 5, '無音モード', 'NOAUDIO_ALERT()', 1);return;}if(navigator.userAgent.indexOf('Goanna/')>-1){noAudio=2;if(_t_lang=='en') setMenuItem('MENU_AUDIO', 8, 5, 'Silent Mode.', 'NOAUDIO_ALERT()', 1);else setMenuItem('MENU_AUDIO', 8, 5, '無音モード', 'NOAUDIO_ALERT()', 1);return;}else {try {if(_t_lang=='en') s='Please make sure to set the volume on your device.';for(i in audio){audioObj[i]=new Audio;audioObj[i].volume=1;audioObj[i].controls=false;audioObj[i].preload='automatic';audioObj[i].autoplay=false;audioObj[i].src=audio[i];audioObj[i].load();}j=4; while(--j>-1){i='dapai'+j;audioObj[i]=new Audio;audioObj[i].volume=1;audioObj[i].controls=false;audioObj[i].preload='automatic';audioObj[i].autoplay=false;audioObj[i].src=audio['dapai'];audioObj[i].load();}j=4; while(--j>-1){i='mopai'+j;audioObj[i]=new Audio;audioObj[i].volume=1;audioObj[i].controls=false;audioObj[i].preload='automatic';audioObj[i].autoplay=false;audioObj[i].src=audio['mopai'];audioObj[i].load();}j=4; while(--j>-1){i='dice'+j;audioObj[i]=new Audio;audioObj[i].volume=1;audioObj[i].controls=false;audioObj[i].preload='automatic';audioObj[i].autoplay=false;audioObj[i].src=audio['dice'];audioObj[i].load();}}catch (e){noAudio=3;if(_t_lang=='en') setMenuItem('MENU_AUDIO', 8, 5, 'Silent Mode.', 'AUDIO_TOGGLE()', 0);else setMenuItem('MENU_AUDIO', 8, 5, '無音モード', 'AUDIO_TOGGLE()', 0);retrun;}}silentMode=0;if(_t_lang=='en') setMenuItem('MENU_AUDIO', 8, 5, 'Sound Mode.', 'AUDIO_TOGGLE()', 0);else setMenuItem('MENU_AUDIO', 8, 5, '有音モード', 'AUDIO_TOGGLE()', 0);}function SHOW_AUDIOMODE(){if(noAudio){if(_t_lang=='en') setMenuItem('MENU_AUDIO', 8, 5, 'Silent Mode.', 'NOAUDIO_ALERT()', 1);else setMenuItem('MENU_AUDIO', 8, 5, '無音モード', 'NOAUDIO_ALERT()', 1);}else if(_t_lang=='en'){if(silentMode) setMenuItem('MENU_AUDIO', 8, 5, 'Silent Mode.', 'AUDIO_TOGGLE()', 0);else setMenuItem('MENU_AUDIO', 8, 5, 'Sound Mode.', 'AUDIO_TOGGLE()', 0);}else {if(silentMode) setMenuItem('MENU_AUDIO', 8, 5, '無音モード', 'AUDIO_TOGGLE()', 0);else setMenuItem('MENU_AUDIO', 8, 5, '有音モード', 'AUDIO_TOGGLE()', 0);}}function NOAUDIO_ALERT(){if(_t_lang=='ja'){if(noAudio>1) alert('ペールムーンでは不具合があるため、音声出力を停止しております。');else if(noAudio>2) alert('お使いの端末では音声出力がサポート出来ません。');else alert('モバイル端末では音声出力をサポートしておりません。');}else {if(noAudio>1) alert('Support of audio is temporally suspended on Pale Moon due to its issue.');else if(noAudio>2) alert('Audio could not be supported on your device.');else alert('Audio is not supported on your mobile device.');}}function AUDIO_TOGGLE(){if(silentMode){silentMode=0;var i, j;if(_t_lang=='en') setMenuItem('MENU_AUDIO', 8, 5, 'Sound Mode.', 'AUDIO_TOGGLE()', 0);else setMenuItem('MENU_AUDIO', 8, 5, '有音モード', 'AUDIO_TOGGLE()', 0);return;}if(_t_lang=='en') setMenuItem('MENU_AUDIO', 8, 5, 'Silent Mode.', 'AUDIO_TOGGLE()', 0);else setMenuItem('MENU_AUDIO', 8, 5, '無音モード', 'AUDIO_TOGGLE()', 0);silentMode=1;}function AUDIO_OUTPUT(audio_data, ifLoop){if(noAudio || silentMode || !audioObj[audio_data]) return;try {if(audioObj[audio_data].currentTime>0){audioObj[audio_data].pause();audioObj[audio_data].currentTime=0;}} catch(e){ ; }audioObj[audio_data].volume=1;audioObj[audio_data].loop=ifLoop;audioObj[audio_data].play();}