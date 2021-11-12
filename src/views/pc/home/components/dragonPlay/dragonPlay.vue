
<template>
  <div class="head">
    <div class="head-top">
      <span>How to play</span>
    </div>
    <div class="head-mid">
      <div class="menu-list">
        <div
          class="menu-list-item"
          @click="selectPlayItem(1)"
          :class="dragonPlayType == 1 ? 'menu-list-item-selected' : ''"
        >
          <span>Genesis Egg</span>
        </div>
        <div
          class="menu-list-item"
          @click="selectPlayItem(2)"
          :class="dragonPlayType == 2 ? 'menu-list-item-selected' : ''"
        >
          <span>Characteristic</span>
        </div>
        <div
          class="menu-list-item"
          @click="selectPlayItem(3)"
          :class="dragonPlayType == 3 ? 'menu-list-item-selected' : ''"
        >
          <span>Blind Box</span>
        </div>
        <div
          class="menu-list-item"
          @click="selectPlayItem(4)"
          :class="dragonPlayType == 4 ? 'menu-list-item-selected' : ''"
        >
          <span>Skull Synthesis</span>
        </div>
      </div>
      <createEgg @createEgg="createEgg" v-show="dragonPlayType == 1"></createEgg>
      <characteristic v-show="dragonPlayType == 2"></characteristic>
      <blindBox @createEgg="createEgg" v-show="dragonPlayType == 3"></blindBox>
      <synthesisForBone
        @createEgg="createEgg"
        v-show="dragonPlayType == 4"
      ></synthesisForBone>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs, onMounted } from "vue";
// import { useRouter } from 'vue-router'

// import { useStore } from "vuex";
import createEgg from "./components/createEgg.vue";
import characteristic from "./components/characteristic.vue";
import blindBox from "./components/blindBox.vue";
import synthesisForBone from "./components/synthesisForBone.vue";

export default {
  props: {
    classHeader: {
      type: Object,
      default: () => {},
    },
  },
  components: {
    createEgg,
    characteristic,
    blindBox,
    synthesisForBone,
  },
  setup(props, context) {
    // const store = useStore();
    // const router = useRouter()
    console.log(props);
    const state = reactive({
      dragonPlayType: 1, // dragonPlay 类型
    });
    onMounted(() => {});
    const selectPlayItem = (item) => {
      console.log(item);
      state.dragonPlayType = item;
    };
    const createEgg = () => {
      context.emit("createEgg");
    };
    return {
      ...toRefs(state),
      selectPlayItem,
      createEgg,
    };
  },
};
</script>

<style lang="less" scoped >
.head {
  text-align: center;
  .head-top {
    margin-top: 64px;
    font-size: 48px;
    font-family: WendyOne-Regular, WendyOne;
    font-weight: 400;
    color: #ffffff;
    line-height: 50px;
    letter-spacing: 1px;
  }
  .head-mid {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 32px;

    .menu-list {
      min-width: 758px;
      min-height: 71px;
      background-repeat: no-repeat;
      background-size: cover;
      background-image: url("../../../../../assets/imgs/dragonPlay/createEggs/select-list-bc.png");
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-left: 13px;
      padding-right: 13px;
      .menu-list-item {
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        width: 176px;
        height: 48px;
        border-radius: 6px;

        span {
          font-size: 16px;
          font-family: GothamRounded-Medium, GothamRounded;
          font-weight: 500;
          color: #ffffff;
          line-height: 19px;
          text-shadow: 0px 2px 0px rgba(76, 18, 0, 0.48);
        }
      }
      .menu-list-item:hover {
        background: linear-gradient(
          to right,
          rgba(76, 17, 0, 0.3) 0%,
          rgba(76, 17, 0, 0.08) 50%,
          rgba(76, 17, 0, 0.3) 100%
        );
      }
      .menu-list-item-selected {
        // background: linear-gradient(to right, rgba(76, 17, 0, 0.08) 0%, #4C1100 100%);
        background: linear-gradient(
          to right,
          rgba(76, 17, 0, 0.4) 0%,
          rgba(76, 17, 0, 0.08) 50%,
          rgba(76, 17, 0, 0.4) 100%
        );
      }
    }
  }
}
</style>
