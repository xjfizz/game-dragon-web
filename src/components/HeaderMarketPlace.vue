
<template>
  <div class="head">
    <div class="head-wrap">
      <div class="icon" @click="goPath('/', 3)"></div>
      <div class="menu-wrap">
        <div
          :class="
            selectItem == 3
              ? 'menu-item' + selectItem + ' menu-item-hover' + selectItem
              : 'menu-item' + selectItem
          "
          @click="goPath('/myMainland/myDragon', 3)"
        >
          <span>My Mainland</span>
        </div>
        <div
          :class="
            selectItem == 1
              ? 'menu-item' + selectItem + ' menu-item-hover' + selectItem
              : 'menu-item' + selectItem
          "
          @click="goPath('/marketPlace', 1)"
        >
          <span>Marketplace</span>
        </div>

        <div
          :class="
            selectItem == 4
              ? 'menu-item' + selectItem + ' menu-item-hover' + selectItem
              : 'menu-item' + selectItem
          "
          @click="goPath('/lbp', 4)"
        >
          <span>LBP</span>
        </div>
        <div class="user-wrap">
          <div class="user-message" v-if="loginState">
            <div class="user-balance" v-if="userWalletBanlance">
              BNB:
              {{
                Number(userWalletBanlance).toFixed(4) > 0
                  ? Number(userWalletBanlance).toFixed(4)
                  : 0
              }}
            </div>
            <div class="user-address" v-if="userWalletAddress">
              {{
                userWalletAddress.substring(0, 6) +
                  "****" +
                  userWalletAddress.substring(
                    userWalletAddress.length - 6,
                    userWalletAddress.length
                  ) || 0
              }}
            </div>
            <!-- <div class="user-address" v-if="userWalletAddress">{{ userWalletAddress || "" }}</div> -->
          </div>
          <div
            v-if="!loginState"
            class="login-btn"
            @click="goPath('/login', 2)"
          >
            <span>Login</span>
          </div>
          <div v-else class="login-btn" @click="logout('/logout', 2)">
            <span>Logout</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs, onMounted, computed, watch } from "vue";
import { ElMessageBox, ElMessage } from "element-plus";
import { useRouter } from "vue-router";

import { useStore } from "vuex";

export default {
  props: {
    classHeader: {
      type: Object,
      default: () => {},
    },
    headIndex: {
      type: String,
      default: "",
    },
  },
  setup(props, context) {
    console.log("==", props.classHeader, context);
    const store = useStore();
    const router = useRouter();
    const state = reactive({
      classHeader: props.classHeader,
      name: "",
      selectItem: 1,
    });
    onMounted(() => {
      console.log("1111", state.classHeader, state.name);
      if (props.headIndex) {
        state.selectItem = props.headIndex;
      }
    });
    let loginState = computed(() => store.state.login.loginState); // 钱包连接标识
    let userWalletAddress = computed(() => store.state.login.userWalletAddress); // 钱包连接标识
    let userWalletBanlance = computed(
      () => store.state.login.userWalletBanlance
    ); // 钱包连接标识
    const count = computed(() => {
      return store.state.cartCount;
    });

    const goPath = (e, type) => {
      if (type == 1) {
        console.log("e", e);
        state.selectItem = type;
        router.push(e);
      } else if (type == 3) {
        state.selectItem = type;
        router.push(e);
      } else if (type == 4) {
        state.selectItem = type;
        router.push(e);
      } else if (type == 2) {
        // marketPlace
        console.log(window);
        if (window.history.state.current == e) {
          context.emit("headHandle");
        } else {
          state.selectItem = type;
          router.push(e);
        }
      }
    };

    const logout = () => {
      ElMessageBox.confirm("Are you sure you want to log out?", "Warning", {
        confirmButtonText: "OK",
        cancelButtonText: "Cancel",
        type: "warning",
      })
        .then(() => {
          sessionStorage.clear();
          store.commit("login/SET_LOGIN");
          ElMessage({
            type: "success",
            message: "Logout successful!",
          });
        })
        .catch(() => {
          ElMessage({
            type: "info",
            message: "Logout canceled!",
          });
        });
    };

    return {
      ...toRefs(state),
      count,
      goPath,
      loginState,
      userWalletAddress,
      userWalletBanlance,
      logout,
    };
  },
};
</script>

<style lang="less" scoped >
.head {
  width: 100%;
  height: 80px;
  z-index: -1;
  background: #050303;

  .head-wrap {
    display: flex;
    // justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100%;
    padding: 5px 45px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;

    .icon {
      width: 151px;
      height: 72px;
      transform: scale(0.9);
      background-repeat: no-repeat;
      background-size: contain;
      background-position: 0;
      background-image: url("../assets/imgs/dragon-icon4.png");
      cursor: pointer;
    }
    .menu-wrap {
      margin-left: 31px;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      font-size: 16px;
      font-weight: 500;
      justify-content: flex-start;
      width: 100%;
      .user-wrap {
        margin-left: auto;
        display: flex;
        align-items: center;
        .user-message {
          margin-right: 30px;
          font-size: 14px;
          font-family: GothamRounded-Medium, GothamRounded;
          color: #ffffff;
          opacity: 0.68;
          width: 200px;
          text-align: center;
          .user-balance {
          }
          .user-address {
            margin-top: 8px;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            /*! autoprefixer: off */
            -webkit-box-orient: vertical;
            /* autoprefixer: on */
            -webkit-line-clamp: 1;
            word-break: break-all; /*追加这一行代码*/
          }
        }
        .login-btn {
          width: 148px;
          height: 50px;
          background: #ffc763;
          border-radius: 25px;
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
          span {
            font-size: 16px;
            font-family: GothamRounded-Medium, GothamRounded;
            font-weight: 500;
            color: #2e0b00;
          }
        }
        .login-btn:hover {
          opacity: 0.8;
        }
      }

      .menu-item1 {
        position: relative;
        cursor: pointer;
        white-space: nowrap;
        margin-right: 47px;
        span {
          font-size: 16px;
          font-family: GothamRounded-Medium, GothamRounded;
          color: #ffffff;
          opacity: 0.68;
        }
      }
      .menu-item-hover1 {
        span {
          font-size: 16px;
          font-family: GothamRounded-Medium, GothamRounded;
          // font-weight: bold;
          color: #ffffff;
          opacity: 1;
        }
      }
      .menu-item1:hover {
        span {
          font-size: 16px;
          font-family: GothamRounded-Medium, GothamRounded;
          // font-weight: bold;
          color: #ffffff;
          opacity: 1;
        }
      }

      .menu-item2 {
        position: relative;
        cursor: pointer;
        white-space: nowrap;
        margin-right: 47px;
        span {
          font-size: 16px;
          font-family: GothamRounded-Medium, GothamRounded;
          color: #ffffff;
          opacity: 0.68;
        }
      }
      .menu-item-hover2 {
        span {
          font-size: 16px;
          font-family: GothamRounded-Bold, GothamRounded;
          font-weight: bold;
          color: #ffffff;
          opacity: 1;
        }
      }
      .menu-item2:hover {
        span {
          font-size: 16px;
          font-family: GothamRounded-Medium, GothamRounded;
          // font-weight: bold;
          color: #ffffff;
          opacity: 1;
        }
      }

      .menu-item3 {
        position: relative;
        cursor: pointer;
        white-space: nowrap;
        margin-right: 47px;
        span {
          font-size: 16px;
          font-family: GothamRounded-Medium, GothamRounded;
          color: #ffffff;
          opacity: 0.68;
        }
      }
      .menu-item-hover3 {
        span {
          font-size: 16px;
          font-family: GothamRounded-Bold, GothamRounded;
          font-weight: bold;
          color: #ffffff;
          opacity: 1;
        }
      }
      .menu-item3:hover {
        span {
          font-size: 16px;
          font-family: GothamRounded-Medium, GothamRounded;
          // font-weight: bold;
          color: #ffffff;
          opacity: 1;
        }
      }

      .menu-item4 {
        position: relative;
        cursor: pointer;
        white-space: nowrap;
        margin-right: 47px;
        span {
          font-size: 16px;
          font-family: GothamRounded-Medium, GothamRounded;
          color: #ffffff;
          opacity: 0.68;
        }
      }
      .menu-item-hover4 {
        span {
          font-size: 16px;
          font-family: GothamRounded-Bold, GothamRounded;
          font-weight: bold;
          color: #ffffff;
          opacity: 1;
        }
      }
      .menu-item4:hover {
        span {
          font-size: 16px;
          font-family: GothamRounded-Medium, GothamRounded;
          // font-weight: bold;
          color: #ffffff;
          opacity: 1;
        }
      }

      .menu-item5 {
        position: relative;
        cursor: pointer;
        white-space: nowrap;
        margin-right: 47px;
        span {
          font-size: 16px;
          font-family: GothamRounded-Medium, GothamRounded;
          color: #2e0b00;
          opacity: 0.68;
        }
      }
      .menu-item-hover5 {
        span {
          font-size: 16px;
          font-family: GothamRounded-Bold, GothamRounded;
          font-weight: bold;
          color: #2e0b00;
          opacity: 1;
        }
      }
      .menu-item5:hover {
        span {
          font-size: 16px;
          font-family: GothamRounded-Medium, GothamRounded;
          // font-weight: bold;
          color: #2e0b00;
          opacity: 1;
        }
      }

      .menu-item6 {
        position: relative;
        cursor: pointer;
        white-space: nowrap;
        margin-right: 47px;
        span {
          font-size: 16px;
          font-family: GothamRounded-Medium, GothamRounded;
          color: #2e0b00;
          opacity: 0.68;
        }
      }
      .menu-item-hover6 {
        span {
          font-size: 16px;
          font-family: GothamRounded-Bold, GothamRounded;
          font-weight: bold;
          color: #2e0b00;
          opacity: 1;
        }
      }
      .menu-item6:hover {
        span {
          font-size: 16px;
          font-family: GothamRounded-Medium, GothamRounded;
          // font-weight: bold;
          color: #2e0b00;
          opacity: 1;
        }
      }
    }
    .color {
      display: flex;
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      height: 2px;
      .color-item {
        flex: 1;
        height: 2px;
      }
    }
  }
}
</style>
