

<template>
  <playGame v-if="playGameShow" @closeBox="closePlayGameBox"></playGame>
  <div class="main">
    <div class="main-wrap">
      <div class="top">
        <Header :headIndex="7" @createEgg="createEgg"></Header>
        <div class="top-content">
          <div class="title">Our visions</div>
          <div class="top-des">
            We aspire to create a totally decentralized and independent society
            based on the digital world. The DAO community will be able to
            validate all transactions and activities without the use of a
            third-party platform because Dragon Mainland is built on open source
            code
          </div>
          <div class="top-dragon">
            <img src="../../../assets/imgs/aboutUs/top-dragon.png" alt="" />
          </div>
        </div>
      </div>
      <div class="mid">
        <div class="mid-top-bc"></div>
        <div class="title">Team & Advisor</div>
        <div class="mid-content">
          <div class="list">
            <div class="item" v-for="(item, index) in peopleList" :key="index">
              <div class="item-top">
                <img :src="item.peopleImg" />
              </div>
              <div class="bottom">
                <div class="bottom-name">
                  {{ item.name }}
                </div>
                <div class="bottom-position">
                  {{ item.position }}
                </div>
                <div class="bottom-des">
                  {{ item.des }}
                </div>
              </div>
            </div>
          </div>
          <div class="mid-line">
            <div class="line"></div>
            <div class="line-text">
              <span>Advisor</span>
            </div>
            <div class="line"></div>
          </div>
          <div class="list par-top48">
            <div class="item" v-for="(item, index) in peopleList2" :key="index">
              <div class="item-top">
                <img :src="item.peopleImg" />
              </div>
              <div class="bottom">
                <div class="bottom-name">
                  {{ item.name }}
                </div>
                <div class="bottom-des">
                  {{ item.des }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="main-wrap-bottom">
        <div class="title">Road Map</div>
        <div class="roadMap-content">
          <img src="../../../assets/imgs/aboutUs/road-map-img.png" alt="" />
        </div>
      </div>
      <div class="bottom-menu"><Bottom @createEgg="createEgg"></Bottom></div>
    </div>
  </div>
</template>

<script>
import { reactive, onMounted, toRefs } from "vue";
import { useRouter } from "vue-router";
import Header from "@/components/Header";
import Bottom from "@/components/Bottom";
import common from "@/utils/common";
import playGame from "@/components/modalBox/playGame/index.vue";

export default {
  name: "aboutUs",
  components: {
    Header,
    Bottom,
    playGame
  },
  setup() {
    const router = useRouter();
    const state = reactive({
      playGameShow: false,
      peopleList: [
        {
          peopleImg: require("@/assets/imgs/aboutUs/people/people1.png"),
          name: "Jason Dekker",
          position: "CEO",
          des: "Founder and CEO of GoChain",
        },
        {
          peopleImg: require("@/assets/imgs/aboutUs/people/people2.png"),
          name: "Hans Peng",
          position: "CTO",
          des: "Expert of theblockchain-related technologies",
        },
        // {
        //   peopleImg: require("@/assets/imgs/aboutUs/people/people3.png"),
        //   name: "ADAM T. NORRIS",
        //   position: "COO",
        //   des: "Original miner of bitcoin.cz and the former implementation consultant at SAP",
        // },
        {
          peopleImg: require("@/assets/imgs/aboutUs/people/people4.png"),
          name: "Lisa Wong",
          position: "CFO",
          des: "SVP of Investor Relations at Urban Catalyst Fund",
        },
        {
          peopleImg: require("@/assets/imgs/aboutUs/people/people5.png"),
          name: "Sharjeel Butt",
          position: "Chief Design Designer",
          des: "Responsible for all the graphics design of the Dragon Mainland",
        },
        {
          peopleImg: require("@/assets/imgs/aboutUs/people/people6.png"),
          name: "Chris Lee",
          position: "Original Designers",
          des: "the director of game department",
        },
        {
          peopleImg: require("@/assets/imgs/aboutUs/people/people7.png"),
          name: "Moustafa Abdelbasir",
          position: "Game Operations Manager",
          des: "Years of experience in game operation",
        },
        {
          peopleImg: require("@/assets/imgs/aboutUs/people/people8.png"),
          name: "Alex",
          position: "Chief Executive",
          des: "Graduate student of Peking University, has ever studied MBA at INSEAD",
        },
      ],
      peopleList2: [
        {
          peopleImg: require("@/assets/imgs/aboutUs/people/people9.png"),
          name: "Vlad Demirors",
          position: "CEO",
          des: "career at McKinsey and served as a consultant for well-known companies such as Bitcoin Citadel and CoinPrices",
        },
        {
          peopleImg: require("@/assets/imgs/aboutUs/people/people10.png"),
          name: "Brock Steiner",
          position: "CEO",
          des: "The first seed round investors of more than 100 startup companies",
        },
        {
          peopleImg: require("@/assets/imgs/aboutUs/people/people11.png"),
          name: "Eric Armstrong",
          position: "CEO",
          des: "an emerging market economic theorist who is keen on disruptive innovative technologies",
        },
        {
          peopleImg: require("@/assets/imgs/aboutUs/people/people12.png"),
          name: "Taylor Ohanian",
          position: "CEO",
          des: "Early Bitcoin investor, one of the largest investors in Ethereum crowdfunding",
        },
      ],
    });
    onMounted(() => {
      common.goTopScroll();
    });

    const goToDetail = (item) => {
      router.push({ path: `/product/${item.goodsId}` });
    };

    const tips = () => {};
    // 关闭提示弹框
    const closePlayGameBox = () => {
      state.playGameShow = false;
    };
    const createEgg = () => {
      state.playGameShow = true;
    };
    return {
      ...toRefs(state),
      goToDetail,
      tips,
      closePlayGameBox,
      createEgg,
    };
  },
};
</script>

<style lang="less" scoped >
.main {
  //  width: 100%;
  .main-wrap {
    width: 100%;
    min-height: 3731px;
    background: linear-gradient(
      180deg,
      #1f1c1f 0%,
      #2d1f1c 5%,
      #221d1d 18%,
      #1f1c1f 49%,
      #291e16 75%,
      #120804 90%,
      #100602 100%
    );
    .top {
      height: 800px;
      background-repeat: no-repeat;
      background-size: cover;
      background-image: url("../../../assets/imgs/aboutUs/top-bc.png");
      display: flex;
      flex-direction: column;
      align-items: center;
      .top-content {
        width: 1200px;
        margin-top: 72px;
        display: flex;
        flex-direction: column;
        align-items: center;
        .title {
          font-size: 48px;
          font-family: WendyOne-Regular, WendyOne;
          font-weight: 400;
          color: #ffffff;
          line-height: 50px;
          letter-spacing: 1px;
        }
        .top-des {
          margin-top: 40px;
          // width: 800px;
          width: 860px;
          height: 160px;
          font-size: 24px;
          font-family: GothamRounded-Book, GothamRounded;
          font-weight: normal;
          color: #ffffff;
          line-height: 32px;
          text-align: center;
          opacity: 0.83;
        }
        .top-dragon {
          margin-top: 87px;
          img {
            width: 1063px;
            height: 290px;
          }
        }
      }
    }
    .mid {
      position: relative;
      padding-top: 100px;
      .mid-top-bc {
        width: 100%;
        height: 417px;
        background: linear-gradient(180deg, #0a0604 0%, rgba(10, 6, 4, 0) 100%);
        opacity: 0.16;
        position: absolute;
        top: 0;
        left: 0;
      }
      .title {
        font-size: 48px;
        font-family: WendyOne-Regular, WendyOne;
        font-weight: 400;
        color: #ffffff;
        line-height: 50px;
        letter-spacing: 1px;
        text-align: center;
        width: 1200px;
        margin: 0 auto;
      }
      .mid-content {
        width: 1200px;
        margin: 0 auto;
        margin-top: 80px;
        .list {
          // padding-top: 80px;
          display: flex;
          align-content: flex-start;
          flex-flow: row wrap;
          .item {
            width: 226px;
            height: 430px;
            margin-right: 74px;
            margin-bottom: 50px;
            .item-top {
              img {
                // width: 276px;
                // height: 276px;
                width: 226px;
                height: 226px;
                border-radius: 50%;
              }
            }
            .bottom {
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              .bottom-name {
                width: 240px;
                text-align: center;
                margin-top: 24px;
                font-size: 24px;
                font-family: WendyOne-Regular, WendyOne;
                font-weight: 400;
                color: #ffffff;
                line-height: 26px;
                word-break:break-all;
              }
              .bottom-position {
                text-align: center;
                margin-top: 8px;
                font-size: 16px;
                font-family: GothamRounded-Medium, GothamRounded;
                font-weight: 500;
                color: #ffffff;
                line-height: 19px;
              }
              .bottom-des {
                width: 240px;
                text-align: center;
                margin-top: 16px;
                font-size: 14px;
                font-family: GothamRounded-Book, GothamRounded;
                font-weight: normal;
                color: #ffffff;
                opacity: 0.68;
              }
            }
          }
        }
        .mid-line {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 20px;
          .line {
            width: 45%;
            height: 0.5px;
            background-color: #ffffff;
            opacity: 0.1;
          }
          .line-text {
            width: 10%;
            display: flex;
            justify-content: center;
            align-items: center;
            span {
              font-size: 16px;
              font-family: GothamRounded-Book, GothamRounded;
              font-weight: normal;
              color: #ffffff;
              line-height: 19px;
              opacity: 0.4;
            }
          }
        }
      }
    }
    .main-wrap-bottom {
      height: 960px;
      background-repeat: no-repeat;
      background-size: cover;
      background-image: url("../../../assets/imgs/aboutUs/road-map-img-bc.png");
      padding-top: 80px;
      .title {
        text-align: center;
        font-size: 48px;
        font-family: WendyOne-Regular, WendyOne;
        font-weight: 400;
        color: #ffffff;
        line-height: 50px;
        letter-spacing: 1px;
        // margin-top: 80px;
      }
      .roadMap-content {
        margin-top: 48px;
        display: flex;
        justify-content: center;
        img {
          width: 1200px;
          height: 640px;
        }
      }
    }
    .bottom-menu {
      // margin-top: 142px;
    }
  }
  .par-top48 {
    margin-top: 48px;
  }
}
</style>