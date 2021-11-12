<template>
  <div class="modal-backdrop">
    <div class="modal">
      <div class="modal-close" @click="closeBox">
        <img src="@/assets\imgs\openBox/close-video.png" />
      </div>
      <div class="video-wrap">
        <div class="video">
          <video-player
            class="video-player vjs-custom-skin"
            ref="videoPlayer"
            :playsinline="true"
            :options="playerOptions"
          >
          </video-player>
        </div>
      </div>
    </div>
  </div>
</template>
 




<script>
import { reactive, toRefs, onMounted } from "vue";

export default {
  name: "gameVideo",
  props: {
    classHeader: {
      type: Object,
      default: () => {},
    },
  },
  setup(props, context) {
    const state = reactive({
      playerOptions: {
        //播放速度
        playbackRates: [0.5, 1.0, 1.5, 2.0],
        //如果true,浏览器准备好时开始回放。
        autoplay: true,
        // 默认情况下将会消除任何音频。
        muted: false,
        // 导致视频一结束就重新开始。
        loop: true,
        // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
        preload: "auto",
        language: "zh-CN",
        // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
        aspectRatio: "16:9",
        // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
        fluid: true,
        sources: [
          {
            //类型
            type: "video/mp4",
            //url地址
            src: 'https://dragonmainland.s3.ap-southeast-1.amazonaws.com/video/way_of_playing.mp4', // 'https://dragon1164.s3.ap-southeast-1.amazonaws.com/video.mp4',//  require('@/assets/video/videoPlay/videoPlay1.mp4') // "@/assets/video/videoPlay/videoPlay1.mp4", // https://lf1-cdn-tos.bytegoofy.com/goofy/ies/douyin_home_web/medias/banner_video3.3ce510ed.mp4
          },
        ],
        //你的封面地址
        poster: "",
        //允许覆盖Video.js无法播放媒体源时显示的默认信息。
        notSupportedMessage: "此视频暂无法播放，请稍后再试",
        controlBar: {
          timeDivider: true,
          durationDisplay: true,
          remainingTimeDisplay: false,
          //全屏按钮
          fullscreenToggle: true,
        },
      },
    });
    onMounted(() => {});

    const closeBox = () => {
      context.emit("closeBox");
    };
    const confirm = () => {
      context.emit("closeBox");
    };

    return {
      ...toRefs(state),
      closeBox,
      confirm,
    };
  },
};
</script>

<style scoped lang="less">
.modal-backdrop {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.86);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99999999;
}
.modal {
  //   background-color: #fff;
  //   box-shadow: 2px 2px 20px 1px;
  //   overflow-x: auto;
  //   display: flex;
  //   flex-direction: column;
  //   border-radius: 16px;
  //   width: 1280px;
  //   height: 720px;
  width: 1280px;
  height: 720px;
  background: #140500;
  border-radius: 16px;
  position: relative;
  .modal-close {
    position: absolute;
    right: -78px;
    top: -34px;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 48px;
      height: 48px;
    }
  }
}
.video-wrap {
    width: 100%;
    height: 100%;
  .video {
    display: inline-block;
    width: 100%;
    height: 100%;
   
   
    border-radius:16px;
    overflow: hidden;
     position: relative;
  
  }
}
</style>