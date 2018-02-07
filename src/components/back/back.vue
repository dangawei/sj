<template>
  <div class="back-icon" @click="goback">
    <span class="glyphicon glyphicon-chevron-left d-text-center"></span>
  </div>
</template>

<style>
  .back-icon{
    width: 22px;
    height: 22px;
    background-color: #000000;
    border-radius: 50%;
    margin-left: 10px;
    margin-top:10px;
  }
  .back-icon>span{
    background-color: #fff;
  }
</style>

<script>
  export default{
    data(){
      return{

      }
    },
    mounted(){

    },
    methods:{
      goback(){
        this.$router.go(-1);
      }
    }
  }
</script>
