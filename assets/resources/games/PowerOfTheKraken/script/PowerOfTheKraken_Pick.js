
let jpNode = ["baoxiangwild","baoxiangmini","baoxiangminor","baoxiangmajor","baoxianggrand"];

cc.Class({
    extends: cc.Component,

    properties: {
        _itemList:[],
        _canClick:false,
        _isEnd:false,
        _itemArr:[],
    },



    start () {

    },

    init(){
        this._bg = cc.find("314_pickbg", this.node);
        this._bg.active = false;
        this._canClick = true;
        console.log("点击测试--箱子游戏--");

        this._itemsLayout = cc.find("items", this.node);
        for (let i = 1; i <= 15; i++){
            let item = cc.find("item"+i, this._itemsLayout);
            this._itemArr.push(item);
            item.children.forEach(c=>{c.active = false;});
            Global.btnClickEvent(item, this.onClickItem, this);
            let sFY= i%3==1 ? item.y : item.y-91;   // 第二列不变
            this._itemList.push({node:item, type:0, startY:item.y, sFStartY:sFY});
        }
        this._itemsLayout.active = false;
        this.node.active = false;
    },

    setCanClick(bClick){
        this._canClick = bClick;
        console.log("当前点击测试--自动点击测试111-",bClick);
        if(bClick){
            let randArr = [];
            for(let i=1;i<=this._itemArr.length-2;i++) randArr.push(i);
            randArr.sort(() => Math.random() - 0.5);
            let callFunc = (inNum)=>{
                cc.tween(this._itemArr[0]).delay(30).call(async ()=>{
                    do{
                        
                        // let bxSp = cc.find("baoxiang", this._itemArr[inNum-1]);
                        // console.log("当前点击测试--箱子99900-inNum-",bxSp.active,inNum,this._itemArr[inNum-1]);
                        // if(!bxSp.active){
                            console.log("当前点击测试--自动点击测试-",inNum);
                        //     this.onClickItem({node:this._itemArr[inNum-1]});
                        // }
                        this.onClickItem({node:this._itemArr[inNum-1]});
                        inNum = randArr.pop();
                        if(!inNum){
                            for(let i=1;i<=this._itemArr.length-2;i++) randArr.push(i);
                            randArr.sort(() => Math.random() - 0.5);
                            inNum = randArr.pop();
                        }
                        await cc.vv.gameData.awaitTime(1)
                    }while(this._isEnd===false)
                }).start();
            }
            
            callFunc(randArr.pop());
            // let randNum = randArr.pop();
            // callFunc(1,randNum);
            // randNum = randArr.pop();
            // callFunc(2,randNum);
            // randNum = randArr.pop();
            // callFunc(3,randNum);
            // randNum = randArr.pop();
            // callFunc(4,randNum);
            // randNum = randArr.pop();
            // callFunc(5,randNum);

            // let randNum = randArr.pop();
            // cc.tween(this._itemArr[randNum]).delay(10).call(()=>{
            //     console.log("当前点击测试--箱子-1-",randNum);
            //     this.onClickItem({node:this._itemArr[randNum]});
            // }).start();
            // randNum = randArr.pop();
            // cc.tween(this._itemArr[randNum]).delay(11).call(()=>{
            //     console.log("当前点击测试--箱子-2-",randNum);
            //     this.onClickItem({node:this._itemArr[randNum]});
            // }).start();
            // randNum = randArr.pop();
            // cc.tween(this._itemArr[randNum]).delay(12).call(()=>{
            //     console.log("当前点击测试--箱子-3-",randNum);
            //     this.onClickItem({node:this._itemArr[randNum]});
            // }).start();

            
            console.log("当前点击测试--箱子-22-",this._canClick);
        }
    },

    showBgNode(bPlay){
        this._bg.active = true;
        if(bPlay){
            this._bg.opacity = 0;
            cc.tween(this._bg)
                .to(0.5, {opacity:255})
                .start()
        }
    },

    initAllItem(bPlay, datas=null){
        this._itemsLayout.active = true;

        if(bPlay){
            Global.SlotsSoundMgr.playEffect("cheat_land1");
        }
        let sPos = this._itemsLayout.convertToNodeSpaceAR(cc.v2(cc.winSize.width, cc.winSize.height));
        for (let i = 0; i < this._itemList.length; i++){
            let node = this._itemList[i].node;
            if(!cc.vv.gameData.IsSuper() && (i == 13 || i == 14)){    // 非super只要13个箱子
                node.active = false;
                continue
            }
            node.active = true;
            node.children.forEach(c=>{c.active = false;c.color = cc.Color.WHITE;});
            this._itemList[i].type = 0;
            let bxSp = cc.find("baoxiang", node).getComponent(sp.Skeleton);
            bxSp.node.active = true;
            let endY = cc.vv.gameData.IsSuper() ? this._itemList[i].sFStartY : this._itemList[i].startY
            if(bPlay){
                bxSp.setAnimation(0,"animation1",false);
                node.y = sPos.y+150;
                cc.tween(node)
                    .delay((i-1)*0.15)
                    .to(0.5, {y: endY})
                    .call(()=>{
                        bxSp.setAnimation(0,"animation2",false);
                        bxSp.addAnimation(0,"animation3",true);
                    })
                    .start()
            } else {
                node.y = endY;
                if(datas[i]){
                    if(datas[i].isOpen){
                        let jpIdx = datas[i].jackpotId;
                        let sameCnt = this.getSameTypeIdxs(jpIdx,datas).length;
                        bxSp.setAnimation(0,sameCnt==1?"animation5_1":"animation5_2",true);

                        let jpSp = cc.find(jpNode[jpIdx], node).getComponent(sp.Skeleton);
                        jpSp.node.active = true;
                        jpSp.setAnimation(0,sameCnt==1?`animation${9-jpIdx}_1`:`animation${9-jpIdx}_2`,true);
                    } else {
                        bxSp.setAnimation(0,"animation3",true);
                    }
                }
            }
        }

        if(datas){
            for (let i = 0; i < 4; i++){
                if(datas){
                    let cnt = this.getSameTypeIdxs(i+1,datas).length;
                    krakenMgr.jpMgr.initCollectCnt(i,cnt);
                    if(cnt == 2){
                        krakenMgr.jpMgr.playCollectWin(i, true);
                    }
                } else {
                    krakenMgr.jpMgr.initCollectCnt(i,0);
                }
            }
        } else {
            krakenMgr.jpMgr.initCollectCnt(0,0);
            krakenMgr.jpMgr.initCollectCnt(1,0);
            krakenMgr.jpMgr.initCollectCnt(2,0);
            krakenMgr.jpMgr.initCollectCnt(3,0);
        }
    },


    // 显示节点结果
    openOneItem(node, jpIdx, datas){
        let bxSp = cc.find("baoxiang", node).getComponent(sp.Skeleton);
        let jpSp = cc.find(jpNode[jpIdx], node).getComponent(sp.Skeleton);

        let sameList = this.getSameTypeIdxs(jpIdx, datas);
        Global.SlotsSoundMgr.playEffect(sameList.length == 3 ? "chest_pick2" :"chest_pick1")
        if (sameList.length == 1) {
            bxSp.setAnimation(0, "animation5", false);
            bxSp.addAnimation(0, "animation5_1", true);
            jpSp.node.active = true;
            jpSp.setAnimation(0, `animation${9-jpIdx}`, false);
            jpSp.addAnimation(0, `animation${9-jpIdx}_1`, true);
        } else if (sameList.length >= 2) {
            for (let i = 0; i < sameList.length; i++) {
                let sameNode = this._itemList[sameList[i]].node;
                let bxSp_temp = cc.find("baoxiang", sameNode).getComponent(sp.Skeleton);
                let jpSp_temp = cc.find(jpNode[jpIdx], sameNode).getComponent(sp.Skeleton);
                if(jpSp_temp.node.active){
                    bxSp_temp.setAnimation(0, "animation5_2", true);
                    jpSp_temp.setAnimation(0, `animation${9-jpIdx}_2`, true);
                } else {
                    bxSp_temp.setAnimation(0, "animation4", false);
                    bxSp_temp.addAnimation(0, "animation5_2", true);
                    jpSp_temp.node.active = true;
                    jpSp_temp.setAnimation(0, `animation${9-jpIdx}`, false);
                    jpSp_temp.addAnimation(0, `animation${9-jpIdx}_2`, true);
                }
            }
        } /*else if (sameList.length == 3) {
            bxSp.setAnimation(0, "animation4", false);
            bxSp.addAnimation(0, "animation5_2", true);
            jpSp.node.active = true;
            jpSp.setAnimation(0, `animation${9-jpIdx}`, false);
            jpSp.addAnimation(0, `animation${9-jpIdx}_2`, true);
        }*/

        if(jpIdx > 0) {
            krakenMgr.jpMgr.addACollectCnt(jpIdx-1, sameList.length)
        } else {    // wild
            for (let i = 0; i < 4; i++){
                krakenMgr.jpMgr.addACollectCnt(i, this.getSameTypeIdxs(i+1, datas).length)
            }
        }
    },

    // 获取当前类型的所有点
    getSameTypeIdxs(id, datas){
        let list = [];
        for (let i = 0; i < datas.length; i++){
            if(datas[i].isOpen && (datas[i].jackpotId == id || datas[i].jackpotId == 0)){
                list.push(i)
            }
        }
        return list;
    },

    async onClickItem(event){
        this._isEnd = false;
        // this._itemArr
        let idx =  Number(event.node.name.substring("item".length));
        if(!this._canClick){    // 当前不可点击
            console.log("当前点击测试---当前不可点击");
            return
        }
        if(this._itemList[idx-1].type !== 0){   // 点击的图标已经打开了
            console.log("当前点击测试---点击的图标已经打开了");
            return;
        }
        let result;
        do{
            this._canClick = false;
            console.log("当前点击测试---开始请求服务器",event.node.name,{rtype:3, choiceId:idx});
            result = await krakenMgr.reqSubGame({rtype:3, choiceId:idx});
            console.log(result);
            console.log("当前点击测试---服務器返回信息",result);
            if(result.code === 200 && !result.spcode) {
                let jackpotGame = result.data.jackpotGame;
                let itemData = jackpotGame.items[idx-1];
                this.openOneItem(event.node, itemData.jackpotId, jackpotGame.items);
                this._itemList[idx-1].type = 1;
                await cc.vv.gameData.awaitTime(0.3)
                this._canClick = true;
                if(jackpotGame.isEnd){
                    this._isEnd = true;
                    this.playEndAnim(jackpotGame);
                    cc.Tween.stopAllByTarget(this._itemArr[0]);
                } else {
                    this._canClick = true;
                }
            }
            await cc.vv.gameData.awaitTime(1)
        }while(!(result.code === 200 && !result.spcode))

    },

    // 断线回到游戏
    backPickGame(bonusdata){
        return new Promise(async (success, failed) => {
            this.node.active = true;
            Global.SlotsSoundMgr.stopBgm();
            Global.SlotsSoundMgr.playBgm("pick_bgm");

            this.initAllItem(false, bonusdata.items);
            this.showBgNode(false);
            krakenMgr.jpMgr.showJpCollect(true);
            let cntList = [];
            for (let i = 0; i < 4; i++){
                cntList.push(this.getSameTypeIdxs(i+1, bonusdata.items).length);
            }
            krakenMgr.jpMgr.showPickItems(true, cntList);

            if(bonusdata.isEnd){

            } else {
                this.setCanClick(true);
            }

            this._callBack = success;
        })
    },

    // 触发回到游戏
    triPickGame(){
        console.log("触发箱子游戏测试点------1-");
        return new Promise(async (success, failed) => {
        console.log("触发箱子游戏测试点------2-");
            Global.SlotsSoundMgr.stopBgm();
            this.node.active = true;
        console.log("触发箱子游戏测试点------3-");
            this.showBgNode(true);
        console.log("触发箱子游戏测试点------4-");
            await cc.vv.gameData.awaitTime(1);
        console.log("触发箱子游戏测试点------5-");
            this.initAllItem(true);
            await cc.vv.gameData.awaitTime(2.5);
        console.log("触发箱子游戏测试点------6-");
            await krakenMgr.popupMgr.playTriPick(true);
        console.log("触发箱子游戏测试点------7-");
            Global.SlotsSoundMgr.playBgm("pick_bgm");
            this.setCanClick(true);
        console.log("触发箱子游戏测试点------8-");

            this._callBack = success;
        });
    },

    async playEndAnim(result){
        return new Promise(async (success, failed) => {
            Global.SlotsSoundMgr.playEffect("jp_trigger");
            let jackpot = result.jackpots;
            let resultIds = []
            for (let i = 0; i < jackpot.length; i++) {
                resultIds.push(jackpot[i].id);
            }

            for (let i = 0; i < result.items.length; i++){
                let id = result.items[i].jackpotId;
                let isOpen = result.items[i].isOpen;

                let node = this._itemList[i].node;
                let bxSp = cc.find("baoxiang", node).getComponent(sp.Skeleton);
                let jpSp = cc.find(jpNode[id], node).getComponent(sp.Skeleton);
                if(isOpen && (id == 0 || resultIds.indexOf(id)>=0)){
                    bxSp.setAnimation(0, "animation5_3", true);
                    jpSp.setAnimation(0, `animation${9-id}_3`, true);
                } else {
                    if(jpSp.node.active){
                        bxSp.setAnimation(0, "animation5_1", true);
                        jpSp.setAnimation(0, `animation${9-id}_1`, true);
                    } else {
                        jpSp.node.active = true;
                        bxSp.setAnimation(0, "animation5", false);
                        bxSp.addAnimation(0, "animation5_1", true);
                        jpSp.setAnimation(0, `animation${9-id}`, false);
                        jpSp.addAnimation(0, `animation${9-id}_1`, true);
                    }
                    bxSp.node.color = new cc.Color(100, 100, 100);
                    jpSp.node.color = new cc.Color(100, 100, 100);
                }
            }

            await cc.vv.gameData.awaitTime(2);
            jackpot.sort((a,b)=>{return a.id < b.id})
            let isSuper = cc.vv.gameData.IsSuper();
            for (let i = 0; i < jackpot.length; i++) {
                await krakenMgr.popupMgr.playJpWin(jackpot[i].id, jackpot[i].coin, 1, !isSuper);
            }

            krakenMgr.playJinbiQp();
            Global.SlotsSoundMgr.stopBgm();

            await cc.vv.gameData.awaitTime(1);
            this._bg.active = false;
            this._itemsLayout.active = false;
            this.node.active = false;
            krakenMgr.jpMgr.showJpCollect(false);
            krakenMgr.jpMgr.showPickItems(false);
            cc.vv.gameData.GetBoxInfo().status = 1;
            krakenMgr.initBoxStatus();

            await cc.vv.gameData.awaitTime(1);
            krakenMgr.showTopBottomNode(true, true);
            await cc.vv.gameData.awaitTime(0.5);

            let nWin = result.winCoin;
            let nTotal = nWin;
            let updateAllCoin = true;
            if(cc.vv.gameData.GetTotalFree() > 0 && cc.vv.gameData.GetTotalFree() != cc.vv.gameData.GetFreeTime()){
                nTotal = cc.vv.gameData.GetGameTotalFreeWin()
                updateAllCoin = false;
            }
            await new Promise((sucess, failed)=>{
                krakenMgr.slotsMgr.ShowBottomWin(nWin,nTotal,updateAllCoin,sucess)
            });

            Global.SlotsSoundMgr.playEffect("voice_pick");

            if(this._callBack){
                this._callBack();
                this._callBack = null;
            }
            success();
        })
    },



});
