_f_version='第3.021版(令和 2年 6月11日)';_f_copyright_year='平成22年-令和 2年';_f_copyright=' '+_f_copyright_year+' しらぎくさいと';_f_AI_version='第1.620版(令和 2年 5月22日)';_f_h5_blinkTimeP=400;_f_h5_blinkTimeN=200;_f_h5_frameDulation=20;_h5_sprite=new Array();_h5_sprite[0]=new Object();_h5_sprite[1]=new Object();_h5_sprite[2]=new Object();_h5_sprite[3]=new Object();_f_h5_next=null;_f_random=null;_h5_sprite[0].timeout=null;_h5_sprite[1].timeout=null;_h5_sprite[2].timeout=null;_h5_sprite[3].timeout=null;graph_noSprite=0;_h5_status_string='';_f_h5_blinkTefuda=[null, null, null];_f_h5_blinkTefuda_flag=[0, 0, 0];_f_h5_blinkTorifuda=[null, null, null];_f_h5_blinkTorifuda_flag=[0, 0, 0];_f_h5_blinkBafuda=null;_f_h5_blinkBafuda_flag=0;_h5_sound_ctr=0;_f_fudaWidth=70;_f_fudaHeight=120;_f_players=2;_f_speed=120;_f_silent_mode=0;_f_seatName=new Array('貴方', '真希', '架純');_f_oyako_str=new Array('親', '胴二', 'ビキ');_f_te_torefuda=new Array(8);_f=new Array();_f_i=3;while(--_f_i>=0){_f[_f_i]=new Object();_f[_f_i].open=0;_f[_f_i].kubarifuda=new Array(8);_f[_f_i].oyako='';_f[_f_i].tefuda=new Array(8);_f[_f_i].torifuda01_ctr=0;_f[_f_i].torifuda01=new Array(24);_f[_f_i].torifuda05_ctr=0;_f[_f_i].torifuda05=new Array(24);_f[_f_i].torifuda10_ctr=0;_f[_f_i].torifuda10=new Array(24);_f[_f_i].torifuda20_ctr=0;_f[_f_i].torifuda20=new Array(24);_f[_f_i].torifuda_dekiyaku=0;_f[_f_i].koikoi_monsu=0;_f[_f_i].score_before_game=0;_f[_f_i].score=0;_f[_f_i].balance_payback=0;_f[_f_i].balance_torifuda=0;_f[_f_i].balance=0;_f[_f_i].balance_betted=0;_f[_f_i].balance_total=0;_f[_f_i].nobalance=0;_f[_f_i].score_after_balance=0;_f[_f_i].sambon=new Array(2);_f[_f_i].sambon_hatto=new Array(2);_f[_f_i].nukeyaku=0;_f[_f_i].goko_flag=0;_f[_f_i].shiko_flag=0;_f[_f_i].inoshikacho_flag=0;_f[_f_i].akatan_flag=0;_f[_f_i].aotan_flag=0;_f[_f_i].nanatan_flag=0;_f[_f_i].sambon_flag=0;_f[_f_i].tatesambon_flag=0;_f[_f_i].aka_flag=0;_f[_f_i].tan_ichi_flag=0;_f[_f_i].toichi_flag=0;_f[_f_i].karasu_flag=0;_f[_f_i].pikaichi_flag=0;_f[_f_i].kuttsuki_flag=0;_f[_f_i].teshi_flag=0;_f[_f_i].haneken_flag=0;_f[_f_i].ichinishi_flag=0;_f[_f_i].shiso_flag=0;_f[_f_i].yaku_name_ctr=0;_f[_f_i].yaku_name=new Array(14);_f[_f_i].yaku_point=new Array(14);_f[_f_i].yaku_point_total=0;_f[_f_i].payback_name_ctr=0;_f[_f_i].payback_name=new Array(14);_f[_f_i].payback_point=new Array(14);_f[_f_i].payback_point_total=0;_f[_f_i].yaku_result_point=0;_f[_f_i].torifuda_total=0;_f[_f_i].result_after_balance=0;_f[_f_i].current_result=0;_f[_f_i].current_point_600ken=0;_f[_f_i].point_600ken=0;_f[_f_i].result=new Array(8);_f[_f_i].total_result=0;_f[_f_i].betted=new Array(4);_f[_f_i].oichokabu_koishimo=new Array(4);_f[_f_i].oichokabu_balance=new Array(4);_f[_f_i].oichokabu_total=new Array(4);_f[_f_i].oichokabu_total4disp=new Array(4);_f[_f_i].oichokabu_remain=new Array(16);_f_j=8; while(--_f_j>=-0) _f[_f_i].tefuda[_f_j]=0;_f_j=24; while(--_f_j>=-0) _f[_f_i].torifuda01[_f_j]=_f[_f_i].torifuda05[_f_j]=_f[_f_i].torifuda10[_f_j]=_f[_f_i].torifuda20[_f_j]=0;}_f_teyaku_flag=0;_f_kubarifuda=new Array(8);_f_yamafuda=new Array(48);_f_bafuda=new Array(24);_f_awase_bafuda=new Array(24);_f_torifuda_flag=new Array(24);_f_fuda_buff=0;_f_pos_buff=0;_f_awasefuda_buff=0;_f_torefuda_flag=new Array(24);_f_torefuda_table=new Array(24);_f_yamafuda_remain=48;_f_open_mode=0;_F_GAMEMODE_KOIKOI=0;_F_GAMEMODE_HANAAWASE=1;_F_GAMEMODE_88=2;_F_GAMEMODE_MUSHI=3;_F_GAMEMODE_SUDAOSHI=4;_F_GAMEMODE_600KEN=5;_F_GAMEMODE_HACHI=8;_F_GAMEMODE_OICHOKABU=-1;_F_GAMEMODE_KYOKABU=-2;_F_GAMEMODE_KOREAN=100;_f_gamemode=_F_GAMEMODE_KOIKOI;_f_kabu_mode=0;_f_openmode=0;_f_rule_sel=new Object();_f_game_ctr=0;_f_kyokusu_ctr=0;_f_oya=0;_f_koikoi_flag=-1;_f_command=-1;_f_88_ba_rate=0;_f_88_ba_rate_next=0;_f_88_hatto_shiko=-1;_f_88_hatto_aotan=-1;_f_88_hatto_akatan=-1;_f_88_hatto_inoshikacho=-1;_f_88_yaku_flag=0;_f_yakunagare_flag=0;_f_600ken_victor=-1;_f_600ken_4ko_flag=-1;_f_600ken_ichikoro_flag=-1;_f_600ken_te4_flag=0;_f_600ken_new=0;_f_600ken_4ko_flag2=-1;_f_600ken_victor2=-1;_f_600ken_ichikoro_flag2=-1;_f_600ken_te4_flag2=0;_f_8_prev_winner=-1;_f_600ken_norm=3;_f_oichokabu_limit=10;_f_oichokabu_oyaTotalPoint=0;_f_oichokabu_betted_total=0;_f_oichokabu_opened_flag=new Array(4);_f_oichokabu_betted_flag=new Array(4);_f_oichokabu_number=new Array('ブタ', 'ピン', 'ニゾウ', 'サンタ', 'ヨツヤ','ゴケ', 'ロッポ', 'シチケン', 'オイチョ', 'カブ'
);_f_kyokabu_number=new Array('笑い', 'ウンスン', 'ニゾウ', 'サンズン', 'ヨンスン','ゴケン', 'ロッケン', 'シチケン', 'オイチョ', 'カブ'
);_f_oichokabu_yamafuda=new Array(40);_f_oichokabu_domae=10;_f_oichokabu_dqn=0;_f_oichokabu_oyaOpen=0;_f_oichokabu_oyaYaku='';_f_oichokabu_number_buff=0;_f_fuda_used_table=new Array(0x010, 0x010, 0x011, 0x013,0x020, 0x020, 0x021, 0x022,0x030, 0x030, 0x031, 0x033,0x040, 0x040, 0x041, 0x042,0x050, 0x050, 0x051, 0x052,0x060, 0x060, 0x061, 0x062,0x070, 0x070, 0x071, 0x072,0x080, 0x080, 0x082, 0x083,0x090, 0x090, 0x091, 0x092,0x0A0, 0x0A0, 0x0A1, 0x0A2,0x0B0, 0x0B1, 0x0B2, 0x0B3,0x0C0, 0x0C0, 0x0C2, 0x0C3,0);_f_fuda_used=48;_f_yaku=new Object();_f_max_kyokusu=12;_f_yaku_yakunagashi=0;_f_month=new Array(16);_f_control=0;_f_torefuda_mark=0;_f_fudaBack=0;_f_rule_sel['HH_288']=_f_rule_sel['HH_inoshikacho']=_f_rule_sel['HH_koshitoshi']=0;try {document.cookie='data1=123; path=/; ';for(k in localStorage){if(k.substring(0, 19)!='Marguerite_HanaFla-') continue;var d=localStorage.getItem(k);if(!isNaN(d)) d=parseInt(d);_f_rule_sel[k.substring(19, k.length)]=d;}}catch(e){ ; }if(!_f_rule_sel['UI_torefuda_mark']) _f_rule_sel['UI_torefuda_mark']=0;if(!_f_rule_sel['KK_omotesugawara']) _f_rule_sel['KK_omotesugawara']=0;if(!_f_rule_sel['KK_bafuda']) _f_rule_sel['KK_bafuda']=0;if(!_f_rule_sel['UI_game_kyokusu']) _f_rule_sel['UI_game_kyokusu']=0;if(!_f_rule_sel['UI_cushion']) _f_rule_sel['UI_cushion']=2;if(!_f_rule_sel['version']){_f_rule_sel['KK_hanamisake']=_f_rule_sel['KK_shichigosan']=1;}try {localStorage.setItem('Marguerite_HanaFla-version', _f_version);for(k in _f_rule_sel){localStorage.setItem('Marguerite_HanaFla-'+k, _f_rule_sel[k]);}}catch(e){ ; }if(_f_rule_sel['UI_right_name']==null || _f_rule_sel['UI_right_name']=='') _f_rule_sel['UI_right_name']='真希';if(_f_rule_sel['UI_left_name']==null || _f_rule_sel['UI_left_name']=='') _f_rule_sel['UI_left_name']='架純';