<template>
  <div class="help-main">
    <div class="help-wrap">
      <div class="item">
        <div class="icon">
          <img
            src="../../../../assets/imgs/activity/activity/help-icon.png"
            alt=""
          />
        </div>
        <div class="text">
          Quantity: {{ activityDetail.total || 0 }} eggs (Race:{{
            dragonTypeList[activityDetail.clazz] || ""
          }})
        </div>
        <!-- <div class="text">Quantity: 100 eggs (Race:{{dragonTypeList[activityDetail.clazz] || ''}})</div> -->
      </div>
      <div class="item">
        <div class="icon">
          <img
            src="../../../../assets/imgs/activity/activity/help-icon.png"
            alt=""
          />
        </div>
        <div class="text">Price: {{ activityDetail.curPrice || 0 }} BNB</div>
      </div>
      <div class="item">
        <div class="icon">
          <img
            src="../../../../assets/imgs/activity/activity/help-icon.png"
            alt=""
          />
        </div>
        <!-- <div class="text">Time: 2021.10.15 (16:00:00 UTC+4)</div> -->
        <!-- <div class="text">Time:{{Moment('2021-10-16 00:00:00').utc().format('YYYY.MM.DD (HH:mm:ss UTC+4)')}}</div> -->
        <div class="text">
          Time:{{
            Moment(activityDetail.beginTime)
              .utc(0)
              .format("MM.DD.YYYY (HH:mm:ss UTC)")
          }}
        </div>
        <!-- <div class="text">Time:{{Moment(activityDetail.beginTime).format('MM.DD.YYYY (HH:mm:ss UTC)')}}</div> -->
        <!-- <div class="text">Time:{{Moment(activityDetail.beginTime).format('MM.DD.YYYY (HH:mm:ss UTC+4)')}}</div> -->
      </div>

      <div class="item">
        <div class="icon">
          <img
            src="../../../../assets/imgs/activity/activity/help-icon.png"
            alt=""
          />
        </div>
        <div class="text">Only one dragon egg per address</div>
      </div>

      <div class="item">
        <div class="icon">
          <img
            src="../../../../assets/imgs/activity/activity/help-icon.png"
            alt=""
          />
        </div>
        <div class="text">
          If you do not pay successfully for the dragon egg within 3 minutes,
          the payment will be overtime and the transaction will fail. The dragon
          egg will automatically return to the rush pool
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, onMounted, toRefs } from "vue";
import { useRouter } from "vue-router";
import activityHandle from "../use/activity/activity";
import dragonTypeList from "../use/dragon/dragonType";
export default {
  name: "leftRank",

  setup() {
    const state = reactive({
      dragonTypeList: dragonTypeList,
    });
    onMounted(() => {
      getActivityDetail();
    });

    let { activityData, getActivityDetail, Moment } = activityHandle();
    console.log("Moment", Moment);
    console.log("Moment", Moment().format("dddd"));
    return {
      ...toRefs(state),
      ...toRefs(activityData),
      Moment,
    };
  },
};
</script>

<style lang="less" scoped>
.help-main {
  position: absolute;
  right: 130px;
  top: 30px;
  width: 487px;
  height: 461px;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url("../../../../assets/imgs/activity/activity/help-bc.png");
  display: flex;
  justify-content: center;
  align-items: center;
  .help-wrap {
    // width: 86%;
    width: 86%;
    height: 86%;
    .item {
      // margin-bottom: 34px;
     margin-bottom: 10px;
      display: flex;
      .icon {
        margin-right: 10px;
        img {
          width: 31px;
          height: 42px;
        }
      }
      .text {
       // font-size: 22px;
        font-size: 19px;
        font-family: GothamRounded;
        font-weight: 400;
        color: #ffffff;
        line-height: 30px;
        word-wrap: normal;

        word-break: break-all;
      }
    }
  }
}
</style>