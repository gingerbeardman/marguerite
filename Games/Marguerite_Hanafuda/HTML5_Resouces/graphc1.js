_f_cushionColor='#008020';function _f_leftText(n, x, y, w, h, col, text){var e;newTextArea(n, x, y, w, h, 27, 'transparent', col);e=document.getElementById(n);e.style.textAlign='left';e.style.fontFamily='serif';e.style.lineHeight='1em';e.style.verticalAlign='text-top';e.style.color=col;e.innerHTML=text;return(e);}function _f_rightText(n, x, y, w, h, col, text){var e;newTextArea(n, x, y, w, h, 27, 'transparent', col);e=document.getElementById(n);e.style.textAlign='right';e.style.fontFamily='serif';e.style.lineHeight='1em';e.style.verticalAlign='text-top';e.style.color=col;e.innerHTML=text;return(e);}function _f_centerText(n, x, y, w, h, col, text){var e;newTextArea(n, x, y, w, h, 27, 'transparent', col);e=document.getElementById(n);e.style.textAlign='center';e.style.fontFamily='serif';e.style.lineHeight='1em';e.style.verticalAlign='text-top';e.style.color=col;e.innerHTML=text;return(e);}function _f_leftSmallText(n, x, y, w, h,  col, text){var e;newTextArea(n, x, y, w, h, 25, '#000', col);e=document.getElementById(n);e.style.textAlign='left';e.style.fontFamily='serif';e.style.lineHeight='1em';e.style.verticalAlign='text-top';e.style.color=col;e.innerHTML=text;}function _f_textWindow(n, x, y, w, h,  col){var e, i;newTextArea(n, x, y, w, h, 29, '#000', '#fff');e=document.getElementById(n);e.style.textAlign='center';e.style.fontFamily='serif';e.style.color=col;if((i=Math.floor(4*rRatio))<2) i=1;e.style.border=i+'px solid #ffffcc';return(e);}function _f_horizontal_rule(n, x, y, w, h){newTextArea(n, x, y, w, h, 29, '#ffc', '#ffc');}function _f_cushion_color(){var i=4; while(--i>-1) clearTimeout(_h5_sprite[i].timeout);i=3; while(--i>-1){clearTimeout(_f_h5_blinkTefuda[i]);clearTimeout(_f_h5_blinkTorifuda[i]);}clearTimeout(_f_h5_blinkBafuda);_f_h5_blinkTefuda_flag=[0, 0, 0];_f_h5_blinkTorifuda_flag=[0, 0, 0];_f_h5_blinkBafuda_flag=0;_f_cushionColor='#008020';if(_f_rule_sel['UI_cushion']==1) _f_cushionColor='#0020c0';if(_f_rule_sel['UI_cushion']==0) _f_cushionColor='#000000';if(_f_rule_sel['UI_cushion']==3) _f_cushionColor='#770000';initCanvas(_f_cushionColor);var i=4; while(--i>-1){createSprite('H5_SPRITE-'+i, -200, -200, _f_fudaHeight, _f_fudaHeight);_h5_sprite[i]=new Object();_h5_sprite[i].id='H5_SPRITE-'+i;}i=_f_te_torefuda.length; while(--i>-1) _f_te_torefuda[i]=0;}_f_wasuji_table=new Array('', '一', '二', '三', '四', '五', '六', '七', '八', '九');function _f_to_wasuji(val){var s='', i;if((i=val)==0) return('零');i %= 10000;if(i>=2000) s+=_f_wasuji_table[Math.floor(i/100)];if(i>=1000) s+='千';i %= 1000;if(i>=200) s+=_f_wasuji_table[Math.floor(i/100)];if(i>=100) s+='百';i %= 100;if(i>=20) s+=_f_wasuji_table[Math.floor(i/10)];if(i>=10) s+='十';return(s+_f_wasuji_table[i % 10]);}function _f_fuda_disp(code, x, y, width, height, dir, keycode, blk){var i=(code >> 4) & 15, j=code & 15, o, w=width, h=height, dir2=dir, n;var kc=keycode;var sx, sy, dx=x, dy=y;if(!code) return;if(code & 0x100){if(dir==0){ dir2=180; }else if(dir==180){ dir2=0; }else if(dir==90){ dir2=270; }else if(dir==270){ dir2=90; }}if(dir==90 || dir==270){if(w<1) w=_f_fudaHeight;if(h<1) h=_f_fudaWidth;dx=x-(w >> 1);dy=y-(h >> 1);if(code>0 && (code & 0xff)!=0xff){if(dir==270){if(j<4){sx=1818+220*j;sy=1828-140*i;}else {sx=2700;sy=1830-140*i;}}else {if(j<4){sx=3794-220*j;sy=-132+140*i;}else {sx=2914;sy=-132+140*i;}}putPartOfImage(image[0], sx, sy, 212, 132, dx, dy, w, h);if(!_f_fudaBack) putPartOfImage(image[0], 2478, 8, 212, 132, dx, dy, w, h);}else {sx=1818; sy=8;if(!_f_fudaBack) sx=2698;putPartOfImage(image[0], sx, sy, 212, 132, dx, dy, w, h);}}else {if(w<1) w=_f_fudaWidth;if(h<1) h=_f_fudaHeight;dx=x-(w >> 1);dy=y-(h >> 1);if(code>0 && (code & 0xff)!=0xff){if(dir){if(j<4){sx=1680-140*i;sy=1985-220*j;}else {sx=1680-140*i;sy=1105;}}else {if(j<4){sx=-140+140*i;sy=8+220*j;}else {sx=-140+140*i;sy=888;}}putPartOfImage(image[0], sx, sy, 132, 212, dx, dy, w, h);if(!_f_fudaBack) putPartOfImage(image[0], 1680, 668, 132, 212, dx, dy, w, h);}else {sx=1680; sy=8;if(!_f_fudaBack) sy=888;putPartOfImage(image[0], sx, sy, 132, 212, dx, dy, w, h);}}if(code<0 || (code & 0xff)==0xff) return;if(code & 0x200) putRectangle(dx, dy, w, h, 'rgba(0, 0, 0, 0.2)');if(blk || kc>1000){if(dir==90 || dir==270){sx=2038; sy=8;if(blk<0 || kc>1010) sx=2258;putPartOfImage(image[0], sx, sy, 212, 132, dx, dy, w, h);}else {sx=1680; sy=228;if(blk<0 || kc>1010) sy=448;putPartOfImage(image[0], sx, sy, 132, 212, dx, dy, w, h);}}return;}function _f_h5_fuda_disp_2sprite(spriteID, code, width, height, dir){var i=(code >> 4) & 15, j=code & 15, o, w=width, h=height, dir2=dir, n;var sx, sy, dx, dy;if(!code) return;clearSprite(spriteID);if(code & 0x100){if(dir==0){ dir2=180; }else if(dir==180){ dir2=0; }else if(dir==90){ dir2=270; }else if(dir==270){ dir2=90; }}if(dir2==90 || dir2==270){if(w<1) w=_f_fudaHeight;if(h<1) h=_f_fudaWidth;if(code>0 && (code & 0xff)!=0xff){if(dir2==270){if(j<4){sx=1818+220*j;sy=1828-140*i;}else {sx=2700;sy=1830-140*i;}}else {if(j<4){sx=3794-220*j;sy=-132+140*i;}else {sx=2914;sy=-132+140*i;}}putPartOfImage2Sprite(spriteID, image[0], sx, sy, 212, 132, 0, 0, w, h);if(!_f_fudaBack) putPartOfImage2Sprite(spriteID, image[0], 2478, 8, 212, 132, 0, 0, w, h);}else {sx=1818; sy=8;if(!_f_fudaBack) sx=2698;putPartOfImage2Sprite(spriteID, image[0], sx, sy, 212, 132, 0, 0, w, h);}}else {if(w<1) w=_f_fudaWidth;if(h<1) h=_f_fudaHeight;if(code>0 && (code & 0xff)!=0xff){if(dir2){if(j<4){sx=1680-140*i;sy=1985-220*j;}else {sx=1680-140*i;sy=1105;}}else {if(j<4){sx=-140+140*i;sy=8+220*j;}else {sx=-140+140*i;sy=888;}}putPartOfImage2Sprite(spriteID, image[0], sx, sy, 132, 212, 0, 0, w, h);if(!_f_fudaBack) putPartOfImage2Sprite(spriteID, image[0], 1680, 668, 132, 212, 0, 0, w, h);}else {sx=1680; sy=8;if(!_f_fudaBack) sy=888;putPartOfImage2Sprite(spriteID, image[0], sx, sy, 132, 212, 0, 0, w, h);}}return;}function _f_wait4next(){clearTimeout(_f_h5_next);var i=Math.random();_f_h5_next=setTimeout('_f_wait4next()', 20);}function _f_textButton(d, x, y, w, h, tex, keyname, keyval, mess){var e, t=tex, v=_f_rule_sel[keyname] || 0;_f_leftText('OPTION_'+d, x, y, w, h, '#999', '');e=document.getElementById('OPTION_'+d);if(v==keyval){e.style.color='#fff';e.style.fontWeight='bold';}else {e.style.fontWeight='normal';t='<a style="cursor: pointer; color: #aaa; text-decoration: none; display: block; margin: 0; width: '+Math.floor(w*rRatio)+'px; " ontouchstart="_f_textButton_input(\''+keyname+'\', '+keyval+', null); touched=1; return(false); " onclick="if(!touched) _f_textButton_input(\''+keyname+'\', '+keyval+', null); return(false); ">'+tex+'</a>';}e.innerHTML=t;return(d+1);}function _f_textButton2(d, x, y, w, h, tex, label, mess){var e, t=tex;_f_leftText('OPTION_'+d, x, y, w, h, '#999', '');e=document.getElementById('OPTION_'+d);e.style.fontWeight='bold';t='<a style="cursor: pointer; color: #fff; text-decoration: none; display: block; margin: 0; width: '+Math.floor(w*rRatio)+'px; " ontouchstart="_f_textButton_input(\'\', 0, \''+label+'()\'); touched=1; return(false); " onclick="if(!touched) _f_textButton_input(\'\', 0, \''+label+'()\'); return(false); ">'+tex+'</a>';e.innerHTML=t;return(d+1);}_f_nextScreen='';function _f_textButton_input(keyname, keyval, d){var dest=d || _f_nextScreen;clearTimeout(_f_random);clearTimeout(_f_h5_next);if(keyname!='') _f_rule_sel[keyname]=keyval;if(keyname=='UI_noSprite'){_f_toggle_sprite_disp(0);}_f_h5_next=setTimeout(dest, 10);}function _f_h5_menu_ja(){_f_cushion_color();var cs=30; margin=16; blines=4; bcolumns=16;var ch=cs+blines;var w=cs*32+margin*2+bcolumns*3;var h=cs*24+blines*5+cs+margin*2;var xh=600-w/2, yh=450-h/2;clearTimeout(_f_h5_next);removeAllOfTextArea();_f_textWindow('SCREEN_FIELD', xh, yh, w, h, '#fff');var e=document.getElementById('SCREEN_FIELD');e.style.background='transparent';putRectangle(xh, yh, w, h, '#000');xh+=margin;yh+=margin;putPartOfImage(image[0], 3300, 1800, 240, 280, xh+w-252, yh+h-292, 240, 280);drawText('創作キャラクタ・堀北真希うさぎ '+String.fromCharCode(0x25B6), xh+w-260, yh+h-margin*2-6, 14*15, 14, true, 14, 14, 'transparent', '#eee', 'right');_f_leftSmallText('COPYRIGHT_CREDIT', xh, yh+ch*22, cs*24, 24, '#fff', 'Copyright'+String.fromCharCode(0xA9)+_f_copyright);_f_leftText('HEADINGS', xh, yh, cs*14, ch, '#fff', '<b>『しらぎく花札』</b>');_f_leftSmallText('HEADINGS_VERSION', xh, yh+ch+4, cs*30, 24, '#fff', _f_version);e=document.getElementById('COPYRIGHT_CREDIT');e.style.background='transparent';newAnchorArea('1', xh+w-252, yh+h-292, 240, 280, 'HORIKITA_ANCHOR', 10, 'transparent', '#fff');e=document.getElementById('HORIKITA_ANCHOR');e.setAttribute('onclick', 'MENU_HORIKITA_MAKI_USAGI(); return(false); ');e.style.cursor='pointer';}function MENU_HORIKITA_MAKI_USAGI(){var e;if((e=document.getElementById('MENU_HORIKITA_MAKI_USAGI_W'))!=null){e.parentNode.removeChild(e);return;}_f_textWindow('MENU_HORIKITA_MAKI_USAGI_W', 200, 450, 600, 240, '#fff');e=document.getElementById('MENU_HORIKITA_MAKI_USAGI_W');e.style.padding='1em';e.style.textAlign='left';e.style.fontFamily='monospace';e.innerHTML='<p style="margin: 0; ">『しらぎく花札』制作者の創作キャラクタ「<strong style="color: #ff0; font-weight: bold; ">堀北真希うさぎ</strong>」です。</p>'+'<p style="margin: 1em 0; ">※『しらぎく花札』には登場しません。</p>'+'<p style="margin: 3.5em 0; text-align: center !important; ">[<a style="color: #ff0; text-decoration: none; font-weight: bold;  " href="http:/'+'/www.marguerite.jp/Nihongo/Features/%E5%A0%80%E5%8C%97%E7%9C%9F%E5%B8%8C%E3%81%86%E3%81%95%E3%81%8E.html">堀北真希うさぎの詳細</a>] 　[<a style="color: #ff0; text-decoration: none; font-weight: bold; cursor: pointer; " onclick="MENU_HORIKITA_MAKI_USAGI(); return(false); ">　閉じる　</a>]'+'';}function QUIT_GAME(){if(confirm('現在のゲームを終了して、お品書きに戻りますか？')){clearTimeout(_f_h5_next);clearTimeout(_f_random);clearTimeout(_h5_sprite[0].timeout);clearTimeout(_h5_sprite[1].timeout);clearTimeout(_h5_sprite[2].timeout);clearTimeout(_h5_sprite[3].timeout);var i=3; while(--i>-1){clearTimeout(_f_h5_blinkTefuda[i]);clearTimeout(_f_h5_blinkTorifuda[i]);}clearTimeout(_f_h5_blinkBafuda);_f_movie_ctr=0;MENU();}}function WAIT_MOVIE(nxt){clearTimeout(_f_h5_next);var i=Math.random();if(_f_movie_ctr<1){_f_h5_next=setTimeout(nxt+'(); ', 10);return;}_f_h5_next=setTimeout('WAIT_MOVIE("'+nxt+'"); ', 10);}function WAIT_MINICONSOLE(nxt){var i=Math.random();if(inputKey>0){inputKey=0;_f_h5_next=setTimeout(nxt+'(); ', 10);return;}_f_h5_next=setTimeout('WAIT_MINICONSOLE("'+nxt+'"); ', 10);}