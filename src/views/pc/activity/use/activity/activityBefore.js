/* 龙部分逻辑处理 */

// 导入配置功能
import { setInterval } from "core-js";
import { reactive, onMounted, toRefs, onBeforeUnmount, inject, ref } from "vue";
import { useRouter } from "vue-router";
import { setSession, getSession, getStorage,getToken } from "@/utils/auth.js";
import QRCode from 'qrcodejs2'
import activityStart from "@/views/pc/activity/use/activity/activityStart.js";







// 初始化数据
const activityData = reactive({
    helpShow: false,
    tipsShow: false,
    endTime: '', // '2021-09-12 11:38:00',
    time: {
        seconds: '00',
        minutes: '00',
        hours: '00',
    },
    timeInterval: null,
    timeFinish: false,
    myInvitationShow: false,
    preEggListPage: {
        page: 1,
        limit: 99
    },
    activityDetail:{},
    activityBeforeShow:false,
});





export default function activityHandle() {
    const API = inject("API");
    const Moment = inject("$Moment");
    const qrCodeUrlRef = ref(null)
    let { getInvitLink } =  activityStart();
  
    const router = useRouter()
 
    const showHelp = () => {
        console.log('showHelp')
        activityData.tipsShow = false
        activityData.helpShow = !activityData.helpShow
    }
    const showTips = () => {
        activityData.helpShow = false
        activityData.tipsShow = !activityData.tipsShow
    }
    const timeRest = () => {
        getActivityStartTime()

    }

    const timeBuy = (endDateStr) => {
        //结束时间
        let endDate = new Date(endDateStr).getTime();
        console.log('endDate', new Date(endDateStr), endDate)
        //当前时间
        let nowDate = new Date().getTime();
        console.log('nowDate', nowDate)

        let time = endDate - nowDate
        console.log('time', time)
        /* 倒计时完成逻辑-start */
        if (time <= 0) {
            activityData.time = {
                seconds: '00',
                minutes: '00',
                hours: '00',
            }
            clearInterval(activityData.timeInterval)
            timeFinish()
            return
        }
        /* 倒计时完成逻辑-end */

        var hours = (parseInt((time % (1000 * 60 * 60 * 24 * 24)) / (1000 * 60 * 60))).toString().padStart(2, '0')
        var minutes = parseInt((time % (1000 * 60 * 60)) / (1000 * 60)).toString().padStart(2, '0')
        var seconds = parseInt((time % (1000 * 60)) / 1000).toString().padStart(2, '0')
        console.log('hours', hours)
        console.log('minutes', minutes)
        console.log('seconds', seconds)
        activityData.time = {
            seconds: seconds,
            minutes: minutes,
            hours: hours,
        }

    }

    const timeFinish = () => {
        activityData.timeFinish = true
        // getPreEggList()
    }

    const showInvitation = () => {
        activityData.activityBeforeShow = true
    }

    const closeInvitation = () => {
        console.log('-------')
        activityData.myInvitationShow = false
    }




    const getMyDragon = () => {
        console.log('-------')
        activityData.myInvitationShow = false
    }


    const timeFormat = (date) => {
        var date = new Date(date);
        var YY = date.getFullYear() + '-';
        var MM = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
        var DD = (date.getDate() < 10 ? '0' + (date.getDate()) : date.getDate());
        var hh = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':';
        var mm = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) + ':';
        var ss = (date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds());
        return YY + MM + DD + " " + hh + mm + ss;
    }


    const getActivityStartTime = () => {
        if(!getToken()) {
            return router.push({ path: "/login" });
          }
        let params = {
            id: getSession("user").uid,
        };
        API.activity.getActivityStartTime(params).then((res) => {
            console.log("res", res);
            if (res.code == 0) {
                let beginTime = new Date(res.data.beginTime).getTime() 
                activityData.endTime = beginTime
                activityData.timeInterval = setInterval(() => {
                    timeBuy(activityData.endTime)
                }, 1000);
            }
        });
    };

    const getPreEggList = () => {
        let params = {
            uid: getSession("user").uid,
            ...activityData.preEggListPage
        };
        API.activity.getPreEggList(params).then((res) => {
            if (res.code == 0) {

            }
        });
    };

    const getQrcodeUrl = () => {
        let params = {
            id: getSession("user").uid,
        };
        API.login.loginByQrCode(params).then((res) => {
            if (res.code == 0) {
                // createQrCode(res.data)
            }
        });
    }
    const createQrCode = (url) => {
        console.log('qrCodeUrl.value', qrCodeUrlRef)
        var qrcode = new QRCode(qrCodeUrlRef.value, {
            text: url, // 需要转换为二维码的内容
            width: 100,
            height: 100,
            colorDark: '#000000',
            colorLight: '#ffffff',
            correctLevel: QRCode.CorrectLevel.H
        })
    }
    const getActivityDetail = ()=> {
        let params = {}
        API.activity.activityDetail(params).then (res =>{
            if(res.code ==  0) {
                activityData.activityDetail = res.data
            }
        })
    }

    const activityBeforeCloseBox = ()=> {
        activityData.activityBeforeShow = false
    }




    return {
        activityData,
        showHelp,
        showTips,
        timeRest,
        showInvitation,
        closeInvitation,
        timeFormat,
        getQrcodeUrl,
        qrCodeUrlRef,
        getActivityDetail,
        Moment,
        activityBeforeCloseBox
    }
}