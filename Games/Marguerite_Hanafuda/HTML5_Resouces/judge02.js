function _f_nagare_judge(){var i=0, j, k, l, pt, ks, yt, mx=-1, rate, total, winner=_f_oya;_f_init_balance();_f_yakunagare_flag=0;if(_f_gamemode==_F_GAMEMODE_88){rate=1;if(_f_88_ba_rate>1) rate=2;if(_f_88_ba_rate>2) rate=4;if(_f_koikoi_flag>-1) _f_88_payback();i=_f_players; while(--i>=0){pt=0;pt=_f[i].torifuda01_ctr+   _f[i].torifuda05_ctr*5+   _f[i].torifuda10_ctr*10+   _f[i].torifuda20_ctr*20;if(mx<pt) mx=pt;_f[i].torifuda_total=pt;_f[i].balance_torifuda=pt-88;if(_f_players==2 && !_f_rule_sel['HH_288']) continue;if((j=pt-168)>=0){j+=10; j*=12;_f[i].yaku_name[_f[i].yaku_name_ctr]='二八';_f[i].yaku_point[_f[i].yaku_name_ctr++]=j;_f[i].yaku_point_total+=j;_f_yakunagare_flag=1;k=_f_players; j*=rate;while(--k>=0){if(i==k) continue;_f[k].balance-=j;}_f[i].balance+=j*(_f_players-1);_f[i].torifuda_dekiyaku=j;j=_f[i].torifuda01_ctr; while(--j>=0) _f[i].torifuda01[j] |= 0x400;j=_f[i].torifuda05_ctr; while(--j>=0) _f[i].torifuda05[j] |= 0x400;j=_f[i].torifuda10_ctr; while(--j>=0) _f[i].torifuda10[j] |= 0x400;j=_f[i].torifuda20_ctr; while(--j>=0) _f[i].torifuda20[j] |= 0x400;winner=i;}ks=_f[i].torifuda01_ctr;j=_f[i].torifuda05_ctr; while(--j>=0){if((_f[i].torifuda05[j] & 0xf0)==0xb0) ++ks;}j=_f[i].torifuda10_ctr; while(--j>=0){if((_f[i].torifuda10[j] & 0xf0)==0xb0) ++ks;}j=_f[i].torifuda20_ctr; while(--j>=0){if((_f[i].torifuda20[j] & 0xf0)==0xb0) ++ks;}if((j=ks-16)>=0){j <<= 1; j+=12; j*=12;_f[i].yaku_name[_f[i].yaku_name_ctr]='素十六';_f[i].yaku_point[_f[i].yaku_name_ctr++]=j;_f[i].yaku_point_total+=j;_f_yakunagare_flag=1;k=_f_players; j*=rate;while(--k>=0){if(i==k) continue;_f[k].balance-=j;}_f[i].balance+=j*(_f_players-1);_f[i].torifuda_dekiyaku=j;j=_f[i].torifuda01_ctr; while(--j>=0) _f[i].torifuda01[j] |= 0x400;j=_f[i].torifuda05_ctr; while(--j>=0){ if((_f[i].torifuda05[j] & 0xf0)==0xb0) _f[i].torifuda05[j] |= 0x400; }j=_f[i].torifuda10_ctr; while(--j>=0){ if((_f[i].torifuda10[j] & 0xf0)==0xb0) _f[i].torifuda10[j] |= 0x400; }j=_f[i].torifuda20_ctr; while(--j>=0){ if((_f[i].torifuda20[j] & 0xf0)==0xb0) _f[i].torifuda20[j] |= 0x400; }winner=i;}}if(_f_players!=2 || _f_rule_sel['HH_288']){if(mx==88 && (_f_players==3 || (_f[0].torifuda_total==_f[1].torifuda_total && _f_players==2))){_f[_f_oya].yaku_name[_f[_f_oya].yaku_name_ctr]='総八';_f[_f_oya].yaku_point[_f[_f_oya].yaku_name_ctr++]=120;_f[_f_oya].yaku_point_total+=120;_f_yakunagare_flag=1;k=_f_players; j=120*rate;while(--k>=0){if(_f_oya==k) continue;_f[k].balance-=j;}_f[_f_oya].balance+=j*(_f_players-1);_f[_f_oya].torifuda_dekiyaku=j;winner=_f_oya;}}i=_f_players;if(_f_yakunagare_flag){_f_88_yaku_flag=1;i=_f_players; while(--i>=0){total=0;_f[i].torifuda_total=0;_f[i].balance_torifuda=0;yt=0;if(_f[i].shiso_flag){if(!yt){_f[i].payback_name[_f[i].payback_name_ctr]='手役吹消し';_f[i].payback_point[_f[i].payback_name_ctr++]=0;yt=1;}_f[i].payback_name[_f[i].payback_name_ctr]='四三';_f[i].payback_point[_f[i].payback_name_ctr++]=-240;_f[i].payback_point_total-=240;total+=240;}if(_f[i].ichinishi_flag){if(!yt){_f[i].payback_name[_f[i].payback_name_ctr]='手役吹消し';_f[i].payback_point[_f[i].payback_name_ctr++]=0;yt=1;}_f[i].payback_name[_f[i].payback_name_ctr]='一二四';_f[i].payback_point[_f[i].payback_name_ctr++]=-96;_f[i].payback_point_total-=96;total+=96;}if(_f[i].haneken_flag){if(!yt){_f[i].payback_name[_f[i].payback_name_ctr]='手役吹消し';_f[i].payback_point[_f[i].payback_name_ctr++]=0;yt=1;}_f[i].payback_name[_f[i].payback_name_ctr]='はねけん';_f[i].payback_point[_f[i].payback_name_ctr++]=-84;_f[i].payback_point_total-=84;total+=84;}if(_f[i].teshi_flag){if(!yt){_f[i].payback_name[_f[i].payback_name_ctr]='手役吹消し';_f[i].payback_point[_f[i].payback_name_ctr++]=0;yt=1;}_f[i].payback_name[_f[i].payback_name_ctr]='手四';_f[i].payback_point[_f[i].payback_name_ctr++]=-72;_f[i].payback_point_total-=72;total+=72;}if(_f[i].kuttsuki_flag){if(!yt){_f[i].payback_name[_f[i].payback_name_ctr]='手役吹消し';_f[i].payback_point[_f[i].payback_name_ctr++]=0;yt=1;}_f[i].payback_name[_f[i].payback_name_ctr]='喰付';_f[i].payback_point[_f[i].payback_name_ctr++]=-48;_f[i].payback_point_total-=48;total+=48;}if(_f[i].tatesambon_flag>1){if(!yt){_f[i].payback_name[_f[i].payback_name_ctr]='手役吹消し';_f[i].payback_point[_f[i].payback_name_ctr++]=0;yt=1;}_f[i].payback_name[_f[i].payback_name_ctr]='二立三本';_f[i].payback_point[_f[i].payback_name_ctr++]=-96;_f[i].payback_point_total-=96;total+=96;}else if(_f[i].tatesambon_flag && _f[i].sambon_flag){if(!yt){_f[i].payback_name[_f[i].payback_name_ctr]='手役吹消し';_f[i].payback_point[_f[i].payback_name_ctr++]=0;yt=1;}_f[i].payback_name[_f[i].payback_name_ctr]='三本立三本';_f[i].payback_point[_f[i].payback_name_ctr++]=-84;_f[i].payback_point_total-=84;total+=84;}else if(_f[i].sambon_flag>1){if(!yt){_f[i].payback_name[_f[i].payback_name_ctr]='手役吹消し';_f[i].payback_point[_f[i].payback_name_ctr++]=0;yt=1;}_f[i].payback_name[_f[i].payback_name_ctr]='二三本';_f[i].payback_point[_f[i].payback_name_ctr++]=-72;_f[i].payback_point_total-=72;total+=72;}else if(_f[i].tatesambon_flag>0){if(!yt){_f[i].payback_name[_f[i].payback_name_ctr]='手役吹消し';_f[i].payback_point[_f[i].payback_name_ctr++]=0;yt=1;}_f[i].payback_name[_f[i].payback_name_ctr]='立三本';_f[i].payback_point[_f[i].payback_name_ctr++]=-36;_f[i].payback_point_total-=36;total+=36;}else if(_f[i].sambon_flag>0){if(!yt){_f[i].payback_name[_f[i].payback_name_ctr]='手役吹消し';_f[i].payback_point[_f[i].payback_name_ctr++]=0;yt=1;}_f[i].payback_name[_f[i].payback_name_ctr]='三本';_f[i].payback_point[_f[i].payback_name_ctr++]=-24;_f[i].payback_point_total-=24;total+=24;}if(_f[i].pikaichi_flag){if(!yt){_f[i].payback_name[_f[i].payback_name_ctr]='手役吹消し';_f[i].payback_point[_f[i].payback_name_ctr++]=0;yt=1;}_f[i].payback_name[_f[i].payback_name_ctr]='光一';_f[i].payback_point[_f[i].payback_name_ctr++]=-48;_f[i].payback_point_total-=48;total+=48;}if(_f[i].karasu_flag){if(!yt){_f[i].payback_name[_f[i].payback_name_ctr]='手役吹消し';_f[i].payback_point[_f[i].payback_name_ctr++]=0;yt=1;}_f[i].payback_name[_f[i].payback_name_ctr]='からす';_f[i].payback_point[_f[i].payback_name_ctr++]=-48;_f[i].payback_point_total-=48;total+=48;}if(_f[i].toichi_flag){if(!yt){_f[i].payback_name[_f[i].payback_name_ctr]='手役吹消し';_f[i].payback_point[_f[i].payback_name_ctr++]=0;yt=1;}_f[i].payback_name[_f[i].payback_name_ctr]='十一';_f[i].payback_point[_f[i].payback_name_ctr++]=-36;_f[i].payback_point_total-=36;total+=36;}if(_f[i].tan_ichi_flag){if(!yt){_f[i].payback_name[_f[i].payback_name_ctr]='手役吹消し';_f[i].payback_point[_f[i].payback_name_ctr++]=0;yt=1;}_f[i].payback_name[_f[i].payback_name_ctr]='短一';_f[i].payback_point[_f[i].payback_name_ctr++]=-36;_f[i].payback_point_total-=36;total+=36;}if(_f[i].aka_flag){if(!yt){_f[i].payback_name[_f[i].payback_name_ctr]='手役吹消し';_f[i].payback_point[_f[i].payback_name_ctr++]=0;yt=1;}_f[i].payback_name[_f[i].payback_name_ctr]='赤';_f[i].payback_point[_f[i].payback_name_ctr++]=-24;_f[i].payback_point_total-=24;total+=24;}if(total){j=3; total*=rate;while(--j>=0){if(j==i) continue;_f[j].balance_payback+=total;}_f[i].balance_payback-=total*(_f_players-1);}}}else {var pt=-300, ps=-1;j=_f_oya; while(--i>=0){if(pt<_f[j].balance_torifuda){winner=j; pt=_f[j].balance_torifuda;}if(++j>=_f_players) j=0;}i=_f_players; while(--i>=0){_f[i].balance_torifuda*=rate;if(_f[i].nukeyaku!='' && _f[i].torifuda_total>88){_f[i].yaku_name[_f[i].yaku_name_ctr]=_f[i].nukeyaku+'抜け';_f[i].yaku_point[_f[i].yaku_name_ctr++]=12;_f[i].yaku_point_total+=12;total+=12;j=_f_players; k=12*rate;while(--j>=0){if(j==i) continue;_f[j].balance-=k;}_f[i].balance+=k*(_f_players-1);_f_88_yaku_flag=2;}j=-1;while(++j<2){k=_f[i].sambon[j];if(k<1) continue;var l=0, m=_f[i].torifuda01_ctr;while(--m>=0){ if(((_f[i].torifuda01[m] >> 4) & 15)==k) ++l; }m=_f[i].torifuda05_ctr; while(--m>=0){ if(((_f[i].torifuda05[m] >> 4) & 15)==k) ++l; }m=_f[i].torifuda10_ctr; while(--m>=0){ if(((_f[i].torifuda10[m] >> 4) & 15)==k) ++l; }m=_f[i].torifuda20_ctr; while(--m>=0){ if(((_f[i].torifuda20[m] >> 4) & 15)==k) ++l; }if(l==4){_f[i].yaku_name[_f[i].yaku_name_ctr]='三本飛込';_f[i].yaku_point[_f[i].yaku_name_ctr++]=12;_f[i].yaku_point_total+=12;if(_f[i].sambon_hatto[j]>-1 && _f[i].sambon_hatto[j]!=i && _f_players>2){_f[_f[i].sambon_hatto[j]].balance-=24*rate;}else {m=_f_players; while(--m>=0){if(m==i) continue;_f[m].balance-=12*rate;}}_f[i].balance+=12*rate*(_f_players-1);_f_88_yaku_flag=2;}}}}if(_f_players==2){j=1; if(winner==1) j=0;i=_f[winner].torifuda_total-_f[j].torifuda_total;if(i>=50) i=60;else if(i>=40) i=48;else if(i>=30) i=36;_f[winner].balance_torifuda=i*rate;_f[j].balance_torifuda=-(i*rate);if(i==0 && !_f_yakunagare_flag) winner=-1;}i=_f_players;while(--i>=0){_f[i].balance_total=_f[i].balance_payback+_f[i].balance+_f[i].balance_torifuda;_f[i].score_after_balance=_f[i].score+_f[i].balance_total;}_f_result_after_balance();return(winner);}if(_f_gamemode==_F_GAMEMODE_HANAAWASE){i=3; while(--i>=0){total=_f[i].torifuda01_ctr+_f[i].torifuda05_ctr*5+_f[i].torifuda10_ctr*10+_f[i].torifuda20_ctr*20;if(total>0 && total<=20 && _f_rule_sel['HA_fuke']<2){_f_init_balance();_f[i].yaku_name[_f[i].yaku_name_ctr]='フケ';_f[i].yaku_point[_f[i].yaku_name_ctr++]=-1;j=_f[i].torifuda01_ctr; while(--j>=0) _f[i].torifuda01[j] |= 0x400;j=_f[i].torifuda05_ctr; while(--j>=0) _f[i].torifuda05[j] |= 0x400;j=_f[i].torifuda10_ctr; while(--j>=0) _f[i].torifuda10[j] |= 0x400;j=_f[i].torifuda20_ctr; while(--j>=0) _f[i].torifuda20[j] |= 0x400;if(!_f_rule_sel['HA_fuke']){j=3; while(--j>=0){_f[i].torifuda_total=0;_f[j].balance=_f[j].balance_torifuda=_f[j].balance_payback=0;}_f_result_after_balance();return(-1);}_f[i].yaku_point[_f[i].yaku_name_ctr-1]=60;_f[i].yaku_point_total+=60;j=3; while(--j>=0){_f[i].torifuda_total=0;_f[j].balance=_f[j].balance_torifuda=_f[j].balance_payback=0;if(i==j) continue;_f[j].balance-=60;}_f[i].torifuda_dekiyaku=60;_f[i].balance+=120;j=3; while(--j>=0){_f[j].balance_total=_f[j].balance;_f[j].score_after_balance=_f[j].score+_f[j].balance_total;}_f_result_after_balance();return(i);}_f[i].torifuda_total=total;_f[i].balance_torifuda=total-88;k=0;j=_f[i].torifuda01_ctr; while(--j>=0){ if((_f[i].torifuda01[j] & 0xf0)==0xB0) ++k; }j=_f[i].torifuda05_ctr; while(--j>=0){ if((_f[i].torifuda05[j] & 0xf0)==0xB0) ++k; }j=_f[i].torifuda10_ctr; while(--j>=0){ if((_f[i].torifuda10[j] & 0xf0)==0xB0) ++k; }j=_f[i].torifuda20_ctr; while(--j>=0){ if((_f[i].torifuda20[j] & 0xf0)==0xB0) ++k; }if(k==4 && _f_rule_sel['HA_ameshima']==1){j=_f[i].torifuda01_ctr; while(--j>=0){ if((_f[i].torifuda01[j] & 0xf0)==0xB0) _f[i].torifuda01[j] |= 0x400; }j=_f[i].torifuda05_ctr; while(--j>=0){ if((_f[i].torifuda05[j] & 0xf0)==0xB0) _f[i].torifuda05[j] |= 0x400; }j=_f[i].torifuda10_ctr; while(--j>=0){ if((_f[i].torifuda10[j] & 0xf0)==0xB0) _f[i].torifuda10[j] |= 0x400; }j=_f[i].torifuda20_ctr; while(--j>=0){ if((_f[i].torifuda20[j] & 0xf0)==0xB0) _f[i].torifuda20[j] |= 0x400; }_f[i].yaku_name[_f[i].yaku_name_ctr]='雨シマ';_f[i].yaku_point[_f[i].yaku_name_ctr++]=-2;_f_yakunagare_flag=1;}}i=3; if(_f_yakunagare_flag) i=0;while(--i>=0){total=0;var _45ko=0;if(_f[i].torifuda20_ctr==5){_45ko=1;_f[i].yaku_name[_f[i].yaku_name_ctr]='五光';_f[i].yaku_point[_f[i].yaku_name_ctr++]=200;_f[i].yaku_point_total+=200;total+=200;j=5; while(--j>=0) _f[i].torifuda20[j] |= 0x400;}else if(_f[i].torifuda20_ctr==4){j=4; while(--j>=0){ if((_f[i].torifuda20[j] & 0xf0)==0xb0) break; }if(j<0){_45ko=1;_f[i].yaku_name[_f[i].yaku_name_ctr]='四光';_f[i].yaku_point[_f[i].yaku_name_ctr++]=60;_f[i].yaku_point_total+=60;total+=60;j=4; while(--j>=0) _f[i].torifuda20[j] |= 0x400;}}if((j=_f[i].torifuda05_ctr)>5){k=0; while(--j>=0){ if((_f[i].torifuda05[j] & 0xf0)!=0xb0) ++k; }if(k>=7 && _f_rule_sel['HA_67tan']!=2){_f[i].yaku_name[_f[i].yaku_name_ctr]='七短';_f[i].yaku_point[_f[i].yaku_name_ctr++]=40;_f[i].yaku_point_total+=40;total+=40;j=_f[i].torifuda05_ctr;while(--j>=0){ if((_f[i].torifuda05[j] & 0xf0)!=0xb0) _f[i].torifuda05[j] |= 0x400; }}else if(k>=6 && !_f_rule_sel['HA_67tan']){_f[i].yaku_name[_f[i].yaku_name_ctr]='六短';_f[i].yaku_point[_f[i].yaku_name_ctr++]=30;_f[i].yaku_point_total+=30;total+=30;j=_f[i].torifuda05_ctr;while(--j>=0){ if((_f[i].torifuda05[j] & 0xf0)!=0xb0) _f[i].torifuda05[j] |= 0x400; }}}if((j=_f[i].torifuda05_ctr)>2){pt=3; while(--j>=0){ if((k=_f[i].torifuda05[j] & 0xf0)==0x10 || k==0x20 || k==0x30) --pt; }if(pt<1){_f[i].yaku_name[_f[i].yaku_name_ctr]='赤短';_f[i].yaku_point[_f[i].yaku_name_ctr++]=40;_f[i].yaku_point_total+=40;total+=40;j=_f[i].torifuda05_ctr;while(--j>=0){ if((k=_f[i].torifuda05[j] & 0xf0)==0x10 || k==0x20 || k==0x30) _f[i].torifuda05[j] |= 0x400; }}pt=3; j=_f[i].torifuda05_ctr; while(--j>=0){ if((k=_f[i].torifuda05[j] & 0xf0)==0x60 || k==0x90 || k==0xA0) --pt; }if(pt<1){_f[i].yaku_name[_f[i].yaku_name_ctr]='青短';_f[i].yaku_point[_f[i].yaku_name_ctr++]=40;_f[i].yaku_point_total+=40;total+=40;j=_f[i].torifuda05_ctr;while(--j>=0){ if((k=_f[i].torifuda05[j] & 0xf0)==0x60 || k==0x90 || k==0xA0) _f[i].torifuda05[j] |= 0x400; }}pt=3; j=_f[i].torifuda05_ctr; while(--j>=0){ if((k=_f[i].torifuda05[j] & 0xf0)==0x40 || k==0x50 || k==0x70) --pt; }if(pt<1 && !_f_rule_sel['HA_kusa']){_f[i].yaku_name[_f[i].yaku_name_ctr]='草短';_f[i].yaku_point[_f[i].yaku_name_ctr++]=20;_f[i].yaku_point_total+=20;total+=20;j=_f[i].torifuda05_ctr;while(--j>=0){ if((k=_f[i].torifuda05[j] & 0xf0)==0x40 || k==0x50 || k==0x70) _f[i].torifuda05[j] |= 0x400; }}}j=_f[i].torifuda10_ctr; while(--j>=0){ if((_f[i].torifuda10[j] & 0xf0)==0x90) break; }if(j>-1){var s=0, t=0;j=_f[i].torifuda20_ctr;while(--j>=0){if((k=_f[i].torifuda20[j] & 0xf0)==0x30) ++s;if(k==0x80) ++t;}if(s && t && !_f_rule_sel['HA_nomi']){_f[i].yaku_name[_f[i].yaku_name_ctr]='呑み';_f[i].yaku_point[_f[i].yaku_name_ctr++]=30;_f[i].yaku_point_total+=30;total+=30;j=_f[i].torifuda10_ctr;while(--j>=0){ if((_f[i].torifuda10[j] & 0xf0)==0x90) _f[i].torifuda10[j] |= 0x400; }j=_f[i].torifuda20_ctr;while(--j>=0){ if((k=_f[i].torifuda20[j] & 0xf0)==0x30 || k==0x80) _f[i].torifuda20[j] |= 0x400; }}else if(s && !_f_rule_sel['HA_nomi']){_f[i].yaku_name[_f[i].yaku_name_ctr]='花見酒';_f[i].yaku_point[_f[i].yaku_name_ctr++]=20;_f[i].yaku_point_total+=20;total+=20;j=_f[i].torifuda10_ctr;while(--j>=0){ if((_f[i].torifuda10[j] & 0xf0)==0x90) _f[i].torifuda10[j] |= 0x400; }j=_f[i].torifuda20_ctr;while(--j>=0){ if((_f[i].torifuda20[j] & 0xf0)==0x30) _f[i].torifuda20[j] |= 0x400; }}else if(t && !_f_rule_sel['HA_nomi']){_f[i].yaku_name[_f[i].yaku_name_ctr]='月見酒';_f[i].yaku_point[_f[i].yaku_name_ctr++]=20;_f[i].yaku_point_total+=20;total+=20;j=_f[i].torifuda10_ctr;while(--j>=0){ if((_f[i].torifuda10[j] & 0xf0)==0x90) _f[i].torifuda10[j] |= 0x400; }j=_f[i].torifuda20_ctr;while(--j>=0){ if((_f[i].torifuda20[j] & 0xf0)==0x80) _f[i].torifuda20[j] |= 0x400; }}}var os=0, mk=0, sg=0, is=0;j=_f[i].torifuda20_ctr; while(--j>=0){if((k=_f[i].torifuda20[j] & 0xf0)==0x10 || k==0x80 || k==0xc0) ++mk;if(k==0x10 || k==0x30) ++os;if(k==0x30) ++sg;}j=_f[i].torifuda10_ctr; while(--j>=0){if((k=_f[i].torifuda10[j] & 0xf0)==0x60 || k==0x70 || k==0xA0) ++is;if(k==0x20) ++os;if(k==0x70 || k==0x50) ++sg;}if(os==3 && !_f_rule_sel['HA_omotesugawara']){_f[i].yaku_name[_f[i].yaku_name_ctr]='表菅原';_f[i].yaku_point[_f[i].yaku_name_ctr++]=30;_f[i].yaku_point_total+=30;total+=30;j=_f[i].torifuda10_ctr;while(--j>=0){ if((_f[i].torifuda10[j] & 0xf0)==0x20) _f[i].torifuda10[j] |= 0x400; }j=_f[i].torifuda20_ctr;while(--j>=0){ if((k=_f[i].torifuda20[j] & 0xf0)==0x10 || k==0x30) _f[i].torifuda20[j] |= 0x400; }}if(mk==3 && !_f_rule_sel['HA_makkiribozu'] && !_45ko){_f[i].yaku_name[_f[i].yaku_name_ctr]='松桐坊主';_f[i].yaku_point[_f[i].yaku_name_ctr++]=20;_f[i].yaku_point_total+=20;total+=20;j=_f[i].torifuda20_ctr;while(--j>=0){ if((k=_f[i].torifuda20[j] & 0xf0)==0x10 || k==0x80 || k==0xC0) _f[i].torifuda20[j] |= 0x400; }}if(sg==3 && !_f_rule_sel['HA_shichigosan']){_f[i].yaku_name[_f[i].yaku_name_ctr]='七五三';_f[i].yaku_point[_f[i].yaku_name_ctr++]=20;_f[i].yaku_point_total+=20;total+=20;j=_f[i].torifuda20_ctr;while(--j>=0){ if((_f[i].torifuda20[j] & 0xf0)==0x30) _f[i].torifuda20[j] |= 0x400; }j=_f[i].torifuda10_ctr;while(--j>=0){ if((k=_f[i].torifuda10[j] & 0xf0)==0x50 || k==0x70) _f[i].torifuda10[j] |= 0x400; }}if(is==3 && !_f_rule_sel['HA_inoshikacho']){_f[i].yaku_name[_f[i].yaku_name_ctr]='猪鹿蝶';_f[i].yaku_point[_f[i].yaku_name_ctr++]=20;_f[i].yaku_point_total+=20;total+=20;j=_f[i].torifuda10_ctr;while(--j>=0){ if((k=_f[i].torifuda10[j] & 0xf0)==0x60 || k==0x70 || k==0xA0) _f[i].torifuda10[j] |= 0x400; }}j=13; while(--j>0) _f_month[j]=0;j=_f[i].torifuda01_ctr; while(--j>=0) _f_month[(_f[i].torifuda01[j] >> 4) & 15]++;j=_f[i].torifuda05_ctr; while(--j>=0) _f_month[(_f[i].torifuda05[j] >> 4) & 15]++;j=_f[i].torifuda10_ctr; while(--j>=0) _f_month[(_f[i].torifuda10[j] >> 4) & 15]++;j=_f[i].torifuda20_ctr; while(--j>=0) _f_month[(_f[i].torifuda20[j] >> 4) & 15]++;if(_f_month[4]==4 && !_f_rule_sel['HA_shima']){_f[i].yaku_name[_f[i].yaku_name_ctr]='藤シマ';_f[i].yaku_point[_f[i].yaku_name_ctr++]=20;_f[i].yaku_point_total+=20;total+=20;j=_f[i].torifuda01_ctr; while(--j>=0){ if((_f[i].torifuda01[j] & 0xf0)==0x40) _f[i].torifuda01[j] |= 0x400; }j=_f[i].torifuda05_ctr; while(--j>=0){ if((_f[i].torifuda05[j] & 0xf0)==0x40) _f[i].torifuda05[j] |= 0x400; }j=_f[i].torifuda10_ctr; while(--j>=0){ if((_f[i].torifuda10[j] & 0xf0)==0x40) _f[i].torifuda10[j] |= 0x400; }}if(_f_month[12]==4 && !_f_rule_sel['HA_shima']){_f[i].yaku_name[_f[i].yaku_name_ctr]='桐シマ';_f[i].yaku_point[_f[i].yaku_name_ctr++]=20;_f[i].yaku_point_total+=20;total+=20;j=_f[i].torifuda01_ctr; while(--j>=0){ if((_f[i].torifuda01[j] & 0xf0)==0xC0) _f[i].torifuda01[j] |= 0x400; }j=_f[i].torifuda20_ctr; while(--j>=0){ if((_f[i].torifuda20[j] & 0xf0)==0xC0) _f[i].torifuda20[j] |= 0x400; }}if(_f_month[11]==4 && !_f_rule_sel['HA_ameshima']){_f[i].yaku_name[_f[i].yaku_name_ctr]='雨シマ';_f[i].yaku_point[_f[i].yaku_name_ctr++]=20;_f[i].yaku_point_total+=20;total+=20;j=_f[i].torifuda01_ctr; while(--j>=0){ if((_f[i].torifuda01[j] & 0xf0)==0xB0) _f[i].torifuda01[j] |= 0x400; }j=_f[i].torifuda05_ctr; while(--j>=0){ if((_f[i].torifuda05[j] & 0xf0)==0xB0) _f[i].torifuda05[j] |= 0x400; }j=_f[i].torifuda10_ctr; while(--j>=0){ if((_f[i].torifuda10[j] & 0xf0)==0xB0) _f[i].torifuda10[j] |= 0x400; }j=_f[i].torifuda20_ctr; while(--j>=0){ if((_f[i].torifuda20[j] & 0xf0)==0xB0) _f[i].torifuda20[j] |= 0x400; }}j=3; while(--j>=0){if(j==i) continue;_f[j].balance-=total;}_f[i].balance+=total*2;_f[i].torifuda_dekiyaku=total;}i=k=_f_oya; j=-32768;l=3; while(--l>=0){_f[i].balance_payback=0;_f[i].balance_total=_f[i].balance_torifuda+_f[i].balance;_f[i].score_after_balance=_f[i].score+_f[i].balance_total;if(j<_f[i].balance_total){ j=_f[i].balance_total; k=i; }if(++i>2) i=0;}_f_result_after_balance();return(k);}if(_f_gamemode==_F_GAMEMODE_KOIKOI){if(_f_koikoi_flag>-1 && !_f_rule_sel['KK_koikoi_nagare']){_f_dekiyaku_judge(_f_koikoi_flag);return(_f_koikoi_flag);}if(!_f_rule_sel['KK_oyaken']){j=(_f_oya==0) ? 1:0;_f[j].tefuda_dekiyaku=0;_f[j].balance=-6;_f[j].balance_total=-6;_f[j].score_after_balance=_f[j].score-6;_f[_f_oya].yaku_name[_f[_f_oya].yaku_name_ctr]='親権';_f[_f_oya].yaku_point[_f[_f_oya].yaku_name_ctr++]=6;_f[_f_oya].yaku_point_total=6;_f[_f_oya].tefuda_dekiyaku=6;_f[_f_oya].balance=6;_f[_f_oya].balance_total=6;_f[_f_oya].score_after_balance=_f[_f_oya].score+6;_f_result_after_balance();return(_f_oya);}return(-1);}if(_f_gamemode==_F_GAMEMODE_MUSHI){i=2; while(--i>=0){total=_f[i].torifuda01_ctr+_f[i].torifuda05_ctr*5+_f[i].torifuda10_ctr*10+_f[i].torifuda20_ctr*20;_f[i].torifuda_total=total;total-=115;_f[i].balance_torifuda=total;total=0;if(_f[i].torifuda20_ctr==5){_f[i].yaku_name[_f[i].yaku_name_ctr]='五光';_f[i].yaku_point[_f[i].yaku_name_ctr++]=30;_f[i].yaku_point_total+=30;total+=30;j=5; while(--j>=0) _f[i].torifuda20[j] |= 0x400;}var os=0;j=_f[i].torifuda20_ctr; while(--j>=0){if((k=_f[i].torifuda20[j] & 0xf0)==0x10 || k==0x30) ++os;}j=_f[i].torifuda10_ctr; while(--j>=0){if((k=_f[i].torifuda10[j] & 0xf0)==0x20) ++os;}if(os==3){_f[i].yaku_name[_f[i].yaku_name_ctr]='三光';_f[i].yaku_point[_f[i].yaku_name_ctr++]=25;_f[i].yaku_point_total+=25;total+=25;j=_f[i].torifuda10_ctr;while(--j>=0){ if((_f[i].torifuda10[j] & 0xf0)==0x20) _f[i].torifuda10[j] |= 0x400; }j=_f[i].torifuda20_ctr;while(--j>=0){ if((k=_f[i].torifuda20[j] & 0xf0)==0x10 || k==0x30) _f[i].torifuda20[j] |= 0x400; }}j=13; while(--j>0) _f_month[j]=0;j=_f[i].torifuda01_ctr; while(--j>=0) _f_month[(_f[i].torifuda01[j] >> 4) & 15]++;j=_f[i].torifuda05_ctr; while(--j>=0) _f_month[(_f[i].torifuda05[j] >> 4) & 15]++;j=_f[i].torifuda10_ctr; while(--j>=0) _f_month[(_f[i].torifuda10[j] >> 4) & 15]++;j=_f[i].torifuda20_ctr; while(--j>=0) _f_month[(_f[i].torifuda20[j] >> 4) & 15]++;if(_f_month[4]==4){_f[i].yaku_name[_f[i].yaku_name_ctr]='藤シマ';_f[i].yaku_point[_f[i].yaku_name_ctr++]=10;_f[i].yaku_point_total+=10;total+=10;j=_f[i].torifuda01_ctr; while(--j>=0){ if((_f[i].torifuda01[j] & 0xf0)==0x40) _f[i].torifuda01[j] |= 0x400; }j=_f[i].torifuda05_ctr; while(--j>=0){ if((_f[i].torifuda05[j] & 0xf0)==0x40) _f[i].torifuda05[j] |= 0x400; }j=_f[i].torifuda10_ctr; while(--j>=0){ if((_f[i].torifuda10[j] & 0xf0)==0x40) _f[i].torifuda10[j] |= 0x400; }}if(_f_month[12]==4){_f[i].yaku_name[_f[i].yaku_name_ctr]='桐シマ';_f[i].yaku_point[_f[i].yaku_name_ctr++]=10;_f[i].yaku_point_total+=10;total+=10;j=_f[i].torifuda01_ctr; while(--j>=0){ if((_f[i].torifuda01[j] & 0xf0)==0xC0) _f[i].torifuda01[j] |= 0x400; }j=_f[i].torifuda20_ctr; while(--j>=0){ if((_f[i].torifuda20[j] & 0xf0)==0xC0) _f[i].torifuda20[j] |= 0x400; }}j=(i==0) ? 1:0;_f[j].balance-=total;_f[i].balance+=total;_f[i].torifuda_dekiyaku=total;}i=2; j=-256;while(--i>=0){_f[i].balance_payback=0;_f[i].balance_total=_f[i].balance_torifuda+_f[i].balance;_f[i].score_after_balance=_f[i].score+_f[i].balance_total;}_f_result_after_balance();if(_f[0].balance_total==_f[1].balance_total) return(-1);k=(_f[0].balance_total>_f[1].balance_total) ? 0 : 1;return(k);}if(_f_gamemode==_F_GAMEMODE_SUDAOSHI){i=_f_oya; k=0; do {total=_f[i].torifuda01_ctr+_f[i].torifuda05_ctr*5+_f[i].torifuda10_ctr*10;_f[i].torifuda_total=total;_f[i].balance_torifuda=total-100-k*10;var bz=yn=bz2=yn2=0, m;total=0;j=_f[i].torifuda05_ctr; while(--j>=0){if((m=_f[i].torifuda05[j] & 0xff)==0x82 || m==0x83) ++bz;if((m=_f[i].torifuda05[j] & 0xff)==0xb2 || m==0xb3) ++yn;}bz2=bz; yn2=yn;j=_f[i].torifuda10_ctr; while(--j>=0){if((m=_f[i].torifuda10[j] & 0xff)==0x80) ++bz2;if((m=_f[i].torifuda10[j] & 0xff)==0xb0) ++yn2;}j=_f[i].torifuda01_ctr; while(--j>=0){if((m=_f[i].torifuda01[j] & 0xff)==0xb1) ++yn2;}if(bz2==4){_f[i].yaku_name[_f[i].yaku_name_ctr]='坊主ゾロ';_f[i].yaku_point[_f[i].yaku_name_ctr++]=24;_f[i].yaku_point_total+=24;total+=24;j=_f[i].torifuda05_ctr; while(--j>=0){if((m=_f[i].torifuda05[j] & 0xff)==0x82 || m==0x83) _f[i].torifuda05[j] |= 0x400;}j=_f[i].torifuda10_ctr; while(--j>=0){if((m=_f[i].torifuda10[j] & 0xff)==0x80) _f[i].torifuda10[j] |= 0x400;}}else if(bz==2){_f[i].yaku_name[_f[i].yaku_name_ctr]='坊主被り';_f[i].yaku_point[_f[i].yaku_name_ctr++]=12;_f[i].yaku_point_total+=12;total+=12;j=_f[i].torifuda05_ctr; while(--j>=0){if((m=_f[i].torifuda05[j] & 0xff)==0x82 || m==0x83) _f[i].torifuda05[j] |= 0x400;}}if(k==2){if(yn2==4){_f[i].yaku_name[_f[i].yaku_name_ctr]='雨ゾロ';_f[i].yaku_point[_f[i].yaku_name_ctr++]=24;_f[i].yaku_point_total+=24;total+=24;j=_f[i].torifuda05_ctr; while(--j>=0){if((m=_f[i].torifuda05[j] & 0xff)==0xb2 || m==0xb3) _f[i].torifuda05[j] |= 0x400;}j=_f[i].torifuda10_ctr; while(--j>=0){if((m=_f[i].torifuda10[j] & 0xff)==0xb0) _f[i].torifuda10[j] |= 0x400;}j=_f[i].torifuda01_ctr; while(--j>=0){if((m=_f[i].torifuda01[j] & 0xff)==0xb1) _f[i].torifuda01[j] |= 0x400;}}else if(yn==2){_f[i].yaku_name[_f[i].yaku_name_ctr]='雨被り';_f[i].yaku_point[_f[i].yaku_name_ctr++]=12;_f[i].yaku_point_total+=12;total+=12;j=_f[i].torifuda05_ctr; while(--j>=0){if((m=_f[i].torifuda05[j] & 0xff)==0xb2 || m==0xb3) _f[i].torifuda05[j] |= 0x400;}}}j=3; while(--j>=0){if(j==i) continue;_f[j].balance-=total;}_f[i].balance+=total*2;_f[i].torifuda_dekiyaku=total;if(++i>=_f_players) i=0;++k;} while(i!=_f_oya);l=3; i=_f_oya; j=-32768; k=-1;while(--l>=0){_f[i].balance_payback=0;_f[i].balance_total=_f[i].balance_torifuda+_f[i].balance;_f[i].score_after_balance=_f[i].score+_f[i].balance_total;if(j<_f[i].balance_total){ j=_f[i].balance_total; k=i; }if(++i>2) i=0;}_f_result_after_balance();return(k);}if(_f_gamemode==_F_GAMEMODE_600KEN){if(_f_600ken_4ko_flag<0){i=_f_players; while(--i>=0){k=0; j=_f[i].torifuda05_ctr; while(--j>=0){if((_f[i].torifuda05[j] & 0xf0)<0xb0) k+=10;}j=_f[i].torifuda10_ctr; while(--j>=0){if((_f[i].torifuda10[j] & 0xf0)<0xb0) k+=10;}j=_f[i].torifuda20_ctr; while(--j>=0){if((_f[i].torifuda20[j] & 0xf0)<0xb0) k+=50;}if(k<=30) break;}if(i>=0){k=i; i=_f_players; while(--i>=0){if(i==k){j=_f[i].torifuda01_ctr; while(--j>=0){_f[i].torifuda01[j] &= 0xff;if((_f[i].torifuda01[j] & 0xf0)<0xb0) _f[i].torifuda01[j] |= 0x400;}j=_f[i].torifuda05_ctr; while(--j>=0){_f[i].torifuda05[j] &= 0xff;if((_f[i].torifuda05[j] & 0xf0)<0xb0) _f[i].torifuda05[j] |= 0x400;}j=_f[i].torifuda10_ctr; while(--j>=0){_f[i].torifuda10[j] &= 0xff;if((_f[i].torifuda10[j] & 0xf0)<0xb0) _f[i].torifuda10[j] |= 0x400;}j=_f[i].torifuda20_ctr; while(--j>=0){_f[i].torifuda20[j] &= 0xff;if((_f[i].torifuda20[j] & 0xf0)<0xb0) _f[i].torifuda20[j] |= 0x400;}_f_torifuda_disp(i);continue;}j=_f[i].torifuda01_ctr; while(--j>=0) _f[i].torifuda01[j] &= 0xff;j=_f[i].torifuda05_ctr; while(--j>=0) _f[i].torifuda05[j] &= 0xff;j=_f[i].torifuda10_ctr; while(--j>=0) _f[i].torifuda10[j] &= 0xff;j=_f[i].torifuda20_ctr; while(--j>=0) _f[i].torifuda20[j] &= 0xff;_f_torifuda_disp(i);}return(-256);}}_f_600ken_ichikoro_flag=-1;var w=_f_600ken_victor;i=_f_players; while(--i>=0){_f_dekiyaku_judge(i);if(_f[i].current_point_600ken>599 && w<0) w=i;}if(_f_600ken_ichikoro_flag>-1) w=_f_600ken_ichikoro_flag;if(w>-1) _f[w].score+=10;_f_result_after_balance();return(w);}if(_f_gamemode==_F_GAMEMODE_HACHI){i=2; while(--i>=0){total=_f[i].torifuda01_ctr*10+_f[i].torifuda05_ctr+_f[i].torifuda10_ctr*10+_f[i].torifuda20_ctr*10;pt=3;j=_f[i].torifuda20_ctr; while(--j>=0){ if((k=_f[i].torifuda20[j] & 0xf0)==0xb0 || k==0xc0) --pt; }j=_f[i].torifuda10_ctr; while(--j>=0){ if((_f[i].torifuda10[j] & 0xf0)==0x40) --pt; }if(pt<1){_f[i].yaku_name[_f[i].yaku_name_ctr]='霧島';_f[i].yaku_point[_f[i].yaku_name_ctr++]=10;_f[i].yaku_point_total+=10;total+=10;j=_f[i].torifuda20_ctr; while(--j>=0){ if((k=_f[i].torifuda20[j] & 0xf0)==0xb0 || k==0xc0) _f[i].torifuda20[j] |= 0x400; }j=_f[i].torifuda10_ctr; while(--j>=0){ if((_f[i].torifuda10[j] & 0xf0)==0x40) _f[i].torifuda10[j] |= 0x400; }}pt=3;j=_f[i].torifuda05_ctr; while(--j>=0){ if((k=_f[i].torifuda05[j] & 0xf0)==0xb0 || k==0x40) --pt; }j=_f[i].torifuda01_ctr; while(--j>=0){ if((_f[i].torifuda01[j] & 0xff)==0xc2) --pt; }if(pt<1){_f[i].yaku_name[_f[i].yaku_name_ctr]='短の霧島';_f[i].yaku_point[_f[i].yaku_name_ctr++]=20;_f[i].yaku_point_total+=20;total+=20;j=_f[i].torifuda05_ctr; while(--j>=0){ if((k=_f[i].torifuda05[j] & 0xf0)==0xb0 || k==0x40) _f[i].torifuda05[j] |= 0x400; }j=_f[i].torifuda01_ctr; while(--j>=0){ if((_f[i].torifuda01[j] & 0xff)==0xc2) _f[i].torifuda01[j] |= 0x400; }}pt=3;j=_f[i].torifuda10_ctr; while(--j>=0){ if((k=_f[i].torifuda10[j] & 0xf0)==0x50 || k==0x60 || k==0xa0) --pt; }if(pt<1){_f[i].yaku_name[_f[i].yaku_name_ctr]='御老中';_f[i].yaku_point[_f[i].yaku_name_ctr++]=10;_f[i].yaku_point_total+=10;total+=10;j=_f[i].torifuda10_ctr; while(--j>=0){ if((k=_f[i].torifuda10[j] & 0xf0)==0x50 || k==0x60 || k==0xa0) _f[i].torifuda10[j] |= 0x400; }}pt=3;j=_f[i].torifuda05_ctr; while(--j>=0){ if((k=_f[i].torifuda05[j] & 0xf0)==0x50 || k==0x60 || k==0xa0) --pt; }if(pt<1){_f[i].yaku_name[_f[i].yaku_name_ctr]='短の御老中';_f[i].yaku_point[_f[i].yaku_name_ctr++]=20;_f[i].yaku_point_total+=20;total+=20;j=_f[i].torifuda05_ctr; while(--j>=0){ if((k=_f[i].torifuda05[j] & 0xf0)==0x50 || k==0x60 || k==0xa0) _f[i].torifuda05[j] |= 0x400; }}pt=3;j=_f[i].torifuda10_ctr; while(--j>=0){ if((k=_f[i].torifuda10[j] & 0xf0)==0x50 || k==0x40 || k==0x60) --pt; }if(pt<1){_f[i].yaku_name[_f[i].yaku_name_ctr]='五四六';_f[i].yaku_point[_f[i].yaku_name_ctr++]=10;_f[i].yaku_point_total+=10;total+=10;j=_f[i].torifuda10_ctr; while(--j>=0){ if((k=_f[i].torifuda10[j] & 0xf0)==0x50 || k==0x40 || k==0x60) _f[i].torifuda10[j] |= 0x400; }}pt=3;j=_f[i].torifuda05_ctr; while(--j>=0){ if((k=_f[i].torifuda05[j] & 0xf0)==0x50 || k==0x40 || k==0x60) --pt; }if(pt<1){_f[i].yaku_name[_f[i].yaku_name_ctr]='短の五四六';_f[i].yaku_point[_f[i].yaku_name_ctr++]=20;_f[i].yaku_point_total+=20;total+=20;j=_f[i].torifuda05_ctr; while(--j>=0){ if((k=_f[i].torifuda05[j] & 0xf0)==0x50 || k==0x40 || k==0x60) _f[i].torifuda05[j] |= 0x400; }}pt=3;j=_f[i].torifuda20_ctr; while(--j>=0){ if((_f[i].torifuda20[j] & 0xf0)==0x30) --pt; }j=_f[i].torifuda10_ctr; while(--j>=0){ if((k=_f[i].torifuda10[j] & 0xf0)==0x70 || k==0x50) --pt; }if(pt<1){_f[i].yaku_name[_f[i].yaku_name_ctr]='七五三';_f[i].yaku_point[_f[i].yaku_name_ctr++]=10;_f[i].yaku_point_total+=10;total+=10;j=_f[i].torifuda20_ctr; while(--j>=0){ if((_f[i].torifuda20[j] & 0xf0)==0x30) _f[i].torifuda20[j] |= 0x400; }j=_f[i].torifuda10_ctr; while(--j>=0){ if((k=_f[i].torifuda10[j] & 0xf0)==0x70 || k==0x50) _f[i].torifuda10[j] |= 0x400; }}pt=3;j=_f[i].torifuda05_ctr; while(--j>=0){ if((k=_f[i].torifuda05[j] & 0xf0)==0x70 || k==0x50 || k==0x30) --pt; }if(pt<1){_f[i].yaku_name[_f[i].yaku_name_ctr]='短の七五三';_f[i].yaku_point[_f[i].yaku_name_ctr++]=20;_f[i].yaku_point_total+=20;total+=20;j=_f[i].torifuda05_ctr; while(--j>=0){ if((k=_f[i].torifuda05[j] & 0xf0)==0x70 || k==0x50 || k==0x30) _f[i].torifuda05[j] |= 0x400; }}pt=3;j=_f[i].torifuda20_ctr; while(--j>=0){ if((k=_f[i].torifuda20[j] & 0xf0)==0xb0 || k==0x30) --pt; }j=_f[i].torifuda10_ctr; while(--j>=0){ if((_f[i].torifuda10[j] & 0xf0)==0x90) --pt; }if(pt<1){_f[i].yaku_name[_f[i].yaku_name_ctr]='熊野サン';_f[i].yaku_point[_f[i].yaku_name_ctr++]=10;_f[i].yaku_point_total+=10;total+=10;j=_f[i].torifuda20_ctr; while(--j>=0){ if((k=_f[i].torifuda20[j] & 0xf0)==0xb0 || k==0x30) _f[i].torifuda20[j] |= 0x400; }j=_f[i].torifuda10_ctr; while(--j>=0){ if((_f[i].torifuda10[j] & 0xf0)==0x90) _f[i].torifuda10[j] |= 0x400; }}pt=3;j=_f[i].torifuda05_ctr; while(--j>=0){ if((k=_f[i].torifuda05[j] & 0xf0)==0x90 || k==0xb0 || k==0x30) --pt; }if(pt<1){_f[i].yaku_name[_f[i].yaku_name_ctr]='短の熊野サン';_f[i].yaku_point[_f[i].yaku_name_ctr++]=20;_f[i].yaku_point_total+=20;total+=20;j=_f[i].torifuda05_ctr; while(--j>=0){ if((k=_f[i].torifuda05[j] & 0xf0)==0x90 || k==0xb0 || k==0x30) _f[i].torifuda05[j] |= 0x400; }}pt=3;j=_f[i].torifuda20_ctr; while(--j>=0){ if((k=_f[i].torifuda20[j] & 0xf0)==0x80 || k==0xb0) --pt; }j=_f[i].torifuda10_ctr; while(--j>=0){ if((_f[i].torifuda10[j] & 0xf0)==0x40) --pt; }if(pt<1){_f[i].yaku_name[_f[i].yaku_name_ctr]='八島';_f[i].yaku_point[_f[i].yaku_name_ctr++]=10;_f[i].yaku_point_total+=10;total+=10;j=_f[i].torifuda20_ctr; while(--j>=0){ if((k=_f[i].torifuda20[j] & 0xf0)==0x80 || k==0xb0) _f[i].torifuda20[j] |= 0x400; }j=_f[i].torifuda10_ctr; while(--j>=0){ if((_f[i].torifuda10[j] & 0xf0)==0x40) _f[i].torifuda10[j] |= 0x400; }}pt=3;j=_f[i].torifuda05_ctr; while(--j>=0){ if((k=_f[i].torifuda05[j] & 0xf0)==0x40 || k==0xb0) --pt; }j=_f[i].torifuda10_ctr; while(--j>=0){ if((_f[i].torifuda10[j] & 0xf0)==0x80) --pt; }if(pt<1){_f[i].yaku_name[_f[i].yaku_name_ctr]='短の八島';_f[i].yaku_point[_f[i].yaku_name_ctr++]=20;_f[i].yaku_point_total+=20;total+=20;j=_f[i].torifuda05_ctr; while(--j>=0){ if((k=_f[i].torifuda05[j] & 0xf0)==0x40 || k==0xb0) _f[i].torifuda05[j] |= 0x400; }j=_f[i].torifuda10_ctr; while(--j>=0){ if((_f[i].torifuda10[j] & 0xf0)==0x80) _f[i].torifuda10[j] |= 0x400; }}pt=3;j=_f[i].torifuda20_ctr; while(--j>=0){ if((_f[i].torifuda20[j] & 0xf0)==0x80) --pt; }j=_f[i].torifuda10_ctr; while(--j>=0){ if((k=_f[i].torifuda10[j] & 0xf0)==0x70 || k==0x90) --pt; }if(pt<1){_f[i].yaku_name[_f[i].yaku_name_ctr]='仲蔵';_f[i].yaku_point[_f[i].yaku_name_ctr++]=10;_f[i].yaku_point_total+=10;total+=10;j=_f[i].torifuda20_ctr; while(--j>=0){ if((_f[i].torifuda20[j] & 0xf0)==0x80) _f[i].torifuda20[j] |= 0x400; }j=_f[i].torifuda10_ctr; while(--j>=0){ if((k=_f[i].torifuda10[j] & 0xf0)==0x70 || k==0x90) _f[i].torifuda10[j] |= 0x400; }}pt=3;j=_f[i].torifuda05_ctr; while(--j>=0){ if((k=_f[i].torifuda05[j] & 0xf0)==0x70 || k==0x90) --pt; }j=_f[i].torifuda10_ctr; while(--j>=0){ if((_f[i].torifuda10[j] & 0xf0)==0x80) --pt; }if(pt<1){_f[i].yaku_name[_f[i].yaku_name_ctr]='短の仲蔵';_f[i].yaku_point[_f[i].yaku_name_ctr++]=20;_f[i].yaku_point_total+=20;total+=20;j=_f[i].torifuda05_ctr; while(--j>=0){ if((k=_f[i].torifuda05[j] & 0xf0)==0x70 || k==0x90) _f[i].torifuda05[j] |= 0x400; }j=_f[i].torifuda10_ctr; while(--j>=0){ if((_f[i].torifuda10[j] & 0xf0)==0x80) _f[i].torifuda10[j] |= 0x400; }}pt=3;j=_f[i].torifuda20_ctr; while(--j>=0){ if((k=_f[i].torifuda20[j] & 0xf0)==0x10 || k==0x30) --pt; }j=_f[i].torifuda10_ctr; while(--j>=0){ if((_f[i].torifuda10[j] & 0xf0)==0x20) --pt; }if(pt<1){_f[i].yaku_name[_f[i].yaku_name_ctr]='一二三';_f[i].yaku_point[_f[i].yaku_name_ctr++]=10;_f[i].yaku_point_total+=10;total+=10;j=_f[i].torifuda20_ctr; while(--j>=0){ if((k=_f[i].torifuda20[j] & 0xf0)==0x10 || k==0x30) _f[i].torifuda20[j] |= 0x400; }j=_f[i].torifuda10_ctr; while(--j>=0){ if((_f[i].torifuda10[j] & 0xf0)==0x20) _f[i].torifuda10[j] |= 0x400; }}pt=3;j=_f[i].torifuda05_ctr; while(--j>=0){ if((k=_f[i].torifuda05[j] & 0xf0)==0x10 || k==0x20 || k==0x30) --pt; }if(pt<1){_f[i].yaku_name[_f[i].yaku_name_ctr]='短の一二三';_f[i].yaku_point[_f[i].yaku_name_ctr++]=20;_f[i].yaku_point_total+=20;total+=20;j=_f[i].torifuda05_ctr; while(--j>=0){ if((k=_f[i].torifuda05[j] & 0xf0)==0x10 || k==0x20 || k==0x30) _f[i].torifuda05[j] |= 0x400; }}pt=3;j=_f[i].torifuda20_ctr; while(--j>=0){ if((k=_f[i].torifuda20[j] & 0xf0)==0xb0 || k==0xc0) --pt; }j=_f[i].torifuda10_ctr; while(--j>=0){ if((_f[i].torifuda10[j] & 0xf0)==0x20) --pt; }if(pt<1){_f[i].yaku_name[_f[i].yaku_name_ctr]='デン';_f[i].yaku_point[_f[i].yaku_name_ctr++]=10;_f[i].yaku_point_total+=10;total+=10;j=_f[i].torifuda20_ctr; while(--j>=0){ if((k=_f[i].torifuda20[j] & 0xf0)==0xb0 || k==0xc0) _f[i].torifuda20[j] |= 0x400; }j=_f[i].torifuda10_ctr; while(--j>=0){ if((_f[i].torifuda10[j] & 0xf0)==0x20) _f[i].torifuda10[j] |= 0x400; }}pt=3;j=_f[i].torifuda05_ctr; while(--j>=0){ if((k=_f[i].torifuda05[j] & 0xf0)==0x20 || k==0xb0) --pt; }j=_f[i].torifuda01_ctr; while(--j>=0){ if((_f[i].torifuda01[j] & 0xff)==0xc2) --pt; }if(pt<1){_f[i].yaku_name[_f[i].yaku_name_ctr]='短のデン';_f[i].yaku_point[_f[i].yaku_name_ctr++]=20;_f[i].yaku_point_total+=20;total+=20;j=_f[i].torifuda05_ctr; while(--j>=0){ if((k=_f[i].torifuda05[j] & 0xf0)==0x20 || k==0xb0) _f[i].torifuda05[j] |= 0x400; }j=_f[i].torifuda01_ctr; while(--j>=0){ if((_f[i].torifuda01[j] & 0xff)==0xc2) _f[i].torifuda01[j] |= 0x400; }}pt=3;j=_f[i].torifuda20_ctr; while(--j>=0){ if((_f[i].torifuda20[j] & 0xf0)==0x30) --pt; }j=_f[i].torifuda10_ctr; while(--j>=0){ if((k=_f[i].torifuda10[j] & 0xf0)==0x50 || k==0x60) --pt; }if(pt<1){_f[i].yaku_name[_f[i].yaku_name_ctr]='三五六';_f[i].yaku_point[_f[i].yaku_name_ctr++]=10;_f[i].yaku_point_total+=10;total+=10;j=_f[i].torifuda20_ctr; while(--j>=0){ if((_f[i].torifuda20[j] & 0xf0)==0x30) _f[i].torifuda20[j] |= 0x400; }j=_f[i].torifuda10_ctr; while(--j>=0){ if((k=_f[i].torifuda10[j] & 0xf0)==0x50 || k==0x60) _f[i].torifuda10[j] |= 0x400; }}pt=3;j=_f[i].torifuda05_ctr; while(--j>=0){ if((k=_f[i].torifuda05[j] & 0xf0)==0x30 || k==0x50 || k==0x60) --pt; }if(pt<1){_f[i].yaku_name[_f[i].yaku_name_ctr]='短の三五六';_f[i].yaku_point[_f[i].yaku_name_ctr++]=20;_f[i].yaku_point_total+=20;total+=20;j=_f[i].torifuda05_ctr; while(--j>=0){ if((k=_f[i].torifuda05[j] & 0xf0)==0x30 || k==0x50 || k==0x60) _f[i].torifuda05[j] |= 0x400; }}pt=3;j=_f[i].torifuda05_ctr; while(--j>=0){ if((k=_f[i].torifuda05[j] & 0xf0)==0xa0 || k==0x70) --pt; }j=_f[i].torifuda10_ctr; while(--j>=0){ if((_f[i].torifuda10[j] & 0xf0)==0x80) --pt; }if(pt<1){_f[i].yaku_name[_f[i].yaku_name_ctr]='十七八';_f[i].yaku_point[_f[i].yaku_name_ctr++]=20;_f[i].yaku_point_total+=20;total+=20;j=_f[i].torifuda05_ctr; while(--j>=0){ if((k=_f[i].torifuda05[j] & 0xf0)==0xa0 || k==0x70) _f[i].torifuda05[j] |= 0x400; }j=_f[i].torifuda10_ctr; while(--j>=0){ if((_f[i].torifuda10[j] & 0xf0)==0x80) _f[i].torifuda10[j] |= 0x400; }}_f[i].torifuda_total=total;_f[i].balance_torifuda=total;_f[i].balance_payback=0;_f[i].balance_total=total;_f[i].score_after_balance=0;}k=-1;_f[0].result_after_balance=_f[1].result_after_balance=0;if(_f[0].balance_total<_f[1].balance_total){k=-0x21;if(_f[0].balance_total+20<=_f[1].balance_total){k=-0x11;if(_f_8_prev_winner==1){k=1;_f[1].score+=10;}}}else if(_f[1].balance_total<_f[0].balance_total){k=-0x20;if(_f[1].balance_total+20<=_f[0].balance_total){k=-0x10;if(_f_8_prev_winner==0){k=0;_f[0].score+=10;}}}_f_result_after_balance();return(k);}return(-1);}