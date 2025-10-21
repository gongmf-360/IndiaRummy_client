let GAME_ID = require("GameIdMgr");
/*
游戏配置
 */
cc.Class({
    extends: cc.Component,

    statics: {
        gameDataList: null,

        // 第一次启动初始化游戏数据  dataCmp:数据脚本 dataName:数据变量名 在cc.vv对象内的成员 gameScene:游戏场景名
        init() {
            this.gameDataList = new Map();

            this.gameDataList.set(GAME_ID.MLLM, {
                hallScene: "game_2ndHall",
                dataCmp: "LMGameData",
                dataName: "LMGameData",
                gameScene: "mllm",
            });
            this.gameDataList.set(GAME_ID.POKER_HUNDRED, {
                dataCmp: "RT100nnData",
                dataName: "RT100NNData",
                gameScene: "100nn",
            });
            this.gameDataList.set(GAME_ID.POKER_NIU, {
                hallScene: "nn_2ndHall",
                dataCmp: "RTNiuniuData",
                dataName: "RTNiuNiuData",
                gameScene: "niuniu",
            });
            this.gameDataList.set(GAME_ID.RED_VS_BLACK, {
                dataCmp: "RTHhdzData",
                dataName: "RTHhdzData",
                gameScene: "hhdz_loading",
                mainScene: "hhdz",
                orientation: "landscape",
            });

            this.gameDataList.set(GAME_ID.INDIA_RUMMY, {
                dataCmp: "Rummy_GameData",
                dataName: "gameData",
                gameScene: "Rummy",
                orientation: "portrait",
                cfgCmp: "Rummy_Cfg",
                bNoLoading: true,
            });

            this.gameDataList.set(GAME_ID.DRAGON_VS_TIGER, {
                dataCmp: "Table_GameData_Base",
                dataName: "gameData",
                gameScene: "lhdz",
                orientation: "portrait",
                cfgCmp: "Lhdz_Cfg",
                bNoLoading: true,
            });
            this.gameDataList.set(GAME_ID.CRASH, {
                dataCmp: "Crash_GameData",
                dataName: "gameData",
                gameScene: "Crash",
                orientation: "portrait",
                cfgCmp: "Crash_Cfg",
                bNoLoading: true,
            });
            this.gameDataList.set(GAME_ID.SEVEN_UP_DOWN, {
                dataCmp: "Table_GameData_Base",
                dataName: "gameData",
                gameScene: "SevenUpDown",
                orientation: "portrait",
                cfgCmp: "SevenUpDown_Cfg",
                bNoLoading: true,
            });
            this.gameDataList.set(GAME_ID.ALADINGWHEEL, {
                dataCmp: "Table_GameData_Base",
                dataName: "gameData",
                gameScene: "AladingWheel",
                orientation: "portrait",
                cfgCmp: "AladingWheel_Cfg",
                bNoLoading: true,
            });
            this.gameDataList.set(GAME_ID.TURNRECT_ALB, {
                dataCmp: "TurnRect_GameData",
                dataName: "gameData",
                gameScene: "TurnRect",
                orientation: "portrait",
                // cfgCmp: "",
                bNoLoading: true,
            });
            this.gameDataList.set(GAME_ID.TEXAS_HOLDEM, {
                dataCmp: "Delphi_GameData",
                dataName: "gameData",
                gameScene: "Delphi",
                orientation: "portrait",
                // cfgCmp: "",
                bNoLoading: true,
            });
            this.gameDataList.set(GAME_ID.BACCARAT, {
                dataCmp: "Baccarat_GameData",
                dataName: "gameData",
                gameScene: "Baccarat",
                orientation: "portrait",
                cfgCmp: "Baccarat_Cfg",
                bNoLoading: true,
            });
            this.gameDataList.set(GAME_ID.WINGO_LOTTERY, {
                dataCmp: "Table_GameData_Base",
                dataName: "gameData",
                gameScene: "WingoLottery",
                orientation: "portrait",
                cfgCmp: "WingoLottery_Cfg",
                bNoLoading: true,
            });
            this.gameDataList.set(GAME_ID.JHANDI_MUNDA, {
                dataCmp: "Table_GameData_Base",
                dataName: "gameData",
                gameScene: "Jhandimunda",
                orientation: "portrait",
                cfgCmp: "Jhandimunda_Cfg",
                bNoLoading: true,
            });
            this.gameDataList.set(GAME_ID.HORSE_RACING, {
                dataCmp: "HorseRace_GameData",
                dataName: "gameData",
                gameScene: "HorseRace",
                orientation: "portrait",
                cfgCmp: "HorseRace_Cfg",
                bNoLoading: true,
            });
            this.gameDataList.set(GAME_ID.ROULETTE, {
                dataCmp: "Roulette36_Gamedata",
                dataName: "gameData",
                gameScene: "Roulette36",
                orientation: "portrait",
                cfgCmp: "Roulette_Cfg",
                bNoLoading: true,
            });
            this.gameDataList.set(GAME_ID.ANDAR_BAHAR, {
                dataCmp: "Table_GameData_Base",
                dataName: "gameData",
                gameScene: "AndarBahar",
                orientation: "portrait",
                cfgCmp: "AndarBahar_Cfg",
                bNoLoading: true,
            });
            this.gameDataList.set(GAME_ID.FORTUNE_WHEEL, {
                dataCmp: "Table_GameData_Base",
                dataName: "gameData",
                gameScene: "FortuneWheel",
                orientation: "portrait",
                cfgCmp: "FortuneWheel_Cfg",
                bNoLoading: true,
            });
            this.gameDataList.set(GAME_ID.FORTUNE_WHEEL_POKER, {
                dataCmp: "Table_GameData_Base",
                dataName: "gameData",
                gameScene: "FortuneWheel",
                orientation: "portrait",
                cfgCmp: "FortuneWheel_Cfg",
                bNoLoading: true,
            });
            this.gameDataList.set(GAME_ID.POKER_TBNN, {
                hallScene: "tbnn_2ndHall",
                dataCmp: "RTTbnnData",
                dataName: "RTTbnnData",
                gameScene: "tbnn_scene",
            });
            this.gameDataList.set(GAME_ID.MLMJ, {
                hallScene: "mlmj_2ndHall",
                dataCmp: "MLMJ_gameData",
                dataName: "gameData",
                gameScene: "mlmj",
            }); //马来麻将
            this.gameDataList.set(GAME_ID.JLM, {
                hallScene: "game_2ndHall",
                dataCmp: "JLM_gameData",
                dataName: "gameData",
                loadingScene: "game_loading",
                gameScene: "jlm",
                hallSceneOri: "portrait",
                anim: "ginrummy",
            }); //金拉米
            this.gameDataList.set(GAME_ID.YDLM, {
                hallScene: "game_2ndHall",
                dataCmp: "YDLM_gameData",
                dataName: "gameData",
                loadingScene: "game_loading",
                gameScene: "ydlm",
                hallSceneOri: "portrait",
                anim: "indiarummy",
            }); //
            // this.gameDataList.set(GAME_ID.DZPK,{dataCmp:"DZPKData",dataName:"DZPKData",loadingScene:"game_loading", gameScene:"dzpk"});   //
            // this.gameDataList.set(GAME_ID.DZPK,{dataCmp:"DZPKData",dataName:"gameData",loadingScene:"game_port_loading", gameScene:"dzpk_p",orientation:"portrait"});   //
            // this.gameDataList.set(GAME_ID.DZPK, {
            //     hallScene: "game_2ndHall",
            //     dataCmp: "DZPKData",
            //     dataName: "gameData",
            //     loadingScene: "poker_loading",
            //     gameScene: "dzpk_p",
            //     orientation: "portrait",
            //     anim: "texaspoker",
            //     hallSceneOri: "portrait",
            // }); //

            this.gameDataList.set(GAME_ID.BLACK_JACK, {
                dataCmp: "BlackJack21_GameData",
                dataName: "gameData",
                gameScene: "BlackJack21",
                orientation: "portrait",
                bNoLoading: true,
            }); // 21点

            // this.gameDataList.set(GAME_ID.HWFISH_918, {
            //     dataCmp: "FishData",
            //     dataName: "gameData",
            //     gameScene: "hwfish918_loading",
            //     mainScene: "hwfish918_game_scene",
            //     orientation: "landscape",
            //     // bNoLoading: true,
            // }); //海王捕鱼918
            this.gameDataList.set(GAME_ID.C_CRICKETX, {
                dataCmp: "CricketX_GameData",
                dataName: "gameData",
                gameScene: "CricketX",
                orientation: "portrait",
                cfgCmp: "CricketX_Cfg",
                bNoLoading: true,
            }); //CricketX板球
            this.gameDataList.set(GAME_ID.C_AVIATRIX, {
                dataCmp: "Aviatrix_GameData",
                dataName: "gameData",
                gameScene: "Aviatrix",
                orientation: "portrait",
                cfgCmp: "Aviatrix_Cfg",
                bNoLoading: true,
            }); //Aviatrix女飞行员
            this.gameDataList.set(GAME_ID.C_CRASHX, {
                dataCmp: "CrashX_GameData",
                dataName: "gameData",
                gameScene: "CrashX",
                orientation: "portrait",
                cfgCmp: "CrashX_Cfg",
                bNoLoading: true,
            }); //CrashX
            this.gameDataList.set(GAME_ID.C_AVIATOR, {
                dataCmp: "Aviator_GameData",
                dataName: "gameData",
                gameScene: "Aviator",
                orientation: "portrait",
                cfgCmp: "Aviator_Cfg",
                bNoLoading: true,
            }); //CricketX板球
            this.gameDataList.set(GAME_ID.C_ZEPPELIN, {
                dataCmp: "Zeppelin_GameData",
                dataName: "gameData",
                gameScene: "Zeppelin",
                orientation: "portrait",
                cfgCmp: "Zeppelin_Cfg",
                bNoLoading: true,
            }); //Zeppelin齐柏林飞艇
            this.gameDataList.set(GAME_ID.S_LIMBO, {
                dataCmp: "Limbo_GameData",
                dataName: "gameData",
                gameScene: "Limbo",
                orientation: "portrait",
                cfgCmp: "Limbo_Cfg",
                bNoLoading: true,
            }); //Limbo赛车
            this.gameDataList.set(GAME_ID.S_DICE, {
                dataCmp: "Dice_GameData",
                dataName: "gameData",
                gameScene: "Dice",
                orientation: "portrait",
                cfgCmp: "Dice_Cfg",
                bNoLoading: true,
            }); //Dice
            this.gameDataList.set(GAME_ID.S_PLINKO, {
                dataCmp: "Plinko_GameData",
                dataName: "gameData",
                gameScene: "Plinko",
                orientation: "portrait",
                cfgCmp: "Plinko_Cfg",
                bNoLoading: true,
            }); //珠子玩法
            this.gameDataList.set(GAME_ID.S_KENO, {
                dataCmp: "Keno_GameData",
                dataName: "gameData",
                gameScene: "Keno",
                orientation: "portrait",
                cfgCmp: "Keno_Cfg",
                bNoLoading: true,
            }); //Keno
            this.gameDataList.set(GAME_ID.S_TOWERS, {
                dataCmp: "Tower_GameData",
                dataName: "gameData",
                gameScene: "Tower",
                orientation: "portrait",
                cfgCmp: "Tower_Cfg",
                bNoLoading: true,
            }); //Tower
            this.gameDataList.set(GAME_ID.DOUBLE_ROLL, {
                dataCmp: "DoubleRoll_GameData",
                dataName: "gameData",
                gameScene: "DoubleRoll",
                orientation: "portrait",
                cfgCmp: "DoubleRoll_Cfg",
                bNoLoading: true,
            });//Double Roll
            this.gameDataList.set(GAME_ID.S_CRYPTO, {
                dataCmp: "Crypto_GameData",
                dataName: "gameData",
                gameScene: "Crypto",
                orientation: "portrait",
                cfgCmp: "Crypto_Cfg",
                bNoLoading: true,
            }); //Crypto
            this.gameDataList.set(GAME_ID.S_TRIPLE, {
                dataCmp: "Triple_GameData",
                dataName: "gameData",
                gameScene: "Triple",
                orientation: "portrait",
                cfgCmp: "Triple_Cfg",
                bNoLoading: true,
            }); //Triple
            this.gameDataList.set(GAME_ID.C_JETX, {
                dataCmp: "JetX_GameData",
                dataName: "gameData",
                gameScene: "JetX",
                orientation: "portrait",
                cfgCmp: "JetX_Cfg",
                bNoLoading: true,
            }); //JetX

            this.gameDataList.set(GAME_ID.SLOT_GDF, {
                dataCmp: "SlotMachine_GameData",
                dataName: "gameData",
                gameScene: "solt_loading",
            }); // 财神到
            this.gameDataList.set(GAME_ID.SLOT_AFG, {
                dataCmp: "SlotMachine_GameData",
                dataName: "gameData",
                gameScene: "solt_loading",
            }); // 非洲丛林
            this.gameDataList.set(GAME_ID.SLOT_GDT, {
                dataCmp: "SlotMachine_GameData",
                dataName: "gameData",
                gameScene: "solt_loading",
            }); // 黄金树
            this.gameDataList.set(GAME_ID.SLOT_GREAT_BLUE, {
                dataCmp: "GB_GameData",
                dataName: "gameData",
                gameScene: "solt_loading",
            }); // 伟大蓝色

            this.gameDataList.set(GAME_ID.SLOT_AZT, {
                dataCmp: "SlotMachine_GameData",
                dataName: "gameData",
                gameScene: "solt_loading",
            }); // 阿兹台克
            this.gameDataList.set(GAME_ID.SLOT_PAN, {
                dataCmp: "SlotMachine_GameData",
                dataName: "gameData",
                gameScene: "solt_loading",
            }); //黑豹
            this.gameDataList.set(GAME_ID.SLOT_IVAN, {
                dataCmp: "SlotMachine_GameData",
                dataName: "gameData",
                gameScene: "solt_loading",
            }); //不朽的国王

            this.gameDataList.set(GAME_ID.SLOT_DR, {
                dataCmp: "SlotMachine_GameData",
                dataName: "gameData",
                gameScene: "solt_loading",
            }); // 海豚礁
            this.gameDataList.set(GAME_ID.SLOT_SB, {
                dataCmp: "SB_GameData",
                dataName: "gameData",
                gameScene: "solt_loading",
            }); // 银弹
            this.gameDataList.set(GAME_ID.SLOT_TK, {
                dataCmp: "TK_GameData",
                dataName: "gameData",
                gameScene: "solt_loading",
            }); // 三国
            this.gameDataList.set(GAME_ID.SLOT_PJL, {
                dataCmp: "SlotMachine_GameData",
                dataName: "gameData",
                gameScene: "solt_loading",
            });
            this.gameDataList.set(GAME_ID.SLOT_JF, {
                dataCmp: "SlotMachine_GameData",
                dataName: "gameData",
                gameScene: "solt_loading",
            }); // 日本福气
            this.gameDataList.set(GAME_ID.BIRD_AND_ANIMAL, {
                dataCmp: "BAA_GameData",
                dataName: "gameData",
                gameScene: "solt_loading",
            }); // 飞禽走兽
            this.gameDataList.set(GAME_ID.SLOT_SPARTAN, {
                dataCmp: "SP_GameData",
                dataName: "gameData",
                gameScene: "solt_loading",
            }); //斯巴达
            this.gameDataList.set(GAME_ID.SLOT_COLABOTTLE, {
                dataCmp: "SlotMachine_GameData",
                dataName: "gameData",
                gameScene: "solt_loading",
            }); //可乐瓶
            this.gameDataList.set(GAME_ID.SLOT_PIRATE_SHIP, {
                dataCmp: "SlotMachine_GameData",
                dataName: "gameData",
                gameScene: "pirateShip_loading",
            }); //海盗船
            this.gameDataList.set(GAME_ID.SLOT_TOP_GUN, {
                dataCmp: "TG_GameData",
                dataName: "gameData",
                gameScene: "solt_loading",
            }); //壮志凌云
            this.gameDataList.set(GAME_ID.SLOT_LAURA, {
                dataCmp: "SlotMachine_GameData",
                dataName: "gameData",
                gameScene: "solt_loading",
            }); //劳拉
            this.gameDataList.set(GAME_ID.SLOT_ALICE, {
                dataCmp: "Alice_GameData",
                dataName: "gameData",
                gameScene: "solt_loading",
            }); //爱丽丝
            this.gameDataList.set(GAME_ID.SLOT_SWK, {
                dataCmp: "SlotMachine_GameData",
                dataName: "gameData",
                gameScene: "solt_loading",
            }); //孙悟空
            this.gameDataList.set(GAME_ID.SLOT_DRAGON5, {
                dataCmp: "DG_GameData",
                dataName: "gameData",
                gameScene: "solt_loading",
            }); //龙5
            this.gameDataList.set(GAME_ID.SLOT_JETION, {
                dataCmp: "JX_GameData",
                dataName: "gameData",
                gameScene: "solt_loading",
            }); //吉星
            this.gameDataList.set(GAME_ID.SLOT_OCEAN, {
                dataCmp: "OC_GameData",
                dataName: "gameData",
                gameScene: "solt_loading",
            }); //海洋天堂
            this.gameDataList.set(GAME_ID.SLOT_MONEY_FROG, {
                dataCmp: "SlotMachine_GameData",
                dataName: "gameData",
                gameScene: "solt_loading",
            }); //金钱蛙
            this.gameDataList.set(GAME_ID.SLOT_ZCJB, {
                dataCmp: "ZCJB_GameData",
                dataName: "gameData",
                gameScene: "solt_loading",
            }); //招财进宝
            this.gameDataList.set(GAME_ID.SLOT_YEARBYYEAR, {
                dataCmp: "YBY_GameData",
                dataName: "gameData",
                gameScene: "solt_loading",
            }); //年年有余
            this.gameDataList.set(GAME_ID.SLOT_CAPTAIN9, {
                dataCmp: "C9_GameData",
                dataName: "gameData",
                gameScene: "solt_loading",
            }); //船长9线
            this.gameDataList.set(GAME_ID.SLOT_AFRICAN_SAFARI, {
                dataCmp: "AS_GameData",
                dataName: "gameData",
                gameScene: "solt_loading",
            }); //狂野非洲
            this.gameDataList.set(GAME_ID.SLOT_CRAZY_MONEY, {
                dataCmp: "SlotMachine_GameData",
                dataName: "gameData",
                gameScene: "CrazyMoney_loading",
            }); //狂热金钱
            this.gameDataList.set(GAME_ID.SLOT_IRELAND_LUCKY, {
                dataCmp: "SlotMachine_GameData",
                dataName: "gameData",
                gameScene: "solt_loading",
            }); //爱尔兰运气
            this.gameDataList.set(GAME_ID.SLOT_SEASON, {
                dataCmp: "SlotMachine_GameData",
                dataName: "gameData",
                gameScene: "solt_loading",
            }); //季节问候
            this.gameDataList.set(GAME_ID.SLOT_SAINTSEIAY, {
                dataCmp: "Saint_GameData",
                dataName: "gameData",
                gameScene: "solt_loading",
            }); //圣斗士星矢
            this.gameDataList.set(GAME_ID.SLOT_CAPTAIN, {
                dataCmp: "SlotMachine_GameData",
                dataName: "gameData",
                gameScene: "solt_loading",
            }); //船长20线
            this.gameDataList.set(GAME_ID.SLOT_MATSURI, {
                dataCmp: "MS_GameData",
                dataName: "gameData",
                gameScene: "solt_loading",
            }); //飨宴
            this.gameDataList.set(GAME_ID.SLOT_TREX, {
                dataCmp: "SlotMachine_GameData",
                dataName: "gameData",
                gameScene: "solt_loading",
            }); //霸王龙
            this.gameDataList.set(GAME_ID.SLOT_GOLF, {
                dataCmp: "Golf_GameData",
                dataName: "gameData",
                gameScene: "solt_loading",
            }); // 5线高尔夫

            //赛马类
            this.gameDataList.set(GAME_ID.HORSE_MONKEY_TREE, {
                dataCmp: "MTGameData",
                dataName: "gameData",
                gameScene: "solt_loading",
            }); // 霹雳猴
            this.gameDataList.set(GAME_ID.HORSE, {
                dataCmp: "HorseGameData",
                dataName: "gameData",
                gameScene: "solt_loading",
            }); // 赛马
            this.gameDataList.set(GAME_ID.MOTOR_RACE, {
                dataCmp: "MTRaceGameData",
                dataName: "gameData",
                gameScene: "solt_loading",
            }); // 赛摩托车
            this.gameDataList.set(GAME_ID.HORSE_RACE, {
                dataCmp: "MTRaceGameData",
                dataName: "gameData",
                gameScene: "solt_loading",
            }); // 赛马918

            this.gameDataList.set(GAME_ID.ARC_XYZB, {
                dataCmp: "RTMKStoryData",
                dataName: "gameData",
                gameScene: "mkstoryScene_loading",
            }); // 西游争霸
            this.gameDataList.set(GAME_ID.ARC_YCLS, {
                dataCmp: "RTEPSData",
                dataName: "gameData",
                gameScene: "solt_loading",
            }); // 英超联赛
            this.gameDataList.set(GAME_ID.ARC_XYZB_LINE, {
                dataCmp: "RTMKStoryData",
                dataName: "gameData",
                gameScene: "solt_loading",
            }); // 西游争霸_在线

            this.gameDataList.set(GAME_ID.BCBM_918, {
                dataCmp: "BCBM918GameData",
                dataName: "gameData",
                gameScene: "solt_loading",
            }); //奔驰宝马918

            // 鱼虾蚝
            this.gameDataList.set(GAME_ID.FISH_SHRIMP_OYSTER, {
                dataCmp: "FSO_NetLogic",
                dataName: "gameData",
                gameScene: "solt_loading",
            });

            this.gameDataList.set(GAME_ID.ONLINE_LHDZ, {
                dataCmp: "RTLhdzOLData",
                dataName: "gameData",
                gameScene: "solt_loading",
            }); //在线-龙虎斗（777）

            this.gameDataList.set(GAME_ID.LHDZ_918_1, {
                dataCmp: "RTLhdz918Data",
                dataName: "gameData",
                gameScene: "solt_loading",
            }); //龙虎斗1（918）
            this.gameDataList.set(GAME_ID.LHDZ_918_2, {
                dataCmp: "RTLhdz918Data",
                dataName: "gameData",
                gameScene: "solt_loading",
            }); //龙虎斗2（918）
            this.gameDataList.set(GAME_ID.LHDZ_918_3, {
                dataCmp: "RTLhdz918Data",
                dataName: "gameData",
                gameScene: "solt_loading",
            }); //龙虎斗3（918）
            this.gameDataList.set(GAME_ID.SICBO_918, {
                dataCmp: "RTDice918Data",
                dataName: "gameData",
                gameScene: "solt_loading",
            }); //豹子王单机版(918)
            this.gameDataList.set(GAME_ID.BACCARAT_918, {
                dataCmp: "RTBCT918Data",
                dataName: "gameData",
                gameScene: "solt_loading",
            }); //百家乐单机版(918)
            this.gameDataList.set(GAME_ID.THREE_POKER_918, {
                dataCmp: "TPoker_gamedata",
                dataName: "gameData",
                gameScene: "solt_loading",
            }); //三卡扑克单机版(918)
            this.gameDataList.set(GAME_ID.HOLD_EM_918, {
                dataCmp: "Hold_gamedata",
                dataName: "gameData",
                gameScene: "solt_loading",
            }); //赌场单机版(918)
            this.gameDataList.set(GAME_ID.CASINO_WAR_918, {
                dataCmp: "CWar_gamedata",
                dataName: "gameData",
                gameScene: "solt_loading",
            }); //赌场战争单机版(918)
            this.gameDataList.set(GAME_ID.MONKEY_ZWBS_918, {
                dataCmp: "RTMKStoryData",
                dataName: "gameData",
                gameScene: "solt_loading",
            }); //西游争霸之战无不胜(918)
            this.gameDataList.set(GAME_ID.ARC_ZWBS_LINE, {
                dataCmp: "RTMKStoryData",
                dataName: "gameData",
                gameScene: "solt_loading",
            }); //西游争霸之战无不胜在线(918)
            this.gameDataList.set(GAME_ID.BULL_918, {
                dataCmp: "Bull918_gamedata",
                dataName: "gameData",
                gameScene: "solt_loading",
            }); //牛牛单机版(918)
            this.gameDataList.set(GAME_ID.ROULET_73, {
                dataCmp: "Ro73_gamedata",
                dataName: "gameData",
                gameScene: "solt_loading",
            }); //轮盘73单机版(918)
            this.gameDataList.set(GAME_ID.ROULET_24, {
                dataCmp: "Ro24_gamedata",
                dataName: "gameData",
                gameScene: "solt_loading",
            }); //轮盘24单机版(918)
            this.gameDataList.set(GAME_ID.ROULETTE_MINI, {
                dataCmp: "RoMini_gamedata",
                dataName: "gameData",
                gameScene: "solt_loading",
            }); //轮盘24单机版(918)
            this.gameDataList.set(GAME_ID.ROULET_36, {
                dataCmp: "Ro36_gamedata",
                dataName: "gameData",
                gameScene: "solt_loading",
            }); //轮盘36单机版(918)
            this.gameDataList.set(GAME_ID.SLOT_GLF, {
                dataCmp: "GLF_GameData",
                dataName: "gameData",
                gameScene: "solt_loading",
            }); //金莲花

            this.gameDataList.set(GAME_ID.SLOT_JLBD, {
                dataCmp: "SlotMachine_GameData",
                dataName: "gameData",
                gameScene: "solt_loading",
            }); //极乐宝典

            this.gameDataList.set(GAME_ID.BCBM, {
                dataCmp: "bcbm777Data",
                dataName: "gameData",
                gameScene: "solt_loading",
            }); //奔驰宝马
            this.gameDataList.set(GAME_ID.BAIJIALE, {
                dataCmp: "baijialeData",
                dataName: "gameData",
                gameScene: "solt_loading",
            }); //百家乐初级场
            this.gameDataList.set(GAME_ID.BAIJIALE_MID, {
                dataCmp: "baijialeData",
                dataName: "gameData",
                gameScene: "solt_loading",
            }); //百家乐中级场
            this.gameDataList.set(GAME_ID.BAIJIALE_HIGH, {
                dataCmp: "baijialeData",
                dataName: "gameData",
                gameScene: "solt_loading",
            }); //百家乐高级场

            this.gameDataList.set(GAME_ID.BIG_SMALL, {
                dataCmp: "bigSmall_data",
                dataName: "gameData",
                gameScene: "solt_loading",
            }); //百家乐高级场

            this.gameDataList.set(GAME_ID.TWENTYONE777, {
                dataCmp: "twentyone777Data",
                dataName: "gameData",
                gameScene: "solt_loading",
            }); //21点
            this.gameDataList.set(GAME_ID.HWFISH, {
                dataCmp: "FishData",
                dataName: "gameData",
                gameScene: "solt_loading",
            }); //海王捕鱼
            // this.gameDataList.set(GAME_ID.FISHJOY_WKNH, {
            //     dataCmp: "FishData",
            //     dataName: "gameData",
            //     gameScene: "solt_loading",
            // }); //悟空闹海
            // this.gameDataList.set(GAME_ID.FISHJOY_JCBY, {
            //     dataCmp: "FishData",
            //     dataName: "gameData",
            //     gameScene: "solt_loading",
            // }); //金蟾捕鱼
            // this.gameDataList.set(GAME_ID.FISHJOY_LKBY, {
            //     dataCmp: "FishData",
            //     dataName: "gameData",
            //     gameScene: "solt_loading",
            // }); //李逵捕鱼
            // this.gameDataList.set(GAME_ID.YQSFISH, {
            //     dataCmp: "FishData",
            //     dataName: "gameData",
            //     gameScene: "solt_loading",
            // }); //摇钱树捕鱼
            // this.gameDataList.set(GAME_ID.FISHSTAR_DSBY, {
            //     dataCmp: "FishData",
            //     dataName: "gameData",
            //     gameScene: "solt_loading",
            //     selectRoom: true,
            // }); //大圣捕鱼
            // this.gameDataList.set(GAME_ID.FISHSTAR_LKPY, {
            //     dataCmp: "FishData",
            //     dataName: "gameData",
            //     gameScene: "solt_loading",
            //     selectRoom: true,
            // }); //李逵劈鱼
            // this.gameDataList.set(GAME_ID.FISHSTAR_BYZX, {
            //     dataCmp: "FishData",
            //     dataName: "gameData",
            //     gameScene: "solt_loading",
            //     selectRoom: true,
            // }); //捕鱼之星
            // this.gameDataList.set(GAME_ID.HWFISH_918, {
            //     dataCmp: "FishData",
            //     dataName: "gameData",
            //     gameScene: "hwfish918_loading",
            //     selectRoom: true,
            // }); //海王捕鱼918
            // this.gameDataList.set(GAME_ID.BIRDSFISH, {
            //     dataCmp: "FishData",
            //     dataName: "gameData",
            //     gameScene: "solt_loading",
            // }); //鸟王争霸
            // this.gameDataList.set(GAME_ID.RAIDENFISH, {
            //     dataCmp: "FishData",
            //     dataName: "gameData",
            //     gameScene: "solt_loading",
            // }); //雷电捕鱼
            // this.gameDataList.set(GAME_ID.SPONGEBOB, {
            //     dataCmp: "FishData",
            //     dataName: "gameData",
            //     gameScene: "solt_loading",
            // }); //海绵宝宝
            // this.gameDataList.set(GAME_ID.FISHSTAR_DSBY_WP, {
            //     dataCmp: "FishData",
            //     dataName: "gameData",
            //     gameScene: "solt_loading",
            //     selectRoom: true,
            // }); //大圣捕鱼万炮版
            // this.gameDataList.set(GAME_ID.FISHSTAR_LKPY_WP, {
            //     dataCmp: "FishData",
            //     dataName: "gameData",
            //     gameScene: "solt_loading",
            //     selectRoom: true,
            // }); //李逵劈鱼万炮版
            // this.gameDataList.set(GAME_ID.FISHSTAR_BYZX_WP, {
            //     dataCmp: "FishData",
            //     dataName: "gameData",
            //     gameScene: "solt_loading",
            //     selectRoom: true,
            // }); //捕鱼之星万炮版
            // this.gameDataList.set(GAME_ID.HWFISH_918_WP, {
            //     dataCmp: "FishData",
            //     dataName: "gameData",
            //     gameScene: "solt_loading",
            //     selectRoom: true,
            // }); //海王捕鱼918万炮版
            // this.gameDataList.set(GAME_ID.INSECTSFISH, {
            //     dataCmp: "FishData",
            //     dataName: "gameData",
            //     gameScene: "solt_loading",
            // }); //虫虫乐园
            // this.gameDataList.set(GAME_ID.NEPTUNEFISH, {
            //     dataCmp: "FishData",
            //     dataName: "gameData",
            //     gameScene: "solt_loading",
            // }); //渔人码头

            this.gameDataList.set(GAME_ID.SLOT_TLG, {
                dataCmp: "SlotMachine_GameData",
                dataName: "gameData",
                gameScene: "Thelistofgods_loading",
            }); //封神榜

            // this.gameDataList.set(GAME_ID.ROULETTE, {
            //     dataCmp: "RouletteGameData",
            //     dataName: "gameData",
            //     gameScene: "solt_loading",
            // }); //俄罗斯转盘 初级场
            this.gameDataList.set(GAME_ID.ROULETTE_MID, {
                dataCmp: "RouletteGameData",
                dataName: "gameData",
                gameScene: "solt_loading",
            }); //俄罗斯转盘 百家乐中级场
            this.gameDataList.set(GAME_ID.ROULETTE_HIGH, {
                dataCmp: "RouletteGameData",
                dataName: "gameData",
                gameScene: "solt_loading",
            }); //俄罗斯转盘 百家乐高级场

            this.gameDataList.set(GAME_ID.SLOT_PD, {
                dataCmp: "SlotMachine_GameData",
                dataName: "gameData",
                gameScene: "solt_loading",
            });
            this.gameDataList.set(GAME_ID.SLOT_JJX, {
                dataCmp: "SlotMachine_GameData",
                dataName: "gameData",
                gameScene: "solt_loading",
            });
            this.gameDataList.set(GAME_ID.SLOT_GSGL, {
                dataCmp: "GSGL_GameData",
                dataName: "gameData",
                gameScene: "solt_loading",
            });
            this.gameDataList.set(GAME_ID.SLOT_YNXJ, {
                dataCmp: "SlotMachine_GameData",
                dataName: "gameData",
                gameScene: "solt_loading",
            });
            this.gameDataList.set(GAME_ID.SLOT_SHZ, {
                dataCmp: "SlotMachine_GameData",
                dataName: "gameData",
                gameScene: "solt_loading",
            });

            this.gameDataList.set(GAME_ID.ARC_YCLS, {
                dataCmp: "RTEPSData",
                dataName: "gameData",
                gameScene: "solt_loading",
            }); // 英超联赛

            this.gameDataList.set(GAME_ID.FRUIT_SLOT, {
                dataCmp: "FUST_GameData",
                dataName: "gameData",
                gameScene: "solt_loading",
            }); // 水果slot
            this.gameDataList.set(GAME_ID.FRUIT, {
                dataCmp: "FruitGameData",
                dataName: "gameData",
                gameScene: "solt_loading",
            }); // 经典水果
            this.gameDataList.set(GAME_ID.SLOT_SLWH, {
                dataCmp: "forestparty777Data",
                dataName: "gameData",
                gameScene: "solt_loading",
            }); // 森林舞会
            this.gameDataList.set(GAME_ID.SLWH_918NEW, {
                dataCmp: "FP918_Data",
                dataName: "gameData",
                gameScene: "solt_loading",
            }); //森林舞会（918新版）

            this.gameDataList.set(GAME_ID.LEOPARD, {
                dataCmp: "LeopardGameData",
                dataName: "gameData",
                gameScene: "solt_loading",
            });
            this.gameDataList.set(GAME_ID.HULUJI, {
                dataCmp: "HLJGameData",
                dataName: "gameData",
                gameScene: "solt_loading",
            });
            this.gameDataList.set(GAME_ID.SLOT_ROBIN, {
                dataCmp: "SlotMachine_GameData",
                dataName: "gameData",
                gameScene: "solt_loading",
            }); // 罗宾汉
            this.gameDataList.set(GAME_ID.SLOT_GLYY, {
                dataCmp: "SlotMachine_GameData",
                dataName: "gameData",
                gameScene: "solt_loading",
            }); // 金莲淫液
            this.gameDataList.set(GAME_ID.SLOT_SGIRL, {
                dataCmp: "SlotMachine_GameData",
                dataName: "gameData",
                gameScene: "solt_loading",
            }); // 性感美女

            this.gameDataList.set(GAME_ID.SLOT_FORTUNE_PANDA, {
                dataCmp: "SlotMachine_GameData",
                dataName: "gameData",
                gameScene: "solt_loading",
            }); // 富贵熊猫
            this.gameDataList.set(GAME_ID.SLOT_TGSY, {
                dataCmp: "SlotMachine_GameData",
                dataName: "gameData",
                gameScene: "solt_loading",
            }); // 泰国神游
            this.gameDataList.set(GAME_ID.SLOT_FOOTBALL, {
                dataCmp: "SlotMachine_GameData",
                dataName: "gameData",
                gameScene: "solt_loading",
            }); // 足球嘉年华
            this.gameDataList.set(GAME_ID.SLOT_ZHANWM, {
                dataCmp: "SlotMachine_GameData",
                dataName: "gameData",
                gameScene: "solt_loading",
            }); // 斩五门
            this.gameDataList.set(GAME_ID.SLOT_FORTUNE, {
                dataCmp: "SlotMachine_GameData",
                dataName: "gameData",
                gameScene: "solt_loading",
            }); // 发大财
            this.gameDataList.set(GAME_ID.SLOT_CHERRY, {
                dataCmp: "SlotMachine_GameData",
                dataName: "gameData",
                gameScene: "solt_loading",
            }); // 樱桃的爱
            this.gameDataList.set(GAME_ID.SLOT_SPARTA30, {
                dataCmp: "SlotMachine_GameData",
                dataName: "gameData",
                gameScene: "solt_loading",
            }); // 斯巴达30
            this.gameDataList.set(GAME_ID.SLOT_EASTER, {
                dataCmp: "SlotMachine_GameData",
                dataName: "gameData",
                gameScene: "solt_loading",
            }); // 复活节

            this.gameDataList.set(GAME_ID.SLOT_STEAMTOWER, {
                dataCmp: "SlotMachine_GameData",
                dataName: "gameData",
                gameScene: "solt_loading",
            }); // 蒸汽塔
            this.gameDataList.set(GAME_ID.SLOT_NEWYEAR, {
                dataCmp: "SlotMachine_GameData",
                dataName: "gameData",
                gameScene: "solt_loading",
            }); // 拜年
            this.gameDataList.set(GAME_ID.SLOT_VICTORY, {
                dataCmp: "SlotMachine_GameData",
                dataName: "gameData",
                gameScene: "solt_loading",
            }); // 胜利

            this.gameDataList.set(GAME_ID.SLOT_RALLY, {
                dataCmp: "SlotMachine_GameData",
                dataName: "gameData",
                gameScene: "solt_loading",
            }); // 拉力赛
            this.gameDataList.set(GAME_ID.SLOT_WESTERN_PASTURE, {
                dataCmp: "SlotMachine_GameData",
                dataName: "gameData",
                gameScene: "westernPasture_loading",
            }); // 西部牧场 slot
            this.gameDataList.set(GAME_ID.SLOT_FARM_STORY, {
                dataCmp: "SlotMachine_GameData",
                dataName: "gameData",
                gameScene: "farmStory_loading",
            }); // 农场故事 slot
            this.gameDataList.set(GAME_ID.SLOT_BLAZING_STAR, {
                dataCmp: "SlotMachine_GameData",
                dataName: "gameData",
                gameScene: "blazingStar_loading",
            }); // 闪亮之星 slot
            this.gameDataList.set(GAME_ID.SLOT_ICE_AND_SNOW, {
                dataCmp: "SlotMachine_GameData",
                dataName: "gameData",
                gameScene: "solt_loading",
            }); // 冰雪世界 slot
            this.gameDataList.set(GAME_ID.SLOT_INDIA_MYTH, {
                dataCmp: "SlotMachine_GameData",
                dataName: "gameData",
                gameScene: "solt_loading",
            }); // 印度神话 slot
            this.gameDataList.set(GAME_ID.SLOT_TRAFFIC_LIGHT, {
                dataCmp: "SlotMachine_GameData",
                dataName: "gameData",
                gameScene: "solt_loading",
            }); // 红绿灯 slot
            this.gameDataList.set(GAME_ID.SLOT_GARDEN, {
                dataCmp: "SlotMachine_GameData",
                dataName: "gameData",
                gameScene: "solt_loading",
            }); // 花园 slot
            this.gameDataList.set(GAME_ID.SLOT_WUFUMEN, {
                dataCmp: "SlotMachine_GameData",
                dataName: "gameData",
                gameScene: "solt_loading",
            }); // 五福门 slot
            this.gameDataList.set(GAME_ID.SLOT_WANGCAI, {
                dataCmp: "SlotMachine_GameData",
                dataName: "gameData",
                gameScene: "solt_loading",
            }); // 旺财 slot
            this.gameDataList.set(GAME_ID.SLOT_WOLFER, {
                dataCmp: "SlotMachine_GameData",
                dataName: "gameData",
                gameScene: "solt_loading",
            }); // 猎狼者 slot
            this.gameDataList.set(GAME_ID.SLOT_MAGICIAN, {
                dataCmp: "SlotMachine_GameData",
                dataName: "gameData",
                gameScene: "magician_loading",
            }); // 魔法师 slot
            this.gameDataList.set(GAME_ID.SLOT_STONE_AGE, {
                dataCmp: "SlotMachine_GameData",
                dataName: "gameData",
                gameScene: "solt_loading",
            }); // 石器时代 slot
            this.gameDataList.set(GAME_ID.SLOT_SPIRITUAL_GARDEN, {
                dataCmp: "SlotMachine_GameData",
                dataName: "gameData",
                gameScene: "solt_loading",
            }); // 精灵花园 slot
            this.gameDataList.set(GAME_ID.SLOT_SEA_WORLD, {
                dataCmp: "SlotMachine_GameData",
                dataName: "gameData",
                gameScene: "seaWorld_loading",
            }); // 海洋世界 slot
            this.gameDataList.set(GAME_ID.SLOT_HUANG_DI_LAI_LE, {
                dataCmp: "SlotMachine_GameData",
                dataName: "gameData",
                gameScene: "huangDiLaiLe_loading",
            }); // 皇帝来了(老子是皇帝) slot
            this.gameDataList.set(GAME_ID.SLOT_CHEN_PAO_ISLAND, {
                dataCmp: "SlotMachine_GameData",
                dataName: "gameData",
                gameScene: "treasureIsland_loading",
            }); // 珍宝岛 slot
            this.gameDataList.set(GAME_ID.SLOT_CIRCUS, {
                dataCmp: "SlotMachine_GameData",
                dataName: "gameData",
                gameScene: "solt_loading",
            }); // 马戏团 slot
            this.gameDataList.set(GAME_ID.SLOT_AIRPLANE, {
                dataCmp: "SlotMachine_GameData",
                dataName: "gameData",
                gameScene: "solt_loading",
            }); // 飞机 slot
            this.gameDataList.set(GAME_ID.SLOT_FAME, {
                dataCmp: "SlotMachine_GameData",
                dataName: "gameData",
                gameScene: "solt_loading",
            }); // 名利场 slot
            this.gameDataList.set(GAME_ID.SLOT_TGFQ, {
                dataCmp: "Thaibliss_GameData",
                dataName: "gameData",
                gameScene: "solt_loading",
            }); // 泰国风情 slot

            this.gameDataList.set(GAME_ID.SLOT_GOLDEN_DRAGON, {
                dataCmp: "SlotMachine_GameData",
                dataName: "gameData",
                gameScene: "solt_loading",
            }); // 金龙赐福 slot
            this.gameDataList.set(GAME_ID.SLOT_BRAVE_LEGEND, {
                dataCmp: "SlotMachine_GameData",
                dataName: "gameData",
                gameScene: "solt_loading",
            }); // 勇敢传说 slot
            this.gameDataList.set(GAME_ID.SINGLE_PICK, {
                dataCmp: "SGPK_Data",
                dataName: "gameData",
                gameScene: "solt_loading",
            }); //单挑
            this.gameDataList.set(GAME_ID.SLOT_ALADDIN, {
                dataCmp: "SlotMachine_GameData",
                dataName: "gameData",
                gameScene: "solt_loading",
            }); // 阿拉丁 slot
            this.gameDataList.set(GAME_ID.SLOT_HALLOWEEN, {
                dataCmp: "SlotMachine_GameData",
                dataName: "gameData",
                gameScene: "halloween_loading",
            }); // 万圣节 slot
            this.gameDataList.set(GAME_ID.SLOT_HALLOWEEN_SURPRISE, {
                dataCmp: "SlotMachine_GameData",
                dataName: "gameData",
                gameScene: "solt_loading",
            }); // 万圣节惊喜 slot
            this.gameDataList.set(GAME_ID.SLOT_GOLDEN_TREE918, {
                dataCmp: "SlotMachine_GameData",
                dataName: "gameData",
                gameScene: "solt_loading",
            }); // 黄金树918 slot
            this.gameDataList.set(GAME_ID.SLOT_TERNADO, {
                dataCmp: "SlotMachine_GameData",
                dataName: "gameData",
                gameScene: "solt_loading",
            }); // 龙卷风 slot
            this.gameDataList.set(GAME_ID.SLOT_YEMEI, {
                dataCmp: "SlotMachine_GameData",
                dataName: "gameData",
                gameScene: "solt_loading",
            }); // 野妹 slot
            this.gameDataList.set(GAME_ID.SLOT_WATER, {
                dataCmp: "SlotMachine_GameData",
                dataName: "gameData",
                gameScene: "solt_loading",
            }); // 海豚 slot
            this.gameDataList.set(GAME_ID.SLOT_XUEMEI, {
                dataCmp: "XM_GameData",
                dataName: "gameData",
                gameScene: "solt_loading",
            }); // 学妹 slot
            this.gameDataList.set(GAME_ID.SLOT_ORIENT, {
                dataCmp: "SlotMachine_GameData",
                dataName: "gameData",
                gameScene: "solt_loading",
            }); // 东方快车 slot
            this.gameDataList.set(GAME_ID.SLOT_COYOTECASH, {
                dataCmp: "SlotMachine_GameData",
                dataName: "gameData",
                gameScene: "solt_loading",
            }); // 野狼现金 slot
            this.gameDataList.set(GAME_ID.SLOT_MAGICAL_DRAGON, {
                dataCmp: "SlotMachine_GameData",
                dataName: "gameData",
                gameScene: "solt_loading",
            }); // 野狼现金 slot
            this.gameDataList.set(GAME_ID.SLOT_MOTOCYCLE, {
                dataCmp: "SlotMachine_GameData",
                dataName: "gameData",
                gameScene: "solt_loading",
            }); // 东方快车 slot
            this.gameDataList.set(GAME_ID.SLOT_FASHION, {
                dataCmp: "SlotMachine_GameData",
                dataName: "gameData",
                gameScene: "solt_loading",
            }); // 东方快车 slot
            this.gameDataList.set(GAME_ID.SLOT_GREAT_CHINA, {
                dataCmp: "SlotMachine_GameData",
                dataName: "gameData",
                gameScene: "solt_loading",
            }); // 东方快车 slot
            this.gameDataList.set(GAME_ID.SLOT_CLEOPATRA, {
                dataCmp: "SlotMachine_GameData",
                dataName: "gameData",
                gameScene: "solt_loading",
            }); // 埃及艳后 slot
            this.gameDataList.set(GAME_ID.SLOT_BIGSHOT, {
                dataCmp: "SlotMachine_GameData",
                dataName: "gameData",
                gameScene: "solt_loading",
            }); // 头面人物
            this.gameDataList.set(GAME_ID.FQZS_SP, {
                dataCmp: "Fqzs_GameData",
                dataName: "gameData",
                gameScene: "solt_loading",
            }); //飞禽走兽单机
            this.gameDataList.set(GAME_ID.SLOT_THE_DISCOVER, {
                dataCmp: "TD_GameData",
                dataName: "gameData",
                gameScene: "solt_loading",
            }); // 发现
            this.gameDataList.set(GAME_ID.PHOENIX_SP, {
                dataCmp: "Phoenix_GameData",
                dataName: "gameData",
                gameScene: "solt_loading",
            }); //火飞凤舞
            this.gameDataList.set(GAME_ID.POKEMON_SP, {
                dataCmp: "Pokemon_GameData",
                dataName: "gameData",
                gameScene: "solt_loading",
            }); //宠物小精灵
            this.gameDataList.set(GAME_ID.SLOT_NINJA, {
                dataCmp: "SlotMachine_GameData",
                dataName: "gameData",
                gameScene: "solt_loading",
            }); // 忍者
            this.gameDataList.set(GAME_ID.SLOT_FRUITSPACE, {
                dataCmp: "FS_GameData",
                dataName: "gameData",
                gameScene: "solt_loading",
            }); // 水果天地
            this.gameDataList.set(GAME_ID.SLOT_NIGHTCLUB, {
                dataCmp: "NC_GameData",
                dataName: "gameData",
                gameScene: "solt_loading",
            }); // 夜总会
            this.gameDataList.set(GAME_ID.SLOT_CLASSIC, {
                dataCmp: "ClassicSlot_GameData",
                dataName: "gameData",
                gameScene: "solt_loading",
            }); //经典拉霸
            this.gameDataList.set(GAME_ID.SLOT_CRAZY7, {
                dataCmp: "Crazy7_GameData",
                dataName: "gameData",
                gameScene: "solt_loading",
            }); //疯狂7
            this.gameDataList.set(GAME_ID.SLOT_HZLB, {
                dataCmp: "Slotmonkey_GameData",
                dataName: "gameData",
                gameScene: "solt_loading",
            }); //猴子拉霸
            this.gameDataList.set(GAME_ID.SLOT_8BALL, {
                dataCmp: "SlotBall_GameData",
                dataName: "gameData",
                gameScene: "solt_loading",
            }); //8号球
            this.gameDataList.set(GAME_ID.SLOT_PAYDIRT, {
                dataCmp: "SlotMachine_GameData",
                dataName: "gameData",
                gameScene: "solt_loading",
            }); // 富矿发现
            this.gameDataList.set(GAME_ID.SLOT_INFINITY_VENUS, {
                dataCmp: "Venus_GameData",
                dataName: "gameData",
                gameScene: "slot_venus_loading",
            }); //infinity-venus
            this.gameDataList.set(GAME_ID.GLITZ_INFINITY, {
                dataCmp: "Glitz_GameData",
                dataName: "gameData",
                gameScene: "solt_loading",
            }); // glitz(inifinity)
            this.gameDataList.set(GAME_ID.SLOT_GOWV2, {
                hallScene: "",
                dataCmp: "SlotMachine_GameData",
                dataName: "gameData",
                gameScene: "godofwealth_v2_loading",
            }); //财神到2
            this.gameDataList.set(GAME_ID.SLOT_CHICKEN, {
                hallScene: "",
                dataCmp: "cckn_GameData",
                dataName: "gameData",
                gameScene: "solt_chicken_loading",
            }); //吃鸡拉霸
            this.gameDataList.set(GAME_ID.SLOT_DRAGON5_HD, {
                dataCmp: "DG_GameData",
                dataName: "gameData",
                gameScene: "Dragon5_HD_loading",
            }); //龙5
            this.gameDataList.set(GAME_ID.SLOT_ZHAOYUN, {
                dataCmp: "SlotMachine_GameData",
                dataName: "gameData",
                gameScene: "zhaoyun_loading",
                orientation: "portrait",
            }); //赵云传
            this.gameDataList.set(GAME_ID.SLOT_MOMENT_OF_WONDER, {
                dataCmp: "MomentOfWonder_GameData",
                dataName: "gameData",
                gameScene: "MomentOfWonder_loading",
                orientation: "portrait",
            }); //奇迹时刻
            //this.gameDataList.set(GAME_ID.REGAL_TIGER,{dataCmp:"RegalTiger_GameData",dataName:"gameData",gameScene:"RegalTiger_loading",orientation:"portrait"});   //老虎
            // this.gameDataList.set(GAME_ID.SLOT_GODOFFIRE,{dataCmp:"SlotMachine_GameData",dataName:"gameData",gameScene:"goldOfFire_loading",orientation:"portrait"});   //火神
            // this.gameDataList.set(GAME_ID.SLOT_QUEENOFSEA,{dataCmp:"queenOfSea_GameData",dataName:"gameData",gameScene:"queenOfSea_loading",orientation:"portrait"});   //美人鱼
            this.gameDataList.set(GAME_ID.JALAPAND_DELIGHT, {
                dataCmp: "JalapandDelight_GameData",
                dataName: "gameData",
                gameScene: "JalapandDelight_loading",
                orientation: "portrait",
            }); //墨西哥帅哥

            //this.gameDataList.set(GAME_ID.DIAMOND_FOREST,{dataCmp:"DiamondForest_GameData",dataName:"gameData",gameScene:"DiamondForest_Loading",orientation:"portrait"});              //钻石森林

            // this.gameDataList.set(GAME_ID.SLOT_KINGOFOLYMPUS,{dataCmp:"SlotMachine_GameData",dataName:"gameData",gameScene:"kingOfOlympus_loading",orientation:"portrait"});   //奥林匹斯国王

            /////=======================================================================
            //配置说明：
            //dataCmp：数据模块文件
            //dataName：类名（兼容旧游戏的参数，可默认gameData）
            //cfgCmp: 游戏配置数据
            //gameScene：loading场景（兼容旧游戏，参数名称就没有修改了）
            //mainScene：游戏场景
            //orientation：游戏横竖屏配置，默认横屏
            this.gameDataList.set(GAME_ID.SLOT_THEMEPARKBLAST, {
                dataCmp: "ThemeParkBlast_GameData",
                dataName: "gameData",
                gameScene: "ThemeParkBlast_loading",
                cfgCmp: "ThemeParkBlast_Cfg",
                mainScene: "ThemeParkBlast",
                orientation: "portrait",
            }); //ThemeParkBlast

            //墨西哥帅哥
            this.gameDataList.set(GAME_ID.JALAPAND_DELIGHT, {
                dataCmp: "JalapanDelight_GameData",
                dataName: "gameData",
                cfgCmp: "JalapandDelight_Cfg",
                gameScene: "JalapandDelight_loading",
                mainScene: "JalapandDelight",
                orientation: "portrait",
            });
            //蒙面英雄
            this.gameDataList.set(GAME_ID.MASKED_HERO, {
                dataCmp: "MaskedHero_GameData",
                dataName: "gameData",
                cfgCmp: "MaskedHero_Cfg",
                gameScene: "MaskedHero_loading",
                mainScene: "MaskedHero",
                orientation: "portrait",
            });
            //幸运蜜蜂
            this.gameDataList.set(GAME_ID.LUCKY_BEE, {
                dataCmp: "LuckyBee_GameData",
                dataName: "gameData",
                cfgCmp: "LuckyBee_Cfg",
                gameScene: "LuckyBee_loading",
                mainScene: "LuckyBee",
                orientation: "portrait",
            });
            //鼠年
            this.gameDataList.set(GAME_ID.YEAR_OF_THE_RAT, {
                dataCmp: "YearOfTheRat_GameData",
                dataName: "gameData",
                cfgCmp: "YearOfTheRat_Cfg",
                gameScene: "YearOfTheRat_loading",
                mainScene: "YearOfTheRat",
                orientation: "portrait",
            });
            // 太阳女神
            this.gameDataList.set(GAME_ID.SLOT_SUNGODDESS, {
                dataCmp: "LMSlots_GameData_Base",
                dataName: "gameData",
                cfgCmp: "SunGoddess_Cfg",
                gameScene: "SunGoddess_loading",
                mainScene: "SunGoddess",
                orientation: "portrait",
            });
            // 宾果猫
            this.gameDataList.set(GAME_ID.SLOT_BINGOMEOW, {
                dataCmp: "LMSlots_GameData_Base",
                dataName: "gameData",
                cfgCmp: "BingoMeow_Cfg",
                gameScene: "BingoMeow_loading",
                mainScene: "BingoMeow",
                orientation: "portrait",
            });
            // 珍宝丛林
            this.gameDataList.set(GAME_ID.SLOT_TREASUREJUNGLE, {
                dataCmp: "LMSlots_GameData_Base",
                dataName: "gameData",
                cfgCmp: "TreasureJungle_Cfg",
                gameScene: "TreasureJungle_loading",
                mainScene: "TreasureJungle",
                orientation: "portrait",
            });
            // 青蛙王子
            this.gameDataList.set(GAME_ID.SLOT_PRINCECHARMING, {
                dataCmp: "LMSlots_GameData_Base",
                dataName: "gameData",
                cfgCmp: "PrinceCharming_Cfg",
                gameScene: "PrinceCharming_loading",
                mainScene: "PrinceCharming",
                orientation: "portrait",
            });
            // 大功率
            this.gameDataList.set(GAME_ID.SLOT_HIGHPOWER, {
                dataCmp: "LMSlots_GameData_Base",
                dataName: "gameData",
                cfgCmp: "HighPower_Cfg",
                gameScene: "HighPower_loading",
                mainScene: "HighPower",
                orientation: "portrait",
            });
            // 辉煌的宝藏
            this.gameDataList.set(GAME_ID.SLOT_BRILLIANTTREASURES, {
                dataCmp: "LMSlots_GameData_Base",
                dataName: "gameData",
                cfgCmp: "BrilliantTreasures_Cfg",
                gameScene: "BrilliantTreasures_loading",
                mainScene: "BrilliantTreasures",
                orientation: "portrait",
            });
            // 猛犸象gems
            this.gameDataList.set(GAME_ID.SLOT_MAMMOTHGRANDGEMS, {
                dataCmp: "LMSlots_GameData_Base",
                dataName: "gameData",
                cfgCmp: "MammothGrandGems_Cfg",
                gameScene: "MammothGrandGems_loading",
                mainScene: "MammothGrandGems",
                orientation: "portrait",
            });
            // 猛犸象
            this.gameDataList.set(GAME_ID.SLOT_MAMMOTHGRAND, {
                dataCmp: "LMSlots_GameData_Base",
                dataName: "gameData",
                cfgCmp: "MammothGrand_Cfg",
                gameScene: "MammothGrand_loading",
                mainScene: "MammothGrand",
                orientation: "portrait",
            });
            // 怪异的万圣节
            this.gameDataList.set(GAME_ID.SLOT_SPOOKYHALLOWEEN, {
                dataCmp: "LMSlots_GameData_Base",
                dataName: "gameData",
                cfgCmp: "SpookyHalloween_Cfg",
                gameScene: "SpookyHalloween_loading",
                mainScene: "SpookyHalloween",
                orientation: "portrait",
            });
            // 石器时代
            this.gameDataList.set(GAME_ID.SLOT_STONEAGEDTREASURE, {
                dataCmp: "LMSlots_GameData_Base",
                dataName: "gameData",
                cfgCmp: "StoneAgedTreasure_Cfg",
                gameScene: "StoneAgedTreasure_loading",
                mainScene: "StoneAgedTreasure",
                orientation: "portrait",
            });
            // 怪物现金
            this.gameDataList.set(GAME_ID.SLOT_MONSTERCASH, {
                dataCmp: "LMSlots_GameData_Base",
                dataName: "gameData",
                cfgCmp: "MonsterCash_Cfg",
                gameScene: "MonsterCash_loading",
                mainScene: "MonsterCash",
                orientation: "portrait",
            });
            // 俩辣椒
            this.gameDataList.set(GAME_ID.SLOT_DOUBLECHILI, {
                dataCmp: "DoubleChili_GameData",
                dataName: "gameData",
                cfgCmp: "DoubleChili_Cfg",
                gameScene: "DoubleChili_loading",
                mainScene: "DoubleChili",
                orientation: "portrait",
            });
            // 玛雅
            this.gameDataList.set(GAME_ID.SLOT_MAYADEORO, {
                dataCmp: "MayaDeoro_GameData",
                dataName: "gameData",
                cfgCmp: "MayaDeoro_Cfg",
                gameScene: "MayaDeoro_loading",
                mainScene: "MayaDeoro",
                orientation: "portrait",
            });
            // 哪吒闹海
            this.gameDataList.set(GAME_ID.SLOT_PRINCENEZHA, {
                dataCmp: "PrinceNeZha_GameData",
                dataName: "gameData",
                cfgCmp: "PrinceNeZha_Cfg",
                gameScene: "PrinceNeZha_loading",
                mainScene: "PrinceNeZha",
                orientation: "portrait",
            });
            // 小猪大劫案
            this.gameDataList.set(GAME_ID.SLOT_PIGGYHEIST, {
                dataCmp: "PiggyHeist_GameData",
                dataName: "gameData",
                cfgCmp: "PiggyHeist_Cfg",
                gameScene: "PiggyHeist_loading",
                mainScene: "PiggyHeist",
                orientation: "portrait",
            });
            // 咆哮的月亮
            this.gameDataList.set(GAME_ID.SLOT_HOWLINGMOON, {
                dataCmp: "HowlingMoon_GameData",
                dataName: "gameData",
                cfgCmp: "HowlingMoon_Cfg",
                gameScene: "HowlingMoon_loading",
                mainScene: "HowlingMoon",
                orientation: "portrait",
            });
            // 外星人杀手
            this.gameDataList.set(GAME_ID.SLOT_ALIENBUSTER, {
                dataCmp: "AlienBuster_GameData",
                dataName: "gameData",
                cfgCmp: "AlienBuster_Cfg",
                gameScene: "AlienBuster_loading",
                mainScene: "AlienBuster",
                orientation: "portrait",
            });
            // 相扑
            this.gameDataList.set(GAME_ID.SLOT_SUMO, {
                dataCmp: "Sumo_GameData",
                dataName: "gameData",
                cfgCmp: "Sumo_Cfg",
                gameScene: "Sumo_loading",
                mainScene: "Sumo",
                orientation: "portrait",
            });
            // 拇指姑娘
            this.gameDataList.set(GAME_ID.SLOT_THUMBELINA, {
                dataCmp: "Thumbelina_GameData",
                dataName: "gameData",
                cfgCmp: "Thumbelina_Cfg",
                gameScene: "Thumbelina_loading",
                mainScene: "Thumbelina",
                orientation: "portrait",
            });
            // 巨龙钻石
            this.gameDataList.set(GAME_ID.SLOT_DRAGONDIAMOND, {
                dataCmp: "DragonDiamond_GameData",
                dataName: "gameData",
                cfgCmp: "DragonDiamond_Cfg",
                gameScene: "DragonDiamond_loading",
                mainScene: "DragonDiamond",
                orientation: "portrait",
            });
            // 妖精爆炸
            this.gameDataList.set(GAME_ID.SLOT_LEPRECHAUNBLAST, {
                dataCmp: "LeprechaunBlast_GameData",
                dataName: "gameData",
                cfgCmp: "LeprechaunBlast_Cfg",
                gameScene: "LeprechaunBlast_loading",
                mainScene: "LeprechaunBlast",
                orientation: "portrait",
            });
            // 美国大亨
            this.gameDataList.set(GAME_ID.SLOT_AMERICANBILLIONAIRE, {
                dataCmp: "AmericanBillionaire_GameData",
                dataName: "gameData",
                cfgCmp: "AmericanBillionaire_Cfg",
                gameScene: "AmericanBillionaire_loading",
                mainScene: "AmericanBillionaire",
                orientation: "portrait",
            });
            // 美女与野兽
            this.gameDataList.set(GAME_ID.SLOT_BEAUTYANDTHEBEAST, {
                dataCmp: "LMSlots_GameData_Base",
                dataName: "gameData",
                cfgCmp: "BeautyAndTheBeast_Cfg",
                gameScene: "BeautyAndTheBeast_loading",
                mainScene: "BeautyAndTheBeast",
                orientation: "portrait",
            });
            // 金猪报喜
            this.gameDataList.set(GAME_ID.SLOT_YEAROFGOLDENPIG, {
                dataCmp: "YearOfGoldenPig_GameData",
                dataName: "gameData",
                cfgCmp: "YearOfGoldenPig_Cfg",
                gameScene: "YearOfGoldenPig_loading",
                mainScene: "YearOfGoldenPig",
                orientation: "portrait",
            });
            // 双倍金块
            this.gameDataList.set(GAME_ID.SLOT_DOUBLENUGGETS, {
                dataCmp: "DoubleNuggets_GameData",
                dataName: "gameData",
                cfgCmp: "DoubleNuggets_Cfg",
                gameScene: "DoubleNuggets_loading",
                mainScene: "DoubleNuggets",
                orientation: "portrait",
            });
            // 双倍神力
            this.gameDataList.set(GAME_ID.SLOT_DOUBLETHUNDER, {
                dataCmp: "DoubleThunder_GameData",
                dataName: "gameData",
                cfgCmp: "DoubleThunder_Cfg",
                gameScene: "DoubleThunder_loading",
                mainScene: "DoubleThunder",
                orientation: "portrait",
            });
            // 啤酒节
            this.gameDataList.set(GAME_ID.SLOT_BEERFESTIVAL, {
                dataCmp: "BeerFestival_GameData",
                dataName: "gameData",
                cfgCmp: "BeerFestival_Cfg",
                gameScene: "BeerFestival_loading",
                mainScene: "BeerFestival",
                orientation: "portrait",
            });
            // 战争女神
            this.gameDataList.set(GAME_ID.SLOT_INVINCIBLEGODDESS, {
                dataCmp: "InvincibleGoddess_GameData",
                dataName: "gameData",
                cfgCmp: "InvincibleGoddess_Cfg",
                gameScene: "InvincibleGoddess_loading",
                mainScene: "InvincibleGoddess",
                orientation: "portrait",
            });
            // 佐罗
            this.gameDataList.set(GAME_ID.SLOT_BIGDUEL, {
                dataCmp: "BigDuel_GameData",
                dataName: "gameData",
                cfgCmp: "BigDuel_Cfg",
                gameScene: "BigDuel_loading",
                mainScene: "BigDuel",
                orientation: "portrait",
            });
            // 间谍
            this.gameDataList.set(GAME_ID.SLOT_DOUBLEAGENT, {
                dataCmp: "DoubleAgent_GameData",
                dataName: "gameData",
                cfgCmp: "DoubleAgent_Cfg",
                gameScene: "DoubleAgent_loading",
                mainScene: "DoubleAgent",
                orientation: "portrait",
            });
            // 招财猫
            this.gameDataList.set(GAME_ID.SLOT_LUCKYCAT, {
                dataCmp: "LuckyCat_GameData",
                dataName: "gameData",
                cfgCmp: "LuckyCat_Cfg",
                gameScene: "LuckyCat_Loading",
                mainScene: "LuckyCat",
                orientation: "portrait",
            });
            // 吸血鬼
            this.gameDataList.set(GAME_ID.SLOT_VAMPIRECOUNT, {
                dataCmp: "LMSlots_GameData_Base",
                dataName: "gameData",
                cfgCmp: "VampireCount_Cfg",
                gameScene: "VampireCount_loading",
                mainScene: "VampireCount",
                orientation: "portrait",
            });
            // 酒馆女巫
            this.gameDataList.set(GAME_ID.SLOT_TAVERNWITCH, {
                dataCmp: "TavernWitch_GameData",
                dataName: "gameData",
                cfgCmp: "TavernWitch_Cfg",
                gameScene: "TavernWitch_loading",
                mainScene: "TavernWitch",
                orientation: "portrait",
            });
            // 宫本武藏
            this.gameDataList.set(GAME_ID.SLOT_BLADEMASTERTOKUGAWA, {
                dataCmp: "BladeMasterTokugawa_GameData",
                dataName: "gameData",
                cfgCmp: "BladeMasterTokugawa_Cfg",
                gameScene: "BladeMasterTokugawa_loading",
                mainScene: "BladeMasterTokugawa",
                orientation: "portrait",
            });
            // 织田信长
            this.gameDataList.set(GAME_ID.SLOT_SIXTHDAYTHEDEMON, {
                dataCmp: "SixthDayTheDemon_GameData",
                dataName: "gameData",
                cfgCmp: "SixthDayTheDemon_Cfg",
                gameScene: "SixthDayTheDemon_loading",
                mainScene: "SixthDayTheDemon",
                orientation: "portrait",
            });
            // 服部半藏
            this.gameDataList.set(GAME_ID.SLOT_THEMAGICHANZO, {
                dataCmp: "TheMagicHanzo_GameData",
                dataName: "gameData",
                cfgCmp: "TheMagicHanzo_Cfg",
                gameScene: "TheMagicHanzo_loading",
                mainScene: "TheMagicHanzo",
                orientation: "portrait",
            });
            // 源义经
            this.gameDataList.set(GAME_ID.SLOT_MINAMOTONOYOSHITSUNE, {
                dataCmp: "LMSlots_GameData_Base",
                dataName: "gameData",
                cfgCmp: "MinamotoNoYoshitsune_Cfg",
                gameScene: "MinamotoNoYoshitsune_loading",
                mainScene: "MinamotoNoYoshitsune",
                orientation: "portrait",
            });
            // 黑帮教父
            this.gameDataList.set(GAME_ID.SLOT_GANGSTERGODFATHER, {
                dataCmp: "GangsterGodfather_GameData",
                dataName: "gameData",
                cfgCmp: "GangsterGodfather_Cfg",
                gameScene: "GangsterGodfather_loading",
                mainScene: "GangsterGodfather",
                orientation: "portrait",
            });
            // 发明之父
            this.gameDataList.set(GAME_ID.SLOT_FATHEROFINVENTION, {
                dataCmp: "LMSlots_GameData_Base",
                dataName: "gameData",
                cfgCmp: "FatherOfInvention_Cfg",
                gameScene: "FatherOfInvention_loading",
                mainScene: "FatherOfInvention",
                orientation: "portrait",
            });
            // 西部牛仔
            this.gameDataList.set(GAME_ID.SLOT_WESTCOWBOY, {
                dataCmp: "WestCowboy_GameData",
                dataName: "gameData",
                cfgCmp: "WestCowboy_Cfg",
                gameScene: "WestCowboy_loading",
                mainScene: "WestCowboy",
                orientation: "portrait",
            });
            // 德川家康
            this.gameDataList.set(GAME_ID.SLOT_RISINGSUNTHEGREATKING, {
                dataCmp: "RisingSunTheGreatKing_GameData",
                dataName: "gameData",
                cfgCmp: "RisingSunTheGreatKing_Cfg",
                gameScene: "RisingSunTheGreatKing_loading",
                mainScene: "RisingSunTheGreatKing",
                orientation: "portrait",
            });
            // 丰臣秀吉
            this.gameDataList.set(GAME_ID.SLOT_POLITICALSTRATEGIST, {
                dataCmp: "PoliticalStrategist_GameData",
                dataName: "gameData",
                cfgCmp: "PoliticalStrategist_Cfg",
                gameScene: "PoliticalStrategist_loading",
                mainScene: "PoliticalStrategist",
                orientation: "portrait",
            });
            // 花木兰
            this.gameDataList.set(GAME_ID.SLOT_MULAN, {
                dataCmp: "Mulan_GameData",
                dataName: "gameData",
                cfgCmp: "Mulan_Cfg",
                gameScene: "Mulan_loading",
                mainScene: "Mulan",
                orientation: "portrait",
            });
            // 成吉思汗
            this.gameDataList.set(GAME_ID.SLOT_GENGHISKHAN, {
                dataCmp: "GenghisKhan_GameData",
                dataName: "gameData",
                cfgCmp: "GenghisKhan_Cfg",
                gameScene: "GenghisKhan_loading",
                mainScene: "GenghisKhan",
                orientation: "portrait",
            });
            // 半人马
            this.gameDataList.set(GAME_ID.SLOT_THECENTAUR, {
                dataCmp: "TheCentaur_GameData",
                dataName: "gameData",
                cfgCmp: "TheCentaur_Cfg",
                gameScene: "TheCentaur_loading",
                mainScene: "TheCentaur",
                orientation: "portrait",
            });
            // 嫦娥
            this.gameDataList.set(GAME_ID.SLOT_CHANGE, {
                dataCmp: "Change_GameData",
                dataName: "gameData",
                cfgCmp: "Change_Cfg",
                gameScene: "Change_loading",
                mainScene: "Change",
                orientation: "portrait",
            });
            // 外星怪物
            this.gameDataList.set(GAME_ID.SLOT_ALIENMONSTER, {
                dataCmp: "AlienMonster_GameData",
                dataName: "gameData",
                cfgCmp: "AlienMonster_Cfg",
                gameScene: "AlienMonster_loading",
                mainScene: "AlienMonster",
                orientation: "portrait",
            });
            // 篮球之王
            this.gameDataList.set(GAME_ID.SLOT_BASKETBALLKING, {
                dataCmp: "BasketballKing_GameData",
                dataName: "gameData",
                cfgCmp: "BasketballKing_Cfg",
                gameScene: "BasketballKing_loading",
                mainScene: "BasketballKing",
                orientation: "portrait",
            });
            // 日本歌姬
            this.gameDataList.set(GAME_ID.SLOT_JAPANESESINGER, {
                dataCmp: "JapaneseSinger_GameData",
                dataName: "gameData",
                cfgCmp: "JapaneseSinger_Cfg",
                gameScene: "JapaneseSinger_loading",
                mainScene: "JapaneseSinger",
                orientation: "portrait",
            });
            // 麒麟
            this.gameDataList.set(GAME_ID.SLOT_NEWKYLIN, {
                dataCmp: "NewKylin_GameData",
                dataName: "gameData",
                cfgCmp: "NewKylin_Cfg",
                gameScene: "NewKylin_loading",
                mainScene: "NewKylin",
                orientation: "portrait",
            });
            // 奥德修斯
            this.gameDataList.set(GAME_ID.SLOT_ODYSSEUS, {
                dataCmp: "Odysseus_GameData",
                dataName: "gameData",
                cfgCmp: "Odysseus_Cfg",
                gameScene: "Odysseus_loading",
                mainScene: "Odysseus",
                orientation: "portrait",
            });
            // 豌豆公主
            this.gameDataList.set(GAME_ID.SLOT_PRINCESSPEA, {
                dataCmp: "PrincessPea_GameData",
                dataName: "gameData",
                cfgCmp: "PrincessPea_Cfg",
                gameScene: "PrincessPea_loading",
                mainScene: "PrincessPea",
                orientation: "portrait",
            });
            // 赫拉
            this.gameDataList.set(GAME_ID.SLOT_HERA, {
                dataCmp: "LMSlots_GameData_Base",
                dataName: "gameData",
                cfgCmp: "Hera_Cfg",
                gameScene: "Hera_loading",
                mainScene: "Hera",
                orientation: "portrait",
            });

            //苏轼的情人
            this.gameDataList.set(GAME_ID.SUSHI_LOVER, {
                dataCmp: "SushiLover_GameData",
                dataName: "gameData",
                cfgCmp: "SushiLover_Cfg",
                gameScene: "SushiLover_Loading",
                mainScene: "SushiLover",
                orientation: "portrait",
            });

            //财富精灵
            this.gameDataList.set(GAME_ID.FORTUNE_GENIE, {
                dataCmp: "FortuneGenie_GameData",
                dataName: "gameData",
                cfgCmp: "FortuneGenie_Cfg",
                gameScene: "fortuneGenie_Loading",
                mainScene: "fortuneGenie",
                orientation: "portrait",
            });

            //美人鱼-海皇后
            this.gameDataList.set(GAME_ID.SLOT_QUEENOFSEA, {
                dataCmp: "queenSea_GameData",
                dataName: "gameData",
                cfgCmp: "queenSea_Cfg",
                gameScene: "queenOfSea_loading",
                mainScene: "queenOfSea",
                orientation: "portrait",
            });

            //海盗船
            this.gameDataList.set(GAME_ID.GOLD_ISLAND_TREASURE, {
                dataCmp: "goldTreasure_GameData",
                dataName: "gameData",
                cfgCmp: "goldTreasure_Cfg",
                gameScene: "goldTreasure_loading",
                mainScene: "goldTreasure",
                orientation: "portrait",
            });

            this.gameDataList.set(GAME_ID.SLOT_SUPER_WICKED_BLAST, {
                dataCmp: "SuperWickedBlast_GameData",
                dataName: "gameData",
                gameScene: "SuperWickedBlast_loading",
                orientation: "portrait",
            }); //小恶魔

            //野马
            this.gameDataList.set(GAME_ID.THUNDER_MUSTANG, {
                dataCmp: "ThunderMustang_GameData",
                dataName: "gameData",
                cfgCmp: "ThunderMustang_Cfg",
                gameScene: "ThunderMustang_loading",
                mainScene: "ThunderMustang",
                orientation: "portrait",
            });

            //神龙
            this.gameDataList.set(GAME_ID.POWER_DRAGON, {
                dataCmp: "PowerDragon_GameData",
                dataName: "gameData",
                cfgCmp: "PowerDragon_Cfg",
                gameScene: "PowerDragon_loading",
                mainScene: "PowerDragon",
                orientation: "portrait",
            });

            //小恶魔
            this.gameDataList.set(GAME_ID.SLOT_SUPER_WICKED_BLAST, {
                dataCmp: "SuperWickedBlast_GameData",
                dataName: "gameData",
                cfgCmp: "SuperWickedBlast_Cfg",
                gameScene: "SuperWickedBlast_loading",
                mainScene: "SuperWickedBlast",
                orientation: "portrait",
            });

            //圣诞老人
            this.gameDataList.set(GAME_ID.HOLIDAY_FRENZY, {
                dataCmp: "holidayFrenzy_GameData",
                dataName: "gameData",
                cfgCmp: "holidayFrenzy_Cfg",
                gameScene: "holidayFrenzy_loading",
                mainScene: "holidayFrenzy",
                orientation: "portrait",
            });

            // 泰山
            this.gameDataList.set(GAME_ID.JUNGLE_KING, {
                dataCmp: "JungleKing_GameData",
                dataName: "gameData",
                cfgCmp: "JungleKing_Cfg",
                gameScene: "JungleKing_loading",
                mainScene: "JungleKing",
                orientation: "portrait",
            });

            //吸烟狗
            this.gameDataList.set(GAME_ID.SLOT_SMOKINGHOTPICHES, {
                dataCmp: "SmokingHotPiches_GameData",
                dataName: "gameData",
                cfgCmp: "SmokingHotPiches_Cfg",
                gameScene: "SmokingHotPiches_loading",
                mainScene: "SmokingHotPiches",
                orientation: "portrait",
            });

            //美杜莎
            this.gameDataList.set(GAME_ID.SLOT_RISINGMEDUSA, {
                dataCmp: "RisingMedusa_GameData",
                dataName: "gameData",
                cfgCmp: "RisingMedusa_Cfg",
                gameScene: "RisingMedusa_loading",
                mainScene: "RisingMedusa",
                orientation: "portrait",
            });

            //快速开火
            this.gameDataList.set(GAME_ID.SPEED_FIRE, {
                dataCmp: "SpeedFire_GameData",
                dataName: "gameData",
                cfgCmp: "SpeedFire_Cfg",
                gameScene: "SpeedFire_Loading",
                mainScene: "SpeedFire",
                orientation: "portrait",
            });

            // 开派对
            this.gameDataList.set(GAME_ID.LET_IS_PARTY, {
                dataCmp: "LetIsParty_GameData",
                dataName: "gameData",
                cfgCmp: "LetIsParty_Cfg",
                gameScene: "LetIsParty_loading",
                mainScene: "LetIsParty",
                orientation: "portrait",
            });

            // 摇滚迪斯科
            this.gameDataList.set(GAME_ID.SLOT_ROCKING_DISCO, {
                dataCmp: "RockingDisco_GameData",
                dataName: "gameData",
                cfgCmp: "RockingDisco_Cfg",
                gameScene: "RockingDisco_loading",
                mainScene: "RockingDisco",
                orientation: "portrait",
            });

            // 宇航员
            this.gameDataList.set(GAME_ID.ADVENTURE_IN_SPACE, {
                dataCmp: "AdventureInSpace_GameData",
                dataName: "gameData",
                cfgCmp: "AdventureInSpace_Cfg",
                gameScene: "AdventureInSpace_loading",
                mainScene: "AdventureInSpace",
                orientation: "portrait",
            });
            //大双子星
            this.gameDataList.set(GAME_ID.SLOT_GRANDGEMINI, {
                dataCmp: "GrandGemini_GameData",
                dataName: "gameData",
                cfgCmp: "GrandGemini_Cfg",
                gameScene: "GrandGemini_loading",
                mainScene: "GrandGemini",
                orientation: "portrait",
            });

            //丘比特
            this.gameDataList.set(GAME_ID.SLOT_CUPIDISCRUSH, {
                dataCmp: "CupidIsCrush_GameData",
                dataName: "gameData",
                cfgCmp: "CupidIsCrush_Cfg",
                gameScene: "CupidIsCrush_loading",
                mainScene: "CupidIsCrush",
                orientation: "portrait",
            });

            //丘比特大
            this.gameDataList.set(GAME_ID.SLOT_CUPIDCRUSHDELUXE, {
                dataCmp: "CupidCrushDeluxe_GameData",
                dataName: "gameData",
                cfgCmp: "CupidCrushDeluxe_Cfg",
                gameScene: "CupidCrushDeluxe_loading",
                mainScene: "CupidCrushDeluxe",
                orientation: "portrait",
            });

            //幸运财神
            this.gameDataList.set(GAME_ID.SLOT_FORTUNEWILDDELUXE, {
                dataCmp: "FortuneWildDeluxe_GameData",
                dataName: "gameData",
                cfgCmp: "FortuneWildDeluxe_Cfg",
                gameScene: "FortuneWildDeluxe_loading",
                mainScene: "FortuneWildDeluxe",
                orientation: "portrait",
            });

            //糖果冲突
            this.gameDataList.set(GAME_ID.SLOT_CANDY_CLASH, {
                dataCmp: "CandyClash_GameData",
                dataName: "gameData",
                cfgCmp: "CandyClash_Cfg",
                gameScene: "CandyClash_loading",
                mainScene: "CandyClash",
                orientation: "portrait",
            });

            //灿烂的岛屿
            this.gameDataList.set(GAME_ID.SLOT_SPLENDID_ISLAND, {
                dataCmp: "SplendidIsland_GameData",
                dataName: "gameData",
                cfgCmp: "SplendidIsland_Cfg",
                gameScene: "SplendidIsland_loading",
                mainScene: "SplendidIsland",
                orientation: "portrait",
            });

            //灿烂的岛屿大
            this.gameDataList.set(GAME_ID.SLOT_SPLENDIDISLAND_DELUXE, {
                dataCmp: "SplendidIslandDeluxe_GameData",
                dataName: "gameData",
                cfgCmp: "SplendidIslandDeluxe_Cfg",
                gameScene: "SplendidIslandDeluxe_loading",
                mainScene: "SplendidIslandDeluxe",
                orientation: "portrait",
            });

            //东部财富
            this.gameDataList.set(GAME_ID.SLOT_EASTERNRICHES, {
                dataCmp: "EasternRiches_GameData",
                dataName: "gameData",
                cfgCmp: "EasternRiches_Cfg",
                gameScene: "EasternRiches_loading",
                mainScene: "EasternRiches",
                orientation: "portrait",
            });

            //奥林匹斯国王
            this.gameDataList.set(GAME_ID.SLOT_KINGOFOLYMPUS, {
                dataCmp: "KingOfOlympus_GameData",
                dataName: "gameData",
                cfgCmp: "KingOfOlympus_Cfg",
                gameScene: "KingOfOlympus_loading",
                mainScene: "KingOfOlympus",
                orientation: "portrait",
            });
            //宙斯
            this.gameDataList.set(GAME_ID.SLOT_ZUES, {
                dataCmp: "Zues_GameData",
                dataName: "gameData",
                cfgCmp: "Zues_Cfg",
                gameScene: "Zues_loading",
                mainScene: "Zues",
                orientation: "portrait",
            });

            //火神
            this.gameDataList.set(GAME_ID.SLOT_GODOFFIRE, {
                dataCmp: "GodOfFire_GameData",
                dataName: "gameData",
                cfgCmp: "GodOfFire_Cfg",
                gameScene: "GodOfFire_loading",
                mainScene: "GodOfFire",
                orientation: "portrait",
            });

            //华丽的埃及延后
            this.gameDataList.set(GAME_ID.GORGEOUS_CLEOPATRA, {
                dataCmp: "GorgeouscLeopatra_GameData",
                dataName: "gameData",
                cfgCmp: "GorgeouscLeopatra_Cfg",
                gameScene: "Gorgeouscleopatra_Loading",
                mainScene: "Gorgeouscleopatra",
                orientation: "portrait",
            });

            //财富宫
            this.gameDataList.set(GAME_ID.SLOT_FORTUNEGONG, {
                dataCmp: "FortuneGong_GameData",
                dataName: "gameData",
                cfgCmp: "FortuneGong_Cfg",
                gameScene: "FortuneGong_loading",
                mainScene: "FortuneGong",
                orientation: "portrait",
            });

            //埃及幻想
            this.gameDataList.set(GAME_ID.SLOT_EGYPTIAN_FANTASY, {
                dataCmp: "EgyptianFantasy_GameData",
                dataName: "gameData",
                cfgCmp: "EgyptianFantasy_Cfg",
                gameScene: "EgyptianFantasy_loading",
                mainScene: "EgyptianFantasy",
                orientation: "portrait",
            });

            //熊猫Panda
            this.gameDataList.set(GAME_ID.MAJESTIC_PANDA, {
                dataCmp: "Panda_GameData",
                dataName: "gameData",
                cfgCmp: "Panda_Cfg",
                gameScene: "Panda_Loading",
                mainScene: "Panda",
                orientation: "portrait",
            });

            // 糖果魔术
            this.gameDataList.set(GAME_ID.CANDY_MAGIC, {
                dataCmp: "CandyMagic_GameData",
                dataName: "gameData",
                cfgCmp: "CandyMagic_Cfg",
                gameScene: "CandyMagic_loading",
                mainScene: "CandyMagic",
                orientation: "portrait",
            });

            //命运之豪华邮轮
            this.gameDataList.set(GAME_ID.SLOT_FORTUNEWHEELDELUXE, {
                dataCmp: "FortuneWheelDeluxe_GameData",
                dataName: "gameData",
                cfgCmp: "FortuneWheelDeluxe_Cfg",
                gameScene: "FortuneWheelDeluxe_loading",
                mainScene: "FortuneWheelDeluxe",
                orientation: "portrait",
            });

            //slots塔
            this.gameDataList.set(GAME_ID.SLOTS_TOWER, {
                dataCmp: "SlotsTower_GameData",
                dataName: "gameData",
                cfgCmp: "SlotsTower_Cfg",
                gameScene: "SlotsTower_Loading",
                mainScene: "SlotsTower",
                orientation: "portrait",
            });

            //马戏嘉年华
            this.gameDataList.set(GAME_ID.SLOT_CRICUS_CARNIVAL, {
                dataCmp: "CircusCarnival_GameData",
                dataName: "gameData",
                cfgCmp: "CircusCarnival_Cfg",
                gameScene: "CircusCarnival_loading",
                mainScene: "CircusCarnival",
                orientation: "portrait",
            });

            // 打鼓
            this.gameDataList.set(GAME_ID.HOT_HOT_DRUMS, {
                dataCmp: "HotHotDrums_GameData",
                dataName: "gameData",
                cfgCmp: "HotHotDrums_Cfg",
                gameScene: "HotHotDrums_loading",
                mainScene: "HotHotDrums",
                orientation: "portrait",
            });

            //快速白金支付
            this.gameDataList.set(GAME_ID.SLOT_RAPID_PLATINUM_PAY, {
                dataCmp: "RapidPlatinumPay_GameData",
                dataName: "gameData",
                cfgCmp: "RapidPlatinumPay_Cfg",
                gameScene: "RapidPlatinumPay_loading",
                mainScene: "RapidPlatinumPay",
                orientation: "portrait",
            });

            //钻石森林
            this.gameDataList.set(GAME_ID.DIAMOND_FOREST, {
                dataCmp: "DiamondForest_GameData",
                dataName: "gameData",
                cfgCmp: "DiamondForest_Cfg",
                gameScene: "DiamondForest_Loading",
                mainScene: "DiamondForest2",
                orientation: "portrait",
            });

            // 啤酒馆
            this.gameDataList.set(GAME_ID.SLOT_BEER_HALL, {
                dataCmp: "BeerHall_GameData",
                dataName: "gameData",
                cfgCmp: "BeerHall_Cfg",
                gameScene: "BeerHall_loading",
                mainScene: "BeerHall",
                orientation: "portrait",
            });
            //太空猫
            this.gameDataList.set(GAME_ID.SLOT_SPACE_CAT, {
                dataCmp: "SpaceCat_GameData",
                dataName: "gameData",
                cfgCmp: "SpaceCat_Cfg",
                gameScene: "SpaceCat_loading",
                mainScene: "SpaceCat",
                orientation: "portrait",
            });
            //奇迹时刻
            this.gameDataList.set(GAME_ID.SLOT_MOMENT_OF_WONDER, {
                dataCmp: "MomentOfWonder_GameData",
                dataName: "gameData",
                cfgCmp: "MomentOfWonder_Cfg",
                gameScene: "MomentOfWonder_loading",
                mainScene: "MomentOfWonder",
                orientation: "portrait",
            });
            // 邦妮和克莱德
            this.gameDataList.set(GAME_ID.SLOT_BONIE_CLYDE, {
                dataCmp: "BonieClyde_GameData",
                dataName: "gameData",
                cfgCmp: "BonieClyde_Cfg",
                gameScene: "BonieClyde_loading",
                mainScene: "BonieClyde",
                orientation: "portrait",
            });

            // 老虎
            this.gameDataList.set(GAME_ID.REGAL_TIGER, {
                dataCmp: "RegalTiger_GameData",
                dataName: "gameData",
                cfgCmp: "RegalTiger_Cfg",
                gameScene: "RegalTiger2_Loading",
                mainScene: "RegalTiger2",
                orientation: "portrait",
            });

            // 圣诞老人在哪里
            this.gameDataList.set(GAME_ID.SLOT_WHEREISSANTACLAUS, {
                dataCmp: "WhereIsSantaClaus_GameData",
                dataName: "gameData",
                cfgCmp: "WhereIsSantaClaus_Cfg",
                gameScene: "WhereIsSantaClaus_loading",
                mainScene: "WhereIsSantaClaus",
                orientation: "portrait",
            });

            // 妖精银币
            this.gameDataList.set(GAME_ID.SLOT_LEPRECHAUNCOINS, {
                dataCmp: "LeprechaunCoins_GameData",
                dataName: "gameData",
                cfgCmp: "LeprechaunCoins_Cfg",
                gameScene: "LeprechaunCoins_Loading",
                mainScene: "LeprechaunCoins",
                orientation: "portrait",
            });

            // 鹈鹕的探索
            this.gameDataList.set(GAME_ID.SLOT_PELICAN_QUEST, {
                dataCmp: "PelicanQuest_GameData",
                dataName: "gameData",
                cfgCmp: "PelicanQuest_Cfg",
                gameScene: "PelicanQuest_loading",
                mainScene: "PelicanQuest",
                orientation: "portrait",
            });

            // 冰狼
            this.gameDataList.set(GAME_ID.ICYWOLF, {
                dataCmp: "IcyWolf_GameData",
                dataName: "gameData",
                cfgCmp: "IcyWolf_Cfg",
                gameScene: "IcyWolf_Loading",
                mainScene: "IcyWolf",
                orientation: "portrait",
            });

            // 僵尸国度
            this.gameDataList.set(GAME_ID.SLOT_ZOMBLE_NATION, {
                dataCmp: "ZombleNation_GameData",
                dataName: "gameData",
                cfgCmp: "ZombleNation_Cfg",
                gameScene: "ZombleNation_loading",
                mainScene: "ZombleNation",
                orientation: "portrait",
            });

            // 皇家小犬
            this.gameDataList.set(GAME_ID.SLOT_ROYALPUPPIES, {
                dataCmp: "RoyalPuppies_GameData",
                dataName: "gameData",
                cfgCmp: "RoyalPuppies_Cfg",
                gameScene: "RoyalPuppies_loading",
                mainScene: "RoyalPuppies",
                orientation: "portrait",
            });

            // 埃及崛起
            this.gameDataList.set(GAME_ID.SLOT_RISEOFEGYPT, {
                dataCmp: "RiseOfEgypt_GameData",
                dataName: "gameData",
                cfgCmp: "RiseOfEgypt_Cfg",
                gameScene: "RiseOfEgypt_loading",
                mainScene: "RiseOfEgypt",
                orientation: "portrait",
            });

            // 豪华财富列车
            this.gameDataList.set(GAME_ID.SLOT_FORTUNETRAINDELUXE, {
                dataCmp: "FortuneTrainDeluxe_GameData",
                dataName: "gameData",
                cfgCmp: "FortuneTrainDeluxe_Cfg",
                gameScene: "FortuneTrainDeluxe_loading",
                mainScene: "FortuneTrainDeluxe",
                orientation: "portrait",
            });

            // 强大的亚特兰蒂斯
            this.gameDataList.set(GAME_ID.SLOT_MIGHTYATLANTIS, {
                dataCmp: "MightyAtlantis_GameData",
                dataName: "gameData",
                cfgCmp: "MightyAtlantis_Cfg",
                gameScene: "MightyAtlantis_loading",
                mainScene: "MightyAtlantis",
                orientation: "portrait",
            });

            // 梦幻岛之旅
            this.gameDataList.set(GAME_ID.SLOT_NEVERLANDFANTASY, {
                dataCmp: "NeverlandFantasy_GameData",
                dataName: "gameData",
                cfgCmp: "NeverlandFantasy_Cfg",
                gameScene: "NeverlandFantasy_loading",
                mainScene: "NeverlandFantasy",
                orientation: "portrait",
            });

            // 富贵熊猫
            this.gameDataList.set(GAME_ID.SLOT_WEALTHOFPANDA, {
                dataCmp: "WealthOfPanda_GameData",
                dataName: "gameData",
                cfgCmp: "WealthOfPanda_Cfg",
                gameScene: "WealthOfPanda_loading",
                mainScene: "WealthOfPanda",
                orientation: "portrait",
            });

            // 魔法球
            this.gameDataList.set(GAME_ID.SLOT_MAGICORB, {
                dataCmp: "MagicOrb_GameData",
                dataName: "gameData",
                cfgCmp: "MagicOrb_Cfg",
                gameScene: "MagicOrb_loading",
                mainScene: "MagicOrb",
                orientation: "portrait",
            });

            // 袋鼠
            this.gameDataList.set(GAME_ID.SLOT_KANGAROOS, {
                dataCmp: "Kangaroos_GameData",
                dataName: "gameData",
                cfgCmp: "Kangaroos_Cfg",
                gameScene: "Kangaroos_loading",
                mainScene: "Kangaroos",
                orientation: "portrait",
            });

            // 富贵树
            this.gameDataList.set(GAME_ID.SLOT_FORTUNETREE, {
                dataCmp: "FortuneTree_GameData",
                dataName: "gameData",
                cfgCmp: "FortuneTree_Cfg",
                gameScene: "FortuneTree_loading",
                mainScene: "FortuneTree",
                orientation: "portrait",
            });

            // 狮子大奖
            this.gameDataList.set(GAME_ID.SLOT_THELIONSJACKPOT, {
                dataCmp: "TheLionsjackpot_GameData",
                dataName: "gameData",
                cfgCmp: "TheLionsjackpot_Cfg",
                gameScene: "TheLionsjackpot_loading",
                mainScene: "TheLionsjackpot",
                orientation: "portrait",
            });

            // 火山的愤怒
            this.gameDataList.set(GAME_ID.SLOT_VOLCANOFURY, {
                dataCmp: "VolcanoFury_GameData",
                dataName: "gameData",
                cfgCmp: "VolcanoFury_Cfg",
                gameScene: "VolcanoFury_loading",
                mainScene: "VolcanoFury",
                orientation: "portrait",
            });

            // 航海宝藏
            this.gameDataList.set(GAME_ID.SLOT_CAPTAINJACKPOT, {
                dataCmp: "CaptainJackpot_GameData",
                dataName: "gameData",
                cfgCmp: "CaptainJackpot_Cfg",
                gameScene: "CaptainJackpot_loading",
                mainScene: "CaptainJackpot",
                orientation: "portrait",
            });

            // 花木兰
            this.gameDataList.set(GAME_ID.SLOT_HEROINEMULAN, {
                dataCmp: "HeroineMulan_GameData",
                dataName: "gameData",
                cfgCmp: "HeroineMulan_Cfg",
                gameScene: "HeroineMulan_loading",
                mainScene: "HeroineMulan",
                orientation: "portrait",
            });

            // 西伯利亚之王
            this.gameDataList.set(GAME_ID.SLOT_KINGOFSIBERIAN, {
                dataCmp: "KingOfSiberian_GameData",
                dataName: "gameData",
                cfgCmp: "KingOfSiberian_Cfg",
                gameScene: "KingOfSiberian_loading",
                mainScene: "KingOfSiberian",
                orientation: "portrait",
            });

            // 奥兹传奇
            this.gameDataList.set(GAME_ID.SLOT_LEGENDOFOZ, {
                dataCmp: "LegendOfOz_GameData",
                dataName: "gameData",
                cfgCmp: "LegendOfOz_Cfg",
                gameScene: "LegendOfOz_loading",
                mainScene: "LegendOfOz",
                orientation: "portrait",
            });

            // 南岛寻宝
            this.gameDataList.set(GAME_ID.SLOT_ULTIMATETIKILINK, {
                dataCmp: "UltimateTikiLink_GameData",
                dataName: "gameData",
                cfgCmp: "UltimateTikiLink_Cfg",
                gameScene: "UltimateTikiLink_loading",
                mainScene: "UltimateTikiLink",
                orientation: "portrait",
            });

            // 费安妮秀
            this.gameDataList.set(GAME_ID.SLOT_FEANNIESHOW, {
                dataCmp: "FeannieShow_GameData",
                dataName: "gameData",
                cfgCmp: "FeannieShow_Cfg",
                gameScene: "FeannieShow_loading",
                mainScene: "FeannieShow",
                orientation: "portrait",
            });

            // 克拉肯之力
            this.gameDataList.set(GAME_ID.SLOT_POWEROFTHEKRAKEN, {
                dataCmp: "PowerOfTheKraken_GameData",
                dataName: "gameData",
                cfgCmp: "PowerOfTheKraken_Cfg",
                gameScene: "PowerOfTheKraken_loading",
                mainScene: "PowerOfTheKraken",
                orientation: "portrait",
            });

            // 大型金库亿万富翁
            this.gameDataList.set(GAME_ID.SLOT_MEGA_VAULT_BILLIONAIRE, {
                dataCmp: "MegaVaultBillionaire_GameData",
                dataName: "gameData",
                cfgCmp: "MegaVaultBillionaire_Cfg",
                gameScene: "MegaVaultBillionaire_loading",
                mainScene: "MegaVaultBillionaire",
                orientation: "portrait",
            });

            // 青蛙王子大
            this.gameDataList.set(GAME_ID.SLOT_PRINCE_CHARMING_DELUXE, {
                dataCmp: "PrinceCharmingDeluxe_GameData",
                dataName: "gameData",
                cfgCmp: "PrinceCharmingDeluxe_Cfg",
                gameScene: "PrinceCharmingDeluxe_loading",
                mainScene: "PrinceCharmingDeluxe",
                orientation: "portrait",
            });
            // 花木兰
            this.gameDataList.set(GAME_ID.SLOT_FEAMIN_QUEEN, {
                dataCmp: "FeaminQueen_GameData",
                dataName: "gameData",
                cfgCmp: "FeaminQueen_Cfg",
                gameScene: "FeaminQueen_loading",
                mainScene: "FeaminQueen",
                orientation: "portrait",
            });

            // 雷神索尔
            this.gameDataList.set(GAME_ID.SLOT_LORDOFTHUNDER, {
                dataCmp: "LordOfThunder_GameData",
                dataName: "gameData",
                cfgCmp: "LordOfThunder_Cfg",
                gameScene: "LordOfThunder_loading",
                mainScene: "LordOfThunder",
                orientation: "portrait",
            });

            // 埃及艳后
            this.gameDataList.set(GAME_ID.SLOT_G_CLEOPATRA, {
                dataCmp: "G_Cleopatra_GameData",
                dataName: "gameData",
                cfgCmp: "G_Cleopatra_Cfg",
                gameScene: "G_Cleopatra_loading",
                mainScene: "G_Cleopatra",
                orientation: "portrait",
            });

            // 圣女贞德
            this.gameDataList.set(GAME_ID.SLOT_LEGENDOFJOANOFARC, {
                dataCmp: "LegendOfJoanOfArc_GameData",
                dataName: "gameData",
                cfgCmp: "LegendOfJoanOfArc_Cfg",
                gameScene: "LegendOfJoanOfArc_loading",
                mainScene: "LegendOfJoanOfArc",
                orientation: "portrait",
            });

            // 死神海拉
            this.gameDataList.set(GAME_ID.SLOT_GODDESSOFDEATH, {
                dataCmp: "GoddessOfDeath_GameData",
                dataName: "gameData",
                cfgCmp: "GoddessOfDeath_Cfg",
                gameScene: "GoddessOfDeath_loading",
                mainScene: "GoddessOfDeath",
                orientation: "portrait",
            });

            // 光明精灵
            this.gameDataList.set(GAME_ID.SLOT_ELVESBLESSING, {
                dataCmp: "ElvesBlessing_GameData",
                dataName: "gameData",
                cfgCmp: "ElvesBlessing_Cfg",
                gameScene: "ElvesBlessing_Loading",
                mainScene: "ElvesBlessing",
                orientation: "portrait",
            });

            // 撒旦
            this.gameDataList.set(GAME_ID.SLOT_THEEVIL, {
                dataCmp: "TheEvil_GameData",
                dataName: "gameData",
                cfgCmp: "TheEvil_Cfg",
                gameScene: "TheEvil_loading",
                mainScene: "TheEvil",
                orientation: "portrait",
            });

            // 亚瑟
            this.gameDataList.set(GAME_ID.SLOT_THEROUNDTABLEKNIGHTSEXPLORE, {
                dataCmp: "TheRoundTableKnightsExplore_GameData",
                dataName: "gameData",
                cfgCmp: "TheRoundTableKnightsExplore_Cfg",
                gameScene: "TheRoundTableKnightsExplore_loading",
                mainScene: "TheRoundTableKnightsExplore",
                orientation: "portrait",
            });

            // 奥丁
            this.gameDataList.set(GAME_ID.SLOT_ODINSANGER, {
                dataCmp: "LMSlots_GameData_Base",
                dataName: "gameData",
                cfgCmp: "OdinsAnger_Cfg",
                gameScene: "OdinsAnger_loading",
                mainScene: "OdinsAnger",
                orientation: "portrait",
            });

            // 凯撒
            this.gameDataList.set(GAME_ID.SLOT_LORDCAESAR, {
                dataCmp: "LordCaesar_GameData",
                dataName: "gameData",
                cfgCmp: "LordCaesar_Cfg",
                gameScene: "LordCaesar_loading",
                mainScene: "LordCaesar",
                orientation: "portrait",
            });

            // 洛基
            this.gameDataList.set(GAME_ID.SLOT_LOKI, {
                dataCmp: "Loki_GameData",
                dataName: "gameData",
                cfgCmp: "Loki_Cfg",
                gameScene: "Loki_loading",
                mainScene: "Loki",
                orientation: "portrait",
            });

            // 弗雷
            this.gameDataList.set(GAME_ID.SLOT_FREY, {
                dataCmp: "Frey_GameData",
                dataName: "gameData",
                cfgCmp: "Frey_Cfg",
                gameScene: "Frey_loading",
                mainScene: "Frey",
                orientation: "portrait",
            });

            // 亚历山大
            this.gameDataList.set(GAME_ID.SLOT_ALEXANDER, {
                dataCmp: "Alexander_GameData",
                dataName: "gameData",
                cfgCmp: "Alexander_Cfg",
                gameScene: "Alexander_loading",
                mainScene: "Alexander",
                orientation: "portrait",
            });

            // 芬里尔
            this.gameDataList.set(GAME_ID.SLOT_FENRIR, {
                dataCmp: "Fenrir_GameData",
                dataName: "gameData",
                cfgCmp: "Fenrir_Cfg",
                gameScene: "Fenrir_loading",
                mainScene: "Fenrir",
                orientation: "portrait",
            });

            // 狮身人面像
            this.gameDataList.set(GAME_ID.SLOT_SPHINX, {
                dataCmp: "Sphinx_GameData",
                dataName: "gameData",
                cfgCmp: "Sphinx_Cfg",
                gameScene: "Sphinx_loading",
                mainScene: "Sphinx",
                orientation: "portrait",
            });

            // 曹操
            this.gameDataList.set(GAME_ID.SLOT_CAOCAO, {
                dataCmp: "CaoCao_GameData",
                dataName: "gameData",
                cfgCmp: "CaoCao_Cfg",
                gameScene: "CaoCao_loading",
                mainScene: "CaoCao",
                orientation: "portrait",
            });

            // 孙悟空
            this.gameDataList.set(GAME_ID.SLOT_SUNWUKONG, {
                dataCmp: "SunWuKong_GameData",
                dataName: "gameData",
                cfgCmp: "SunWuKong_Cfg",
                gameScene: "SunWuKong_loading",
                mainScene: "SunWuKong",
                orientation: "portrait",
            });

            // 约尔孟甘德
            this.gameDataList.set(GAME_ID.SLOT_JORMRNGANDER, {
                dataCmp: "Jormengander_GameData",
                dataName: "gameData",
                cfgCmp: "Jormengander_Cfg",
                gameScene: "Jormengander_loading",
                mainScene: "Jormengander",
                orientation: "portrait",
            });

            // 释迦摩尼
            this.gameDataList.set(GAME_ID.SLOT_SHAKYAMUNI, {
                dataCmp: "Shakyamuni_GameData",
                dataName: "gameData",
                cfgCmp: "Shakyamuni_Cfg",
                gameScene: "Shakyamuni_loading",
                mainScene: "Shakyamuni",
                orientation: "portrait",
            });

            // 伽利略
            this.gameDataList.set(GAME_ID.SLOT_GALILEO, {
                dataCmp: "Galileo_GameData",
                dataName: "gameData",
                cfgCmp: "Galileo_Cfg",
                gameScene: "Galileo_loading",
                mainScene: "Galileo",
                orientation: "portrait",
            });

            // 巴德尔
            this.gameDataList.set(GAME_ID.SLOT_BADER, {
                dataCmp: "Bader_GameData",
                dataName: "gameData",
                cfgCmp: "Bader_Cfg",
                gameScene: "Bader_loading",
                mainScene: "Bader",
                orientation: "portrait",
            });

            // 赫斯提亚
            this.gameDataList.set(GAME_ID.SLOT_HESTIA, {
                dataCmp: "Hestia_GameData",
                dataName: "gameData",
                cfgCmp: "Hestia_Cfg",
                gameScene: "Hestia_loading",
                mainScene: "Hestia",
                orientation: "portrait",
            });

            // 赫菲斯托斯
            this.gameDataList.set(GAME_ID.SLOT_HEPHAESTUS, {
                dataCmp: "Hephaestus_GameData",
                dataName: "gameData",
                cfgCmp: "Hephaestus_Cfg",
                gameScene: "Hephaestus_loading",
                mainScene: "Hephaestus",
                orientation: "portrait",
            });

            // 浪漫公主
            this.gameDataList.set(GAME_ID.SLOT_ROMANTICPRINCESS, {
                dataCmp: "RomanticPrincess_GameData",
                dataName: "gameData",
                cfgCmp: "RomanticPrincess_Cfg",
                gameScene: "RomanticPrincess_loading",
                mainScene: "RomanticPrincess",
                orientation: "portrait",
            });

            // 花木兰
            this.gameDataList.set(GAME_ID.SLOT_NEWMULAN, {
                dataCmp: "NewMulan_GameData",
                dataName: "gameData",
                cfgCmp: "NewMulan_Cfg",
                gameScene: "NewMulan_loading",
                mainScene: "NewMulan",
                orientation: "portrait",
            });

            // 伊米尔
            this.gameDataList.set(GAME_ID.SLOT_YMER, {
                dataCmp: "Ymer_GameData",
                dataName: "gameData",
                cfgCmp: "Ymer_Cfg",
                gameScene: "Ymer_loading",
                mainScene: "Ymer",
                orientation: "portrait",
            });

            // 阿瑞斯
            this.gameDataList.set(GAME_ID.SLOT_GODOFWAR, {
                dataCmp: "GodOfWar_GameData",
                dataName: "gameData",
                cfgCmp: "GodOfWar_Cfg",
                gameScene: "GodOfWar_loading",
                mainScene: "GodOfWar",
                orientation: "portrait",
            });

            // 小红帽
            this.gameDataList.set(GAME_ID.SLOT_LITTLEREDRIDINGHOOD, {
                dataCmp: "LittleRedRidingHood_GameData",
                dataName: "gameData",
                cfgCmp: "LittleRedRidingHood_Cfg",
                gameScene: "LittleRedRidingHood_loading",
                mainScene: "LittleRedRidingHood",
                orientation: "portrait",
            });

            //帕修斯
            this.gameDataList.set(GAME_ID.SLOT_PESEUS, {
                dataCmp: "Peseus_GameData",
                dataName: "gameData",
                cfgCmp: "Peseus_Cfg",
                gameScene: "Peseus_loading",
                mainScene: "Peseus",
                orientation: "portrait",
            });

            // 波斯王子
            this.gameDataList.set(GAME_ID.SLOT_PRINCE, {
                dataCmp: "Prince_GameData",
                dataName: "gameData",
                cfgCmp: "Prince_Cfg",
                gameScene: "Prince_loading",
                mainScene: "Prince",
                orientation: "portrait",
            });

            // 弓箭手
            this.gameDataList.set(GAME_ID.SLOT_ARCHER, {
                dataCmp: "Archer_GameData",
                dataName: "gameData",
                cfgCmp: "Archer_Cfg",
                gameScene: "Archer_loading",
                mainScene: "Archer",
                orientation: "portrait",
            });

            // 阿里巴巴四十大盗
            this.gameDataList.set(GAME_ID.SLOT_ALIBABA, {
                dataCmp: "Alibaba_GameData",
                dataName: "gameData",
                cfgCmp: "Alibaba_Cfg",
                gameScene: "Alibaba_loading",
                mainScene: "Alibaba",
                orientation: "portrait",
            });

            // 薛西斯
            this.gameDataList.set(GAME_ID.SLOT_XERXES, {
                dataCmp: "Xerxes_GameData",
                dataName: "gameData",
                cfgCmp: "Xerxes_Cfg",
                gameScene: "Xerxes_loading",
                mainScene: "Xerxes",
                orientation: "portrait",
            });

            // 尼布甲尼撒二世和空中花园
            this.gameDataList.set(GAME_ID.SLOT_SKYGARDEN, {
                dataCmp: "LMSlots_GameData_Base",
                dataName: "gameData",
                cfgCmp: "Skygarden_Cfg",
                gameScene: "Skygarden_loading",
                mainScene: "Skygarden",
                orientation: "portrait",
            });

            // 辛巴达航海冒险
            this.gameDataList.set(GAME_ID.SLOT_SINBAD, {
                dataCmp: "Sinbad_GameData",
                dataName: "gameData",
                cfgCmp: "Sinbad_Cfg",
                gameScene: "Sinbad_loading",
                mainScene: "Sinbad",
                orientation: "portrait",
            });

            // 埃及艳后
            this.gameDataList.set(GAME_ID.SLOT_G_CLEOPATRA_a, {
                dataCmp: "G_Cleopatra_GameData",
                dataName: "gameData",
                cfgCmp: "G_Cleopatra_Cfg",
                gameScene: "G_Cleopatra_loading",
                mainScene: "G_Cleopatra",
                orientation: "portrait",
            });

            // 阿拉丁神灯
            this.gameDataList.set(GAME_ID.SLOT_LAMP_OF_ALADDIN_a, {
                dataCmp: "LampOfAladdin_GameData",
                dataName: "gameData",
                cfgCmp: "LampOfAladdin_Cfg",
                gameScene: "LampOfAladdin_loading",
                mainScene: "LampOfAladdin",
                orientation: "portrait",
            });

            // 狮身人面像
            this.gameDataList.set(GAME_ID.SLOT_SPHINX_a, {
                dataCmp: "Sphinx_GameData",
                dataName: "gameData",
                cfgCmp: "Sphinx_Cfg",
                gameScene: "Sphinx_loading",
                mainScene: "Sphinx",
                orientation: "portrait",
            });

            // 古灵精怪的舰娘
            this.gameDataList.set(GAME_ID.SLOT_JIANNIANGCHRISTMAS, {
                dataCmp: "JianniangChristmas_GameData",
                dataName: "gameData",
                cfgCmp: "JianniangChristmas_Cfg",
                gameScene: "JianniangChristmas_loading",
                mainScene: "JianniangChristmas",
                orientation: "portrait",
            });
            // 成吉思汗
            this.gameDataList.set(GAME_ID.SLOT_RISING_PEGASUS, {
                dataCmp: "RisingPegasus_GameData",
                dataName: "gameData",
                cfgCmp: "RisingPegasus_Cfg",
                gameScene: "RisingPegasus_loading",
                mainScene: "RisingPegasus",
                orientation: "portrait",
            });
            // 黄金矿工
            this.gameDataList.set(GAME_ID.SLOT_GOLD_RUSH_DELUXE, {
                dataCmp: "GoldRushDeluxe_GameData",
                dataName: "gameData",
                cfgCmp: "GoldRushDeluxe_Cfg",
                gameScene: "GoldRushDeluxe_loading",
                mainScene: "GoldRushDeluxe",
                orientation: "portrait",
            });

            // 爱神
            this.gameDataList.set(GAME_ID.SLOT_GODNESS_OF_LOVE, {
                dataCmp: "GodnessOfLove_GameData",
                dataName: "gameData",
                cfgCmp: "GodnessOfLove_Cfg",
                gameScene: "GodnessOfLove_loading",
                mainScene: "GodnessOfLove",
                orientation: "portrait",
            });

            // 波塞冬
            this.gameDataList.set(GAME_ID.SLOT_POSEIDON, {
                dataCmp: "LMSlots_GameData_Base",
                dataName: "gameData",
                cfgCmp: "Poseidon_Cfg",
                gameScene: "Poseidon_loading",
                mainScene: "Poseidon",
                orientation: "portrait",
            });

            //新版美杜莎
            this.gameDataList.set(GAME_ID.SLOT_NMEDUSA, {
                dataCmp: "Nmedusa_GameData",
                dataName: "gameData",
                cfgCmp: "Nmedusa_Cfg",
                gameScene: "Nmedusa_loading",
                mainScene: "Nmedusa",
                orientation: "portrait",
            });

            // 无所畏惧的舰娘
            this.gameDataList.set(GAME_ID.SLOT_WARSHIP, {
                dataCmp: "Warship_GameData",
                dataName: "gameData",
                cfgCmp: "Warship_Cfg",
                gameScene: "Warship_loading",
                mainScene: "Warship",
                orientation: "portrait",
            });

            // 雅典娜
            this.gameDataList.set(GAME_ID.SLOT_ATHENA, {
                dataCmp: "LMSlots_GameData_Base",
                dataName: "gameData",
                cfgCmp: "Athena_Cfg",
                gameScene: "Athena_loading",
                mainScene: "Athena",
                orientation: "portrait",
            });

            // 感恩节派对
            this.gameDataList.set(GAME_ID.SLOT_THANKSGIVINGPARTY, {
                dataCmp: "ThanksGivingParty_GameData",
                dataName: "gameData",
                cfgCmp: "ThanksGivingParty_Cfg",
                gameScene: "ThanksGivingParty_loading",
                mainScene: "ThanksGivingParty",
                orientation: "portrait",
            });

            // 企鹅赏金
            this.gameDataList.set(GAME_ID.SLOT_PENGUINBOUNTY, {
                dataCmp: "PenguinBounty_GameData",
                dataName: "gameData",
                cfgCmp: "PenguinBounty_Cfg",
                gameScene: "PenguinBounty_loading",
                mainScene: "PenguinBounty",
                orientation: "portrait",
            });

            // 美人鱼和珍珠
            this.gameDataList.set(GAME_ID.SLOT_MERMAID_PEARLS, {
                dataCmp: "MermaidAndPearls_GameData",
                dataName: "gameData",
                cfgCmp: "MermaidAndPearls_Cfg",
                gameScene: "MermaidAndPearls_loading",
                mainScene: "MermaidAndPearls",
                orientation: "portrait",
            });
            //小丑
            this.gameDataList.set(GAME_ID.SLOT_CLOWN, {
                dataCmp: "Clown_GameData",
                dataName: "gameData",
                cfgCmp: "Clown_Cfg",
                gameScene: "Clown_loading",
                mainScene: "Clown",
                orientation: "portrait",
            });
            //财神到
            this.gameDataList.set(GAME_ID.SLOT_THEGODOFFORTUNE, {
                dataCmp: "TheGodOfFortune_GameData",
                dataName: "gameData",
                cfgCmp: "TheGodOfFortune_Cfg",
                gameScene: "TheGodOfFortune_loading",
                mainScene: "TheGodOfFortune",
                orientation: "portrait",
            });
            //星际穿越
            this.gameDataList.set(GAME_ID.SLOT_INTERSTELLAR, {
                dataCmp: "Interstellar_GameData",
                dataName: "gameData",
                cfgCmp: "Interstellar_Cfg",
                gameScene: "Interstellar_loading",
                mainScene: "Interstellar",
                orientation: "portrait",
            });
            // 金刚
            this.gameDataList.set(GAME_ID.SLOT_KING_KONG, {
                dataCmp: "KingKong_GameData",
                dataName: "gameData",
                cfgCmp: "KingKong_Cfg",
                gameScene: "KingKong_loading",
                mainScene: "KingKong",
                orientation: "portrait",
            });
            //宙斯的力量
            this.gameDataList.set(GAME_ID.SLOT_POWER_OF_ZEUS, {
                dataCmp: "PowerOfZeus_GameData",
                dataName: "gameData",
                cfgCmp: "PowerOfZeus_Cfg",
                gameScene: "PowerOfZeus_loading",
                mainScene: "PowerOfZeus",
                orientation: "portrait",
            });
            //绚丽的小精灵
            this.gameDataList.set(GAME_ID.SLOT_FLOWERY_PIXIE, {
                dataCmp: "FloweryPixie_GameData",
                dataName: "gameData",
                cfgCmp: "FloweryPixie_Cfg",
                gameScene: "FloweryPixie_loading",
                mainScene: "FloweryPixie",
                orientation: "portrait",
            });
            //秦始皇
            this.gameDataList.set(GAME_ID.SLOT_EMPEROR_QIN, {
                dataCmp: "EmperorQin_GameData",
                dataName: "gameData",
                cfgCmp: "EmperorQin_Cfg",
                gameScene: "EmperorQin_loading",
                mainScene: "EmperorQin",
                orientation: "portrait",
            });
            //魔术师
            this.gameDataList.set(GAME_ID.SLOT_MAGICIAN_NEW, {
                dataCmp: "Magician_GameData",
                dataName: "gameData",
                cfgCmp: "Magician_Cfg",
                gameScene: "Magician_loading",
                mainScene: "Magician",
                orientation: "portrait",
            });
            //梦幻巧克力工厂
            this.gameDataList.set(GAME_ID.SLOT_FANTASY_CHOCOLATE_FACTORY, {
                dataCmp: "FantasyChocolateFactory_GameData",
                dataName: "gameData",
                cfgCmp: "FantasyChocolateFactory_Cfg",
                gameScene: "FantasyChocolateFactory_loading",
                mainScene: "FantasyChocolateFactory",
                orientation: "portrait",
            });

            // 狮子
            this.gameDataList.set(GAME_ID.SLOT_THE_LION, {
                dataCmp: "TheLion_GameData",
                dataName: "gameData",
                cfgCmp: "TheLion_Cfg",
                gameScene: "TheLion_loading",
                mainScene: "TheLion",
                orientation: "portrait",
            });

            // 熊猫
            this.gameDataList.set(GAME_ID.SLOT_THE_PANDA, {
                dataCmp: "ThePanda_GameData",
                dataName: "gameData",
                cfgCmp: "ThePanda_Cfg",
                gameScene: "ThePanda_loading",
                mainScene: "ThePanda",
                orientation: "portrait",
            });

            // 独角兽
            this.gameDataList.set(GAME_ID.SLOT_THE_UNICORN, {
                dataCmp: "TheUnicorn_GameData",
                dataName: "gameData",
                cfgCmp: "TheUnicorn_Cfg",
                gameScene: "TheUnicorn_loading",
                mainScene: "TheUnicorn",
                orientation: "portrait",
            });

            // 阿拉丁神灯
            this.gameDataList.set(GAME_ID.SLOT_LAMP_OF_ALADDIN, {
                dataCmp: "LampOfAladdin_GameData",
                dataName: "gameData",
                cfgCmp: "LampOfAladdin_Cfg",
                gameScene: "LampOfAladdin_loading",
                mainScene: "LampOfAladdin",
                orientation: "portrait",
            });

            // 美人鱼
            this.gameDataList.set(GAME_ID.SLOT_THE_MERMAID, {
                dataCmp: "TheMermaid_GameData",
                dataName: "gameData",
                cfgCmp: "TheMermaid_Cfg",
                gameScene: "TheMermaid_loading",
                mainScene: "TheMermaid",
                orientation: "portrait",
            });

            // 吟游诗人
            this.gameDataList.set(GAME_ID.SLOT_THE_MINSTREL, {
                dataCmp: "TheMinstrel_GameData",
                dataName: "gameData",
                cfgCmp: "TheMinstrel_Cfg",
                gameScene: "TheMinstrel_loading",
                mainScene: "TheMinstrel",
                orientation: "portrait",
            });

            // 青蛙王子
            this.gameDataList.set(GAME_ID.SLOT_THE_FROG_PRINCE, {
                dataCmp: "LMSlots_GameData_Base",
                dataName: "gameData",
                cfgCmp: "TheFrogPrince_Cfg",
                gameScene: "TheFrogPrince_loading",
                mainScene: "TheFrogPrince",
                orientation: "portrait",
            });

            // 猛犸象
            this.gameDataList.set(GAME_ID.SLOT_THE_MAMMOTH, {
                dataCmp: "LMSlots_GameData_Base",
                dataName: "gameData",
                cfgCmp: "TheMammoth_Cfg",
                gameScene: "TheMammoth_loading",
                mainScene: "TheMammoth",
                orientation: "portrait",
            });

            // 龙的传说
            this.gameDataList.set(GAME_ID.SLOT_THE_LEGEND_OF_DRAGON, {
                dataCmp: "TheLegendOfDragon_GameData",
                dataName: "gameData",
                cfgCmp: "TheLegendOfDragon_Cfg",
                gameScene: "TheLegendOfDragon_loading",
                mainScene: "TheLegendOfDragon",
                orientation: "portrait",
            });

            // 浪漫女王
            this.gameDataList.set(GAME_ID.SLOT_ROMANTIC_QUEEN, {
                dataCmp: "RomanticQueen_GameData",
                dataName: "gameData",
                cfgCmp: "RomanticQueen_Cfg",
                gameScene: "RomanticQueen_loading",
                mainScene: "RomanticQueen",
                orientation: "portrait",
            });

            // 野生大猩猩
            this.gameDataList.set(GAME_ID.SLOT_WILD_GORILLA, {
                dataCmp: "WildGorilla_GameData",
                dataName: "gameData",
                cfgCmp: "WildGorilla_Cfg",
                gameScene: "WildGorilla_loading",
                mainScene: "WildGorilla",
                orientation: "portrait",
            });

            // 邪恶的美女
            this.gameDataList.set(GAME_ID.SLOT_WICKED_BELLE, {
                dataCmp: "WickedBelle_GameData",
                dataName: "gameData",
                cfgCmp: "WickedBelle_Cfg",
                gameScene: "WickedBelle_loading",
                mainScene: "WickedBelle",
                orientation: "portrait",
            });

            // 九头鸟
            this.gameDataList.set(GAME_ID.SLOT_BIRD_NINE_HEADS, {
                dataCmp: "BirdNineHeads_GameData",
                dataName: "gameData",
                cfgCmp: "BirdNineHeads_Cfg",
                gameScene: "BirdNineHeads_loading",
                mainScene: "BirdNineHeads",
                orientation: "portrait",
            });

            // 魔法青蛙
            this.gameDataList.set(GAME_ID.SLOT_MAGIC_FROG, {
                dataCmp: "MagicFrog_GameData",
                dataName: "gameData",
                cfgCmp: "MagicFrog_Cfg",
                gameScene: "MagicFrog_loading",
                mainScene: "MagicFrog",
                orientation: "portrait",
            });

            // 矮人与公主
            this.gameDataList.set(GAME_ID.SLOT_DWARFS_AND_PRINCESS, {
                dataCmp: "DwarfsAndPrincess_GameData",
                dataName: "gameData",
                cfgCmp: "DwarfsAndPrincess_Cfg",
                gameScene: "DwarfsAndPrincess_loading",
                mainScene: "DwarfsAndPrincess",
                orientation: "portrait",
            });

            // 幸运圣诞老人
            this.gameDataList.set(GAME_ID.SLOT_LUCKY_SANTA, {
                dataCmp: "LuckySanta_GameData",
                dataName: "gameData",
                cfgCmp: "LuckySanta_Cfg",
                gameScene: "LuckySanta_loading",
                mainScene: "LuckySanta",
                orientation: "portrait",
            });

            // 凤凰
            this.gameDataList.set(GAME_ID.SLOT_THE_PHOENIX, {
                dataCmp: "ThePhoenix_GameData",
                dataName: "gameData",
                cfgCmp: "ThePhoenix_Cfg",
                gameScene: "ThePhoenix_loading",
                mainScene: "ThePhoenix",
                orientation: "portrait",
            });

            // 侠盗罗宾逊
            this.gameDataList.set(GAME_ID.SLOT_ROBIN_HOOD, {
                dataCmp: "RobinHood_GameData",
                dataName: "gameData",
                cfgCmp: "RobinHood_Cfg",
                gameScene: "RobinHood_loading",
                mainScene: "RobinHood",
                orientation: "portrait",
            });

            // 兔女郎
            this.gameDataList.set(GAME_ID.SLOT_BUNNY_GIRL, {
                dataCmp: "BunnyGirl_GameData",
                dataName: "gameData",
                cfgCmp: "BunnyGirl_Cfg",
                gameScene: "BunnyGirl_loading",
                mainScene: "BunnyGirl",
                orientation: "portrait",
            });

            // 黄金矿工
            this.gameDataList.set(GAME_ID.SLOT_GOLD_MINER, {
                dataCmp: "GoldMiner_GameData",
                dataName: "gameData",
                cfgCmp: "GoldMiner_Cfg",
                gameScene: "GoldMiner_loading",
                mainScene: "GoldMiner",
                orientation: "portrait",
            });

            // 麒麟
            this.gameDataList.set(GAME_ID.SLOT_KYLIN, {
                dataCmp: "Kylin_GameData",
                dataName: "gameData",
                cfgCmp: "Kylin_Cfg",
                gameScene: "Kylin_loading",
                mainScene: "Kylin",
                orientation: "portrait",
            });

            // 狮子宝石
            this.gameDataList.set(GAME_ID.SLOT_THE_LION_GEMS, {
                dataCmp: "TheLionGems_GameData",
                dataName: "gameData",
                cfgCmp: "TheLionGems_Cfg",
                gameScene: "TheLionGems_loading",
                mainScene: "TheLionGems",
                orientation: "portrait",
            });

            // 真爱永恒
            this.gameDataList.set(GAME_ID.SLOT_THE_FOREVER_LOVE, {
                dataCmp: "TheForeverLove_GameData",
                dataName: "gameData",
                cfgCmp: "TheForeverLove_Cfg",
                gameScene: "TheForeverLove_loading",
                mainScene: "TheForeverLove",
                orientation: "portrait",
            });

            // 猫的火枪手
            this.gameDataList.set(GAME_ID.SLOT_PUSS_THE_MUSKETEER, {
                dataCmp: "PussTheMusketeer_GameData",
                dataName: "gameData",
                cfgCmp: "PussTheMusketeer_Cfg",
                gameScene: "PussTheMusketeer_loading",
                mainScene: "PussTheMusketeer",
                orientation: "portrait",
            });

            // 狼之传说
            this.gameDataList.set(GAME_ID.SLOT_WOLF_LEGEND, {
                dataCmp: "WolfLegend_GameData",
                dataName: "gameData",
                cfgCmp: "WolfLegend_Cfg",
                gameScene: "WolfLegend_loading",
                mainScene: "WolfLegend",
                orientation: "portrait",
            });

            // 冥王哈迪斯
            this.gameDataList.set(GAME_ID.SLOT_HADES, {
                dataCmp: "Hades_GameData",
                dataName: "gameData",
                cfgCmp: "Hades_Cfg",
                gameScene: "Hades_loading",
                mainScene: "Hades",
                orientation: "portrait",
            });

            //德墨忒尔
            this.gameDataList.set(GAME_ID.SLOT_DEMETER, {
                dataCmp: "CandyClash_GameData",
                dataName: "gameData",
                cfgCmp: "CandyClash_Cfg",
                gameScene: "CandyClash_loading",
                mainScene: "CandyClash",
                orientation: "portrait",
            });

            //赫尔墨斯
            this.gameDataList.set(GAME_ID.SLOT_HERMES, {
                dataCmp: "Hermes_GameData",
                dataName: "gameData",
                cfgCmp: "Hermes_Cfg",
                gameScene: "Hermes_loading",
                mainScene: "Hermes",
                orientation: "portrait",
            });

            // 普罗米修斯
            this.gameDataList.set(GAME_ID.SLOT_PROMETHEUS, {
                dataCmp: "Prometheus_GameData",
                dataName: "gameData",
                cfgCmp: "Prometheus_Cfg",
                gameScene: "Prometheus_loading",
                mainScene: "Prometheus",
                orientation: "portrait",
            });

            // baloot
            this.gameDataList.set(GAME_ID.POKER_BALOOT, {
                dataCmp: "Baloot_GameData",
                dataName: "gameData",
                cfgCmp: "Baloot_Cfg",
                gameScene: "baloot",
                orientation: "portrait",
            });
            // baloot fast
            this.gameDataList.set(GAME_ID.POKER_BALOOT_FAST, {
                dataCmp: "Baloot_GameData",
                dataName: "gameData",
                cfgCmp: "Baloot_Cfg",
                gameScene: "baloot",
                orientation: "portrait",
            });
            // hand
            this.gameDataList.set(GAME_ID.POKER_HAND, {
                dataCmp: "Hand_GameData",
                dataName: "gameData",
                cfgCmp: "Hand_Cfg",
                gameScene: "hand",
                orientation: "portrait",
            });
            // hand Saudi
            this.gameDataList.set(GAME_ID.POKER_HAND_SAUDI, {
                dataCmp: "Hand_GameData",
                dataName: "gameData",
                cfgCmp: "Hand_Cfg",
                gameScene: "hand",
                orientation: "portrait",
            });
            // hand Partner
            this.gameDataList.set(GAME_ID.POKER_HAND_PARTNER, {
                dataCmp: "Hand_GameData",
                dataName: "gameData",
                cfgCmp: "Hand_Cfg",
                gameScene: "hand",
                orientation: "portrait",
            });
            // hand saudi Partner
            this.gameDataList.set(GAME_ID.POKER_HAND_SAUDI_PARTNER, {
                dataCmp: "Hand_GameData",
                dataName: "gameData",
                cfgCmp: "Hand_Cfg",
                gameScene: "hand",
                orientation: "portrait",
            });
            // hand concan
            this.gameDataList.set(GAME_ID.POKER_HAND_CONCAN, {
                dataCmp: "Hand_GameData",
                dataName: "gameData",
                cfgCmp: "Hand_Cfg",
                gameScene: "hand",
                orientation: "portrait",
            });
            // tarneeb
            this.gameDataList.set(GAME_ID.POKER_TARNEEB, {
                dataCmp: "Tarneeb_GameData",
                dataName: "gameData",
                cfgCmp: "Tarneeb_Cfg",
                gameScene: "tarneeb",
                orientation: "portrait",
            });
            // tarneeb
            this.gameDataList.set(GAME_ID.POKER_TARNEEB_SYRIAN, {
                dataCmp: "TarneebSyr_GameData",
                dataName: "gameData",
                cfgCmp: "TarneebSyr_Cfg",
                gameScene: "tarneebsyr",
                orientation: "portrait",
            });

            // basra
            this.gameDataList.set(GAME_ID.POKER_BASRA, {
                dataCmp: "Basra_GameData",
                dataName: "gameData",
                cfgCmp: "Basra_Cfg",
                gameScene: "basra",
                orientation: "portrait",
            });
            // banakil
            this.gameDataList.set(GAME_ID.POKER_BANAKIL, {
                dataCmp: "Banakil_GameData",
                dataName: "gameData",
                cfgCmp: "Banakil_Cfg",
                gameScene: "banakil",
                orientation: "portrait",
            });
            // Trix
            this.gameDataList.set(GAME_ID.POKER_TRIX, {
                dataCmp: "Trix_GameData",
                dataName: "gameData",
                cfgCmp: "Trix_Cfg",
                gameScene: "Trix",
                orientation: "portrait",
            });
            // Trix Complex
            this.gameDataList.set(GAME_ID.POKER_TRIXCOMPLEX, {
                dataCmp: "Trix_GameData",
                dataName: "gameData",
                cfgCmp: "Trix_Cfg",
                gameScene: "Trix",
                orientation: "portrait",
            });
            // Trix Partner
            this.gameDataList.set(GAME_ID.POKER_TRIXPARTNER, {
                dataCmp: "Trix_GameData",
                dataName: "gameData",
                cfgCmp: "Trix_Cfg",
                gameScene: "Trix",
                orientation: "portrait",
            });
            // Complex Partner
            this.gameDataList.set(GAME_ID.POKER_COMPLEXPARTNER, {
                dataCmp: "Trix_GameData",
                dataName: "gameData",
                cfgCmp: "Trix_Cfg",
                gameScene: "Trix",
                orientation: "portrait",
            });
            // Complex CC
            this.gameDataList.set(GAME_ID.POKER_CCCOMPLEX, {
                dataCmp: "CC_GameData",
                dataName: "gameData",
                cfgCmp: "CC_Cfg",
                gameScene: "CC",
                orientation: "portrait",
            });
            // CC Partner
            this.gameDataList.set(GAME_ID.POKER_CCPARTNER, {
                dataCmp: "CC_GameData",
                dataName: "gameData",
                cfgCmp: "CC_Cfg",
                gameScene: "CC",
                orientation: "portrait",
            });
            // Kasra
            this.gameDataList.set(GAME_ID.POKER_KASRA, {
                dataCmp: "Kasra_GameData",
                dataName: "gameData",
                cfgCmp: "Kasra_Cfg",
                gameScene: "Kasra",
                orientation: "portrait",
            });
            // Kasra Partner
            this.gameDataList.set(GAME_ID.POKER_KASRAPARTNER, {
                dataCmp: "Kasra_GameData",
                dataName: "gameData",
                cfgCmp: "Kasra_Cfg",
                gameScene: "Kasra",
                orientation: "portrait",
            });
            // Ronda
            this.gameDataList.set(GAME_ID.POKER_RONDA, {
                dataCmp: "Ronda_GameData",
                dataName: "gameData",
                cfgCmp: "Ronda_Cfg",
                gameScene: "Ronda",
                orientation: "portrait",
            });
            // Estimation
            this.gameDataList.set(GAME_ID.POKER_ESTIMATION, {
                dataCmp: "Estimation_GameData",
                dataName: "gameData",
                cfgCmp: "Estimation_Cfg",
                gameScene: "estimation",
                orientation: "portrait",
            });
            // domino
            this.gameDataList.set(GAME_ID.POKER_DOMINO, {
                dataCmp: "DominoGameData",
                dataName: "gameData",
                cfgCmp: "Domino_Cfg",
                gameScene: "Domino",
                orientation: "portrait",
            });
            // KoutBo
            this.gameDataList.set(GAME_ID.POKER_KOUTBO, {
                dataCmp: "KoutBo_GameData",
                dataName: "gameData",
                cfgCmp: "KoutBo_Cfg",
                gameScene: "KoutBo",
                orientation: "portrait",
            });
            // Uno
            this.gameDataList.set(GAME_ID.POKER_UNO, {
                dataCmp: "Uno_GameData",
                dataName: "gameData",
                cfgCmp: "Uno_Cfg",
                gameScene: "Uno",
                orientation: "portrait",
            });
            // Uno
            this.gameDataList.set(GAME_ID.POKER_SAUDIDEAL, {
                dataCmp: "SaudiDealGameData",
                dataName: "gameData",
                cfgCmp: "SaudiDeal_Cfg",
                gameScene: "SaudiDeal",
                orientation: "portrait",
            });
            // BintAlSbeet
            this.gameDataList.set(GAME_ID.POKER_BINTALSBEET, {
                dataCmp: "BintAlSbeet_GameData",
                dataName: "gameData",
                cfgCmp: "BintAlSbeet_Cfg",
                gameScene: "BintAlSbeet",
                orientation: "portrait",
            });

            // LudoMaster
            this.gameDataList.set(GAME_ID.POKER_LUDOMASTER, {
                dataCmp: "LudoMasterGameData",
                dataName: "gameData",
                gameScene: "LudoMaster",
                orientation: "portrait",
            });
            // LudoQuick
            this.gameDataList.set(GAME_ID.POKER_LUDO_QUICK, {
                dataCmp: "LudoMasterGameData",
                dataName: "gameData",
                gameScene: "LudoMaster",
                orientation: "portrait",
            });
            // 400
            this.gameDataList.set(GAME_ID.POKER_TARNEEB_400, {
                dataCmp: "Tarneeb400_GameData",
                dataName: "gameData",
                cfgCmp: "Tarneeb400_Cfg",
                gameScene: "tarneeb400",
                orientation: "portrait",
            });
            // TeenPatti
            this.gameDataList.set(GAME_ID.TEENPATTI, {
                dataCmp: "TeenPatti_GameData",
                dataName: "gameData",
                cfgCmp: "TeenPatti_Cfg",
                gameScene: "TeenPatti",
                orientation: "portrait",
                bNoLoading: true,
            });
            // Leekha
            this.gameDataList.set(GAME_ID.POKER_LEEKHA, {
                dataCmp: "Leekha_GameData",
                dataName: "gameData",
                cfgCmp: "Leekha_Cfg",
                gameScene: "Leekha",
                orientation: "portrait",
            });
            // durak 2人
            this.gameDataList.set(GAME_ID.POKER_DURAK_2, {
                dataCmp: "Durak_GameData",
                dataName: "gameData",
                cfgCmp: "Durak_Cfg",
                gameScene: "Durak",
                orientation: "portrait",
            });
            // durak 3人
            this.gameDataList.set(GAME_ID.POKER_DURAK_3, {
                dataCmp: "Durak_GameData",
                dataName: "gameData",
                cfgCmp: "Durak_Cfg",
                gameScene: "Durak",
                orientation: "portrait",
            });
            // durak 4人
            this.gameDataList.set(GAME_ID.POKER_DURAK_4, {
                dataCmp: "Durak_GameData",
                dataName: "gameData",
                cfgCmp: "Durak_Cfg",
                gameScene: "Durak",
                orientation: "portrait",
            });
            // durak 5人
            this.gameDataList.set(GAME_ID.POKER_DURAK_5, {
                dataCmp: "Durak_GameData",
                dataName: "gameData",
                cfgCmp: "Durak_Cfg",
                gameScene: "Durak",
                orientation: "portrait",
            });
            // durak 6人
            this.gameDataList.set(GAME_ID.POKER_DURAK_6, {
                dataCmp: "Durak_GameData",
                dataName: "gameData",
                cfgCmp: "Durak_Cfg",
                gameScene: "Durak",
                orientation: "portrait",
            });
            // 抛金币
            this.gameDataList.set(GAME_ID.S_COINS, {
                dataCmp: "Coin_GameData",
                dataName: "gameData",
                cfgCmp: "Coin_Cfg",
                gameScene: "Coins",
                orientation: "portrait",
            });
            // 翻牌
            this.gameDataList.set(GAME_ID.S_HILO, {
                dataCmp: "Hilo_GameData",
                dataName: "gameData",
                cfgCmp: "Hilo_Cfg",
                gameScene: "Hilo",
                orientation: "portrait",
            });
            // 扫雷
            this.gameDataList.set(GAME_ID.S_MINES, {
                dataCmp: "Mine_GameData",
                dataName: "gameData",
                cfgCmp: "Mine_Cfg",
                gameScene: "Mine",
                orientation: "portrait",
            });
        },

        getGameData(gameId) {
            gameId = Number(gameId);
            if (this.gameDataList.has(gameId)) {
                return this.gameDataList.get(gameId);
            }
            AppLog.err(
                "没有找到游戏配置gameId:" + gameId + "，请在GameDataCfg中配置"
            );
            return null;
        },
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    // update (dt) {},
});
