

<template>
  <div class="main">
    <div class="item-title">
      <div>{{ sliderTitle }}</div>
      <div class="reset-btn">Reset</div>
    </div>
    <div class="item-wrap">
      <div class="item-slider">
        <el-slider
          class="slider"
          :show-tooltip="false"
          v-model="sliderValueSet.list"
          range
          @change="onChange"
        ></el-slider>
      </div>
      <div class="item-slider-value">
        <div>{{ sliderValueSet.list[0] }}</div>
        <div>{{ sliderValueSet.list[1] }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, onMounted, toRefs } from "vue";

export default {
  name: "marketPlace",
  props: {
    sliderTitle: {
      type: String,
      default: "",
    },
  },

  components: {},
  setup(props) {
    console.log("props", props);
    const state = reactive({
      sliderValueSet: {
        list: [10, 40],
      },
    });
    onMounted(() => {});
    const onChange = (e) => {
      console.log(e);
    };
    return {
      ...toRefs(state),
      onChange,
    };
  },
};
</script>

<style lang="less" scoped >
.main {
  .item-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 11px;
    font-family: GothamRounded-Book, GothamRounded;
    font-weight: normal;
    color: #ffffff;
    opacity: 0.48;
    .reset-btn {
      font-size: 11px;
      font-family: GothamRounded-Book, GothamRounded;
      font-weight: normal;
      color: #ffc763;
      cursor: pointer;
    }
  }
  .item-wrap {
    margin-top: 12px;

    .item-slider {
      .slider {
        /deep/ .el-slider__runway {
          background-color: #1a1716;
          height: 5px;
        }
        /deep/ .el-slider__bar {
          background-color: #f59e64;
          height: 5px;
        }
        /deep/ .el-slider__button {
          width: 12px;
          height: 12px;
          background-color: #dddddd;
          border: 1px solid #ffffff;
        }
      }
    }
    .item-slider-value {
      display: flex;
      justify-content: space-between;
      margin-top: 2px;
      font-size: 11px;
      font-family: GothamRounded-Medium, GothamRounded;
      font-weight: 500;
      color: #ffffff;
    }
  }
}
</style>