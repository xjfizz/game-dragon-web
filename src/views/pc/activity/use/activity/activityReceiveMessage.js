/* 龙部分逻辑处理 */

// 导入配置功能

import { reactive, onMounted, toRefs, onBeforeUnmount, inject, getCurrentInstance, toRaw, computed, watch } from "vue";
import { useStore } from 'vuex'
import { useRouter, useRoute } from "vue-router";
import { getSession,setSession, getToken, setCookie } from "@/utils/auth.js";
import { initWallet, getSiner } from "@/utils/metaMask/ethers.js";
import clip from "@/utils/clipboard";






// 初始化数据
const activityReceiveState = reactive({
    form: {
        email: "",
        bscAddress: "",
        teleGramAccount: "",
        twitterAccount: "",
    },
    imgArr1: '',
    imgArr2: '',
    imgArr3: '',
    imgUrl1: '',
    imgUrl2: '',
    imgUrl3: '',
    submitSuccessShow: false,
    isEdit:false,
});





export default function activityReceiveMessage() {

    const router = useRouter()
    const route = useRoute()

    const { ctx } = getCurrentInstance()
    const API = inject("API");
    const $message = inject("$message");
    const store = useStore();
    onMounted(() => {
        getUserMessage()

    });
    const init = () => {

        activityReceiveState.form.bscAddress = getSession('address')
        activityReceiveState.form.teleGramAccount = ''
        activityReceiveState.form.twitterAccount = ''
        activityReceiveState.imgUrl1 = ''
        activityReceiveState.imgUrl2 = ''
        activityReceiveState.imgUrl3 = ''
        activityReceiveState.isEdit = false
        getActivityDetail()
    }
    const getUserMessage = () => {
        let params = {
            id: JSON.parse(getSession('user')).uid
        }
        API.activity.getUser(params).then((res) => {
            if (res.code == 0) {
                activityReceiveState.form.email = res.data.email
                init()
            }
        });

    }
    const getActivityDetail = () => {
        let params = {

        }
        API.activity.activityMessageDetail(params).then((res) => {
            if (res.code == 0) {
                if(res.data) {
                    activityReceiveState.form.teleGramAccount = res.data.telegramAccount
                    activityReceiveState.form.twitterAccount =  res.data.twitterAccount
                    activityReceiveState.form.bscAddress = res.data.walletAddress
                    setSession('activityAddress',res.data.walletAddress)
                    activityReceiveState.isEdit = true
                } else {
                    activityReceiveState.isEdit = false
                }
               
            }
        });
    }
    const editMesage = ()=> {
        activityReceiveState.form.teleGramAccount = ''
        activityReceiveState.form.twitterAccount = ''
        activityReceiveState.form.bscAddress = ''
        activityReceiveState.isEdit = false
    }
    const getFile1 = (event) => {
        var file = event.target.files;
        for (var i = 0; i < file.length; i++) {
            //上传类型判断
            var imgName = file[i].name;
            var idx = imgName.lastIndexOf(".");
            if (idx != -1) {
                var ext = imgName.substr(idx + 1).toUpperCase();
                ext = ext.toLowerCase();
                if (
                    ext != "png" &&
                    ext != "jpg" &&
                    ext != "jpeg" &&
                    ext != "bmp" &&
                    ext != "gif" &&
                    ext != "webp" &&
                    ext != "svg" &&
                    ext != "psd" &&
                    ext != "tiff"
                ) {
                    //主文件不是图片资源时,限制只能传音频和视频文件
                    var right_type = [
                        "avi",
                        "wmv",
                        "mpg",
                        "mpeg",
                        "mov",
                        "rm",
                        "ram",
                        "swf",
                        "flv",
                        "mp4",
                        "mp3",
                        "wma",
                        "avi",
                        "rm",
                        "rmvb",
                        "flv",
                        "mpg",
                        "mkv",
                    ];
                    if (right_type.filter((item) => item == ext).length <= 0) {
                        ElMessage({
                            showClose: true,
                            message: "Only pictures, videos and audio files are supported",
                        });
                        return;
                    }
                    fileArr1.push(file[i]);
                } else {
                    activityReceiveState.imgArr1 = file[i];
                }
            }
            let formData = new FormData();
            formData.append("file", file[i]);
            formData.append("hash", '');
            formData.append("content_type", 'pic');
            formData.append("type", 'userRecomInfo');
            //通过append向form对象添加数据
            //FormData私有类对象，访问不到，可以通过get判断值是否传进去 formData.get('files')
            //文件上传
            API.activity.uploadFile(formData).then((res) => {
                //.....
                if (res.code == 0) {
                    activityReceiveState.imgUrl1 = res.data.domain + res.data.path
                }
            });
        }
    }
    const getFile2 = (event) => {
        var file = event.target.files;
        for (var i = 0; i < file.length; i++) {
            //上传类型判断
            var imgName = file[i].name;
            var idx = imgName.lastIndexOf(".");
            if (idx != -1) {
                var ext = imgName.substr(idx + 1).toUpperCase();
                ext = ext.toLowerCase();
                if (
                    ext != "png" &&
                    ext != "jpg" &&
                    ext != "jpeg" &&
                    ext != "bmp" &&
                    ext != "gif" &&
                    ext != "webp" &&
                    ext != "svg" &&
                    ext != "psd" &&
                    ext != "tiff"
                ) {
                    //主文件不是图片资源时,限制只能传音频和视频文件
                    var right_type = [
                        "avi",
                        "wmv",
                        "mpg",
                        "mpeg",
                        "mov",
                        "rm",
                        "ram",
                        "swf",
                        "flv",
                        "mp4",
                        "mp3",
                        "wma",
                        "avi",
                        "rm",
                        "rmvb",
                        "flv",
                        "mpg",
                        "mkv",
                    ];
                    if (right_type.filter((item) => item == ext).length <= 0) {
                        ElMessage({
                            showClose: true,
                            message: "Only pictures, videos and audio files are supported",
                        });
                        return;
                    }
                    fileArr2.push(file[i]);
                } else {
                    activityReceiveState.imgArr2 = file[i];
                }
            }
            let formData = new FormData();
            formData.append("file", file[i]);
            formData.append("hash", '');
            formData.append("content_type", 'pic');
            formData.append("type", 'userRecomInfo');
            //通过append向form对象添加数据
            //FormData私有类对象，访问不到，可以通过get判断值是否传进去 formData.get('files')
            //文件上传
            API.activity.uploadFile(formData).then((res) => {
                //.....
                if (res.code == 0) {
                    activityReceiveState.imgUrl2 = res.data.domain + res.data.path
                }
            });
        }
    }
    const getFile3 = (event) => {
        var file = event.target.files;
        for (var i = 0; i < file.length; i++) {
            //上传类型判断
            var imgName = file[i].name;
            var idx = imgName.lastIndexOf(".");
            if (idx != -1) {
                var ext = imgName.substr(idx + 1).toUpperCase();
                ext = ext.toLowerCase();
                if (
                    ext != "png" &&
                    ext != "jpg" &&
                    ext != "jpeg" &&
                    ext != "bmp" &&
                    ext != "gif" &&
                    ext != "webp" &&
                    ext != "svg" &&
                    ext != "psd" &&
                    ext != "tiff"
                ) {
                    //主文件不是图片资源时,限制只能传音频和视频文件
                    var right_type = [
                        "avi",
                        "wmv",
                        "mpg",
                        "mpeg",
                        "mov",
                        "rm",
                        "ram",
                        "swf",
                        "flv",
                        "mp4",
                        "mp3",
                        "wma",
                        "avi",
                        "rm",
                        "rmvb",
                        "flv",
                        "mpg",
                        "mkv",
                    ];
                    if (right_type.filter((item) => item == ext).length <= 0) {
                        ElMessage({
                            showClose: true,
                            message: "Only pictures, videos and audio files are supported",
                        });
                        return;
                    }
                    fileArr3.push(file[i]);
                } else {
                    activityReceiveState.imgArr3 = file[i];
                }
            }
            let formData = new FormData();
            formData.append("file", file[i]);
            formData.append("hash", '');
            formData.append("content_type", 'pic');
            formData.append("type", 'userRecomInfo');
            //通过append向form对象添加数据
            //FormData私有类对象，访问不到，可以通过get判断值是否传进去 formData.get('files')
            //文件上传
            API.activity.uploadFile(formData).then((res) => {
                //.....
                if (res.code == 0) {
                    activityReceiveState.imgUrl3 = res.data.domain + res.data.path
                }
            });
        }
    }
    const submit = () => {
        let params = {
            "email": activityReceiveState.form.email,
            "telegramAccount": activityReceiveState.form.teleGramAccount,
            // "telegramChanelPic":activityReceiveState.imgUrl2,
            // "telegramPic": activityReceiveState.imgUrl1,
            "twitterAccount": activityReceiveState.form.twitterAccount,
            // "twitterPic":  activityReceiveState.imgUrl3,
            "uid": JSON.parse(getSession('user')).uid,
            "walletAddress": activityReceiveState.form.bscAddress,
        }
        API.activity.activityMessage(params).then((res) => {
            if (res.code == 0) {
               activityReceiveState.submitSuccessShow = true
            }
        });
    }
    const closeBox = () => {
        activityReceiveState.submitSuccessShow = false
        // router.back()
        return router.push({ path: "/activityStart" });

    }

    const goHref1 = () => {
        console.log('====')
        window.open(
            "https://twitter.com/DragonMainland",
            "_blank"
        );
    }

    const goHref2 = () => {
        console.log('====')
        window.open(
            "https://t.me/dragon_mainland",
            "_blank"
        );
    }

    const goHref3 = () => {
        console.log('====')
        window.open(
            "https://t.me/dragonmainland_ann",
            "_blank"
        );
    }

    const goHref4 = () => {
        console.log('====')
        window.open(
            "https://twitter.com/DragonMainland/status/1446725239669329922?s=20",
            "_blank"
        );
    }

    const goHref5 = () => {
        console.log('====')
        window.open(
            "https://dragonmainland.io/#/home",
            "_blank"
        );
    }

    

    // 打开首页活动弹框
    const goActivity = () => {
        getActivityStartTime();
    };

    const getActivityStartTime = () => {
        // state.playGameShow = true;
        // return
        if (!getToken()) {
            return router.push({ path: "/login" });
        }
        let params = {
            id: getSession("user").uid,
        };
        API.activity.getActivityStartTime(params).then((res) => {
            console.log("res", res);
            if (res.code == 0) {
                console.log(
                    "getActivityStartTime",
                    new Date(),
                    new Date(res.data.recommendStartTime),
                    new Date(res.data.beginTime)
                );
                let localTime = new Date().getTime();
                let beginTime1 = new Date(res.data.recommendStartTime).getTime();
                let beginTime2 = new Date(res.data.beginTime).getTime();
                if (localTime < beginTime1) {
                    // if (true) {
                    // 邀请活动之前
                    // state.activityStartShow = true;
                    let routeUrl = router.resolve({
                        path: "/activityBefore",
                    });
                    window.open(routeUrl.href, "_blank");
                } else if (
                    localTime >= beginTime1 &&
                    localTime < beginTime2 - 24 * 60 * 60 * 1000
                ) {
                    // 购买活动24小时前
                    // 邀请活动开启
                    let routeUrl = router.resolve({
                        path: "/activityStart",
                    });
                    window.open(routeUrl.href, "_blank");
                    // router.push({ path: "/activityStart" });
                } else if (localTime >= beginTime2 - 24 * 60 * 60 * 1000) {
                    // 购买已开启
                    let routeUrl = router.resolve({
                        path: "/activity",
                    });
                    window.open(routeUrl.href, "_blank");
                    //  router.push({ path: "/activity" });
                }
            }
        });
    };

    const openTips = ()=> {
        $message({
            type:'warning',
            message:'Please fill in the wallet address accurately, which will be bound to the account'
        })
    }

    return {
        activityReceiveState,
        getFile1,
        getFile2,
        getFile3,
        submit,
        closeBox,
        goHref1,
        goHref2,
        goHref3,
        goHref4,
        goHref5,
        goActivity,
        editMesage,
        openTips,
    }
}