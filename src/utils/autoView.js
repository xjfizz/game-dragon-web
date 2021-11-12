import { setSession, getSession } from "@/utils/auth.js";
//创建一个setRem方法，并将方法暴露出去
let autoView = () => {
    setDeviceType()
}

const setDeviceType = () => {
    const deviceType = _isMobile() ? "mobile" : "pc";
    setSession("deviceType", deviceType);
    location.reload()
    console.log("deviceType-app.Vue", deviceType);
};

const _isMobile = () => {
    let flag = document.documentElement.clientWidth <= 1200;
    return flag;
};

export default autoView