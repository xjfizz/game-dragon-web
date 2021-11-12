<template>
  <div class="pool-pool-main">
    <div class="pool-title">Pool composition</div>
    <div class="pool-content">
      <div class="pool-item-title">
        <div class="pool-token">Token</div>
        <div class="pool-weight">Weight</div>
        <div class="pool-balance">Balance</div>
        <div class="pool-value">Value</div>
      </div>
      <div class="pool-item">
        <div class="pool-token">
          <div class="token-img">
            <img src="@/assets/imgs/lbp/DMS.png" alt="" />
          </div>
          <div class="token-value">DMS</div>
        </div>
        <div class="pool-weight">2.00%</div>
        <div class="pool-balance">1,536.0195</div>
        <div class="pool-value">$1,992,825</div>
      </div>
      <div class="pool-item">
        <div class="pool-token">
          <div class="token-img">
            <img src="@/assets/imgs/lbp/USDT.png" alt="" />
          </div>
          <div class="token-value">USDT</div>
        </div>
        <div class="pool-weight">8.00%</div>
        <div class="pool-balance">1,536.</div>
        <div class="pool-value">$1,992,82591122</div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, onMounted, toRefs } from "vue";
import { useRouter } from "vue-router";

import common from "@/utils/common";

export default {
  name: "poolPoolMain",
  components: {},
  setup() {
    const router = useRouter();
    const state = reactive({});

    onMounted(() => {
      common.goTopScroll();
    });

    return {
      ...toRefs(state),
    };
  },
};
</script>

<style lang="less" scoped >
.pool-pool-main {
  //   height: 144px;
  //   background: #1a1716;
  //   border-radius: 8px;
  //   border: 1px solid rgba(255, 255, 255, 0.12);
  //   margin-top: 72px;

  .pool-title {
    font-size: 20px;
    font-family: GothamRounded-Medium, GothamRounded;
    font-weight: 500;
    color: #ffffff;
  }
  .pool-content {
    margin-top: 24px;
    min-height: 163px;
    background: #1a1716;
    border-radius: 8px;
    border: 1px solid rgba(255, 255, 255, 0.12);
    .pool-item-title {
      display: flex;
      align-items: center;
      padding: 24px 32px;
      font-size: 16px;
      font-family: GothamRounded-Book, GothamRounded;
      font-weight: normal;
      color: rgba(255, 255, 255, 0.48);
      border-bottom: 1px solid rgba(255, 255, 255, 0.08);
      .pool-token {
        flex: 6;
      }
      .pool-weight {
        flex: 3;
      }
      .pool-balance {
        flex: 3;
      }
      .pool-value {
        flex: 3;
      }
    }

    .pool-item:last-child {
      border-bottom: none;
    }
    .pool-item {
      display: flex;
      align-items: center;
      padding: 24px 32px;
      font-size: 16px;
      font-family: GothamRounded-Book, GothamRounded;
      font-weight: normal;
      color: #ffffff;
      border-bottom: 1px solid rgba(255, 255, 255, 0.08);
      .pool-token {
        flex: 6;
        display: flex;
        align-items: center;
        .token-img {
          img {
            width: 24px;
            height: 24px;
          }
        }
        .token-value {
          margin-left: 4px;
        }
      }
      .pool-weight {
        flex: 3;
      }
      .pool-balance {
        flex: 3;
      }
      .pool-value {
        flex: 3;
      }
    }
  }
}
</style>

