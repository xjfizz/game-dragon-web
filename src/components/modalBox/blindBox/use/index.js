/* 龙部分逻辑处理 */

// 导入配置功能

import { reactive, onMounted, toRefs, onBeforeUnmount, inject, getCurrentInstance, toRaw } from "vue";
import { useRouter, useRoute } from "vue-router";
import { getStorage, setCookie } from "@/utils/auth.js";
import { initWallet, getSiner } from "@/utils/metaMask/ethers.js";

import Confetti from "@/assets/lottie/open-box/data2.json";









export default function homeHandle() {

    const bindBoxRef = ref(null);
    const state = reactive({
        defaultOptions: {
            container: bindBoxRef.value,
            animationData: Confetti,
            loop: false,
            autoplay: false,
        },
        anim: {}
    });

    const closeBox = () => {
        // context.emit("closeBox");
        play()
    };
    const confirm = () => {
        context.emit("closeBox");
    };
    const handleAnimation = (anim) => {
        state.anim = anim;
        console.log(anim);
    };
    const play = () => {
        console.log('1111')
        state.anim.goToAndPlay(0, true);

    };



    return {
        bindBoxData,
        closeBox,
        confirm,
        handleAnimation,
        play,

    }
}