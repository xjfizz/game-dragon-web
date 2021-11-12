/* 龙部分逻辑处理 */

// 导入配置功能

import { reactive, onMounted, toRefs, onBeforeUnmount, inject, getCurrentInstance, toRaw, nextTick } from "vue";
import { useRouter, useRoute } from "vue-router";
import { getStorage, setCookie } from "@/utils/auth.js";
import anime from "animejs";






// 初始化数据
const createEggData = reactive({
    eggsList: [
        { id: 1, img: require("@/assets/imgs/eggs/move-egg/egg1.png") },
        { id: 2, img: require("@/assets/imgs/eggs/move-egg/egg2.png") },
        { id: 3, img: require("@/assets/imgs/eggs/move-egg/egg3.png") },
        { id: 4, img: require("@/assets/imgs/eggs/move-egg/egg4.png") },
        { id: 5, img: require("@/assets/imgs/eggs/move-egg/egg5.png") },
    ],
    previous: 0,
    now: Date.now(),
    show: true,
    selectDragonIndex1: 1, // 初始id为1的龙,用于记录龙的移动动画
    selectDragonIndex2: 2, // 初始id为2的龙,用于记录龙的移动动画
    selectDragonIndex3: 3, // 初始id为3的龙,用于记录龙的移动动画
    selectDragonIndex4: 4, // 初始id为4的龙,用于记录龙的移动动画
    selectDragonIndex5: 5, // 初始id为4的龙,用于记录龙的移动动画
    selectDragonIndex: 3, //  当前选中的龙
    selectDragonItem: {},
});





export default function homeHandle(context) {


    const route = useRoute()

    const createEgg = () => {
        context.emit("createEgg");
    };

    // 龙蛋初始化
    const dragonInit = ()=> {
        createEggData.selectDragonIndex1 = 1 // 初始id为1的龙,用于记录龙的移动动画
        createEggData.selectDragonIndex2 = 2 // 初始id为2的龙,用于记录龙的移动动画
        createEggData.selectDragonIndex3 = 3 // 初始id为3的龙,用于记录龙的移动动画
        createEggData.selectDragonIndex4 = 4 // 初始id为4的龙,用于记录龙的移动动画
        createEggData.selectDragonIndex5 = 5// 初始id为4的龙,用于记录龙的移动动画
        createEggData.selectDragonIndex = 3 //  当前选中的龙
    }

    const getElementPosition = (e) => {
        var x = 0, y = 0;
        while (e != null) {
            x += e.offsetLeft;
            y += e.offsetTop;
            e = e.offsetParent;
        }
        return { x: x, y: y };
    }

    /* 选择右边龙 */
    const selectRightDragon = () => {
        console.log('selectRightDragon----', createEggData.selectDragonIndex3)
        createEggData.selectDragonIndex -= 1
        if (createEggData.selectDragonIndex < 1) {
            createEggData.selectDragonIndex = 5
        }
        createEggData.selectDragonItem = createEggData.dragonList[createEggData.selectDragonIndex - 1]
        dragonMoveRight()
    }
    /* 选择左边龙 */
    const selectLeftDragon = () => {
        console.log('selectLeftDragon----')
        createEggData.selectDragonIndex += 1
        if (createEggData.selectDragonIndex > 5) {
            createEggData.selectDragonIndex = 1
        }
        createEggData.selectDragonItem = createEggData.dragonList[createEggData.selectDragonIndex - 1]
        dragonMoveLeft()
    }

    const dragonMoveRight = () => {
        const dom1 = document.querySelector(".dragon-item1");
        const dom2 = document.querySelector(".dragon-item2");
        const dom3 = document.querySelector(".dragon-item3");
        const dom4 = document.querySelector(".dragon-item4");
        const dom5 = document.querySelector(".dragon-item5");
        anime({
            targets: ".dragon-item1",
            translateX: getElementPosition(dom2).x - getElementPosition(dom1).x, // 一个item
            translateY: getElementPosition(dom2).y - getElementPosition(dom1).y, // 一个item
        });
        anime({
            targets: ".dragon-item2",
            translateX: getElementPosition(dom3).x - getElementPosition(dom2).x, // 一个item
            translateY: getElementPosition(dom3).y - getElementPosition(dom2).y, // 一个item
        });
        anime({
            targets: ".dragon-item3",
            translateX: getElementPosition(dom4).x - getElementPosition(dom3).x, // 一个item
            translateY: getElementPosition(dom4).y - getElementPosition(dom3).y, // 一个item
        });
        anime({
            targets: ".dragon-item4",
            translateX: getElementPosition(dom5).x - getElementPosition(dom4).x, // 一个item
            translateY: getElementPosition(dom5).y - getElementPosition(dom4).y, // 一个item
        });
        anime({
            targets: ".dragon-item5",
            translateX: getElementPosition(dom1).x - getElementPosition(dom5).x, // 一个item
            translateY: getElementPosition(dom1).y - getElementPosition(dom5).y, // 一个item
        });
        createEggData.selectDragonIndex1 = 2
        createEggData.selectDragonIndex2 = 3
        createEggData.selectDragonIndex3 = 4
        createEggData.selectDragonIndex4 = 5
        createEggData.selectDragonIndex5 = 1


    }

    // 切换蛋动画
    const switchEgg = (index) => {
        console.log(index, createEggData.selectDragonIndex)
        const dom1 = document.querySelector(".dragon-item1");
        const dom2 = document.querySelector(".dragon-item2");
        const dom3 = document.querySelector(".dragon-item3");
        const dom4 = document.querySelector(".dragon-item4");
        const dom5 = document.querySelector(".dragon-item5");
        if (createEggData.selectDragonIndex == 1) {

            if (index == 1) {
                return
            } else if (index == 2) {
                anime({
                    targets: ".dragon-item1",
                    translateX: getElementPosition(dom2).x - getElementPosition(dom1).x, // 一个item
                    translateY: getElementPosition(dom2).y - getElementPosition(dom1).y, // 一个item
                });
                anime({
                    targets: ".dragon-item2",
                    translateX: getElementPosition(dom3).x - getElementPosition(dom2).x, // 一个item
                    translateY: getElementPosition(dom3).y - getElementPosition(dom2).y, // 一个item
                });
                anime({
                    targets: ".dragon-item3",
                    translateX: getElementPosition(dom4).x - getElementPosition(dom3).x, // 一个item
                    translateY: getElementPosition(dom4).y - getElementPosition(dom3).y, // 一个item
                });
                anime({
                    targets: ".dragon-item4",
                    translateX: getElementPosition(dom5).x - getElementPosition(dom4).x, // 一个item
                    translateY: getElementPosition(dom5).y - getElementPosition(dom4).y, // 一个item
                });
                anime({
                    targets: ".dragon-item5",
                    translateX: getElementPosition(dom1).x - getElementPosition(dom5).x, // 一个item
                    translateY: getElementPosition(dom1).y - getElementPosition(dom5).y, // 一个item
                });
                createEggData.selectDragonIndex1 = 2
                createEggData.selectDragonIndex2 = 3
                createEggData.selectDragonIndex3 = 4
                createEggData.selectDragonIndex4 = 5
                createEggData.selectDragonIndex5 = 1
                createEggData.selectDragonIndex = 2




            } else if (index == 3) {
                anime({
                    targets: ".dragon-item1",
                    translateX: getElementPosition(dom1).x - getElementPosition(dom1).x, // 一个item
                    translateY: getElementPosition(dom1).y - getElementPosition(dom1).y, // 一个item
                });
                anime({
                    targets: ".dragon-item2",
                    translateX: getElementPosition(dom2).x - getElementPosition(dom2).x, // 一个item
                    translateY: getElementPosition(dom2).y - getElementPosition(dom2).y, // 一个item
                });
                anime({
                    targets: ".dragon-item3",
                    translateX: getElementPosition(dom3).x - getElementPosition(dom3).x, // 一个item
                    translateY: getElementPosition(dom3).y - getElementPosition(dom3).y, // 一个item
                });
                anime({
                    targets: ".dragon-item4",
                    translateX: getElementPosition(dom4).x - getElementPosition(dom4).x, // 一个item
                    translateY: getElementPosition(dom4).y - getElementPosition(dom4).y, // 一个item
                });
                anime({
                    targets: ".dragon-item5",
                    translateX: getElementPosition(dom5).x - getElementPosition(dom5).x, // 一个item
                    translateY: getElementPosition(dom5).y - getElementPosition(dom5).y, // 一个item
                });
                createEggData.selectDragonIndex1 = 1
                createEggData.selectDragonIndex2 = 2
                createEggData.selectDragonIndex3 = 3
                createEggData.selectDragonIndex4 = 4
                createEggData.selectDragonIndex5 = 5
                createEggData.selectDragonIndex = 3
            } else if (index == 4) {
                anime({
                    targets: ".dragon-item1",
                    translateX: getElementPosition(dom5).x - getElementPosition(dom1).x, // 一个item
                    translateY: getElementPosition(dom5).y - getElementPosition(dom1).y, // 一个item
                });
                anime({
                    targets: ".dragon-item2",
                    translateX: getElementPosition(dom1).x - getElementPosition(dom2).x, // 一个item
                    translateY: getElementPosition(dom1).y - getElementPosition(dom2).y, // 一个item
                });
                anime({
                    targets: ".dragon-item3",
                    translateX: getElementPosition(dom2).x - getElementPosition(dom3).x, // 一个item
                    translateY: getElementPosition(dom2).y - getElementPosition(dom3).y, // 一个item
                });
                anime({
                    targets: ".dragon-item4",
                    translateX: getElementPosition(dom3).x - getElementPosition(dom4).x, // 一个item
                    translateY: getElementPosition(dom3).y - getElementPosition(dom4).y, // 一个item
                });
                anime({
                    targets: ".dragon-item5",
                    translateX: getElementPosition(dom4).x - getElementPosition(dom5).x, // 一个item
                    translateY: getElementPosition(dom4).y - getElementPosition(dom5).y, // 一个item
                });
                createEggData.selectDragonIndex1 = 5
                createEggData.selectDragonIndex2 = 1
                createEggData.selectDragonIndex3 = 2
                createEggData.selectDragonIndex4 = 3
                createEggData.selectDragonIndex5 = 4
                createEggData.selectDragonIndex = 4
            } else if (index == 5) {
                anime({
                    targets: ".dragon-item1",
                    translateX: getElementPosition(dom4).x - getElementPosition(dom1).x, // 一个item
                    translateY: getElementPosition(dom4).y - getElementPosition(dom1).y, // 一个item
                });
                anime({
                    targets: ".dragon-item2",
                    translateX: getElementPosition(dom5).x - getElementPosition(dom2).x, // 一个item
                    translateY: getElementPosition(dom5).y - getElementPosition(dom2).y, // 一个item
                });
                anime({
                    targets: ".dragon-item3",
                    translateX: getElementPosition(dom1).x - getElementPosition(dom3).x, // 一个item
                    translateY: getElementPosition(dom1).y - getElementPosition(dom3).y, // 一个item
                });
                anime({
                    targets: ".dragon-item4",
                    translateX: getElementPosition(dom2).x - getElementPosition(dom4).x, // 一个item
                    translateY: getElementPosition(dom2).y - getElementPosition(dom4).y, // 一个item
                });
                anime({
                    targets: ".dragon-item5",
                    translateX: getElementPosition(dom3).x - getElementPosition(dom5).x, // 一个item
                    translateY: getElementPosition(dom3).y - getElementPosition(dom5).y, // 一个item
                });
                createEggData.selectDragonIndex1 = 4
                createEggData.selectDragonIndex2 = 5
                createEggData.selectDragonIndex3 = 1
                createEggData.selectDragonIndex4 = 2
                createEggData.selectDragonIndex5 = 3
                createEggData.selectDragonIndex = 5
            }

        } else if (createEggData.selectDragonIndex == 2) {


            if (index == 1) {

                anime({
                    targets: ".dragon-item1",
                    translateX: getElementPosition(dom3).x - getElementPosition(dom1).x, // 一个item
                    translateY: getElementPosition(dom3).y - getElementPosition(dom1).y, // 一个item
                });
                anime({
                    targets: ".dragon-item2",
                    translateX: getElementPosition(dom4).x - getElementPosition(dom2).x, // 一个item
                    translateY: getElementPosition(dom4).y - getElementPosition(dom2).y, // 一个item
                });
                anime({
                    targets: ".dragon-item3",
                    translateX: getElementPosition(dom5).x - getElementPosition(dom3).x, // 一个item
                    translateY: getElementPosition(dom5).y - getElementPosition(dom3).y, // 一个item
                });
                anime({
                    targets: ".dragon-item4",
                    translateX: getElementPosition(dom1).x - getElementPosition(dom4).x, // 一个item
                    translateY: getElementPosition(dom1).y - getElementPosition(dom4).y, // 一个item
                });
                anime({
                    targets: ".dragon-item5",
                    translateX: getElementPosition(dom2).x - getElementPosition(dom5).x, // 一个item
                    translateY: getElementPosition(dom2).y - getElementPosition(dom5).y, // 一个item
                });
                createEggData.selectDragonIndex1 = 3
                createEggData.selectDragonIndex2 = 4
                createEggData.selectDragonIndex3 = 5
                createEggData.selectDragonIndex4 = 1
                createEggData.selectDragonIndex5 = 2
                createEggData.selectDragonIndex = 1





            } else if (index == 2) {
                return
            } else if (index == 3) {
                anime({
                    targets: ".dragon-item1",
                    translateX: getElementPosition(dom1).x - getElementPosition(dom1).x, // 一个item
                    translateY: getElementPosition(dom1).y - getElementPosition(dom1).y, // 一个item
                });
                anime({
                    targets: ".dragon-item2",
                    translateX: getElementPosition(dom2).x - getElementPosition(dom2).x, // 一个item
                    translateY: getElementPosition(dom2).y - getElementPosition(dom2).y, // 一个item
                });
                anime({
                    targets: ".dragon-item3",
                    translateX: getElementPosition(dom3).x - getElementPosition(dom3).x, // 一个item
                    translateY: getElementPosition(dom3).y - getElementPosition(dom3).y, // 一个item
                });
                anime({
                    targets: ".dragon-item4",
                    translateX: getElementPosition(dom4).x - getElementPosition(dom4).x, // 一个item
                    translateY: getElementPosition(dom4).y - getElementPosition(dom4).y, // 一个item
                });
                anime({
                    targets: ".dragon-item5",
                    translateX: getElementPosition(dom5).x - getElementPosition(dom5).x, // 一个item
                    translateY: getElementPosition(dom5).y - getElementPosition(dom5).y, // 一个item
                });
                createEggData.selectDragonIndex1 = 1
                createEggData.selectDragonIndex2 = 2
                createEggData.selectDragonIndex3 = 3
                createEggData.selectDragonIndex4 = 4
                createEggData.selectDragonIndex5 = 5
                createEggData.selectDragonIndex = 3
            } else if (index == 4) {
                anime({
                    targets: ".dragon-item1",
                    translateX: getElementPosition(dom5).x - getElementPosition(dom1).x, // 一个item
                    translateY: getElementPosition(dom5).y - getElementPosition(dom1).y, // 一个item
                });
                anime({
                    targets: ".dragon-item2",
                    translateX: getElementPosition(dom1).x - getElementPosition(dom2).x, // 一个item
                    translateY: getElementPosition(dom1).y - getElementPosition(dom2).y, // 一个item
                });
                anime({
                    targets: ".dragon-item3",
                    translateX: getElementPosition(dom2).x - getElementPosition(dom3).x, // 一个item
                    translateY: getElementPosition(dom2).y - getElementPosition(dom3).y, // 一个item
                });
                anime({
                    targets: ".dragon-item4",
                    translateX: getElementPosition(dom3).x - getElementPosition(dom4).x, // 一个item
                    translateY: getElementPosition(dom3).y - getElementPosition(dom4).y, // 一个item
                });
                anime({
                    targets: ".dragon-item5",
                    translateX: getElementPosition(dom4).x - getElementPosition(dom5).x, // 一个item
                    translateY: getElementPosition(dom4).y - getElementPosition(dom5).y, // 一个item
                });
                createEggData.selectDragonIndex1 = 5
                createEggData.selectDragonIndex2 = 1
                createEggData.selectDragonIndex3 = 2
                createEggData.selectDragonIndex4 = 3
                createEggData.selectDragonIndex5 = 4
                createEggData.selectDragonIndex = 4
            } else if (index == 5) {
                anime({
                    targets: ".dragon-item1",
                    translateX: getElementPosition(dom4).x - getElementPosition(dom1).x, // 一个item
                    translateY: getElementPosition(dom4).y - getElementPosition(dom1).y, // 一个item
                });
                anime({
                    targets: ".dragon-item2",
                    translateX: getElementPosition(dom5).x - getElementPosition(dom2).x, // 一个item
                    translateY: getElementPosition(dom5).y - getElementPosition(dom2).y, // 一个item
                });
                anime({
                    targets: ".dragon-item3",
                    translateX: getElementPosition(dom1).x - getElementPosition(dom3).x, // 一个item
                    translateY: getElementPosition(dom1).y - getElementPosition(dom3).y, // 一个item
                });
                anime({
                    targets: ".dragon-item4",
                    translateX: getElementPosition(dom2).x - getElementPosition(dom4).x, // 一个item
                    translateY: getElementPosition(dom2).y - getElementPosition(dom4).y, // 一个item
                });
                anime({
                    targets: ".dragon-item5",
                    translateX: getElementPosition(dom3).x - getElementPosition(dom5).x, // 一个item
                    translateY: getElementPosition(dom3).y - getElementPosition(dom5).y, // 一个item
                });
                createEggData.selectDragonIndex1 = 4
                createEggData.selectDragonIndex2 = 5
                createEggData.selectDragonIndex3 = 1
                createEggData.selectDragonIndex4 = 2
                createEggData.selectDragonIndex5 = 3
                createEggData.selectDragonIndex = 5
            }



        } else if (createEggData.selectDragonIndex == 3) {
            if (index == 1) {
                anime({
                    targets: ".dragon-item1",
                    translateX: getElementPosition(dom3).x - getElementPosition(dom1).x, // 一个item
                    translateY: getElementPosition(dom3).y - getElementPosition(dom1).y, // 一个item
                });
                anime({
                    targets: ".dragon-item2",
                    translateX: getElementPosition(dom4).x - getElementPosition(dom2).x, // 一个item
                    translateY: getElementPosition(dom4).y - getElementPosition(dom2).y, // 一个item
                });
                anime({
                    targets: ".dragon-item3",
                    translateX: getElementPosition(dom5).x - getElementPosition(dom3).x, // 一个item
                    translateY: getElementPosition(dom5).y - getElementPosition(dom3).y, // 一个item
                });
                anime({
                    targets: ".dragon-item4",
                    translateX: getElementPosition(dom1).x - getElementPosition(dom4).x, // 一个item
                    translateY: getElementPosition(dom1).y - getElementPosition(dom4).y, // 一个item
                });
                anime({
                    targets: ".dragon-item5",
                    translateX: getElementPosition(dom2).x - getElementPosition(dom5).x, // 一个item
                    translateY: getElementPosition(dom2).y - getElementPosition(dom5).y, // 一个item
                });
                createEggData.selectDragonIndex1 = 3
                createEggData.selectDragonIndex2 = 4
                createEggData.selectDragonIndex3 = 5
                createEggData.selectDragonIndex4 = 1
                createEggData.selectDragonIndex5 = 2
                createEggData.selectDragonIndex = 1



            } else if (index == 2) {
                anime({
                    targets: ".dragon-item1",
                    translateX: getElementPosition(dom2).x - getElementPosition(dom1).x, // 一个item
                    translateY: getElementPosition(dom2).y - getElementPosition(dom1).y, // 一个item
                });
                anime({
                    targets: ".dragon-item2",
                    translateX: getElementPosition(dom3).x - getElementPosition(dom2).x, // 一个item
                    translateY: getElementPosition(dom3).y - getElementPosition(dom2).y, // 一个item
                });
                anime({
                    targets: ".dragon-item3",
                    translateX: getElementPosition(dom4).x - getElementPosition(dom3).x, // 一个item
                    translateY: getElementPosition(dom4).y - getElementPosition(dom3).y, // 一个item
                });
                anime({
                    targets: ".dragon-item4",
                    translateX: getElementPosition(dom5).x - getElementPosition(dom4).x, // 一个item
                    translateY: getElementPosition(dom5).y - getElementPosition(dom4).y, // 一个item
                });
                anime({
                    targets: ".dragon-item5",
                    translateX: getElementPosition(dom1).x - getElementPosition(dom5).x, // 一个item
                    translateY: getElementPosition(dom1).y - getElementPosition(dom5).y, // 一个item
                });
                createEggData.selectDragonIndex1 = 2
                createEggData.selectDragonIndex2 = 3
                createEggData.selectDragonIndex3 = 4
                createEggData.selectDragonIndex4 = 5
                createEggData.selectDragonIndex5 = 1
                createEggData.selectDragonIndex = 2




            } else if (index == 3) {
                return
            } else if (index == 4) {
                anime({
                    targets: ".dragon-item1",
                    translateX: getElementPosition(dom5).x - getElementPosition(dom1).x, // 一个item
                    translateY: getElementPosition(dom5).y - getElementPosition(dom1).y, // 一个item
                });
                anime({
                    targets: ".dragon-item2",
                    translateX: getElementPosition(dom1).x - getElementPosition(dom2).x, // 一个item
                    translateY: getElementPosition(dom1).y - getElementPosition(dom2).y, // 一个item
                });
                anime({
                    targets: ".dragon-item3",
                    translateX: getElementPosition(dom2).x - getElementPosition(dom3).x, // 一个item
                    translateY: getElementPosition(dom2).y - getElementPosition(dom3).y, // 一个item
                });
                anime({
                    targets: ".dragon-item4",
                    translateX: getElementPosition(dom3).x - getElementPosition(dom4).x, // 一个item
                    translateY: getElementPosition(dom3).y - getElementPosition(dom4).y, // 一个item
                });
                anime({
                    targets: ".dragon-item5",
                    translateX: getElementPosition(dom4).x - getElementPosition(dom5).x, // 一个item
                    translateY: getElementPosition(dom4).y - getElementPosition(dom5).y, // 一个item
                });
                createEggData.selectDragonIndex1 = 5
                createEggData.selectDragonIndex2 = 1
                createEggData.selectDragonIndex3 = 4
                createEggData.selectDragonIndex4 = 3
                createEggData.selectDragonIndex5 = 4
                createEggData.selectDragonIndex = 4
            } else if (index == 5) {
                anime({
                    targets: ".dragon-item1",
                    translateX: getElementPosition(dom4).x - getElementPosition(dom1).x, // 一个item
                    translateY: getElementPosition(dom4).y - getElementPosition(dom1).y, // 一个item
                });
                anime({
                    targets: ".dragon-item2",
                    translateX: getElementPosition(dom5).x - getElementPosition(dom2).x, // 一个item
                    translateY: getElementPosition(dom5).y - getElementPosition(dom2).y, // 一个item
                });
                anime({
                    targets: ".dragon-item3",
                    translateX: getElementPosition(dom1).x - getElementPosition(dom3).x, // 一个item
                    translateY: getElementPosition(dom1).y - getElementPosition(dom3).y, // 一个item
                });
                anime({
                    targets: ".dragon-item4",
                    translateX: getElementPosition(dom2).x - getElementPosition(dom4).x, // 一个item
                    translateY: getElementPosition(dom2).y - getElementPosition(dom4).y, // 一个item
                });
                anime({
                    targets: ".dragon-item5",
                    translateX: getElementPosition(dom3).x - getElementPosition(dom5).x, // 一个item
                    translateY: getElementPosition(dom3).y - getElementPosition(dom5).y, // 一个item
                });
                createEggData.selectDragonIndex1 = 4
                createEggData.selectDragonIndex2 = 5
                createEggData.selectDragonIndex3 = 1
                createEggData.selectDragonIndex4 = 2
                createEggData.selectDragonIndex5 = 3
                createEggData.selectDragonIndex = 5
            }
        } else if (createEggData.selectDragonIndex == 4) {
            


            if (index == 1) {

                anime({
                    targets: ".dragon-item1",
                    translateX: getElementPosition(dom3).x - getElementPosition(dom1).x, // 一个item
                    translateY: getElementPosition(dom3).y - getElementPosition(dom1).y, // 一个item
                });
                anime({
                    targets: ".dragon-item2",
                    translateX: getElementPosition(dom4).x - getElementPosition(dom2).x, // 一个item
                    translateY: getElementPosition(dom4).y - getElementPosition(dom2).y, // 一个item
                });
                anime({
                    targets: ".dragon-item3",
                    translateX: getElementPosition(dom5).x - getElementPosition(dom3).x, // 一个item
                    translateY: getElementPosition(dom5).y - getElementPosition(dom3).y, // 一个item
                });
                anime({
                    targets: ".dragon-item4",
                    translateX: getElementPosition(dom1).x - getElementPosition(dom4).x, // 一个item
                    translateY: getElementPosition(dom1).y - getElementPosition(dom4).y, // 一个item
                });
                anime({
                    targets: ".dragon-item5",
                    translateX: getElementPosition(dom2).x - getElementPosition(dom5).x, // 一个item
                    translateY: getElementPosition(dom2).y - getElementPosition(dom5).y, // 一个item
                });
                createEggData.selectDragonIndex1 = 3
                createEggData.selectDragonIndex2 = 4
                createEggData.selectDragonIndex3 = 5
                createEggData.selectDragonIndex4 = 1
                createEggData.selectDragonIndex5 = 2
                createEggData.selectDragonIndex = 1





            } else if (index == 2) {
                
                anime({
                    targets: ".dragon-item1",
                    translateX: getElementPosition(dom2).x - getElementPosition(dom1).x, // 一个item
                    translateY: getElementPosition(dom2).y - getElementPosition(dom1).y, // 一个item
                });
                anime({
                    targets: ".dragon-item2",
                    translateX: getElementPosition(dom3).x - getElementPosition(dom2).x, // 一个item
                    translateY: getElementPosition(dom3).y - getElementPosition(dom2).y, // 一个item
                });
                anime({
                    targets: ".dragon-item3",
                    translateX: getElementPosition(dom4).x - getElementPosition(dom3).x, // 一个item
                    translateY: getElementPosition(dom4).y - getElementPosition(dom3).y, // 一个item
                });
                anime({
                    targets: ".dragon-item4",
                    translateX: getElementPosition(dom5).x - getElementPosition(dom4).x, // 一个item
                    translateY: getElementPosition(dom5).y - getElementPosition(dom4).y, // 一个item
                });
                anime({
                    targets: ".dragon-item5",
                    translateX: getElementPosition(dom1).x - getElementPosition(dom5).x, // 一个item
                    translateY: getElementPosition(dom1).y - getElementPosition(dom5).y, // 一个item
                });
                createEggData.selectDragonIndex1 = 2
                createEggData.selectDragonIndex2 = 3
                createEggData.selectDragonIndex3 = 4
                createEggData.selectDragonIndex4 = 5
                createEggData.selectDragonIndex5 = 1
                createEggData.selectDragonIndex = 2
            
            } else if (index == 3) {
                anime({
                    targets: ".dragon-item1",
                    translateX: getElementPosition(dom1).x - getElementPosition(dom1).x, // 一个item
                    translateY: getElementPosition(dom1).y - getElementPosition(dom1).y, // 一个item
                });
                anime({
                    targets: ".dragon-item2",
                    translateX: getElementPosition(dom2).x - getElementPosition(dom2).x, // 一个item
                    translateY: getElementPosition(dom2).y - getElementPosition(dom2).y, // 一个item
                });
                anime({
                    targets: ".dragon-item3",
                    translateX: getElementPosition(dom3).x - getElementPosition(dom3).x, // 一个item
                    translateY: getElementPosition(dom3).y - getElementPosition(dom3).y, // 一个item
                });
                anime({
                    targets: ".dragon-item4",
                    translateX: getElementPosition(dom4).x - getElementPosition(dom4).x, // 一个item
                    translateY: getElementPosition(dom4).y - getElementPosition(dom4).y, // 一个item
                });
                anime({
                    targets: ".dragon-item5",
                    translateX: getElementPosition(dom5).x - getElementPosition(dom5).x, // 一个item
                    translateY: getElementPosition(dom5).y - getElementPosition(dom5).y, // 一个item
                });
                createEggData.selectDragonIndex1 = 1
                createEggData.selectDragonIndex2 = 2
                createEggData.selectDragonIndex3 = 3
                createEggData.selectDragonIndex4 = 4
                createEggData.selectDragonIndex5 = 5
                createEggData.selectDragonIndex = 3
            } else if (index == 4) {
                return
            } else if (index == 5) {
                anime({
                    targets: ".dragon-item1",
                    translateX: getElementPosition(dom4).x - getElementPosition(dom1).x, // 一个item
                    translateY: getElementPosition(dom4).y - getElementPosition(dom1).y, // 一个item
                });
                anime({
                    targets: ".dragon-item2",
                    translateX: getElementPosition(dom5).x - getElementPosition(dom2).x, // 一个item
                    translateY: getElementPosition(dom5).y - getElementPosition(dom2).y, // 一个item
                });
                anime({
                    targets: ".dragon-item3",
                    translateX: getElementPosition(dom1).x - getElementPosition(dom3).x, // 一个item
                    translateY: getElementPosition(dom1).y - getElementPosition(dom3).y, // 一个item
                });
                anime({
                    targets: ".dragon-item4",
                    translateX: getElementPosition(dom2).x - getElementPosition(dom4).x, // 一个item
                    translateY: getElementPosition(dom2).y - getElementPosition(dom4).y, // 一个item
                });
                anime({
                    targets: ".dragon-item5",
                    translateX: getElementPosition(dom3).x - getElementPosition(dom5).x, // 一个item
                    translateY: getElementPosition(dom3).y - getElementPosition(dom5).y, // 一个item
                });
                createEggData.selectDragonIndex1 = 4
                createEggData.selectDragonIndex2 = 5
                createEggData.selectDragonIndex3 = 1
                createEggData.selectDragonIndex4 = 2
                createEggData.selectDragonIndex5 = 3
                createEggData.selectDragonIndex = 5
            }



       
        } else if (createEggData.selectDragonIndex == 5) {
            
            


            if (index == 1) {

                anime({
                    targets: ".dragon-item1",
                    translateX: getElementPosition(dom3).x - getElementPosition(dom1).x, // 一个item
                    translateY: getElementPosition(dom3).y - getElementPosition(dom1).y, // 一个item
                });
                anime({
                    targets: ".dragon-item2",
                    translateX: getElementPosition(dom4).x - getElementPosition(dom2).x, // 一个item
                    translateY: getElementPosition(dom4).y - getElementPosition(dom2).y, // 一个item
                });
                anime({
                    targets: ".dragon-item3",
                    translateX: getElementPosition(dom5).x - getElementPosition(dom3).x, // 一个item
                    translateY: getElementPosition(dom5).y - getElementPosition(dom3).y, // 一个item
                });
                anime({
                    targets: ".dragon-item4",
                    translateX: getElementPosition(dom1).x - getElementPosition(dom4).x, // 一个item
                    translateY: getElementPosition(dom1).y - getElementPosition(dom4).y, // 一个item
                });
                anime({
                    targets: ".dragon-item5",
                    translateX: getElementPosition(dom2).x - getElementPosition(dom5).x, // 一个item
                    translateY: getElementPosition(dom2).y - getElementPosition(dom5).y, // 一个item
                });
                createEggData.selectDragonIndex1 = 3
                createEggData.selectDragonIndex2 = 4
                createEggData.selectDragonIndex3 = 5
                createEggData.selectDragonIndex4 = 1
                createEggData.selectDragonIndex5 = 2
                createEggData.selectDragonIndex = 1





            } else if (index == 2) {
                
                anime({
                    targets: ".dragon-item1",
                    translateX: getElementPosition(dom2).x - getElementPosition(dom1).x, // 一个item
                    translateY: getElementPosition(dom2).y - getElementPosition(dom1).y, // 一个item
                });
                anime({
                    targets: ".dragon-item2",
                    translateX: getElementPosition(dom3).x - getElementPosition(dom2).x, // 一个item
                    translateY: getElementPosition(dom3).y - getElementPosition(dom2).y, // 一个item
                });
                anime({
                    targets: ".dragon-item3",
                    translateX: getElementPosition(dom4).x - getElementPosition(dom3).x, // 一个item
                    translateY: getElementPosition(dom4).y - getElementPosition(dom3).y, // 一个item
                });
                anime({
                    targets: ".dragon-item4",
                    translateX: getElementPosition(dom5).x - getElementPosition(dom4).x, // 一个item
                    translateY: getElementPosition(dom5).y - getElementPosition(dom4).y, // 一个item
                });
                anime({
                    targets: ".dragon-item5",
                    translateX: getElementPosition(dom1).x - getElementPosition(dom5).x, // 一个item
                    translateY: getElementPosition(dom1).y - getElementPosition(dom5).y, // 一个item
                });
                createEggData.selectDragonIndex1 = 2
                createEggData.selectDragonIndex2 = 3
                createEggData.selectDragonIndex3 = 4
                createEggData.selectDragonIndex4 = 5
                createEggData.selectDragonIndex5 = 1
                createEggData.selectDragonIndex = 2
            
            } else if (index == 3) {
                anime({
                    targets: ".dragon-item1",
                    translateX: getElementPosition(dom1).x - getElementPosition(dom1).x, // 一个item
                    translateY: getElementPosition(dom1).y - getElementPosition(dom1).y, // 一个item
                });
                anime({
                    targets: ".dragon-item2",
                    translateX: getElementPosition(dom2).x - getElementPosition(dom2).x, // 一个item
                    translateY: getElementPosition(dom2).y - getElementPosition(dom2).y, // 一个item
                });
                anime({
                    targets: ".dragon-item3",
                    translateX: getElementPosition(dom3).x - getElementPosition(dom3).x, // 一个item
                    translateY: getElementPosition(dom3).y - getElementPosition(dom3).y, // 一个item
                });
                anime({
                    targets: ".dragon-item4",
                    translateX: getElementPosition(dom4).x - getElementPosition(dom4).x, // 一个item
                    translateY: getElementPosition(dom4).y - getElementPosition(dom4).y, // 一个item
                });
                anime({
                    targets: ".dragon-item5",
                    translateX: getElementPosition(dom5).x - getElementPosition(dom5).x, // 一个item
                    translateY: getElementPosition(dom5).y - getElementPosition(dom5).y, // 一个item
                });
                createEggData.selectDragonIndex1 = 1
                createEggData.selectDragonIndex2 = 2
                createEggData.selectDragonIndex3 = 3
                createEggData.selectDragonIndex4 = 4
                createEggData.selectDragonIndex5 = 5
                createEggData.selectDragonIndex = 3
            } else if (index == 4) {
                anime({
                    targets: ".dragon-item1",
                    translateX: getElementPosition(dom5).x - getElementPosition(dom1).x, // 一个item
                    translateY: getElementPosition(dom5).y - getElementPosition(dom1).y, // 一个item
                });
                anime({
                    targets: ".dragon-item2",
                    translateX: getElementPosition(dom1).x - getElementPosition(dom2).x, // 一个item
                    translateY: getElementPosition(dom1).y - getElementPosition(dom2).y, // 一个item
                });
                anime({
                    targets: ".dragon-item3",
                    translateX: getElementPosition(dom2).x - getElementPosition(dom3).x, // 一个item
                    translateY: getElementPosition(dom2).y - getElementPosition(dom3).y, // 一个item
                });
                anime({
                    targets: ".dragon-item4",
                    translateX: getElementPosition(dom3).x - getElementPosition(dom4).x, // 一个item
                    translateY: getElementPosition(dom3).y - getElementPosition(dom4).y, // 一个item
                });
                anime({
                    targets: ".dragon-item5",
                    translateX: getElementPosition(dom4).x - getElementPosition(dom5).x, // 一个item
                    translateY: getElementPosition(dom4).y - getElementPosition(dom5).y, // 一个item
                });
                createEggData.selectDragonIndex1 = 5
                createEggData.selectDragonIndex2 = 1
                createEggData.selectDragonIndex3 = 2
                createEggData.selectDragonIndex4 = 3
                createEggData.selectDragonIndex5 = 4
                createEggData.selectDragonIndex = 4
            } else if (index == 5) {
               return
            }



       
        
        }
    };


    return {
        createEggData,
        createEgg,
        switchEgg,
        dragonInit

    }
}