<template>
  <div class="top-title-main">
    <div class="top-title-main-wrap">
      <div class="item">
        <div class="item-top">Pool Value</div>
        <div class="item-bottom">
          <div class="bottom-unit">$</div>
          <div class="bottom-value">1,235,016,713</div>
        </div>
      </div>

      <div class="item">
        <div class="item-top">Pool Value</div>
        <div class="item-bottom">
          <div class="bottom-unit">$</div>
          <div class="bottom-value">1,235,016,713</div>
        </div>
      </div>

      <div class="item">
        <div class="item-top">Pool Value</div>
        <div class="item-bottom">
          <div class="bottom-unit">$</div>
          <div class="bottom-value">1,235,016,713</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, onMounted, toRefs } from "vue";
import { useRouter } from "vue-router";

import common from "@/utils/common";

export default {
  name: "topTtitle",
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
.top-title-main {
  height: 144px;
  background: #1a1716;
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  margin-top: 72px;

  .top-title-main-wrap {
    display: flex;
    justify-content: space-around;
    padding: 45px 32px;
     .item:last-child{
       border-right:none;
     }
      .item:first-child{
       border-left:none;
     }
    .item {
      padding-right: 44px;
      padding-left: 42px;
      border-right: 1px solid rgba(255, 255, 255, 0.12);
      .item-top {
        font-size: 14px;
        font-family: GothamRounded-Book, GothamRounded;
        font-weight: normal;
        color: rgba(255, 255, 255, 0.48);
      }
      .item-bottom {
        display: flex;
        align-items: flex-end;
        margin-top: 4px;
        .bottom-unit {
          height: 21px;
          font-size: 14px;
          font-family: GothamRounded-Book, GothamRounded;
          font-weight: normal;
          color: #ffffff;
          line-height: 21px;
        }
        .bottom-value {
          height: 30px;
          font-size: 28px;
          font-family: GothamRounded-Medium, GothamRounded;
          font-weight: 500;
          color: #ffffff;
          line-height: 30px;
        }
      }
    }
  }
}
</style>

