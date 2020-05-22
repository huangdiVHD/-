<template>
  <div class="home">
    <div class="home-content">
      <div class="home-navugation">
        <swiper class="home-1" ref="mySwiper" :options="swiperOptions">
          <swiper-slide class="home-1a">
            <img src="@/assets/home/home-1.jpg" alt />
          </swiper-slide>
          <swiper-slide class="home-1a">
            <img src="@/assets/home/home-2.jpg" alt />
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
        <div class="swiper-button-prev"></div>
        <!--左箭头。如果放置在swiper-container外面，需要自定义样式。-->
        <div class="swiper-button-next"></div>
        <!--右箭头。如果放置在swiper-container外面，需要自定义样式。-->
      </div>
      <div class="home-introduce">
        <div class="home-introduce-1">小酒馆</div>
        <div class="home-introduce-2">
          <div
            class="home-introduce-2a"
          >小酒馆,上古世界一直活跃到现在一个远征队,成员遍布各行各业,年龄各不相同,我们因为拥有共同的爱好的聚在一起,小酒馆,上古世界一直活跃到现在一个远征队,成员遍布各行各业,年龄各不相同,我们因为拥有共同的爱好的聚在一起,小酒馆,上古世界一直活跃到现在一个远征队,成员遍布各行各业,年龄各不相同,我们因为拥有共同的爱好的聚在一起,小酒馆,上古世界一直活跃到现在一个远征队,成员遍布各行各业,年龄各不相同,我们因为拥有共同的爱好的聚在一起</div>
          <div class="home-introduce-2b">小酒馆,上古世界一直活跃到现在一个远征队,成员遍布各行各业,年龄各不相同,我们因为拥有共同的爱好的聚在一起,小酒馆,上古世界一直活跃到现在一个远征队,成员遍布各行各业,年龄各不相同,我们因为拥有共同的爱好的聚在一起,小酒馆,上古世界一直活跃到现在一个远征队,成员遍布各行各业,年龄各不相同,我们因为拥有共同的爱好的聚在一起,小酒馆,上古世界一直活跃到现在一个远征队,成员遍布各行各业,年龄各不相同,我们因为拥有共同的爱好的聚在一起在这个大家庭里,你会体会带久违的开心,你会为一起努力度过难关而兴奋</div>
        </div>
      </div>
      <div class="home-race">
        <div class="home-race-title">上古世纪种族</div>
        <div class="home-race-sw">
          <div class="swiper-pagination1" slot="pagination"></div>
          <swiper class="home-race-sw1" ref="mySwiper" :options="swiperOptions1">
            <swiper-slide class="home-race-sw2">
              <div class="home-race-sw2a">
                <img src="@/assets/home/home-3 (1).png" alt />
                <div class="home-race-sw2a1">
                  <div class="home-race-sw2a1a">诺亚族</div>
                  <div class="home-race-sw2a1b">
                    继承诺伊女神遗志
                    <br />以热情的态度征服自然
                    <br />以和谐的生活方式推动历史
                    <br />为了王国的复兴
                    <br />即使面对不断重复的命运
                    <br />他们依旧充满活力，永不放弃
                    <br />
                  </div>
                </div>
              </div>
              <div class="home-race-sw2a">
                <img src="@/assets/home/home-3 (2).png" alt />
                <div class="home-race-sw2a1">
                  <div class="home-race-sw2a1a">诺亚族</div>
                  <div class="home-race-sw2a1b">
                    继承诺伊女神遗志
                    <br />以热情的态度征服自然
                    <br />以和谐的生活方式推动历史
                    <br />为了王国的复兴
                    <br />即使面对不断重复的命运
                    <br />他们依旧充满活力，永不放弃
                    <br />
                  </div>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide class="home-race-sw2">
              <div class="home-race-sw2a">
                <img src="@/assets/home/home-3 (9).png" alt />
                <div class="home-race-sw2a1">
                  <div class="home-race-sw2a1a">诺亚族</div>
                  <div class="home-race-sw2a1b">
                    继承诺伊女神遗志
                    <br />以热情的态度征服自然
                    <br />以和谐的生活方式推动历史
                    <br />为了王国的复兴
                    <br />即使面对不断重复的命运
                    <br />他们依旧充满活力，永不放弃
                    <br />
                  </div>
                </div>
              </div>
              <div class="home-race-sw2a">
                <img src="@/assets/home/home-3 (10).png" alt />
                <div class="home-race-sw2a1">
                  <div class="home-race-sw2a1a">诺亚族</div>
                  <div class="home-race-sw2a1b">
                    继承诺伊女神遗志
                    <br />以热情的态度征服自然
                    <br />以和谐的生活方式推动历史
                    <br />为了王国的复兴
                    <br />即使面对不断重复的命运
                    <br />他们依旧充满活力，永不放弃
                    <br />
                  </div>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide class="home-race-sw2">
              <div class="home-race-sw2a">
                <img src="@/assets/home/home-3 (5).png" alt />
                <div class="home-race-sw2a1">
                  <div class="home-race-sw2a1a">诺亚族</div>
                  <div class="home-race-sw2a1b">
                    继承诺伊女神遗志
                    <br />以热情的态度征服自然
                    <br />以和谐的生活方式推动历史
                    <br />为了王国的复兴
                    <br />即使面对不断重复的命运
                    <br />他们依旧充满活力，永不放弃
                    <br />
                  </div>
                </div>
              </div>
              <div class="home-race-sw2a">
                <img src="@/assets/home/home-3 (6).png" alt />
                <div class="home-race-sw2a1">
                  <div class="home-race-sw2a1a">诺亚族</div>
                  <div class="home-race-sw2a1b">
                    继承诺伊女神遗志
                    <br />以热情的态度征服自然
                    <br />以和谐的生活方式推动历史
                    <br />为了王国的复兴
                    <br />即使面对不断重复的命运
                    <br />他们依旧充满活力，永不放弃
                    <br />
                  </div>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide class="home-race-sw2">
              <div class="home-race-sw2a">
                <img src="@/assets/home/home-3 (7).png" alt />
                <div class="home-race-sw2a1">
                  <div class="home-race-sw2a1a">诺亚族</div>
                  <div class="home-race-sw2a1b">
                    继承诺伊女神遗志
                    <br />以热情的态度征服自然
                    <br />以和谐的生活方式推动历史
                    <br />为了王国的复兴
                    <br />即使面对不断重复的命运
                    <br />他们依旧充满活力，永不放弃
                    <br />
                  </div>
                </div>
              </div>
              <div class="home-race-sw2a">
                <img src="@/assets/home/home-3 (8).png" alt />
                <div class="home-race-sw2a1">
                  <div class="home-race-sw2a1a">诺亚族</div>
                  <div class="home-race-sw2a1b">
                    继承诺伊女神遗志
                    <br />以热情的态度征服自然
                    <br />以和谐的生活方式推动历史
                    <br />为了王国的复兴
                    <br />即使面对不断重复的命运
                    <br />他们依旧充满活力，永不放弃
                    <br />
                  </div>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide class="home-race-sw2">
              <div class="home-race-sw2a">
                <img src="@/assets/home/home-3 (3).png" alt />
                <div class="home-race-sw2a1">
                  <div class="home-race-sw2a1a">诺亚族</div>
                  <div class="home-race-sw2a1b">
                    继承诺伊女神遗志
                    <br />以热情的态度征服自然
                    <br />以和谐的生活方式推动历史
                    <br />为了王国的复兴
                    <br />即使面对不断重复的命运
                    <br />他们依旧充满活力，永不放弃
                    <br />
                  </div>
                </div>
              </div>
              <div class="home-race-sw2a">
                <img src="@/assets/home/home-3 (4).png" alt />
                <div class="home-race-sw2a1">
                  <div class="home-race-sw2a1a">诺亚族</div>
                  <div class="home-race-sw2a1b">
                    继承诺伊女神遗志
                    <br />以热情的态度征服自然
                    <br />以和谐的生活方式推动历史
                    <br />为了王国的复兴
                    <br />即使面对不断重复的命运
                    <br />他们依旧充满活力，永不放弃
                    <br />
                  </div>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide class="home-race-sw2">
              <div class="home-race-sw2a">
                <img src="@/assets/home/home-3 (11).png" alt />
                <div class="home-race-sw2a1">
                  <div class="home-race-sw2a1a">诺亚族</div>
                  <div class="home-race-sw2a1b">
                    继承诺伊女神遗志
                    <br />以热情的态度征服自然
                    <br />以和谐的生活方式推动历史
                    <br />为了王国的复兴
                    <br />即使面对不断重复的命运
                    <br />他们依旧充满活力，永不放弃
                    <br />
                  </div>
                </div>
              </div>
              <div class="home-race-sw2a">
                <img src="@/assets/home/home-3 (12).png" alt />
                <div class="home-race-sw2a1">
                  <div class="home-race-sw2a1a">诺亚族</div>
                  <div class="home-race-sw2a1b">
                    继承诺伊女神遗志
                    <br />以热情的态度征服自然
                    <br />以和谐的生活方式推动历史
                    <br />为了王国的复兴
                    <br />即使面对不断重复的命运
                    <br />他们依旧充满活力，永不放弃
                    <br />
                  </div>
                </div>
              </div>
            </swiper-slide>
          </swiper>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide, directive } from "vue-awesome-swiper";
import "swiper/css/swiper.css";

export default {
  name: "Home",
  data() {
    return {
      swiperOptions: {
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        },
        loop: true
      },
      swiperOptions1: {
        pagination: {
          el: ".swiper-pagination1",
          clickable: true,
          renderBullet: function(index, className) {
            var list = ["诺伊亚", "精灵", "矮人", "哈里兰", "兽灵", "战魔"];
            return (
              '<span  class="' + className + '">' + list[index] + "</span>"
            );
          }
        }
      }
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper;
    }
  },
  mounted() {
    this.swiper.slideTo(3, 1000, false);
  },
  components: {}
};
</script>
 <style>
.swiper-pagination-bullet {
  display: inline-block;
  background: none;
  height: 0px;
  width: 100px;
  background: none;
  height: 0px;
  outline: none !important;
}
.swiper-pagination-bullet-active {
  opacity: 1;
  color: #b9ab77;
}
</style>
<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100%;
  .home-content {
    width: 100%;
    height: 100%;
    .home-navugation {
      width: 100%;
      height: 720px;
      position: relative;
      .home-1 {
        width: 100%;
        height: 100%;
        .home-1a {
          img {
            width: 100%;
            height: 100%;
          }
        }
      }
      .swiper-button-prev {
        position: absolute;
        left: 0px;
        top: 50%;
        outline: none !important;
        --swiper-navigation-color: #ffffff; /* 单独设置按钮颜色 */
      }
      .swiper-button-next {
        position: absolute;
        right: 0px;
        top: 50%;
        outline: none !important;
        --swiper-navigation-color: #ffffff; /* 单独设置按钮颜色 */
      }
    }
    .home-introduce {
      width: 1200px;
      height: 300px;
      margin: 50px auto 0;
      .home-introduce-1 {
        width: 100%;
        height: 50px;
        line-height: 50px;
        text-align: center;
        font-size: 50px;
      }
      .home-introduce-2 {
        width: 100%;
        height: 200px;
        margin-top: 50px;
        display: flex;
        justify-content: space-between;
        color: gray;
        font-size: 20px;
        .home-introduce-2a {
          width: 40%;
        }
        .home-introduce-2b {
          width: 40%;
        }
      }
    }
    .home-race {
      width: 1200px;
      height: 970px;
      margin: 0 auto;
      .home-race-title {
        margin-top: 100px;
        font-size: 60px;
        color: black;
        height: 60px;
        line-height: 60px;
        font-weight: bold;
        text-align: center;
        margin-bottom: 60px;
      }
      .home-race-sw {
        width: 100%;
        height: 560px;
        .swiper-pagination1 {
          display: flex;
          width: 100%;
          height: 50px;
          margin-bottom: 50px;
          justify-content: space-around;
        }
        .home-race-sw1 {
          width: 100%;
          height: 100%;
          .home-race-sw2 {
            display: flex;
            width: 100%;
            height: 100%;
            justify-content: space-between;
            .home-race-sw2a {
              width: 50%;
              height: 100%;
              position: relative;
              img {
                margin: 0 auto;
              }
              .home-race-sw2a1 {
                display: none;
                position: absolute;
                top: 170px;
                left: 135px;
                color: white;
                font-size: 14px;
                .home-race-sw2a1a {
                  font-size: 30px;
                }
                .home-race-sw2a1b {
                  line-height: 30px;
                }
              }
            }
            .home-race-sw2a:hover .home-race-sw2a1 {
              display: block;
            }
          }
        }
      }
    }
  }
}
</style>
