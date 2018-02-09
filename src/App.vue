<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <my-header :title="title.text" :menu-display="menuDisplay" :back-display="backDisplay" :mapDisplay="title.bools" v-show="title.bools"></my-header>
    <div class="content" :class="{tabar: tabar,cheader:cheader}">
      <transition name="slide-left">
        <router-view></router-view>
      </transition>
    </div>
    <!--<router-view/>-->
    <my-footer></my-footer>
  </div>
</template>

<script>
  import myFooter from './components/footer/footer.vue';
  import myHeader from '@/components/header/header.vue'

  import { mapGetters, mapActions } from 'vuex'
export default {
  data(){
    return{
//      ctabar:this.tabar
      bools:false,
      text:""
    }
  },
  name: 'App',
  components:{
    myFooter,
    myHeader
  },
  watch: {
    // 如果路由有变化，会再次执行该方法
    '$route': 'hideMenuSlide'
  },
  methods: {
    ...mapActions({ setNavState: 'setNavState' }),
    // 隐藏MenuSlide
    hideMenuSlide() {
      this.setNavState(false)
    }
  },
  computed:{
    title () {
      console.log(this.$route.path.split('/')[1])
      switch (this.$route.path.split('/')[1]) {
        case '':
          return {
            bools:false,
            text:""
          }
        case 'concern':
          return {
            bools:true,
            text:"关注"
          }
        case 'topic':
          return {
            bools:true,
            text:"话题"
          }
        case 'host':
          return {
            bools:true,
            text:"我的"
          }
      }
    },
    tabar () {
      if (this.$route.path.split('/')[1] == 'home'||this.$route.path.split('/')[1]==''){
        return false
      }
      return this.$route.path.split('/').length > 2 ? false : true
    },
    cheader () {
      if (this.$route.path.split('/')[1] == 'home'||this.$route.path.split('/')[1]=='') {
        return false
      }else{
        return true
      }
    },
    menuDisplay () {
      if (this.$route.path.split('/')[1] == 'host') {
        return false
      }
      return this.$route.path.split('/').length > 2 ? false : true
    },
    backDisplay () {
      return this.$route.path.split('/').length > 2 ? true : false
    },
    mapDisplay () {
      if (this.$route.path.split('/')[1] == 'host') {
        return true
      }
      return false
    }
  },
  mounted(){
    this.title;
  },
  mothed:{
  }
}
</script>

<style lang="scss">
  @import './assets/css/function';
  @font-face {
    font-family: 'icon';  /* project id 172436 */
    src: url('//at.alicdn.com/t/font_w71lovnj7adobt9.eot');
    src: url('//at.alicdn.com/t/font_w71lovnj7adobt9.eot?#iefix') format('embedded-opentype'),
    url('//at.alicdn.com/t/font_w71lovnj7adobt9.woff') format('woff'),
    url('//at.alicdn.com/t/font_w71lovnj7adobt9.ttf') format('truetype'),
    url('//at.alicdn.com/t/font_w71lovnj7adobt9.svg#iconfont') format('svg');
  }
  .icon {
    font-family:"icon" !important;
    font-size:18px;
    font-style:normal;
    color: #ffffff;
  }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /*padding-top: 60px;*/
  .content{
    background: #F5F5F5;
  }
  .cheader{
    padding-top: px2rem(100px);
  }
  .tabar {
    margin-bottom: px2rem(113px);
  }
  //渐变动效
    .slide-left-enter-active,
    .slide-left-leave-active {
      transition: all .1s ease-in;
      opacity: 1;
    }
  .slide-left-enter,
  .slide-left-leave-active {
    opacity: 0;
  }

  //左滑动效
  // .slide-left-enter-active {
     //   animation: slideLeft .3s;
     // }
  }

  @keyframes slideLeft {
    from {
      transform: translate3d(100%, 0, 0);
      visibility: visible;
    }

    to {
      transform: translate3d(0, 0, 0);
    }
}
</style>
