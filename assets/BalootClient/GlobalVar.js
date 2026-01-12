/*
** Manager the global variable
*/

// let ServerList = {
//     1: "192.168.1.57",            // slot
//     2: "192.168.1.57",            // machen
//     3: "192.168.1.57",            // liyi
//     4: "192.168.1.57",            // release
//     5: "192.168.1.57",            // test
//     6: "192.168.1.57",            // haoran
// };


// let ServerList = {
//     1: "192.168.1.57",            // slot
//     2: "192.168.1.57",            // machen
//     3: "192.168.1.57",            // liyi
//     4: "192.168.1.57",            // release
//     5: "192.168.1.57",            // test
//     6: "192.168.1.57",            // haoran
// };

let ServerList = {
    1: "xyule.cyou",            // slot
    2: "xyule.cyou",            // machen
    3: "xyule.cyou",            // liyi
    4: "xyule.cyou",            // release
    5: "xyule.cyou",            // test
    6: "xyule.cyou",            // haoran
};
// let ServerList = {
//     1: "192.168.1.57",            // slot
//     2: "192.168.1.57",            // machen
//     3: "192.168.1.57",            // liyi
//     4: "xyule.cyou",            // release
//     5: "192.168.1.57",            // test
//     6: "192.168.1.57",            // haoran
// };

// let ServerList = {
//     1: "xyule.cyou",            // slot
//     2: "xyule.cyou",            // machen
//     3: "xyule.cyou",            // liyi
//     4: "xyule.cyou",            // release
//     5: "xyule.cyou",            // test
//     6: "xyule.cyou",            // haoran
// };

var GlobalVar = cc.Class({
    extends: cc.Component,
    statics: {
        // loginServerAddress: ServerList[CC_BUILD ? 4 : 2] + ':9951/ws',
        // connectGamesAddress: ServerList[CC_BUILD ? 4 : 2] + ":9959/ws",
        loginServerAddress: ServerList[CC_BUILD ? 4 : 2] + '/login',
        connectGamesAddress: ServerList[CC_BUILD ? 4 : 2] + "/game",
        // loginServerAddress: "xyule.cyou" + '/login',
        // connectGamesAddress: "xyule.cyou" + "/game",
        // wsHead: CC_BUILD ? "wss://" : "ws://", // 协议头
        wsHead: CC_BUILD ? "wss://" : "ws://", // 协议头
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

        apiUrl: "http://inter.yonogames.com",
        //提审
        haoUrl: "https://inter.yonogames.com/hao.html",
        userBaseUrl: `https://${ServerList[CC_BUILD ? 4 : 2]}:7002`,
        fackbookLink: "https://www.facebook.com/cashheroslots/",     //fackbook链接  rummyslots/cashheroslots/...
        androidApi: "http://47.99.169.162:6180/",
        //提审
        // apiUrl:"https://api.rummy99plus.com",
    },
});
window.Global = GlobalVar;
