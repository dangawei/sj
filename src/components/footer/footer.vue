<template>
  <section id="foot_guide" v-show="isShowTabbar">
    <section @click = "gotoAddress('/')" class="guide_item">
      <div class="icon_style">
        <img src="../../assets/images/hbao.png" alt="话报">
      </div>
      <span>话报</span>
    </section>
    <section @click = "gotoAddress('/topic')" class="guide_item">
      <div class="icon_style">
        <img src="../../assets/images/hti.png" alt="话题">
      </div>
      <span>话题</span>
    </section>
    <section @click = "gotoAddress('/concern')" class="guide_item">
      <div class="icon_style">
        <img src="../../assets/images/gzhu.png" alt="关注">
      </div>
      <span>关注</span>
    </section>
    <section @click = "gotoAddress('/host')" class="guide_item">
      <div class="icon_style">
        <img src="../../assets/images/wde.png" alt="我的">
      </div>
      <span>我的</span>
    </section>
  </section>
</template>

<script>

  export default {
    data(){
      return{

      }
    },
    computed:{
      isShowTabbar(){
        let routeLength = this.$route.path.split('/').length
        return routeLength > 2 ? false : true
      }
    },
    methods:{
      gotoAddress(path){
        this.$router.push(path)
      }

    }
  }
</script>

<style lang="scss" scoped>
  @import '../../style/footer.scss';

  #foot_guide{
    background-color: #e5e5e5;
    position: fixed;
    z-index: 100;
    left: 0;
    right: 0;
    bottom: 0;
    @include wh(100%, 1.5rem);
    display: flex;
    box-shadow: 0 -0.026667rem 0.053333rem rgba(0,0,0,.1);
    border-top: 1px solid #cccccc;
  }
  img {
    vertical-align: top;
  }
  .guide_item{
    flex: 1;
    display: flex;
    text-align: center;
    flex-direction: column;
    align-items: center;
    .icon_style{
      @include wh(.68rem, .68rem);
      margin-bottom: .1rem;
      margin-top: .1rem;
      fill: #ccc;
    }
    .icon_style>img{
      width: 100%;
    }
    span{
      @include sc(.45rem, #666);
    }
  }

</style>
