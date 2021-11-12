/* 龙部分逻辑处理 */

// 导入配置功能
import { reactive, onMounted, toRefs, inject } from "vue";
import anime from "animejs";
import dragonTypeList from "./dragonType";
import dragonLocalTypeList from "./dragonLocalTypeList";
import { initWallet, myWallet, transferAccounts, getContract, getBalanceHandle } from "@/utils/metaMask/ethers.js";
import { getSession } from "@/utils/auth.js";
import { ethers, BigNumber } from "ethers";
import { setSession } from "../../../../../utils/auth";
import { useI18n } from "vue-i18n"; //要在js中使用国际化
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import common from "@/utils/common";
import { Decimal } from 'decimal.js'



// 初始化数据
const state = reactive({
  bugImgForm: {
    img: '',
    coed: ""
  },
  isDragonLock: false, // 龙蛋是否锁定
  isDragonLockTime: '', // 龙蛋是否锁定时间
  buyImgCodeShow: false, // 验证码展示框
  isClicking: false, // 防抖
  BuyLoading: false,
  selectDragonIndex1: 1, // 初始id为1的龙,用于记录龙的移动动画
  selectDragonIndex2: 2, // 初始id为2的龙,用于记录龙的移动动画
  selectDragonIndex3: 3, // 初始id为3的龙,用于记录龙的移动动画
  selectDragonIndex4: 4, // 初始id为4的龙,用于记录龙的移动动画
  selectDragonIndex5: 5, // 初始id为4的龙,用于记录龙的移动动画
  selectDragonIndex: 3, //  当前选中的龙
  selectDragonItem: {},
  dragonNumber: '',
  dragonType: '',
  coinType: {
    1: { 'type': 1, value: 'test' },
    2: { type: 2, value: 'test' },
    3: { type: 3, value: 'BNB' },
  }, // 币类型
  dragonList: [
    {
      id: 1,

      type: dragonTypeList.water,
      dragonImg: require("@/assets/imgs/activity/activity/index/dragon/dragon3.png"),
      dragonEggImg: require("@/assets/imgs/activity/activity/dragon/egg/dragonEgg3.png"),
      eggName: "Water",
      eggDes: "Water dragon: Assistance and regeneration",
      eggDesDown: "sold out",
      eggPrice: 0,
    },
    {
      id: 2,
      type: dragonTypeList.thunder,
      dragonImg: require("@/assets/imgs/activity/activity/index/dragon/dragon2.png"),
      dragonEggImg: require("@/assets/imgs/activity/activity/dragon/egg/dragonEgg2.png"),
      eggName: "Thunder",
      eggDes: "Thunder dragon: Strongest Life Force",
      eggDesDown: "sold out",
      eggPrice: 0,
    },
    {
      id: 3,

      type: dragonTypeList.fire,
      dragonImg: require("@/assets/imgs/activity/activity/index/dragon/dragon1.png"),
      dragonEggImg: require("@/assets/imgs/activity/activity/dragon/egg/dragonEgg1.png"),
      eggName: "Fire",
      eggDes: "Fire dragon: End of rush purchase",
      eggDesDown: "Stay tuned",
      eggPrice: 0,
    },
    {
      id: 4,
      type: dragonTypeList.storm,
      dragonImg: require("@/assets/imgs/activity/activity/index/dragon/dragon4.png"),
      dragonEggImg: require("@/assets/imgs/activity/activity/dragon/egg/dragonEgg4.png"),
      eggName: "Storm",
      eggDes: "Storm dragon: Speed and Agile Attack",
      eggDesDown: "sold out",
      eggPrice: 0,
    },
    {
      id: 5,
      type: dragonTypeList.rock,
      dragonImg: require("@/assets/imgs/activity/activity/index/dragon/dragon5.png"),
      dragonEggImg: require("@/assets/imgs/activity/activity/dragon/egg/dragonEgg5.png"),
      eggName: "Rock",
      eggDes: "Rock dragon: With Highest Defense",
      eggDesDown: "sold out",
      eggPrice: 0,
    },
  ],
  buyEggBoxShow: false,
  buyEggImg: '', //  require('@/assets/imgs/openBox/buyEggBox/egg' + dragonLocalTypeList[selectDragonItem.type] + '.png')
});




export default function selectDragon() {
  const API = inject("API");
  const $message = inject("$message");
  const router = useRouter()
  const store = useStore();
  const { t } = useI18n();
  /*  初始化龙 */
  const init = async () => {
    state.selectDragonItem = state.dragonList[2];
    // todayPrice()
    //  getDragonEgg()
    getDragonDetail()
  };
  // onMounted(() => {
  //   dragonInit()
  // })


  /**
 * 获取元素在页面中的坐标(x, y) 
 * @param {Object} e
 */
  const getElementPosition = (e) => {
    var x = 0, y = 0;
    while (e != null) {
      x += e.offsetLeft;
      y += e.offsetTop;
      e = e.offsetParent;
    }
    return { x: x, y: y };
  }

  // 龙蛋初始化
  const dragonInit = () => {
    state.selectDragonIndex1 = 1 // 初始id为1的龙,用于记录龙的移动动画
    state.selectDragonIndex2 = 2 // 初始id为2的龙,用于记录龙的移动动画
    state.selectDragonIndex3 = 3 // 初始id为3的龙,用于记录龙的移动动画
    state.selectDragonIndex4 = 4 // 初始id为4的龙,用于记录龙的移动动画
    state.selectDragonIndex5 = 5 // 初始id为4的龙,用于记录龙的移动动画
    state.selectDragonIndex = 3 //  当前选中的龙
    // state.selectDragonItem = {}
  }
  /* 选择右边龙 */
  const selectRightDragon = () => {
    state.selectDragonIndex -= 1
    if (state.selectDragonIndex < 1) {
      state.selectDragonIndex = 5
    }
    state.selectDragonItem = state.dragonList[state.selectDragonIndex - 1]
    dragonMoveRight()
  }
  /* 选择左边龙 */
  const selectLeftDragon = () => {
    state.selectDragonIndex += 1
    if (state.selectDragonIndex > 5) {
      state.selectDragonIndex = 1
    }
    state.selectDragonItem = state.dragonList[state.selectDragonIndex - 1]
    dragonMoveLeft()
  }


  const dragonMoveRight = () => {
    const dom1 = document.querySelector(".dragon-item1");
    const dom2 = document.querySelector(".dragon-item2");
    const dom3 = document.querySelector(".dragon-item3");
    const dom4 = document.querySelector(".dragon-item4");
    const dom5 = document.querySelector(".dragon-item5");
    if (state.selectDragonIndex3 == 3) {
      // dragon1
      anime({
        targets: ".dragon-item1",
        translateX: getElementPosition(dom2).x - getElementPosition(dom1).x, // 一个item
        translateY: getElementPosition(dom2).y - getElementPosition(dom1).y, // 一个item
      });
      // dragon2
      anime({
        targets: ".dragon-item2",
        translateX: getElementPosition(dom3).x - getElementPosition(dom2).x, // 一个item
        translateY: getElementPosition(dom3).y - getElementPosition(dom2).y, // 一个item
      });
      // dragon3
      anime({
        targets: ".dragon-item3",
        translateX: getElementPosition(dom4).x - getElementPosition(dom3).x, // 一个item
        translateY: getElementPosition(dom4).y - getElementPosition(dom3).y, // 一个item
      });

      // dragon4
      anime({
        targets: ".dragon-item4",
        translateX: getElementPosition(dom5).x - getElementPosition(dom4).x, // 一个item
        translateY: getElementPosition(dom5).y - getElementPosition(dom4).y, // 一个item
      });

      // dragon5
      anime({
        targets: ".dragon-item5",
        translateX: getElementPosition(dom1).x - getElementPosition(dom5).x, // 一个item
        translateY: getElementPosition(dom1).y - getElementPosition(dom5).y, // 一个item
      });
      state.selectDragonIndex1 += 1
      state.selectDragonIndex2 += 1
      state.selectDragonIndex3 += 1
      state.selectDragonIndex4 += 1
      state.selectDragonIndex5 = 1
    } else if (state.selectDragonIndex3 == 4) {
      // dragon1
      anime({
        targets: ".dragon-item1",
        translateX: getElementPosition(dom3).x - getElementPosition(dom1).x, // 一个item
        translateY: getElementPosition(dom3).y - getElementPosition(dom1).y, // 一个item
      });
      // dragon2
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
      // dragon4
      anime({
        targets: ".dragon-item4",
        translateX: getElementPosition(dom1).x - getElementPosition(dom4).x, // 一个item
        translateY: getElementPosition(dom1).y - getElementPosition(dom4).y, // 一个item
      });
      // dragon5
      anime({
        targets: ".dragon-item5",
        translateX: getElementPosition(dom2).x - getElementPosition(dom5).x, // 一个item
        translateY: getElementPosition(dom2).y - getElementPosition(dom5).y, // 一个item
      });
      state.selectDragonIndex1 += 1
      state.selectDragonIndex2 += 1
      state.selectDragonIndex3 += 1
      state.selectDragonIndex4 = 1
      state.selectDragonIndex5 += 1
    } else if (state.selectDragonIndex3 == 5) {
      // dragon1
      anime({
        targets: ".dragon-item1",
        translateX: getElementPosition(dom4).x - getElementPosition(dom1).x, // 一个item
        translateY: getElementPosition(dom4).y - getElementPosition(dom1).y, // 一个item
      });
      // dragon2
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

      // dragon4
      anime({
        targets: ".dragon-item4",
        translateX: getElementPosition(dom2).x - getElementPosition(dom4).x, // 一个item
        translateY: getElementPosition(dom2).y - getElementPosition(dom4).y, // 一个item
      });
      // dragon5
      anime({
        targets: ".dragon-item5",
        translateX: getElementPosition(dom3).x - getElementPosition(dom5).x, // 一个item
        translateY: getElementPosition(dom3).y - getElementPosition(dom5).y, // 一个item
      });
      state.selectDragonIndex1 += 1
      state.selectDragonIndex2 += 1
      state.selectDragonIndex3 = 1
      state.selectDragonIndex4 += 1
      state.selectDragonIndex5 += 1
    } else if (state.selectDragonIndex3 == 1) {
      // dragon1
      anime({
        targets: ".dragon-item1",
        translateX: getElementPosition(dom5).x - getElementPosition(dom1).x, // 一个item
        translateY: getElementPosition(dom5).y - getElementPosition(dom1).y, // 一个item
      });
      // dragon2
      anime({
        targets: ".dragon-item2",
        translateX: getElementPosition(dom1).x - getElementPosition(dom2).x, // 一个item
        translateY: getElementPosition(dom1).y - getElementPosition(dom2).y, // 一个item
      });
      // dragon3
      anime({
        targets: ".dragon-item3",
        translateX: getElementPosition(dom2).x - getElementPosition(dom3).x, // 一个item
        translateY: getElementPosition(dom2).y - getElementPosition(dom3).y, // 一个item
      });
      // dragon4
      anime({
        targets: ".dragon-item4",
        translateX: getElementPosition(dom3).x - getElementPosition(dom4).x, // 一个item
        translateY: getElementPosition(dom3).y - getElementPosition(dom4).y, // 一个item
      });
      // dragon5
      anime({
        targets: ".dragon-item5",
        translateX: getElementPosition(dom4).x - getElementPosition(dom5).x, // 一个item
        translateY: getElementPosition(dom4).y - getElementPosition(dom5).y, // 一个item
      });
      state.selectDragonIndex1 += 1
      state.selectDragonIndex2 = 1
      state.selectDragonIndex3 += 1
      state.selectDragonIndex4 += 1
      state.selectDragonIndex5 += 1
    } else if (state.selectDragonIndex3 == 2) {
      // dragon1
      anime({
        targets: ".dragon-item1",
        translateX: getElementPosition(dom1).x - getElementPosition(dom1).x, // 一个item
        translateY: getElementPosition(dom1).y - getElementPosition(dom1).y, // 一个item
      });
      // dragon2
      anime({
        targets: ".dragon-item2",
        translateX: getElementPosition(dom2).x - getElementPosition(dom2).x, // 一个item
        translateY: getElementPosition(dom2).y - getElementPosition(dom2).y, // 一个item
      });
      // dragon3
      anime({
        targets: ".dragon-item3",
        translateX: getElementPosition(dom3).x - getElementPosition(dom3).x, // 一个item
        translateY: getElementPosition(dom3).y - getElementPosition(dom3).y, // 一个item
      });
      // dragon4
      anime({
        targets: ".dragon-item4",
        translateX: getElementPosition(dom4).x - getElementPosition(dom4).x, // 一个item
        translateY: getElementPosition(dom4).y - getElementPosition(dom4).y, // 一个item
      });
      // dragon5
      anime({
        targets: ".dragon-item5",
        translateX: getElementPosition(dom5).x - getElementPosition(dom5).x, // 一个item
        translateY: getElementPosition(dom5).y - getElementPosition(dom5).y, // 一个item
      });
      state.selectDragonIndex1 = 1
      state.selectDragonIndex2 += 1
      state.selectDragonIndex3 += 1
      state.selectDragonIndex4 += 1
      state.selectDragonIndex5 += 1
    }
  }

  const dragonMoveLeft = () => {
    const dom1 = document.querySelector(".dragon-item1");
    const dom2 = document.querySelector(".dragon-item2");
    const dom3 = document.querySelector(".dragon-item3");
    const dom4 = document.querySelector(".dragon-item4");
    const dom5 = document.querySelector(".dragon-item5");
    if (state.selectDragonIndex3 == 3) {
      // dragon1
      anime({
        targets: ".dragon-item1",
        translateX: getElementPosition(dom5).x - getElementPosition(dom1).x, // 一个item
        translateY: getElementPosition(dom5).y - getElementPosition(dom1).y, // 一个item
      });
      // dragon2
      anime({
        targets: ".dragon-item2",
        translateX: getElementPosition(dom1).x - getElementPosition(dom2).x, // 一个item
        translateY: getElementPosition(dom1).y - getElementPosition(dom2).y, // 一个item
      });
      // dragon3
      anime({
        targets: ".dragon-item3",
        translateX: getElementPosition(dom2).x - getElementPosition(dom3).x, // 一个item
        translateY: getElementPosition(dom2).y - getElementPosition(dom3).y, // 一个item
      });

      // dragon4
      anime({
        targets: ".dragon-item4",
        translateX: getElementPosition(dom3).x - getElementPosition(dom4).x, // 一个item
        translateY: getElementPosition(dom3).y - getElementPosition(dom4).y, // 一个item
      });

      // dragon5
      anime({
        targets: ".dragon-item5",
        translateX: getElementPosition(dom4).x - getElementPosition(dom5).x, // 一个item
        translateY: getElementPosition(dom4).y - getElementPosition(dom5).y, // 一个item
      });
      state.selectDragonIndex1 = 5
      state.selectDragonIndex2 -= 1
      state.selectDragonIndex3 -= 1
      state.selectDragonIndex4 -= 1
      state.selectDragonIndex5 -= 1
    } else if (state.selectDragonIndex3 == 2) {
      // dragon1
      anime({
        targets: ".dragon-item1",
        translateX: getElementPosition(dom4).x - getElementPosition(dom1).x, // 一个item
        translateY: getElementPosition(dom4).y - getElementPosition(dom1).y, // 一个item
      });
      // dragon2
      anime({
        targets: ".dragon-item2",
        translateX: getElementPosition(dom5).x - getElementPosition(dom2).x, // 一个item
        translateY: getElementPosition(dom5).y - getElementPosition(dom2).y, // 一个item
      });
      // dragon3
      anime({
        targets: ".dragon-item3",
        translateX: getElementPosition(dom1).x - getElementPosition(dom3).x, // 一个item
        translateY: getElementPosition(dom1).y - getElementPosition(dom3).y, // 一个item
      });

      // dragon4
      anime({
        targets: ".dragon-item4",
        translateX: getElementPosition(dom2).x - getElementPosition(dom4).x, // 一个item
        translateY: getElementPosition(dom2).y - getElementPosition(dom4).y, // 一个item
      });

      // dragon5
      anime({
        targets: ".dragon-item5",
        translateX: getElementPosition(dom3).x - getElementPosition(dom5).x, // 一个item
        translateY: getElementPosition(dom3).y - getElementPosition(dom5).y, // 一个item
      });
      state.selectDragonIndex1 -= 1
      state.selectDragonIndex2 = 5
      state.selectDragonIndex3 -= 1
      state.selectDragonIndex4 -= 1
      state.selectDragonIndex5 -= 1
    } else if (state.selectDragonIndex3 == 1) {
      // dragon1
      anime({
        targets: ".dragon-item1",
        translateX: getElementPosition(dom3).x - getElementPosition(dom1).x, // 一个item
        translateY: getElementPosition(dom3).y - getElementPosition(dom1).y, // 一个item
      });
      // dragon2
      anime({
        targets: ".dragon-item2",
        translateX: getElementPosition(dom4).x - getElementPosition(dom2).x, // 一个item
        translateY: getElementPosition(dom4).y - getElementPosition(dom2).y, // 一个item
      });
      // dragon3
      anime({
        targets: ".dragon-item3",
        translateX: getElementPosition(dom5).x - getElementPosition(dom3).x, // 一个item
        translateY: getElementPosition(dom5).y - getElementPosition(dom3).y, // 一个item
      });

      // dragon4
      anime({
        targets: ".dragon-item4",
        translateX: getElementPosition(dom1).x - getElementPosition(dom4).x, // 一个item
        translateY: getElementPosition(dom1).y - getElementPosition(dom4).y, // 一个item
      });

      // dragon5
      anime({
        targets: ".dragon-item5",
        translateX: getElementPosition(dom2).x - getElementPosition(dom5).x, // 一个item
        translateY: getElementPosition(dom2).y - getElementPosition(dom5).y, // 一个item
      });
      state.selectDragonIndex1 -= 1
      state.selectDragonIndex2 -= 1
      state.selectDragonIndex3 = 5
      state.selectDragonIndex4 -= 1
      state.selectDragonIndex5 -= 1
    } else if (state.selectDragonIndex3 == 5) {
      // dragon1
      anime({
        targets: ".dragon-item1",
        translateX: getElementPosition(dom2).x - getElementPosition(dom1).x, // 一个item
        translateY: getElementPosition(dom2).y - getElementPosition(dom1).y, // 一个item
      });
      // dragon2
      anime({
        targets: ".dragon-item2",
        translateX: getElementPosition(dom3).x - getElementPosition(dom2).x, // 一个item
        translateY: getElementPosition(dom3).y - getElementPosition(dom2).y, // 一个item
      });
      // dragon3
      anime({
        targets: ".dragon-item3",
        translateX: getElementPosition(dom4).x - getElementPosition(dom3).x, // 一个item
        translateY: getElementPosition(dom4).y - getElementPosition(dom3).y, // 一个item
      });

      // dragon4
      anime({
        targets: ".dragon-item4",
        translateX: getElementPosition(dom5).x - getElementPosition(dom4).x, // 一个item
        translateY: getElementPosition(dom5).y - getElementPosition(dom4).y, // 一个item
      });

      // dragon5
      anime({
        targets: ".dragon-item5",
        translateX: getElementPosition(dom1).x - getElementPosition(dom5).x, // 一个item
        translateY: getElementPosition(dom1).y - getElementPosition(dom5).y, // 一个item
      });
      state.selectDragonIndex1 -= 1
      state.selectDragonIndex2 -= 1
      state.selectDragonIndex3 -= 1
      state.selectDragonIndex4 = 5
      state.selectDragonIndex5 -= 1
    } else if (state.selectDragonIndex3 == 4) {
      // dragon1
      anime({
        targets: ".dragon-item1",
        translateX: getElementPosition(dom1).x - getElementPosition(dom1).x, // 一个item
        translateY: getElementPosition(dom1).y - getElementPosition(dom1).y, // 一个item
      });
      // dragon2
      anime({
        targets: ".dragon-item2",
        translateX: getElementPosition(dom2).x - getElementPosition(dom2).x, // 一个item
        translateY: getElementPosition(dom2).y - getElementPosition(dom2).y, // 一个item
      });
      // dragon3
      anime({
        targets: ".dragon-item3",
        translateX: getElementPosition(dom3).x - getElementPosition(dom3).x, // 一个item
        translateY: getElementPosition(dom3).y - getElementPosition(dom3).y, // 一个item
      });

      // dragon4
      anime({
        targets: ".dragon-item4",
        translateX: getElementPosition(dom4).x - getElementPosition(dom4).x, // 一个item
        translateY: getElementPosition(dom4).y - getElementPosition(dom4).y, // 一个item
      });

      // dragon5
      anime({
        targets: ".dragon-item5",
        translateX: getElementPosition(dom5).x - getElementPosition(dom5).x, // 一个item
        translateY: getElementPosition(dom5).y - getElementPosition(dom5).y, // 一个item
      });
      state.selectDragonIndex1 -= 1
      state.selectDragonIndex2 -= 1
      state.selectDragonIndex3 -= 1
      state.selectDragonIndex4 -= 1
      state.selectDragonIndex5 = 5
    }
  }

  const buyEggHandle = async () => {
    let md5Form = {
      timestamp: new Date().getTime(),
      code: state.bugImgForm.code,
      contractAddress: getSession('address'),
    }

    let sign = await common.md5BuyImgCode(md5Form)
    let params = {
      clazz: state.dragonList[3].type || null,
      contractAddress: getSession('address'),
      timestamp: md5Form.timestamp,
      sign: sign,
      code: state.bugImgForm.code,
    }
    API.activity.buyEgg(params).then(async res => {
      getCode()
      if (res.code == 0) {
        state.isDragonLockTime = res.data.payEnd
        let startTime = await getNowTime()
        state.isDragonLock = state.isDragonLockTime - startTime > 0
        closeImgCodeBox()
        getContractHandle(res.data)

      } else if (res.code == 10007) {
        return $message({
          type: 'warning',
          message: t(`message['${res.i18n}']`),
          customClass: 'zZindex',
        })
      } else {
        closeImgCodeBox()
        return $message({
          type: 'warning',
          message: t(`message['${res.i18n}']`),
          customClass: 'zZindex',
        })
      }

    })
  }

  // 合约相关
  const getContractHandle = async (data) => {
    let params = {
      clazz: data.clazz,
      // coinType: state.coinType[data.coinType].value,
      heroId: data.heroId,
      email: data.email,
      sign: data.sign,
      price: ethers.utils.parseEther(data.price.toString()),
      timestamp: data.timestamp,
    }
    /*  Todo */
    const contract = getContract()

    const balance = await myWallet()

    // if (data.price > balance - 0.005) {
    // if (data.price > (new Decimal(balance).sub(new Decimal(0.005))).toNumber()) {
    //   return $message({
    //     type: 'warning',
    //     message: 'Sorry, your BNB is not enough'
    //   })
    // }

    let contractResult = await contract.result(getSession('address'))
    console.log('contractResult', contractResult)
    if (!contractResult) {
      // let contractBuyRes = await contract.buy(params.clazz, params.heroId, params.email, { value: params.price })
      console.log('params', params)
      contract.buy(params.clazz, params.heroId, params.email, params.timestamp, params.sign, { value: params.price }).then(async contractBuyRes => {
        if (contractBuyRes && contractBuyRes.hash) {
          let params = {
            id: data.id,
            transHash: contractBuyRes.hash,
            checkCode: data.checkCode,
            heroId: data.heroId,
            status: 1
          }
          eggPay(params, contractBuyRes)
        } else {
          let params = {
            id: data.id,
            transHash: contractBuyRes.hash,
            checkCode: data.checkCode,
            heroId: data.heroId,
            status: 0
          }
          eggPay(params, contractBuyRes)
        }
      }).catch((error) => {
        console.log('error', error)
        state.isDragonLock = false
        eggPayCancel(data)
        if (error.code == 4001) {
          $message({
            type: 'warning',
            message: error.message
          })
        } else {
          $message({
            type: 'warning',
            message: error.data.message
          })
        }
      })

    } else {
      state.isDragonLock = false
      $message({
        type: 'warning',
        message: 'You have already purchased'
      })
    }

  }


  // 当天价格
  const todayPrice = async () => {
    const contract = getContract()

    console.log('contract--------------', contract)

    let toDayPrice = await contract.prices()
    let toDayPriceFormat = ethers.utils.formatEther(toDayPrice)
    console.log('toDayPriceFormat==============', toDayPriceFormat)
    state.dragonList.map(item => {
      item.eggPrice = toDayPriceFormat
    })

  }

  // 当天预售龙蛋类型
  const getDragonEgg = async () => {
    const contract = getContract()
    let dragonType = await contract.job()
    let dragonTypeFormat = dragonType.toString()
    state.dragonType = dragonTypeFormat
    console.log('dragonType', dragonTypeFormat)
  }

  // 当天预售龙蛋数量
  const getDragonDetail = async () => {
    // const contract = getContract()
    // let total = await contract.total()
    // let total_buy = await contract.total_buy()
    // console.log('===', total.toString(), total_buy.toString())
    // let numberFormat = total.toString() - total_buy.toString()// ethers.utils.formatEther(number) // ethers.utils.parseEther("0.01")
    // state.dragonNumber = numberFormat

    let params = {
      id: getSession("user").uid,
    };
    API.activity.getActivityStartTime(params).then((res) => {
      console.log("res", res);
      if (res.code == 0) {
        state.dragonNumber = res.data.balance
        state.dragonType = res.data.clazz
        state.dragonList.map(item => {
          item.eggPrice = res.data.curPrice || 0
        })
        // selectLeftDragon()
        // selectLeftDragon()
        selectRightDragon()
        // selectRightDragon()
      }
    })

  }

  const eggPay = async (data, contract) => {
    state.isDragonLock = false
    let address = await initWallet()
    let params = {
      id: data.id,
      transHash: data.transHash,
      checkCode: '123456', // data.checkCode,
      address: address,
      status: data.status,
    }
    API.activity.buyEggPay(params).then(res => {
      if (res.code == 0) {
        state.BuyLoading = true
        // setIntelDragonDetail(data.heroId)
        contractResp(contract)
        // state.buyEggImg = require('@/assets/imgs/openBox/buyEggBox/egg' + dragonLocalTypeList[state.selectDragonItem.type] + '.png')
        // state.buyEggBoxShow = true

      } else {
        return $message({
          type: 'warning',
          message: t(`message['${res.i18n}']`),
          customClass: 'zZindex',
        })
      }
    })
  }

  const eggPayCancel = (data) => {
    let params = {
      id: data.id
    }
    API.activity.buyEggCancel(params).then(res => {
      if (res.code == 0) {

      }
    })
  }

  const getMyDragon = () => {
    buyEgg()

  }

  const closeBox = () => {
    state.buyEggBoxShow = false
    router.push({ path: "/myMainland/myDragon" });
  }

  const clickControl = () => {
    state.isClicking = true
    setTimeout(() => {
      state.isClicking = false
    }, 3000)
  }

  const buyEgg = async () => {
    clickControl()
    if (!getSession("address")) {
      let address = await initWallet()
      let bindAddress = await store.dispatch("login/SET_LINK_ADDRESS_SAME_BIND", address);
      if (!bindAddress) {
        return $message.warning(t(`message['pleaseBindWalletAddress']`));
      }

      buyEggHandle()
    } else {
      let bindAddress = await store.dispatch("login/SET_LINK_ADDRESS_SAME_BIND", getSession("address"));
      if (!bindAddress) {
        return $message.warning(t(`message['pleaseBindWalletAddress']`));
      }
      buyEggHandle()
    }
  }

  const contractResp = async (contract) => {
    try {
      let receipt = await contract.wait()
      console.log('receipt', receipt)
      await getBalanceHandle()
      state.buyEggImg = require('@/assets/imgs/openBox/buyEggBox/egg' + dragonLocalTypeList[state.selectDragonItem.type] + '.png')
      state.BuyLoading = false
      state.buyEggBoxShow = true
      state.isDragonLock = false
    } catch (error) {
      console.log('error', error)
      state.buyEggImg = require('@/assets/imgs/openBox/buyEggBox/egg' + dragonLocalTypeList[state.selectDragonItem.type] + '.png')
      state.BuyLoading = false
      state.buyEggBoxShow = false
      state.isDragonLock = false
      return $message.warning(t(`message['purchase.failed.err']`));
    }

  }

  const setIntelDragonDetail = (id) => {
    let setIntervalTime = setInterval(async () => {
      let status = await myDragonDetail(id)
      console.log('setIntervalTime', status)
      if (status == 1) {
        clearInterval(setIntervalTime)
        state.buyEggImg = require('@/assets/imgs/openBox/buyEggBox/egg' + dragonLocalTypeList[state.selectDragonItem.type] + '.png')
        state.BuyLoading = false
        state.buyEggBoxShow = true
      } else {
        // startClaim()
      }
    }, 1000)
  }

  const myDragonDetail = (id) => {
    return new Promise((resolve, reject) => {
      let params = {
        no: id
      }
      API.myMainland.getDragonEggDetailByHeroId(params).then(res => {
        if (res.code == 0) {
          resolve(res.data.status)
        }
      })
    })

  }


  // 获取图形验证码
  const getBuyImgCode = async () => {
    let bindAddress = null
    if (!getSession("address")) {
      let address = await initWallet()
      bindAddress = await store.dispatch("login/SET_LINK_ADDRESS_SAME_BIND", address);
      if (!bindAddress) {
        return $message.warning(t(`message['pleaseBindWalletAddress']`));
      }


    } else {
      bindAddress = await store.dispatch("login/SET_LINK_ADDRESS_SAME_BIND", getSession("address"));
      if (!bindAddress) {
        return $message.warning(t(`message['pleaseBindWalletAddress']`));
      }

    }
    let params = {
      address: getSession("address")
    }
    API.activity.getImgCode(params).then(res => {
      console.log('res', res)


      state.bugImgForm.img =
        "data:image/png;base64," +
        btoa(
          new Uint8Array(res).reduce(
            (res, byte) => res + String.fromCharCode(byte),
            ""
          )
        );
      if (!state.buyImgCodeShow) {
        state.buyImgCodeShow = true
      }

    })

  }

  const closeImgCodeBox = () => {
    state.buyImgCodeShow = false
    state.bugImgForm.code = null
    state.bugImgForm.img = null
  }

  const getCode = async () => {
    let params = {
      address: getSession("address")
    }
    API.activity.getImgCode(params).then(res => {
      console.log('res', res)


      state.bugImgForm.img =
        "data:image/png;base64," +
        btoa(
          new Uint8Array(res).reduce(
            (res, byte) => res + String.fromCharCode(byte),
            ""
          )
        );


    })
  }

  const confirm = () => {
    console.log('confirm ')
    if (!state.bugImgForm.code) {
      return
    }
    buyEgg()

  }

  const getNowTime = () => {
    return new Promise((resolve, reject) => {
      API.activity.getServericeTime({}).then(res => {
        resolve(res.data.timestamp)
      })

    })

  }






  return {
    state,
    init,
    selectRightDragon,
    selectLeftDragon,
    buyEgg,
    closeBox,
    getMyDragon,
    dragonLocalTypeList,
    getBuyImgCode,
    confirm,
    getCode,
    closeImgCodeBox,
    dragonInit,

  }
}