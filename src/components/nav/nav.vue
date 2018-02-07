<template>
  <div class="y-nav">
    <div class="y_nav_h">
      <img src="../../assets/images/topic_man.png" alt="">
      <span>生活处处有精彩，嗨起来</span>
    </div>
    <ul>
      <!--<keep-alive>-->
        <li class="changeList" v-for="(item,index) in channels">
          <i class="icon">&#xe733;</i>
          <span>{{item.list_name}}</span>
        </li>
      <!--</keep-alive>-->

      <li @click="toChangenav">
          <i class="icon">&#xe63c;</i>
          <span>更多</span>
      </li>
    </ul>

  </div>
</template>

<script>
  export default {
    data() {
      return {
        list:[]
      }
    },
    created() {
      this.$store.dispatch('acChannels')
      this.$store.commit('loading', true)
    },
    mounted(){
      this.$store.dispatch('acChannels')
      this.$store.commit('loading', true)
    },
    computed: {
      channels() {
        console.log(this.$store.state.channels)
        return this.$store.state.channels
      }
    },

    methods:{
      toChangenav() {
        this.$router.push('/changeNav')
      },
//      listItem(){
//        this.channels();
//        console.log(this.channels())
//        for (var item of this.$store.state.channels){
//          this.list.push(item);
//          if (list.length>7){
//            return list;
//          }
//        }
//      }
    }
  }
</script>

<style scoped lang="scss">
  @import '../../assets/css/function';

  .y-nav {
    background: #fff;
    padding-bottom: px2rem(20px);
    .y_nav_h {
      width: px2rem(380px);
      margin: 0 auto;
      text-align: center;
      padding-top: 5px;
      position: relative;
      padding-bottom: 3px;
      border-bottom: 1px solid #000;
      img {
        width: px2rem(60px);
        height: px2rem(55px);
        margin-left: -5px;
        vertical-align: middle;
      }
    }
    ul {
      display: flex;
      margin-top: px2rem(15px);
      flex-wrap: wrap;
      li {
        width: 25%;
        text-align: center;
        .icon {
          display: block;
          width: px2rem(110px);
          height: px2rem(110px);
          line-height: px2rem(110px);
          background: #2ad2c9;
          font-size: 22px;
          margin: 0 auto;
          border-radius: 45%;
          margin-bottom: px2rem(15px);
        }
        span {
          font-size: 13px;
        }
      }
    }
  }

</style>
