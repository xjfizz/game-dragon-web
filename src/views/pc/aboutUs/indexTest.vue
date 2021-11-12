

<template>
  <div class="main">
    <div class="main-wrap">
      <Header :headIndex="7"></Header>
      <div class="top">
        <div class="top-bac">
          <div class="left">
            <div class="left-top">
              <span>Our visions</span>
            </div>
            <div class="left-bottom">
              Based on digital world,we want to build a completely decentralized
              and highly autonomous community. Dragon Mainland is composed of
              open source code, and its' DAO community will be able to validate
              all transactions and actions without the involvement of a
              third-party platform.
            </div>
          </div>
          <div class="right">
            <img src="@/assets/imgs/aboutUs/top-bac.png" />
          </div>
        </div>
      </div>
      <div class="mid-myTeam">
        <div class="container">
          <div class="title">
            <span>Team&Advisor</span>
          </div>
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
          <div class="list par-top20">
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

      <div class="road-map">
        <div class="container">
          <div class="title">Road Map</div>
          <div class="content">
            <div class="item">
              <div class="item-top">Stage 01</div>
              <div class="item-bottom">
                - Launch the whiter paper (version.1.0) <br />
                - Graphic Design and launch of Dragons\Dragon Eggs and other
                props
                <br />
                - Launch social channel+website <br />
                - Seed-sale\Private-Sale(the first round) <br />
                - Marketing Enhance
              </div>
            </div>

            <div class="item">
              <div class="item-top">Stage 02</div>
              <div class="item-bottom">
                - Airdrop for the 10000 dragon eggs <br />
                - Complete the second round of Private Sale<br />
                - Launch the Marketplace <br />
                - Public launch the Staking and Liquidity Mining <br />
                - Dapp Mobile Game (version.1.0
              </div>
            </div>

            <div class="item">
              <div class="item-top">Stage 03</div>
              <div class="item-bottom">
                - Launch the introduction of the version.2.0<br />
                - Props IDOLand\buildings,et.,) for the version.2.0<br />
                - Launch the exchange function Land\buildings) of Marketplace<br />
                - Partnerships Expanded<br />
                - Dapp Mobile Game<br />
                (version.2.0 ;ios, android)
              </div>
            </div>
          </div>
        </div>
      </div>
      <Bottom @createEgg="createEgg"></Bottom>
    </div>
  </div>
</template>

<script>
import { reactive, onMounted, toRefs } from "vue";
import { useRouter } from "vue-router";
import Header from "@/components/Header";
import Bottom from "@/components/Bottom";
import common from "@/utils/common";

export default {
  name: "aboutUs",
  components: {
    Header,
    Bottom,
  },
  setup() {
    const router = useRouter();
    const state = reactive({
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
        {
          peopleImg: require("@/assets/imgs/aboutUs/people/people3.png"),
          name: "ADAM T. NORRIS",
          position: "COO",
          des: "Original miner of bitcoin.cz and the former implementation consultant at SAP",
        },
        {
          peopleImg: require("@/assets/imgs/aboutUs/people/people4.png"),
          name: "Lisa Wong",
          position: "CFO",
          des: "SVP of Investor Relations at Urban Catalyst Fund",
        },
        {
          peopleImg: require("@/assets/imgs/aboutUs/people/people5.png"),
          name: "Brooke Hansen",
          position: "Social Media Director",
          des: "Director of Media and Outreach at GoChain",
        },
        {
          peopleImg: require("@/assets/imgs/aboutUs/people/people6.png"),
          name: "Chris Lee",
          position: "Original Designers",
          des: "the director of game department",
        },
        {
          peopleImg: require("@/assets/imgs/aboutUs/people/people7.png"),
          name: "Craig Macy",
          position: "Legal Director",
          des: "Product and Business Strategy Meets Legal  Accumen",
        },
        {
          peopleImg: require("@/assets/imgs/aboutUs/people/people8.png"),
          name: "Alex",
          position: "Chief Executive (China)",
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

    return {
      ...toRefs(state),
      goToDetail,
      tips,
    };
  },
};
</script>

<style lang="less" scoped >
.main {
  //  width: 100%;
  .main-wrap {
    // height: 4518px;

    // min-height: 4518px;
    background: linear-gradient(315deg, #4c1200 0%, #140c09 100%);
    .top {
      height: 635px;
      margin-top: 120px;
      z-index: auto;
      display: flex;
      justify-content: center;
      .top-bac {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 452px;
        .left {
          margin-right: 30px;
          .left-top {
            // margin-top: 5px;
            span {
              font-size: 64px;
              font-family: GothamRounded-Medium, GothamRounded;
              color: #ffffff;
              // line-height: 75px;
            }
          }
          .left-bottom {
            margin-top: 24px;
            width: 588px;
            // height: 288px;
            font-size: 24px;
            font-family: GothamRounded;
            color: #ffffff;
            word-wrap: break-word;
            white-space: normal;
            word-break: break-all;
            line-height: 32px;
          }
        }
        .right {
          img {
            width: 585px;
            height: 452px;
          }
        }
      }
    }
    .mid-myTeam {
      height: 1944px;
      background-repeat: no-repeat;
      padding-top: 120px;
      // background-position: bottom;
      background-size: cover;
      background-image: url("../../../assets/imgs/aboutUs/people-bac.png");
      .container {
        width: 1200px;
        margin: 0 auto;

        .title {
          display: flex;
          justify-content: center;
          align-items: center;
          span {
            font-size: 64px;
            font-family: GothamRounded-Medium, GothamRounded;
            color: #ffffff;
            line-height: 75px;
          }
        }
        .list {
          padding-top: 100px;
          display: flex;
          align-content: flex-start;
          flex-flow: row wrap;
          .item {
            width: 282px;
            height: 430px;
            margin-right: 13px;
            margin-bottom: 50px;
            .item-top {
              img {
                // width: 276px;
                // height: 276px;
                width: 250px;
                height: 250px;
                border-radius: 50%;
              }
            }
            .bottom {
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              .bottom-name {
                text-align: center;
                margin-top: 10px;
                font-size: 24px;
                font-family: GothamRounded-Medium, GothamRounded;
                font-weight: 500;
                color: #ffffff;
                line-height: 28px;
              }
              .bottom-position {
                text-align: center;
                margin-top: 10px;
                font-size: 16px;
                font-family: GothamRounded-Medium, GothamRounded;
                font-weight: 500;
                color: #ffffff;
                line-height: 19px;
              }
              .bottom-des {
                width: 240px;
                text-align: center;
                margin-top: 10px;
                font-size: 16px;
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
          justify-content: center;
          align-items: center;
          margin-top: 40px;
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
    .road-map {
      padding-top: 100px;
      min-height: 734px;
      .container {
        width: 1200px;
        margin: 0 auto;

        .title {
          display: flex;
          justify-content: center;
          font-size: 64px;
          font-family: GothamRounded-Medium, GothamRounded;
          color: #ffffff;
        }
        .content {
          display: flex;
          margin-top: 120px;
          .item {
            width: 384px;
            height: 410px;
            background-size: cover;
            background-image: url("../../../assets/imgs/aboutUs/road-map-bac.png");
            margin-right: 15px;
            .item-top {
              text-align: center;
              font-size: 32px;
              font-family: GothamRounded-Medium, GothamRounded;
              font-weight: 500;
              color: #ffffff;
              padding-top: 10px;
            }
            .item-bottom {
              padding: 17px;
              margin-top: 30px;
              font-size: 16px;
              font-family: GothamRounded;
              color: #ffffff;
              line-height: 32px;
              opacity: 0.68;
            }
          }
        }
      }
    }
    .investors {
      padding-top: 120px;
      // height: 768px;
      min-height: 568px;
      background-size: cover;
      background-image: url("../../../assets/imgs/aboutUs/investors/bc.png");
      .investors-container {
        width: 1200px;
        margin: 0 auto;
        .investors-top {
          text-align: center;
          font-size: 64px;
          font-family: GothamRounded-Bold, GothamRounded;
          font-weight: bold;
          color: #ffffff;
        }
        .investors-bottom {
          display: flex;
          align-content: flex-start;
          flex-flow: row wrap;
          .investors-item {
            width: 282px;
            height: 203px;
            img {
              width: 282px;
              height: 203px;
            }
          }
        }
      }
    }
  }
}
.par-top20 {
  margin-top: 30px;
}
</style>