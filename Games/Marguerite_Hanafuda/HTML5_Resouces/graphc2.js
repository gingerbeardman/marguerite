function _f_tefuda_disp(seki){makeNoClickable();if(seki<0 || seki>_f_players) return;_f_h5_blinkTefuda_flag[seki]=0;_f_h5_blinkTefuda[seki]=null;_f_tefuda_disp_main(seki);}function _h5_makeHandClickable(){var  i, x, y;i=9; while(--i>-1) removeTextArea('TEFUDA-NO'+i);y=960-_f_fudaHeight; x=215;if(_f_players==2) x=155;i=-1; while(++i<8){if((_f[0].tefuda[i] & 0xff)>0) newAnchorArea(i+1, x-(_f_fudaWidth >> 1), y-(_f_fudaHeight >> 1), _f_fudaWidth, _f_fudaHeight, 'TEFUDA-NO'+i, 10, 'transparent', '#fff');x+=_f_fudaWidth;}}function _h5_makeHandUnclickable(){var  i;i=9; while(--i>-1) removeTextArea('TEFUDA-NO'+i);}function _f_tefuda_disp_main(seki){var x=0, y=0, i, k, j, b, dy, blkf=0;if(_f_gamemode==_F_GAMEMODE_KYOKABU || _f_gamemode==_F_GAMEMODE_OICHOKABU){if(seki==_f_oya){var pX=new Array(3), pY=0, mX=330, xY;pX[2]=510; pX[1]=600; pX[0]=690; mY=80;pY=90;if(_f_oya==0){i=pX[0]; pX[0]=pX[2]; pX[2]=i;pY=800; mY=820;}i=-1; while(++i<3){j=_f[seki].tefuda[i];if(j!=0){if(_f_open_mode==0 && _f_oichokabu_oyaOpen==0) j=-1;_f_fuda_disp(j, pX[i], pY, 0, 0, 0, 0, 0);}}if(_f_oichokabu_oyaYaku!=''){k='#ffff00';if(_f[seki].oichokabu_total[0]>10) k='#ff8888';if(_f[seki].oichokabu_total[0]<8) k='#ffffff';if(_f[seki].oichokabu_total[0]==0) k='#00ffff';putRectangle(mX, mY, 128, 32, 'rgba(0,0,0,0.7)');drawTextMincho(_f_oichokabu_oyaYaku, mX+124, mY+2, 128, 29, 1, 29, 29, 'rgba(0, 0, 0, 0)', k, 'right');}return;}var pX=new Array(3), pY=new Array(3);if(_f_oya==1){pX[0]=898+270-(_f_fudaWidth >> 1); pY[0]=640-(_f_fudaHeight >> 1);pX[1]=48; pY[1]=0;pX[2]=48+(_f_fudaWidth >> 1); pY[2]=760-(_f_fudaHeight >> 1);}else if(_f_oya==2){pX[0]=48+(_f_fudaWidth >> 1); pY[0]=760-(_f_fudaHeight >> 1);pX[1]=898+270-(_f_fudaWidth >> 1); pY[1]=640-(_f_fudaHeight >> 1);pX[2]=48; pY[2]=0;}else if(_f_oya==0){pX[0]=48; pY[0]=690;pX[1]=898+270-(_f_fudaWidth >> 1); pY[1]=102+(_f_fudaHeight >> 1);pX[2]=48+(_f_fudaWidth >> 1); pY[2]=182+(_f_fudaHeight >> 1);}x=pX[seki]; y=pY[seki];j=_f[seki].tefuda[0];_f_fuda_disp(j, x, y, 0, 0, 0, 0, 0);return;}if(seki==0){var ftf=new Array(10); i=10; while(--i>-1) ftf[i]=0;y=950-_f_fudaHeight; x=215;if(_f_players==2) x=155;putRectangleAbs(x-(_f_fudaWidth >> 1)-2, y-(_f_fudaHeight >> 1)-2, x+_f_fudaWidth*8-(_f_fudaWidth >> 1)+2, y+(_f_fudaHeight >> 1)+2,  _f_cushionColor);i=-1; while(++i<8){j=_f[0].tefuda[i]; b=0; if(j & 0x400){ b++; blkf++; }if(j & 0x200){ j &= 0x5ff; }k=_f_te_torefuda[i];if(!_f_torefuda_mark) k=k % 10;else if(k>10 && (j & 0xff)) blkf=1;ftf[k % 10]++;if(_f_h5_blinkTefuda_flag[0]){ k %= 10; b=0; }_f_fuda_disp(j, x, y, 0, 0, 0, k, b);makeClickable(i+1, x-(_f_fudaWidth >> 1), y-(_f_fudaHeight >> 1), _f_fudaWidth, _f_fudaHeight, 'TEFUDA-NO'+i, 10, 'transparent', '#fff');x+=_f_fudaWidth;}clearTimeout(_f_h5_blinkTefuda[0]);if(blkf){if(!_f_h5_blinkTefuda_flag[0]){_f_h5_blinkTefuda_flag[0]=1;_f_h5_blinkTefuda[0]=setTimeout("_f_tefuda_disp_main(0);", _f_h5_blinkTimeP);}else {_f_h5_blinkTefuda_flag[0]=0;_f_h5_blinkTefuda[0]=setTimeout("_f_tefuda_disp_main(0);", _f_h5_blinkTimeN);}}return;}if(seki==1 && _f_players==2){y=40; x=1045;putRectangleAbs(x-_f_fudaWidth*8+(_f_fudaWidth >> 1)-2, y-(_f_fudaHeight >> 1)-2, x+(_f_fudaWidth >> 1)+2, y+(_f_fudaHeight >> 1)+2, _f_cushionColor);i=-1; while(++i<8){if(((j=_f[1].tefuda[i]) & 0xff)==0) j=b=0;else {b=0; if(j & 0x400){ blkf++; b++; }if(j & 0x200) j &= 0x5ff;else if(_f[1].open || _f_open_mode) j |= 0x200;else j=-1;}if(_f_h5_blinkTefuda_flag[1]) b=0;_f_fuda_disp(j, x, y, 0, 0, 180, 0, b);x-=_f_fudaWidth;}clearTimeout(_f_h5_blinkTefuda[1]);if(blkf){if(!_f_h5_blinkTefuda_flag[1]){_f_h5_blinkTefuda_flag[1]=1;_f_h5_blinkTefuda[1]=setTimeout("_f_tefuda_disp_main(1);", _f_h5_blinkTimeP);}else {_f_h5_blinkTefuda_flag[1]=0;_f_h5_blinkTefuda[1]=setTimeout("_f_tefuda_disp_main(1);", _f_h5_blinkTimeN);}}return;}if(seki==1 && _f_players==3){y=605; x=1180;putRectangleAbs(x-(_f_fudaHeight >> 1)-2, y-_f_fudaWidth*7+(_f_fudaWidth >> 1)-2, x+(_f_fudaHeight >> 1)+2, y+(_f_fudaWidth >> 1)+2, _f_cushionColor);i=-1; while(++i<7){if(((j=_f[1].tefuda[i]) & 0xff)==0) j=b=0;else {b=0; if(j & 0x400){ blkf++; b++; }if(j & 0x200) j &= 0x5ff;else if(_f[1].open || _f_open_mode) j |= 0x200;else j=-1;}if(_f_h5_blinkTefuda_flag[1]) b=0;_f_fuda_disp(j, x, y, 0, 0, 270, 0, b);y-=_f_fudaWidth;}clearTimeout(_f_h5_blinkTefuda[1]);if(blkf){if(!_f_h5_blinkTefuda_flag[1]){_f_h5_blinkTefuda_flag[1]=1;_f_h5_blinkTefuda[1]=setTimeout("_f_tefuda_disp_main(1);", _f_h5_blinkTimeP);}else {_f_h5_blinkTefuda_flag[1]=0;_f_h5_blinkTefuda[1]=setTimeout("_f_tefuda_disp_main(1);", _f_h5_blinkTimeN);}}return;}if(seki==2 && _f_players==3){y=35; x=20;putRectangleAbs(x-(_f_fudaHeight >> 1)-2, y-(_f_fudaWidth >> 1)-2, x+(_f_fudaHeight >> 1)+2, y+_f_fudaWidth*6+(_f_fudaWidth >> 1)+2, _f_cushionColor);i=-1; while(++i<7){if(((j=_f[2].tefuda[i]) & 0xff)==0) j=b=0;else {b=0; if(j & 0x400){ blkf++; b++; }if(j & 0x200) j &= 0x5ff;else if(_f[2].open || _f_open_mode) j |= 0x200;else j=-1;}if(_f_h5_blinkTefuda_flag[2]) b=0;_f_fuda_disp(j, x, y, 0, 0, 90, 0, b);y+=_f_fudaWidth;}clearTimeout(_f_h5_blinkTefuda[2]);if(blkf){if(!_f_h5_blinkTefuda_flag[2]){_f_h5_blinkTefuda_flag[2]=1;_f_h5_blinkTefuda[2]=setTimeout("_f_tefuda_disp_main(2);", _f_h5_blinkTimeP);}else {_f_h5_blinkTefuda_flag[2]=0;_f_h5_blinkTefuda[2]=setTimeout("_f_tefuda_disp_main(2);", _f_h5_blinkTimeN);}}}return;}function _f_yamafuda_disp(fcode){var x, y, i, o;y=480; x=785;if(_f_players==2){y=470; x=900-33;if(_f_gamemode==_F_GAMEMODE_88) x-=16;}if(_f_gamemode==_F_GAMEMODE_KYOKABU || _f_gamemode==_F_GAMEMODE_OICHOKABU){ x=960; y=360; }putRectangleAbs(x-(_f_fudaWidth >> 1)-3, y-(_f_fudaHeight >> 1)-74, x+(_f_fudaWidth >> 1)+2, y+(_f_fudaHeight >> 1)+4, _f_cushionColor);i=-1;while(++i<_f_yamafuda_remain){if(_f_yamafuda[i]!=0){_f_fuda_disp(0xff, x, y, _f_fudaWidth, _f_fudaHeight+1, 0, 0, 0);putRectangle(x-(_f_fudaWidth >> 1), y-(_f_fudaHeight >> 1)+2, _f_fudaWidth, _f_fudaHeight+1, 'rgba(0, 0, 0, 0.5)');}y-=1.5;}if(!_f_yamafuda_remain) return
_f_fuda_disp(0xff, x, y, _f_fudaWidth, _f_fudaHeight+1, 0, 0, 0);if(fcode>0){_f_fuda_disp(fcode, x, y, 0, 0, 0, 0, 0);}return;}function _f_oichokabu_selectable_yamafuda_disp(){makeNoClickable();_f_h5_blinkBafuda_flag=0;_f_oichokabu_selectable_yamafuda_disp_sub();}function _f_oichokabu_selectable_yamafuda_disp_sub(){var x, y, i, o, lfx, rfx, lfy, rfy, blx, bly, brx, bry;lfx=1676; rfx=2872; lfy=1828; rfy=1828;blx=2152; bly=1828; brx=2396; bry=1828;if(_f_fudaBack==''){lfx=1914; rfx=2634; lfy=1828; rfy=1828;}x=960; y=360;putRectangleAbs(x-(_f_fudaWidth >> 1)-80, y-(_f_fudaHeight >> 1)-74, x+(_f_fudaWidth >> 1)+86, y+(_f_fudaHeight >> 1)+4, _f_cushionColor);i=-1; while(++i<_f_yamafuda_remain){if(_f_yamafuda[i]!=0){if(i==_f_yamafuda_remain-1){_f_fuda_disp(0xff, x, y, _f_fudaWidth, _f_fudaHeight+1, 0, 0, 0);putRectangleAbs(x-(_f_fudaWidth >> 1), y+(_f_fudaHeight >> 1), x+(_f_fudaWidth >> 1), y+(_f_fudaHeight >> 1)+2, 'rgba(0, 0, 0, 0.5)');if(!_f_h5_blinkBafuda_flag){putPartOfImage(image[0], 1680, 228, 132, 212, x-(_f_fudaWidth >> 1), y-(_f_fudaHeight >> 1), _f_fudaWidth, _f_fudaHeight);}newAnchorArea(-1, x-(_f_fudaWidth >> 1), y-(_f_fudaHeight >> 1), _f_fudaWidth, _f_fudaHeight+1, 'FUDA-NO-1', 10, 'transparent', '#fff');y-=1.5; continue;}if(i==_f_yamafuda_remain-4){putPartOfImage(image[0], rfx, rfy, 230, 254, x, y-(_f_fudaHeight >> 1), 122, 135);if(!_f_h5_blinkBafuda_flag){putPartOfImage(image[0], brx, bry, 230, 254, x, y-(_f_fudaHeight >> 1), 122, 135);}newAnchorArea(-2, x+(_f_fudaWidth >> 1), y-(_f_fudaHeight >> 1), 52, 135, 'FUDA-NO-2', 10, 'transparent', '#fff');y-=1.5; continue;}if(i==0){putPartOfImage(image[0], lfx, lfy, 230, 254, x-(_f_fudaWidth >> 1)-80, y-(_f_fudaHeight >> 1)-16, 122, 135);if(!_f_h5_blinkBafuda_flag){putPartOfImage(image[0], blx, bly, 230, 254, x-(_f_fudaWidth >> 1)-80, y-(_f_fudaHeight >> 1)-16, 122, 135);}newAnchorArea(-10, x-(_f_fudaWidth >> 1)-80, y-(_f_fudaHeight >> 1), 80, 135, 'FUDA-NO-10', 10, 'transparent', '#fff');y-=1.5; continue;}_f_fuda_disp(0xff, x, y, _f_fudaWidth, _f_fudaHeight+1, 0, 0, 0);putRectangleAbs(x-(_f_fudaWidth >> 1), y+(_f_fudaHeight >> 1), x+(_f_fudaWidth >> 1), y+(_f_fudaHeight >> 1)+2, 'rgba(0, 0, 0, 0.5)');y-=1.5;}}clearTimeout(_f_h5_blinkBafuda);if(!_f_h5_blinkBafuda_flag){_f_h5_blinkBafuda_flag=1;_f_h5_blinkBafuda=setTimeout("_f_oichokabu_selectable_yamafuda_disp_sub();", _f_h5_blinkTimeP);}else {_f_h5_blinkBafuda_flag=0;_f_h5_blinkBafuda=setTimeout("_f_oichokabu_selectable_yamafuda_disp_sub();", _f_h5_blinkTimeN);}return;}function _f_h5_oichokabu_selectable_yamafuda_erase(){clearTimeout(_f_h5_blinkBafuda);x=960; y=360;putRectangleAbs(x-(_f_fudaWidth >> 1)-80, y-(_f_fudaHeight >> 1)-74, x+(_f_fudaWidth >> 1)+86, y+(_f_fudaHeight >> 1)+4, _f_cushionColor);_f_yamafuda_disp(-1);}_f_ba_x3=new Array( 415, 559, 703, 415, 559, 703, 415, 559, 703, 487, 487, 487, 631, 631, 631, 775);_f_ba_y3=new Array( 130, 130, 130, 255, 255, 255, 380, 380, 380, 130, 255, 380, 130, 255, 380,  80);_f_ba_x2=new Array( 235, 395, 555, 235, 395, 555, 715, 715, 315, 475, 635, 795, 315, 475, 635, 795);_f_ba_y2=new Array( 375, 375, 375, 505, 505, 505, 375, 505, 375, 375, 375, 375, 505, 505, 505, 505);_f_ba_xm=new Array( 235, 395, 555, 715, 235, 395, 555, 715, 315, 475, 635, 795, 315, 475, 635, 795);_f_ba_ym=new Array( 375, 375, 375, 375, 505, 505, 505, 505, 375, 375, 375, 375, 505, 505, 505, 505);function _h5_makeBafudaClickable(){var  i, j, k, x, y, x1, y1;i=9; while(--i>-1) removeTextArea('BAFUDA-NO'+i);k=100;if(_f_players==2){i=-1; while(++i<24){if(_f_torefuda_flag[i]){x=_f_ba_x2[i], y=_f_ba_y2[i];if(_f_gamemode==_F_GAMEMODE_MUSHI || _f_gamemode==_F_GAMEMODE_600KEN || (_f_gamemode==_F_GAMEMODE_KOIKOI && _f_rule_sel['KK_bafuda'])){ x=_f_ba_xm[i]; y=_f_ba_ym[i]; }if(_f_gamemode==_F_GAMEMODE_88){ x-=40; }newAnchorArea(k, x-(_f_fudaWidth >> 1), y-(_f_fudaHeight >> 1), _f_fudaWidth, _f_fudaHeight, 'BAFUDA-NO'+k, 10, 'transparent', '#fff');}++k;}}else {i=-1; while(++i<24){if(_f_torefuda_flag[i]){x=_f_ba_x3[i]; y=_f_ba_y3[i];newAnchorArea(k, x-(_f_fudaWidth >> 1), y-(_f_fudaHeight >> 1), _f_fudaWidth, _f_fudaHeight, 'BAFUDA-NO'+k, 10, 'transparent', '#fff');}++k;}}}function _h5_makeBafudaClickable_K(){var  i, j, k, x, y, x1, y1;i=9; while(--i>-1) removeTextArea('BAFUDA-NO'+i);var pX=new Array(4), pY=new Array(3), cY=new Array(0, 0, 0, 0);pX[0]=402; pX[1]=534; pX[2]=666; pX[3]=798;pY[0]=280; pY[1]=400; pY[2]=530;if(_f_oya==0){i=pX[0]; pX[0]=pX[3]; pX[3]=i;i=pX[1]; pX[1]=pX[2]; pX[2]=i;pY[0]=570; pY[1]=450; pY[2]=310;cY[1]=62; cY[2]=182;}else if(_f_oya==1){cY[0]=700; cY[2]=820;}else if(_f_oya==2){cY[0]=820; cY[1]=700;}i=-1; while(++i<4){k1=0;if(_f_bafuda[20+i]){k1=i+1;newAnchorArea(k1, pX[i]-(_f_fudaWidth >> 1), pY[0]-(_f_fudaHeight >> 1), _f_fudaWidth, _f_fudaHeight, 'BAFUDA-NO'+k1, 10, 'transparent', '#fff');}}}function _h5_makeBafudaUnclickable(){var  i;i=24; while(--i>-1) removeTextArea('BAFUDA-NO'+i);}function _f_bafuda_disp(mode){makeNoClickable();_f_h5_blinkBafuda_flag=0;_f_bafuda_disp_main(mode);}function _f_bafuda_disp_main(mode){var i, j, k, l, k1, x, y, blkf=0;var kr_i, kr_y, kr_o=new Object();k=100;if(_f_gamemode==_F_GAMEMODE_KYOKABU || _f_gamemode==_F_GAMEMODE_OICHOKABU){var pX=new Array(4), pY=new Array(3), cY=new Array(0, 0, 0, 0);pX[0]=402; pX[1]=534; pX[2]=666; pX[3]=798;pY[0]=280; pY[1]=400; pY[2]=530;if(_f_oya==0){i=pX[0]; pX[0]=pX[3]; pX[3]=i;i=pX[1]; pX[1]=pX[2]; pX[2]=i;pY[0]=570; pY[1]=450; pY[2]=310;cY[1]=62; cY[2]=182;}else if(_f_oya==1){cY[0]=700; cY[2]=820;}else if(_f_oya==2){cY[0]=820; cY[1]=700;}var x1, y1, x2, y2;x1=Math.min(pX[0], pX[3]); x2=Math.max(pX[0], pX[3]);y1=Math.min(pY[0], pY[1]); y2=Math.max(pY[0], pY[1]);putRectangleAbs(x1-(_f_fudaWidth >> 1)-24, y1-(_f_fudaHeight >> 1)-22, x2+(_f_fudaWidth >> 1)+2, y2+(_f_fudaHeight >> 1)+2, _f_cushionColor);i=-1; while(++i<4){j=_f_bafuda[i];_f_fuda_disp(j, pX[i], pY[0], 0, 0, 0, 0, 0);}i=-1; while(++i<4){j=_f_bafuda[4+i];if(j!=0 && _f_open_mode==0 && _f_oichokabu_opened_flag[i]==0) j=-1;_f_fuda_disp(j, pX[i], pY[1], 0, 0, 0, 0, 0);}i=-1; while(++i<4){j=_f_bafuda[8+i];_f_fuda_disp(j, pX[i], pY[2], 0, 0, 0, 0, 0);}var id=0, o, x01, x05, x00;i=-1; while(++i<4){x00=pX[i]; x05=pX[i]-20; x01=pX[i]+20;if(_f_oya==0){x05=pX[i]+16; x01=pX[i]-16;}j=3; while(--j>=0){if(_f_oya==j) continue;putRectangle(pX[i]-70, cY[j]-60, 130, 118, _f_cushionColor);if((k=_f[j].betted[i])==0) continue;y=cY[j];if(k<5){while(k>0){x=x00;putPartOfImage(image[0], 3359, 1702, 93, 80, x-20, y-28, 40, 40);y-=8; --k;}}else {x=x05; if(!(k % 5)) x=x00;while(k>0){if(k>4){putPartOfImage(image[0], 3459, 1702, 93, 80, x-20, y-28, 40, 40);y-=8; k-=5;if(k<5) y=cY[j]+6;continue;}x=x01;putPartOfImage(image[0], 3359, 1702, 93, 80, x-20, y-28, 40, 40);y-=8; --k;}}k=_f[j].oichokabu_total4disp[i];if(k!=''){var s=k;k=_f[j].oichokabu_balance[i];l='#ffff00'; if(k<=0) l='#00ffff';if(_f[j].betted[i]==k) l='#cccccc';x=x00-68; y=cY[j]-50;putRectangle(x, y, 132, 72, 'rgba(0,0,0,0.7)');drawTextMincho(s, x+2, y+2, 128, 29, 1, 29, 29, 'rgba(0, 0, 0, 0)', l, 'left');if(k){if(k<0) s='▲　'+_f_to_wasuji(-k)+'点';else s=_f_to_wasuji(k)+'点';drawTextMincho(s, x+124, y+36, 128, 29, 1, 29, 29, 'rgba(0, 0, 0, 0)', l, 'right');}}if(!(k=_f[j].oichokabu_koishimo[i])) continue;if(k<0) l='引かず';else l=' 引き';x=x00-30; y=cY[j]+20;putRectangle(x, y, 60, 24, '#000');drawText(l, x+30, y+4, 80, 18, 0, 18, 18, 'rgba(0, 0, 0, 0)', '#fff', 'center');}}return;}if(_f_players==2){x1=235; if(_f_gamemode==_F_GAMEMODE_88) x1-=40;putRectangleAbs(x1-(_f_fudaWidth >> 1)-24, 355-(_f_fudaHeight >> 1)-22, x1+560+(_f_fudaWidth >> 1)+2, 505+(_f_fudaHeight >> 1)+2, _f_cushionColor);i=-1;while(++i<24){var x1=_f_ba_x2[i], y1=_f_ba_y2[i];j=_f_bafuda[i];if((j & 0x0f)>3){kr_toCardDataObj(j, kr_o);kr_y=y1;kr_i=-1; while(++kr_i<kr_o.num){_f_fuda_disp(kr_o.cards[kr_i], x1, kr_y, 0, 0, 0, 0, 0);kr_y-=6;}continue;}l=0;if(mode && _f_torefuda_flag[i]){ l=1; blkf++; }if(_f_h5_blinkBafuda_flag) l=0;if(_f_gamemode==_F_GAMEMODE_MUSHI || _f_gamemode==_F_GAMEMODE_600KEN || (_f_gamemode==_F_GAMEMODE_KOIKOI && _f_rule_sel['KK_bafuda'])){ x1=_f_ba_xm[i]; y1=_f_ba_ym[i]; }if(_f_gamemode==_F_GAMEMODE_88){ x1-=40; }_f_fuda_disp(j, x1, y1, 0, 0, 0, 0, l);}i=-1;while(++i<24){j=_f_awase_bafuda[i];var x1=_f_ba_x2[i], y1=_f_ba_y2[i];if((j & 0x0f)>3){kr_toCardDataObj(j, kr_o);kr_y=y1-20;kr_i=-1; while(++kr_i<kr_o.num){_f_fuda_disp(kr_o.cards[kr_i], x1-20, kr_y, 0, 0, 0, 0, 0);kr_y-=6;}continue;}if(_f_gamemode==_F_GAMEMODE_MUSHI || _f_gamemode==_F_GAMEMODE_600KEN || (_f_gamemode==_F_GAMEMODE_KOIKOI && _f_rule_sel['KK_bafuda'])){ x1=_f_ba_xm[i]; y1=_f_ba_ym[i]; }if(_f_gamemode==_F_GAMEMODE_88){ x1-=40; }if(j & 0xf0) _f_fuda_disp(j, x1-20, y1-20, 0, 0, 0, 0, 0);}}else {putRectangleAbs(415-(_f_fudaWidth >> 1)-2, 0, 705+(_f_fudaWidth >> 1)+4, 380+(_f_fudaHeight >> 1)+22, _f_cushionColor);putRectangleAbs(775-(_f_fudaWidth >> 1)-2, 0, 775+(_f_fudaWidth >> 1)+4, 130+(_f_fudaHeight >> 1)+22, _f_cushionColor);i=-1; while(++i<24){j=_f_bafuda[i];if((j & 0x0f)>3){kr_toCardDataObj(j, kr_o);kr_y=_f_ba_y3[i];kr_i=-1; while(++kr_i<kr_o.num){_f_fuda_disp(kr_o.cards[kr_i], _f_ba_x3[i], kr_y, 0, 0, 0, 0, 0);kr_y-=6;}continue;}l=0;if(mode && _f_torefuda_flag[i]){ l=1; blkf++; }if(_f_h5_blinkBafuda_flag){ l=0; }_f_fuda_disp(j, _f_ba_x3[i], _f_ba_y3[i], 0, 0, 0, 0, l);}i=-1; while(++i<24){j=_f_awase_bafuda[i];if((j & 0x0f)>3){kr_toCardDataObj(j, kr_o);kr_y=_f_ba_y3[i]+20;kr_i=-1; while(++kr_i<kr_o.num){_f_fuda_disp(kr_o.cards[kr_i], _f_ba_x3[i]+8, kr_y, 0, 0, 0, 0, 0);kr_y-=6;}continue;}if(j & 0xf0) _f_fuda_disp(j, _f_ba_x3[i]+8, _f_ba_y3[i]+20, 0, 0, 0, 0, 0);}}clearTimeout(_f_h5_blinkBafuda);if(blkf){if(!_f_h5_blinkBafuda_flag){_f_h5_blinkBafuda_flag=1;_f_h5_blinkBafuda=setTimeout("_f_bafuda_disp_main('+mode+');", _f_h5_blinkTimeP);}else {_f_h5_blinkBafuda_flag=0;_f_h5_blinkBafuda=setTimeout("_f_bafuda_disp_main('+mode+');", _f_h5_blinkTimeN);}}}function kr_toCardDataObj(code, dat){var d=code & 0xff;var m=d >> 4;var n=d & 0x00f;dat.num=0;dat.cards=[0, 0, 0, 0];if(n<3){dat.num=1;dat.cards[0]=d;return;}else {v=n;if(n==4) v=3;}var m2=m << 4;if(v & 1){dat.cards[dat.num++]=m2;}if(v & 2){if(m==11){dat.cards[dat.num++]=m2+1;}else {dat.cards[dat.num++]=m2;}}if(v & 4){if(m==12 || m==11 || m==8){dat.cards[dat.num++]=m2+2;}else {dat.cards[dat.num++]=m2+1;}}if(v & 8){if(m==12 || m==11 || m==8 || m==3 || m==1){dat.cards[dat.num++]=m2+3;}else {dat.cards[dat.num++]=m2+2;}}}function kr_fromCardDataObj(num, cards){var v=0, i, d, m;if(num<1 || num>4) return(-1);if(num<2) return(cards[0]);m=(cards[0] & 0xff) >> 4;i=-1; while(++i<num){d=cards[i] & 0x00f;if(d==0){if(v & 1) v |= 2;else  v |= 1;continue;}if(d==1){if(m==11) v |= 2;else v |= 4;continue;}if(d==2){if(m==8 || m==11 || m==12) v |= 4;else v |= 8;continue;}v |= 8;}if(v==3) v=4;return((m << 4)+v);}function kr_removeHighest(code){var o=new Object(), i;kr_toCardDataObj(code, o);if(o.num<2){return(0);}if(o.num==2){return(o.cards[0]);}o.num--;i=kr_fromCardDataObj(o.num, o.cards);return(i);}_f_getPoint_X88=new Array( 186, 838, 174 );_f_getPoint_Y88=new Array( 645, 520, 78 );function _f_torifuda_disp(seki){if(seki<0 || seki>_f_players) return;clearTimeout(_f_h5_blinkTorifuda[seki]);_f_h5_blinkTorifuda[seki]=null;_f_h5_blinkTorifuda_flag[seki]=0;_f_torifuda_disp_main(seki);}function _f_torifuda_disp_main(seki){var i, j, k, l, n, x, y, y1, e, blkf=0;if(seki==0 && _f_players==3){if(_f_gamemode==_F_GAMEMODE_SUDAOSHI){x=415; y=700; j=_f[0].torifuda10_ctr; i=-1;while(++i<j){l=0; if((k=_f[0].torifuda10[i]) & 0x400){ l=1; blkf=1; }if(_f_h5_blinkTorifuda_flag[0]) l=0;_f_fuda_disp(k & 0xff, x, y, 0, 0, 0, 0, l);y-=35;if((i % 5)==4 && i<20){ y=700; x+=70; }}x=705; y=700; j=_f[0].torifuda05_ctr; i=-1;while(++i<j){l=0; if((k=_f[0].torifuda05[i]) & 0x400){ l=1; blkf=1; }if(_f_h5_blinkTorifuda_flag[0]) l=0;_f_fuda_disp(k & 0xff, x, y, 0, 0, 0, 0, l);y-=35;if(i==4){ y=700; x+=70; }}x=850+35; y=825; j=_f[0].torifuda01_ctr; i=-1;while(++i<j){l=0; if((k=_f[0].torifuda01[i]) & 0x400){ l=1; blkf=1; }if(_f_h5_blinkTorifuda_flag[0]) l=0;_f_fuda_disp(k & 0xff, x, y, 0, 0, 0, 0, l);y-=25;if(i==4){ y=825; x+=70; }}}else {x=380+35; y=700; j=_f[0].torifuda20_ctr; i=-1;while(++i<j){l=0; if((k=_f[0].torifuda20[i]) & 0x1400){ l=1; blkf=1; }if(k & 0x8000){ l=-1; }if(_f_h5_blinkTorifuda_flag[0]) l=0;_f_fuda_disp(k & 0xff, x, y, 0, 0, 0, 0, l);y-=35;}x=455+35; y=700; j=_f[0].torifuda10_ctr; i=-1;while(++i<j){l=0; if((k=_f[0].torifuda10[i]) & 0x400){ l=1; blkf=1; }if(_f_h5_blinkTorifuda_flag[0]) l=0;_f_fuda_disp(k & 0xff, x, y, 0, 0, 0, 0, l);y-=35;if(i==4){ y=700; x+=70; }}x=630+35; y=700; j=_f[0].torifuda05_ctr; i=-1;while(++i<j){l=0; if((k=_f[0].torifuda05[i]) & 0x1400){ l=1; blkf=1; }if(k & 0x8000){ l=-1; }if(_f_h5_blinkTorifuda_flag[0]) l=0;_f_fuda_disp(k & 0xff, x, y, 0, 0, 0, 0, l);y-=35;if(i==4){ y=700; x+=70; }}x=785+35; y=825; j=_f[0].torifuda01_ctr; i=-1;while(++i<j){l=0; if((k=_f[0].torifuda01[i]) & 0x400){ l=1; blkf=1; }if(_f_h5_blinkTorifuda_flag[0]) l=0;_f_fuda_disp(k & 0xff, x, y, 0, 0, 0, 0, l);y-=25;if(i==4 || i==9 || i==14 || j==19){ y=825; x+=70; }}}if(_f_gamemode!=_F_GAMEMODE_600KEN){x=_f_getPoint_X88[0]; y=_f_getPoint_Y88[0];j=_f[0].torifuda01_ctr+  _f[0].torifuda05_ctr*5+  _f[0].torifuda10_ctr*10+  _f[0].torifuda20_ctr*20;e=_f_rightText('TORIFUDA_0-1', x, y, 192, 36, '#FFF', _f_to_wasuji(j)+'点');e.style.background='rgba(0,0,0,0.7)';if((j=_f[0].torifuda_dekiyaku)>0){if(_f_gamemode==_F_GAMEMODE_88){e=_f_rightText('TORIFUDA_0-1', x, y, 192, 36, '#FF0', _f_to_wasuji(Math.floor(j/12))+'貫');e.style.background='rgba(0,0,0,0.7)';}else if(_f_gamemode==_F_GAMEMODE_HANAAWASE){y-=36;e=_f_rightText('TORIFUDA_0-2', x, y, 192, 36, '#FF0', _f_to_wasuji(j)+'点');e.style.background='rgba(0,0,0,0.7)';}else if(_f_gamemode==_F_GAMEMODE_SUDAOSHI){y-=36;e=_f_rightText('TORIFUDA_0-2', x, y, 192, 36, '#FF0', _f_to_wasuji(Math.floor(j/12))+'貫');e.style.background='rgba(0,0,0,0.7)';}}}clearTimeout(_f_h5_blinkTorifuda[0]);if(blkf){if(!_f_h5_blinkTorifuda_flag[0]){_f_h5_blinkTorifuda_flag[0]=1;_f_h5_blinkTorifuda[0]=setTimeout("_f_torifuda_disp_main(0);", _f_h5_blinkTimeP);}else {_f_h5_blinkTorifuda_flag[0]=0;_f_h5_blinkTorifuda[0]=setTimeout("_f_torifuda_disp_main(0);", _f_h5_blinkTimeN);}}return;}if(seki==0 && _f_players==2){x=155; y=680; j=_f[0].torifuda20_ctr; i=-1;while(++i<j){l=0; if((k=_f[0].torifuda20[i]) & 0x1400){ l=1; blkf=1; }if(k & 0x8000){ l=-1; }if(_f_h5_blinkTorifuda_flag[0]) l=0;_f_fuda_disp(k & 0xff, x, y, 0, 0, 0, 0, l);x+=30;}x=395; y=680; j=_f[0].torifuda10_ctr; i=-1;while(++i<j){l=0; if((k=_f[0].torifuda10[i]) & 0x400){ l=1; blkf=1; }if(_f_h5_blinkTorifuda_flag[0]) l=0;_f_fuda_disp(k & 0xff, x, y, 0, 0, 0, 0, l);x+=30;}x=745; y=680; j=_f[0].torifuda05_ctr; i=-1;while(++i<j){l=0; if((k=_f[0].torifuda05[i]) & 0x1400){ l=1; blkf=1; }if(k & 0x8000){ l=-1; }if(_f_h5_blinkTorifuda_flag[0]) l=0;_f_fuda_disp(k & 0xff, x, y, 0, 0, 0, 0, l);x+=30;}x=745; y=830; j=_f[0].torifuda01_ctr; i=-1;while(++i<j){l=0; if((k=_f[0].torifuda01[i]) & 0x400){ l=1; blkf=1; }if(_f_h5_blinkTorifuda_flag[0]) l=0;_f_fuda_disp(k & 0xff, x, y, 0, 0, 0, 0, l);x+=30;if(i==9 || j==19){ y-=20; x=745; }}if(_f_gamemode!=_F_GAMEMODE_600KEN){x=1000; y=520;if(_f_gamemode!=_F_GAMEMODE_KOIKOI && (_f_gamemode!=_F_GAMEMODE_88 || _f[0].torifuda_dekiyaku<1)){j=_f[0].torifuda01_ctr+  _f[0].torifuda05_ctr*5+  _f[0].torifuda10_ctr*10+  _f[0].torifuda20_ctr*20;if(_f_gamemode==_F_GAMEMODE_HACHI){j=_f[0].torifuda01_ctr*10+  _f[0].torifuda05_ctr+  _f[0].torifuda10_ctr*10+  _f[0].torifuda20_ctr*10;}e=_f_rightText('TORIFUDA_0-1', x, y, 192, 36, '#FFF', _f_to_wasuji(j)+'点');e.style.background='rgba(0,0,0,0.7)';y+=36;}if((j=_f[0].torifuda_dekiyaku)>0){i='点'; if(_f_gamemode==_F_GAMEMODE_KOIKOI) i='文';if(_f_gamemode==_F_GAMEMODE_88){ j=Math.floor(j / 12); i='貫'; }e=_f_rightText('TORIFUDA_0-2', x, y, 192, 36, '#FFF', _f_to_wasuji(j)+i);e.style.background='rgba(0,0,0,0.7)';if(_f_gamemode!=_F_GAMEMODE_KOIKOI) e.style.color='#ff0';}}clearTimeout(_f_h5_blinkTorifuda[0]);if(blkf){if(!_f_h5_blinkTorifuda_flag[0]){_f_h5_blinkTorifuda_flag[0]=1;_f_h5_blinkTorifuda[0]=setTimeout("_f_torifuda_disp_main(0);", _f_h5_blinkTimeP);}else {_f_h5_blinkTorifuda_flag[0]=0;_f_h5_blinkTorifuda[0]=setTimeout("_f_torifuda_disp_main(0);", _f_h5_blinkTimeN);}}return;}if(seki==1 && _f_players==2){x=1045; y=210; j=_f[1].torifuda20_ctr; i=-1;while(++i<j){l=0; if((k=_f[1].torifuda20[i]) & 0x1400){ l=1; blkf=1; }if(k & 0x8000){ l=-1; }if(_f_h5_blinkTorifuda_flag[1]) l=0;_f_fuda_disp(k & 0xff, x, y, 0, 0, 180, 0, l);x-=30;}x=1045-240; y=210; j=_f[1].torifuda10_ctr; i=-1;while(++i<j){l=0; if((k=_f[1].torifuda10[i]) & 0x400){ l=1; blkf=1; }if(_f_h5_blinkTorifuda_flag[1]) l=0;_f_fuda_disp(k & 0xff, x, y, 0, 0, 180, 0, l);x-=30;}x=1045-240-350; y=210; j=_f[1].torifuda05_ctr; i=-1;while(++i<j){l=0; if((k=_f[1].torifuda05[i]) & 0x1400){ l=1; blkf=1; }if(k & 0x8000){ l=-1; }if(_f_h5_blinkTorifuda_flag[1]) l=0;_f_fuda_disp(k & 0xff, x, y, 0, 0, 180, 0, l);x-=30;}x=1045-240-350; y=60; j=_f[1].torifuda01_ctr; i=-1;while(++i<j){l=0; if((k=_f[1].torifuda01[i]) & 0x400){ l=1; blkf=1; }if(_f_h5_blinkTorifuda_flag[1]) l=0;_f_fuda_disp(k & 0xff, x, y, 0, 0, 180, 0, l);x-=30;if(i==9 || j==19){ y+=20; x=1045-240-350; }}if(_f_gamemode!=_F_GAMEMODE_600KEN){x=1000; y=325;if(_f_gamemode!=_F_GAMEMODE_KOIKOI && (_f_gamemode!=_F_GAMEMODE_88 || _f[1].torifuda_dekiyaku<1)){j=_f[1].torifuda01_ctr+  _f[1].torifuda05_ctr*5+  _f[1].torifuda10_ctr*10+  _f[1].torifuda20_ctr*20;if(_f_gamemode==_F_GAMEMODE_HACHI){j=_f[1].torifuda01_ctr*10+  _f[1].torifuda05_ctr+  _f[1].torifuda10_ctr*10+  _f[1].torifuda20_ctr*10;}e=_f_rightText('TORIFUDA_1-1', x, y, 192, 36, '#FFF', _f_to_wasuji(j)+'点');e.style.background='rgba(0,0,0,0.7)';y-=36;}if((j=_f[1].torifuda_dekiyaku)>0){i='点'; if(_f_gamemode==_F_GAMEMODE_KOIKOI) i='文';if(_f_gamemode==_F_GAMEMODE_88){ j=Math.floor(j / 12); i='貫'; }e=_f_rightText('TORIFUDA_1-2', x, y, 192, 36, '#FFF', _f_to_wasuji(j)+i);e.style.background='rgba(0,0,0,0.7)';if(_f_gamemode!=_F_GAMEMODE_KOIKOI) e.style.color='#ff0';}}clearTimeout(_f_h5_blinkTorifuda[1]);if(blkf){if(!_f_h5_blinkTorifuda_flag[1]){_f_h5_blinkTorifuda_flag[1]=1;_f_h5_blinkTorifuda[1]=setTimeout("_f_torifuda_disp_main(1);", _f_h5_blinkTimeP);}else {_f_h5_blinkTorifuda_flag[1]=0;_f_h5_blinkTorifuda[1]=setTimeout("_f_torifuda_disp_main(1);", _f_h5_blinkTimeN);}}return;}if(seki==2 && _f_players==3){if(_f_gamemode==_F_GAMEMODE_SUDAOSHI){x=60; y=525; j=_f[2].torifuda01_ctr; i=-1;while(++i<j){l=0; if((k=_f[2].torifuda01[i]) & 0x400){ l=1; blkf=1; }if(_f_h5_blinkTorifuda_flag[2]) l=0;_f_fuda_disp(k & 0xff, x, y, 0, 0, 90, 0, l);x+=25;}x=150; y=375; j=_f[2].torifuda05_ctr; i=-1;while(++i<j){l=0; if((k=_f[2].torifuda05[i]) & 0x400){ l=1; blkf=1; }if(_f_h5_blinkTorifuda_flag[2]) l=0;_f_fuda_disp(k & 0xff, x, y, 0, 0, 90, 0, l);x+=40;if(i==4){ y+=70; x=150; }}x=150; y=155; j=_f[2].torifuda10_ctr; i=-1;if(j>15) y-=70;while(++i<j){l=0; if((k=_f[2].torifuda10[i]) & 0x400){ l=1; blkf=1; }if(_f_h5_blinkTorifuda_flag[2]) l=0;_f_fuda_disp(k & 0xff, x, y, 0, 0, 90, 0, l);x+=40;if((i % 5)==4 && i<20){ y+=70; x=150; }}}else {x=60; y=525; j=_f[2].torifuda01_ctr; i=-1;while(++i<j){l=0; if((k=_f[2].torifuda01[i]) & 0x400){ l=1; blkf=1; }if(_f_h5_blinkTorifuda_flag[2]) l=0;_f_fuda_disp(k & 0xff, x, y, 0, 0, 90, 0, l);x+=25;if(i==9){ y+=70; x=60; }}x=150; y=380; j=_f[2].torifuda05_ctr; i=-1;while(++i<j){l=0; if((k=_f[2].torifuda05[i]) & 0x1400){ l=1; blkf=1; }if(k & 0x8000){ l=-1; }if(_f_h5_blinkTorifuda_flag[2]) l=0;_f_fuda_disp(k & 0xff, x, y, 0, 0, 90, 0, l);x+=40;if(i==4){ y+=70; x=150; }}x=150; y=235; j=_f[2].torifuda10_ctr; i=-1;while(++i<j){l=0; if((k=_f[2].torifuda10[i]) & 0x400){ l=1; blkf=1; }if(k & 0x8000){ l=-1; }if(_f_h5_blinkTorifuda_flag[2]) l=0;_f_fuda_disp(k & 0xff, x, y, 0, 0, 90, 0, l);x+=40;if(i==4){ y+=70; x=150; }}x=150; y=160; j=_f[2].torifuda20_ctr; i=-1;while(++i<j){l=0; if((k=_f[2].torifuda20[i]) & 0x1400){ l=1; blkf=1; }if(k & 0x8000){ l=-1; }if(_f_h5_blinkTorifuda_flag[2]) l=0;_f_fuda_disp(k & 0xff, x, y, 0, 0, 90, 0, l);x+=40;}}if(_f_gamemode!=_F_GAMEMODE_600KEN){x=_f_getPoint_X88[2]; y=_f_getPoint_Y88[2];j=_f[2].torifuda01_ctr+  _f[2].torifuda05_ctr*5+  _f[2].torifuda10_ctr*10+  _f[2].torifuda20_ctr*20;e=_f_rightText('TORIFUDA_2-1', x, y, 192, 36, '#FFF', _f_to_wasuji(j)+'点');e.style.background='rgba(0,0,0,0.7)';if((j=_f[2].torifuda_dekiyaku)>0){if(_f_gamemode==_F_GAMEMODE_88){e=_f_rightText('TORIFUDA_2-1', x, y, 192, 36, '#FF0', _f_to_wasuji(Math.floor(j/12))+'貫');e.style.background='rgba(0,0,0,0.7)';}else if(_f_gamemode==_F_GAMEMODE_HANAAWASE){y+=36;e=_f_rightText('TORIFUDA_2-2', x, y, 192, 36, '#FF0', _f_to_wasuji(j)+'点');e.style.background='rgba(0,0,0,0.7)';}else if(_f_gamemode==_F_GAMEMODE_SUDAOSHI){y+=36;e=_f_rightText('TORIFUDA_2-2', x, y, 192, 36, '#FF0', _f_to_wasuji(Math.floor(j/12))+'貫');e.style.background='rgba(0,0,0,0.7)';}}}clearTimeout(_f_h5_blinkTorifuda[2]);if(blkf){if(!_f_h5_blinkTorifuda_flag[2]){_f_h5_blinkTorifuda_flag[2]=1;_f_h5_blinkTorifuda[2]=setTimeout("_f_torifuda_disp_main(2);", _f_h5_blinkTimeP);}else {_f_h5_blinkTorifuda_flag[2]=0;_f_h5_blinkTorifuda[2]=setTimeout("_f_torifuda_disp_main(2);", _f_h5_blinkTimeN);}}return;}if(seki==1 && _f_players==3){if(_f_gamemode==_F_GAMEMODE_SUDAOSHI){x=1140; y=35; j=_f[1].torifuda01_ctr; i=-1;while(++i<j){l=0; if((k=_f[1].torifuda01[i]) & 0x400){ l=1; blkf=1; }if(_f_h5_blinkTorifuda_flag[1]) l=0;_f_fuda_disp(k & 0xff, x, y, 0, 0, 270, 0, l);x-=25;}x=1050; y=185; j=_f[1].torifuda05_ctr; i=-1;while(++i<j){l=0; if((k=_f[1].torifuda05[i]) & 0x400){ l=1; blkf=1; }if(_f_h5_blinkTorifuda_flag[1]) l=0;_f_fuda_disp(k & 0xff, x, y, 0, 0, 270, 0, l);x-=40;if(i==4){ y-=70; x=1050; }}x=1050; y=475; j=_f[1].torifuda10_ctr; i=-1;while(++i<j){l=0; if((k=_f[1].torifuda10[i]) & 0x400){ l=1; blkf=1; }if(_f_h5_blinkTorifuda_flag[1]) l=0;_f_fuda_disp(k & 0xff, x, y, 0, 0, 270, 0, l);x-=40;if((i % 5)==4 && i<20){ y-=70; x=1050; }}}else {x=1140; y=105; j=_f[1].torifuda01_ctr; i=-1;while(++i<j){l=0; if((k=_f[1].torifuda01[i]) & 0x400){ l=1; blkf=1; }if(_f_h5_blinkTorifuda_flag[1]) l=0;_f_fuda_disp(k & 0xff, x, y, 0, 0, 270, 0, l);x-=25;if(i==9){ y-=70; x=1140; }}x=1050; y=250; j=_f[1].torifuda05_ctr; i=-1;while(++i<j){l=0; if((k=_f[1].torifuda05[i]) & 0x1400){ l=1; blkf=1; }if(k & 0x8000){ l=-1; }if(_f_h5_blinkTorifuda_flag[1]) l=0;_f_fuda_disp(k & 0xff, x, y, 0, 0, 270, 0, l);x-=40;if(i==4){ y-=70; x=1050; }}x=1050; y=400; j=_f[1].torifuda10_ctr; i=-1;while(++i<j){l=0; if((k=_f[1].torifuda10[i]) & 0x400){ l=1; blkf=1; }if(_f_h5_blinkTorifuda_flag[1]) l=0;_f_fuda_disp(k & 0xff, x, y, 0, 0, 270, 0, l);x-=40;if(i==4){ y-=70; x=1050; }}x=1050; y=480; j=_f[1].torifuda20_ctr; i=-1;while(++i<j){l=0; if((k=_f[1].torifuda20[i]) & 0x1400){ l=1; blkf=1; }if(k & 0x8000){ l=-1; }if(_f_h5_blinkTorifuda_flag[1]) l=0;_f_fuda_disp(k & 0xff, x, y, 0, 0, 270, 0, l);x-=40;}}if(_f_gamemode!=_F_GAMEMODE_600KEN){x=_f_getPoint_X88[1]; y=_f_getPoint_Y88[1];j=_f[1].torifuda01_ctr+  _f[1].torifuda05_ctr*5+  _f[1].torifuda10_ctr*10+  _f[1].torifuda20_ctr*20;e=_f_rightText('TORIFUDA_1-1', x, y, 192, 36, '#FFF', _f_to_wasuji(j)+'点');e.style.background='rgba(0,0,0,0.7)';if((j=_f[1].torifuda_dekiyaku)>0){if(_f_gamemode==_F_GAMEMODE_88){e=_f_rightText('TORIFUDA_1-1', x, y, 192, 36, '#FF0', _f_to_wasuji(Math.floor(j/12))+'貫');e.style.background='rgba(0,0,0,0.7)';}else if(_f_gamemode==_F_GAMEMODE_HANAAWASE){y-=36;e=_f_rightText('TORIFUDA_1-2', x, y, 192, 36, '#FF0', _f_to_wasuji(j)+'点');e.style.background='rgba(0,0,0,0.7)';}else if(_f_gamemode==_F_GAMEMODE_SUDAOSHI){y-=36;e=_f_rightText('TORIFUDA_1-2', x, y, 192, 36, '#FF0', _f_to_wasuji(Math.floor(j/12))+'貫');e.style.background='rgba(0,0,0,0.7)';}}}clearTimeout(_f_h5_blinkTorifuda[1]);if(blkf){if(!_f_h5_blinkTorifuda_flag[1]){_f_h5_blinkTorifuda_flag[1]=1;_f_h5_blinkTorifuda[1]=setTimeout("_f_torifuda_disp_main(1);", _f_h5_blinkTimeP);}else {_f_h5_blinkTorifuda_flag[1]=0;_f_h5_blinkTorifuda[1]=setTimeout("_f_torifuda_disp_main(1);", _f_h5_blinkTimeN);}}return;}}_f_score_X=new Array( 106, 838, 96 );_f_score_Y=new Array( 686, 560,  0 );function _f_textArea2(seki, x, y, w, h){var n='SCORE_'+seki, e, c;newTextArea(n, x, y, w, h, 29, '#000', '#FFF');e=document.getElementById(n);c='#000';if(_f_rule_sel['UI_cushion']=='') c='#888';e.style.border=c+' solid 1px';e.style.textAlign='right';e.style.fontFamily='serif';return(e);}function _f_score_disp(seki, col){var i, j, s, x, y, d, n, k, e;var pX=new Array(3), pY=new Array(3);if(_f_gamemode!=_F_GAMEMODE_KYOKABU && _f_gamemode!=_F_GAMEMODE_OICHOKABU && _f_gamemode!=_F_GAMEMODE_600KEN && _f_gamemode!=_F_GAMEMODE_HANAAWASE && _f_gamemode!=_F_GAMEMODE_88 && _f_gamemode!=_F_GAMEMODE_SUDAOSHI) return;var col2=col || '#fff';if(_f_players!=3) return;i=3; while(--i>=0){ pX[i]=_f_score_X[i]; pY[i]=_f_score_Y[i]; }if(_f_gamemode==_F_GAMEMODE_KYOKABU || _f_gamemode==_F_GAMEMODE_OICHOKABU){if(_f_oya==1){pX[0]=898; pY[0]=650;pX[1]=48; pY[1]=0;pX[2]=48; pY[2]=770;}else if(_f_oya==2){pX[0]=48; pY[0]=770;pX[1]=898; pY[1]=650;pX[2]=48; pY[2]=0;}else if(_f_oya==0){pX[0]=48; pY[0]=770;pX[1]=898; pY[2]=110;pX[2]=48; pY[1]=20;}}x=pX[seki]; y=pY[seki];_f_textArea2(seki, x, y, 270, 72);y+=3;n='SEKI'+seki;e=_f_leftText(n, x+6, y, 64, 36, '#FFF', _f[seki].oyako);e.style.background='transparent';n='SEKINAME'+seki;i='#fff'; if((_f_gamemode==_F_GAMEMODE_KYOKABU || _f_gamemode==_F_GAMEMODE_OICHOKABU) && seki==0) i='#ff0';e=_f_leftText(n, x+94, y, 174, 36, i, _f_seatName[seki]);i=_f_seatName[seki]; if(i.length>6){e.innerHTML=i.substring(0, 6);e.style.textAlign='right';}y+=32;j=_f[seki].score; s='';if(j<0){j=-j;n='CURRENT_SCORE_SIGN'+seki;e=_f_leftText(n, x+6, y, 32, 36, '#fff', '▲');e.background='transparent';}x+=32;if(_f_gamemode==_F_GAMEMODE_88 || _f_gamemode==_F_GAMEMODE_SUDAOSHI){k=Math.floor(j/12); j=j-k*12;n='CURRENT_SCORE_KAN'+seki;e=_f_rightText(n, x-32, y, 164, 36, '#fff', _f_to_wasuji(k)+'<span style="color: #ff0; ">貫</span>');e.style.background='transparent';e.style.paddingRight='2px';if(!j) return;x+=132;n='CURRENT_SCORE_TEN'+seki;if(j==0) j=''; else j=_f_to_wasuji(j)+'<span style="color: #ff0; ">点</span>';e=_f_rightText(n, x, y, 100, 36, '#fff', j);e.style.background='transparent';e.style.paddingRight='2px';return;}var u='点';if(_f_gamemode==_F_GAMEMODE_600KEN){ j=Math.floor(j / 10); u='勝'; }n='CURRENT_SCORE_TEN'+seki;e=_f_rightText(n, x, y, 232, 36, '#fff', _f_to_wasuji(j)+'<span style="color: #ff0; ">'+u+'</span>');e.style.background='transparent';e.style.paddingRight='2px';}function _f_600ken_current_point_disp(seki){var x, y, i, c='#ffffff', e;if(_f_gamemode!=_F_GAMEMODE_600KEN) return;if(_f_600ken_victor==seki) c='#ffff00';x=1000; y=325;if(_f_players==2 && seki==0){ x=1000; y=520; }else if(_f_players==3){ x=_f_getPoint_X88[seki]; y=_f_getPoint_Y88[seki]; }e=_f_rightText('POINT-600KEN_'+seki, x, y, 192, 36, c, _f_to_wasuji(_f[seki].current_point_600ken)+'点');e.style.background='rgba(0,0,0,0.7)';e.style.paddingRight='4px';e.style.fontFamily='serif';}_f_kyokumei=new Array('松', '梅', '桜', '藤', '菖蒲', '牡丹', '萩', '芒', '菊', '紅葉', '柳', '桐');function _f_playfield(){var x, y, i, d, n, o, e;if(_f_gamemode==_F_GAMEMODE_KYOKABU || _f_gamemode==_F_GAMEMODE_OICHOKABU){i='おいちょかぶ'; j=-56;if(_f_gamemode==_F_GAMEMODE_KYOKABU){ i='京かぶ'; j=28; }n='GAMEMODE_NAME';newTextArea(n, 1068+j, 860, 116-j, 36, 24, 'rgba(0,0,0,0.8)', '#FFF');e=document.getElementById(n);e.style.textAlign='center';e.style.paddingTop='3px';e.style.paddingLeft='2px';e.style.color='#fff';e.style.fontFamily='serif';e.style.fontWeight='bold';e.style.lineHeight='1em';e.style.verticalAlign='text-top';e.innerHTML=i;n='GAME_STATUS_ALL1';y=330;newTextArea(n, 40, y, 240, 217, 29, 'transparent', '#FFF');e=document.getElementById(n);if((i=Math.floor(3*rRatio))<1) i=1;e.style.border='solid '+i+'px #F00';n='GAME_STATUS_ALL';y=336;newTextArea(n, 44, y, 236, 209, 29, '#000', '#FFF');x=48; y+=8;n='KYOKUSU_STATUS';e=_f_leftText(n, x, y, 224, 200, '#FFF', _f_kyokumei[_f_kyokusu_ctr]+'の局');e.style.background='transparent';y+=40;if(_f_oichokabu_betted_total>0){n='OICHO_BETTED_H';e=_f_leftText(n, x, y, 224, 36, '#0FF', '賭数');e.style.background='transparent';n='OICHO_BETTED_NUM';e=_f_rightText(n, x+64, y, 224-64, 36, '#FFF', _f_to_wasuji(_f_oichokabu_betted_total)+'<span style="color: #ff0; ">点</span>');e.style.background='transparent';}y+=40; i='胴前'; if(_f_oichokabu_limit<_f_oichokabu_domae) i='あと';n='OICHO_BET_LIMIT_H';e=_f_leftText(n, x, y, 224, 36, '#0FF', i);e.style.background='transparent';n='OICHO_BET_LIMIT_NUM';e=_f_rightText(n, x+64, y, 224-64, 36, '#FFF', _f_to_wasuji(_f_oichokabu_limit)+'<span style="color: #ff0; ">点</span>');e.style.background='transparent';y+=40;n='OICHO_OYA_GOT_H';e=_f_leftText(n, x, y, 224, 36, '#0FF', '親の得点');e.style.background='transparent';y+=40; i=_f_oichokabu_oyaTotalPoint;if(i<0){i=-i;n='OICHO_OYA_GOT_SIGN';e=_f_leftText(n, x, y, 32, 36, '#FFF', '▲');e.style.background='transparent';}n='OICHO_OYA_GOT_NUM';e=_f_rightText(n, x+64, y, 224-64, 36, '#FFF', _f_to_wasuji(i)+'<span style="color: #ff0; ">点</span>');e.style.background='transparent';i=3; while(--i>=0) _f_score_disp(i, '#fff');return;}if(_f_players==3){x=8; y=780;if(_f_gamemode!=_F_GAMEMODE_600KEN){n='GAME_STATUS_AREA';newTextArea(n, x, y, 160, 72, 29, '#000', '#FFF');y+=4;n='KYOKUSU_STATUS';if(_f_kyokusu_ctr>11) i='越年'; else i=_f_kyokumei[_f_kyokusu_ctr];e=_f_leftText(n, x+2, y, 136, 36, '#FFF', i+'の局');e.style.background='transparent';y+=32;}if(_f_gamemode==_F_GAMEMODE_88){i='<span style="color: #fff">小場</span>';if(_f_88_ba_rate==2) i='<span style="color: #ff0; ">大場</span>';if(_f_88_ba_rate==4) i='<span style="color: #ff0; font-weight: bold; ">絶場</span>';if(_f_88_ba_rate_next<0) i+='<span style="color: #f00; ">(二代)</span>';n='BA_RATE_STATUS_88';e=_f_leftText(n, x+2, y, 136, 36, '#FFF', i);e.style.background='transparent';y+=40;i='はちはち';}else if(_f_gamemode==_F_GAMEMODE_HANAAWASE) i='花合わせ';else if(_f_gamemode==_F_GAMEMODE_SUDAOSHI) i='すだおし';else if(_f_gamemode==_F_GAMEMODE_600KEN) i='三人六百間';n='GAMEMODE_NAME';newTextArea(n, 1038, 860, 160, 36, 24, 'rgba(0,0,0,0.8)', '#FFF');e=document.getElementById(n);e.style.textAlign='center';e.style.paddingLeft='2px';e.style.paddingTop='3px';e.style.color='#fff';e.style.fontFamily='serif';e.style.fontWeight='bold';e.style.lineHeight='1em';e.style.verticalAlign='text-top';e.innerHTML=i;i=3; while(--i>=0) _f_score_disp(i, '#fff');return;}if(_f_players==2){var xx=960, w=239;if(_f_gamemode==_F_GAMEMODE_88){ xx=894; w=303; }n='GAME_STATUS_ALL1';newTextArea(n, xx, 374, w+1, 132, 29, 'transparent', '#FFF');e=document.getElementById(n);if((i=Math.floor(3*rRatio))<1) i=1;e.style.border='solid '+i+'px #F00';n='GAME_STATUS_ALL';newTextArea(n, xx+6, 380, w-5, 126, 29, '#000', '#FFF');i='二人はちはち'; j=-56;if(_f_gamemode==_F_GAMEMODE_KOIKOI){ i='こいこい'; j=0; }else if(_f_gamemode==_F_GAMEMODE_MUSHI){ i='むし'; j=56; }else if(_f_gamemode==_F_GAMEMODE_600KEN){ i='六百間'; j=28; }else if(_f_gamemode==_F_GAMEMODE_HACHI){ i='はち'; j=56; }n='GAMEMODE_NAME';newTextArea(n, 1038, 860, 160, 36, 24, 'rgba(0,0,0,0.8)', '#FFF');e=document.getElementById(n);e.style.textAlign='center';e.style.paddingLeft='2px';e.style.paddingTop='3px';e.style.color='#fff';e.style.fontFamily='serif';e.style.fontWeight='bold';e.style.lineHeight='1em';e.style.verticalAlign='text-top';e.innerHTML=i;x=xx+8; y=384;if(_f_gamemode!=_F_GAMEMODE_600KEN && _f_gamemode!=_F_GAMEMODE_HACHI){if(_f_kyokusu_ctr>11) i='越年'; else i=_f_kyokumei[_f_kyokusu_ctr];n='KYOKUSU_STATUS';e=_f_leftText(n, x, y, w-15, 116, '#FFF', i+'の局');e.style.background='transparent';if(_f_gamemode==_F_GAMEMODE_88){i='<span style="color: #fff">小場</span>';if(_f_88_ba_rate==2) i='<span style="color: #ff0; ">大場</span>';if(_f_88_ba_rate==4) i='<span style="color: #ff0; font-weight: bold; ">絶場</span>';if(_f_88_ba_rate_next<0) i+='<span style="color: #f00; ">(二代)</span>';n='BA_RATE_STATUS_88';e=_f_leftText(n, x+128, y, 136, 36, '#FFF', i);e.style.background='transparent';}y+=48;var u='点'; if(_f_gamemode==_F_GAMEMODE_KOIKOI) u='文';if(_f_gamemode==_F_GAMEMODE_600KEN) u='勝';i='　';if(_f_oya==0) i='親';if(_f_oya==1) i='子';n='PLAYERS_SEAT_STATUS';e=_f_leftText(n, x, y, 32, 36, '#0FF', i);e.style.background='transparent';y+=38; i=_f[0].score;if(_f_gamemode==_F_GAMEMODE_600KEN){ i=i / 10; }if(i<0){if(_f_gamemode==_F_GAMEMODE_600KEN){ u='敗'; }else {n='PLAYERS_SCORE_SIGN';e=_f_leftText(n, x, y, 32, 36, '#FFF', '▲');e.style.background='transparent';}i=-i;}if(_f_gamemode==_F_GAMEMODE_88){j=Math.floor(i / 12); i=i-(j*12);if(j!=0 || _f[0].score==0){n='PLAYERS_SCORE_KAN';e=_f_rightText(n, x+32, y, 160, 34, '#FFF', _f_to_wasuji(j)+'<span style="color: #ff0; ">貫</span>');e.style.background='transparent';}if(i>0){n='PLAYERS_SCORE_TEN';e=_f_rightText(n, x+192, y, 96, 34, '#FFF', _f_to_wasuji(i)+'<span style="color: #ff0; ">点</span>');e.style.background='transparent';}return;}n='PLAYERS_SCORE_TEN';e=_f_rightText(n, x, y, 224, 34, '#FFF', _f_to_wasuji(i)+'<span style="color: #ff0; ">'+u+'</span>');e.style.background='transparent';}else {x=xx+8; y+=2;i=Math.floor(_f[1].score / 10);n='CPU_WINS_CTR';e=_f_rightText(n, x, y, 224, 34, '#FFF', _f_to_wasuji(i)+'<span style="color: #ff0; ">勝</span>');e.style.background='transparent';if(_f_oya==1){n='CPU_OYA_STATUS';e=_f_leftText(n, x, y, 32, 36, '#0FF', '親');e.style.background='transparent';}y+=40; x=xx+8;if(_f_gamemode==_F_GAMEMODE_HACHI){if(_f_8_prev_winner>-1){n='PREVIOUS_WINNER_8-H';e=_f_leftText(n, x, y, 224, 34, '#FF0', '前局の上り：');e.style.background='transparent';x+=158; i='CPU';if(_f_8_prev_winner==0) i='貴方';n='PREVIOUS_WINNER_8';e=_f_rightText(n, x, y, 64, 34, '#FFF', i);e.style.background='transparent';}}x=xx+8; y+=40;i=Math.floor(_f[0].score / 10);x=xx+8;i=Math.floor(_f[0].score / 10);n='PLAYER_WINS_CTR';e=_f_rightText(n, x, y, 224, 34, '#FFF', _f_to_wasuji(i)+'<span style="color: #ff0; ">勝</span>');e.style.background='transparent';if(_f_oya==0){n='PLAYER_OYA_STATUS';e=_f_leftText(n, x, y, 32, 36, '#0FF', '親');e.style.background='transparent';}}return;}_f_yamafuda_disp();}
