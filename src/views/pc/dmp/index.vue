

<template>
  <playGame v-if="playGameShow" @closeBox="closePlayGameBox"></playGame>
  <div class="main">
    <div class="main-wrap">
      <div class="top">
        <Header :headIndex="8" @createEgg="createEgg"></Header>
        <div class="top-content">
          <div class="left">
            <div class="title">DMP</div>
            <div class="des">
              Dragon Miracle Potion ($DMP) is a functional utility token issued
              and used in Dragon Mainland. It can be earned by completing daily
              quests, passing levels, and through dragon pledge mining. There’s
              no initial circulating supply by design to achieve a fair and even
              initial distribution for all players. There is also no max supply.
              DMP has many functions and utilities inside Dragon Mainland.
            </div>
          </div>
          <div class="right">
            <img src="@/assets/imgs/dmp/top-dmp-icon.png" alt="" />
          </div>
        </div>
      </div>
      <div class="mid">
        <div class="mid-content">
          <div class="dragon-breed">
            <div class="dragon-breed-title">01. Dragon Breeding</div>
            <div class="dragon-breed-des">
              DMP is required for breeding any two dragons. The amount of DMP
              consumed for each round of breeding starts at 200 DMP and
              increases exponentially with each subsequent breeding. Any one
              dragon can breed a maximum of 7 times.
            </div>
            <div class="dragon-breed-list">
              <img src="@/assets/imgs/dmp/breed-list-img.png" alt="" />
            </div>
            <div class="dragon-breed-list-des">
              * The table above shows the data for the amount of DMP needed per
              breeding by the same Dragon.
            </div>
            <!-- <div class="dragon-breed-list-table">
              <img src="@/assets/imgs/dmp/breed-table-img.png" alt="" />
            </div> -->
            <div class="dragon-breed-list-des">
              Example: Dragon A breeds for the 1st time and Dragon B breeds for
              the 3rd time, the DMP consumption is 800 (200+600).
            </div>
          </div>
          <div class="dragon-bone-absorption">
            <div class="bone-title">
              02. Attribute Upgrades: Dragon Skull Absorption
            </div>
            <div class="bone-des">
              Each dragon must also consume a certain amount of DMP when
              absorbing skulls. The amount of DMP consumed increases with each
              subsequent absorption.
            </div>
            <div class="bone-list-img">
              <img src="@/assets/imgs/dmp/bone-list-img.png" alt="" />
            </div>
          </div>

          <div class="dragon-devouring">
            <div class="devouring-title">
              03. Skill Upgrades: Dragon Devouring
            </div>
            <div class="devouring-des">
              Dragons can upgrade their skills by devouring other dragons, but
              only of the same race. Doing so requires a certain amount of DMP
              to facilitate the devouring process and skill upgrade.
            </div>
            <div class="devouring-list-img">
              <img src="@/assets/imgs/dmp/devouring-list-img.png" alt="" />
            </div>
          </div>

          <div class="dragon-upgrade">
            <div class="upgrade-title">04. Talent Upgrades</div>
            <div class="upgrade-des">
              Once a skill has been maxed out players can choose to upgrade
              their dragon’s talent level which requires a certain amount of
              DMP.
            </div>
            <div class="upgrade-list-img">
              <img src="@/assets/imgs/dmp/upgrade-list-img.png" alt="" />
            </div>
          </div>

          <div class="dragon-skull">
            <div class="skull-title">05. Dragon Bone Synthesis</div>
            <div class="skull-des">
              After the blind box function is launched players can open the
              blind box to obtain dragon skulls. They can also choose to
              synthesize 5 dragon skulls to get a higher level dragon skull. A
              specific amount of DMP is also required to synthesize a dragon
              skull.
            </div>
            <div class="skull-list-img">
              <img src="@/assets/imgs/dmp/skull-list-img.png" alt="" />
            </div>
          </div>

          <div class="dmp-bottom-des">
            <div class="dmp-bottom-des-top">
              As you can see DMP can be earned a variety of different ways. It
              is issued as a reward for completing daily tasks and for passing
              each level in the game. However, prior to full launch of the
              game's combat battle system, DMP can only be earned through dragon
              pledge mining. Every account starts with 20 stamina points and a
              stamina points are consumed during the dragon mining process.
              Stamina will be explained in more detail soon.
            </div>
            <div class="dmp-bottom-des-title">Dragon Staking Rules:</div>
            <div class="dmp-bottom-des-content">
              <div class="item">
                <div class="item-index">1.</div>
                <div class="item-text">
                  Dragon pledge mining is conducted in 3 hour increments for
                  settlement payout at a rate of 3 DMP per hour, per dragon. One
                  dragon produces 9 DMP every 3 hours. If a Dragon is pledged
                  for less than 3 hours no DMP will be earned.
                </div>
              </div>
              <div class="item">
                <div class="item-index">2.</div>
                <div class="item-text">
                  One Stamina point will be consumed per dragon, per 3 hour
                  settlement block during the mining process.
                </div>
              </div>
              <div class="item">
                <div class="item-index">3.</div>
                <div class="item-text">
                  A player can earn 216 DMP if they pledge 3 dragons for 24
                  hours. In order to do so they will need to be able to sustain
                  3 points of stamina consumption per 3 hour settlement block
                  for 24 hours. In other words, you’ll need 24 stamina points
                  with 3 dragons to earn 216 DMP in 24 hours.
                </div>
              </div>
              <div class="item">
                <div class="item-index">4.</div>
                <div class="item-text">
                  Increasing the number of dragons a user owns can significantly
                  increase each user’s stamina limit. It also increases the
                  speed of stamina recovery. The translation is the speed of
                  recovery and stamina limits are determined by the number of
                  dragons a user owns.
                </div>
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
  name: "dmp",
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
    // min-height: 3731px;
    min-height: 3000px;
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
            width: 691px;
            height: 160px;
            font-size: 24px;
            font-family: GothamRounded-Book, GothamRounded;
            font-weight: normal;
            color: #ffffff;
            line-height: 32px;
            opacity: 0.83;
          }
        }
        .right {
          margin-left: 55px;
          img {
            width: 234px;
            height: 350px;
          }
        }
      }
    }
    .mid {
      //   height: 6243px;
      min-height: 5000px;
      display: flex;
      flex-direction: column;
      align-items: center;
      .mid-content {
        width: 1200px;
        .dragon-breed {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-top: 80px;
          height: 1070px;

          .dragon-breed-title {
            font-size: 48px;
            font-family: WendyOne-Regular, WendyOne;
            font-weight: 400;
            color: #ffffff;
            line-height: 50px;
            letter-spacing: 1px;
          }
          .dragon-breed-des {
            width: 996px;
            font-size: 24px;
            font-family: GothamRounded-Book, GothamRounded;
            font-weight: normal;
            color: #ffffff;
            line-height: 32px;
            margin-top: 30px;
            opacity: 0.83;
          }
          .dragon-breed-list {
            margin-top: 48px;
            img {
              width: 857px;
              height: 592px;
            }
          }
          .dragon-breed-list-des {
            font-size: 24px;
            font-family: GothamRounded-Book, GothamRounded;
            font-weight: normal;
            color: #ffffff;
            line-height: 32px;
            margin-top: 30px;
            opacity: 0.83;
          }
          .dragon-breed-list-table {
            margin-top: 100px;
            img {
              width: 857px;
              height: 571px;
            }
          }
          .dragon-breed-list-des {
            font-size: 24px;
            font-family: GothamRounded-Book, GothamRounded;
            font-weight: normal;
            color: #ffffff;
            line-height: 32px;
            margin-top: 30px;
            opacity: 0.83;
          }
        }
        .dragon-bone-absorption {
          display: flex;
          flex-direction: column;
          align-items: center;
          height: 680px;
          // margin-top: 68px;
          .bone-title {
            font-size: 48px;
            font-family: WendyOne-Regular, WendyOne;
            font-weight: 400;
            color: #ffffff;
            line-height: 50px;
            letter-spacing: 1px;
          }
          .bone-des {
            width: 996px;
            height: 96px;
            font-size: 24px;
            font-family: GothamRounded-Book, GothamRounded;
            font-weight: normal;
            color: #ffffff;
            line-height: 32px;
            opacity: 0.86;
            margin-top: 48px;
            text-align: center;
            margin-top: 30px;
          }
          .bone-list-img {
            margin-top: 48px;
            img {
              width: 857px;
              height: 331px;
            }
          }
        }

        .dragon-devouring {
          display: flex;
          flex-direction: column;
          align-items: center;
          height: 640px;
          //   margin-top: 68px;
          .devouring-title {
            font-size: 48px;
            font-family: WendyOne-Regular, WendyOne;
            font-weight: 400;
            color: #ffffff;
            line-height: 50px;
            letter-spacing: 1px;
          }
          .devouring-des {
            width: 996px;
            font-size: 24px;
            font-family: GothamRounded-Book, GothamRounded;
            font-weight: normal;
            color: #ffffff;
            line-height: 32px;
            opacity: 0.86;
            margin-top: 48px;
            text-align: center;
            margin-top: 30px;
          }
          .devouring-list-img {
            margin-top: 48px;
            img {
              width: 857px;
              height: 331px;
            }
          }
        }

        .dragon-upgrade {
          display: flex;
          flex-direction: column;
          align-items: center;
          height: 640px;
          //   margin-top: 68px;
          .upgrade-title {
            font-size: 48px;
            font-family: WendyOne-Regular, WendyOne;
            font-weight: 400;
            color: #ffffff;
            line-height: 50px;
            letter-spacing: 1px;
          }
          .upgrade-des {
            width: 996px;
            font-size: 24px;
            font-family: GothamRounded-Book, GothamRounded;
            font-weight: normal;
            color: #ffffff;
            line-height: 32px;
            opacity: 0.86;
            margin-top: 48px;
            text-align: center;
            margin-top: 30px;
          }
          .upgrade-list-img {
            margin-top: 48px;
            img {
              width: 857px;
              height: 331px;
            }
          }
        }

        .dragon-skull {
          display: flex;
          flex-direction: column;
          align-items: center;
          height: 640px;
          //   margin-top: 68px;
          .skull-title {
            font-size: 48px;
            font-family: WendyOne-Regular, WendyOne;
            font-weight: 400;
            color: #ffffff;
            line-height: 50px;
            letter-spacing: 1px;
          }
          .skull-des {
            width: 996px;
            font-size: 24px;
            font-family: GothamRounded-Book, GothamRounded;
            font-weight: normal;
            color: #ffffff;
            line-height: 32px;
            opacity: 0.86;
            margin-top: 48px;
            text-align: center;
            margin-top: 30px;
          }
          .skull-list-img {
            margin-top: 48px;
            img {
              width: 857px;
              height: 331px;
            }
          }
        }
        .dmp-bottom-des {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-top: 30px;
          .dmp-bottom-des-top {
            width: 1020px;
            font-size: 24px;
            font-family: GothamRounded-Medium, GothamRounded;
            font-weight: 500;
            color: #ffffff;
            line-height: 32px;
            opacity: 0.83;
          }
          .dmp-bottom-des-title {
            width: 1020px;
            height: 32px;
            font-size: 24px;
            font-family: GothamRounded-Medium, GothamRounded;
            font-weight: 500;
            color: #ffffff;
            line-height: 32px;
            opacity: 0.83;
            margin-top: 32px;
          }
          .dmp-bottom-des-content {
            margin-top: 19px;
            width: 1020px;
            .item {
              display: flex;
              margin-bottom: 24px;
              .item-index {
                font-size: 24px;
                font-family: GothamRounded-Medium, GothamRounded;
                font-weight: 500;
                color: #ffffff;
                margin-right: 15px;
                opacity: 0.83;
              }
              .item-text {
                width: 956px;
                font-size: 20px;
                font-family: GothamRounded-Book, GothamRounded;
                font-weight: normal;
                color: #ffffff;
                line-height: 30px;
                opacity: 0.83;
              }
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