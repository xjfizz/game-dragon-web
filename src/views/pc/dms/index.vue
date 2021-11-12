

<template>
  <div class="main">
    <div class="main-wrap">
      <div class="top">
        <Header :headIndex="8" @createEgg="createEgg"></Header>
        <div class="top-content">
          <div class="left">
            <div class="title">DMS</div>
            <div class="des">
              Dragon Mainland Shards (DMS) is the ecosystem and governance token
              of the Dragon Mainland. The total supply of DMS is 1,000,000,000
              and no additional DMS will ever be issued. Team, Advisor, and
              mining reward tokens are locked and released monthly in equal
              increments over the 60 months
            </div>
          </div>
          <div class="right">
            <img src="@/assets/imgs/dms/top-dms-icon.png" alt="" />
          </div>
        </div>
      </div>
      <div class="mid">
        <div class="mid-content">
          <div class="pie-main">
            <div class="pie-top">
              <img src="@/assets/imgs/dms/pie-top.png" alt="" />
            </div>
            <div class="pie-content">
              <div class="item">
                <div class="title">Mining Rewards 45%</div>
                <div class="des">
                  We have set 45% of the total DMS token supply for the mining
                  release to encourage players to actively participate in the
                  game and motivate them to keep holding DMS tokens. Further
                  details of the release program can be found in our white
                  paper.
                </div>
              </div>

              <div class="item">
                <div class="title">Foundation Reserve 15%</div>
                <div class="des">
                  This reserve is necessary to maintain the health of the
                  company over the long term and to evolve and upgrade Dragon
                  Mainland. All funds will set forth for salaries, operations,
                  and expanded development of the game and the company.
                </div>
              </div>

              <div class="item">
                <div class="title">Team 21%</div>
                <div class="des">
                  This is self explanatory and reserved for incentivizing and
                  rewarding the founding team and employees.
                </div>
              </div>

              <div class="item">
                <div class="title">Advisor 4%</div>
                <div class="des">
                  Dragon Mainland has a strong team of consultants who provide
                  great advice and support to the project, especially in the
                  early stages.
                </div>
              </div>

              <div class="item">
                <div class="title">Sale 15%</div>
                <div class="des">
                  This part of the token allotment will be sold to investors.
                  Early rounds are subject to lockup’s and please check our
                  white paper for more details. The Public Sale will be free of
                  any lockups or restrictions.
                </div>
              </div>
            </div>
          </div>

          <div class="des-content">
            <div class="item">
              <div class="title">Ways to obtain DMS</div>
              <div class="des">
                <div class="des-item">
                  1. Open Market acquisition: IDO / DEX/Exchange
                </div>
                <div class="des-item">
                  2. Staking income: obtain DMS by staking DMS to earn more
                </div>
                <div class="des-item">
                  3. Liquidity mining income: DMS can be obtained by providing
                  liquidity to the revenue aggregator
                </div>
                <div class="des-item">
                  4. In-Game revenue: official events/PVP battles/ladder
                  competitions
                </div>
                <div class="des-item">
                  5. Other rewards: community rewards/activity
                  rewards/contribution rewards
                </div>
              </div>
            </div>

            <div class="item">
              <div class="title">DMS token use cases</div>
              <div class="des">
                <div class="des-item">
                  1. Marketplace Payments: Buy, sell and trade various NFTs such
                  as dragon eggs, dragons, skulls, and more.
                </div>
                <div class="des-item">
                  2. Governance: DMS token holders will be allowed to pledge
                  tokens to participate in platform governance voting
                </div>
                <div class="des-item">
                  3. Staking: Get weekly rewards by staking DMS tokens.
                </div>
                <div class="des-item">
                  4. Liquidity mining: Provide DMS liquidity to the revenue
                  aggregator to obtain DMS token rewards.
                </div>
                <div class="des-item">
                  5. Game consumption: A certain amount of DMS is required for
                  breeding and cultivation (skill upgrades, skull absorption,
                  skull fusions).
                </div>
              </div>
            </div>
          </div>

          <div class="table-list">
            <div class="item-breed">
              <div class="title">【Dragon Breeding】</div>
              <div class="des">
                DMS is required for breeding any two dragons besides DMP. The
                amount of DMS consumed for each round of breeding starts at 0.2
                DMS and increases exponentially with each subsequent breeding.
                Any one dragon can breed a maximum of 7 times.
              </div>
              <div class="item-img">
                <img src="@/assets/imgs/dms/table1.png" alt="" />
              </div>
              <div class="item-des">
                The table above shows the data for the amount of DMS needed per
                breeding by the same Dragon.
              </div>
              <div class="item-des">
                Example: Dragon A breeds for the 1st time and Dragon B breeds
                for the 3rd time, the DMP consumption is 0.8 (0.2+0.6).
              </div>
            </div>

            <div class="item-skull">
              <div class="title">【Skull Absorption】</div>
              <div class="des">
                Each dragon must also consume a certain amount of DMS when
                absorbing skulls. The amount of DMS consumed increases with each
                subsequent absorption.
              </div>
              <div class="item-img">
                <img src="@/assets/imgs/dms/table2.png" alt="" />
              </div>
            </div>

            <div class="item-devouring">
              <div class="title">【Dragon Devouring】</div>
              <div class="des">
                Dragons can upgrade their skills by devouring other dragons, but
                only of the same race. Doing so requires a certain amount of DMS
                to facilitate the devouring process and skill upgrade.
              </div>
              <div class="item-img">
                <img src="@/assets/imgs/dms/table3.png" alt="" />
              </div>
            </div>

            <div class="item-talent">
              <div class="title">【Talent Upgrades】</div>
              <div class="des">
                Once a skill has been maxed out players can choose to upgrade
                their dragon’s talent level which requires a certain amount of
                DMS
              </div>
              <div class="item-img">
                <img src="@/assets/imgs/dms/table4.png" alt="" />
              </div>
            </div>

            <div class="item-synthesis">
              <div class="title">【Skulls Synthesis】</div>
              <div class="des">
                After the blind box function is launched players can open the
                blind box to obtain dragon skulls. They can also choose to
                synthesize 5 dragon skulls to get a higher level dragon skull. A
                specific amount of DMS is also required to synthesize a dragon
                skull.
              </div>
              <div class="item-img">
                <img src="@/assets/imgs/dms/table5.png" alt="" />
              </div>
            </div>
          </div>

          <div class="bottom-menu">
            <Bottom @createEgg="createEgg"></Bottom>
          </div>
        </div>
      </div>
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
  name: "dms",
  components: {
    Header,
    Bottom,
    playGame,
  },
  setup() {
    const router = useRouter();
    const state = reactive({});
    onMounted(() => {
      common.goTopScroll();
    });

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
    // min-height: 3000px;
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
      height: 678px;
      background-repeat: no-repeat;
      background-size: cover;
      background-image: url("../../../assets/imgs/dmp/top-bc.png");
      display: flex;
      flex-direction: column;
      align-items: center;
      .top-content {
        width: 1200px;
        margin-top: 164px;
        display: flex;
        justify-content: center;
        .left {
          .title {
            font-size: 48px;
            font-family: WendyOne-Regular, WendyOne;
            font-weight: 400;
            color: #ffffff;
            line-height: 50px;
            letter-spacing: 1px;
          }
          .des {
            margin-top: 43px;
            width: 888px;
            height: 160px;
            font-size: 24px;
            font-family: GothamRounded-Book, GothamRounded;
            font-weight: normal;
            color: #ffffff;
            line-height: 35px;
            opacity: 0.83;
          }
        }
        .right {
          margin-left: 55px;
          img {
            width: 341px;
            height: 342px;
          }
        }
      }
    }
    .mid {
      //   height: 6243px;
      min-height: 5600px;
      display: flex;
      flex-direction: column;
      align-items: center;
      .mid-content {
        width: 1200px;
        .pie-main {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-top: 85px;

          .pie-top {
            img {
              width: 1056px;
              height: 344px;
            }
          }
          .pie-content {
            margin-top: 40px;
            .item {
              margin-top: 59px;
              .title {
                font-size: 23px;
                font-family: WendyOne-Regular;
                color: #ffffff;
              }
              .des {
                width: 902px;
                margin-top: 27px;
                font-size: 24px;
                font-family: GothamRounded;
                color: #ffffff;
                line-height: 35px;
                opacity: 0.8;
              }
            }
          }
        }
        .des-content {
          margin-top: 20px;
          .item {
            margin-top: 52px;
            .title {
              display: flex;
              justify-content: center;
              font-size: 48px;
              font-family: WendyOne-Regular;
              font-weight: 400;
              color: #ffffff;
              margin-bottom: 55px;
            }
            .des {
              display: flex;
              flex-direction: column;
              align-items: center;
              .des-item {
                width: 913px;
                font-size: 24px;
                font-family: GothamRounded;
                font-weight: 400;
                color: #ffffff;
                line-height: 35px;
                opacity: 0.83;
                margin-bottom: 10px;
              }
            }
          }
        }
        .table-list {
          .item-breed {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-top: 63px;
            .title {
              font-size: 48px;
              font-family: WendyOne-Regular, WendyOne;
              font-weight: 400;
              color: #ffffff;
              line-height: 50px;
              letter-spacing: 1px;
            }
            .des {
              width: 886px;
              font-size: 24px;
              font-family: GothamRounded;
              font-weight: 400;
              color: #ffffff;
              line-height: 35px;
              opacity: 0.83;
              margin-top: 46px;
            }
            .item-img {
              margin-top: 50px;
              img {
                width: 889px;
                height: 623px;
              }
            }
            .item-des {
              margin-top: 53px;
              width: 899px;
              font-size: 24px;
              font-family: GothamRounded;
              font-weight: 400;
              color: #ffffff;
              line-height: 35px;
              opacity: 0.83;
            }
          }

          .item-skull {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-top: 63px;
            .title {
              font-size: 48px;
              font-family: WendyOne-Regular, WendyOne;
              font-weight: 400;
              color: #ffffff;
              line-height: 50px;
              letter-spacing: 1px;
            }
            .des {
              width: 886px;
              font-size: 24px;
              font-family: GothamRounded;
              font-weight: 400;
              color: #ffffff;
              line-height: 35px;
              opacity: 0.83;
              margin-top: 46px;
            }
            .item-img {
              margin-top: 50px;
              img {
                width: 919px;
                height: 961px;
              }
            }
            .item-des {
              margin-top: 53px;
              width: 899px;
              font-size: 24px;
              font-family: GothamRounded;
              font-weight: 400;
              color: #ffffff;
              line-height: 35px;
              opacity: 0.83;
            }
          }

          .item-devouring {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-top: 63px;
            .title {
              font-size: 48px;
              font-family: WendyOne-Regular, WendyOne;
              font-weight: 400;
              color: #ffffff;
              line-height: 50px;
              letter-spacing: 1px;
            }
            .des {
              width: 886px;
              font-size: 24px;
              font-family: GothamRounded;
              font-weight: 400;
              color: #ffffff;
              line-height: 35px;
              opacity: 0.83;
              margin-top: 46px;
            }
            .item-img {
              margin-top: 50px;
              img {
                width: 919px;
                height: 532px;
              }
            }
            .item-des {
              margin-top: 53px;
              width: 899px;
              font-size: 24px;
              font-family: GothamRounded;
              font-weight: 400;
              color: #ffffff;
              line-height: 35px;
              opacity: 0.83;
            }
          }

          .item-talent {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-top: 63px;
            .title {
              font-size: 48px;
              font-family: WendyOne-Regular, WendyOne;
              font-weight: 400;
              color: #ffffff;
              line-height: 50px;
              letter-spacing: 1px;
            }
            .des {
              width: 886px;
              font-size: 24px;
              font-family: GothamRounded;
              font-weight: 400;
              color: #ffffff;
              line-height: 35px;
              opacity: 0.83;
              margin-top: 46px;
            }
            .item-img {
              margin-top: 50px;
              img {
                width: 918px;
                height: 391px;
              }
            }
            .item-des {
              margin-top: 53px;
              width: 899px;
              font-size: 24px;
              font-family: GothamRounded;
              font-weight: 400;
              color: #ffffff;
              line-height: 35px;
              opacity: 0.83;
            }
          }

          .item-synthesis {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-top: 63px;
            .title {
              font-size: 48px;
              font-family: WendyOne-Regular, WendyOne;
              font-weight: 400;
              color: #ffffff;
              line-height: 50px;
              letter-spacing: 1px;
            }
            .des {
              width: 886px;
              font-size: 24px;
              font-family: GothamRounded;
              font-weight: 400;
              color: #ffffff;
              line-height: 35px;
              opacity: 0.83;
              margin-top: 46px;
            }
            .item-img {
              margin-top: 50px;
              img {
                width: 919px;
                height: 597px;
              }
            }
            .item-des {
              margin-top: 53px;
              width: 899px;
              font-size: 24px;
              font-family: GothamRounded;
              font-weight: 400;
              color: #ffffff;
              line-height: 35px;
              opacity: 0.83;
            }
          }
        }

        .bottom-menu {
          margin-top: 100px;
        }
      }
    }
  }
  .par-top48 {
    margin-top: 48px;
  }
}
</style>