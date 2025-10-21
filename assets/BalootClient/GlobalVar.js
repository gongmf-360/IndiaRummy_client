/*
** Manager the global variable
*/

let ServerList = {
    1: "8.218.158.180:9951",            // slot
    2: "8.218.158.180:9951",            // machen
    3: "8.218.158.180:9951",            // liyi
    4: "8.218.158.180:9951",
    5: "8.218.158.180:9951",            // test
    6: "8.218.158.180:9951",            // haoran
};

var GlobalVar = cc.Class({
    extends: cc.Component,

    statics: {
        // 登录游戏服地址
        loginServerAddress: ServerList[CC_BUILD ? 4 : 2],

        localVersion: true,
        publishMode: false,  //发布的时候需要改成true,启用子包
        openUpdate: false,
        openAutoLogin: true, //是否开启自动登陆
        
        //非常用的配置
        isReview: false,
        isAndroidReview: false,
        appId: 17,           //产品id 1:BB, 4:Poly, 6:南非, 7:印度, 8:华为DRM  14:华为Durak
        resVersion: "1.6.0.0",
        appVersion: '1.0.0',
        designSize: cc.size(1920, 1080),
        centerPos: cc.v2(960, 540),

        poly99: true,
        // 语言
        language: "en",

        // openAPIModel:false, //api模式登陆开关
        // tAccountServer:"tlogin.poly99online.com", //测试账号的服务器
        // loginStateUrl:"https://state.poly99online.com/",//登录状态检测地址

        apiUrl:"https://inter.yonogames.com",
        //提审
        haoUrl:"https://inter.yonogames.com/hao.html",
        fackbookLink: "https://www.facebook.com/cashheroslots/",     //fackbook链接  rummyslots/cashheroslots/...
        androidApi: "http://47.99.169.162:6180/",
        //提审
        // apiUrl:"https://api.rummy99plus.com",
    },
});
window.Global = GlobalVar;
