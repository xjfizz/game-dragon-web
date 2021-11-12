<template>
  <div class="rule-main">
    <div class="rule-wrap">
      <div class="content">
        <div class="title">
          <div class="item">Ranking</div>
          <div class="item">Egg/Per</div>
          <div class="item">DMS/Per</div>
        </div>
        <div class="list">
          <div class="item" v-for="(item, index) in rankList" :key="index">
            <div class="item-left">{{ item.number }}</div>
            <div class="item-mid">{{ item.egg }}</div>
            <div class="item-right">{{ item.dms }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, onMounted, toRefs } from "vue";
import { useRouter } from "vue-router";

export default {
  name: "leftRank",

  setup() {
    const state = reactive({
      rankList: [
        { id: 1, number: "1", egg: 1, dms: 3000 },
        { id: 2, number: "2", egg: 1, dms: 1000 },
        { id: 3, number: "3", egg: 1, dms: 800 },
        { id: 4, number: "4-10", egg: 1, dms: 600 },
        { id: 5, number: "11-50", egg: 1, dms: 100 },
        { id: 6, number: "51-100", egg: 1, dms: 50 },
      ],
    });
    return {
      ...toRefs(state),
    };
  },
};
</script>

<style lang="less" scoped>
.rule-main {
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url("../../../../assets/imgs/activity/activity/index/rule-bc.png");
  position: relative;
  .rule-wrap {
    position: absolute;
    top: 55px;
    left: 68px;
    .content {
      width: 670px;
      height: 456px;
      .title {
        display: flex;
        height: 80px;
        align-items: center;
        .item {
          flex: 1;
          display: flex;
          justify-content: center;
          font-size: 32px;
          font-family: Wendy One;
          font-weight: 400;
          color: #fffae5;
          line-height: 27px;
          text-shadow: 0px 4px 0px rgba(131, 71, 39, 0.67);
        }
      }
      .list {
        .item {
          display: flex;
          height: 60px;
          align-items: center;
          font-size: 32px;
          font-family: GothamRounded;
          font-weight: 400;
          color: #783600;
          line-height: 27px;
          .item-left {
            flex: 1;
            display: flex;
            justify-content: center;
          }
          .item-mid {
            flex: 1;
            display: flex;
            justify-content: center;
          }
          .item-right {
            flex: 1;
            display: flex;
            justify-content: center;
          }
        }
      }
    }
  }
}
</style>