<template>
  <div class="count-down-dragon-draw">
    <div class="draw-main">
      <img
        class="dragon"
        src="../../../../assets/imgs/activity/countDown/dragonDrawThunder.png"
        alt=""
      />
      <!-- <img
        class="time"
        src="../../../../assets/imgs/activity/countDown/time.png"
        alt=""
      /> -->
      <div class="time">
         <div class="time-top">27th Oct.pm12 utc</div>
      <div class="time-bottom">
       
        <div class="bottom-left-text">
           Quantity:1900
        </div>
        <div class="bottom-right-text">
          Price:0.3BNB
        </div>
      </div>
      </div>
     
    </div>
  </div>
</template>

<script>
import { reactive, onMounted, toRefs } from "vue";
import activityHandle from "../use/activity/activity";
export default {
  setup() {
    onMounted(() => {
      timeRest();
    });

    let { activityData, timeRest } = activityHandle();

    return {
      ...toRefs(activityData),
    };
  },
};
</script>

<style lang="less" scoped>
.count-down-dragon-draw {
  position: relative;
  width: 478px;
  height: 334px;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url("../../../../assets/imgs/activity/countDown/bc.png");
  margin: 30px auto;
  display: flex;
  justify-content: center;
  //   align-items: center;
  .draw-main {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    margin-top: 30px;

    .dragon {
      margin-top: 20px;
      width: calc(238px*1);
      height: calc(181px*1) ;
    }
    .time {
      margin-top: 20px;
      width: 307px;
      height: 50px;
      .time-top{
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 19px;
        letter-spacing: 1px;
        font-family: WendyOne-Regular;
        color: #fff6f6;
      
      }
      .time-bottom{
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 8px;
        font-size: 20px;
        letter-spacing: 1px;
        font-family: WendyOne-Regular;
        color: #892121;
        margin-top: 10px;
        .bottom-left-text{

        }
        .bottom-right-text{
          margin-left: 20px;
        }
      }
    }
  }
}
</style>