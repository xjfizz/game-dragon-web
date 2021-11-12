
<template>
  <div class="head">
    <div class="top">
      <img src="@/assets/imgs/dragonPlay/synthesis/bone-circle.png" />
    </div>
    <div class="mid">
      <div class="bone-head">
        <img
          class="bone-head-img"
          src="@/assets/imgs/dragonPlay/synthesis/bone-head.png"
        />
      </div>

      <div class="mid-bottom">
        <img src="@/assets/imgs/dragonPlay/synthesis/bone-bottom.png" />
      </div>
    </div>
    <div class="bottom" @click="play">
      <img src="@/assets/imgs/dragonPlay/synthesis/synthesis-create.png" />
    </div>
  </div>
</template>

<script>
import { reactive, toRefs, onMounted } from "vue";

export default {
  props: {
    classHeader: {
      type: Object,
      default: () => {},
    },
  },
  setup(props,context) {
    const state = reactive({});
    onMounted(() => {});
    const play = ()=> {
        context.emit('createEgg')       
    }
    return {
      ...toRefs(state),
      play
    };
  },
};
</script>

<style lang="less" scoped >
.head {
  .top {
      margin-top: 48px;
    img {
      width: 667px;
      height: 313px;
    }
  }
  .mid {
    .bone-head {
      position: relative;
      width: 100%;
      height: 366px;
      margin-top: -220px;
       display: flex;
       justify-content: center;
      .bone-head-img {
        width: 334px;
        height: 366px;
        animation: ghostUpdown 2s infinite alternate;
        -webkit-animation: ghostUpdown 2s infinite alternate;
      }
    }

    .mid-bottom {
      margin-top: -202px;
      display: flex;
      align-items: flex-end;
      justify-content: center;
      width: 775px;
      height: 330px;
      background-repeat: no-repeat;
      background-size: cover;
      background-image: url("../../../../../../assets/imgs/dragonPlay/synthesis/bone-light.png");
      img {
        width: 585px;
        height: 144px;
      }
    }
  }
  .bottom {
    margin-top: -35px;
    img {
    cursor: pointer;
      width: 200px;
      height: 80px;
    }
  }
}

@keyframes ghostUpdown {
  from {
    margin-top: 50px;
  }
  to {
    margin-top: 30px;
  }
}
@-webkit-keyframes ghostUpdown {
  from {
    margin-top: 50px;
  }
  to {
    margin-top: 30px;
  }
}
</style>
