
<template>
  <div class="head">
    <div class="head-top">
      <span>DragonPlay</span>
    </div>
    <div class="head-mid">
      <div class="menu-list">
        <div
          class="menu-list-item"
          @click="selectPlayItem(1)"
          :class="dragonPlayType == 1 ? 'menu-list-item-selected' : ''"
        >
          <span>Genesis  Egg <br />(Pre-sale)</span>
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
          <span>Bone Synthesis</span>
        </div>
      </div>
      <createEgg @createEgg="createEgg" v-if="dragonPlayType == 1"></createEgg>
      <characteristic v-if="dragonPlayType == 2"></characteristic>
      <blindBox  @createEgg="createEgg" v-if="dragonPlayType == 3"></blindBox>
      <synthesisForBone  @createEgg="createEgg" v-if="dragonPlayType == 4"></synthesisForBone>
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
  setup(props,context) {
    // const store = useStore();
    // const router = useRouter()
    console.log(props)
    const state = reactive({
      dragonPlayType: 1, // dragonPlay 类型
    });
    onMounted(() => {});
    const selectPlayItem = (item) => {
      console.log(item);
      state.dragonPlayType = item;
    };
      const createEgg = ()=> {
        context.emit('createEgg')
    }
    return {
      ...toRefs(state),
      selectPlayItem,
      createEgg
    };
  },
};
</script>

<style lang="less" scoped >
.head {
  text-align: center;
  .head-top {
    // margin-top: 80px;
    font-size: 48px;
    font-family: GothamRounded-Medium, GothamRounded;
    color: #ffffff;
  }
  .head-mid {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 40px;

    .menu-list {
      min-width: 792px;
      //min-height: 64px;
      min-height: 48px;
      background: rgba(255, 255, 255, 0.1);
      border-radius: 44px;
      // border: 2px solid rgba(255, 255, 255, 0.1);
      display: flex;
      justify-content: space-between;
      .menu-list-item {
        display: flex;
        align-items: center;
        justify-content: center;
        min-width: 204px;
        cursor: pointer;
        opacity: 0.68;
        // height: 64px;
        padding: 18px 18px;
        // background: linear-gradient(180deg, #4c1200 0%, #140c09 100%);
        // border-radius: 44px;
        span {
          font-size: 18px;
          font-family: GothamRounded-Medium, GothamRounded;
           color: #ffffff;
          text-shadow: 0px 1px 0px rgba(0, 0, 0, 0.12);
        }
      }
      .menu-list-item:hover {
        width: 204px;
        min-height: 48px;
        // background: linear-gradient(180deg, #4c1200 0%, #140c09 100%);
        border-radius: 44px;
        opacity: 1;
       
        span {
          font-size: 18px;
          font-family: GothamRounded-Bold, GothamRounded;
          font-weight: bold;
          color: #ffffff;
          line-height: 22px;
          text-shadow: 0px 1px 0px rgba(0, 0, 0, 0.12);
        }
      }
      .menu-list-item-selected {
        width: 204px;
        min-height: 48px;
        background: linear-gradient(180deg, #4c1200 0%, #140c09 100%);
        border-radius: 44px;
        opacity: 1;
        span {
          font-size: 18px;
          font-family: GothamRounded-Bold, GothamRounded;
          font-weight: bold;
          color: #ffffff;
          line-height: 22px;
          text-shadow: 0px 1px 0px rgba(0, 0, 0, 0.12);
        }
      }
    }
  }
}
</style>
