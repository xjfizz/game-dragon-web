<template>
  <div class="modal-backdrop">
    <div class="modal">
      <!-- <div class="modal-close" @click="closeBox">
        <img src="@/assets\imgs\openBox/close-video.png" />
      </div> -->
      <div class="no-data-wrap">
        <div class="no-data">
          <div class="no-data-img">
            <img src="../../../assets/imgs/no-data/not-allow.png" alt="" />
          </div>
          <div class="no-data-title">
            Sorry, Your IP address is not available.
          </div>
          <div class="no-data-des">
            Countries and regions where Dragonmainland is not yet open for
            service include: mainland China, Cuba, Iran, North Korea, Crimea,
            Sudan, Malaysia, Syria, the United States [including all U.S.
            territories such as Puerto Rico, American Samoa, Guam, the
            Commonwealth of the Northern Mariana Islands, the U.S. Virgin
            Islands (St. Croix St. John and St. Thomas), Bangladesh, Bolivia,
            Ecuador, and Kyrgyzstan.
          </div>
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
    const state = reactive({});
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
  width: 588px;
  min-height: 410px;
  background: #282523;
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.12);
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
.no-data-wrap {
//   width: 100%;
//   height: 100%;
padding: 48px;
  .no-data {
    display: inline-block;
    width: 100%;
    height: 100%;
    border-radius: 16px;
    overflow: hidden;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    .no-data-img {
      img {
        width: calc(96px * 0.5);
        height: calc(96px * 0.5);
      }
    }
    .no-data-title {
      font-size: 24px;
      font-family: GothamRounded-Medium, GothamRounded;
      font-weight: 500;
      color: #ffffff;
      line-height: 29px;
      margin-top: 24px;
    }
    .no-data-des {
        margin-top: 24px;
      text-align: center;
      width: 493px;
      height: 210px;
      font-size: 16px;
      font-family: GothamRounded-Book, GothamRounded;
      font-weight: normal;
      color: #ffffff;
      line-height: 24px;
      opacity: 0.48;
    }
  }
}
</style>