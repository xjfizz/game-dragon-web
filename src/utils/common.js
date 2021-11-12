

import md5 from 'js-md5';
let encryptKey = 'VPWD7R5XQC'
let common = {
    goTopScroll: function () {
        let distance = document.documentElement.scrollTop || document.body.scrollTop; //获得当前高度
        let step = distance / 30; //每步的距离
        (function jump() {
            if (distance > 0) {
                distance -= step;
                window.scrollTo(0, distance);
                setTimeout(jump, 10);
            }
        })();
    },

    md5Encryption: function (data) { // 登录加密sign
        return new Promise((resolve, reject) => {
            let sign = data.nonce + data.pubAddr + encryptKey + data.timeStamp
            let md5Value = md5(sign)  //6f43dd5db792acb25d6fe32f3dddac70
            resolve(md5Value)
        })
    },

    md5BuyDragon: function (data) { // buy dragon  sign
        return new Promise((resolve, reject) => {
            let key = 'X2lV0iejIMfx9sfaKm2WqFGoEY8'
            let sign = data.uid + data.contractAddress + data.timestamp + key
            let md5Value = md5(sign)
            resolve(md5Value)
        })
    },

    md5BuyImgCode: function (data) { // buy dragon img code  sign
        return new Promise((resolve, reject) => {
            let key = 'X2lV0iejIMfx9sfaKm2WqFGoEY8'
            let sign = data.code + data.contractAddress + data.timestamp + key
            let md5Value = md5(sign)
            resolve(md5Value)
        })
    },

    md5Exange: function (data) { // buy dragon img code  sign
        return new Promise((resolve, reject) => {
            let key = 'X2lV0iejIMfx9sfaKm2WqFGoEY8'
            let sign = data.contractAddress + data.timestamp + key
            let md5Value = md5(sign)
            resolve(md5Value)
        })
    },

    formatValue4: function(data) {
        return parseFloat(String(data).replace(/^(.*\..{4}).*$/, "$1")) 
    }




}
export default common