
<template>
  <div class="select">
    <div
      class="select-item"
      @click="handleSelect"
      @mouseleave="handleSelectLeave"
    >
      <div class="select-item-value">
        <div class="select-item-text">
          {{ selectedItem.name || selectList[0].name }}
        </div>
        <div class="select-item-img">
          <img src="@/assets/imgs/marketplace/right/up.png" />
        </div>
      </div>
     <div class="select-list" v-if="selectListShowValue">
        <div
          class="select-list-item"
          v-for="(item, index) in selectList"
          :key="index"
          @click.stop="selectItem(item)"
        >
          <div class="select-list-item-text">{{ item.name }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs, onMounted, nextTick } from "vue";

export default {
  props: ["selectListShow", "selectItem", "selectList"],
  setup(props, context) {
    console.log("props-----", props.selectListShow);
    const state = reactive({
      selectListShowValue: false, // props.selectListShow,
      selectedItem: props.selectItem,
      selectList: props.selectList,
    });
    const handleSelect = () => {
      state.selectListShowValue = true;
    };
    const handleSelectLeave = () => {
      state.selectListShowValue = false;
    };
    const selectItem = (item) => {
      state.selectListShowValue = false;
        state.selectedItem = item;
        context.emit("selectItem", item);
    };

    return {
      ...toRefs(state),
      handleSelect,
      handleSelectLeave,
      selectItem,
    };
  },
};
</script>

<style lang="less" scoped >
.select {
  z-index: 99;
  display: flex;
  .select-item {
    // margin-right: 85px;
    min-width: 160px;
    height: 40px;
    border-radius: 4px;
    border: 1px solid #514d4a;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    .select-item-value {
      display: flex;
      // justify-content: space-between;
      align-items: center;
      // padding-left: 20px;
      position: relative;
      width: 100%;
      .select-item-text {
        font-size: 14px;
        font-family: GothamRounded-Book, GothamRounded;
        font-weight: normal;
        color: #ffffff;
        margin-left: 20px;
      }
      .select-item-img {
        position: absolute;
        right: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
    .select-list {
      position: absolute;
      top: 41px;
      min-width: 160px;
      //  height: 16px;
      background: #050303;
      border-radius: 4px;
      //  opacity: 0.86;
      .select-list-item {
        min-width: 160px;
        height: 40px;
        display: flex;
        align-items: center;
        cursor: pointer;
        .select-list-item-text {
          margin-left: 24px;
          font-size: 14px;
          font-family: GothamRounded-Book, GothamRounded;
          font-weight: normal;
          color: #ffffff;
        }
      }
      .select-list-item:hover {
        background-color: #50504e;
        font-size: 14px;
        font-family: GothamRounded-Book, GothamRounded;
        font-weight: normal;
        color: #ffffff;
      }
    }
  }
}
</style>
