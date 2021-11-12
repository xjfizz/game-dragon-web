/* 登录逻辑处理 */

// 导入配置功能

import { reactive, onMounted, toRefs, inject, getCurrentInstance, onBeforeUnmount } from "vue";
import { useRouter, useRoute } from "vue-router";
import { initWallet, getSiner } from "@/utils/metaMask/ethers.js";
import { setSession, setToken, getCookie, getSession } from "@/utils/auth.js";
import { ElMessage } from "element-plus";
import { useI18n } from "vue-i18n"; //要在js中使用国际化
import { isEmail } from "@/utils/valid.js";
import common from "@/utils/common";
import { useStore } from "vuex";




const state = reactive({
    loginType: 1, // 1:binance 2:metaMask 3:email
    metaMaskAddress: "", // metaMask 钱包地址
    metaMaskSign: "", // metaMask 钱包签名
    loginNonce: '', // 签名字符串
    login: {
        email: {
            address: "",
            password: "",
        },
    },
    focusEmailAddressShow: false,
    focusPasswordShow: false,
    loginBoxState: 0, // 0: 不弹框  1: 绑定邮箱弹框 2: 注册, 3 验证邮箱验证码 4 忘记密码 5 输入忘记密码验证码
    loginBoxStateClear: false, //
    isCheckEmailCode: 1, // 1 不校验验证码， 2 校验验证码
    formEmail: {
        email: '',
        code: '', // 211024
        scene: ''
    },
    md5EncryptionForm: {
        nonce: '',
        pubAddr: '',
        encryptKey: '',
        timeStamp: '',
    },
    loginCodeShow: false,
    loginImgForm: {
        img: '',
        code: ""
    },
    codeHandle: {
        data: null,
        func: null
    },
    loginImgCodeLoading: false

});




export default function loginData() {

    const API = inject("API");
    const $message = inject("$message");
    const { proxy } = getCurrentInstance();
    const router = useRouter();
    const route = useRoute();
    const { t } = useI18n();
    const store = useStore();
    onMounted(() => {
        loginInit()
    });
    onBeforeUnmount(() => {
        isLoginHandle() // state.loginBoxState = 1
    })
    const isLoginHandle = () => {
        console.log('isLoginHandle', !getSession('Token'))
        console.log('isLoginHandle', !getSession('address'))
        // if (!getSession('Token') || !getSession('address')) {
        //     sessionStorage.clear()
        // }
        if (state.loginBoxStateClear) {
            sessionStorage.clear()
        }
    }
    const loginInit = () => {
        console.log('loginInit')
        state.loginType = 1 // 1:binance 2:metaMask 3:email
        state.loginBoxStateClear = false// loginBoxStateClear
        state.metaMaskAddress = "" // metaMask 钱包地址
        state.metaMaskSign = "" // metaMask 钱包签名
        state.loginNonce = ''// 签名字符串loginBoxStateClear
        state.login = {
            email: {
                address: "",
                password: "",
            },
        },
            state.loginBoxState = 0 // 0: 不弹框  1: 绑定邮箱弹框 2: 注册, 3 验证邮箱验证码
        state.isCheckEmailCode = 1 // 1 不校验验证码， 2 校验验证码
    }

    const loginByEmail = () => {
        state.loginType = 3;
    };

    const loginByBinance = (type) => {
        console.log(proxy.$i18n);
        proxy.$i18n.locale = type;
        //  $message.success("please wait develop");
    };
    // metaMask 登录
    const loginByMetaMaskGo = () => {
        state.loginType = 2
        getmetaMaskAddress(getNonceStr, getSign, loginSignByMetaMask);
    };

    const loginSignByMetaMask = () => {
        let params = {
            loginType: 101,
            openId: state.metaMaskAddress,
            sign: state.metaMaskSign,
            recommend: getCookie("recommendId") ? getCookie("recommendId") : "",
            timestamp: state.md5EncryptionForm.timeStamp
        };
        API.login.loginSign(params).then((res) => {
            if (res.code == 0) {
                setSession("user", res.data);
                setToken(res.data.token);
                if (res.data.status == 4) {
                    state.loginBoxState = 1;
                    state.loginBoxStateClear = true
                    $message.success(t(`message.pleaseBindEmail`));

                } else {
                    loginSuccess(res.data);
                }
            } else {
                // $message.error(res.i18n);
                $message.warning(t(`message['${res.i18n}']`));
            }
        });
    };

    // 邮箱登录
    const loginByEmailGo = () => {
        if (!isEmail(state.login.email.address)) {
            focusInput(state.focusEmailAddressShow);
            return $message.warning(t(`message.pleaseWriteEamilAddress`));
        }
        if (!state.login.email.password) {
            focusInput(state.focusPasswordShow);
            return $message.warning(t(`message.pleaseWriteEamilPassword`));
        }
        // if (state.login.email.password.length != 6) {
        //     focusInput(state.focusPasswordShow);
        //     return $message.warning(t(`message.pleaseWriteEamilPassword6`));
        // }
        let params = {
            loginType: 3,
            email: state.login.email.address,
            pwd: state.login.email.password,
        };
        // registerByEmail
        API.login.loginByEmail(params).then(async (res) => {
            console.log("loginByEmailGo", res);
            if (res.code == 0) {
                // setSession("user", res.data);
                setToken(res.data.token);
                if (res.data.status == 102) {
                    state.loginBoxStateClear = true
                    $message.success(t(`message.pleaseBindWalletAddressEmail`));
                    getmetaMaskAddress(getNonceStr, getSign, bindMetaMaskAddress);
                } else {
                    // let walletAddress = await initWallet();
                    // console.log("metaMaskAddress", res);
                    // state.metaMaskAddress = res;
                    // setSession("address", res.data);
                    loginSuccess(res.data);
                }
            } else {
                // $message.error(res.i18n);
                $message.warning(t(`message['${res.i18n}']`));
                // validEmail();
            }
        });
    };

    const validEmail = () => {
        let params = {
            email: state.login.email.address,
        };
        // registerByEmail
        API.login.validByEmail(params).then((res) => { });
    };

    const registerByEmailGo = () => {
        // return $message.warning(t(`message['register.close']`));
        let params = {
            email: state.login.email.address,
            pwd: state.login.email.password,
            repwd: state.login.email.password,
        };
        // registerByEmail
        API.login.registerByEmail(params).then((res) => { });
    };

    // 获取钱包地址
    const getmetaMaskAddress = async (callBack1, callBack2, callBack3) => {
        let res = await initWallet();
        console.log("metaMaskAddress", res);
        state.metaMaskAddress = res;
        //  setSession("metaMaskAddress", state.metaMaskAddress);
        callBack1(callBack2, callBack3);
    };

    // 获取签名
    const getSign = (req, callBack) => {
        // state.md5EncryptionForm.nonce = req.data
        // state.md5EncryptionForm.pubAddr = state.metaMaskAddress
        state.md5EncryptionForm.timeStamp = new Date().getTime()
        getSiner(req.data).then((res2) => {
            // common.md5Encryption(state.md5EncryptionForm).then((res2) => {
            console.log("signer", res2);
            state.metaMaskSign = res2;
            callBack ? callBack() : "";
        }).catch(err => {
            state.loginNonce = ''
            console.log('getSiner', err)
        });
    };

    // 绑定钱包地址
    const bindMetaMaskAddress = () => {
        let params = {
            loginType: 0,
            openId: state.metaMaskAddress,
            sign: state.metaMaskSign,
            // recommend: getCookie("recommendId") ? getCookie("recommendId") : "",
            timestamp: state.md5EncryptionForm.timeStamp
        };
        // registerByEmail
        API.login.bindMetaMask(params).then((res) => {
            if (res.code == 0) {
                loginSuccess(res.data);
            } else {
                // $message.error(res.i18n);
                $message.warning(t(`message['${res.i18n}']`));
            }
        });
    };

    // 绑定邮箱地址
    const bindEmailAddress = async (data) => {
        if (!isEmail(data.email.address)) {
            return $message.warning(t(`message.pleaseWriteEamilAddress`));
        }
        if (!data.email.password) {
            return $message.warning(t(`message.pleaseWriteEamilPassword`));
        }
        state.codeHandle = {
            data: data,
            func: bindEmailAddressHandle,
        }
        let img = await getCode(data.email)
        openImgCodeBox()
    };

    // 绑定邮箱地址
    const bindEmailAddressHandle = (data) => {
        if (!isEmail(data.email.address)) {
            return $message.warning(t(`message.pleaseWriteEamilAddress`));
        }
        if (!data.email.password) {
            return $message.warning(t(`message.pleaseWriteEamilPassword`));
        }
        let params = {
            email: data.email.address,
            pwd: data.email.password,
            code: state.loginImgForm.code,
        };
        // bindByEmail
        API.login.bindEmail(params).then(async (res) => {
            if (res.code == 0) {
                closeImgCodeBox()
                // loginSuccess(res.data);

                // state.loginBoxState = 0;
                state.formEmail.email = params.email
                state.formEmail.scene = 'BIND_EMAIL' //  res.data.scene
                state.loginBoxState = 3;
                sessionStorage.removeItem('Token')
                sessionStorage.removeItem('user')
                $message.success(t(`message.validEmail`));
            } else {
                await getCode(state.codeHandle.data.email)
                return $message({
                    type: 'warning',
                    message: t(`message['${res.i18n}']`),
                    customClass: 'zZindex',
                })
            }
        });
    };



    // 注册邮箱
    const signUp = async (data) => {
        if (!isEmail(data.email.address)) {
            return $message.warning(t(`message.pleaseWriteEamilAddress`));
        }
        if (!data.email.password) {
            return $message.warning(t(`message.pleaseWriteEamilPassword`));
        }
        state.codeHandle = {
            data: data,
            func: signUpHandle,
        }
        let img = await getCode(data.email)
        openImgCodeBox()
    };


    // 注册邮箱api
    const signUpHandle = (data) => {

        let params = {
            email: data.email.address,
            pwd: data.email.password,
            repwd: data.email.password,
            recommend: getCookie("recommendId") ? getCookie("recommendId") : "",
            code: state.loginImgForm.code
        };

        // registerByEmail
        API.login.registerByEmail(params).then(async (res) => {
            if (res.code == 0) {
                closeImgCodeBox()
                // state.loginBoxState = 0;
                state.formEmail.email = params.email
                state.formEmail.scene = 'REGISTER' //  res.data.scene
                state.loginBoxState = 3;
                $message.success(t(`message['${res.i18n}']`));
            } else {
                // $message.warning(t(`message['${res.i18n}']`));
                await getCode(state.codeHandle.data.email)
                return $message({
                    type: 'warning',
                    message: t(`message['${res.i18n}']`),
                    customClass: 'zZindex',
                })
            }
        });
    };

    // 忘记密码
    const forgetPassword = async (data) => {
        if (!isEmail(data.email.address)) {
            return $message.warning(t(`message.pleaseWriteEamilAddress`));
        }

        state.codeHandle = {
            data: data,
            func: forgetPasswordHandle,
        }
        let img = await getCode(data.email)
        openImgCodeBox()

    };

    // 忘记密码API
    const forgetPasswordHandle = (data) => {
        if (!isEmail(data.email.address)) {
            return $message.warning(t(`message.pleaseWriteEamilAddress`));
        }

        let params = {
            email: data.email.address,
            code: state.loginImgForm.code
        };
        // registerByEmail
        API.login.getFPCheckCode(params).then(async (res) => {
            if (res.code == 0) {
                closeImgCodeBox()
                state.formEmail.email = params.email
                state.formEmail.scene = 'FIND_PASSWORD' //  res.data.scene
                state.loginBoxState = 5;
                $message.success(t(`message['${res.i18n}']`));
            } else {
                await getCode(state.codeHandle.data.email)
                return $message({
                    type: 'warning',
                    message: t(`message['${res.i18n}']`),
                    customClass: 'zZindex',
                })
            }
        });
    };

    // 获取签名地址字符串
    const getNonceStr = (callBack2, callBack3) => {
        if (!state.metaMaskAddress) return
        let params = {
            pubAddr: state.metaMaskAddress,
        };
        API.login.loginNonce(params).then((res) => {
            if (res.code == 0) {
                state.loginNonce = res.data
                callBack2(res, callBack3);
            } else {
                $message.warning(t(`message['${res.i18n}']`));
            }
        });
    };

    // 登录成功
    const loginSuccess = (data) => {
        if (data) {
            setSession("user", data);
        }
        state.loginNonce = ''
        $message.success(t(`message.loginSuccess`));
        store.commit('login/SET_LOGIN')
        if (!!window.history.state.back) {
            setTimeout(() => {
                router.back();
            }, 1000);
        } else {
            router.push({ path: "/" });
        }
    };

    const focusInput = (key) => {
        state[key] = true;
    };
    const blurInput = (key) => {
        state[key] = false;
    };
    const goRegister = () => {
        state.loginBoxState = 2;
    };

    const goLogin = () => {
        state.loginBoxState = 0;
    };
    const validEmailCode = () => {
        console.log('validEmailCode', state.formEmail)
        let params = {
            code: state.formEmail.code,
            email: state.formEmail.email,
            scene: state.formEmail.scene,
        };
        API.login.validEmailCode(params).then((res) => {
            if (res.code == 0) {
                $message.success(t(`message.registerSuccess`));
                if (state.loginType == 2) {
                    state.loginBoxStateClear = false
                    setSession("user", res.data);
                    setToken(res.data.token);
                    store.commit('login/SET_LOGIN')
                    router.back()

                }
                state.loginBoxState = 0;
            } else {
                $message.warning(t(`message['${res.i18n}']`));
            }
        });
    }

    const validForgetPassword = () => {
        console.log('validEmailCode', state.formEmail)
        let params = {
            checkCode: state.formEmail.code,
            email: state.formEmail.email,
            pwd: state.formEmail.password,
            scene: state.formEmail.scene,
        };
        API.login.findPassword(params).then((res) => {
            if (res.code == 0) {
                $message.success(t(`message.passwordResetSuccess`));
                state.loginBoxState = 0;
                state.formEmail.email = ''
                state.formEmail.code = ''
                state.formEmail.scene = ''
                state.formEmail.password = ''
            } else {
                $message.warning(t(`message['${res.i18n}']`));
            }
        });
    }


    const goForgetPassword = () => {
        state.loginBoxState = 4
    }

    const headHandle = () => {
        loginInit()
    }


    const getCode = async (data) => {
        return new Promise((resolve, reject) => {
            let params = {
                email: data.address
            }
            API.login.getLoginImgCode(params).then(res => {
                state.loginImgForm.img =
                    "data:image/png;base64," + btoa(new Uint8Array(res).reduce((res, byte) => res + String.fromCharCode(byte), ""));
                console.log(' state.loginImgForm.img', state.loginImgForm.img)
                resolve(state.loginImgForm.img)
            })
        })



    }

    const confirm = () => {
        state.loginImgCodeLoading = true
        state.codeHandle.func(state.codeHandle.data)
    }

    const closeImgCodeBox = () => {
        state.loginCodeShow = false
        state.loginImgCodeLoading = false
        state.loginImgForm.img = ''
        state.loginImgForm.code = ''
    }

    const openImgCodeBox = () => {
        state.loginCodeShow = true
    }
    return {
        // ...toRefs(state),
        state,
        loginByEmail,
        loginByEmailGo,
        registerByEmailGo,
        validEmail,
        loginByMetaMaskGo,
        focusInput,
        blurInput,
        bindEmailAddress,
        goRegister,
        signUp,
        forgetPassword,
        goLogin,
        loginByBinance,
        validEmailCode,
        validForgetPassword,
        goForgetPassword,
        headHandle,
        confirm,
        getCode,
        closeImgCodeBox,
    }
}