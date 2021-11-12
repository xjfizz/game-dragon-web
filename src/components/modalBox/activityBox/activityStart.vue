<template>
  <div class="modal-backdrop">
    <div class="modal">
      <div class="modal-contain">
        <div class="modal-content">
          <div class="top">
            <div class="title">
              <img src="@/assets/imgs/home/activity/box-title.png" alt="" />
            </div>
          </div>
          <div class="bottom">
            <div class="left">
              <div class="wrap">
                <img
                  class="img-egg"
                  src="@/assets/imgs/openBox/buyEggBox/egg1.png"
                  alt=""
                />
                <img
                  class="img-eggBottomStone"
                  src="@/assets/imgs/home/activity/egg-bottom-stone.png"
                  alt=""
                />
                <img
                  class="img-eggBottom"
                  src="@/assets/imgs/home/activity/egg-bottom.png"
                  alt=""
                />
              </div>
            </div>
            <div class="right">
              <div class="wrap">
                <div class="wrap-top">
                  <div class="item">The only chance to get Genesis Dragon</div>
                  <div class="item">Limited Time!</div>
                  <div class="item">Limited quantity!</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="close" @click="closeBox">
        <img src="@/assets/imgs/openBox/buyEggBox/close.png" alt="" />
      </div>
    </div>
  </div>
</template>
 




<script>
import { reactive, toRefs, onMounted } from "vue";

export default {
  name: "homeBox",
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
      context.emit("closeActivity");
    };
    const learnMore = () => {
      context.emit("learnMore");
    };

    return {
      ...toRefs(state),
      closeBox,
      learnMore,
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
  background-color: rgba(0, 0, 0, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99999999;
}
.modal {
  width: 1030px;
  height: 689px;
  // background: #140500;
  border-radius: 16px;
  position: relative;

  .modal-contain {
    height: 100%;
    width: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    background-image: url("../../../assets/imgs/home/activity/box-bc.png");
    .modal-content {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 1030px;
      height: 689px;
      position: relative;
      .top {
        margin-top: 75px;
        .title {
          img {
            width: 531px;
            height: 58px;
          }
        }
      }
      .bottom {
        width: 80%;
        display: flex;
        margin-top: 20px;
        .left {
          width: 50%;
          height: 400px;
          .wrap {
            position: relative;
           .img-egg {
              position: absolute;
              left: 40%;
              top: 60px;
              width: calc(277px * 0.6);
              height: calc(344px * 0.6);
              z-index: 99;
              animation: eggMove 2s infinite alternate;
              -webkit-animation: eggMove 2s infinite alternate;
            }
            .img-eggBottomStone {
              position: absolute;
              left: 12%;
              top: 10px;
              width: 394px;
              height: 351px;
            }
            .img-eggBottom {
              position: absolute;
              left: 40%;
              top: 380px;
              width: 180px;
              height: 44px;
            }
          }
        }
        .right {
          width: 50%;
          height: 100%;
         
          .wrap {
            width: 50%;
            height: 400px;
            padding-left: 40px;
            .wrap-top {
              margin-top: 80px;
              .item {
                width: 312px;
                font-size: 26px;
                font-family: Gotham;
                font-weight: bold;
                color: #794126;
                line-height: 40px;
                margin-bottom: 30px;
              }
            }
            .wrap-bottom {
              margin-top: 50px;
              img {
                width: 196px;
                height: 85px;
                cursor: pointer;
              }
            }
          }
        }
      }
    }
  }

  .close {
    cursor: pointer;
    position: absolute;
    right: -20px;
    top: 10px;
    img {
      width: 77px;
      height: 77px;
    }
  }
  @keyframes eggMove {
    from {
      margin-top: -60px;
    }
    to {
      margin-top: -20px;
    }
  }
  @-webkit-keyframes eggMove {
    from {
      margin-top: -60px;
    }
    to {
      margin-top: -20px;
    }
  }
}
</style>