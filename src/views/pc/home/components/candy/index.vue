<template>
  <div class="candy-wrap" @click="goSubmit">
    <!-- <div class="wrap-content">Candy</div> -->
    <div class="wrap-content">
      Announcement
      <div class="number-text">Payment Portal Open</div>
      <!-- <div class="number">{{ applicatForm.total }}</div> -->
    </div>
  </div>
</template>

<script>
import { onMounted, toRefs } from "vue";
import homeHandle from "../../use/home.js";
export default {
  setup(props, context) {
    const goSubmit = () => {
      context.emit("goSubmit");
    };
    onMounted(() => {
      // getApplicationTotal();
    });
    const { state, getApplicationTotal } = homeHandle();
    return {
      ...toRefs(state),
      goSubmit,
    };
  },
};
</script>

<style lang="less" scoped>
.candy-wrap {
  position: fixed;
  bottom: 0px;
  left: 38px;
  width: 192px;
  height: 202px;
  z-index: 999;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url("../../../../../assets/imgs/openBox/candy/bc.png");
  display: flex;
  justify-content: center;
  cursor: pointer;
  .wrap-content {
    margin-top: 48px;
    // margin-top: 38px;
    // font-size: 28px;
    font-size: 18px;
    font-family: WendyOne-Regular, WendyOne;
    font-weight: 400;
    color: #ffffff;
    line-height: 25px;
    text-align: center;
    .number-text {
      font-size: 14px;
    }
    .number {
      font-size: 14px;
    }
  }
}
</style>