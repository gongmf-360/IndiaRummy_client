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
            const gameListArr = [{
                id: "MLLM", rows: {
                    hallScene: "game_2ndHall",
                    dataCmp: "LMGameData",
                    dataName: "LMGameData",
                    gameScene: "mllm",
                }
            },
            {
                id: "POKER_HUNDRED", rows: {
                    dataCmp: "RT100nnData",
                    dataName: "RT100NNData",
                    gameScene: "100nn",
                }
            },
            {
                id: "POKER_NIU", rows: {
                    hallScene: "nn_2ndHall",
                    dataCmp: "RTNiuniuData",
                    dataName: "RTNiuNiuData",
                    gameScene: "niuniu",
                }
            },
            {
                id: "RED_VS_BLACK", rows: {
                    dataCmp: "RTHhdzData",
                    dataName: "RTHhdzData",
                    gameScene: "hhdz_loading",
                    mainScene: "hhdz",
                    orientation: "landscape",
                }
            },

            {
                id: "INDIA_RUMMY", rows: {
                    dataCmp: "Rummy_GameData",
                    dataName: "gameData",
                    gameScene: "Rummy",
                    orientation: "portrait",
                    cfgCmp: "Rummy_Cfg",
                    bNoLoading: true,
                }
            },

            {
                id: "DRAGON_VS_TIGER", rows: {
                    dataCmp: "Table_GameData_Base",
                    dataName: "gameData",
                    gameScene: "lhdz",
                    orientation: "portrait",
                    cfgCmp: "Lhdz_Cfg",
                    bNoLoading: true,
                }
            },
            {
                id: "CRASH", rows: {
                    dataCmp: "Crash_GameData",
                    dataName: "gameData",
                    gameScene: "Crash",
                    orientation: "portrait",
                    cfgCmp: "Crash_Cfg",
                    bNoLoading: true,
                }
            },
            {
                id: "SEVEN_UP_DOWN", rows: {
                    dataCmp: "Table_GameData_Base",
                    dataName: "gameData",
                    gameScene: "SevenUpDown",
                    orientation: "portrait",
                    cfgCmp: "SevenUpDown_Cfg",
                    bNoLoading: true,
                }
            },
            {
                id: "ALADINGWHEEL", rows: {
                    dataCmp: "Table_GameData_Base",
                    dataName: "gameData",
                    gameScene: "AladingWheel",
                    orientation: "portrait",
                    cfgCmp: "AladingWheel_Cfg",
                    bNoLoading: true,
                }
            },
            {
                id: "TURNRECT_ALB", rows: {
                    dataCmp: "TurnRect_GameData",
                    dataName: "gameData",
                    gameScene: "TurnRect",
                    orientation: "portrait",
                    // cfgCmp: "",
                    bNoLoading: true,
                }
            },
            {
                id: "TEXAS_HOLDEM", rows: {
                    dataCmp: "Delphi_GameData",
                    dataName: "gameData",
                    gameScene: "Delphi",
                    orientation: "portrait",
                    // cfgCmp: "",
                    bNoLoading: true,
                }
            },
            {
                id: "BACCARAT", rows: {
                    dataCmp: "Baccarat_GameData",
                    dataName: "gameData",
                    gameScene: "Baccarat",
                    orientation: "portrait",
                    cfgCmp: "Baccarat_Cfg",
                    bNoLoading: true,
                }
            },
            {
                id: "WINGO_LOTTERY", rows: {
                    dataCmp: "Table_GameData_Base",
                    dataName: "gameData",
                    gameScene: "WingoLottery",
                    orientation: "portrait",
                    cfgCmp: "WingoLottery_Cfg",
                    bNoLoading: true,
                }
            },
            {
                id: "JHANDI_MUNDA", rows: {
                    dataCmp: "Table_GameData_Base",
                    dataName: "gameData",
                    gameScene: "Jhandimunda",
                    orientation: "portrait",
                    cfgCmp: "Jhandimunda_Cfg",
                    bNoLoading: true,
                }
            },
            {
                id: "HORSE_RACING", rows: {
                    dataCmp: "HorseRace_GameData",
                    dataName: "gameData",
                    gameScene: "HorseRace",
                    orientation: "portrait",
                    cfgCmp: "HorseRace_Cfg",
                    bNoLoading: true,
                }
            },
            {
                id: "ROULETTE", rows: {
                    dataCmp: "Roulette36_Gamedata",
                    dataName: "gameData",
                    gameScene: "Roulette36",
                    orientation: "portrait",
                    cfgCmp: "Roulette_Cfg",
                    bNoLoading: true,
                }
            },
            {
                id: "ANDAR_BAHAR", rows: {
                    dataCmp: "Table_GameData_Base",
                    dataName: "gameData",
                    gameScene: "AndarBahar",
                    orientation: "portrait",
                    cfgCmp: "AndarBahar_Cfg",
                    bNoLoading: true,
                }
            },
            {
                id: "FORTUNE_WHEEL", rows: {
                    dataCmp: "Table_GameData_Base",
                    dataName: "gameData",
                    gameScene: "FortuneWheel",
                    orientation: "portrait",
                    cfgCmp: "FortuneWheel_Cfg",
                    bNoLoading: true,
                }
            },
            {
                id: "FORTUNE_WHEEL_POKER", rows: {
                    dataCmp: "Table_GameData_Base",
                    dataName: "gameData",
                    gameScene: "FortuneWheel",
                    orientation: "portrait",
                    cfgCmp: "FortuneWheel_Cfg",
                    bNoLoading: true,
                }
            },
            {
                id: "POKER_TBNN", rows: {
                    hallScene: "tbnn_2ndHall",
                    dataCmp: "RTTbnnData",
                    dataName: "RTTbnnData",
                    gameScene: "tbnn_scene",
                }
            },
            {
                id: "MLMJ", rows: {
                    hallScene: "mlmj_2ndHall",
                    dataCmp: "MLMJ_gameData",
                    dataName: "gameData",
                    gameScene: "mlmj",
                }
            }, //马来麻将
            {
                id: "JLM", rows: {
                    hallScene: "game_2ndHall",
                    dataCmp: "JLM_gameData",
                    dataName: "gameData",
                    loadingScene: "game_loading",
                    gameScene: "jlm",
                    hallSceneOri: "portrait",
                    anim: "ginrummy",
                }
            }, //金拉米
            {
                id: "YDLM", rows: {
                    hallScene: "game_2ndHall",
                    dataCmp: "YDLM_gameData",
                    dataName: "gameData",
                    loadingScene: "game_loading",
                    gameScene: "ydlm",
                    hallSceneOri: "portrait",
                    anim: "indiarummy",
                }
            }, //
            // {id:"DZPK,{dataCmp:"DZPKData",dataName:"DZPKData",loadingScene:"game_loading", gameScene:"dzpk"}},   //
            // {id:"DZPK,{dataCmp:"DZPKData",dataName:"gameData",loadingScene:"game_port_loading", gameScene:"dzpk_p",orientation:"portrait"}},   //
            // {id:"DZPK", rows:{
            //     hallScene: "game_2ndHall",
            //     dataCmp: "DZPKData",
            //     dataName: "gameData",
            //     loadingScene: "poker_loading",
            //     gameScene: "dzpk_p",
            //     orientation: "portrait",
            //     anim: "texaspoker",
            //     hallSceneOri: "portrait",
            // }}, //

            {
                id: "BLACK_JACK", rows: {
                    dataCmp: "BlackJack21_GameData",
                    dataName: "gameData",
                    gameScene: "BlackJack21",
                    orientation: "portrait",
                    bNoLoading: true,
                }
            }, // 21点

            // {id:"HWFISH_918", rows:{
            //     dataCmp: "FishData",
            //     dataName: "gameData",
            //     gameScene: "hwfish918_loading",
            //     mainScene: "hwfish918_game_scene",
            //     orientation: "landscape",
            //     // bNoLoading: true,
            // }}, //海王捕鱼918
            {
                id: "C_CRICKETX", rows: {
                    dataCmp: "CricketX_GameData",
                    dataName: "gameData",
                    gameScene: "CricketX",
                    orientation: "portrait",
                    cfgCmp: "CricketX_Cfg",
                    bNoLoading: true,
                }
            }, //CricketX板球
            {
                id: "C_AVIATRIX", rows: {
                    dataCmp: "Aviatrix_GameData",
                    dataName: "gameData",
                    gameScene: "Aviatrix",
                    orientation: "portrait",
                    cfgCmp: "Aviatrix_Cfg",
                    bNoLoading: true,
                }
            }, //Aviatrix女飞行员
            {
                id: "C_CRASHX", rows: {
                    dataCmp: "CrashX_GameData",
                    dataName: "gameData",
                    gameScene: "CrashX",
                    orientation: "portrait",
                    cfgCmp: "CrashX_Cfg",
                    bNoLoading: true,
                }
            }, //CrashX
            {
                id: "C_AVIATOR", rows: {
                    dataCmp: "Aviator_GameData",
                    dataName: "gameData",
                    gameScene: "Aviator",
                    orientation: "portrait",
                    cfgCmp: "Aviator_Cfg",
                    bNoLoading: true,
                }
            }, //CricketX板球
            {
                id: "C_ZEPPELIN", rows: {
                    dataCmp: "Zeppelin_GameData",
                    dataName: "gameData",
                    gameScene: "Zeppelin",
                    orientation: "portrait",
                    cfgCmp: "Zeppelin_Cfg",
                    bNoLoading: true,
                }
            }, //Zeppelin齐柏林飞艇
            {
                id: "S_LIMBO", rows: {
                    dataCmp: "Limbo_GameData",
                    dataName: "gameData",
                    gameScene: "Limbo",
                    orientation: "portrait",
                    cfgCmp: "Limbo_Cfg",
                    bNoLoading: true,
                }
            }, //Limbo赛车
            {
                id: "S_DICE", rows: {
                    dataCmp: "Dice_GameData",
                    dataName: "gameData",
                    gameScene: "Dice",
                    orientation: "portrait",
                    cfgCmp: "Dice_Cfg",
                    bNoLoading: true,
                }
            }, //Dice
            {
                id: "S_PLINKO", rows: {
                    dataCmp: "Plinko_GameData",
                    dataName: "gameData",
                    gameScene: "Plinko",
                    orientation: "portrait",
                    cfgCmp: "Plinko_Cfg",
                    bNoLoading: true,
                }
            }, //珠子玩法
            {
                id: "S_KENO", rows: {
                    dataCmp: "Keno_GameData",
                    dataName: "gameData",
                    gameScene: "Keno",
                    orientation: "portrait",
                    cfgCmp: "Keno_Cfg",
                    bNoLoading: true,
                }
            }, //Keno
            {
                id: "S_TOWERS", rows: {
                    dataCmp: "Tower_GameData",
                    dataName: "gameData",
                    gameScene: "Tower",
                    orientation: "portrait",
                    cfgCmp: "Tower_Cfg",
                    bNoLoading: true,
                }
            }, //Tower
            {
                id: "DOUBLE_ROLL", rows: {
                    dataCmp: "DoubleRoll_GameData",
                    dataName: "gameData",
                    gameScene: "DoubleRoll",
                    orientation: "portrait",
                    cfgCmp: "DoubleRoll_Cfg",
                    bNoLoading: true,
                }
            },//Double Roll
            {
                id: "S_CRYPTO", rows: {
                    dataCmp: "Crypto_GameData",
                    dataName: "gameData",
                    gameScene: "Crypto",
                    orientation: "portrait",
                    cfgCmp: "Crypto_Cfg",
                    bNoLoading: true,
                }
            }, //Crypto
            {
                id: "S_TRIPLE", rows: {
                    dataCmp: "Triple_GameData",
                    dataName: "gameData",
                    gameScene: "Triple",
                    orientation: "portrait",
                    cfgCmp: "Triple_Cfg",
                    bNoLoading: true,
                }
            }, //Triple
            {
                id: "C_JETX", rows: {
                    dataCmp: "JetX_GameData",
                    dataName: "gameData",
                    gameScene: "JetX",
                    orientation: "portrait",
                    cfgCmp: "JetX_Cfg",
                    bNoLoading: true,
                }
            }, //JetX

            {
                id: "SLOT_GDF", rows: {
                    dataCmp: "SlotMachine_GameData",
                    dataName: "gameData",
                    gameScene: "solt_loading",
                }
            }, // 财神到
            {
                id: "SLOT_AFG", rows: {
                    dataCmp: "SlotMachine_GameData",
                    dataName: "gameData",
                    gameScene: "solt_loading",
                }
            }, // 非洲丛林
            {
                id: "SLOT_GDT", rows: {
                    dataCmp: "SlotMachine_GameData",
                    dataName: "gameData",
                    gameScene: "solt_loading",
                }
            }, // 黄金树
            {
                id: "SLOT_GREAT_BLUE", rows: {
                    dataCmp: "GB_GameData",
                    dataName: "gameData",
                    gameScene: "solt_loading",
                }
            }, // 伟大蓝色

            {
                id: "SLOT_AZT", rows: {
                    dataCmp: "SlotMachine_GameData",
                    dataName: "gameData",
                    gameScene: "solt_loading",
                }
            }, // 阿兹台克
            {
                id: "SLOT_PAN", rows: {
                    dataCmp: "SlotMachine_GameData",
                    dataName: "gameData",
                    gameScene: "solt_loading",
                }
            }, //黑豹
            {
                id: "SLOT_IVAN", rows: {
                    dataCmp: "SlotMachine_GameData",
                    dataName: "gameData",
                    gameScene: "solt_loading",
                }
            }, //不朽的国王

            {
                id: "SLOT_DR", rows: {
                    dataCmp: "SlotMachine_GameData",
                    dataName: "gameData",
                    gameScene: "solt_loading",
                }
            }, // 海豚礁
            {
                id: "SLOT_SB", rows: {
                    dataCmp: "SB_GameData",
                    dataName: "gameData",
                    gameScene: "solt_loading",
                }
            }, // 银弹
            {
                id: "SLOT_TK", rows: {
                    dataCmp: "TK_GameData",
                    dataName: "gameData",
                    gameScene: "solt_loading",
                }
            }, // 三国
            {
                id: "SLOT_PJL", rows: {
                    dataCmp: "SlotMachine_GameData",
                    dataName: "gameData",
                    gameScene: "solt_loading",
                }
            },
            {
                id: "SLOT_JF", rows: {
                    dataCmp: "SlotMachine_GameData",
                    dataName: "gameData",
                    gameScene: "solt_loading",
                }
            }, // 日本福气
            {
                id: "BIRD_AND_ANIMAL", rows: {
                    dataCmp: "BAA_GameData",
                    dataName: "gameData",
                    gameScene: "solt_loading",
                }
            }, // 飞禽走兽
            {
                id: "SLOT_SPARTAN", rows: {
                    dataCmp: "SP_GameData",
                    dataName: "gameData",
                    gameScene: "solt_loading",
                }
            }, //斯巴达
            {
                id: "SLOT_COLABOTTLE", rows: {
                    dataCmp: "SlotMachine_GameData",
                    dataName: "gameData",
                    gameScene: "solt_loading",
                }
            }, //可乐瓶
            {
                id: "SLOT_PIRATE_SHIP", rows: {
                    dataCmp: "SlotMachine_GameData",
                    dataName: "gameData",
                    gameScene: "pirateShip_loading",
                }
            }, //海盗船
            {
                id: "SLOT_TOP_GUN", rows: {
                    dataCmp: "TG_GameData",
                    dataName: "gameData",
                    gameScene: "solt_loading",
                }
            }, //壮志凌云
            {
                id: "SLOT_LAURA", rows: {
                    dataCmp: "SlotMachine_GameData",
                    dataName: "gameData",
                    gameScene: "solt_loading",
                }
            }, //劳拉
            {
                id: "SLOT_ALICE", rows: {
                    dataCmp: "Alice_GameData",
                    dataName: "gameData",
                    gameScene: "solt_loading",
                }
            }, //爱丽丝
            {
                id: "SLOT_SWK", rows: {
                    dataCmp: "SlotMachine_GameData",
                    dataName: "gameData",
                    gameScene: "solt_loading",
                }
            }, //孙悟空
            {
                id: "SLOT_DRAGON5", rows: {
                    dataCmp: "DG_GameData",
                    dataName: "gameData",
                    gameScene: "solt_loading",
                }
            }, //龙5
            {
                id: "SLOT_JETION", rows: {
                    dataCmp: "JX_GameData",
                    dataName: "gameData",
                    gameScene: "solt_loading",
                }
            }, //吉星
            {
                id: "SLOT_OCEAN", rows: {
                    dataCmp: "OC_GameData",
                    dataName: "gameData",
                    gameScene: "solt_loading",
                }
            }, //海洋天堂
            {
                id: "SLOT_MONEY_FROG", rows: {
                    dataCmp: "SlotMachine_GameData",
                    dataName: "gameData",
                    gameScene: "solt_loading",
                }
            }, //金钱蛙
            {
                id: "SLOT_ZCJB", rows: {
                    dataCmp: "ZCJB_GameData",
                    dataName: "gameData",
                    gameScene: "solt_loading",
                }
            }, //招财进宝
            {
                id: "SLOT_YEARBYYEAR", rows: {
                    dataCmp: "YBY_GameData",
                    dataName: "gameData",
                    gameScene: "solt_loading",
                }
            }, //年年有余
            {
                id: "SLOT_CAPTAIN9", rows: {
                    dataCmp: "C9_GameData",
                    dataName: "gameData",
                    gameScene: "solt_loading",
                }
            }, //船长9线
            {
                id: "SLOT_AFRICAN_SAFARI", rows: {
                    dataCmp: "AS_GameData",
                    dataName: "gameData",
                    gameScene: "solt_loading",
                }
            }, //狂野非洲
            {
                id: "SLOT_CRAZY_MONEY", rows: {
                    dataCmp: "SlotMachine_GameData",
                    dataName: "gameData",
                    gameScene: "CrazyMoney_loading",
                }
            }, //狂热金钱
            {
                id: "SLOT_IRELAND_LUCKY", rows: {
                    dataCmp: "SlotMachine_GameData",
                    dataName: "gameData",
                    gameScene: "solt_loading",
                }
            }, //爱尔兰运气
            {
                id: "SLOT_SEASON", rows: {
                    dataCmp: "SlotMachine_GameData",
                    dataName: "gameData",
                    gameScene: "solt_loading",
                }
            }, //季节问候
            {
                id: "SLOT_SAINTSEIAY", rows: {
                    dataCmp: "Saint_GameData",
                    dataName: "gameData",
                    gameScene: "solt_loading",
                }
            }, //圣斗士星矢
            {
                id: "SLOT_CAPTAIN", rows: {
                    dataCmp: "SlotMachine_GameData",
                    dataName: "gameData",
                    gameScene: "solt_loading",
                }
            }, //船长20线
            {
                id: "SLOT_MATSURI", rows: {
                    dataCmp: "MS_GameData",
                    dataName: "gameData",
                    gameScene: "solt_loading",
                }
            }, //飨宴
            {
                id: "SLOT_TREX", rows: {
                    dataCmp: "SlotMachine_GameData",
                    dataName: "gameData",
                    gameScene: "solt_loading",
                }
            }, //霸王龙
            {
                id: "SLOT_GOLF", rows: {
                    dataCmp: "Golf_GameData",
                    dataName: "gameData",
                    gameScene: "solt_loading",
                }
            }, // 5线高尔夫

            //赛马类
            {
                id: "HORSE_MONKEY_TREE", rows: {
                    dataCmp: "MTGameData",
                    dataName: "gameData",
                    gameScene: "solt_loading",
                }
            }, // 霹雳猴
            {
                id: "HORSE", rows: {
                    dataCmp: "HorseGameData",
                    dataName: "gameData",
                    gameScene: "solt_loading",
                }
            }, // 赛马
            {
                id: "MOTOR_RACE", rows: {
                    dataCmp: "MTRaceGameData",
                    dataName: "gameData",
                    gameScene: "solt_loading",
                }
            }, // 赛摩托车
            {
                id: "HORSE_RACE", rows: {
                    dataCmp: "MTRaceGameData",
                    dataName: "gameData",
                    gameScene: "solt_loading",
                }
            }, // 赛马918

            {
                id: "ARC_XYZB", rows: {
                    dataCmp: "RTMKStoryData",
                    dataName: "gameData",
                    gameScene: "mkstoryScene_loading",
                }
            }, // 西游争霸
            {
                id: "ARC_YCLS", rows: {
                    dataCmp: "RTEPSData",
                    dataName: "gameData",
                    gameScene: "solt_loading",
                }
            }, // 英超联赛
            {
                id: "ARC_XYZB_LINE", rows: {
                    dataCmp: "RTMKStoryData",
                    dataName: "gameData",
                    gameScene: "solt_loading",
                }
            }, // 西游争霸_在线

            {
                id: "BCBM_918", rows: {
                    dataCmp: "BCBM918GameData",
                    dataName: "gameData",
                    gameScene: "solt_loading",
                }
            }, //奔驰宝马918

            // 鱼虾蚝
            {
                id: "FISH_SHRIMP_OYSTER", rows: {
                    dataCmp: "FSO_NetLogic",
                    dataName: "gameData",
                    gameScene: "solt_loading",
                }
            },

            {
                id: "ONLINE_LHDZ", rows: {
                    dataCmp: "RTLhdzOLData",
                    dataName: "gameData",
                    gameScene: "solt_loading",
                }
            }, //在线-龙虎斗（777）

            {
                id: "LHDZ_918_1", rows: {
                    dataCmp: "RTLhdz918Data",
                    dataName: "gameData",
                    gameScene: "solt_loading",
                }
            }, //龙虎斗1（918）
            {
                id: "LHDZ_918_2", rows: {
                    dataCmp: "RTLhdz918Data",
                    dataName: "gameData",
                    gameScene: "solt_loading",
                }
            }, //龙虎斗2（918）
            {
                id: "LHDZ_918_3", rows: {
                    dataCmp: "RTLhdz918Data",
                    dataName: "gameData",
                    gameScene: "solt_loading",
                }
            }, //龙虎斗3（918）
            {
                id: "SICBO_918", rows: {
                    dataCmp: "RTDice918Data",
                    dataName: "gameData",
                    gameScene: "solt_loading",
                }
            }, //豹子王单机版(918)
            {
                id: "BACCARAT_918", rows: {
                    dataCmp: "RTBCT918Data",
                    dataName: "gameData",
                    gameScene: "solt_loading",
                }
            }, //百家乐单机版(918)
            {
                id: "THREE_POKER_918", rows: {
                    dataCmp: "TPoker_gamedata",
                    dataName: "gameData",
                    gameScene: "solt_loading",
                }
            }, //三卡扑克单机版(918)
            {
                id: "HOLD_EM_918", rows: {
                    dataCmp: "Hold_gamedata",
                    dataName: "gameData",
                    gameScene: "solt_loading",
                }
            }, //赌场单机版(918)
            {
                id: "CASINO_WAR_918", rows: {
                    dataCmp: "CWar_gamedata",
                    dataName: "gameData",
                    gameScene: "solt_loading",
                }
            }, //赌场战争单机版(918)
            {
                id: "MONKEY_ZWBS_918", rows: {
                    dataCmp: "RTMKStoryData",
                    dataName: "gameData",
                    gameScene: "solt_loading",
                }
            }, //西游争霸之战无不胜(918)
            {
                id: "ARC_ZWBS_LINE", rows: {
                    dataCmp: "RTMKStoryData",
                    dataName: "gameData",
                    gameScene: "solt_loading",
                }
            }, //西游争霸之战无不胜在线(918)
            {
                id: "BULL_918", rows: {
                    dataCmp: "Bull918_gamedata",
                    dataName: "gameData",
                    gameScene: "solt_loading",
                }
            }, //牛牛单机版(918)
            {
                id: "ROULET_73", rows: {
                    dataCmp: "Ro73_gamedata",
                    dataName: "gameData",
                    gameScene: "solt_loading",
                }
            }, //轮盘73单机版(918)
            {
                id: "ROULET_24", rows: {
                    dataCmp: "Ro24_gamedata",
                    dataName: "gameData",
                    gameScene: "solt_loading",
                }
            }, //轮盘24单机版(918)
            {
                id: "ROULETTE_MINI", rows: {
                    dataCmp: "RoMini_gamedata",
                    dataName: "gameData",
                    gameScene: "solt_loading",
                }
            }, //轮盘24单机版(918)
            {
                id: "ROULET_36", rows: {
                    dataCmp: "Ro36_gamedata",
                    dataName: "gameData",
                    gameScene: "solt_loading",
                }
            }, //轮盘36单机版(918)
            {
                id: "SLOT_GLF", rows: {
                    dataCmp: "GLF_GameData",
                    dataName: "gameData",
                    gameScene: "solt_loading",
                }
            }, //金莲花

            {
                id: "SLOT_JLBD", rows: {
                    dataCmp: "SlotMachine_GameData",
                    dataName: "gameData",
                    gameScene: "solt_loading",
                }
            }, //极乐宝典

            {
                id: "BCBM", rows: {
                    dataCmp: "bcbm777Data",
                    dataName: "gameData",
                    gameScene: "solt_loading",
                }
            }, //奔驰宝马
            {
                id: "BAIJIALE", rows: {
                    dataCmp: "baijialeData",
                    dataName: "gameData",
                    gameScene: "solt_loading",
                }
            }, //百家乐初级场
            {
                id: "BAIJIALE_MID", rows: {
                    dataCmp: "baijialeData",
                    dataName: "gameData",
                    gameScene: "solt_loading",
                }
            }, //百家乐中级场
            {
                id: "BAIJIALE_HIGH", rows: {
                    dataCmp: "baijialeData",
                    dataName: "gameData",
                    gameScene: "solt_loading",
                }
            }, //百家乐高级场

            {
                id: "BIG_SMALL", rows: {
                    dataCmp: "bigSmall_data",
                    dataName: "gameData",
                    gameScene: "solt_loading",
                }
            }, //百家乐高级场

            {
                id: "TWENTYONE777", rows: {
                    dataCmp: "twentyone777Data",
                    dataName: "gameData",
                    gameScene: "solt_loading",
                }
            }, //21点
            {
                id: "HWFISH", rows: {
                    dataCmp: "FishData",
                    dataName: "gameData",
                    gameScene: "solt_loading",
                }
            },
            // 海王捕鱼
            {
                id: "FISHJOY_WKNH", rows: {
                    dataCmp: "FishData",
                    dataName: "gameData",
                    gameScene: "solt_loading",
                }
            }, //悟空闹海
            {
                id: "FISHJOY_JCBY", rows: {
                    dataCmp: "FishData",
                    dataName: "gameData",
                    gameScene: "solt_loading",
                }
            }, //金蟾捕鱼
            {
                id: "FISHJOY_LKBY", rows: {
                    dataCmp: "FishData",
                    dataName: "gameData",
                    gameScene: "solt_loading",
                }
            }, //李逵捕鱼
            {
                id: "YQSFISH", rows: {
                    dataCmp: "FishData",
                    dataName: "gameData",
                    gameScene: "solt_loading",
                }
            }, //摇钱树捕鱼
            {
                id: "FISHSTAR_DSBY", rows: {
                    dataCmp: "FishData",
                    dataName: "gameData",
                    gameScene: "solt_loading",
                    selectRoom: true,
                }
            }, //大圣捕鱼
            {
                id: "FISHSTAR_LKPY", rows: {
                    dataCmp: "FishData",
                    dataName: "gameData",
                    gameScene: "solt_loading",
                    selectRoom: true,
                }
            }, //李逵劈鱼
            {
                id: "FISHSTAR_BYZX", rows: {
                    dataCmp: "FishData",
                    dataName: "gameData",
                    gameScene: "solt_loading",
                    selectRoom: true,
                }
            }, //捕鱼之星
            {
                id: "HWFISH_918", rows: {
                    dataCmp: "FishData",
                    dataName: "gameData",
                    gameScene: "hwfish918_loading",
                    selectRoom: true,
                }
            }, //海王捕鱼918
            {
                id: "BIRDSFISH", rows: {
                    dataCmp: "FishData",
                    dataName: "gameData",
                    gameScene: "solt_loading",
                }
            }, //鸟王争霸
            {
                id: "RAIDENFISH", rows: {
                    dataCmp: "FishData",
                    dataName: "gameData",
                    gameScene: "solt_loading",
                }
            }, //雷电捕鱼
            {
                id: "SPONGEBOB", rows: {
                    dataCmp: "FishData",
                    dataName: "gameData",
                    gameScene: "solt_loading",
                }
            }, //海绵宝宝
            {
                id: "FISHSTAR_DSBY_WP", rows: {
                    dataCmp: "FishData",
                    dataName: "gameData",
                    gameScene: "solt_loading",
                    selectRoom: true,
                }
            }, //大圣捕鱼万炮版
            {
                id: "FISHSTAR_LKPY_WP", rows: {
                    dataCmp: "FishData",
                    dataName: "gameData",
                    gameScene: "solt_loading",
                    selectRoom: true,
                }
            }, //李逵劈鱼万炮版
            {
                id: "FISHSTAR_BYZX_WP", rows: {
                    dataCmp: "FishData",
                    dataName: "gameData",
                    gameScene: "solt_loading",
                    selectRoom: true,
                }
            }, //捕鱼之星万炮版
            {
                id: "HWFISH_918_WP", rows: {
                    dataCmp: "FishData",
                    dataName: "gameData",
                    gameScene: "solt_loading",
                    selectRoom: true,
                }
            }, //海王捕鱼918万炮版
            {
                id: "INSECTSFISH", rows: {
                    dataCmp: "FishData",
                    dataName: "gameData",
                    gameScene: "solt_loading",
                }
            }, //虫虫乐园
            {
                id: "NEPTUNEFISH", rows: {
                    dataCmp: "FishData",
                    dataName: "gameData",
                    gameScene: "solt_loading",
                }
            }, //渔人码头

            {
                id: "SLOT_TLG", rows: {
                    dataCmp: "SlotMachine_GameData",
                    dataName: "gameData",
                    gameScene: "Thelistofgods_loading",
                }
            }, //封神榜

            // {id:"ROULETTE", rows:{
            //     dataCmp: "RouletteGameData",
            //     dataName: "gameData",
            //     gameScene: "solt_loading",
            // }}, //俄罗斯转盘 初级场
            {
                id: "ROULETTE_MID", rows: {
                    dataCmp: "RouletteGameData",
                    dataName: "gameData",
                    gameScene: "solt_loading",
                }
            }, //俄罗斯转盘 百家乐中级场
            {
                id: "ROULETTE_HIGH", rows: {
                    dataCmp: "RouletteGameData",
                    dataName: "gameData",
                    gameScene: "solt_loading",
                }
            }, //俄罗斯转盘 百家乐高级场

            {
                id: "SLOT_PD", rows: {
                    dataCmp: "SlotMachine_GameData",
                    dataName: "gameData",
                    gameScene: "solt_loading",
                }
            },
            {
                id: "SLOT_JJX", rows: {
                    dataCmp: "SlotMachine_GameData",
                    dataName: "gameData",
                    gameScene: "solt_loading",
                }
            },
            {
                id: "SLOT_GSGL", rows: {
                    dataCmp: "GSGL_GameData",
                    dataName: "gameData",
                    gameScene: "solt_loading",
                }
            },
            {
                id: "SLOT_YNXJ", rows: {
                    dataCmp: "SlotMachine_GameData",
                    dataName: "gameData",
                    gameScene: "solt_loading",
                }
            },
            {
                id: "SLOT_SHZ", rows: {
                    dataCmp: "SlotMachine_GameData",
                    dataName: "gameData",
                    gameScene: "solt_loading",
                }
            },

            {
                id: "ARC_YCLS", rows: {
                    dataCmp: "RTEPSData",
                    dataName: "gameData",
                    gameScene: "solt_loading",
                }
            }, // 英超联赛

            {
                id: "FRUIT_SLOT", rows: {
                    dataCmp: "FUST_GameData",
                    dataName: "gameData",
                    gameScene: "solt_loading",
                }
            }, // 水果slot
            {
                id: "FRUIT", rows: {
                    dataCmp: "FruitGameData",
                    dataName: "gameData",
                    gameScene: "solt_loading",
                }
            }, // 经典水果
            {
                id: "SLOT_SLWH", rows: {
                    dataCmp: "forestparty777Data",
                    dataName: "gameData",
                    gameScene: "solt_loading",
                }
            }, // 森林舞会
            {
                id: "SLWH_918NEW", rows: {
                    dataCmp: "FP918_Data",
                    dataName: "gameData",
                    gameScene: "solt_loading",
                }
            }, //森林舞会（918新版）

            {
                id: "LEOPARD", rows: {
                    dataCmp: "LeopardGameData",
                    dataName: "gameData",
                    gameScene: "solt_loading",
                }
            },
            {
                id: "HULUJI", rows: {
                    dataCmp: "HLJGameData",
                    dataName: "gameData",
                    gameScene: "solt_loading",
                }
            },
            {
                id: "SLOT_ROBIN", rows: {
                    dataCmp: "SlotMachine_GameData",
                    dataName: "gameData",
                    gameScene: "solt_loading",
                }
            }, // 罗宾汉
            {
                id: "SLOT_GLYY", rows: {
                    dataCmp: "SlotMachine_GameData",
                    dataName: "gameData",
                    gameScene: "solt_loading",
                }
            }, // 金莲淫液
            {
                id: "SLOT_SGIRL", rows: {
                    dataCmp: "SlotMachine_GameData",
                    dataName: "gameData",
                    gameScene: "solt_loading",
                }
            }, // 性感美女

            {
                id: "SLOT_FORTUNE_PANDA", rows: {
                    dataCmp: "SlotMachine_GameData",
                    dataName: "gameData",
                    gameScene: "solt_loading",
                }
            }, // 富贵熊猫
            {
                id: "SLOT_TGSY", rows: {
                    dataCmp: "SlotMachine_GameData",
                    dataName: "gameData",
                    gameScene: "solt_loading",
                }
            }, // 泰国神游
            {
                id: "SLOT_FOOTBALL", rows: {
                    dataCmp: "SlotMachine_GameData",
                    dataName: "gameData",
                    gameScene: "solt_loading",
                }
            }, // 足球嘉年华
            {
                id: "SLOT_ZHANWM", rows: {
                    dataCmp: "SlotMachine_GameData",
                    dataName: "gameData",
                    gameScene: "solt_loading",
                }
            }, // 斩五门
            {
                id: "SLOT_FORTUNE", rows: {
                    dataCmp: "SlotMachine_GameData",
                    dataName: "gameData",
                    gameScene: "solt_loading",
                }
            }, // 发大财
            {
                id: "SLOT_CHERRY", rows: {
                    dataCmp: "SlotMachine_GameData",
                    dataName: "gameData",
                    gameScene: "solt_loading",
                }
            }, // 樱桃的爱
            {
                id: "SLOT_SPARTA30", rows: {
                    dataCmp: "SlotMachine_GameData",
                    dataName: "gameData",
                    gameScene: "solt_loading",
                }
            }, // 斯巴达30
            {
                id: "SLOT_EASTER", rows: {
                    dataCmp: "SlotMachine_GameData",
                    dataName: "gameData",
                    gameScene: "solt_loading",
                }
            }, // 复活节

            {
                id: "SLOT_STEAMTOWER", rows: {
                    dataCmp: "SlotMachine_GameData",
                    dataName: "gameData",
                    gameScene: "solt_loading",
                }
            }, // 蒸汽塔
            {
                id: "SLOT_NEWYEAR", rows: {
                    dataCmp: "SlotMachine_GameData",
                    dataName: "gameData",
                    gameScene: "solt_loading",
                }
            }, // 拜年
            {
                id: "SLOT_VICTORY", rows: {
                    dataCmp: "SlotMachine_GameData",
                    dataName: "gameData",
                    gameScene: "solt_loading",
                }
            }, // 胜利

            {
                id: "SLOT_RALLY", rows: {
                    dataCmp: "SlotMachine_GameData",
                    dataName: "gameData",
                    gameScene: "solt_loading",
                }
            }, // 拉力赛
            {
                id: "SLOT_WESTERN_PASTURE", rows: {
                    dataCmp: "SlotMachine_GameData",
                    dataName: "gameData",
                    gameScene: "westernPasture_loading",
                }
            }, // 西部牧场 slot
            {
                id: "SLOT_FARM_STORY", rows: {
                    dataCmp: "SlotMachine_GameData",
                    dataName: "gameData",
                    gameScene: "farmStory_loading",
                }
            }, // 农场故事 slot
            {
                id: "SLOT_BLAZING_STAR", rows: {
                    dataCmp: "SlotMachine_GameData",
                    dataName: "gameData",
                    gameScene: "blazingStar_loading",
                }
            }, // 闪亮之星 slot
            {
                id: "SLOT_ICE_AND_SNOW", rows: {
                    dataCmp: "SlotMachine_GameData",
                    dataName: "gameData",
                    gameScene: "solt_loading",
                }
            }, // 冰雪世界 slot
            {
                id: "SLOT_INDIA_MYTH", rows: {
                    dataCmp: "SlotMachine_GameData",
                    dataName: "gameData",
                    gameScene: "solt_loading",
                }
            }, // 印度神话 slot
            {
                id: "SLOT_TRAFFIC_LIGHT", rows: {
                    dataCmp: "SlotMachine_GameData",
                    dataName: "gameData",
                    gameScene: "solt_loading",
                }
            }, // 红绿灯 slot
            {
                id: "SLOT_GARDEN", rows: {
                    dataCmp: "SlotMachine_GameData",
                    dataName: "gameData",
                    gameScene: "solt_loading",
                }
            }, // 花园 slot
            {
                id: "SLOT_WUFUMEN", rows: {
                    dataCmp: "SlotMachine_GameData",
                    dataName: "gameData",
                    gameScene: "solt_loading",
                }
            }, // 五福门 slot
            {
                id: "SLOT_WANGCAI", rows: {
                    dataCmp: "SlotMachine_GameData",
                    dataName: "gameData",
                    gameScene: "solt_loading",
                }
            }, // 旺财 slot
            {
                id: "SLOT_WOLFER", rows: {
                    dataCmp: "SlotMachine_GameData",
                    dataName: "gameData",
                    gameScene: "solt_loading",
                }
            }, // 猎狼者 slot
            {
                id: "SLOT_MAGICIAN", rows: {
                    dataCmp: "SlotMachine_GameData",
                    dataName: "gameData",
                    gameScene: "magician_loading",
                }
            }, // 魔法师 slot
            {
                id: "SLOT_STONE_AGE", rows: {
                    dataCmp: "SlotMachine_GameData",
                    dataName: "gameData",
                    gameScene: "solt_loading",
                }
            }, // 石器时代 slot
            {
                id: "SLOT_SPIRITUAL_GARDEN", rows: {
                    dataCmp: "SlotMachine_GameData",
                    dataName: "gameData",
                    gameScene: "solt_loading",
                }
            }, // 精灵花园 slot
            {
                id: "SLOT_SEA_WORLD", rows: {
                    dataCmp: "SlotMachine_GameData",
                    dataName: "gameData",
                    gameScene: "seaWorld_loading",
                }
            }, // 海洋世界 slot
            {
                id: "SLOT_HUANG_DI_LAI_LE", rows: {
                    dataCmp: "SlotMachine_GameData",
                    dataName: "gameData",
                    gameScene: "huangDiLaiLe_loading",
                }
            }, // 皇帝来了(老子是皇帝) slot
            {
                id: "SLOT_CHEN_PAO_ISLAND", rows: {
                    dataCmp: "SlotMachine_GameData",
                    dataName: "gameData",
                    gameScene: "treasureIsland_loading",
                }
            }, // 珍宝岛 slot
            {
                id: "SLOT_CIRCUS", rows: {
                    dataCmp: "SlotMachine_GameData",
                    dataName: "gameData",
                    gameScene: "solt_loading",
                }
            }, // 马戏团 slot
            {
                id: "SLOT_AIRPLANE", rows: {
                    dataCmp: "SlotMachine_GameData",
                    dataName: "gameData",
                    gameScene: "solt_loading",
                }
            }, // 飞机 slot
            {
                id: "SLOT_FAME", rows: {
                    dataCmp: "SlotMachine_GameData",
                    dataName: "gameData",
                    gameScene: "solt_loading",
                }
            }, // 名利场 slot
            {
                id: "SLOT_TGFQ", rows: {
                    dataCmp: "Thaibliss_GameData",
                    dataName: "gameData",
                    gameScene: "solt_loading",
                }
            }, // 泰国风情 slot

            {
                id: "SLOT_GOLDEN_DRAGON", rows: {
                    dataCmp: "SlotMachine_GameData",
                    dataName: "gameData",
                    gameScene: "solt_loading",
                }
            }, // 金龙赐福 slot
            {
                id: "SLOT_BRAVE_LEGEND", rows: {
                    dataCmp: "SlotMachine_GameData",
                    dataName: "gameData",
                    gameScene: "solt_loading",
                }
            }, // 勇敢传说 slot
            {
                id: "SINGLE_PICK", rows: {
                    dataCmp: "SGPK_Data",
                    dataName: "gameData",
                    gameScene: "solt_loading",
                }
            }, //单挑
            {
                id: "SLOT_ALADDIN", rows: {
                    dataCmp: "SlotMachine_GameData",
                    dataName: "gameData",
                    gameScene: "solt_loading",
                }
            }, // 阿拉丁 slot
            {
                id: "SLOT_HALLOWEEN", rows: {
                    dataCmp: "SlotMachine_GameData",
                    dataName: "gameData",
                    gameScene: "halloween_loading",
                }
            }, // 万圣节 slot
            {
                id: "SLOT_HALLOWEEN_SURPRISE", rows: {
                    dataCmp: "SlotMachine_GameData",
                    dataName: "gameData",
                    gameScene: "solt_loading",
                }
            }, // 万圣节惊喜 slot
            {
                id: "SLOT_GOLDEN_TREE918", rows: {
                    dataCmp: "SlotMachine_GameData",
                    dataName: "gameData",
                    gameScene: "solt_loading",
                }
            }, // 黄金树918 slot
            {
                id: "SLOT_TERNADO", rows: {
                    dataCmp: "SlotMachine_GameData",
                    dataName: "gameData",
                    gameScene: "solt_loading",
                }
            }, // 龙卷风 slot
            {
                id: "SLOT_YEMEI", rows: {
                    dataCmp: "SlotMachine_GameData",
                    dataName: "gameData",
                    gameScene: "solt_loading",
                }
            }, // 野妹 slot
            {
                id: "SLOT_WATER", rows: {
                    dataCmp: "SlotMachine_GameData",
                    dataName: "gameData",
                    gameScene: "solt_loading",
                }
            }, // 海豚 slot
            {
                id: "SLOT_XUEMEI", rows: {
                    dataCmp: "XM_GameData",
                    dataName: "gameData",
                    gameScene: "solt_loading",
                }
            }, // 学妹 slot
            {
                id: "SLOT_ORIENT", rows: {
                    dataCmp: "SlotMachine_GameData",
                    dataName: "gameData",
                    gameScene: "solt_loading",
                }
            }, // 东方快车 slot
            {
                id: "SLOT_COYOTECASH", rows: {
                    dataCmp: "SlotMachine_GameData",
                    dataName: "gameData",
                    gameScene: "solt_loading",
                }
            }, // 野狼现金 slot
            {
                id: "SLOT_MAGICAL_DRAGON", rows: {
                    dataCmp: "SlotMachine_GameData",
                    dataName: "gameData",
                    gameScene: "solt_loading",
                }
            }, // 野狼现金 slot
            {
                id: "SLOT_MOTOCYCLE", rows: {
                    dataCmp: "SlotMachine_GameData",
                    dataName: "gameData",
                    gameScene: "solt_loading",
                }
            }, // 东方快车 slot
            {
                id: "SLOT_FASHION", rows: {
                    dataCmp: "SlotMachine_GameData",
                    dataName: "gameData",
                    gameScene: "solt_loading",
                }
            }, // 东方快车 slot
            {
                id: "SLOT_GREAT_CHINA", rows: {
                    dataCmp: "SlotMachine_GameData",
                    dataName: "gameData",
                    gameScene: "solt_loading",
                }
            }, // 东方快车 slot
            {
                id: "SLOT_CLEOPATRA", rows: {
                    dataCmp: "SlotMachine_GameData",
                    dataName: "gameData",
                    gameScene: "solt_loading",
                }
            }, // 埃及艳后 slot
            {
                id: "SLOT_BIGSHOT", rows: {
                    dataCmp: "SlotMachine_GameData",
                    dataName: "gameData",
                    gameScene: "solt_loading",
                }
            }, // 头面人物
            {
                id: "FQZS_SP", rows: {
                    dataCmp: "Fqzs_GameData",
                    dataName: "gameData",
                    gameScene: "solt_loading",
                }
            }, //飞禽走兽单机
            {
                id: "SLOT_THE_DISCOVER", rows: {
                    dataCmp: "TD_GameData",
                    dataName: "gameData",
                    gameScene: "solt_loading",
                }
            }, // 发现
            {
                id: "PHOENIX_SP", rows: {
                    dataCmp: "Phoenix_GameData",
                    dataName: "gameData",
                    gameScene: "solt_loading",
                }
            }, //火飞凤舞
            {
                id: "POKEMON_SP", rows: {
                    dataCmp: "Pokemon_GameData",
                    dataName: "gameData",
                    gameScene: "solt_loading",
                }
            }, //宠物小精灵
            {
                id: "SLOT_NINJA", rows: {
                    dataCmp: "SlotMachine_GameData",
                    dataName: "gameData",
                    gameScene: "solt_loading",
                }
            }, // 忍者
            {
                id: "SLOT_FRUITSPACE", rows: {
                    dataCmp: "FS_GameData",
                    dataName: "gameData",
                    gameScene: "solt_loading",
                }
            }, // 水果天地
            {
                id: "SLOT_NIGHTCLUB", rows: {
                    dataCmp: "NC_GameData",
                    dataName: "gameData",
                    gameScene: "solt_loading",
                }
            }, // 夜总会
            {
                id: "SLOT_CLASSIC", rows: {
                    dataCmp: "ClassicSlot_GameData",
                    dataName: "gameData",
                    gameScene: "solt_loading",
                }
            }, //经典拉霸
            {
                id: "SLOT_CRAZY7", rows: {
                    dataCmp: "Crazy7_GameData",
                    dataName: "gameData",
                    gameScene: "solt_loading",
                }
            }, //疯狂7
            {
                id: "SLOT_HZLB", rows: {
                    dataCmp: "Slotmonkey_GameData",
                    dataName: "gameData",
                    gameScene: "solt_loading",
                }
            }, //猴子拉霸
            {
                id: "SLOT_8BALL", rows: {
                    dataCmp: "SlotBall_GameData",
                    dataName: "gameData",
                    gameScene: "solt_loading",
                }
            }, //8号球
            {
                id: "SLOT_PAYDIRT", rows: {
                    dataCmp: "SlotMachine_GameData",
                    dataName: "gameData",
                    gameScene: "solt_loading",
                }
            }, // 富矿发现
            {
                id: "SLOT_INFINITY_VENUS", rows: {
                    dataCmp: "Venus_GameData",
                    dataName: "gameData",
                    gameScene: "slot_venus_loading",
                }
            }, //infinity-venus
            {
                id: "GLITZ_INFINITY", rows: {
                    dataCmp: "Glitz_GameData",
                    dataName: "gameData",
                    gameScene: "solt_loading",
                }
            }, // glitz(inifinity)
            {
                id: "SLOT_GOWV2", rows: {
                    hallScene: "",
                    dataCmp: "SlotMachine_GameData",
                    dataName: "gameData",
                    gameScene: "godofwealth_v2_loading",
                }
            }, //财神到2
            {
                id: "SLOT_CHICKEN", rows: {
                    hallScene: "",
                    dataCmp: "cckn_GameData",
                    dataName: "gameData",
                    gameScene: "solt_chicken_loading",
                }
            }, //吃鸡拉霸
            {
                id: "SLOT_DRAGON5_HD", rows: {
                    dataCmp: "DG_GameData",
                    dataName: "gameData",
                    gameScene: "Dragon5_HD_loading",
                }
            }, //龙5
            {
                id: "SLOT_ZHAOYUN", rows: {
                    dataCmp: "SlotMachine_GameData",
                    dataName: "gameData",
                    gameScene: "zhaoyun_loading",
                    orientation: "portrait",
                }
            }, //赵云传
            {
                id: "SLOT_MOMENT_OF_WONDER", rows: {
                    dataCmp: "MomentOfWonder_GameData",
                    dataName: "gameData",
                    gameScene: "MomentOfWonder_loading",
                    orientation: "portrait",
                }
            }, //奇迹时刻
            //{id:"REGAL_TIGER,{dataCmp:"RegalTiger_GameData",dataName:"gameData",gameScene:"RegalTiger_loading",orientation:"portrait"}},   //老虎
            // {id:"SLOT_GODOFFIRE,{dataCmp:"SlotMachine_GameData",dataName:"gameData",gameScene:"goldOfFire_loading",orientation:"portrait"}},   //火神
            // {id:"SLOT_QUEENOFSEA,{dataCmp:"queenOfSea_GameData",dataName:"gameData",gameScene:"queenOfSea_loading",orientation:"portrait"}},   //美人鱼
            {
                id: "JALAPAND_DELIGHT", rows: {
                    dataCmp: "JalapandDelight_GameData",
                    dataName: "gameData",
                    gameScene: "JalapandDelight_loading",
                    orientation: "portrait",
                }
            }, //墨西哥帅哥

            //{id:"DIAMOND_FOREST,{dataCmp:"DiamondForest_GameData",dataName:"gameData",gameScene:"DiamondForest_Loading",orientation:"portrait"}},              //钻石森林

            // {id:"SLOT_KINGOFOLYMPUS,{dataCmp:"SlotMachine_GameData",dataName:"gameData",gameScene:"kingOfOlympus_loading",orientation:"portrait"}},   //奥林匹斯国王

            /////=======================================================================
            //配置说明：
            //dataCmp：数据模块文件
            //dataName：类名（兼容旧游戏的参数，可默认gameData）
            //cfgCmp: 游戏配置数据
            //gameScene：loading场景（兼容旧游戏，参数名称就没有修改了）
            //mainScene：游戏场景
            //orientation：游戏横竖屏配置，默认横屏
            {
                id: "SLOT_THEMEPARKBLAST", rows: {
                    dataCmp: "ThemeParkBlast_GameData",
                    dataName: "gameData",
                    gameScene: "ThemeParkBlast_loading",
                    cfgCmp: "ThemeParkBlast_Cfg",
                    mainScene: "ThemeParkBlast",
                    orientation: "portrait",
                }
            }, //ThemeParkBlast

            //墨西哥帅哥
            {
                id: "JALAPAND_DELIGHT", rows: {
                    dataCmp: "JalapanDelight_GameData",
                    dataName: "gameData",
                    cfgCmp: "JalapandDelight_Cfg",
                    gameScene: "JalapandDelight_loading",
                    mainScene: "JalapandDelight",
                    orientation: "portrait",
                }
            },
            //蒙面英雄
            {
                id: "MASKED_HERO", rows: {
                    dataCmp: "MaskedHero_GameData",
                    dataName: "gameData",
                    cfgCmp: "MaskedHero_Cfg",
                    gameScene: "MaskedHero_loading",
                    mainScene: "MaskedHero",
                    orientation: "portrait",
                }
            },
            //幸运蜜蜂
            {
                id: "LUCKY_BEE", rows: {
                    dataCmp: "LuckyBee_GameData",
                    dataName: "gameData",
                    cfgCmp: "LuckyBee_Cfg",
                    gameScene: "LuckyBee_loading",
                    mainScene: "LuckyBee",
                    orientation: "portrait",
                }
            },
            //鼠年
            {
                id: "YEAR_OF_THE_RAT", rows: {
                    dataCmp: "YearOfTheRat_GameData",
                    dataName: "gameData",
                    cfgCmp: "YearOfTheRat_Cfg",
                    gameScene: "YearOfTheRat_loading",
                    mainScene: "YearOfTheRat",
                    orientation: "portrait",
                }
            },
            // 太阳女神
            {
                id: "SLOT_SUNGODDESS", rows: {
                    dataCmp: "LMSlots_GameData_Base",
                    dataName: "gameData",
                    cfgCmp: "SunGoddess_Cfg",
                    gameScene: "SunGoddess_loading",
                    mainScene: "SunGoddess",
                    orientation: "portrait",
                }
            },
            // 宾果猫
            {
                id: "SLOT_BINGOMEOW", rows: {
                    dataCmp: "LMSlots_GameData_Base",
                    dataName: "gameData",
                    cfgCmp: "BingoMeow_Cfg",
                    gameScene: "BingoMeow_loading",
                    mainScene: "BingoMeow",
                    orientation: "portrait",
                }
            },
            // 珍宝丛林
            {
                id: "SLOT_TREASUREJUNGLE", rows: {
                    dataCmp: "LMSlots_GameData_Base",
                    dataName: "gameData",
                    cfgCmp: "TreasureJungle_Cfg",
                    gameScene: "TreasureJungle_loading",
                    mainScene: "TreasureJungle",
                    orientation: "portrait",
                }
            },
            // 青蛙王子
            {
                id: "SLOT_PRINCECHARMING", rows: {
                    dataCmp: "LMSlots_GameData_Base",
                    dataName: "gameData",
                    cfgCmp: "PrinceCharming_Cfg",
                    gameScene: "PrinceCharming_loading",
                    mainScene: "PrinceCharming",
                    orientation: "portrait",
                }
            },
            // 大功率
            {
                id: "SLOT_HIGHPOWER", rows: {
                    dataCmp: "LMSlots_GameData_Base",
                    dataName: "gameData",
                    cfgCmp: "HighPower_Cfg",
                    gameScene: "HighPower_loading",
                    mainScene: "HighPower",
                    orientation: "portrait",
                }
            },
            // 辉煌的宝藏
            {
                id: "SLOT_BRILLIANTTREASURES", rows: {
                    dataCmp: "LMSlots_GameData_Base",
                    dataName: "gameData",
                    cfgCmp: "BrilliantTreasures_Cfg",
                    gameScene: "BrilliantTreasures_loading",
                    mainScene: "BrilliantTreasures",
                    orientation: "portrait",
                }
            },
            // 猛犸象gems
            {
                id: "SLOT_MAMMOTHGRANDGEMS", rows: {
                    dataCmp: "LMSlots_GameData_Base",
                    dataName: "gameData",
                    cfgCmp: "MammothGrandGems_Cfg",
                    gameScene: "MammothGrandGems_loading",
                    mainScene: "MammothGrandGems",
                    orientation: "portrait",
                }
            },
            // 猛犸象
            {
                id: "SLOT_MAMMOTHGRAND", rows: {
                    dataCmp: "LMSlots_GameData_Base",
                    dataName: "gameData",
                    cfgCmp: "MammothGrand_Cfg",
                    gameScene: "MammothGrand_loading",
                    mainScene: "MammothGrand",
                    orientation: "portrait",
                }
            },
            // 怪异的万圣节
            {
                id: "SLOT_SPOOKYHALLOWEEN", rows: {
                    dataCmp: "LMSlots_GameData_Base",
                    dataName: "gameData",
                    cfgCmp: "SpookyHalloween_Cfg",
                    gameScene: "SpookyHalloween_loading",
                    mainScene: "SpookyHalloween",
                    orientation: "portrait",
                }
            },
            // 石器时代
            {
                id: "SLOT_STONEAGEDTREASURE", rows: {
                    dataCmp: "LMSlots_GameData_Base",
                    dataName: "gameData",
                    cfgCmp: "StoneAgedTreasure_Cfg",
                    gameScene: "StoneAgedTreasure_loading",
                    mainScene: "StoneAgedTreasure",
                    orientation: "portrait",
                }
            },
            // 怪物现金
            {
                id: "SLOT_MONSTERCASH", rows: {
                    dataCmp: "LMSlots_GameData_Base",
                    dataName: "gameData",
                    cfgCmp: "MonsterCash_Cfg",
                    gameScene: "MonsterCash_loading",
                    mainScene: "MonsterCash",
                    orientation: "portrait",
                }
            },
            // 俩辣椒
            {
                id: "SLOT_DOUBLECHILI", rows: {
                    dataCmp: "DoubleChili_GameData",
                    dataName: "gameData",
                    cfgCmp: "DoubleChili_Cfg",
                    gameScene: "DoubleChili_loading",
                    mainScene: "DoubleChili",
                    orientation: "portrait",
                }
            },
            // 玛雅
            {
                id: "SLOT_MAYADEORO", rows: {
                    dataCmp: "MayaDeoro_GameData",
                    dataName: "gameData",
                    cfgCmp: "MayaDeoro_Cfg",
                    gameScene: "MayaDeoro_loading",
                    mainScene: "MayaDeoro",
                    orientation: "portrait",
                }
            },
            // 哪吒闹海
            {
                id: "SLOT_PRINCENEZHA", rows: {
                    dataCmp: "PrinceNeZha_GameData",
                    dataName: "gameData",
                    cfgCmp: "PrinceNeZha_Cfg",
                    gameScene: "PrinceNeZha_loading",
                    mainScene: "PrinceNeZha",
                    orientation: "portrait",
                }
            },
            // 小猪大劫案
            {
                id: "SLOT_PIGGYHEIST", rows: {
                    dataCmp: "PiggyHeist_GameData",
                    dataName: "gameData",
                    cfgCmp: "PiggyHeist_Cfg",
                    gameScene: "PiggyHeist_loading",
                    mainScene: "PiggyHeist",
                    orientation: "portrait",
                }
            },
            // 咆哮的月亮
            {
                id: "SLOT_HOWLINGMOON", rows: {
                    dataCmp: "HowlingMoon_GameData",
                    dataName: "gameData",
                    cfgCmp: "HowlingMoon_Cfg",
                    gameScene: "HowlingMoon_loading",
                    mainScene: "HowlingMoon",
                    orientation: "portrait",
                }
            },
            // 外星人杀手
            {
                id: "SLOT_ALIENBUSTER", rows: {
                    dataCmp: "AlienBuster_GameData",
                    dataName: "gameData",
                    cfgCmp: "AlienBuster_Cfg",
                    gameScene: "AlienBuster_loading",
                    mainScene: "AlienBuster",
                    orientation: "portrait",
                }
            },
            // 相扑
            {
                id: "SLOT_SUMO", rows: {
                    dataCmp: "Sumo_GameData",
                    dataName: "gameData",
                    cfgCmp: "Sumo_Cfg",
                    gameScene: "Sumo_loading",
                    mainScene: "Sumo",
                    orientation: "portrait",
                }
            },
            // 拇指姑娘
            {
                id: "SLOT_THUMBELINA", rows: {
                    dataCmp: "Thumbelina_GameData",
                    dataName: "gameData",
                    cfgCmp: "Thumbelina_Cfg",
                    gameScene: "Thumbelina_loading",
                    mainScene: "Thumbelina",
                    orientation: "portrait",
                }
            },
            // 巨龙钻石
            {
                id: "SLOT_DRAGONDIAMOND", rows: {
                    dataCmp: "DragonDiamond_GameData",
                    dataName: "gameData",
                    cfgCmp: "DragonDiamond_Cfg",
                    gameScene: "DragonDiamond_loading",
                    mainScene: "DragonDiamond",
                    orientation: "portrait",
                }
            },
            // 妖精爆炸
            {
                id: "SLOT_LEPRECHAUNBLAST", rows: {
                    dataCmp: "LeprechaunBlast_GameData",
                    dataName: "gameData",
                    cfgCmp: "LeprechaunBlast_Cfg",
                    gameScene: "LeprechaunBlast_loading",
                    mainScene: "LeprechaunBlast",
                    orientation: "portrait",
                }
            },
            // 美国大亨
            {
                id: "SLOT_AMERICANBILLIONAIRE", rows: {
                    dataCmp: "AmericanBillionaire_GameData",
                    dataName: "gameData",
                    cfgCmp: "AmericanBillionaire_Cfg",
                    gameScene: "AmericanBillionaire_loading",
                    mainScene: "AmericanBillionaire",
                    orientation: "portrait",
                }
            },
            // 美女与野兽
            {
                id: "SLOT_BEAUTYANDTHEBEAST", rows: {
                    dataCmp: "LMSlots_GameData_Base",
                    dataName: "gameData",
                    cfgCmp: "BeautyAndTheBeast_Cfg",
                    gameScene: "BeautyAndTheBeast_loading",
                    mainScene: "BeautyAndTheBeast",
                    orientation: "portrait",
                }
            },
            // 金猪报喜
            {
                id: "SLOT_YEAROFGOLDENPIG", rows: {
                    dataCmp: "YearOfGoldenPig_GameData",
                    dataName: "gameData",
                    cfgCmp: "YearOfGoldenPig_Cfg",
                    gameScene: "YearOfGoldenPig_loading",
                    mainScene: "YearOfGoldenPig",
                    orientation: "portrait",
                }
            },
            // 双倍金块
            {
                id: "SLOT_DOUBLENUGGETS", rows: {
                    dataCmp: "DoubleNuggets_GameData",
                    dataName: "gameData",
                    cfgCmp: "DoubleNuggets_Cfg",
                    gameScene: "DoubleNuggets_loading",
                    mainScene: "DoubleNuggets",
                    orientation: "portrait",
                }
            },
            // 双倍神力
            {
                id: "SLOT_DOUBLETHUNDER", rows: {
                    dataCmp: "DoubleThunder_GameData",
                    dataName: "gameData",
                    cfgCmp: "DoubleThunder_Cfg",
                    gameScene: "DoubleThunder_loading",
                    mainScene: "DoubleThunder",
                    orientation: "portrait",
                }
            },
            // 啤酒节
            {
                id: "SLOT_BEERFESTIVAL", rows: {
                    dataCmp: "BeerFestival_GameData",
                    dataName: "gameData",
                    cfgCmp: "BeerFestival_Cfg",
                    gameScene: "BeerFestival_loading",
                    mainScene: "BeerFestival",
                    orientation: "portrait",
                }
            },
            // 战争女神
            {
                id: "SLOT_INVINCIBLEGODDESS", rows: {
                    dataCmp: "InvincibleGoddess_GameData",
                    dataName: "gameData",
                    cfgCmp: "InvincibleGoddess_Cfg",
                    gameScene: "InvincibleGoddess_loading",
                    mainScene: "InvincibleGoddess",
                    orientation: "portrait",
                }
            },
            // 佐罗
            {
                id: "SLOT_BIGDUEL", rows: {
                    dataCmp: "BigDuel_GameData",
                    dataName: "gameData",
                    cfgCmp: "BigDuel_Cfg",
                    gameScene: "BigDuel_loading",
                    mainScene: "BigDuel",
                    orientation: "portrait",
                }
            },
            // 间谍
            {
                id: "SLOT_DOUBLEAGENT", rows: {
                    dataCmp: "DoubleAgent_GameData",
                    dataName: "gameData",
                    cfgCmp: "DoubleAgent_Cfg",
                    gameScene: "DoubleAgent_loading",
                    mainScene: "DoubleAgent",
                    orientation: "portrait",
                }
            },
            // 招财猫
            {
                id: "SLOT_LUCKYCAT", rows: {
                    dataCmp: "LuckyCat_GameData",
                    dataName: "gameData",
                    cfgCmp: "LuckyCat_Cfg",
                    gameScene: "LuckyCat_Loading",
                    mainScene: "LuckyCat",
                    orientation: "portrait",
                }
            },
            // 吸血鬼
            {
                id: "SLOT_VAMPIRECOUNT", rows: {
                    dataCmp: "LMSlots_GameData_Base",
                    dataName: "gameData",
                    cfgCmp: "VampireCount_Cfg",
                    gameScene: "VampireCount_loading",
                    mainScene: "VampireCount",
                    orientation: "portrait",
                }
            },
            // 酒馆女巫
            {
                id: "SLOT_TAVERNWITCH", rows: {
                    dataCmp: "TavernWitch_GameData",
                    dataName: "gameData",
                    cfgCmp: "TavernWitch_Cfg",
                    gameScene: "TavernWitch_loading",
                    mainScene: "TavernWitch",
                    orientation: "portrait",
                }
            },
            // 宫本武藏
            {
                id: "SLOT_BLADEMASTERTOKUGAWA", rows: {
                    dataCmp: "BladeMasterTokugawa_GameData",
                    dataName: "gameData",
                    cfgCmp: "BladeMasterTokugawa_Cfg",
                    gameScene: "BladeMasterTokugawa_loading",
                    mainScene: "BladeMasterTokugawa",
                    orientation: "portrait",
                }
            },
            // 织田信长
            {
                id: "SLOT_SIXTHDAYTHEDEMON", rows: {
                    dataCmp: "SixthDayTheDemon_GameData",
                    dataName: "gameData",
                    cfgCmp: "SixthDayTheDemon_Cfg",
                    gameScene: "SixthDayTheDemon_loading",
                    mainScene: "SixthDayTheDemon",
                    orientation: "portrait",
                }
            },
            // 服部半藏
            {
                id: "SLOT_THEMAGICHANZO", rows: {
                    dataCmp: "TheMagicHanzo_GameData",
                    dataName: "gameData",
                    cfgCmp: "TheMagicHanzo_Cfg",
                    gameScene: "TheMagicHanzo_loading",
                    mainScene: "TheMagicHanzo",
                    orientation: "portrait",
                }
            },
            // 源义经
            {
                id: "SLOT_MINAMOTONOYOSHITSUNE", rows: {
                    dataCmp: "LMSlots_GameData_Base",
                    dataName: "gameData",
                    cfgCmp: "MinamotoNoYoshitsune_Cfg",
                    gameScene: "MinamotoNoYoshitsune_loading",
                    mainScene: "MinamotoNoYoshitsune",
                    orientation: "portrait",
                }
            },
            // 黑帮教父
            {
                id: "SLOT_GANGSTERGODFATHER", rows: {
                    dataCmp: "GangsterGodfather_GameData",
                    dataName: "gameData",
                    cfgCmp: "GangsterGodfather_Cfg",
                    gameScene: "GangsterGodfather_loading",
                    mainScene: "GangsterGodfather",
                    orientation: "portrait",
                }
            },
            // 发明之父
            {
                id: "SLOT_FATHEROFINVENTION", rows: {
                    dataCmp: "LMSlots_GameData_Base",
                    dataName: "gameData",
                    cfgCmp: "FatherOfInvention_Cfg",
                    gameScene: "FatherOfInvention_loading",
                    mainScene: "FatherOfInvention",
                    orientation: "portrait",
                }
            },
            // 西部牛仔
            {
                id: "SLOT_WESTCOWBOY", rows: {
                    dataCmp: "WestCowboy_GameData",
                    dataName: "gameData",
                    cfgCmp: "WestCowboy_Cfg",
                    gameScene: "WestCowboy_loading",
                    mainScene: "WestCowboy",
                    orientation: "portrait",
                }
            },
            // 德川家康
            {
                id: "SLOT_RISINGSUNTHEGREATKING", rows: {
                    dataCmp: "RisingSunTheGreatKing_GameData",
                    dataName: "gameData",
                    cfgCmp: "RisingSunTheGreatKing_Cfg",
                    gameScene: "RisingSunTheGreatKing_loading",
                    mainScene: "RisingSunTheGreatKing",
                    orientation: "portrait",
                }
            },
            // 丰臣秀吉
            {
                id: "SLOT_POLITICALSTRATEGIST", rows: {
                    dataCmp: "PoliticalStrategist_GameData",
                    dataName: "gameData",
                    cfgCmp: "PoliticalStrategist_Cfg",
                    gameScene: "PoliticalStrategist_loading",
                    mainScene: "PoliticalStrategist",
                    orientation: "portrait",
                }
            },
            // 花木兰
            {
                id: "SLOT_MULAN", rows: {
                    dataCmp: "Mulan_GameData",
                    dataName: "gameData",
                    cfgCmp: "Mulan_Cfg",
                    gameScene: "Mulan_loading",
                    mainScene: "Mulan",
                    orientation: "portrait",
                }
            },
            // 成吉思汗
            {
                id: "SLOT_GENGHISKHAN", rows: {
                    dataCmp: "GenghisKhan_GameData",
                    dataName: "gameData",
                    cfgCmp: "GenghisKhan_Cfg",
                    gameScene: "GenghisKhan_loading",
                    mainScene: "GenghisKhan",
                    orientation: "portrait",
                }
            },
            // 半人马
            {
                id: "SLOT_THECENTAUR", rows: {
                    dataCmp: "TheCentaur_GameData",
                    dataName: "gameData",
                    cfgCmp: "TheCentaur_Cfg",
                    gameScene: "TheCentaur_loading",
                    mainScene: "TheCentaur",
                    orientation: "portrait",
                }
            },
            // 嫦娥
            {
                id: "SLOT_CHANGE", rows: {
                    dataCmp: "Change_GameData",
                    dataName: "gameData",
                    cfgCmp: "Change_Cfg",
                    gameScene: "Change_loading",
                    mainScene: "Change",
                    orientation: "portrait",
                }
            },
            // 外星怪物
            {
                id: "SLOT_ALIENMONSTER", rows: {
                    dataCmp: "AlienMonster_GameData",
                    dataName: "gameData",
                    cfgCmp: "AlienMonster_Cfg",
                    gameScene: "AlienMonster_loading",
                    mainScene: "AlienMonster",
                    orientation: "portrait",
                }
            },
            // 篮球之王
            {
                id: "SLOT_BASKETBALLKING", rows: {
                    dataCmp: "BasketballKing_GameData",
                    dataName: "gameData",
                    cfgCmp: "BasketballKing_Cfg",
                    gameScene: "BasketballKing_loading",
                    mainScene: "BasketballKing",
                    orientation: "portrait",
                }
            },
            // 日本歌姬
            {
                id: "SLOT_JAPANESESINGER", rows: {
                    dataCmp: "JapaneseSinger_GameData",
                    dataName: "gameData",
                    cfgCmp: "JapaneseSinger_Cfg",
                    gameScene: "JapaneseSinger_loading",
                    mainScene: "JapaneseSinger",
                    orientation: "portrait",
                }
            },
            // 麒麟
            {
                id: "SLOT_NEWKYLIN", rows: {
                    dataCmp: "NewKylin_GameData",
                    dataName: "gameData",
                    cfgCmp: "NewKylin_Cfg",
                    gameScene: "NewKylin_loading",
                    mainScene: "NewKylin",
                    orientation: "portrait",
                }
            },
            // 奥德修斯
            {
                id: "SLOT_ODYSSEUS", rows: {
                    dataCmp: "Odysseus_GameData",
                    dataName: "gameData",
                    cfgCmp: "Odysseus_Cfg",
                    gameScene: "Odysseus_loading",
                    mainScene: "Odysseus",
                    orientation: "portrait",
                }
            },
            // 豌豆公主
            {
                id: "SLOT_PRINCESSPEA", rows: {
                    dataCmp: "PrincessPea_GameData",
                    dataName: "gameData",
                    cfgCmp: "PrincessPea_Cfg",
                    gameScene: "PrincessPea_loading",
                    mainScene: "PrincessPea",
                    orientation: "portrait",
                }
            },
            // 赫拉
            {
                id: "SLOT_HERA", rows: {
                    dataCmp: "LMSlots_GameData_Base",
                    dataName: "gameData",
                    cfgCmp: "Hera_Cfg",
                    gameScene: "Hera_loading",
                    mainScene: "Hera",
                    orientation: "portrait",
                }
            },

            //苏轼的情人
            {
                id: "SUSHI_LOVER", rows: {
                    dataCmp: "SushiLover_GameData",
                    dataName: "gameData",
                    cfgCmp: "SushiLover_Cfg",
                    gameScene: "SushiLover_Loading",
                    mainScene: "SushiLover",
                    orientation: "portrait",
                }
            },

            //财富精灵
            {
                id: "FORTUNE_GENIE", rows: {
                    dataCmp: "FortuneGenie_GameData",
                    dataName: "gameData",
                    cfgCmp: "FortuneGenie_Cfg",
                    gameScene: "fortuneGenie_Loading",
                    mainScene: "fortuneGenie",
                    orientation: "portrait",
                }
            },

            //美人鱼-海皇后
            {
                id: "SLOT_QUEENOFSEA", rows: {
                    dataCmp: "queenSea_GameData",
                    dataName: "gameData",
                    cfgCmp: "queenSea_Cfg",
                    gameScene: "queenOfSea_loading",
                    mainScene: "queenOfSea",
                    orientation: "portrait",
                }
            },

            //海盗船
            {
                id: "GOLD_ISLAND_TREASURE", rows: {
                    dataCmp: "goldTreasure_GameData",
                    dataName: "gameData",
                    cfgCmp: "goldTreasure_Cfg",
                    gameScene: "goldTreasure_loading",
                    mainScene: "goldTreasure",
                    orientation: "portrait",
                }
            },

            {
                id: "SLOT_SUPER_WICKED_BLAST", rows: {
                    dataCmp: "SuperWickedBlast_GameData",
                    dataName: "gameData",
                    gameScene: "SuperWickedBlast_loading",
                    orientation: "portrait",
                }
            }, //小恶魔

            //野马
            {
                id: "THUNDER_MUSTANG", rows: {
                    dataCmp: "ThunderMustang_GameData",
                    dataName: "gameData",
                    cfgCmp: "ThunderMustang_Cfg",
                    gameScene: "ThunderMustang_loading",
                    mainScene: "ThunderMustang",
                    orientation: "portrait",
                }
            },

            //神龙
            {
                id: "POWER_DRAGON", rows: {
                    dataCmp: "PowerDragon_GameData",
                    dataName: "gameData",
                    cfgCmp: "PowerDragon_Cfg",
                    gameScene: "PowerDragon_loading",
                    mainScene: "PowerDragon",
                    orientation: "portrait",
                }
            },

            //小恶魔
            {
                id: "SLOT_SUPER_WICKED_BLAST", rows: {
                    dataCmp: "SuperWickedBlast_GameData",
                    dataName: "gameData",
                    cfgCmp: "SuperWickedBlast_Cfg",
                    gameScene: "SuperWickedBlast_loading",
                    mainScene: "SuperWickedBlast",
                    orientation: "portrait",
                }
            },

            //圣诞老人
            {
                id: "HOLIDAY_FRENZY", rows: {
                    dataCmp: "holidayFrenzy_GameData",
                    dataName: "gameData",
                    cfgCmp: "holidayFrenzy_Cfg",
                    gameScene: "holidayFrenzy_loading",
                    mainScene: "holidayFrenzy",
                    orientation: "portrait",
                }
            },

            // 泰山
            {
                id: "JUNGLE_KING", rows: {
                    dataCmp: "JungleKing_GameData",
                    dataName: "gameData",
                    cfgCmp: "JungleKing_Cfg",
                    gameScene: "JungleKing_loading",
                    mainScene: "JungleKing",
                    orientation: "portrait",
                }
            },

            //吸烟狗
            {
                id: "SLOT_SMOKINGHOTPICHES", rows: {
                    dataCmp: "SmokingHotPiches_GameData",
                    dataName: "gameData",
                    cfgCmp: "SmokingHotPiches_Cfg",
                    gameScene: "SmokingHotPiches_loading",
                    mainScene: "SmokingHotPiches",
                    orientation: "portrait",
                }
            },

            //美杜莎
            {
                id: "SLOT_RISINGMEDUSA", rows: {
                    dataCmp: "RisingMedusa_GameData",
                    dataName: "gameData",
                    cfgCmp: "RisingMedusa_Cfg",
                    gameScene: "RisingMedusa_loading",
                    mainScene: "RisingMedusa",
                    orientation: "portrait",
                }
            },

            //快速开火
            {
                id: "SPEED_FIRE", rows: {
                    dataCmp: "SpeedFire_GameData",
                    dataName: "gameData",
                    cfgCmp: "SpeedFire_Cfg",
                    gameScene: "SpeedFire_Loading",
                    mainScene: "SpeedFire",
                    orientation: "portrait",
                }
            },

            // 开派对
            {
                id: "LET_IS_PARTY", rows: {
                    dataCmp: "LetIsParty_GameData",
                    dataName: "gameData",
                    cfgCmp: "LetIsParty_Cfg",
                    gameScene: "LetIsParty_loading",
                    mainScene: "LetIsParty",
                    orientation: "portrait",
                }
            },

            // 摇滚迪斯科
            {
                id: "SLOT_ROCKING_DISCO", rows: {
                    dataCmp: "RockingDisco_GameData",
                    dataName: "gameData",
                    cfgCmp: "RockingDisco_Cfg",
                    gameScene: "RockingDisco_loading",
                    mainScene: "RockingDisco",
                    orientation: "portrait",
                }
            },

            // 宇航员
            {
                id: "ADVENTURE_IN_SPACE", rows: {
                    dataCmp: "AdventureInSpace_GameData",
                    dataName: "gameData",
                    cfgCmp: "AdventureInSpace_Cfg",
                    gameScene: "AdventureInSpace_loading",
                    mainScene: "AdventureInSpace",
                    orientation: "portrait",
                }
            },
            //大双子星
            {
                id: "SLOT_GRANDGEMINI", rows: {
                    dataCmp: "GrandGemini_GameData",
                    dataName: "gameData",
                    cfgCmp: "GrandGemini_Cfg",
                    gameScene: "GrandGemini_loading",
                    mainScene: "GrandGemini",
                    orientation: "portrait",
                }
            },

            //丘比特
            {
                id: "SLOT_CUPIDISCRUSH", rows: {
                    dataCmp: "CupidIsCrush_GameData",
                    dataName: "gameData",
                    cfgCmp: "CupidIsCrush_Cfg",
                    gameScene: "CupidIsCrush_loading",
                    mainScene: "CupidIsCrush",
                    orientation: "portrait",
                }
            },

            //丘比特大
            {
                id: "SLOT_CUPIDCRUSHDELUXE", rows: {
                    dataCmp: "CupidCrushDeluxe_GameData",
                    dataName: "gameData",
                    cfgCmp: "CupidCrushDeluxe_Cfg",
                    gameScene: "CupidCrushDeluxe_loading",
                    mainScene: "CupidCrushDeluxe",
                    orientation: "portrait",
                }
            },

            //幸运财神
            {
                id: "SLOT_FORTUNEWILDDELUXE", rows: {
                    dataCmp: "FortuneWildDeluxe_GameData",
                    dataName: "gameData",
                    cfgCmp: "FortuneWildDeluxe_Cfg",
                    gameScene: "FortuneWildDeluxe_loading",
                    mainScene: "FortuneWildDeluxe",
                    orientation: "portrait",
                }
            },

            //糖果冲突
            {
                id: "SLOT_CANDY_CLASH", rows: {
                    dataCmp: "CandyClash_GameData",
                    dataName: "gameData",
                    cfgCmp: "CandyClash_Cfg",
                    gameScene: "CandyClash_loading",
                    mainScene: "CandyClash",
                    orientation: "portrait",
                }
            },

            //灿烂的岛屿
            {
                id: "SLOT_SPLENDID_ISLAND", rows: {
                    dataCmp: "SplendidIsland_GameData",
                    dataName: "gameData",
                    cfgCmp: "SplendidIsland_Cfg",
                    gameScene: "SplendidIsland_loading",
                    mainScene: "SplendidIsland",
                    orientation: "portrait",
                }
            },

            //灿烂的岛屿大
            {
                id: "SLOT_SPLENDIDISLAND_DELUXE", rows: {
                    dataCmp: "SplendidIslandDeluxe_GameData",
                    dataName: "gameData",
                    cfgCmp: "SplendidIslandDeluxe_Cfg",
                    gameScene: "SplendidIslandDeluxe_loading",
                    mainScene: "SplendidIslandDeluxe",
                    orientation: "portrait",
                }
            },

            //东部财富
            {
                id: "SLOT_EASTERNRICHES", rows: {
                    dataCmp: "EasternRiches_GameData",
                    dataName: "gameData",
                    cfgCmp: "EasternRiches_Cfg",
                    gameScene: "EasternRiches_loading",
                    mainScene: "EasternRiches",
                    orientation: "portrait",
                }
            },

            //奥林匹斯国王
            {
                id: "SLOT_KINGOFOLYMPUS", rows: {
                    dataCmp: "KingOfOlympus_GameData",
                    dataName: "gameData",
                    cfgCmp: "KingOfOlympus_Cfg",
                    gameScene: "KingOfOlympus_loading",
                    mainScene: "KingOfOlympus",
                    orientation: "portrait",
                }
            },
            //宙斯
            {
                id: "SLOT_ZUES", rows: {
                    dataCmp: "Zues_GameData",
                    dataName: "gameData",
                    cfgCmp: "Zues_Cfg",
                    gameScene: "Zues_loading",
                    mainScene: "Zues",
                    orientation: "portrait",
                }
            },

            //火神
            {
                id: "SLOT_GODOFFIRE", rows: {
                    dataCmp: "GodOfFire_GameData",
                    dataName: "gameData",
                    cfgCmp: "GodOfFire_Cfg",
                    gameScene: "GodOfFire_loading",
                    mainScene: "GodOfFire",
                    orientation: "portrait",
                }
            },

            //华丽的埃及延后
            {
                id: "GORGEOUS_CLEOPATRA", rows: {
                    dataCmp: "GorgeouscLeopatra_GameData",
                    dataName: "gameData",
                    cfgCmp: "GorgeouscLeopatra_Cfg",
                    gameScene: "Gorgeouscleopatra_Loading",
                    mainScene: "Gorgeouscleopatra",
                    orientation: "portrait",
                }
            },

            //财富宫
            {
                id: "SLOT_FORTUNEGONG", rows: {
                    dataCmp: "FortuneGong_GameData",
                    dataName: "gameData",
                    cfgCmp: "FortuneGong_Cfg",
                    gameScene: "FortuneGong_loading",
                    mainScene: "FortuneGong",
                    orientation: "portrait",
                }
            },

            //埃及幻想
            {
                id: "SLOT_EGYPTIAN_FANTASY", rows: {
                    dataCmp: "EgyptianFantasy_GameData",
                    dataName: "gameData",
                    cfgCmp: "EgyptianFantasy_Cfg",
                    gameScene: "EgyptianFantasy_loading",
                    mainScene: "EgyptianFantasy",
                    orientation: "portrait",
                }
            },

            //熊猫Panda
            {
                id: "MAJESTIC_PANDA", rows: {
                    dataCmp: "Panda_GameData",
                    dataName: "gameData",
                    cfgCmp: "Panda_Cfg",
                    gameScene: "Panda_Loading",
                    mainScene: "Panda",
                    orientation: "portrait",
                }
            },

            // 糖果魔术
            {
                id: "CANDY_MAGIC", rows: {
                    dataCmp: "CandyMagic_GameData",
                    dataName: "gameData",
                    cfgCmp: "CandyMagic_Cfg",
                    gameScene: "CandyMagic_loading",
                    mainScene: "CandyMagic",
                    orientation: "portrait",
                }
            },

            //命运之豪华邮轮
            {
                id: "SLOT_FORTUNEWHEELDELUXE", rows: {
                    dataCmp: "FortuneWheelDeluxe_GameData",
                    dataName: "gameData",
                    cfgCmp: "FortuneWheelDeluxe_Cfg",
                    gameScene: "FortuneWheelDeluxe_loading",
                    mainScene: "FortuneWheelDeluxe",
                    orientation: "portrait",
                }
            },

            //slots塔
            {
                id: "SLOTS_TOWER", rows: {
                    dataCmp: "SlotsTower_GameData",
                    dataName: "gameData",
                    cfgCmp: "SlotsTower_Cfg",
                    gameScene: "SlotsTower_Loading",
                    mainScene: "SlotsTower",
                    orientation: "portrait",
                }
            },

            //马戏嘉年华
            {
                id: "SLOT_CRICUS_CARNIVAL", rows: {
                    dataCmp: "CircusCarnival_GameData",
                    dataName: "gameData",
                    cfgCmp: "CircusCarnival_Cfg",
                    gameScene: "CircusCarnival_loading",
                    mainScene: "CircusCarnival",
                    orientation: "portrait",
                }
            },

            // 打鼓
            {
                id: "HOT_HOT_DRUMS", rows: {
                    dataCmp: "HotHotDrums_GameData",
                    dataName: "gameData",
                    cfgCmp: "HotHotDrums_Cfg",
                    gameScene: "HotHotDrums_loading",
                    mainScene: "HotHotDrums",
                    orientation: "portrait",
                }
            },

            //快速白金支付
            {
                id: "SLOT_RAPID_PLATINUM_PAY", rows: {
                    dataCmp: "RapidPlatinumPay_GameData",
                    dataName: "gameData",
                    cfgCmp: "RapidPlatinumPay_Cfg",
                    gameScene: "RapidPlatinumPay_loading",
                    mainScene: "RapidPlatinumPay",
                    orientation: "portrait",
                }
            },

            //钻石森林
            {
                id: "DIAMOND_FOREST", rows: {
                    dataCmp: "DiamondForest_GameData",
                    dataName: "gameData",
                    cfgCmp: "DiamondForest_Cfg",
                    gameScene: "DiamondForest_Loading",
                    mainScene: "DiamondForest2",
                    orientation: "portrait",
                }
            },

            // 啤酒馆
            {
                id: "SLOT_BEER_HALL", rows: {
                    dataCmp: "BeerHall_GameData",
                    dataName: "gameData",
                    cfgCmp: "BeerHall_Cfg",
                    gameScene: "BeerHall_loading",
                    mainScene: "BeerHall",
                    orientation: "portrait",
                }
            },
            //太空猫
            {
                id: "SLOT_SPACE_CAT", rows: {
                    dataCmp: "SpaceCat_GameData",
                    dataName: "gameData",
                    cfgCmp: "SpaceCat_Cfg",
                    gameScene: "SpaceCat_loading",
                    mainScene: "SpaceCat",
                    orientation: "portrait",
                }
            },
            //奇迹时刻
            {
                id: "SLOT_MOMENT_OF_WONDER", rows: {
                    dataCmp: "MomentOfWonder_GameData",
                    dataName: "gameData",
                    cfgCmp: "MomentOfWonder_Cfg",
                    gameScene: "MomentOfWonder_loading",
                    mainScene: "MomentOfWonder",
                    orientation: "portrait",
                }
            },
            // 邦妮和克莱德
            {
                id: "SLOT_BONIE_CLYDE", rows: {
                    dataCmp: "BonieClyde_GameData",
                    dataName: "gameData",
                    cfgCmp: "BonieClyde_Cfg",
                    gameScene: "BonieClyde_loading",
                    mainScene: "BonieClyde",
                    orientation: "portrait",
                }
            },

            // 老虎
            {
                id: "REGAL_TIGER", rows: {
                    dataCmp: "RegalTiger_GameData",
                    dataName: "gameData",
                    cfgCmp: "RegalTiger_Cfg",
                    gameScene: "RegalTiger2_Loading",
                    mainScene: "RegalTiger2",
                    orientation: "portrait",
                }
            },

            // 圣诞老人在哪里
            {
                id: "SLOT_WHEREISSANTACLAUS", rows: {
                    dataCmp: "WhereIsSantaClaus_GameData",
                    dataName: "gameData",
                    cfgCmp: "WhereIsSantaClaus_Cfg",
                    gameScene: "WhereIsSantaClaus_loading",
                    mainScene: "WhereIsSantaClaus",
                    orientation: "portrait",
                }
            },

            // 妖精银币
            {
                id: "SLOT_LEPRECHAUNCOINS", rows: {
                    dataCmp: "LeprechaunCoins_GameData",
                    dataName: "gameData",
                    cfgCmp: "LeprechaunCoins_Cfg",
                    gameScene: "LeprechaunCoins_Loading",
                    mainScene: "LeprechaunCoins",
                    orientation: "portrait",
                }
            },

            // 鹈鹕的探索
            {
                id: "SLOT_PELICAN_QUEST", rows: {
                    dataCmp: "PelicanQuest_GameData",
                    dataName: "gameData",
                    cfgCmp: "PelicanQuest_Cfg",
                    gameScene: "PelicanQuest_loading",
                    mainScene: "PelicanQuest",
                    orientation: "portrait",
                }
            },

            // 冰狼
            {
                id: "ICYWOLF", rows: {
                    dataCmp: "IcyWolf_GameData",
                    dataName: "gameData",
                    cfgCmp: "IcyWolf_Cfg",
                    gameScene: "IcyWolf_Loading",
                    mainScene: "IcyWolf",
                    orientation: "portrait",
                }
            },

            // 僵尸国度
            {
                id: "SLOT_ZOMBLE_NATION", rows: {
                    dataCmp: "ZombleNation_GameData",
                    dataName: "gameData",
                    cfgCmp: "ZombleNation_Cfg",
                    gameScene: "ZombleNation_loading",
                    mainScene: "ZombleNation",
                    orientation: "portrait",
                }
            },

            // 皇家小犬
            {
                id: "SLOT_ROYALPUPPIES", rows: {
                    dataCmp: "RoyalPuppies_GameData",
                    dataName: "gameData",
                    cfgCmp: "RoyalPuppies_Cfg",
                    gameScene: "RoyalPuppies_loading",
                    mainScene: "RoyalPuppies",
                    orientation: "portrait",
                }
            },

            // 埃及崛起
            {
                id: "SLOT_RISEOFEGYPT", rows: {
                    dataCmp: "RiseOfEgypt_GameData",
                    dataName: "gameData",
                    cfgCmp: "RiseOfEgypt_Cfg",
                    gameScene: "RiseOfEgypt_loading",
                    mainScene: "RiseOfEgypt",
                    orientation: "portrait",
                }
            },

            // 豪华财富列车
            {
                id: "SLOT_FORTUNETRAINDELUXE", rows: {
                    dataCmp: "FortuneTrainDeluxe_GameData",
                    dataName: "gameData",
                    cfgCmp: "FortuneTrainDeluxe_Cfg",
                    gameScene: "FortuneTrainDeluxe_loading",
                    mainScene: "FortuneTrainDeluxe",
                    orientation: "portrait",
                }
            },

            // 强大的亚特兰蒂斯
            {
                id: "SLOT_MIGHTYATLANTIS", rows: {
                    dataCmp: "MightyAtlantis_GameData",
                    dataName: "gameData",
                    cfgCmp: "MightyAtlantis_Cfg",
                    gameScene: "MightyAtlantis_loading",
                    mainScene: "MightyAtlantis",
                    orientation: "portrait",
                }
            },

            // 梦幻岛之旅
            {
                id: "SLOT_NEVERLANDFANTASY", rows: {
                    dataCmp: "NeverlandFantasy_GameData",
                    dataName: "gameData",
                    cfgCmp: "NeverlandFantasy_Cfg",
                    gameScene: "NeverlandFantasy_loading",
                    mainScene: "NeverlandFantasy",
                    orientation: "portrait",
                }
            },

            // 富贵熊猫
            {
                id: "SLOT_WEALTHOFPANDA", rows: {
                    dataCmp: "WealthOfPanda_GameData",
                    dataName: "gameData",
                    cfgCmp: "WealthOfPanda_Cfg",
                    gameScene: "WealthOfPanda_loading",
                    mainScene: "WealthOfPanda",
                    orientation: "portrait",
                }
            },

            // 魔法球
            {
                id: "SLOT_MAGICORB", rows: {
                    dataCmp: "MagicOrb_GameData",
                    dataName: "gameData",
                    cfgCmp: "MagicOrb_Cfg",
                    gameScene: "MagicOrb_loading",
                    mainScene: "MagicOrb",
                    orientation: "portrait",
                }
            },

            // 袋鼠
            {
                id: "SLOT_KANGAROOS", rows: {
                    dataCmp: "Kangaroos_GameData",
                    dataName: "gameData",
                    cfgCmp: "Kangaroos_Cfg",
                    gameScene: "Kangaroos_loading",
                    mainScene: "Kangaroos",
                    orientation: "portrait",
                }
            },

            // 富贵树
            {
                id: "SLOT_FORTUNETREE", rows: {
                    dataCmp: "FortuneTree_GameData",
                    dataName: "gameData",
                    cfgCmp: "FortuneTree_Cfg",
                    gameScene: "FortuneTree_loading",
                    mainScene: "FortuneTree",
                    orientation: "portrait",
                }
            },

            // 狮子大奖
            {
                id: "SLOT_THELIONSJACKPOT", rows: {
                    dataCmp: "TheLionsjackpot_GameData",
                    dataName: "gameData",
                    cfgCmp: "TheLionsjackpot_Cfg",
                    gameScene: "TheLionsjackpot_loading",
                    mainScene: "TheLionsjackpot",
                    orientation: "portrait",
                }
            },

            // 火山的愤怒
            {
                id: "SLOT_VOLCANOFURY", rows: {
                    dataCmp: "VolcanoFury_GameData",
                    dataName: "gameData",
                    cfgCmp: "VolcanoFury_Cfg",
                    gameScene: "VolcanoFury_loading",
                    mainScene: "VolcanoFury",
                    orientation: "portrait",
                }
            },

            // 航海宝藏
            {
                id: "SLOT_CAPTAINJACKPOT", rows: {
                    dataCmp: "CaptainJackpot_GameData",
                    dataName: "gameData",
                    cfgCmp: "CaptainJackpot_Cfg",
                    gameScene: "CaptainJackpot_loading",
                    mainScene: "CaptainJackpot",
                    orientation: "portrait",
                }
            },

            // 花木兰
            {
                id: "SLOT_HEROINEMULAN", rows: {
                    dataCmp: "HeroineMulan_GameData",
                    dataName: "gameData",
                    cfgCmp: "HeroineMulan_Cfg",
                    gameScene: "HeroineMulan_loading",
                    mainScene: "HeroineMulan",
                    orientation: "portrait",
                }
            },

            // 西伯利亚之王
            {
                id: "SLOT_KINGOFSIBERIAN", rows: {
                    dataCmp: "KingOfSiberian_GameData",
                    dataName: "gameData",
                    cfgCmp: "KingOfSiberian_Cfg",
                    gameScene: "KingOfSiberian_loading",
                    mainScene: "KingOfSiberian",
                    orientation: "portrait",
                }
            },

            // 奥兹传奇
            {
                id: "SLOT_LEGENDOFOZ", rows: {
                    dataCmp: "LegendOfOz_GameData",
                    dataName: "gameData",
                    cfgCmp: "LegendOfOz_Cfg",
                    gameScene: "LegendOfOz_loading",
                    mainScene: "LegendOfOz",
                    orientation: "portrait",
                }
            },

            // 南岛寻宝
            {
                id: "SLOT_ULTIMATETIKILINK", rows: {
                    dataCmp: "UltimateTikiLink_GameData",
                    dataName: "gameData",
                    cfgCmp: "UltimateTikiLink_Cfg",
                    gameScene: "UltimateTikiLink_loading",
                    mainScene: "UltimateTikiLink",
                    orientation: "portrait",
                }
            },

            // 费安妮秀
            {
                id: "SLOT_FEANNIESHOW", rows: {
                    dataCmp: "FeannieShow_GameData",
                    dataName: "gameData",
                    cfgCmp: "FeannieShow_Cfg",
                    gameScene: "FeannieShow_loading",
                    mainScene: "FeannieShow",
                    orientation: "portrait",
                }
            },

            // 克拉肯之力
            {
                id: "SLOT_POWEROFTHEKRAKEN", rows: {
                    dataCmp: "PowerOfTheKraken_GameData",
                    dataName: "gameData",
                    cfgCmp: "PowerOfTheKraken_Cfg",
                    gameScene: "PowerOfTheKraken_loading",
                    mainScene: "PowerOfTheKraken",
                    orientation: "portrait",
                }
            },

            // 大型金库亿万富翁
            {
                id: "SLOT_MEGA_VAULT_BILLIONAIRE", rows: {
                    dataCmp: "MegaVaultBillionaire_GameData",
                    dataName: "gameData",
                    cfgCmp: "MegaVaultBillionaire_Cfg",
                    gameScene: "MegaVaultBillionaire_loading",
                    mainScene: "MegaVaultBillionaire",
                    orientation: "portrait",
                }
            },

            // 青蛙王子大
            {
                id: "SLOT_PRINCE_CHARMING_DELUXE", rows: {
                    dataCmp: "PrinceCharmingDeluxe_GameData",
                    dataName: "gameData",
                    cfgCmp: "PrinceCharmingDeluxe_Cfg",
                    gameScene: "PrinceCharmingDeluxe_loading",
                    mainScene: "PrinceCharmingDeluxe",
                    orientation: "portrait",
                }
            },
            // 花木兰
            {
                id: "SLOT_FEAMIN_QUEEN", rows: {
                    dataCmp: "FeaminQueen_GameData",
                    dataName: "gameData",
                    cfgCmp: "FeaminQueen_Cfg",
                    gameScene: "FeaminQueen_loading",
                    mainScene: "FeaminQueen",
                    orientation: "portrait",
                }
            },

            // 雷神索尔
            {
                id: "SLOT_LORDOFTHUNDER", rows: {
                    dataCmp: "LordOfThunder_GameData",
                    dataName: "gameData",
                    cfgCmp: "LordOfThunder_Cfg",
                    gameScene: "LordOfThunder_loading",
                    mainScene: "LordOfThunder",
                    orientation: "portrait",
                }
            },

            // 埃及艳后
            {
                id: "SLOT_G_CLEOPATRA", rows: {
                    dataCmp: "G_Cleopatra_GameData",
                    dataName: "gameData",
                    cfgCmp: "G_Cleopatra_Cfg",
                    gameScene: "G_Cleopatra_loading",
                    mainScene: "G_Cleopatra",
                    orientation: "portrait",
                }
            },

            // 圣女贞德
            {
                id: "SLOT_LEGENDOFJOANOFARC", rows: {
                    dataCmp: "LegendOfJoanOfArc_GameData",
                    dataName: "gameData",
                    cfgCmp: "LegendOfJoanOfArc_Cfg",
                    gameScene: "LegendOfJoanOfArc_loading",
                    mainScene: "LegendOfJoanOfArc",
                    orientation: "portrait",
                }
            },

            // 死神海拉
            {
                id: "SLOT_GODDESSOFDEATH", rows: {
                    dataCmp: "GoddessOfDeath_GameData",
                    dataName: "gameData",
                    cfgCmp: "GoddessOfDeath_Cfg",
                    gameScene: "GoddessOfDeath_loading",
                    mainScene: "GoddessOfDeath",
                    orientation: "portrait",
                }
            },
            // 光明精灵
            {
                id: "SLOT_ELVESBLESSING", rows: {
                    dataCmp: "ElvesBlessing_GameData",
                    dataName: "gameData",
                    cfgCmp: "ElvesBlessing_Cfg",
                    gameScene: "ElvesBlessing_Loading",
                    mainScene: "ElvesBlessing",
                    orientation: "portrait",
                }
            },

            // 撒旦
            {
                id: "SLOT_THEEVIL", rows: {
                    dataCmp: "TheEvil_GameData",
                    dataName: "gameData",
                    cfgCmp: "TheEvil_Cfg",
                    gameScene: "TheEvil_loading",
                    mainScene: "TheEvil",
                    orientation: "portrait",
                }
            },

            // 亚瑟
            {
                id: "SLOT_THEROUNDTABLEKNIGHTSEXPLORE", rows: {
                    dataCmp: "TheRoundTableKnightsExplore_GameData",
                    dataName: "gameData",
                    cfgCmp: "TheRoundTableKnightsExplore_Cfg",
                    gameScene: "TheRoundTableKnightsExplore_loading",
                    mainScene: "TheRoundTableKnightsExplore",
                    orientation: "portrait",
                }
            },

            // 奥丁
            {
                id: "SLOT_ODINSANGER", rows: {
                    dataCmp: "LMSlots_GameData_Base",
                    dataName: "gameData",
                    cfgCmp: "OdinsAnger_Cfg",
                    gameScene: "OdinsAnger_loading",
                    mainScene: "OdinsAnger",
                    orientation: "portrait",
                }
            },

            // 凯撒
            {
                id: "SLOT_LORDCAESAR", rows: {
                    dataCmp: "LordCaesar_GameData",
                    dataName: "gameData",
                    cfgCmp: "LordCaesar_Cfg",
                    gameScene: "LordCaesar_loading",
                    mainScene: "LordCaesar",
                    orientation: "portrait",
                }
            },

            // 洛基
            {
                id: "SLOT_LOKI", rows: {
                    dataCmp: "Loki_GameData",
                    dataName: "gameData",
                    cfgCmp: "Loki_Cfg",
                    gameScene: "Loki_loading",
                    mainScene: "Loki",
                    orientation: "portrait",
                }
            },

            // 弗雷
            {
                id: "SLOT_FREY", rows: {
                    dataCmp: "Frey_GameData",
                    dataName: "gameData",
                    cfgCmp: "Frey_Cfg",
                    gameScene: "Frey_loading",
                    mainScene: "Frey",
                    orientation: "portrait",
                }
            },

            // 亚历山大
            {
                id: "SLOT_ALEXANDER", rows: {
                    dataCmp: "Alexander_GameData",
                    dataName: "gameData",
                    cfgCmp: "Alexander_Cfg",
                    gameScene: "Alexander_loading",
                    mainScene: "Alexander",
                    orientation: "portrait",
                }
            },

            // 芬里尔
            {
                id: "SLOT_FENRIR", rows: {
                    dataCmp: "Fenrir_GameData",
                    dataName: "gameData",
                    cfgCmp: "Fenrir_Cfg",
                    gameScene: "Fenrir_loading",
                    mainScene: "Fenrir",
                    orientation: "portrait",
                }
            },

            // 狮身人面像
            {
                id: "SLOT_SPHINX", rows: {
                    dataCmp: "Sphinx_GameData",
                    dataName: "gameData",
                    cfgCmp: "Sphinx_Cfg",
                    gameScene: "Sphinx_loading",
                    mainScene: "Sphinx",
                    orientation: "portrait",
                }
            },

            // 曹操
            {
                id: "SLOT_CAOCAO", rows: {
                    dataCmp: "CaoCao_GameData",
                    dataName: "gameData",
                    cfgCmp: "CaoCao_Cfg",
                    gameScene: "CaoCao_loading",
                    mainScene: "CaoCao",
                    orientation: "portrait",
                }
            },

            // 孙悟空
            {
                id: "SLOT_SUNWUKONG", rows: {
                    dataCmp: "SunWuKong_GameData",
                    dataName: "gameData",
                    cfgCmp: "SunWuKong_Cfg",
                    gameScene: "SunWuKong_loading",
                    mainScene: "SunWuKong",
                    orientation: "portrait",
                }
            },

            // 约尔孟甘德
            {
                id: "SLOT_JORMRNGANDER", rows: {
                    dataCmp: "Jormengander_GameData",
                    dataName: "gameData",
                    cfgCmp: "Jormengander_Cfg",
                    gameScene: "Jormengander_loading",
                    mainScene: "Jormengander",
                    orientation: "portrait",
                }
            },

            // 释迦摩尼
            {
                id: "SLOT_SHAKYAMUNI", rows: {
                    dataCmp: "Shakyamuni_GameData",
                    dataName: "gameData",
                    cfgCmp: "Shakyamuni_Cfg",
                    gameScene: "Shakyamuni_loading",
                    mainScene: "Shakyamuni",
                    orientation: "portrait",
                }
            },

            // 伽利略
            {
                id: "SLOT_GALILEO", rows: {
                    dataCmp: "Galileo_GameData",
                    dataName: "gameData",
                    cfgCmp: "Galileo_Cfg",
                    gameScene: "Galileo_loading",
                    mainScene: "Galileo",
                    orientation: "portrait",
                }
            },

            // 巴德尔
            {
                id: "SLOT_BADER", rows: {
                    dataCmp: "Bader_GameData",
                    dataName: "gameData",
                    cfgCmp: "Bader_Cfg",
                    gameScene: "Bader_loading",
                    mainScene: "Bader",
                    orientation: "portrait",
                }
            },

            // 赫斯提亚
            {
                id: "SLOT_HESTIA", rows: {
                    dataCmp: "Hestia_GameData",
                    dataName: "gameData",
                    cfgCmp: "Hestia_Cfg",
                    gameScene: "Hestia_loading",
                    mainScene: "Hestia",
                    orientation: "portrait",
                }
            },

            // 赫菲斯托斯
            {
                id: "SLOT_HEPHAESTUS", rows: {
                    dataCmp: "Hephaestus_GameData",
                    dataName: "gameData",
                    cfgCmp: "Hephaestus_Cfg",
                    gameScene: "Hephaestus_loading",
                    mainScene: "Hephaestus",
                    orientation: "portrait",
                }
            },

            // 浪漫公主
            {
                id: "SLOT_ROMANTICPRINCESS", rows: {
                    dataCmp: "RomanticPrincess_GameData",
                    dataName: "gameData",
                    cfgCmp: "RomanticPrincess_Cfg",
                    gameScene: "RomanticPrincess_loading",
                    mainScene: "RomanticPrincess",
                    orientation: "portrait",
                }
            },

            // 花木兰
            {
                id: "SLOT_NEWMULAN", rows: {
                    dataCmp: "NewMulan_GameData",
                    dataName: "gameData",
                    cfgCmp: "NewMulan_Cfg",
                    gameScene: "NewMulan_loading",
                    mainScene: "NewMulan",
                    orientation: "portrait",
                }
            },

            // 伊米尔
            {
                id: "SLOT_YMER", rows: {
                    dataCmp: "Ymer_GameData",
                    dataName: "gameData",
                    cfgCmp: "Ymer_Cfg",
                    gameScene: "Ymer_loading",
                    mainScene: "Ymer",
                    orientation: "portrait",
                }
            },

            // 阿瑞斯
            {
                id: "SLOT_GODOFWAR", rows: {
                    dataCmp: "GodOfWar_GameData",
                    dataName: "gameData",
                    cfgCmp: "GodOfWar_Cfg",
                    gameScene: "GodOfWar_loading",
                    mainScene: "GodOfWar",
                    orientation: "portrait",
                }
            },

            // 小红帽
            {
                id: "SLOT_LITTLEREDRIDINGHOOD", rows: {
                    dataCmp: "LittleRedRidingHood_GameData",
                    dataName: "gameData",
                    cfgCmp: "LittleRedRidingHood_Cfg",
                    gameScene: "LittleRedRidingHood_loading",
                    mainScene: "LittleRedRidingHood",
                    orientation: "portrait",
                }
            },

            //帕修斯
            {
                id: "SLOT_PESEUS", rows: {
                    dataCmp: "Peseus_GameData",
                    dataName: "gameData",
                    cfgCmp: "Peseus_Cfg",
                    gameScene: "Peseus_loading",
                    mainScene: "Peseus",
                    orientation: "portrait",
                }
            },

            // 波斯王子
            {
                id: "SLOT_PRINCE", rows: {
                    dataCmp: "Prince_GameData",
                    dataName: "gameData",
                    cfgCmp: "Prince_Cfg",
                    gameScene: "Prince_loading",
                    mainScene: "Prince",
                    orientation: "portrait",
                }
            },

            // 弓箭手
            {
                id: "SLOT_ARCHER", rows: {
                    dataCmp: "Archer_GameData",
                    dataName: "gameData",
                    cfgCmp: "Archer_Cfg",
                    gameScene: "Archer_loading",
                    mainScene: "Archer",
                    orientation: "portrait",
                }
            },

            // 阿里巴巴四十大盗
            {
                id: "SLOT_ALIBABA", rows: {
                    dataCmp: "Alibaba_GameData",
                    dataName: "gameData",
                    cfgCmp: "Alibaba_Cfg",
                    gameScene: "Alibaba_loading",
                    mainScene: "Alibaba",
                    orientation: "portrait",
                }
            },

            // 薛西斯
            {
                id: "SLOT_XERXES", rows: {
                    dataCmp: "Xerxes_GameData",
                    dataName: "gameData",
                    cfgCmp: "Xerxes_Cfg",
                    gameScene: "Xerxes_loading",
                    mainScene: "Xerxes",
                    orientation: "portrait",
                }
            },

            // 尼布甲尼撒二世和空中花园
            {
                id: "SLOT_SKYGARDEN", rows: {
                    dataCmp: "LMSlots_GameData_Base",
                    dataName: "gameData",
                    cfgCmp: "Skygarden_Cfg",
                    gameScene: "Skygarden_loading",
                    mainScene: "Skygarden",
                    orientation: "portrait",
                }
            },

            // 辛巴达航海冒险
            {
                id: "SLOT_SINBAD", rows: {
                    dataCmp: "Sinbad_GameData",
                    dataName: "gameData",
                    cfgCmp: "Sinbad_Cfg",
                    gameScene: "Sinbad_loading",
                    mainScene: "Sinbad",
                    orientation: "portrait",
                }
            },

            // 埃及艳后
            {
                id: "SLOT_G_CLEOPATRA_a", rows: {
                    dataCmp: "G_Cleopatra_GameData",
                    dataName: "gameData",
                    cfgCmp: "G_Cleopatra_Cfg",
                    gameScene: "G_Cleopatra_loading",
                    mainScene: "G_Cleopatra",
                    orientation: "portrait",
                }
            },

            // 阿拉丁神灯
            {
                id: "SLOT_LAMP_OF_ALADDIN_a", rows: {
                    dataCmp: "LampOfAladdin_GameData",
                    dataName: "gameData",
                    cfgCmp: "LampOfAladdin_Cfg",
                    gameScene: "LampOfAladdin_loading",
                    mainScene: "LampOfAladdin",
                    orientation: "portrait",
                }
            },

            // 狮身人面像
            {
                id: "SLOT_SPHINX_a", rows: {
                    dataCmp: "Sphinx_GameData",
                    dataName: "gameData",
                    cfgCmp: "Sphinx_Cfg",
                    gameScene: "Sphinx_loading",
                    mainScene: "Sphinx",
                    orientation: "portrait",
                }
            },

            // 古灵精怪的舰娘
            {
                id: "SLOT_JIANNIANGCHRISTMAS", rows: {
                    dataCmp: "JianniangChristmas_GameData",
                    dataName: "gameData",
                    cfgCmp: "JianniangChristmas_Cfg",
                    gameScene: "JianniangChristmas_loading",
                    mainScene: "JianniangChristmas",
                    orientation: "portrait",
                }
            },
            // 成吉思汗
            {
                id: "SLOT_RISING_PEGASUS", rows: {
                    dataCmp: "RisingPegasus_GameData",
                    dataName: "gameData",
                    cfgCmp: "RisingPegasus_Cfg",
                    gameScene: "RisingPegasus_loading",
                    mainScene: "RisingPegasus",
                    orientation: "portrait",
                }
            },
            // 黄金矿工
            {
                id: "SLOT_GOLD_RUSH_DELUXE", rows: {
                    dataCmp: "GoldRushDeluxe_GameData",
                    dataName: "gameData",
                    cfgCmp: "GoldRushDeluxe_Cfg",
                    gameScene: "GoldRushDeluxe_loading",
                    mainScene: "GoldRushDeluxe",
                    orientation: "portrait",
                }
            },

            // 爱神
            {
                id: "SLOT_GODNESS_OF_LOVE", rows: {
                    dataCmp: "GodnessOfLove_GameData",
                    dataName: "gameData",
                    cfgCmp: "GodnessOfLove_Cfg",
                    gameScene: "GodnessOfLove_loading",
                    mainScene: "GodnessOfLove",
                    orientation: "portrait",
                }
            },

            // 波塞冬
            {
                id: "SLOT_POSEIDON", rows: {
                    dataCmp: "LMSlots_GameData_Base",
                    dataName: "gameData",
                    cfgCmp: "Poseidon_Cfg",
                    gameScene: "Poseidon_loading",
                    mainScene: "Poseidon",
                    orientation: "portrait",
                }
            },

            //新版美杜莎
            {
                id: "SLOT_NMEDUSA", rows: {
                    dataCmp: "Nmedusa_GameData",
                    dataName: "gameData",
                    cfgCmp: "Nmedusa_Cfg",
                    gameScene: "Nmedusa_loading",
                    mainScene: "Nmedusa",
                    orientation: "portrait",
                }
            },

            // 无所畏惧的舰娘
            {
                id: "SLOT_WARSHIP", rows: {
                    dataCmp: "Warship_GameData",
                    dataName: "gameData",
                    cfgCmp: "Warship_Cfg",
                    gameScene: "Warship_loading",
                    mainScene: "Warship",
                    orientation: "portrait",
                }
            },

            // 雅典娜
            {
                id: "SLOT_ATHENA", rows: {
                    dataCmp: "LMSlots_GameData_Base",
                    dataName: "gameData",
                    cfgCmp: "Athena_Cfg",
                    gameScene: "Athena_loading",
                    mainScene: "Athena",
                    orientation: "portrait",
                }
            },

            // 感恩节派对
            {
                id: "SLOT_THANKSGIVINGPARTY", rows: {
                    dataCmp: "ThanksGivingParty_GameData",
                    dataName: "gameData",
                    cfgCmp: "ThanksGivingParty_Cfg",
                    gameScene: "ThanksGivingParty_loading",
                    mainScene: "ThanksGivingParty",
                    orientation: "portrait",
                }
            },

            // 企鹅赏金
            {
                id: "SLOT_PENGUINBOUNTY", rows: {
                    dataCmp: "PenguinBounty_GameData",
                    dataName: "gameData",
                    cfgCmp: "PenguinBounty_Cfg",
                    gameScene: "PenguinBounty_loading",
                    mainScene: "PenguinBounty",
                    orientation: "portrait",
                }
            },

            // 美人鱼和珍珠
            {
                id: "SLOT_MERMAID_PEARLS", rows: {
                    dataCmp: "MermaidAndPearls_GameData",
                    dataName: "gameData",
                    cfgCmp: "MermaidAndPearls_Cfg",
                    gameScene: "MermaidAndPearls_loading",
                    mainScene: "MermaidAndPearls",
                    orientation: "portrait",
                }
            },
            //小丑
            {
                id: "SLOT_CLOWN", rows: {
                    dataCmp: "Clown_GameData",
                    dataName: "gameData",
                    cfgCmp: "Clown_Cfg",
                    gameScene: "Clown_loading",
                    mainScene: "Clown",
                    orientation: "portrait",
                }
            },
            //财神到
            {
                id: "SLOT_THEGODOFFORTUNE", rows: {
                    dataCmp: "TheGodOfFortune_GameData",
                    dataName: "gameData",
                    cfgCmp: "TheGodOfFortune_Cfg",
                    gameScene: "TheGodOfFortune_loading",
                    mainScene: "TheGodOfFortune",
                    orientation: "portrait",
                }
            },
            //星际穿越
            {
                id: "SLOT_INTERSTELLAR", rows: {
                    dataCmp: "Interstellar_GameData",
                    dataName: "gameData",
                    cfgCmp: "Interstellar_Cfg",
                    gameScene: "Interstellar_loading",
                    mainScene: "Interstellar",
                    orientation: "portrait",
                }
            },
            // 金刚
            {
                id: "SLOT_KING_KONG", rows: {
                    dataCmp: "KingKong_GameData",
                    dataName: "gameData",
                    cfgCmp: "KingKong_Cfg",
                    gameScene: "KingKong_loading",
                    mainScene: "KingKong",
                    orientation: "portrait",
                }
            },
            //宙斯的力量
            {
                id: "SLOT_POWER_OF_ZEUS", rows: {
                    dataCmp: "PowerOfZeus_GameData",
                    dataName: "gameData",
                    cfgCmp: "PowerOfZeus_Cfg",
                    gameScene: "PowerOfZeus_loading",
                    mainScene: "PowerOfZeus",
                    orientation: "portrait",
                }
            },
            //绚丽的小精灵
            {
                id: "SLOT_FLOWERY_PIXIE", rows: {
                    dataCmp: "FloweryPixie_GameData",
                    dataName: "gameData",
                    cfgCmp: "FloweryPixie_Cfg",
                    gameScene: "FloweryPixie_loading",
                    mainScene: "FloweryPixie",
                    orientation: "portrait",
                }
            },
            //秦始皇
            {
                id: "SLOT_EMPEROR_QIN", rows: {
                    dataCmp: "EmperorQin_GameData",
                    dataName: "gameData",
                    cfgCmp: "EmperorQin_Cfg",
                    gameScene: "EmperorQin_loading",
                    mainScene: "EmperorQin",
                    orientation: "portrait",
                }
            },
            //魔术师
            {
                id: "SLOT_MAGICIAN_NEW", rows: {
                    dataCmp: "Magician_GameData",
                    dataName: "gameData",
                    cfgCmp: "Magician_Cfg",
                    gameScene: "Magician_loading",
                    mainScene: "Magician",
                    orientation: "portrait",
                }
            },
            //梦幻巧克力工厂
            {
                id: "SLOT_FANTASY_CHOCOLATE_FACTORY", rows: {
                    dataCmp: "FantasyChocolateFactory_GameData",
                    dataName: "gameData",
                    cfgCmp: "FantasyChocolateFactory_Cfg",
                    gameScene: "FantasyChocolateFactory_loading",
                    mainScene: "FantasyChocolateFactory",
                    orientation: "portrait",
                }
            },

            // 狮子
            {
                id: "SLOT_THE_LION", rows: {
                    dataCmp: "TheLion_GameData",
                    dataName: "gameData",
                    cfgCmp: "TheLion_Cfg",
                    gameScene: "TheLion_loading",
                    mainScene: "TheLion",
                    orientation: "portrait",
                }
            },

            // 熊猫
            {
                id: "SLOT_THE_PANDA", rows: {
                    dataCmp: "ThePanda_GameData",
                    dataName: "gameData",
                    cfgCmp: "ThePanda_Cfg",
                    gameScene: "ThePanda_loading",
                    mainScene: "ThePanda",
                    orientation: "portrait",
                }
            },

            // 独角兽
            {
                id: "SLOT_THE_UNICORN", rows: {
                    dataCmp: "TheUnicorn_GameData",
                    dataName: "gameData",
                    cfgCmp: "TheUnicorn_Cfg",
                    gameScene: "TheUnicorn_loading",
                    mainScene: "TheUnicorn",
                    orientation: "portrait",
                }
            },

            // 阿拉丁神灯
            {
                id: "SLOT_LAMP_OF_ALADDIN", rows: {
                    dataCmp: "LampOfAladdin_GameData",
                    dataName: "gameData",
                    cfgCmp: "LampOfAladdin_Cfg",
                    gameScene: "LampOfAladdin_loading",
                    mainScene: "LampOfAladdin",
                    orientation: "portrait",
                }
            },

            // 美人鱼
            {
                id: "SLOT_THE_MERMAID", rows: {
                    dataCmp: "TheMermaid_GameData",
                    dataName: "gameData",
                    cfgCmp: "TheMermaid_Cfg",
                    gameScene: "TheMermaid_loading",
                    mainScene: "TheMermaid",
                    orientation: "portrait",
                }
            },

            // 吟游诗人
            {
                id: "SLOT_THE_MINSTREL", rows: {
                    dataCmp: "TheMinstrel_GameData",
                    dataName: "gameData",
                    cfgCmp: "TheMinstrel_Cfg",
                    gameScene: "TheMinstrel_loading",
                    mainScene: "TheMinstrel",
                    orientation: "portrait",
                }
            },

            // 青蛙王子
            {
                id: "SLOT_THE_FROG_PRINCE", rows: {
                    dataCmp: "LMSlots_GameData_Base",
                    dataName: "gameData",
                    cfgCmp: "TheFrogPrince_Cfg",
                    gameScene: "TheFrogPrince_loading",
                    mainScene: "TheFrogPrince",
                    orientation: "portrait",
                }
            },

            // 猛犸象
            {
                id: "SLOT_THE_MAMMOTH", rows: {
                    dataCmp: "LMSlots_GameData_Base",
                    dataName: "gameData",
                    cfgCmp: "TheMammoth_Cfg",
                    gameScene: "TheMammoth_loading",
                    mainScene: "TheMammoth",
                    orientation: "portrait",
                }
            },

            // 龙的传说
            {
                id: "SLOT_THE_LEGEND_OF_DRAGON", rows: {
                    dataCmp: "TheLegendOfDragon_GameData",
                    dataName: "gameData",
                    cfgCmp: "TheLegendOfDragon_Cfg",
                    gameScene: "TheLegendOfDragon_loading",
                    mainScene: "TheLegendOfDragon",
                    orientation: "portrait",
                }
            },

            // 浪漫女王
            {
                id: "SLOT_ROMANTIC_QUEEN", rows: {
                    dataCmp: "RomanticQueen_GameData",
                    dataName: "gameData",
                    cfgCmp: "RomanticQueen_Cfg",
                    gameScene: "RomanticQueen_loading",
                    mainScene: "RomanticQueen",
                    orientation: "portrait",
                }
            },

            // 野生大猩猩
            {
                id: "SLOT_WILD_GORILLA", rows: {
                    dataCmp: "WildGorilla_GameData",
                    dataName: "gameData",
                    cfgCmp: "WildGorilla_Cfg",
                    gameScene: "WildGorilla_loading",
                    mainScene: "WildGorilla",
                    orientation: "portrait",
                }
            },

            // 邪恶的美女
            {
                id: "SLOT_WICKED_BELLE", rows: {
                    dataCmp: "WickedBelle_GameData",
                    dataName: "gameData",
                    cfgCmp: "WickedBelle_Cfg",
                    gameScene: "WickedBelle_loading",
                    mainScene: "WickedBelle",
                    orientation: "portrait",
                }
            },

            // 九头鸟
            {
                id: "SLOT_BIRD_NINE_HEADS", rows: {
                    dataCmp: "BirdNineHeads_GameData",
                    dataName: "gameData",
                    cfgCmp: "BirdNineHeads_Cfg",
                    gameScene: "BirdNineHeads_loading",
                    mainScene: "BirdNineHeads",
                    orientation: "portrait",
                }
            },

            // 魔法青蛙
            {
                id: "SLOT_MAGIC_FROG", rows: {
                    dataCmp: "MagicFrog_GameData",
                    dataName: "gameData",
                    cfgCmp: "MagicFrog_Cfg",
                    gameScene: "MagicFrog_loading",
                    mainScene: "MagicFrog",
                    orientation: "portrait",
                }
            },

            // 矮人与公主
            {
                id: "SLOT_DWARFS_AND_PRINCESS", rows: {
                    dataCmp: "DwarfsAndPrincess_GameData",
                    dataName: "gameData",
                    cfgCmp: "DwarfsAndPrincess_Cfg",
                    gameScene: "DwarfsAndPrincess_loading",
                    mainScene: "DwarfsAndPrincess",
                    orientation: "portrait",
                }
            },

            // 幸运圣诞老人
            {
                id: "SLOT_LUCKY_SANTA", rows: {
                    dataCmp: "LuckySanta_GameData",
                    dataName: "gameData",
                    cfgCmp: "LuckySanta_Cfg",
                    gameScene: "LuckySanta_loading",
                    mainScene: "LuckySanta",
                    orientation: "portrait",
                }
            },

            // 凤凰
            {
                id: "SLOT_THE_PHOENIX", rows: {
                    dataCmp: "ThePhoenix_GameData",
                    dataName: "gameData",
                    cfgCmp: "ThePhoenix_Cfg",
                    gameScene: "ThePhoenix_loading",
                    mainScene: "ThePhoenix",
                    orientation: "portrait",
                }
            },

            // 侠盗罗宾逊
            {
                id: "SLOT_ROBIN_HOOD", rows: {
                    dataCmp: "RobinHood_GameData",
                    dataName: "gameData",
                    cfgCmp: "RobinHood_Cfg",
                    gameScene: "RobinHood_loading",
                    mainScene: "RobinHood",
                    orientation: "portrait",
                }
            },

            // 兔女郎
            {
                id: "SLOT_BUNNY_GIRL", rows: {
                    dataCmp: "BunnyGirl_GameData",
                    dataName: "gameData",
                    cfgCmp: "BunnyGirl_Cfg",
                    gameScene: "BunnyGirl_loading",
                    mainScene: "BunnyGirl",
                    orientation: "portrait",
                }
            },

            // 黄金矿工
            {
                id: "SLOT_GOLD_MINER", rows: {
                    dataCmp: "GoldMiner_GameData",
                    dataName: "gameData",
                    cfgCmp: "GoldMiner_Cfg",
                    gameScene: "GoldMiner_loading",
                    mainScene: "GoldMiner",
                    orientation: "portrait",
                }
            },

            // 麒麟
            {
                id: "SLOT_KYLIN", rows: {
                    dataCmp: "Kylin_GameData",
                    dataName: "gameData",
                    cfgCmp: "Kylin_Cfg",
                    gameScene: "Kylin_loading",
                    mainScene: "Kylin",
                    orientation: "portrait",
                }
            },

            // 狮子宝石
            {
                id: "SLOT_THE_LION_GEMS", rows: {
                    dataCmp: "TheLionGems_GameData",
                    dataName: "gameData",
                    cfgCmp: "TheLionGems_Cfg",
                    gameScene: "TheLionGems_loading",
                    mainScene: "TheLionGems",
                    orientation: "portrait",
                }
            },

            // 真爱永恒
            {
                id: "SLOT_THE_FOREVER_LOVE", rows: {
                    dataCmp: "TheForeverLove_GameData",
                    dataName: "gameData",
                    cfgCmp: "TheForeverLove_Cfg",
                    gameScene: "TheForeverLove_loading",
                    mainScene: "TheForeverLove",
                    orientation: "portrait",
                }
            },

            // 猫的火枪手
            {
                id: "SLOT_PUSS_THE_MUSKETEER", rows: {
                    dataCmp: "PussTheMusketeer_GameData",
                    dataName: "gameData",
                    cfgCmp: "PussTheMusketeer_Cfg",
                    gameScene: "PussTheMusketeer_loading",
                    mainScene: "PussTheMusketeer",
                    orientation: "portrait",
                }
            },

            // 狼之传说
            {
                id: "SLOT_WOLF_LEGEND", rows: {
                    dataCmp: "WolfLegend_GameData",
                    dataName: "gameData",
                    cfgCmp: "WolfLegend_Cfg",
                    gameScene: "WolfLegend_loading",
                    mainScene: "WolfLegend",
                    orientation: "portrait",
                }
            },

            // 冥王哈迪斯
            {
                id: "SLOT_HADES", rows: {
                    dataCmp: "Hades_GameData",
                    dataName: "gameData",
                    cfgCmp: "Hades_Cfg",
                    gameScene: "Hades_loading",
                    mainScene: "Hades",
                    orientation: "portrait",
                }
            },

            //德墨忒尔
            {
                id: "SLOT_DEMETER", rows: {
                    dataCmp: "CandyClash_GameData",
                    dataName: "gameData",
                    cfgCmp: "CandyClash_Cfg",
                    gameScene: "CandyClash_loading",
                    mainScene: "CandyClash",
                    orientation: "portrait",
                }
            },

            //赫尔墨斯
            {
                id: "SLOT_HERMES", rows: {
                    dataCmp: "Hermes_GameData",
                    dataName: "gameData",
                    cfgCmp: "Hermes_Cfg",
                    gameScene: "Hermes_loading",
                    mainScene: "Hermes",
                    orientation: "portrait",
                }
            },

            // 普罗米修斯
            {
                id: "SLOT_PROMETHEUS", rows: {
                    dataCmp: "Prometheus_GameData",
                    dataName: "gameData",
                    cfgCmp: "Prometheus_Cfg",
                    gameScene: "Prometheus_loading",
                    mainScene: "Prometheus",
                    orientation: "portrait",
                }
            },

            // baloot
            {
                id: "POKER_BALOOT", rows: {
                    dataCmp: "Baloot_GameData",
                    dataName: "gameData",
                    cfgCmp: "Baloot_Cfg",
                    gameScene: "baloot",
                    orientation: "portrait",
                }
            },
            // baloot fast
            {
                id: "POKER_BALOOT_FAST", rows: {
                    dataCmp: "Baloot_GameData",
                    dataName: "gameData",
                    cfgCmp: "Baloot_Cfg",
                    gameScene: "baloot",
                    orientation: "portrait",
                }
            },
            // hand
            {
                id: "POKER_HAND", rows: {
                    dataCmp: "Hand_GameData",
                    dataName: "gameData",
                    cfgCmp: "Hand_Cfg",
                    gameScene: "hand",
                    orientation: "portrait",
                }
            },
            // hand Saudi
            {
                id: "POKER_HAND_SAUDI", rows: {
                    dataCmp: "Hand_GameData",
                    dataName: "gameData",
                    cfgCmp: "Hand_Cfg",
                    gameScene: "hand",
                    orientation: "portrait",
                }
            },
            // hand Partner
            {
                id: "POKER_HAND_PARTNER", rows: {
                    dataCmp: "Hand_GameData",
                    dataName: "gameData",
                    cfgCmp: "Hand_Cfg",
                    gameScene: "hand",
                    orientation: "portrait",
                }
            },
            // hand saudi Partner
            {
                id: "POKER_HAND_SAUDI_PARTNER", rows: {
                    dataCmp: "Hand_GameData",
                    dataName: "gameData",
                    cfgCmp: "Hand_Cfg",
                    gameScene: "hand",
                    orientation: "portrait",
                }
            },
            // hand concan
            {
                id: "POKER_HAND_CONCAN", rows: {
                    dataCmp: "Hand_GameData",
                    dataName: "gameData",
                    cfgCmp: "Hand_Cfg",
                    gameScene: "hand",
                    orientation: "portrait",
                }
            },
            // tarneeb
            {
                id: "POKER_TARNEEB", rows: {
                    dataCmp: "Tarneeb_GameData",
                    dataName: "gameData",
                    cfgCmp: "Tarneeb_Cfg",
                    gameScene: "tarneeb",
                    orientation: "portrait",
                }
            },
            // tarneeb
            {
                id: "POKER_TARNEEB_SYRIAN", rows: {
                    dataCmp: "TarneebSyr_GameData",
                    dataName: "gameData",
                    cfgCmp: "TarneebSyr_Cfg",
                    gameScene: "tarneebsyr",
                    orientation: "portrait",
                }
            },

            // basra
            {
                id: "POKER_BASRA", rows: {
                    dataCmp: "Basra_GameData",
                    dataName: "gameData",
                    cfgCmp: "Basra_Cfg",
                    gameScene: "basra",
                    orientation: "portrait",
                }
            },
            // banakil
            {
                id: "POKER_BANAKIL", rows: {
                    dataCmp: "Banakil_GameData",
                    dataName: "gameData",
                    cfgCmp: "Banakil_Cfg",
                    gameScene: "banakil",
                    orientation: "portrait",
                }
            },
            // Trix
            {
                id: "POKER_TRIX", rows: {
                    dataCmp: "Trix_GameData",
                    dataName: "gameData",
                    cfgCmp: "Trix_Cfg",
                    gameScene: "Trix",
                    orientation: "portrait",
                }
            },
            // Trix Complex
            {
                id: "POKER_TRIXCOMPLEX", rows: {
                    dataCmp: "Trix_GameData",
                    dataName: "gameData",
                    cfgCmp: "Trix_Cfg",
                    gameScene: "Trix",
                    orientation: "portrait",
                }
            },
            // Trix Partner
            {
                id: "POKER_TRIXPARTNER", rows: {
                    dataCmp: "Trix_GameData",
                    dataName: "gameData",
                    cfgCmp: "Trix_Cfg",
                    gameScene: "Trix",
                    orientation: "portrait",
                }
            },
            // Complex Partner
            {
                id: "POKER_COMPLEXPARTNER", rows: {
                    dataCmp: "Trix_GameData",
                    dataName: "gameData",
                    cfgCmp: "Trix_Cfg",
                    gameScene: "Trix",
                    orientation: "portrait",
                }
            },
            // Complex CC
            {
                id: "POKER_CCCOMPLEX", rows: {
                    dataCmp: "CC_GameData",
                    dataName: "gameData",
                    cfgCmp: "CC_Cfg",
                    gameScene: "CC",
                    orientation: "portrait",
                }
            },
            // CC Partner
            {
                id: "POKER_CCPARTNER", rows: {
                    dataCmp: "CC_GameData",
                    dataName: "gameData",
                    cfgCmp: "CC_Cfg",
                    gameScene: "CC",
                    orientation: "portrait",
                }
            },
            // Kasra
            {
                id: "POKER_KASRA", rows: {
                    dataCmp: "Kasra_GameData",
                    dataName: "gameData",
                    cfgCmp: "Kasra_Cfg",
                    gameScene: "Kasra",
                    orientation: "portrait",
                }
            },
            // Kasra Partner
            {
                id: "POKER_KASRAPARTNER", rows: {
                    dataCmp: "Kasra_GameData",
                    dataName: "gameData",
                    cfgCmp: "Kasra_Cfg",
                    gameScene: "Kasra",
                    orientation: "portrait",
                }
            },
            // Ronda
            {
                id: "POKER_RONDA", rows: {
                    dataCmp: "Ronda_GameData",
                    dataName: "gameData",
                    cfgCmp: "Ronda_Cfg",
                    gameScene: "Ronda",
                    orientation: "portrait",
                }
            },
            // Estimation
            {
                id: "POKER_ESTIMATION", rows: {
                    dataCmp: "Estimation_GameData",
                    dataName: "gameData",
                    cfgCmp: "Estimation_Cfg",
                    gameScene: "estimation",
                    orientation: "portrait",
                }
            },
            // domino
            {
                id: "POKER_DOMINO", rows: {
                    dataCmp: "DominoGameData",
                    dataName: "gameData",
                    cfgCmp: "Domino_Cfg",
                    gameScene: "Domino",
                    orientation: "portrait",
                }
            },
            // KoutBo
            {
                id: "POKER_KOUTBO", rows: {
                    dataCmp: "KoutBo_GameData",
                    dataName: "gameData",
                    cfgCmp: "KoutBo_Cfg",
                    gameScene: "KoutBo",
                    orientation: "portrait",
                }
            },
            // Uno
            {
                id: "POKER_UNO", rows: {
                    dataCmp: "Uno_GameData",
                    dataName: "gameData",
                    cfgCmp: "Uno_Cfg",
                    gameScene: "Uno",
                    orientation: "portrait",
                }
            },
            // Uno
            {
                id: "POKER_SAUDIDEAL", rows: {
                    dataCmp: "SaudiDealGameData",
                    dataName: "gameData",
                    cfgCmp: "SaudiDeal_Cfg",
                    gameScene: "SaudiDeal",
                    orientation: "portrait",
                }
            },
            // BintAlSbeet
            {
                id: "POKER_BINTALSBEET", rows: {
                    dataCmp: "BintAlSbeet_GameData",
                    dataName: "gameData",
                    cfgCmp: "BintAlSbeet_Cfg",
                    gameScene: "BintAlSbeet",
                    orientation: "portrait",
                }
            },

            // LudoMaster
            {
                id: "POKER_LUDOMASTER", rows: {
                    dataCmp: "LudoMasterGameData",
                    dataName: "gameData",
                    gameScene: "LudoMaster",
                    orientation: "portrait",
                }
            },
            // LudoQuick
            {
                id: "POKER_LUDO_QUICK", rows: {
                    dataCmp: "LudoMasterGameData",
                    dataName: "gameData",
                    gameScene: "LudoMaster",
                    orientation: "portrait",
                }
            },
            // 400
            {
                id: "POKER_TARNEEB_400", rows: {
                    dataCmp: "Tarneeb400_GameData",
                    dataName: "gameData",
                    cfgCmp: "Tarneeb400_Cfg",
                    gameScene: "tarneeb400",
                    orientation: "portrait",
                }
            },
            // TeenPatti
            {
                id: "TEENPATTI", rows: {
                    dataCmp: "TeenPatti_GameData",
                    dataName: "gameData",
                    cfgCmp: "TeenPatti_Cfg",
                    gameScene: "TeenPatti",
                    orientation: "portrait",
                    bNoLoading: true,
                }
            },
            // Leekha
            {
                id: "POKER_LEEKHA", rows: {
                    dataCmp: "Leekha_GameData",
                    dataName: "gameData",
                    cfgCmp: "Leekha_Cfg",
                    gameScene: "Leekha",
                    orientation: "portrait",
                }
            },
            // durak 2人
            {
                id: "POKER_DURAK_2", rows: {
                    dataCmp: "Durak_GameData",
                    dataName: "gameData",
                    cfgCmp: "Durak_Cfg",
                    gameScene: "Durak",
                    orientation: "portrait",
                }
            },
            // durak 3人
            {
                id: "POKER_DURAK_3", rows: {
                    dataCmp: "Durak_GameData",
                    dataName: "gameData",
                    cfgCmp: "Durak_Cfg",
                    gameScene: "Durak",
                    orientation: "portrait",
                }
            },
            // durak 4人
            {
                id: "POKER_DURAK_4", rows: {
                    dataCmp: "Durak_GameData",
                    dataName: "gameData",
                    cfgCmp: "Durak_Cfg",
                    gameScene: "Durak",
                    orientation: "portrait",
                }
            },
            // durak 5人
            {
                id: "POKER_DURAK_5", rows: {
                    dataCmp: "Durak_GameData",
                    dataName: "gameData",
                    cfgCmp: "Durak_Cfg",
                    gameScene: "Durak",
                    orientation: "portrait",
                }
            },
            // durak 6人
            {
                id: "POKER_DURAK_6", rows: {
                    dataCmp: "Durak_GameData",
                    dataName: "gameData",
                    cfgCmp: "Durak_Cfg",
                    gameScene: "Durak",
                    orientation: "portrait",
                }
            },
            // 抛金币
            {
                id: "S_COINS", rows: {
                    dataCmp: "Coin_GameData",
                    dataName: "gameData",
                    cfgCmp: "Coin_Cfg",
                    gameScene: "Coins",
                    orientation: "portrait",
                }
            },
            // 翻牌
            {
                id: "S_HILO", rows: {
                    dataCmp: "Hilo_GameData",
                    dataName: "gameData",
                    cfgCmp: "Hilo_Cfg",
                    gameScene: "Hilo",
                    orientation: "portrait",
                }
            },
            // 扫雷
            {
                id: "S_MINES", rows: {
                    dataCmp: "Mine_GameData",
                    dataName: "gameData",
                    cfgCmp: "Mine_Cfg",
                    gameScene: "Mine",
                    orientation: "portrait",
                }
            }];
            gameListArr.forEach(item => {
                this.gameDataList.set(GAME_ID[item.id], item.rows);
            })
        },

        getGameData(gameId) {
            cc.log("获取游戏ID", gameId);
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
