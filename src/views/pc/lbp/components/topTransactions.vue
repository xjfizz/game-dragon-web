<template>
  <div class="transactions-pool-main">
    <div class="transactions-title">Pool transactions</div>

    <div class="menu-content">
      <div
        class="menu-item"
        :class="selectItem == 1 ? 'isSelected' : ''"
        @click="selectMenuItem(1)"
      >
        <div class="top">All transactions</div>
        <div class="bottom"></div>
      </div>
      <div
        class="menu-item"
        :class="selectItem == 2 ? 'isSelected' : ''"
        @click="selectMenuItem(2)"
      >
        <div class="top">My transactions</div>
        <div class="bottom"></div>
      </div>
    </div>
    <div v-if="selectItem == 1" class="transactions-content">
      <div class="transactions-item-title">
        <div class="transactions-token">Action</div>
        <div class="transactions-weight">Details</div>
        <div class="transactions-balance">Value</div>
        <div class="transactions-value">Time</div>
      </div>
      <div class="transactions-item" v-for="(item, index) in 8" :key="index">
        <div class="transactions-token">
          <div v-if="index % 2 == 0" class="token-img-down">-</div>
          <div v-else class="token-img-up">+</div>
          <div v-if="index % 2 == 0" class="token-value">Withdraw</div>
          <div v-else class="token-value">Invest</div>
        </div>
        <div class="transactions-weight">
          <div class="details-left">
            <div class="left-img">
              <img src="@/assets/imgs/lbp/DMS.png" alt="" />
            </div>
            <div class="left-value">259.832</div>
          </div>
          <div class="details-right">
            <div class="right-img">
              <img src="@/assets/imgs/lbp/USDT.png" alt="" />
            </div>
            <div class="right-value">259.832</div>
          </div>
        </div>
        <div class="transactions-balance">$4.47k</div>
        <div class="transactions-value">about 12 hours ago</div>
      </div>

      <div class="transactions-item-bottom">
        <div class="bottom-text">Load more</div>
        <div class="bottom-img">
          <img src="@/assets/imgs/lbp/down.png" alt="" />
        </div>
      </div>
    </div>

     <div v-if="selectItem == 2" class="transactions-content">
      <div class="transactions-item-title">
        <div class="transactions-token">1Action</div>
        <div class="transactions-weight">Details</div>
        <div class="transactions-balance">Value</div>
        <div class="transactions-value">Time</div>
      </div>
      <div class="transactions-item" v-for="(item, index) in 8" :key="index">
        <div class="transactions-token">
          <div v-if="index % 2 == 0" class="token-img-down">-</div>
          <div v-else class="token-img-up">+</div>
          <div v-if="index % 2 == 0" class="token-value">Withdraw</div>
          <div v-else class="token-value">Invest</div>
        </div>
        <div class="transactions-weight">
          <div class="details-left">
            <div class="left-img">
              <img src="@/assets/imgs/lbp/DMS.png" alt="" />
            </div>
            <div class="left-value">259.832</div>
          </div>
          <div class="details-right">
            <div class="right-img">
              <img src="@/assets/imgs/lbp/USDT.png" alt="" />
            </div>
            <div class="right-value">259.832</div>
          </div>
        </div>
        <div class="transactions-balance">$4.47k</div>
        <div class="transactions-value">about 12 hours ago</div>
      </div>

      <div class="transactions-item-bottom">
        <div class="bottom-text">Load more</div>
        <div class="bottom-img">
          <img src="@/assets/imgs/lbp/down.png" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, onMounted, toRefs } from "vue";
import { useRouter } from "vue-router";

import common from "@/utils/common";
import topTransactionsHandle from "../use/topTransactions";

export default {
  name: "transactionsPoolMain",
  components: {},
  setup() {
    const router = useRouter();
    const state = reactive({});
    const { topTransactionsState, selectMenuItem } = topTransactionsHandle();
    onMounted(() => {
      common.goTopScroll();
    });

    return {
      ...toRefs(state),
      ...toRefs(topTransactionsState),
      selectMenuItem,
    };
  },
};
</script>

<style lang="less" scoped >
.transactions-pool-main {
  //   height: 144px;
  //   background: #1a1716;
  //   border-radius: 8px;
  //   border: 1px solid rgba(255, 255, 255, 0.12);
  //   margin-top: 72px;

  .transactions-title {
    font-size: 20px;
    font-family: GothamRounded-Medium, GothamRounded;
    font-weight: 500;
    color: #ffffff;
  }
  .menu-content {
    margin-top: 16px;
    display: flex;
    .menu-item {
      min-width: 125px;
      margin-right: 32px;
      cursor: pointer;
      .top {
        font-size: 16px;
        font-family: GothamRounded-Medium, GothamRounded;
        font-weight: 500;
        color: rgba(255, 255, 255, 0.48); // #ffc763;
      }
      .bottom {
        margin-top: 8px;
        height: 2px;
        // background: rgba(255, 255, 255, 1); // #ffc763;
      }
    }

    .menu-item:hover {
      min-width: 125px;
      margin-right: 32px;
      cursor: pointer;
      opacity: 0.55;
    }

    .isSelected {
      .top {
        color: #ffc763;
      }
      .bottom {
        background: #ffc763;
      }
    }
  }
  .transactions-content {
    margin-top: 16px;
    min-height: 163px;
    background: #1a1716;
    border-radius: 8px;
    border: 1px solid rgba(255, 255, 255, 0.12);
    .transactions-item-title {
      display: flex;
      align-items: center;
      padding: 24px 32px;
      font-size: 16px;
      font-family: GothamRounded-Book, GothamRounded;
      font-weight: normal;
      color: rgba(255, 255, 255, 0.48);
      border-bottom: 1px solid rgba(255, 255, 255, 0.08);
      .transactions-token {
        flex: 3;
      }
      .transactions-weight {
        flex: 7;
      }
      .transactions-balance {
        flex: 3;
      }
      .transactions-value {
        flex: 5;
      }
    }

    .transactions-item:last-child {
      border-bottom: none;
    }
    .transactions-item {
      display: flex;
      align-items: center;
      padding: 24px 32px;
      font-size: 16px;
      font-family: GothamRounded-Book, GothamRounded;
      font-weight: normal;
      color: #ffffff;
      border-bottom: 1px solid rgba(255, 255, 255, 0.08);
      .transactions-token {
        flex: 3;
        display: flex;
        align-items: center;
        .token-img-down {
          font-size: 15px;
          font-family: GothamRounded-Medium, GothamRounded;
          font-weight: 500;
          color: #ff5151;
        }
        .token-img-up {
          font-size: 15px;
          font-family: GothamRounded-Medium, GothamRounded;
          font-weight: 500;
          color: #53b372;
        }
        .token-value {
          margin-left: 8px;
        }
      }
      .transactions-weight {
        flex: 7;
        display: flex;
        align-items: center;
        .details-left {
          display: flex;
          align-items: center;
          .left-img {
            img {
              width: 24px;
              height: 24px;
            }
          }
          .left-value {
            margin-left: 4px;
          }
        }
        .details-right {
          margin-left: 32px;
          display: flex;
          align-items: center;
          .right-img {
            img {
              width: 24px;
              height: 24px;
            }
          }
          .right-value {
            margin-left: 4px;
          }
        }
      }
      .transactions-balance {
        flex: 3;
      }
      .transactions-value {
        flex: 5;
      }
    }
    .transactions-item-bottom {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 18px 32px;
      font-size: 16px;
      font-family: GothamRounded-Book, GothamRounded;
      font-weight: normal;
      color: rgba(255, 255, 255, 0.48);
      border-bottom: 1px solid rgba(255, 255, 255, 0.08);
      .bottom-text {
      }
      .bottom-img {
        margin-left: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        img {
          width: 24px;
          height: 24px;
        }
      }
    }
  }
}
</style>

