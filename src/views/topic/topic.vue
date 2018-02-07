<template>
  <div class="topic">
    <div class="banner">
      <!--SPA-->
      <swiper :options="swiperOption" class="swiper-box" ref="mySwiper">
        <swiper-slide class="swiper-item">
          <img src="../../assets/images/01.jpg" alt="">
        </swiper-slide>
        <swiper-slide class="swiper-item">
          <img src="../../assets/images/03.jpg" alt="...">
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
    <v-nav></v-nav>
  </div>
</template>

<script>
  import nav from '@/components/nav/nav'
  import { setCookie,getCookie,delCookie } from '../../assets/js/cookie.js'
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  import 'swiper/dist/css/swiper.css'
  export default{
    components:{
      swiper,
      swiperSlide,
      'v-nav':nav
    },
    data(){
      return{
        swiperOption: {
          pagination: {
            el: '.swiper-pagination',
            clickable :true,
          },
          slidesPerView: 1,
          autoplay: 5000,
          spaceBetween: 30,
          loop: true
        }
      }
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.swiper
      }
    },
    mounted(){

    },
    methods:{

    }
  }
</script>
<style lang="scss" scoped>
  @import '../../assets/css/function';
  .banner {
    .swiper-box {
      width: 100%;
      height: 100%;
      margin: 0 auto;
      overflow: hidden;
      .swiper-item {
        height: px2rem(380px);
        text-align: center;
        font-size: 18px ;
        background: #fff;
        display: flex;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        align-items: center;
        img {
          width: 100%;
        }
      }
    }
  }
</style>
