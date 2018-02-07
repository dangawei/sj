<template lang="html">
  <div>
    <div class="header">
      <img src="../../../assets/images/back.png" alt="" @click="backIndex">
      <span>频道管理</span>
      <span>隐藏</span>
    </div>
    <div class="content">
      <div class="deleteChannel">
        <div class="title deleteTitle">点击删除以下频道</div>
        <ul>
          <li v-for="(item, index) in channels" class="channelCss" @click="deleteChannel(item, index)">{{item.list_name}}</li>
        </ul>
      </div>
      <div class="addChannel">
        <div class="title addTitle">点击添加以下频道</div>
        <ul>
          <li v-for="(item, index) in addChannel" class="channelCss" @click="appendChannel(item, index)">{{item.list_name}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
//  import data from '../../../assets/json/data.json'
export default {
  data() {
    return {
      addChannel: [],
//      list:data.navList
    }
  },
  computed: {
    channels() {
      return this.$store.state.channels
    }
  },
  methods: {
    backIndex() {
      this.$router.push("/topic");
//      this.$store.dispatch('acGetData', '头条')
      this.$store.state.isActive = 0
      this.$store.state.load = true
      this.$store.state.channelIndex = 0
    },
    deleteChannel(item, index) {
      if(index !== 0) {
        this.$store.commit('increment', index)
        this.addChannel.push(item)
//        console.log(this.$store.state.channels.length)
      }
    },
    appendChannel(item, index) {
      this.addChannel.splice(index, 1)
      this.$store.commit('decrement', item)
    }
  }
}
</script>

<style lang="css" scoped>
.header {
  width: 100%;
  height: 1.33rem;
  background-color: #d43d3d;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.header img {
  width: 25px;
  height: 25px;
  padding-left: .19rem;
}
.header span:last-child {
  opacity: 0;
}
.content {
  position: absolute;
  top: 1.33rem;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #f8f8f8;
}
.title {
  padding-left: .27rem;
  color: #666;
  font-size: 12px;
}
.deleteTitle {
  padding-bottom: 10px;
  padding-top: 4px;
}
.addTitle {
  padding-top: 20px;
  padding-bottom: 10px;
}
ul{
  text-align: left;
}
li {
  display: inline-block;
}
.channelCss {
  width: 1.90rem;
  height: .90rem;
  border: 1px solid #ccc;
  margin: .13rem .27rem;
  text-align: center;
  line-height: .90rem;
  font-size: 16px;
}
</style>
