// Learn cc.Class:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/life-cycle-callbacks.html
// 图标配置表
let GAME_ID = require("GameIdMgr");
/*
    title 用于下载提示的游戏名字，需要在语言文字中配置
    name 游戏在games下面的目录
    action 在大厅播放的动画
    animation 动画名称，目前只有slot需要配置
    poker 1 牌类
    spineScale: spine动画的缩放系数,默认cash的入口动画都是缩放1.3的编辑器了已经控制了，不用再配。但是正版资源是根据框来适配的所以需要配置1
    offsetY: spine的Y方向偏移 。因为缩放系数的修改 Y偏移可能需要调整
    titleAnimation:标题spin的动画，有配置就显示标题动画节点，否则不显示（文件名的话biaotidonghua，就是icon动画同级的目录）
    staOffsetY: 静态入口Y方向调整
    gamename 游戏名称
 */
module.exports = {
    [GAME_ID.SLOT_COMESOON]:{title:"comingSoon",name:"comingSoon"},
    [GAME_ID.SLOT_COMESOON1]:{title:"comingSoon1",name:"comingSoon1"},
    [GAME_ID.SLOT_COMESOON2]:{title:"comingSoon2",name:"comingSoon2"},
    [GAME_ID.SLOT_COMESOON3]:{title:"comingSoon3",name:"comingSoon3"},


    [GAME_ID.POKER_DOMINO]: {title: "Domino", name: "Domino", action: "Domino", gamename:"Domino"}, // domino
    [GAME_ID.POKER_UNO]: {title: "Uno", name: "Uno", action: "Uno", gamename:"Uno"}, // Uno
    [GAME_ID.POKER_LUDOMASTER]: {title: "Nudo", name: "Nudo", action: "Nudo", gamename:"Ludo"}, // Nudo
    [GAME_ID.BLACK_JACK]: {title: "BlackJack21", name: "BlackJack21", action: "BlackJack21", gamename:"Black Jack"}, // BlackJack21

    [GAME_ID.POKER_NIU]: {title: "caishendao", name: "nn", action: "heibao"}, // 牛牛
    [GAME_ID.DRAGON_VS_TIGER]: {title: "caishendao", name: "lhdz", action: "heibao", gamename:"Dragon & Tiger"}, // 龙虎斗
    [GAME_ID.POKER_HUNDRED]: {title: "caishendao", name: "100nn", action: "heibao"}, // 百人牛牛
    [GAME_ID.MLLM]: {title: "caishendao", name: "mllm", action: "heibao"}, // 拉米
    [GAME_ID.RED_VS_BLACK]: {title: "caishendao", name: "hhdz", action: "heibao"}, //红黑大战
    [GAME_ID.POKER_TBNN]: {title: "caishendao", name: "tbnn", action: "heibao"}, // 通比牛牛
    [GAME_ID.JLM]: {title: "caishendao", name: "Jlm", action: "poker_1",poker:1}, // 金拉米
    [GAME_ID.MLMJ]: {title: "caishendao", name: "mlmj", action: "heibao"}, // 三人麻将（马来麻将）
    // [GAME_ID.DZPK]: {title: "Dzpk", name: "Dzpk", action: "poker_4",poker:1}, // 德州扑克
    [GAME_ID.YDLM]: {title: "Ydlm", name: "Ydlm", action: "poker_9",poker:1}, // 印度拉米
    [GAME_ID.SEVEN_UP_DOWN]: {title: "SevenUpDown", name: "SevenUpDown", gamename:"7 Up Dowm"}, // 7UpDown
    [GAME_ID.BACCARAT]: {title: "Baccarat", name: "Baccarat", gamename:"Baccarat"}, // 百家乐
    [GAME_ID.WINGO_LOTTERY]: {title: "WingoLottery", name: "WingoLottery", gamename:"Wingo Lottery"}, //
    [GAME_ID.JHANDI_MUNDA]: {title: "Jhandimunda", name: "Jhandimunda", gamename:"Jhandi Munda"}, //
    [GAME_ID.HORSE_RACING]: {title: "HorseRace", name: "HorseRace", gamename:"Horse Racing"}, //
    [GAME_ID.ROULETTE]: {title: "zhuanpan", name: "Roulette36", action: "zhuanpan1", gamename:"Roulette"},// 俄罗斯转盘36
    [GAME_ID.CRASH]: {title: "Crash", name: "Carsh", action: "animation", gamename:"Carsh"},// Crash
    [GAME_ID.ANDAR_BAHAR]: {title: "AndarBahar", name: "AndarBahar", gamename:"Andar Bahar"}, // AndarBahar
    [GAME_ID.FORTUNE_WHEEL]: {title: "FortuneWheel", name: "Fortunewheel", gamename:"Fortune Wheel"},// FortuneWheel
    [GAME_ID.INDIA_RUMMY]: {title: "Rummy", name: "Rummy", gamename:"Rummy"},// 印度拉米
    [GAME_ID.TEENPATTI]: {title: "TeenPatti", name: "TeenPatti", gamename:"Teenpatti"},// TeenPatti
    [GAME_ID.TEXAS_HOLDEM]: {title: "Delphi", name: "Delphi", gamename:"Poker"}, // 德州扑克
    [GAME_ID.ALADINGWHEEL]: {title: "AladingWheel", name: "AladingWheel", gamename:"AladingWheel"}, // 阿拉丁转盘
    [GAME_ID.HWFISH_918]: {title: "hwfish918", name: "hwfish918", action: "hwfish918"}, // 海王捕鱼918
    [GAME_ID.C_CRICKETX]: {title: "CricketX", name: "CricketX", action: "CricketX"}, // 板球
    [GAME_ID.C_AVIATRIX]: {title: "Aviatrix", name: "Aviatrix", action: "Aviatrix"}, // 女飞行员
    [GAME_ID.C_CRASHX]: {title: "CrashX", name: "CrashX", action: "CrashX"}, // CrashX
    [GAME_ID.C_AVIATOR]: {title: "Aviator", name: "Aviator", action: "Aviator"}, // Aviator
    [GAME_ID.C_ZEPPELIN]: {title: "Zeppelin", name: "Zeppelin", action: "Zeppelin"}, // 齐柏林飞艇
    [GAME_ID.S_LIMBO]: {title: "Limbo", name: "Limbo", action: "Limbo"}, // 赛车
    [GAME_ID.S_DICE]: {title: "Dice", name: "Dice", action: "Dice"}, // Dice
    [GAME_ID.S_PLINKO]: {title: "Plinko", name: "Plinko", action: "Plinko"}, // Dice
    [GAME_ID.S_KENO]: {title: "Keno", name: "Keno", action: "Keno"}, // Keno
    [GAME_ID.S_TOWERS]: {title: "Tower", name: "Tower", action: "Tower"}, // Tower
    [GAME_ID.DOUBLE_ROLL]: {title: "DoubleRoll", name: "DoubleRoll", action: "DoubleRoll"}, // DoubleRoll
    [GAME_ID.S_CRYPTO]: {title: "Crypto", name: "Crypto", action: "Crypto"}, // 宝石
    [GAME_ID.S_TRIPLE]: {title: "Triple", name: "Triple", action: "Triple"}, // Triple
    [GAME_ID.S_CAPPADOCIA]: {title: "Cappadocia", name: "Cappadocia", action: "Cappadocia"}, // Cappadocia
    [GAME_ID.C_JETX]: {title: "JetX", name: "JetX", action: "JetX"}, // JetX


    // [GAME_ID.HWFISH]: {title: "haiwangbuyu", name: "hwfish", action: "haiwangbuyu"}, // 海王捕鱼
    // [GAME_ID.FISHJOY_WKNH]: {title: "wukongnaohai", name: "fishjoy", action: "wukongnaohai"},// 悟空闹海
    // [GAME_ID.FISHJOY_JCBY]: {title: "jinchanbuyu", name: "fishjoy", action: "jinchanbuyu"},// 金蟾捕鱼
    // [GAME_ID.FISHJOY_LKBY]: {title: "likuibuyu", name: "fishjoy", action: "likuibuyu"}, // 李逵捕鱼
    // [GAME_ID.YQSFISH]: {title: "yaoqianshubuyu", name: "yqsfish", action: "yaoqianshubuyu"},// 摇钱树捕鱼
    // [GAME_ID.FISHSTAR_DSBY]: {title: "dashennaohai", name: "fishstar", action: "dashengnaohai"},// 大圣捕鱼
    // [GAME_ID.FISHSTAR_LKPY]: {title: "likuipiyu", name: "fishstar", action: "likuipiyu"},// 李逵劈鱼
    // [GAME_ID.FISHSTAR_BYZX]: {title: "fishstar", name: "fishstar", action: "buyuzhixin"}, // 捕鱼之星
    // // [GAME_ID.HWFISH_918]: {title: "haiwangbuyu918", name: "hwfish918", action: "hwbyzj"}, // 海王捕鱼918
    // [GAME_ID.BIRDSFISH]: {title: "niaowangzhengba", name: "birdsfish", action: "niaowangzhengba"}, // 鸟王争霸
    // [GAME_ID.RAIDENFISH]: {title: "leidianbuyu", name: "raidenfish", action: "leidianbuyu"}, // 雷电捕鱼
    // [GAME_ID.SPONGEBOB]: {title: "haimianbaobao", name: "spongebob", action: "haimianbaobao"}, // 海绵宝宝
    // [GAME_ID.FISHSTAR_DSBY_WP]: {title: "dashennaohaiwanpao", name: "fishstar", action: "dashengnaohai10000"},// 大圣捕鱼万炮版
    // [GAME_ID.FISHSTAR_LKPY_WP]: {title: "likuipiyuwanpao", name: "fishstar", action: "likuipiyu10000"},// 李逵劈鱼万炮版
    // [GAME_ID.FISHSTAR_BYZX_WP]: {title: "fishstarwanpao", name: "fishstar", action: "buyuzhixin10000"}, // 捕鱼之星万炮版
    // [GAME_ID.HWFISH_918_WP]: {title: "haiwangbuyuwanpao", name: "hwfish918", action: "hwbyzj10000"}, // 海王捕鱼918万炮版
    // [GAME_ID.INSECTSFISH]: {title: "chongchongleyuan", name: "insectsfish", action: "bugs_wonder_land"}, // 虫虫乐园
    // [GAME_ID.NEPTUNEFISH]: {title: "yurenmatou", name: "neptunefish", action: "pikachu"}, // 渔人码头

    [GAME_ID.SLOT_GDF]: {title: "caishendao", name: "godofwealth", action: "caishendao"},// 财神到
    [GAME_ID.SLOT_AFG]: {title: "feizhouconglin", name: "african_jungle", action: "feizhouconglin"},// 非洲丛林
    [GAME_ID.SLOT_GREAT_BLUE]: {title: "weidadelanse", name: "great_blue", action: "weidadelanse"},// 伟大的蓝色
    [GAME_ID.SLOT_DR]: {title: "haitunjiao", name: "dolphin_reef", action: "haitunjiao"},// 海豚礁
    [GAME_ID.SLOT_SB]: {title: "yindan", name: "silver_bullet", action: "yindan"},// 银弹
    [GAME_ID.SLOT_GDT]: {title: "huangjinshu", name: "golden_tree", action: "huangjinshu"}, // 黄金树

    [GAME_ID.BAIJIALE]: {title: "baijiale", name: "baijiale", action: "baijiale1"},              // 百家乐初级场
    [GAME_ID.BAIJIALE_MID]: {title: "baijiale", name: "baijiale", action: "baijiale2"},      // 百家乐中级场
    [GAME_ID.BAIJIALE_HIGH]: {title: "baijiale", name: "baijiale", action: "baijiale3"},    // 百家乐高级场

    [GAME_ID.HORSE_MONKEY_TREE]: {title: "pilihou", name: "monkeyClimbTree", action: "pilihou"}, // 霹雳猴
    [GAME_ID.ARC_XYZB]: {title: "xiyouzhengba", name: "xyzb", action: "juezhantianxia"}, // 西游争霸
    [GAME_ID.ARC_XYZB_LINE]: {title: "xiyouzhengba", name: "xyzb", action: "juezhantianxia"}, // 西游争霸_在线

    [GAME_ID.FISH_SHRIMP_OYSTER]: {title: "yuxiahao", name: "fish_shrimp_oyster", action: "yuxiahao"}, // 鱼虾蚝
    [GAME_ID.BCBM]: {title: "benchibaoma", name: "bcbm777", action: "benchibaoma"}, // 奔驰宝马
    [GAME_ID.ONLINE_LHDZ]: {title: "longhudou", name: "lhdz_online", action: "longhudou"}, // 龙虎斗
    [GAME_ID.SLOT_PAN]: {title: "heibao", name: "panther", action: "heibao"}, // 黑豹
    [GAME_ID.SLOT_IVAN]: {title: "ivan", name: "Slot_Ivan", action: "ivan"}, // 不朽的国王

    [GAME_ID.BIRD_AND_ANIMAL]: {title: "feiqinzoushou", name: "birds_and_animals", action: "feiqinzoushou"}, // 飞禽走兽

    // [GAME_ID.ROULETTE]: {title: "zhuanpan", name: "roulette", action: "zhuanpan1"},                   // 俄罗斯转盘初级场
    [GAME_ID.ROULETTE_MID]: {title: "zhuanpan", name: "roulette", action: "zhuanpan2"},       // 俄罗斯转盘中级场
    [GAME_ID.ROULETTE_HIGH]: {title: "zhuanpan", name: "roulette", action: "zhuanpan3"},    // 俄罗斯转盘高级场

    [GAME_ID.TWENTYONE777]: {title: "twentyone", name: "twentyone777", action: "21dian"}, // 21点
    [GAME_ID.SLOT_YNXJ]: {title: "yunvxinjing", name: "SexandZen", action: "yunvxinjing"}, // 玉女心经
    [GAME_ID.FRUIT_SLOT]: {title: "shuiguoslots", name: "fruit_slot", action: "shuiguoslots"}, // 水果Slots

    [GAME_ID.SLOT_GLF]: {title: "jinglianhua", name: "goldenlotusflower", action: "jinglianhua"}, // 金莲花

    [GAME_ID.SLOT_GSGL]: {title: "gaosugonglu", name: "Expressway", action: "gaosugonglu"}, // 高速公路
    [GAME_ID.SLOT_JLBD]: {title: "jilebaodian", name: "treasure", action: "jilebaodian"}, // 极乐宝典
    [GAME_ID.SLOT_PJL]: {title: "panjinlian", name: "panjinlian", action: "panjinlian"}, // 潘金莲
    [GAME_ID.SLOT_JF]: {title: "xiaoribenpangzi", name: "little_japanese_fat_man", action: "xiaoribenpangzi"}, // 小日本胖子
    [GAME_ID.SLOT_SHZ]: {title: "shuihuzhuan", name: "shz777", action: "shuihuzhuan"}, // 水浒传
    [GAME_ID.SLOT_TK]: {title: "sanguoyanyi", name: "Threecountries", action: "sanguoyanyi"}, // 三国演义

    [GAME_ID.SLOT_SPARTAN]: {title: "spartan", name: "Spartan", action: "spartan"}, // 斯巴达

    [GAME_ID.HORSE]: {title: "saima", name: "horse", action: "saima"}, // 赛马
    [GAME_ID.MOTOR_RACE]: {title: "moto_race", name: "MotoRace", action: "saimotuoche"}, // 摩托赛
    [GAME_ID.HORSE_RACE]: {title: "saima", name: "MotoRace", action: "saima"}, // 赛马918
    [GAME_ID.ARC_YCLS]: {title: "yingchaoliansai", name: "Premiership", action: "yingchaoliansai"}, // 英超联赛

    [GAME_ID.SLOT_SLWH]: {title: "senlinwuhui", name: "ForestParty918", action: "senlinwuhui"}, // 森林舞会
    [GAME_ID.SLWH_918NEW]: {title: "forestParty918New", name: "ForestParty918New", action: "forestParty918New"}, // 森林舞会（918新版）
    [GAME_ID.FRUIT]: {title: "shuiguoji", name: "fruit", action: "shuiguoji"}, // 经典水果机

    [GAME_ID.LEOPARD]: {title: "baoziwang", name: "leopard", action: "baoziwang"}, // 豹子王
    [GAME_ID.HULUJI]: {title: "huluoji", name: "huluji", action: "huluoji"}, // 葫芦鸡


    [GAME_ID.SLOT_GLYY]: {title: "jinlianyinye", name: "goldenlotus_silver", action: "jinlianyinye"},         // 金莲淫液
    [GAME_ID.SLOT_SGIRL]: {title: "xingganmeinv", name: "sexGirl", action: "xingganmeinv"},                   // 性感美女
    [GAME_ID.SLOT_ROBIN]: {title: "luobinhan", name: "robin", action: "luobinhan"},                           // 罗宾汉


    [GAME_ID.SLOT_FOOTBALL]: {title: "football", name: "football", action: "football"},                // 足球嘉年华
    [GAME_ID.SLOT_TGSY]: {title: "thaiamazing", name: "thaiamazing", action: "amazinghailan"},                 // 泰国神游
    [GAME_ID.SLOT_EASTER]: {title: "easter", name: "easter", action: "fuhuojie"},                    // 复活节
    [GAME_ID.SLOT_NEWYEAR]: {title: "newyear", name: "newyear", action: "bainian"},                  // 拜年
    [GAME_ID.SLOT_STEAMTOWER]: {title: "steamtower", name: "steamtower", action: "SteamTower"},             // 蒸汽塔
    [GAME_ID.SLOT_VICTORY]: {title: "victory", name: "victory", action: "Victory"},                      // 胜利
    [GAME_ID.LHDZ_918_1]: {title: "longhudou1", name: "Lhdz_918kiss", action: "longhudou1"},               // 龙虎斗1
    [GAME_ID.LHDZ_918_2]: {title: "longhudou2", name: "Lhdz_918kiss", action: "longhudou2"},               // 龙虎斗1
    [GAME_ID.LHDZ_918_3]: {title: "longhudou3", name: "Lhdz_918kiss", action: "longhudou3"},               // 龙虎斗1
    [GAME_ID.SLOT_DRAGON5]: {title: "dragon5", name: "Dragon5", action: "5dragons"},                           // 五龙
    [GAME_ID.SLOT_JETION]: {title: "jixing", name: "Jetion", action: "jixing"},                        // 吉星
    [GAME_ID.SLOT_RALLY]: {title: "rally", name: "rally", action: "lalisai"},                              // 拉力赛
    [GAME_ID.SLOT_TRAFFIC_LIGHT]: {title: "traffic_light", name: "traffic_light", action: "honglvdeng"},      // 红绿灯
    [GAME_ID.SLOT_GARDEN]: {title: "garden", name: "garden", action: "Garden"},                              // 花园

    [GAME_ID.SLOT_WESTERN_PASTURE]: {title: "western_pasture", name: "westernPasture", action: "WesternRanch"},       // 西部牧场
    [GAME_ID.SLOT_ZHANWM]: {title: "zhanWM918", name: "zhanWM918", action: "emperdrgate"},                 // 斩五门
    [GAME_ID.SLOT_PD]: {title: "falaobaozang", name: "Preciousdeposits", action: "falaobaozang"}, // 法老的宝藏
    [GAME_ID.SLOT_AZT]: {title: "azitaike", name: "Aztek", action: "azitaike"}, // 阿兹泰克
    [GAME_ID.SLOT_JJX]: {title: "jiangjinxiong", name: "Bonusbear", action: "jiangjinxiong"}, // 奖金熊
    [GAME_ID.SLOT_TLG]: {title: "fengshenbang", name: "Thelistofgods", action: "fengshenbang"}, // 封神榜
    [GAME_ID.SLOT_FORTUNE_PANDA]: {title: "fuguixiongmao", name: "fortunePanda", action: "fuguixiongmao"},    // 富贵熊猫
    [GAME_ID.SLOT_FORTUNE]: {title: "prosperity", name: "MakeAFortune918", action: "Prosperity"},         // 发大财
    [GAME_ID.SLOT_CHERRY]: {title: "cherryLove", name: "cherryLove", action: "cherrylove"},                   // 樱桃的爱
    [GAME_ID.SLOT_FARM_STORY]: {title: "ranch_story", name: "farmStory", action: "RanchStory"},              // 农场故事
    [GAME_ID.SLOT_STONE_AGE]: {title: "stoneage", name: "stoneAge", action: "stoneage"},                  // 石器时代
    [GAME_ID.SLOT_BLAZING_STAR]: {title: "blazing_star", name: "blazingStar", action: "ShiningStar"},           // 闪亮之星 完成
    [GAME_ID.SLOT_ICE_AND_SNOW]: {title: "ice_land", name: "iceAndSnow", action: "IceLand"},             // 冰雪世界
    [GAME_ID.SLOT_INDIA_MYTH]: {title: "indiamyth", name: "indiaMyth", action: "IndianMyth"},                 // 印度神话
    [GAME_ID.SLOT_MAGICIAN]: {title: "magician", name: "magician", action: "MagiclSpin"},                   // 魔法师
    [GAME_ID.SLOT_CIRCUS]: {title: "circus", name: "circus", action: "circus"},                             // 马戏团
    [GAME_ID.SLOT_AIRPLANE]: {title: "airplane", name: "airplane", action: "airplane"},                      // 飞机
    [GAME_ID.SLOT_FAME]: {title: "fame", name: "Fame", action: "fame"},                             	       // 名利场
    [GAME_ID.SLOT_TGFQ]: {title: "thaibliss", name: "Thaibliss", action: "thaibliss"},                       // 泰国风情
    [GAME_ID.SLOT_SEA_WORLD]: {title: "sea_world", name: "seaWorld", action: "SeaWorld"},                       // 海洋世界
    [GAME_ID.SLOT_HUANG_DI_LAI_LE]: {title: "huang_di_lai_le", name: "huangDiLaiLe", action: "huangdilaile"},   // 皇帝来了(老子是皇帝)
    [GAME_ID.SLOT_CHEN_PAO_ISLAND]: {title: "treasure_islang", name: "treasureIsland", action: "TreasureIslang"},          // 珍宝岛
    [GAME_ID.SLOT_SPIRITUAL_GARDEN]: {title: "fairy_garden", name: "fairyGarden", action: "FairyGarden"},       // 精灵花园

    [GAME_ID.BACCARAT_918]: {title: "baccarat918", name: "Baccarat918", action: "baijiale"},                // 百家乐918
    [GAME_ID.SLOT_OCEAN]: {title: "ocean", name: "Ocean", action: "haiyangtaitang"},                              // 海洋天堂

    [GAME_ID.SINGLE_PICK]: {title: "singlepick", name: "singlepick", action: "dantiao"},                      // 单挑
    [GAME_ID.BCBM_918]: {title: "bcbm918", name: "bcbm918", action: "benchibaoma1"},                          // 奔驰宝马918
    [GAME_ID.SICBO_918]: {title: "sicbo918", name: "Dice918", action: "shaizi"},                              // 豹子王单机
    [GAME_ID.THREE_POKER_918]: {title: "three_poker918", name: "ThreePoker918", action: "sankapuke"},          // 三卡扑克单机
    [GAME_ID.HOLD_EM_918]: {title: "hold_em_918", name: "Hold_EM_918", action: "ducheng"},                    // 赌场扑克单机
    [GAME_ID.BULL_918]: {title: "bull918", name: "Bull918", action: "niuniu"},                                // 牛牛918扑克单机
    [GAME_ID.ROULET_73]: {title: "roulet73", name: "RouletRoulet73", action: "lunpan73"},                     // 轮盘73
    [GAME_ID.ROULET_24]: {title: "roulet24", name: "Roulette24", action: "lunpan24"},                         // 轮盘24
    [GAME_ID.ROULETTE_MINI]: {title: "roulet12", name: "RouletteMini", action: "lunpan12"},                   // 轮盘12
    [GAME_ID.ROULET_36]: {title: "roulet36", name: "Roulette36", action: "lunpan36"},                     // 轮盘36

    [GAME_ID.SLOT_ALADDIN]: {title: "aladdin", name: "aladdin", action: "Aladdin"},                            // 阿拉丁
    [GAME_ID.MONKEY_ZWBS_918]: {title: "zwbs", name: "xyzb", action: "xiyouzhengba"},                         // 战无不胜
    [GAME_ID.ARC_ZWBS_LINE]: {title: "zwbs", name: "xyzb", action: "xiyouzhengba"},                          // 战无不胜-在线

    [GAME_ID.SLOT_HALLOWEEN]: {title: "halloween", name: "halloween", action: "HalloweenParty"},               // 万圣节
    [GAME_ID.SLOT_BRAVE_LEGEND]: {title: "brave_legend", name: "brave_legend", action: "DragonMaiden"},        // 勇敢传说
    [GAME_ID.SLOT_AFRICAN_SAFARI]: {title: "african_safari", name: "AfricanSafari", action: "AfricanWildlife"}, // 狂野非洲
    [GAME_ID.SLOT_GOLDEN_DRAGON]: {title: "golden_dragon", name: "golden_dragon", action: "jinlongcifu"},       // 金龙赐福
    [GAME_ID.SLOT_WUFUMEN]: {title: "wufumen", name: "wufumen", action: "wufumen"},                         // 五福门
    [GAME_ID.SLOT_WANGCAI]: {title: "wangcai", name: "wangcai", action: "wangcai"},                         // 旺财
    [GAME_ID.SLOT_WOLFER]: {title: "wolfer", name: "Wolfer", action: "Wolfer"},                         // 猎狼者

    [GAME_ID.SLOT_ALICE]: {title: "alice", name: "Alice", action: "ailisi"},                               // 爱丽丝
    [GAME_ID.SLOT_CAPTAIN9]: {title: "captain9", name: "Captain9", action: "chuanzhang9"},                      // 船长9
    [GAME_ID.CASINO_WAR_918]: {title: "casino_war", name: "CasinoWar", action: "duchengzhanzhen"},             // 赌城战争
    [GAME_ID.SLOT_CRAZY_MONEY]: {title: "crazy_money", name: "CrazyMoney", action: "kuangrejinqian"},               // 狂热金钱
    [GAME_ID.SLOT_ZCJB]: {title: "felicitous", name: "Felicitous", action: "zhaocaijinbao"},                      // 招财进宝
    [GAME_ID.SLOT_IRELAND_LUCKY]: {title: "ireland_lucky", name: "IrelandLucky", action: "IrishLuck"},         // 爱尔兰运气
    [GAME_ID.SLOT_LAURA]: {title: "laura", name: "Laura", action: "laola"},                               // 劳拉
    [GAME_ID.SLOT_MONEY_FROG]: {title: "money_frog", name: "MoneyFrog", action: "jinqianwa"},                  // 金钱蛙
    [GAME_ID.SLOT_TOP_GUN]: {title: "top_gun", name: "TopGun", action: "zhuangzhilingyun"},                           // 壮志凌云
    [GAME_ID.SLOT_YEARBYYEAR]: {title: "year_by_year", name: "YearByYear", action: "niannianyouyu"},                // 年年有余
    [GAME_ID.SLOT_SWK]: {title: "swk", name: "swk", action: "sunwukong"},                                     // 孙悟空

    [GAME_ID.SLOT_PIRATE_SHIP]: {title: "pirate_ship", name: "PirateShip", action: "PirateShip"},              // 海盗船
    [GAME_ID.SLOT_HALLOWEEN_SURPRISE]: {title: "witch", name: "witch", action: "Witch"},                      // 万圣节惊喜
    [GAME_ID.SLOT_COLABOTTLE]: {title: "colabottle", name: "Colabottle", action: "cookiepop"},                 // 可乐瓶
    [GAME_ID.SLOT_SAINTSEIAY]: {title: "saintseiay", name: "SaintSeiya", action: "saintseiya"},                 // 圣斗士星矢
    [GAME_ID.SLOT_GOLDEN_TREE918]: {title: "huangjinshu", name: "golden_tree918", action: "huangjinshu"},                 // 黄金树

    [GAME_ID.SLOT_CAPTAIN]: {title: "captain20", name: "Captain20", action: "captain20"},                 // 船长20线
    [GAME_ID.SLOT_TERNADO]: {title: "ternado", name: "Tornado", action: "triple-twiste"},                 // 龙卷风
    [GAME_ID.SLOT_YEMEI]: {title: "yemei", name: "Yemei", action: "yemei"},                               // 野妹
    [GAME_ID.SLOT_MATSURI]: {title: "Matsuri", name: "Matsuri", action: "matsuri"},                       // 飨宴
    [GAME_ID.SLOT_WATER]: {title: "water", name: "water", action: "water"},                               // 海豚
    [GAME_ID.SLOT_XUEMEI]: {title: "xuemei", name: "Xuemei", action: "xuemei"},                           // 学妹
    [GAME_ID.SLOT_ORIENT]: {title: "orient", name: "Orient", action: "orient"},                           // 东方快车
    [GAME_ID.SLOT_COYOTECASH]: {title: "CoyoteCash", name: "CoyoteCash", action: "CoyoteCash"},           // 野狼现金
    [GAME_ID.SLOT_MAGICAL_DRAGON]: {title: "magicaldragon", name: "MagicalDragon", action: "MagicalDragon"}, // 神秘之龙

    [GAME_ID.SLOT_MOTOCYCLE]: {title: "Slot_Motorcycle", name: "Slot_Motorcycle", action: "Nitro"},
    [GAME_ID.SLOT_SEASON]: {title: "Season", name: "Season", action: "jijiewenhou"},                       // 季节问候
    [GAME_ID.SLOT_FASHION]: {title: "fashion", name: "Fashion", action: "fashion"},                        // 时尚世界
    [GAME_ID.SLOT_TREX]: {title: "Trex", name: "Trex", action: "trex"}, // 霸王龙
    [GAME_ID.SLOT_GREAT_CHINA]: {title: "GreatChina", name: "GreatChina", action: "greatChina"},                       // 季节问候
    [GAME_ID.SLOT_CLEOPATRA]: {title: "Cleopatra", name: "Cleopatra", action: "Cleopatra"},                       // 季节问候
    [GAME_ID.SLOT_SPARTA30]: {title: "Sparta30", name: "Sparts30", action: "Sparta30"},             // 斯巴达30
    [GAME_ID.FQZS_SP]: {title: "feiqinzoushou", name: "fqzs", action: "feiqinzoushou"},               // 飞禽走兽单机
    [GAME_ID.SLOT_THE_DISCOVER]: {title: "TheDiscover", name: "TheDiscover", action: "faxian"},// 发现
    [GAME_ID.SLOT_BIGSHOT]: {title: "Bigshot", name: "Bigshot", action: "Bigshot"},// 头面人物
    [GAME_ID.SLOT_NIGHTCLUB]: {title: "NightClub", name: "NightClub", action: "NightClub"},// 夜总会
    [GAME_ID.SLOT_NINJA]: {title: "Ninja", name: "Ninja", action: "Ninja"},// 忍者
    [GAME_ID.PHOENIX_SP]: {title:"phoenix", name:"Phoenix", action: "Phoenix"},                     // 火飞凤舞
    [GAME_ID.POKEMON_SP]: {title:"pokemon", name:"Pokemon", action: "Pokemon"},                     // 宠物小精灵
    [GAME_ID.SLOT_GOLF]: {title: "Golf", name: "Golf", action: "Golf"},     // 5线高尔夫
    [GAME_ID.SLOT_FRUITSPACE]: {title: "FruitSpace", name: "FruitSpace", action: "shuiguotiandi"},     // 水果天地
    [GAME_ID.SLOT_CLASSIC]: {title: "classicSlots", name: "ClassicSlots", action: "classicSlots"},     // 经典拉霸
    [GAME_ID.SLOT_CRAZY7]: {title: "crazy7", name: "Crazy7", action: "crazy7"},                       // 疯狂7
    [GAME_ID.SLOT_HZLB]: {title: "Slotmonkey", name: "Slotmonkey", action: "monkeyslot"},              // 猴子拉bar
    [GAME_ID.SLOT_8BALL]: {title: "Slot8Ball", name: "BallSlots", action: "ballSlot"},                 // 8号球
    [GAME_ID.SLOT_PAYDIRT]: {title: "PayDirt", name: "PayDirt", action: "paydirt"},                    // 富矿发现
    [GAME_ID.SLOT_INFINITY_VENUS]: {title: "venus", name: "venus", action: "venus"},                 // infinity-venus
    [GAME_ID.GLITZ_INFINITY]: {title: "Glitz", name: "GlitzAndGlamour", action: "Glitz"},                    //infinity-glitzAndGlamour
    [GAME_ID.SLOT_CHICKEN]: {title: "slot_chicken", name: "slot_chicken", action: "slot_chicken"},                    //吃鸡
    [GAME_ID.SLOT_GOWV2]: {title: "godofwealth_v2", name: "godofwealth_v2", action: "godofwealth_v2"},                    //infinity-glitzAndGlamour
    [GAME_ID.SLOT_DRAGON5_HD]: {title: "dragon5HD", name: "dragon5HD", action: "dragon5_hd"},                 //5龙-HD
    [GAME_ID.SLOT_ZHAOYUN]: {title: "zhaoyun", name: "zhaoyun", action: "zhaoyun"},                 //赵云传
    [GAME_ID.SLOT_THEMEPARKBLAST]: {title: "ThemeParkBlast", name: "ThemeParkBlast", action: "ThemeParkBlast", animation:"animation"},        //theme park blast
    [GAME_ID.SLOT_MOMENT_OF_WONDER]: {title: "MomentOfWonder", name: "MomentOfWonder", action: "MomentOfWonder", animation:"animation"}, //奇迹时刻
    [GAME_ID.SLOT_BONIE_CLYDE]: {title: "BonieClyde", name: "BonieClyde", action: "BonieClyde", animation:"animation"}, // 邦妮克莱德
    [GAME_ID.SLOT_BEER_HALL]: {title: "BeerHall", name: "BeerHall", action: "BeerHall", animation:"animation"}, // 啤酒馆
    [GAME_ID.REGAL_TIGER]: {title: "RegalTiger", name: "RegalTiger", action: "RegalTiger", animation:"animation"},                 //老虎
    [GAME_ID.SLOT_QUEENOFSEA]: {title: "queenOfSea", name: "queenOfSea", action: "queenOfSea", animation:"animation"},     //美人鱼
    [GAME_ID.SLOT_GODOFFIRE]: {title: "godOfFire", name: "GodOfFire", action: "godOfFire", animation:"animation"}, //火神
    [GAME_ID.JALAPAND_DELIGHT]: {title: "JadapenoDelight", name: "JalapanDelight", action: "JalapanDelight", animation:"animation"}, 
    [GAME_ID.MASKED_HERO]: {title: "MaskedHero", name: "MaskedHero", action: "MaskedHero", animation:"animation"}, //蒙面英雄
    [GAME_ID.LUCKY_BEE]: {title: "LuckyBee", name: "LuckyBee", action: "LuckyBee", animation:"animation"}, //幸运蜜蜂
    [GAME_ID.YEAR_OF_THE_RAT]: {title: "YearOfTheRat", name: "YearOfTheRat", action: "YearOfTheRat", animation:"animation"}, //鼠年


    [GAME_ID.DIAMOND_FOREST]: {title: "DiamondForest", name: "DiamondForest", action: "DiamondForest", animation:"animation"},                   //钻石森林
    [GAME_ID.SUSHI_LOVER]: {title: "SushiLover", name: "sushiLover", action: "SushiLover", animation:"animation"},                                //苏轼的情人
    [GAME_ID.FORTUNE_GENIE]: {title: "fortuneGenie", name: "fortuneGenie", action: "fortuneGenie", animation:"animation"},                     //财富精灵
    [GAME_ID.GOLD_ISLAND_TREASURE]: {title: "goldIslandTreasure", name: "goldIslandTreasure", action: "goldIslandTreasure", animation:"animation"},                     //海盗船
    [GAME_ID.THUNDER_MUSTANG]: {title: "ThunderMustang", name: "ThunderMustang", action: "ThunderMustang", animation:"animation"}, //野马
    [GAME_ID.POWER_DRAGON]: {title: "PowerDragon", name: "PowerDragon", action: "PowerDragon", animation:"animation"},             //神龙
    [GAME_ID.HOLIDAY_FRENZY]: {title: "holidayFrenzy", name: "holidayFrenzy", action: "holidayFrenzy", animation:"animation"},   //圣诞老人
    [GAME_ID.SLOT_SMOKINGHOTPICHES]: {title: "SmokingHotPiches", name: "SmokingHotPiches", action: "SmokingHotPiches", animation:"animation"}, //吸烟狗
    [GAME_ID.SLOT_GRANDGEMINI]: {title: "GrandGemini", name: "GrandGemini", action: "GrandGemini"}, //大双子星
    [GAME_ID.SLOT_CUPIDISCRUSH]: {title: "CupidIsCrush", name: "CupidIsCrush", action: "CupidIsCrush", animation:"animation"}, //丘比特
    [GAME_ID.SLOT_CUPIDCRUSHDELUXE]: {title: "CupidCrushDeluxe", name: "CupidCrushDeluxe", action: "CupidCrushDeluxe", animation:"animation"}, //丘比特大
    [GAME_ID.SLOT_FORTUNEWILDDELUXE]: {title: "FortuneWildDeluxe", name: "FortuneWildDeluxe", action: "FortuneWildDeluxe", animation:"animation"}, //幸运财神
    [GAME_ID.SLOT_CANDY_CLASH]:  {title: "CandyClash", name: "CandyClash", action: "CandyClash", animation:"animation"}, //糖果冲突
    [GAME_ID.SLOT_SPLENDID_ISLAND]: {title: "SplendidIsland", name: "SplendidIsland", action: "SplendidIsland", animation:"animation"}, //灿烂的岛屿
    [GAME_ID.SLOT_SPLENDIDISLAND_DELUXE]: {title: "SplendidIslandDeluxe", name: "SplendidIslandDeluxe", action: "SplendidIslandDeluxe", animation:"animation"}, //灿烂的岛屿
    [GAME_ID.SLOT_EASTERNRICHES]: {title: "EasternRiches", name: "EasternRiches", action: "EasternRiches", animation:"animation"}, //灿烂的岛屿
    [GAME_ID.SLOT_KINGOFOLYMPUS]: {title: "KingOfOlympus", name: "KingOfOlympus", action: "kingOfOlympus", animation:"animation"}, //奥林匹斯国王
    [GAME_ID.SLOT_ZUES]: {title: "Zues", name: "Zues", action: "Zues", animation:"animation3", spineScale:1, offsetY:-20}, //宙斯
    [GAME_ID.SLOT_SUNGODDESS]: {title: "SunGoddess", name: "SunGoddess", action: "SunGoddess", animation:"animation"},        // 太阳女神
    [GAME_ID.SLOT_BINGOMEOW]: {title:"BingoMeow", name: "BingoMeow", action: "BingoMeow", animation:"animation"},      // 宾果猫
    [GAME_ID.SLOT_TREASUREJUNGLE]: {title:"TreasureJungle", name: "TreasureJungle", action: "TreasureJungle", animation:"animation"},      // 珍宝丛林
    [GAME_ID.SLOT_PRINCECHARMING]: {title:"PrinceCharming", name: "PrinceCharming", action: "PrinceCharming", animation:"animation"},      // 青蛙王子
    [GAME_ID.SLOT_HIGHPOWER]: {title:"HighPower", name: "HighPower", action: "HighPower", animation:"animation"},      // 大功率
    [GAME_ID.SLOT_SUPER_WICKED_BLAST]: {title: "SuperWickedBlast", name: "SuperWickedBlast", action: "SuperWickedBlast", animation:"animation"},        //小恶魔
    [GAME_ID.SLOT_BRILLIANTTREASURES]: {title:"BrilliantTreasures", name: "BrilliantTreasures", action: "BrilliantTreasures", animation:"animation"},      // 辉煌的宝藏
    [GAME_ID.SLOT_MAMMOTHGRANDGEMS]: {title:"MammothGrandGems", name: "MammothGrandGems", action: "MammothGrandGems", animation:"animation"},      // 猛犸象gems
    [GAME_ID.SLOT_MAMMOTHGRAND]: {title:"MammothGrand", name: "MammothGrand", action: "MammothGrand", animation:"animation"},      // 猛犸象
    [GAME_ID.SLOT_SPOOKYHALLOWEEN]: {title:"SpookyHalloween", name: "SpookyHalloween", action: "SpookyHalloween", animation:"animation"},      // 怪异的万圣节
    [GAME_ID.SLOT_STONEAGEDTREASURE]: {title:"StoneAgedTreasure", name: "StoneAgedTreasure", action: "StoneAgedTreasure", animation:"animation"},      // 石器时代
    [GAME_ID.SLOT_MONSTERCASH]: {title:"MonsterCash", name: "MonsterCash", action: "MonsterCash", animation:"animation"},      // 怪物现金
    [GAME_ID.SLOT_DOUBLECHILI]: {title:"DoubleChili", name: "DoubleChili", action: "DoubleChili", animation:"animation", spineScale:1, offsetY: -10},      // 俩辣椒
    [GAME_ID.SLOT_MAYADEORO]: {title:"MayaDeoro", name: "MayaDeoro", action: "MayaDeoro", animation:"animation", spineScale:1},      // 玛雅
    [GAME_ID.SLOT_PRINCENEZHA]: {title:"PrinceNeZha", name: "PrinceNeZha", action: "PrinceNeZha", animation:"animation", spineScale:1},      // 哪吒
    [GAME_ID.SLOT_PIGGYHEIST]: {title:"PiggyHeist", name: "PiggyHeist", action: "PiggyHeist", animation:"animation", spineScale:1},      // 小猪大劫案
    [GAME_ID.SLOT_HOWLINGMOON]: {title:"HowlingMoon", name: "HowlingMoon", action: "HowlingMoon",animation:"animation"},      // 咆哮的月亮
    [GAME_ID.SLOT_ALIENBUSTER]: {title:"AlienBuster", name: "AlienBuster", action: "AlienBuster",animation:"animation"},      // 外星人杀手
    [GAME_ID.SLOT_SUMO]: {title:"Sumo", name: "Sumo", action: "Sumo",animation:"animation"},      // 相扑
    [GAME_ID.SLOT_THUMBELINA]: {title:"Thumbelina", name: "Thumbelina", action: "Thumbelina",animation:"animation"},      // 拇指姑娘
    [GAME_ID.SLOT_DRAGONDIAMOND]: {title:"DragonDiamond", name: "DragonDiamond", action: "DragonDiamond",animation:"animation"},      // 巨龙钻石
    [GAME_ID.SLOT_LEPRECHAUNBLAST]: {title:"LeprechaunBlast", name: "LeprechaunBlast", action: "LeprechaunBlast",animation:"animation"},      // 妖精爆炸
    [GAME_ID.SLOT_AMERICANBILLIONAIRE]: {title:"AmericanBillionaire", name: "AmericanBillionaire", action: "AmericanBillionaire", animation:"animation"},      // 美国大亨
    [GAME_ID.SLOT_BEAUTYANDTHEBEAST]: {title:"BeautyAndTheBeast", name: "BeautyAndTheBeast", action: "BeautyAndTheBeast", animation:"animation"},      // 美女与野兽
    [GAME_ID.SLOT_YEAROFGOLDENPIG]: {title:"YearOfGoldenPig", name: "YearOfGoldenPig", action: "YearOfGoldenPig",animation:"animation"},      // 金猪报喜
    [GAME_ID.SLOT_DOUBLENUGGETS]: {title:"DoubleNuggets", name: "DoubleNuggets", action: "DoubleNuggets",animation:"animation"},      // 双倍矿工
    [GAME_ID.SLOT_DOUBLETHUNDER]: {title:"DoubleThunder", name: "DoubleThunder", action: "DoubleThunder",animation:"animation"},      // 双倍神力
    [GAME_ID.SLOT_BEERFESTIVAL]: {title:"BeerFestival", name: "BeerFestival", action: "BeerFestival",animation:"animation"},      // 啤酒节
    [GAME_ID.SLOT_INVINCIBLEGODDESS]: {title:"InvincibleGoddess", name: "InvincibleGoddess", action: "InvincibleGoddess",animation:"animation"},      // 战争女神
    [GAME_ID.SLOT_BIGDUEL]: {title: "BigDuel", name: "BigDuel", action: "BigDuel",animation:"animation"}, //佐罗
    [GAME_ID.SLOT_DOUBLEAGENT]: {title: "DoubleAgent", name: "DoubleAgent", action: "DoubleAgent",animation:"animation"}, //间谍
    [GAME_ID.SLOT_LUCKYCAT]: {title: "LuckyCat", name: "LuckyCat", action: "LuckyCat",animation:"animation"}, //招财猫
    [GAME_ID.SLOT_VAMPIRECOUNT]: {title: "VampireCount", name: "VampireCount", action: "VampireCount",animation:"animation"}, //吸血鬼
    [GAME_ID.SLOT_TAVERNWITCH]: {title: "TavernWitch", name: "TavernWitch", action: "TavernWitch",animation:"animation"}, //酒馆女巫
    [GAME_ID.SLOT_BLADEMASTERTOKUGAWA]: {title: "BladeMasterTokugawa", name: "BladeMasterTokugawa", action: "BladeMasterTokugawa",animation:"animation"}, //宫本武藏
    [GAME_ID.SLOT_SIXTHDAYTHEDEMON]: {title: "SixthDayTheDemon", name: "SixthDayTheDemon", action: "SixthDayTheDemon",animation:"animation"}, //织田信长
    [GAME_ID.SLOT_THEMAGICHANZO]: {title: "TheMagicHanzo", name: "TheMagicHanzo", action: "TheMagicHanzo", animation:"animation", spineScale:1, offsetY:-20}, //服部半藏
    [GAME_ID.SLOT_MINAMOTONOYOSHITSUNE]: {title:"MinamotoNoYoshitsune", name: "MinamotoNoYoshitsune", action: "MinamotoNoYoshitsune",animation:"animation"},      // 源义经
    [GAME_ID.SLOT_GANGSTERGODFATHER]: {title:"GangsterGodfather", name: "GangsterGodfather", action: "GangsterGodfather",animation:"animation"},      // 黑帮教父
    [GAME_ID.SLOT_FATHEROFINVENTION]: {title:"FatherOfInvention", name: "FatherOfInvention", action: "FatherOfInvention", animation:"animation"},      // 发明之父
    [GAME_ID.SLOT_WESTCOWBOY]: {title:"WestCowboy", name: "WestCowboy", action: "WestCowboy",animation:"animation"},      // 西部牛仔
    [GAME_ID.SLOT_RISINGSUNTHEGREATKING]: {title:"RisingSunTheGreatKing", name: "RisingSunTheGreatKing", action: "RisingSunTheGreatKing", animation:"animation"},      // 德川家康
    [GAME_ID.SLOT_POLITICALSTRATEGIST]: {title:"PoliticalStrategist", name: "PoliticalStrategist", action: "PoliticalStrategist",animation:"animation"},      // 丰臣秀吉
    [GAME_ID.SLOT_MULAN]: {title: "Mulan", name: "Mulan", action: "Mulan", animation:"animation"},   //花木兰
    [GAME_ID.SLOT_GENGHISKHAN]: {title: "GenghisKhan", name: "GenghisKhan", action: "GenghisKhan",animation:"animation"},   //成吉思汗
    [GAME_ID.SLOT_THECENTAUR]: {title: "TheCentaur", name: "TheCentaur", action: "TheCentaur", animation:"animation"},   // 半人马
    [GAME_ID.SLOT_CHANGE]: {title:"Change", name: "Change", action: "Change",animation:"animation"},      // 嫦娥
    [GAME_ID.SLOT_ALIENMONSTER]: {title:"AlienMonster", name: "AlienMonster", action: "AlienMonster",animation:"animation"},      // 外星怪物
    [GAME_ID.SLOT_BASKETBALLKING]: {title:"BasketballKing", name: "BasketballKing", action: "BasketballKing", animation:"animation"},      // 篮球之王
    [GAME_ID.SLOT_JAPANESESINGER]: {title:"JapaneseSinger", name: "JapaneseSinger", action: "JapaneseSinger",animation:"animation"},      // 日本歌姬
    [GAME_ID.SLOT_NEWKYLIN]: {title: "NewKylin", name: "NewKylin", action: "NewKylin", animation:"animation"},   // 新麒麟
    [GAME_ID.SLOT_ODYSSEUS]: {title: "Odysseus", name: "Odysseus", action: "Odysseus", animation:"animation"},// 奥德修斯
    [GAME_ID.SLOT_PRINCESSPEA]: {title: "PrincessPea", name: "PrincessPea", action: "PrincessPea", animation:"animation"},   // 豌豆公主
    [GAME_ID.SLOT_HERA]: {title:"Hera", name: "Hera", action: "Hera", animation:"animation"},      // 赫拉
    [GAME_ID.SLOT_APOLLO]: {title:"Apollo", name: "Apollo", action: "Apollo", animation:"animation"},      // 阿波罗
    [GAME_ID.SLOT_DIONYSUS]: {title:"Dionysus", name: "Dionysus", action: "Dionysus", animation:"animation"},      // 狄俄尼索斯
    [GAME_ID.SLOT_FRIGG]: {title:"Frigg", name: "Frigg", action: "Frigg", animation:"animation"},      // 弗丽嘉
    [GAME_ID.SLOT_INDIAN]: {title:"Indian", name: "Indian", action: "Indian", animation:"animation"},      // 印第安人

    [GAME_ID.JUNGLE_KING]: {title: "JungleKing", name: "JungleKing", action: "JungleKing", animation:"animation"}, //泰山
    [GAME_ID.SLOT_RISINGMEDUSA]: {title: "RisingMedusa", name: "RisingMedusa", action: "RisingMedusa", animation:"an" +
            " imation", spineScale:1, offsetY:-20},        //美杜莎
    [GAME_ID.SPEED_FIRE]: {title: "SpeedFire", name: "SpeedFire", action: "SpeedFire", animation:"animation"},                                //快速开火
    [GAME_ID.LET_IS_PARTY]: {title: "LetIsParty", name: "LetIsParty", action: "LetIsParty", animation:"animation"}, // 开派对
    [GAME_ID.SLOT_ROCKING_DISCO]: {title: "RockingDisco", name: "RockingDisco", action: "RockingDisco", animation:"animation"}, // 摇滚迪斯科
    [GAME_ID.ADVENTURE_IN_SPACE]: {title: "AdventureInSpace", name: "AdventureInSpace", action: "AdventureInSpace", animation:"animation"}, // 宇航员
    [GAME_ID.GORGEOUS_CLEOPATRA]: {title: "Gorgeouscleopatra", name: "Gorgeouscleopatra", action: "Gorgeouscleopatra", animation:"animation"},             //华丽的埃及延后 
	[GAME_ID.SLOT_FORTUNEGONG]: {title: "FortuneGong", name: "FortuneGong", action: "FortuneGong", animation:"animation"},        //财富宫
    [GAME_ID.SLOT_EGYPTIAN_FANTASY]: {title: "EgpFantasy", name: "EgpFantasy", action: "EgpFantasy", animation:"animation"},        //埃及幻想
    [GAME_ID.MAJESTIC_PANDA]: {title: "Panda", name: "Panda", action: "Panda", animation:"animation"},                             //熊猫
    [GAME_ID.CANDY_MAGIC]: {title: "CandyMagic", name: "CandyMagic", action: "CandyMagic", animation:"animation"}, //糖果魔术
	[GAME_ID.SLOT_FORTUNEWHEELDELUXE]: {title: "FortuneWheelDeluxe", name: "FortuneWheelDeluxe", action: "FortuneWheelDeluxe", animation:"animation"}, //命运之豪华邮轮
    [GAME_ID.SLOTS_TOWER]:{title:"SlotsTower",name:"SlotsTower",action:"SlotsTower", animation:"animation"},
    [GAME_ID.HOT_HOT_DRUMS]: {title: "HotHotDrums", name: "HotHotDrums", action: "HotHotDrums", animation:"animation"}, // 打鼓
    [GAME_ID.SLOT_CRICUS_CARNIVAL]: {title: "CircusCarnival", name: "CircusCarnival", action: "CircusCarnival",animation:"animation"},        //马戏嘉年华
    [GAME_ID.SLOT_RAPID_PLATINUM_PAY]: {title: "RapidPlatinumPay", name: "RapidPlatinumPay", action: "RapidPlatinumPay",animation:"animation"},        //快速白金支付
    [GAME_ID.SLOT_SPACE_CAT]: {title: "SpaceCat", name: "SpaceCat", action: "SpaceCat",animation:"animation"},        //太空猫
    [GAME_ID.SLOT_LEPRECHAUNCOINS]: {title: "LeprechaunCoins", name: "LeprechaunCoins", action: "LeprechaunCoins",animation:"animation"},        //妖精金币
    
    [GAME_ID.SLOT_WHEREISSANTACLAUS]: {title: "WhereIsSantaClaus", name: "WhereIsSantaClaus", action: "WhereIsSantaClaus",animation:"animation"},        //圣诞老人在哪里
    [GAME_ID.ICYWOLF]: {title: "IcyWolf", name: "IcyWolf", action: "IcyWolf",animation:"animation"},        //冰狼
    [GAME_ID.SLOT_PELICAN_QUEST]: {title: "PelicanQuest", name: "PelicanQuest", action: "PelicanQuest",animation:"animation"},        //鹈鹕的探索
    [GAME_ID.SLOT_ZOMBLE_NATION]: {title: "ZombleNation", name: "ZombleNation", action: "ZombleNation",animation:"animation"},        //僵尸国度
    [GAME_ID.SLOT_MEGA_VAULT_BILLIONAIRE]: {title: "MegaVaultBillionaire", name: "MegaVaultBillionaire", action: "MegaVaultBillionaire",animation:"animation"},        //大型金库亿万富翁
    [GAME_ID.SLOT_PRINCE_CHARMING_DELUXE]: {title: "PrinceCharmingDeluxe", name: "PrinceCharmingDeluxe", action: "PrinceCharmingDeluxe",animation:"animation"},        // 青蛙王子大
    [GAME_ID.SLOT_ROYALPUPPIES]: {title: "RoyalPuppies", name: "RoyalPuppies", action: "RoyalPuppies",animation:"animation", offsetY:10, spineScale:1.4},        // 皇家小犬
    [GAME_ID.SLOT_RISEOFEGYPT]: {title: "RiseOfEgypt", name: "RiseOfEgypt", action: "RiseOfEgypt",animation:"animation",},        // 埃及崛起
    [GAME_ID.SLOT_FORTUNETRAINDELUXE]: {title: "FortuneTrainDeluxe", name: "FortuneTrainDeluxe", action: "FortuneTrainDeluxe",animation:"animation",spineScale:0.9,},        // 豪华财富列车
    [GAME_ID.SLOT_MIGHTYATLANTIS]: {title: "MightyAtlantis", name: "MightyAtlantis", action: "MightyAtlantis",animation:"animation",spineScale:1,offsetY:-18},        // 强大的亚特兰蒂斯
    [GAME_ID.SLOT_NEVERLANDFANTASY]: {title: "NeverlandFantasy", name: "NeverlandFantasy", action: "NeverlandFantasy",animation:"animation",spineScale:1},        // 梦幻岛之旅
    [GAME_ID.SLOT_WEALTHOFPANDA]: {title: "WealthOfPanda", name: "WealthOfPanda", action: "WealthOfPanda",animation:"animation"},        // 富贵熊猫
    [GAME_ID.SLOT_MAGICORB]: {titlgame: "MagicOrb", name: "MagicOrb", action: "MagicOrb",animation:"animation"},        // 魔法球
    [GAME_ID.SLOT_KANGAROOS]: {title: "Kangaroos", name: "Kangaroos", action: "Kangaroos",animation:"animation"},        // 袋鼠
    [GAME_ID.SLOT_FORTUNETREE]: {title: "FortuneTree", name: "FortuneTree", action: "FortuneTree",animation:"animation"},        // 富贵树
    [GAME_ID.SLOT_THELIONSJACKPOT]: {title: "TheLionsjackpot", name: "TheLionsjackpot", action: "TheLionsjackpot",animation:"animation"},        // 狮子大奖
    [GAME_ID.SLOT_VOLCANOFURY]: {title: "VolcanoFury", name: "VolcanoFury", action: "VolcanoFury",animation:"animation"},        // 火山的愤怒
    [GAME_ID.SLOT_CAPTAINJACKPOT]: {title: "CaptainJackpot", name: "CaptainJackpot", action: "CaptainJackpot",animation:"animation"},        // 航海宝藏
    [GAME_ID.SLOT_HEROINEMULAN]: {title: "HeroineMulan", name: "HeroineMulan", action: "HeroineMulan",animation:"animation"},        // 花木兰
    [GAME_ID.SLOT_KINGOFSIBERIAN]: {title: "KingOfSiberian", name: "KingOfSiberian", action: "KingOfSiberian",animation:"animation"},        // 西伯利亚之王
    [GAME_ID.SLOT_LEGENDOFOZ]: {title: "LegendOfOz", name: "LegendOfOz", action: "LegendOfOz",animation:"animation"},        // 奥兹传奇
    [GAME_ID.SLOT_ULTIMATETIKILINK]: {title: "UltimateTikiLink", name: "UltimateTikiLink", action: "UltimateTikiLink",animation:"animation"},        // 南岛寻宝
    [GAME_ID.SLOT_FEANNIESHOW]: {title: "FeannieShow", name: "FeannieShow", action: "FeannieShow",animation:"animation"},        // 费安妮秀
    [GAME_ID.SLOT_POWEROFTHEKRAKEN]: {title: "PowerOfTheKraken", name: "PowerOfTheKraken", action: "PowerOfTheKraken",animation:"animation"},        // 克拉肯之力

    [GAME_ID.SLOT_FEAMIN_QUEEN]: {title: "FeaminQueen", name: "FeaminQueen", action: "FeaminQueen",animation:"animation2"},   //花木兰
    [GAME_ID.SLOT_LORDOFTHUNDER]: {title: "LordOfThunder", name: "LordOfThunder", action: "LordOfThunder", animation:"animation",}, // 雷神索尔
    [GAME_ID.SLOT_G_CLEOPATRA]: {title: "G_Cleopatra", name: "G_Cleopatra", action: "G_Cleopatra", animation:"animation",}, // 埃及艳后
    [GAME_ID.SLOT_LEGENDOFJOANOFARC]: {title: "LegendOfJoanOfArc", name: "LegendOfJoanOfArc", action: "LegendOfJoanOfArc", animation:"animation", spineScale:1, offsetY:-20}, // 圣女贞德
    [GAME_ID.SLOT_GODDESSOFDEATH]: {title: "GoddessOfDeath", name: "GoddessOfDeath", action: "GoddessOfDeath", animation:"animation",}, // 死神海拉
    [GAME_ID.SLOT_ELVESBLESSING]: {title: "ElvesBlessing", name: "ElvesBlessing", action: "ElvesBlessing", animation:"animation",}, // 光明精灵
    [GAME_ID.SLOT_THEEVIL]: {title: "TheEvil", name: "TheEvil", action: "TheEvil", animation:"animation",}, // 撒旦
    [GAME_ID.SLOT_ODINSANGER]: {title: "OdinsAnger", name: "OdinsAnger", action: "OdinsAnger", animation:"animation",}, // 奥丁
    [GAME_ID.SLOT_THEROUNDTABLEKNIGHTSEXPLORE]: {title: "TheRoundTableKnightsExplore", name: "TheRoundTableKnightsExplore", action: "TheRoundTableKnightsExplore", animation:"animation",}, // 亚瑟
    [GAME_ID.SLOT_LORDCAESAR]: {title: "LordCaesar", name: "LordCaesar", action: "LordCaesar", animation:"animation",}, // 凯撒
    [GAME_ID.SLOT_LOKI]: {title: "Loki", name: "Loki", action: "Loki", animation:"animation",}, // 洛基
    [GAME_ID.SLOT_FREY]: {title: "Frey", name: "Frey", action: "Frey", animation:"animation"}, // 弗雷
    [GAME_ID.SLOT_ALEXANDER]: {title: "Alexander", name: "Alexander", action: "Alexander", animation:"animation",}, // 亚历山大
    [GAME_ID.SLOT_FENRIR]: {title: "Fenrir", name: "Fenrir", action: "Fenrir", animation:"animation"}, // 芬里尔
    [GAME_ID.SLOT_SPHINX]: {title: "Sphinx", name: "Sphinx", action: "Sphinx", animation:"animation"}, // 狮身人面像
    [GAME_ID.SLOT_CAOCAO]: {title: "CaoCao", name: "CaoCao", action: "CaoCao", animation:"animation"}, // 曹操
    [GAME_ID.SLOT_SUNWUKONG]: {title: "SunWuKong", name: "SunWuKong", action: "SunWuKong", animation:"animation"}, // 孙悟空
    [GAME_ID.SLOT_JORMRNGANDER]: {title: "Jormengander", name: "Jormengander", action: "Jormengander", animation:"animation"}, // 约尔孟甘德
    [GAME_ID.SLOT_SHAKYAMUNI]: {title: "Shakyamuni", name: "Shakyamuni", action: "Shakyamuni", animation:"animation"}, // 释迦摩尼
    [GAME_ID.SLOT_GALILEO]: {title: "Galileo", name: "Galileo", action: "Galileo", animation:"animation"}, // 伽利略
    [GAME_ID.SLOT_BADER]: {title: "Bader", name: "Bader", action: "Bader", animation:"animation"}, // 巴德尔
    [GAME_ID.SLOT_HESTIA]: {title: "Hestia", name: "Hestia", action: "Hestia", animation:"animation"}, // 赫斯提亚
    [GAME_ID.SLOT_HEPHAESTUS]: {title: "Hephaestus", name: "Hephaestus", action: "Hephaestus", animation:"animation"}, // 赫菲斯托斯
    [GAME_ID.SLOT_ROMANTICPRINCESS]: {title: "RomanticPrincess", name: "RomanticPrincess", action: "RomanticPrincess", animation:"animation"}, // 浪漫公主
    [GAME_ID.SLOT_NEWMULAN]: {title: "NewMulan", name: "NewMulan", action: "NewMulan", animation:"animation"}, // 花木兰
    [GAME_ID.SLOT_YMER]: {title: "Ymer", name: "Ymer", action: "Ymer", animation:"animation"}, // 伊米尔
    [GAME_ID.SLOT_GODOFWAR]: {title: "GodOfWar", name: "GodOfWar", action: "GodOfWar", animation:"animation"}, // 阿瑞斯
    [GAME_ID.SLOT_LITTLEREDRIDINGHOOD]: {title: "LittleRedRidingHood", name: "LittleRedRidingHood", action: "LittleRedRidingHood", animation:"animation"}, // 小红帽
    [GAME_ID.SLOT_PESEUS]: {title: "Peseus", name: "Peseus", action: "Peseus",animation:"animation"},//帕修斯
    [GAME_ID.SLOT_PRINCE]: {title: "Prince", name: "Prince", action: "Prince",animation:"animation"},//波斯王子
    [GAME_ID.SLOT_ARCHER]: {title: "Archer", name: "Archer", action: "Archer",animation:"animation"},//弓箭手
    [GAME_ID.SLOT_ALIBABA]: {title: "Alibaba", name: "Alibaba", action: "Alibaba",animation:"animation"},//阿里巴巴四十大盗
    [GAME_ID.SLOT_XERXES]: {title: "Xerxes", name: "Xerxes", action: "Xerxes",animation:"animation"},//薛西斯
    [GAME_ID.SLOT_SKYGARDEN]: {title: "Skygarden", name: "Skygarden", action: "Skygarden",animation:"animation"},//尼布甲尼撒二世和空中花园
    [GAME_ID.SLOT_SINBAD]: {title: "Sinbad", name: "Sinbad", action: "Sinbad",animation:"animation"},//辛巴达航海冒险
    [GAME_ID.SLOT_G_CLEOPATRA_a]: {title: "G_Cleopatra", name: "G_Cleopatra", action: "G_Cleopatra", animation:"animation",}, // 埃及艳后
    [GAME_ID.SLOT_LAMP_OF_ALADDIN_a]: {title: "LampOfAladdin", name: "LampOfAladdin", action: "LampOfAladdin",animation:"animation3", spineScale:1, offsetY:-20},   // 阿拉丁神灯
    [GAME_ID.SLOT_SPHINX_a]: {title: "Sphinx", name: "Sphinx", action: "Sphinx", animation:"animation"}, // 狮身人面像

    [GAME_ID.SLOT_JIANNIANGCHRISTMAS]: {title: "JianniangChristmas", name: "JianniangChristmas", action: "JianniangChristmas",animation:"animation"},        //古灵精怪的舰娘

    [GAME_ID.SLOT_RISING_PEGASUS]: {title: "RisingPegasus", name: "RisingPegasus", action: "RisingPegasus",animation:"animation"},   //飞马
    [GAME_ID.SLOT_GOLD_RUSH_DELUXE]: {title: "GoldRushDeluxe", name: "GoldRushDeluxe", action: "GoldRushDeluxe",animation:"animation"},   //黄金矿工
    [GAME_ID.SLOT_ATHENA]: {title: "GodAthena", name: "GodAthena", action: "GodAthena",animation:"animation"},        // 雅典娜
    [GAME_ID.SLOT_PENGUINBOUNTY]: {title: "PenguinBounty", name: "PenguinBounty", action: "PenguinBounty", animation:"animation", titleAnimation:"animation", spineScale:1.2, offsetY:-15},        // 企鹅赏金


    [GAME_ID.SLOT_NMEDUSA]: {title: "Nmedusa", name: "Nmedusa", action: "Nmedusa", animation:"animation", spineScale:1, offsetY:-15},        //新版美杜莎
    [GAME_ID.SLOT_POSEIDON]: {title: "Poseidon", name: "Poseidon", action: "Poseidon", animation:"animation", spineScale:1, offsetY:-20},        // 波塞冬
    [GAME_ID.SLOT_WARSHIP]: {title: "Warship", name: "Warship", action: "Warship", animation:"animation"}, // 无所畏惧的舰娘
    [GAME_ID.SLOT_THANKSGIVINGPARTY]: {title: "ThanksGivingParty", name: "ThanksGivingParty", action: "ThanksGivingParty", animation:"animation", spineScale:1, offsetY:-15},        // 感恩节派对
    

    [GAME_ID.SLOT_GODNESS_OF_LOVE]: {title: "GodnessOfLove", name: "GodnessOfLove", action: "GodnessOfLove", animation:"animation", spineScale:1, offsetY:-20},   //爱神
    [GAME_ID.SLOT_MERMAID_PEARLS]: {title: "MermaidAndPearls", name: "MermaidAndPearls", action: "MermaidAndPearls",animation:"animation",offsetY:-15,spineScale:1},   //美人鱼和珍珠
    [GAME_ID.SLOT_CLOWN]: {title: "Clown", name: "Clown", action: "Clown",animation:"animation"},        //小丑
    [GAME_ID.SLOT_THEGODOFFORTUNE]: {title: "TheGodOfFortune", name: "TheGodOfFortune", action: "TheGodOfFortune",animation:"animation"},        //财神到
    [GAME_ID.SLOT_INTERSTELLAR]: {title: "Interstellar", name: "Interstellar", action: "Interstellar",animation:"animation"},        //星际穿越
    [GAME_ID.SLOT_KING_KONG]: {title: "KingKong", name: "KingKong", action: "KingKong",animation:"animation", spineScale:0.95, offsetY:-15},   //金刚
    [GAME_ID.SLOT_POWER_OF_ZEUS]: {title: "PowerOfZeus", name: "PowerOfZeus", action: "PowerOfZeus",animation:"animation",spineScale:0.95, offsetY:-15},        //宙斯的力量
    [GAME_ID.SLOT_FLOWERY_PIXIE]: {title: "FloweryPixie", name: "FloweryPixie", action: "FloweryPixie",animation:"animation",spineScale:0.95, offsetY:-15},        //绚丽的小精灵
    [GAME_ID.SLOT_EMPEROR_QIN]: {title: "EmperorQin", name: "EmperorQin", action: "EmperorQin", animation:"animation",spineScale:0.95, offsetY:-25},        //秦始皇
    [GAME_ID.SLOT_MAGICIAN_NEW]: {title: "Magician", name: "Magician", action: "Magician", animation:"animation"},        //魔术师
    [GAME_ID.SLOT_FANTASY_CHOCOLATE_FACTORY]: {title: "FantasyChocolateFactory", name: "FantasyChocolateFactory", action:"FantasyChocolateFactory",animation:"animation"},        //梦幻巧克力工厂

    [GAME_ID.SLOT_THE_LION]: {title: "TheLion", name: "TheLion", action: "TheLion",animation:"animation", spineScale:1, offsetY:-20},   // 狮子
    [GAME_ID.SLOT_THE_PANDA]: {title: "ThePanda", name: "ThePanda", action: "ThePanda",animation:"animation", spineScale:1, offsetY:-20},   // 熊猫
    [GAME_ID.SLOT_THE_UNICORN]: {title: "TheUnicorn", name: "TheUnicorn", action: "TheUnicorn",animation:"animation", spineScale:1, offsetY:-20},   // 独角兽
    [GAME_ID.SLOT_LAMP_OF_ALADDIN]: {title: "LampOfAladdin", name: "LampOfAladdin", action: "LampOfAladdin",animation:"animation", spineScale:1, offsetY:-20},   // 阿拉丁神灯
    [GAME_ID.SLOT_THE_MERMAID]: {title: "TheMermaid", name: "TheMermaid", action: "TheMermaid",animation:"animation", spineScale:1, offsetY:-20},   // 美人鱼
    [GAME_ID.SLOT_THE_MINSTREL]: {title: "TheMinstrel", name: "TheMinstrel", action: "TheMinstrel",animation:"animation", spineScale:1, offsetY:-20},   // 吟游诗人
    [GAME_ID.SLOT_THE_FROG_PRINCE]: {title: "TheFrogPrince", name: "TheFrogPrince", action: "TheFrogPrince", animation:"animation", spineScale:1, offsetY:-20},   // 青蛙王子
    [GAME_ID.SLOT_THE_MAMMOTH]: {title: "TheMammoth", name: "TheMammoth", action: "TheMammoth", animation:"animation", spineScale:1, offsetY:-20},   // 猛犸象
    [GAME_ID.SLOT_THE_LEGEND_OF_DRAGON]: {title: "TheLegendOfDragon", name: "TheLegendOfDragon", action: "TheLegendOfDragon", animation:"animation", spineScale:1, offsetY:-20},   // 龙的传说
    [GAME_ID.SLOT_ROMANTIC_QUEEN]: {title: "RomanticQueen", name: "RomanticQueen", action: "RomanticQueen",animation:"animation"},   // 浪漫女王
    [GAME_ID.SLOT_WILD_GORILLA]: {title: "WildGorilla", name: "WildGorilla", action: "WildGorilla",animation:"animation", spineScale:1, offsetY:-20},   // 野生大猩猩
    [GAME_ID.SLOT_WICKED_BELLE]: {title: "WickedBelle", name: "WickedBelle", action: "WickedBelle",animation:"animation"},   // 邪恶的美女
    [GAME_ID.SLOT_BIRD_NINE_HEADS]: {title: "BirdNineHeads", name: "BirdNineHeads", action: "BirdNineHeads",animation:"animation", spineScale:1, offsetY:-20},   // 九头鸟
    [GAME_ID.SLOT_MAGIC_FROG]: {title: "MagicFrog", name: "MagicFrog", action: "MagicFrog",animation:"animation", spineScale:1, offsetY:-20},   // 魔法青蛙
    [GAME_ID.SLOT_DWARFS_AND_PRINCESS]: {title: "DwarfsAndPrincess", name: "DwarfsAndPrincess", action: "DwarfsAndPrincess",animation:"animation", spineScale:1, offsetY:-20},   // 矮人与公主
    [GAME_ID.SLOT_LUCKY_SANTA]: {title: "LuckySanta", name: "LuckySanta", action: "LuckySanta",animation:"animation", spineScale:1, offsetY:-20},   // 幸运圣诞老人
    [GAME_ID.SLOT_THE_PHOENIX]: {title: "ThePhoenix", name: "ThePhoenix", action: "ThePhoenix",animation:"animation", spineScale:1, offsetY:-20},   // 凤凰
    [GAME_ID.SLOT_ROBIN_HOOD]: {title: "RobinHood", name: "RobinHood", action: "RobinHood",animation:"animation", spineScale:1, offsetY:-20},   // 侠盗罗宾逊
    [GAME_ID.SLOT_BUNNY_GIRL]: {title: "BunnyGirl", name: "BunnyGirl", action: "BunnyGirl",animation:"animation", spineScale:1, offsetY:-20},   // 兔女郎
    [GAME_ID.SLOT_GOLD_MINER]: {title: "GoldMiner", name: "GoldMiner", action: "GoldMiner",animation:"animation", spineScale:1, offsetY:-20},   // 黄金矿工
    [GAME_ID.SLOT_KYLIN]: {title: "Kylin", name: "Kylin", action: "Kylin", animation:"animation", spineScale:1, offsetY:-20},   // 麒麟
    [GAME_ID.SLOT_THE_LION_GEMS]: {title: "TheLionGems", name: "TheLionGems", action: "TheLionGems", animation:"animation", spineScale:1, offsetY:-20},   // 狮子宝石
    [GAME_ID.SLOT_THE_FOREVER_LOVE]: {title: "TheForeverLove", name: "TheForeverLove", action: "TheForeverLove", animation:"animation", spineScale:1, offsetY:-20},   // 真爱永恒


    [GAME_ID.SLOT_PUSS_THE_MUSKETEER]: {title: "PussTheMusketeer", name: "PussTheMusketeer", action: "PussTheMusketeer",animation:"animation",spineScale:0.95, offsetY:-20},   // 猫的火枪手
    [GAME_ID.SLOT_WOLF_LEGEND]: {title: "WolfLegend", name: "WolfLegend", action: "WolfLegend",animation:"animation",spineScale:0.95, offsetY:-10},   // 狼之传奇

    [GAME_ID.SLOT_HADES]: {title: "Hades", name: "Hades", action: "Hades", animation:"animation", spineScale:1, offsetY:-20},   // 冥王哈迪斯
    [GAME_ID.SLOT_DEMETER]:  {title: "CandyClash", name: "CandyClash", action: "CandyClash", animation:"animation"}, //德墨忒尔
    [GAME_ID.SLOT_HERMES]: {title: "Hermes", name: "Hermes", action: "Hermes", animation:"animation"}, //赫尔墨斯
    [GAME_ID.SLOT_PROMETHEUS]: {title: "Prometheus", name: "Prometheus", action: "Prometheus", animation:"animation", spineScale:1, offsetY:-20},// 普罗米修斯

};