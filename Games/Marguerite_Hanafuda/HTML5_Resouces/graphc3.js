function _f_yaku_disp(dmode, seki, str){var cs=29, w, h, margin=16, blines=4, bcolumns=16;var i, j, k,o, x, y, x1, y1, r=0, e, n;_f_charMode=0;if(dmode>-1){cs=24;_f_charMode=1;}w=cs*16+margin*2+bcolumns;h=(cs+blines)*9+margin*2;if((_f_gamemode==_F_GAMEMODE_600KEN && _f_players==2 && str=='') || _f_gamemode==_F_GAMEMODE_HACHI){xh=600-w/2; yh=80+h+3;if(seki==1) yh=80;}else if(dmode<0 || _f_players==2){xh=600-w/2; yh=240;}else if(_f_players===3){w=cs*16+margin*2+bcolumns;h=cs*10+margin*2;xh=600-w/2; yh=80+h+3;if(seki==2){ xh=600-w; yh=80; }if(seki==1){ xh=603; yh=80; }}else {yh=290+h+3;if(seki==1){ yh=240; }}if(_f_gamemode==_F_GAMEMODE_600KEN && _f_players==3 && str=='') yh+=40;n='YAKU_DETAILS';if(seki>-1) n+='-'+seki;else n+='-A';e=document.getElementsByTagName('div');i=e.length; while(--i>=0){if(!e[i].getAttribute('data-bylib')) continue;if(!(j=e[i].getAttribute('id'))) continue;if(j.indexOf(n)!=0) continue;e[i].parentNode.removeChild(e[i]);}_f_textWindow(n, xh, yh, w, h, '#fff');x=xh+margin; y=yh+margin; x1=0; y1=0;if(str!=''){_f_leftText4Yaku(n+'-TEXT', x, y, (cs*6+bcolumns)*2+bcolumns, (cs+blines)*6+cs, '#0ff', str);} 
else if(_f_gamemode==_F_GAMEMODE_88 && _f_players==2){var yakuType='相手の出来役';y=yh+margin;if(_f[0].torifuda_total<1) yakuType='相手の手役';else {i=_f[0].torifuda_total-_f[1].torifuda_total; r=0;j=0; if(i<0){ j=1; i=-i; }_f_leftText4Yaku(n+'-TORIFUDATEN_H', xh+margin, y, cs*12, cs+blines, '#0ff', '取り札('+_f_to_wasuji(i)+'点差)');if(j){_f_leftText4Yaku(n+'-TORIFUDATEN_SIGN', xh+margin+cs*8+bcolumns, y, cs, cs+blines, '#fff', '▲');}if(i>=50) i=60;else if(i>=40) i=48;else if(i>=30) i=36;j=Math.floor(i / 12); i=i-j*12;if(j){_f_rightText4Yaku(n+'-TORIFUDATEN_KAN', xh+margin+cs*9+bcolumns, y, cs*4, cs+blines, '#fff', _f_to_wasuji(j)+'<span style="color: #ff0">貫</span>');}if(j<3){_f_rightText4Yaku(n+'-TORIFUDATEN_TEN',  xh+margin+cs*13+bcolumns, y, cs*3, cs+blines, '#fff', _f_to_wasuji(i)+'<span style="color: #ff0">点</span>');}y+=cs+blines;}i=-1; r=0;while(++i<_f[0].yaku_name_ctr){j=_f[0].yaku_point[i];if(!j){if(y1>5){ y1=0; x=xh+margin+cs*9+bcolumns*2; y=yh+margin; }_f_leftText4Yaku(n+'-YAKU_NAME-'+i, xh+margin, y, cs*12, cs+blines, '#f0f', _f[0].yaku_name[i]);++y1; y+=cs+blines; continue;}var x1=x;if(j>10000){j-=10000; x1+=cs;_f_rightText4Yaku(n+'-YAKU_NAME-OKAKKO-'+i, x+cs/2, y, cs/2, cs+blines, '#fff', '(');_f_leftText4Yaku(n+'-YAKU_NAME-CKAKKO-'+i, xh+margin+cs*12+bcolumns+cs*4, y, cs/2, cs+blines, '#fff', ')');}else {r+=j;}_f_leftText4Yaku(n+'-YAKU_NAME-'+i, x1, y, cs*8+bcolumns, cs+blines, '#0ff', _f[0].yaku_name[i]);var k=Math.floor(j/12); j-=k*12;if(k){_f_rightText4Yaku(n+'-YAKU_KAN-'+i, xh+margin+cs*9+bcolumns, y, cs*4, cs+blines, '#fff', _f_to_wasuji(k)+'<span style="color:#ff0; ">貫</span>');}if(j){_f_rightText4Yaku(n+'-YAKU_TEN-'+i,  xh+margin+cs*13+bcolumns, y, cs*3, cs+blines, '#fff', _f_to_wasuji(j)+'<span style="color:#ff0; ">点</span>');}y+=cs+blines; ++y1;if(y1>5){ y1=0; y=yh+margin; }}i=-1; r=0;if(_f[1].yaku_name_ctr){_f_leftText4Yaku(n+'-ENEMYS_YAKU_H', xh+margin, y, cs*8, cs+blines, '#f0f', yakuType);++y1; y+=cs+blines;}while(++i<_f[1].yaku_name_ctr){j=_f[1].yaku_point[i];if(!j){if(y1>5){ y1=0; x=xh+margin+cs*9+bcolumns*2; y=yh+margin; }_f_leftText4Yaku(n+'-ENEMYS_YAKU_NAME-'+i, xh+margin, y, cs*12, cs+blines, '#f0f', _f[1].yaku_name[i]);++y1; y+=cs+blines; continue;}var x1=x;if(j>10000){j-=10000; x1+=cs;_f_rightText4Yaku(n+'-ENEMYS_YAKU_OKAKKO-'+i, x+cs/2, y, cs/2, cs+blines, '#fff', '(');_f_leftText4Yaku(n+'-ENEMYS_YAKU_CKAKKO-'+i, xh+margin+cs*12+bcolumns+cs*4, y, cs/2, cs+blines, '#fff', ')');}else { r+=j; }_f_leftText4Yaku(n+'-ENEMYS_YAKU_NAME-'+i, x1, y, cs*8+bcolumns, cs+blines, '#0ff', _f[1].yaku_name[i]);_f_leftText4Yaku(n+'-ENEMYS_YAKU_SIGN-'+i, xh+margin+cs*8+bcolumns, y, cs, cs+blines, '#fff', '▲');var k=Math.floor(j/12); j-=k*12;if(k){_f_rightText4Yaku(n+'-ENEMYS_YAKU_KAN-'+i,  xh+margin+cs*9+bcolumns, y, cs*4, cs+blines, '#fff', _f_to_wasuji(k)+'<span style="color:#ff0; ">貫</span>');}if(j){_f_rightText4Yaku(n+'-ENEMYS_YAKU_TEN-'+i,  xh+margin+cs*13+bcolumns, y, cs*3, cs+blines, '#fff', _f_to_wasuji(j)+'<span style="color:#ff0; ">点</span>');}y+=cs+blines; ++y1;if(y1>5){ y1=0; y=yh+margin; }}if(_f[0].payback_point[0]){_f_leftText4Yaku(n+'-RETURNED_YAKU-H',  xh+margin, y, cs*12, cs+blines, '#f0f', 'あなたの役代返し');++y1; y+=cs+blines;}i=-1; r=0;while(++i<_f[0].payback_name_ctr){j=_f[0].payback_point[i];if(!j){_f_leftText4Yaku(n+'-RETURNED_YAKU-NAME-'+i, xh+margin, y, cs*12, cs+blines, '#f0f', 'あなたの'+_f[0].payback_name[i]);++y1; y+=cs+blines; continue;}_f_leftText4Yaku(n+'-RETURNED_YAKU-SIGN-'+i, xh+margin+cs*8+bcolumns, y, cs, cs+blines, '#fff', '▲');j=-j; r+=j;_f_leftText4Yaku(n+'-RETURNED_YAKU-NAME-'+i, xh+margin, y, cs*12, cs+blines, '#0ff', _f[0].payback_name[i]);var k=Math.floor(j/12); j-=k*12;if(k){_f_rightText4Yaku(n+'-RETURNED_YAKU-KAN-'+i,  xh+margin+cs*9+bcolumns, y, cs*4, cs+blines, '#fff', _f_to_wasuji(k)+'<span style="color:#ff0; ">貫</span>');}if(j){_f_rightText4Yaku(n+'-RETURNED_YAKU-TEN-'+i,  xh+margin+cs*13+bcolumns, y, cs*3, cs+blines, '#fff', _f_to_wasuji(j)+'<span style="color:#ff0; ">点</span>');}++y1; y+=cs+blines;}if(_f[1].payback_point[0]){_f_leftText4Yaku(n+'-RETURNED_BY_ENEMY-H', xh+margin, y, cs*12, cs+blines, '#f0f', '相手の役代返し');++y1; y+=cs+blines;}i=-1; r=0;while(++i<_f[1].payback_name_ctr){j=_f[1].payback_point[i];if(!j){_f_leftText4Yaku(n+'-RETURNED_BY_ENEMY_NAME-H'+i, xh+margin, y, cs*12, cs+blines, '#f0f', '相手の'+_f[1].payback_name[i]);++y1; y+=cs+blines; continue;}j=-j; r+=j;_f_leftText4Yaku(n+'-RETURNED_BY_ENEMY_NAME-'+i, xh+margin, y, cs*12, cs+blines, '#0ff', _f[1].payback_name[i]);var k=Math.floor(j/12); j-=k*12;if(k){_f_rightText4Yaku(n+'-RETURNED_BY_ENEMY_KAN-'+i, xh+margin+cs*9+bcolumns, y, cs*4, cs+blines, '#fff', _f_to_wasuji(k)+'<span style="color:#ff0; ">貫</span>');}if(j){_f_rightText4Yaku(n+'-RETURNED_BY_ENEMY_TEN-'+i, xh+margin+cs*13+bcolumns, y, cs*3, cs+blines, '#fff', _f_to_wasuji(j)+'<span style="color:#ff0; ">点</span>');}++y1; y+=cs+blines;}y=yh+h-margin-cs;i='小場';if(_f_88_ba_rate==2) i='大場倍付け';if(_f_88_ba_rate==4) i='絶場四倍付け';_f_leftText4Yaku(n+'-BA_RATE', xh+margin, y, cs*6, cs+blines, '#0ff', i);r=_f[0].balance_total;if(!r){_f_rightText4Yaku(n+'-TOTAL-TEN',  xh+margin+cs*10+bcolumns, y, cs*6, cs+blines, '#fff', '零<span style="color:#ff0; ">点</span>');}else {if(r<0){r=-r;_f_leftText4Yaku(n+'-TOTAL-SIGN',  xh+margin+cs*8+bcolumns, y, cs, cs+blines, '#fff', '▲');}var k=Math.floor(r/12); r-=k*12;if(k){_f_rightText4Yaku(n+'-TOTAL-KAN',  xh+margin+cs*9+bcolumns, y, cs*4, cs+blines, '#fff', _f_to_wasuji(k)+'<span style="color:#ff0; ">貫</span>');}if(r){_f_rightText4Yaku(n+'-TOTAL-TEN',  xh+margin+cs*13+bcolumns, y, cs*3, cs+blines, '#fff', _f_to_wasuji(r)+'<span style="color:#ff0; ">点</span>');}}}else if(_f_gamemode==_F_GAMEMODE_88 || _f_gamemode==_F_GAMEMODE_SUDAOSHI){x=xh+margin; y=yh+margin;var bRateS='小場', bRate=1;if(_f_88_ba_rate==2){ bRateS='大場倍付'; bRate=2; }if(_f_88_ba_rate==4){ bRateS='絶場四倍付'; bRate=4; }if(_f_gamemode==_F_GAMEMODE_SUDAOSHI){ bRateS='合計'; bRate=1; }if((i=_f[seki].torifuda_total)>0){_f_leftText4Yaku(n+'-TORIFUDATEN-H',  x, y, cs*12+bcolumns, cs+blines, '#0ff', '取札点('+_f_to_wasuji(i)+'点)');if(_f_gamemode==_F_GAMEMODE_SUDAOSHI){if(_f_oya==seki) i-=100;else if(_f_oya+1==seki || (_f_oya==2 && seki==0)) i-=110;else i-=120;}else i-=88;r=i;if(i<0){i=-i;_f_leftText4Yaku(n+'-TORIFUDATEN-SIGN',  x+cs*8+bcolumns, y, cs, cs+blines, '#fff', '▲');}var k=Math.floor(i/12); i-=k*12;_f_rightText4Yaku(n+'-TORIFUDATEN-KAN',  x+cs*9+bcolumns, y, cs*4, cs+blines, '#fff', _f_to_wasuji(k)+'<span style="color:#ff0; ">貫</span>');_f_rightText4Yaku(n+'-TORIFUDATEN-TEN', x+cs*13+bcolumns, y, cs*3, cs+blines, '#fff', _f_to_wasuji(i)+'<span style="color:#ff0; ">点</span>');y+=(cs+blines)*2; r*=bRate;if(_f[seki].yaku_name_ctr<1 && _f[seki].payback_name_ctr<1) y=yh+h-cs-margin;_f_leftText4Yaku(n+'-BA_RATE',  x, y, cs*5, cs+blines, '#0ff', bRateS);if(r<0){r=-r;_f_leftText4Yaku(n+'-TORIFUDATEN-SIGN-RATED',  x+cs*8+bcolumns, y, cs, cs+blines, '#fff', '▲');}var k=Math.floor(r/12); r-=k*12;if(k || (!r && !k)){_f_rightText4Yaku(n+'-TORIFUDATEN-KAN-RATED',  x+cs*9+bcolumns, y, cs*4, cs+blines, '#fff', _f_to_wasuji(k)+'<span style="color:#ff0; ">貫</span>');}if(r){_f_rightText4Yaku(n+'-TORIFUDATEN-TEN-RATED',  x+cs*13+bcolumns, y, cs*3, cs+blines, '#fff', _f_to_wasuji(r)+'<span style="color:#ff0; ">点</span>');}y+=cs+blines;}if((_f[seki].yaku_name_ctr>0 || _f[seki].payback_name_ctr>0) && _f[seki].torifuda_total>0){_f_horizontal_rule(n+'-BETWEEN_TORIFUDA_AND_YAKU',  xh, y+(cs+blines) / 2-4, w+4, 4);y+=cs+blines;}i=-1; r=0;while(++i<_f[seki].yaku_name_ctr){j=_f[seki].yaku_point[i];if(!j){if(y1>5){ y1=0; x=x+cs*13+bcolumns+bcolumns*2; y=yh+margin; }_f_leftText4Yaku(n+'-YAKU_NAME-'+i,  x, y, cs*8+bcolumns, cs+blines, '#f0f', _f[seki].yaku_name[i]);y+=cs+blines; continue;}var x1=x;if(j>10000){j-=10000; x1+=cs / 2;_f_rightText4Yaku(n+'-YAKU_OKAKKO-'+i,  x, y, cs/2, cs+blines, '#fff', '(');_f_leftText4Yaku(n+'-YAKU_CKAKKO-'+i,  x+cs*16+bcolumns, y, cs/2, cs+blines, '#fff', ')');}else { r+=j; }_f_leftText4Yaku(n+'-YAKU_NAME-'+i, x1, y, cs*5, cs+blines, '#0ff', _f[seki].yaku_name[i]);var k=Math.floor(j/12); j-=k*12;if(k || (!j && !k)){_f_rightText4Yaku(n+'-YAKU_KAN-'+i,  x+cs*9+bcolumns, y, cs*4, cs+blines, '#fff', _f_to_wasuji(k)+'<span style="color:#ff0; ">貫</span>');}if(j){_f_rightText4Yaku(n+'-YAKU_TEN-'+i,  x+cs*13+bcolumns, y, cs*3, cs+blines, '#fff', _f_to_wasuji(j)+'<span style="color:#ff0; ">点</span>');}y+=cs+blines;}if(_f[seki].payback_name_ctr>0 && _f[seki].yaku_name_ctr>0){r*=bRate;y+=cs+blines;_f_leftText4Yaku(n+'-YAKU_TOTAL-H',  x, y, cs*5, cs+blines, '#0ff', bRateS);if(r<0){r=-r;_f_leftText4Yaku(n+'-YAKU_TOTAL-SIGN',  x+cs*8+bcolumns, y, cs, cs+blines, '#fff', '▲');}var k=Math.floor(r/12); r-=k*12;if(k || (!r && !k)){_f_rightText4Yaku(n+'-YAKU_TOTAL-KAN', x+cs*9+bcolumns, y, cs*4, cs+blines, '#fff', _f_to_wasuji(k)+'<span style="color:#ff0; ">貫</span>');}if(r){_f_rightText4Yaku(n+'-YAKU_TOTAL-TEN', x+cs*13+bcolumns, y, cs*3, cs+blines, '#fff', _f_to_wasuji(r)+'<span style="color:#ff0; ">点</span>');}r=0;y+=cs+blines;_f_horizontal_rule(n+'-BETWEEN_YAKU_AND_PAYBACK', xh, y+(cs+blines) / 2-4, w+4, 4);y+=cs+blines;}if(_f[seki].payback_point[0]){_f_leftText4Yaku(n+'-PAYBACK-H', x, y, cs*5, cs+blines, '#f0f', '役代返し');y+=cs+blines;}i=-1; while(++i<_f[seki].payback_name_ctr){j=_f[seki].payback_point[i];if(!j){_f_leftText4Yaku(n+'-PAYBACK-NAME'+i,  x, y, cs*5, cs+blines, '#f0f', _f[seki].payback_name[i]);y+=cs+blines; continue;}j=-j; r-=j;_f_leftText4Yaku(n+'-PAYBACK-NAME'+i, x, y, cs*5, cs+blines, '#0ff', _f[seki].payback_name[i]);_f_leftText4Yaku(n+'-PAYBACK-SIGN'+i, x+cs*8+bcolumns, y, cs, cs+blines, '#fff', '▲');var k=Math.floor(j/12); j-=k*12;if(k || (!j && !k)){_f_rightText4Yaku(n+'-PAYBACK-KAN'+i, x+cs*9+bcolumns, y, cs*4, cs+blines, '#fff', _f_to_wasuji(k)+'<span style="color:#ff0; ">貫</span>');}if(j){_f_rightText4Yaku(n+'-PAYBACK-TEN'+i, x+cs*13+bcolumns, y, cs*3, cs+blines, '#fff', _f_to_wasuji(j)+'<span style="color:#ff0; ">点</span>');}y+=cs+blines;}if(_f[seki].yaku_name_ctr>0 || _f[seki].payback_name_ctr>0){r*=bRate; y=yh+h-cs-margin;_f_leftText4Yaku(n+'-POINT_TOTAL-BA_RATE',  x, y, cs*5, cs+blines, '#0ff', bRateS);if(r<0){r=-r;_f_leftText4Yaku(n+'-POINT_TOTAL-SIGN', x+cs*8+bcolumns, y, cs, cs+blines, '#fff', '▲');}var k=Math.floor(r/12); r-=k*12;if(k || (!r && !k)){_f_rightText4Yaku(n+'-POINT_TOTAL-KAN', x+cs*9+bcolumns, y, cs*4, cs+blines, '#fff', _f_to_wasuji(k)+'<span style="color:#ff0; ">貫</span>');}if(r){_f_rightText4Yaku(n+'-POINT_TOTAL-TEN', x+cs*13+bcolumns, y, cs*3, cs+blines, '#fff', _f_to_wasuji(r)+'<span style="color:#ff0; ">点</span>');}}}else if(_f_gamemode==_F_GAMEMODE_KOIKOI){i=-1; r=0;while(++i<_f[seki].yaku_name_ctr){j=_f[seki].yaku_point[i]; r+=j;_f_leftText4Yaku(n+'-YAKU-NAME-'+i,  x, y, cs*8+bcolumns, cs+blines, '#0ff', _f[seki].yaku_name[i]);_f_rightText4Yaku(n+'-YAKU-MON-'+i, xh+margin+cs*11+bcolumns, y, cs*5, cs+blines, '#fff', _f_to_wasuji(j)+'<span style="color:#ff0; ">文</span>');y+=cs+blines; ++y1;if(y1>5){y1=0; x=xh+margin+cs*9+bcolumns*2; y=yh+margin;}}y=yh+h-margin-cs;_f[seki].yaku_result_point=r;_f_leftText4Yaku(n+'-TOTAL_POINT-H', xh+margin, y, cs*8, cs+blines, '#0ff', '合計');_f_rightText4Yaku(n+'-TOTAL_POINT',  xh+margin+cs*11+bcolumns, y, cs*5, cs+blines, '#fff', _f_to_wasuji(r)+'<span style="color:#ff0; ">文</span>');}else if(_f_gamemode==_F_GAMEMODE_MUSHI){y=yh+margin;i=_f[0].torifuda_total;_f_leftText4Yaku(n+'-TORIFUDA-H',  xh+margin, y, cs*8, cs+blines, '#0ff', '取り札('+_f_to_wasuji(i)+'点)');i-=115;if(i<0){_f_leftText4Yaku(n+'-TORIFUDA-SIGN', xh+margin+cs*10+bcolumns, y, cs, cs+blines, '#fff', '▲');i=-i;}_f_rightText4Yaku(n+'-TORIFUDA',  xh+margin+cs*11+bcolumns, y, cs*5, cs+blines, '#fff', _f_to_wasuji(i)+'<span style="color:#ff0; ">点</span>');y+=cs+blines;i=-1; r=0;while(++i<_f[0].yaku_name_ctr){j=_f[0].yaku_point[i];_f_leftText4Yaku(n+'-DEKIYAKU-'+i,  xh+margin, y, cs*8+bcolumns, cs+blines, '#0ff', _f[0].yaku_name[i]);_f_rightText4Yaku(n+'-DEKIYAKU-TEN-'+i,  xh+margin+cs*11+bcolumns, y, cs*5, cs+blines, '#fff', _f_to_wasuji(j)+'<span style="color:#ff0; ">点</span>');y+=cs+blines;}if(_f[1].yaku_name_ctr){_f_leftText4Yaku(n+'-ENEMYS_DEKIYAKU-H',  xh+margin, y, cs*8+bcolumns, cs+blines, '#f0f', '相手の出来役');y+=cs+blines; i=-1;while(++i<_f[1].yaku_name_ctr){j=_f[1].yaku_point[i];_f_leftText4Yaku(n+'-ENEMYS_DEKIYAKU-NAME-'+i,  xh+margin, y, cs*8+bcolumns, cs+blines, '#0ff', _f[1].yaku_name[i]);_f_leftText4Yaku(n+'-ENEMYS_DEKIYAKU-SIGN-'+i,  xh+margin+cs*10+bcolumns, y, cs, cs+blines, '#fff', '▲');_f_rightText4Yaku(n+'-ENEMYS_DEKIYAKU-TEN-'+i,  xh+margin+cs*11+bcolumns, y, cs*5, cs+blines, '#fff', _f_to_wasuji(j)+'<span style="color:#ff0; ">点</span>');y+=cs+blines;}}y=yh+h-margin-cs;r=_f[0].balance_total;_f_leftText4Yaku(n+'-TOTAL_POINT-H',  xh+margin, y, cs*8, cs+blines, '#0ff', '差引');if(r<0){_f_leftText4Yaku(n+'-TOTAL_POINT-SIGN', xh+margin+cs*10+bcolumns, y, cs, cs+blines, '#fff', '▲');r=-r;}_f_rightText4Yaku(n+'-TOTAL_POINT-TEN', xh+margin+cs*11+bcolumns, y, cs*5, cs+blines, '#fff', _f_to_wasuji(r)+'<span style="color:#ff0; ">点</span>');}else if(_f_gamemode==_F_GAMEMODE_HANAAWASE){x=xh+margin; y=yh+margin;if((i=_f[seki].torifuda_total)>0){_f_leftText4Yaku(n+'-TORIFUDA-H', x, y, cs*12+bcolumns, cs+blines, '#0ff', '取札点('+_f_to_wasuji(i)+'点)');if((i-=88)<0){_f_leftText4Yaku(n+'-TORIFUDA-SIGN',  x+cs*8+bcolumns, y, cs, cs+blines, '#fff', '▲');i=-i;}_f_rightText4Yaku(n+'-TORIFUDA-TEN',  x+cs*11+bcolumns, y, cs*5, cs+blines, '#fff', _f_to_wasuji(i)+'<span style="color:#ff0; ">点</span>');y+=cs+blines;}if((_f[seki].yaku_name_ctr>0 || _f[seki].payback_name_ctr>0) && _f[seki].torifuda_total>0){_f_horizontal_rule(n+'-BEtWEEN_TORIFUDA_AND_DEKIYAKU', xh, y+(cs+blines) / 2-4, w+4, 4);y+=cs+blines;}i=-1; r=0;while(++i<_f[seki].yaku_name_ctr){j=_f[seki].yaku_point[i];_f_leftText4Yaku(n+'-DEKIYAKU-NAME-'+i, x, y, cs*5, cs+blines, '#0ff', _f[seki].yaku_name[i]);if(j>=0){_f_rightText4Yaku(n+'-DEKIYAKU-TEN-'+i, x+cs*13+bcolumns, y, cs*3, cs+blines, '#fff', _f_to_wasuji(j)+'<span style="color:#ff0; ">点</span>');r+=j;}else if(j==-1){_f_rightText4Yaku(n+'-DEKIYAKU-TEN-'+i, x+cs*13+bcolumns, y, cs*3, cs+blines, '#f00', '無勝負');}else if(j<0){_f_rightText4Yaku(n+'-DEKIYAKU-TEN-'+i, x+cs*13+bcolumns, y, cs*3, cs+blines, '#f00', '役流し');}y+=cs+blines;}if(r>0){y=yh+h-cs-margin;_f_leftText4Yaku(n+'-TOTAL_POINT-H',  x, y, cs*5, cs+blines, '#0ff', '合計');if(i<0){i=-i;_f_leftText4Yaku(n+'-TOTAL_POINT-SIGN', x+cs*8+bcolumns, y, cs, cs+blines, '#fff', '▲');}_f_rightText4Yaku(n+'-TOTAL_POINT-TEN', x+cs*9+bcolumns, y, cs*7, cs+blines, '#fff', _f_to_wasuji(r)+'<span style="color:#ff0; ">点</span>');}}else if(_f_gamemode==_F_GAMEMODE_600KEN){x=xh+margin; y=yh+margin+cs+blines;r=_f[seki].torifuda05_ctr*10+_f[seki].torifuda10_ctr*10+_f[seki].torifuda20_ctr*50;if(r>0){_f_leftText4Yaku(n+'-TORIFUDA-H',  x, y, cs*12+bcolumns, cs+blines, '#0ff', '取札点');_f_rightText4Yaku(n+'-TORIFUDA-TEN',  x+cs*11+bcolumns, y, cs*5, cs+blines, '#fff', _f_to_wasuji(r)+'<span style="color:#ff0; ">点</span>');y+=cs+blines;}i=-1;while(++i<_f[seki].yaku_name_ctr){j=_f[seki].yaku_point[i];_f_leftText4Yaku(n+'-DEKIYAKY-NAME-'+i,  x, y, cs*5, cs+blines, '#0ff', _f[seki].yaku_name[i]);if(j>0){_f_rightText4Yaku(n+'-DEKIYAKY-TEN-'+i, x+cs*10+bcolumns, y, cs*6, cs+blines, '#fff', _f_to_wasuji(j)+'<span style="color:#ff0; ">点</span>');r+=j;}else if(j==0){_f_rightText4Yaku(n+'-DEKIYAKY-TEN-'+i, x+cs*10+bcolumns, y, cs*6, cs+blines, '#fff', _f_to_wasuji(600)+'<span style="color:#ff0; ">点</span>');y+=cs+blines;_f_rightText4Yaku(n+'-DEKIYAKY-TEN-NOTE-'+i, x+cs*11+bcolumns, y, cs*5, cs+blines, '#ff0', '(イチコロ)');r+=600;}else if(j<0){_f_rightText4Yaku(n+'-DEKIYAKY-TEN-'+i, x+cs*13+bcolumns, y, cs*3, cs+blines, '#f00', '雨流れ');}y+=cs+blines;}if(_f[seki].current_point_600ken>0){y=yh+h-cs-margin;_f_leftText4Yaku(n+'-TOTAL_POINT-H',  x, y, cs*5, cs+blines, '#0ff', '合計');if(i<0){i=-i;_f_leftText4Yaku(n+'-TOTAL_POINT-SIGN', x+cs*8+bcolumns, y, cs, cs+blines, '#fff', '▲');}_f_rightText4Yaku(n+'-TOTAL_POINT-TEN', x+cs*9+bcolumns, y, cs*7, cs+blines, '#fff', _f_to_wasuji(_f[seki].current_point_600ken)+'<span style="color:#ff0; ">点</span>');}x=xh+margin; y=yh+margin;r=_f[seki].current_point_600ken-r;_f_leftText4Yaku(n+'-ACCUMRATED_POINT-H', x, y, cs*12+bcolumns, cs+blines, '#0ff', '前局まで');_f_rightText4Yaku(n+'-ACCUMRATED_POINT-TEN',  x+cs*11+bcolumns, y, cs*5, cs+blines, '#fff', _f_to_wasuji(r)+'<span style="color:#ff0; ">点</span>');}else if(_f_gamemode==_F_GAMEMODE_HACHI){x=xh+margin; y=yh+margin;r=_f[seki].torifuda01_ctr*10+  _f[seki].torifuda05_ctr+  _f[seki].torifuda10_ctr*10+  _f[seki].torifuda20_ctr*10;_f_leftText4Yaku(n+'-TORIFUDA-H', x, y, cs*12+bcolumns, cs+blines, '#0ff', '取札点');_f_rightText4Yaku(n+'-TORIFUDA-TEN', x+cs*11+bcolumns, y, cs*5, cs+blines, '#fff', _f_to_wasuji(r)+'<span style="color:#ff0; ">点</span>');y+=cs+blines;i=-1;while(++i<_f[seki].yaku_name_ctr){j=_f[seki].yaku_point[i];_f_leftText4Yaku(n+'-DEKIYAKU-NAME-'+i,  x, y, cs*6, cs+blines, '#0ff', _f[seki].yaku_name[i]);_f_rightText4Yaku(n+'-DEKIYAKU-TEN-'+i,  x+cs*10+bcolumns, y, cs*6, cs+blines, '#fff', _f_to_wasuji(j)+'<span style="color:#ff0; ">点</span>');r+=j;y+=cs+blines;}y=yh+h-cs-margin;_f_rightText4Yaku(n+'-TOTAL_POINT-TEN',  x+cs*9+bcolumns, y, cs*7, cs+blines, '#fff', _f_to_wasuji(r)+'<span style="color:#ff0; ">点</span>');}return;}function _f_leftText4Yaku(n, x, y, w, h, color, str){var e, s=29;if(_f_charMode) s=24;newTextArea(n, x, y, w, h, s, 'transparent', '#FFF');e=document.getElementById(n);e.style.color=color;e.style.textAlign='left';e.style.fontFamily='serif';e.style.lineHeight='1em';e.style.verticalAlign='text-top';e.innerHTML=str;}function _f_rightText4Yaku(n, x, y, w, h, color, str){var e, s=29;if(_f_charMode) s=24;newTextArea(n, x, y, w, h, s, 'transparent', '#FFF');e=document.getElementById(n);e.style.color=color;e.style.textAlign='right';e.style.fontFamily='serif';e.style.lineHeight='1em';e.style.verticalAlign='text-top';e.innerHTML=str;}function _f_balance_disp(btype){var e, i, j;e=document.getElementsByTagName('div');i=e.length; while(--i>=0){if(!e[i].getAttribute('data-bylib')) continue;if(!(j=e[i].getAttribute('id'))) continue;if(j.indexOf('YAKU_')!=0) continue;e[i].parentNode.removeChild(e[i]);}if(_f_players==2){ _f_balance_disp2(0, btype); return; }i=_f_players;while(--i>=0) _f_balance_disp2(i, btype);}function _f_balance_disp2(seki, btype){var cs2=24, w, h, margin=16, blines=4, bcolumns=16, e, n='BALANCE-'+seki;var i, j, k,o, x, y, x1, y1;var u='<span style="color:#ff0; ">点</span>'; if(_f_gamemode==_F_GAMEMODE_KOIKOI) u='<span style="color:#ff0; ">文</span>';if(_f_kabu_mode) cs2=24;w=cs2*16+margin*2+bcolumns;h=cs2*10+margin*2;xh=600-w/2; yh=200+h+3;if(_f_players===3){xh=600-w/2; yh=80+h+3;if(seki==2){ xh=600-w; yh=80; }if(seki==1){ xh=603; yh=80; }if(_f_gamemode==_F_GAMEMODE_KYOKABU || _f_gamemode==_F_GAMEMODE_OICHOKABU){if(_f_oya==1){xh=600-w/2; yh=80;if(seki==2){ xh=600-w; yh=80+h+3; }if(seki==0){ xh=603; yh=80+h+3; }}else if(_f_oya==2){xh=600-w/2; yh=80;if(seki==0){ xh=600-w; yh=80+h+3; }if(seki==1){ xh=603; yh=80+h+3; }}else {xh=600-w/2; yh=80+h+3;if(seki==2){ xh=600-w; yh=80; }if(seki==1){ xh=603; yh=80; }}}}else { yh=240+h+3; }_f_textWindow(n, xh, yh, w, h, '#fff');y=yh+margin; x1=0; y1=0;if(btype==2){y=yh+((h-cs2) >> 1);_f_leftText(n+'-MOCHITEN-H', xh+margin, y, 29*6, 29+blines, '#0ff', '持点');i=_f[seki].score;if(!i){_f_rightText(n+'-MOCHITEN-TEN', xh+w-margin-29*7, y, 29*7, 29+blines, '#fff', '零'+u);}else {if(i<0){_f_leftText(n+'-MOCHITEN-SIGN',  xh+margin+29*3, y, 29, 29+blines, '#fff', '▲');i=-i;}if(_f_gamemode==_F_GAMEMODE_88){j=Math.floor(i/12); i=i-12*j;if(j){_f_rightText(n+'-MOCHITEN-KAN',  xh+w-margin-29*10, y, 29*7, 29+blines, '#fff', _f_to_wasuji(j)+'<span style="color:#ff0; ">貫</span>');}}if(i){_f_rightText(n+'-MOCHITEN-TEN',  xh+w-margin-29*7, y, 29*7, 29+blines, '#fff', _f_to_wasuji(i)+u);}}}else if(_f_gamemode==_F_GAMEMODE_KYOKABU || _f_gamemode==_F_GAMEMODE_OICHOKABU){y=yh+margin;i=_f_seatName[seki];if(_f_oya==seki) i+=' (親)';_f_leftText(n+'-SEATNAME-H',  xh+margin, y, 29*8, 29+blines, '#ff0', i);var e=document.getElementById(n+'-SEATNAME-H');e.style.whiteSpace='noWrap';y+=29+blines;i=_f[seki].score_before_game;_f_leftText(n+'-BEFORE-H',  xh+margin, y, 29*6, 29+blines, '#0ff', '開局前');if(i<0){i=-i;_f_leftText(n+'-BEFORE-SIGN',  xh+margin+29*3, y, 29, 29+blines, '#fff', '▲');}if(i) i=_f_to_wasuji(i); else i='零';_f_rightText(n+'-BEFORE-TEN',  xh+w-margin-29*7, y, 29*7, 29+blines, '#fff', i+'<span style="color:#ff0; ">点</span>');y+=29+blines;if(_f_oya!=seki){i=-_f[seki].balance_betted;_f_leftText(n+'-BETTED-H',  xh+margin, y, 29*6, 29+blines, '#0ff', '賭点');if(i<0){i=-i;_f_leftText(n+'-BETTED-SIGN',  xh+margin+29*3, y, 29, 29+blines, '#fff', '▲');}if(i) i=_f_to_wasuji(i); else i='零';_f_rightText(n+'-BETTED-TEN', xh+w-margin-29*7, y, 29*7, 29+blines, '#fff', i+'<span style="color:#ff0; ">点</span>');y+=29+blines;}i=_f[seki].balance;_f_leftText(n+'-BALANCE-H',  xh+margin, y, 29*6, 29+blines, '#0ff', '収支');if(i<0){i=-i;_f_leftText(n+'-BALANCE-SIGN',  xh+margin+29*3, y, 29, 29+blines, '#fff', '▲');}if(i) i=_f_to_wasuji(i); else i='零';_f_rightText(n+'-BALANCE-TEN',  xh+w-margin-29*7, y, 29*7, 29+blines, '#fff', i+'<span style="color:#ff0; ">点</span>');y=yh+h-margin-29;_f_leftText(n+'-RESULT-H',  xh+margin, y, 29*6, 29+blines, '#0ff', '現計');i=_f[seki].score_after_balance;if(i<0){_f_leftText(n+'-RESULT-SIGN',  xh+margin+29*3, y, 29, 29+blines, '#fff', '▲');i=-i;}_f_rightText(n+'-RESULT-TEN', xh+w-margin-29*7, y, 29*7, 29+blines, '#fff', _f_to_wasuji(i)+u);}else {y=yh+margin;if((i=_f[seki].balance_payback)!=0){_f_leftText(n+'-RETURN-H',  xh+margin, y, 29*6, 29+blines, '#0ff', '払戻し');if(i<0){i=-i;_f_leftText(n+'-RETURN-SIGN',  xh+margin+29*3, y, 29*6, 29+blines, '#fff', '▲');}if(_f_gamemode==_F_GAMEMODE_88 || _f_gamemode==_F_GAMEMODE_SUDAOSHI){j=Math.floor(i/12); i=i-12*j;if(j){_f_rightText(n+'-RETURN-KAN', xh+w-margin-29*10, y, 29*7, 29+blines, '#fff', _f_to_wasuji(j)+'<span style="color:#ff0; ">貫</span>');}}if(i){_f_rightText(n+'-RETURN-TEN', xh+w-margin-29*3, y, 29*3, 29+blines, '#fff', _f_to_wasuji(i)+'<span style="color:#ff0; ">点</span>');}y+=29+blines;}if(_f_gamemode!=_F_GAMEMODE_KOIKOI && ((_f_gamemode!=_F_GAMEMODE_88 && _f_gamemode!=_F_GAMEMODE_SUDAOSHI) || _f_88_yaku_flag!=1) && (_f[0].torifuda_total!=0 && _f[1].torifuda_total!=0)){i=_f[seki].balance_torifuda;_f_leftText(n+'-TORIFUDA-H', xh+margin, y, 29*6, 29+blines, '#0ff', '取り札');if(i<0){i=-i;_f_leftText(n+'-TORIFUDA-SIGN', xh+margin+29*3, y, 29*6, 29+blines, '#fff', '▲');}if(_f_gamemode==_F_GAMEMODE_88 || _f_gamemode==_F_GAMEMODE_SUDAOSHI){if(i==0){_f_rightText(n+'-TORIFUDA-KAN',  xh+w-margin-29*10, y, 29*7, 29+blines, '#fff', '零<span style="color:#ff0; ">貫</span>');}else {j=Math.floor(i/12); i=i-12*j;_f_rightText(n+'-TORIFUDA-KAN', xh+w-margin-29*10, y, 29*7, 29+blines, '#fff', _f_to_wasuji(j)+'<span style="color:#ff0; ">貫</span>');if(i){_f_rightText(n+'-TORIFUDA-TEN', xh+w-margin-29*3, y, 29*3, 29+blines, '#fff', _f_to_wasuji(i)+'<span style="color:#ff0; ">点</span>');}}}else {if(i) i=_f_to_wasuji(i); else i='零';_f_rightText(n+'-TORIFUDA-TEN', xh+w-margin-29*7, y, 29*7, 29+blines, '#fff', i+u);}y+=29+blines;}if((i=_f[seki].balance)!=0 || _f_88_yaku_flag>0 || (_f_gamemode==_F_GAMEMODE_88 && _f[seki].yaku_name_ctr>0)){_f_leftText(n+'-YAKUDAI-H', xh+margin, y, 29*6, 29+blines, '#0ff', '役代');if(i<0){i=-i;_f_leftText(n+'-YAKUDAI-SIGN', xh+margin+29*3, y, 29*6, 29+blines, '#fff', '▲');}if(_f_gamemode==_F_GAMEMODE_88 || _f_gamemode==_F_GAMEMODE_SUDAOSHI){if(i==0){_f_rightText(n+'-YAKUDAI-KAN', xh+w-margin-29*10, y, 29*7, 29+blines, '#fff', '零<span style="color:#ff0; ">貫</span>');}else {j=Math.floor(i/12); i=i-12*j;_f_rightText(n+'-YAKUDAI-KAN', xh+w-margin-29*10, y, 29*7, 29+blines, '#fff', _f_to_wasuji(j)+'<span style="color:#ff0; ">貫</span>');if(i){_f_rightText(n+'-YAKUDAI-TEN', xh+w-margin-29*3, y, 29*3, 29+blines, '#fff', _f_to_wasuji(i)+'<span style="color:#ff0; ">点</span>');}}}else {if(i) i=_f_to_wasuji(i); else i='零';_f_rightText(n+'-YAKUDAI-TEN',  xh+w-margin-29*7, y, 29*7, 29+blines, '#fff', i+u);}}y=yh+h-margin-29;_f_leftText(n+'-AFTER-H', xh+margin, y, 29*6, 29+blines, '#0ff', '収支後');i=_f[seki].score_after_balance;if(i<0){_f_leftText(n+'-AFTER-SIGN', xh+margin+29*3, y, 29, 29+blines, '#fff', '▲');i=-i;}if(_f_gamemode==_F_GAMEMODE_88 || _f_gamemode==_F_GAMEMODE_SUDAOSHI){j=Math.floor(i/12); i=i-12*j;_f_rightText(n+'-AFTER-KAN', xh+w-margin-29*10, y, 29*7, 29+blines, '#fff', _f_to_wasuji(j)+'<span style="color:#ff0; ">貫</span>');}_f_rightText(n+'-AFTER-TEN', xh+w-margin-29*6, y, 29*6, 29+blines, '#fff', _f_to_wasuji(i)+u);}}function _f_balance_erase(){var e, i, j;e=document.getElementsByTagName('div');i=e.length; while(--i>=0){if(!e[i].getAttribute('data-bylib')) continue;if(!(j=e[i].getAttribute('id'))) continue;if(j.indexOf('BALANCE-')!=0 && j.indexOf('YAKU_')!=0) continue;e[i].parentNode.removeChild(e[i]);}}