<template>
  <!--<my-back></my-back>-->
  <div class="wrap clear" id="wrapImg">
    <div class="wrap-img clear">
      <div class="card-item" v-for="(item,index) in cardArrs"
           :class="[item.bgColor ,'z'+item.zIndex, 't'+item.zIndex*30]"
           @click.stop="changeArrIndex(index)">
        <div class="icon-head">
          <img :src="item.img" alt="">
        </div>
        <span>{{item.text}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { setCookie,getCookie,delCookie } from '../../assets/js/cookie.js'
//import { vueTouch } from '../../assets/js/touch.js'
import myBack from '../../components/footer/footer.vue'
//import { Toast, MessageBox } from 'mint-ui';
	export default{
		data(){
			return{
				name: '',
        components:{
          myBack
        },
        cardArrs: [
          {
            text: "card-1",
            zIndex: 1,
            bgColor: "red",
            img:require("../../assets/images/01.jpg")
          },
          {
            text: "card-2",
            zIndex: 2,
            bgColor: "blue",
            img:require("../../assets/images/02.jpg")
          },
          {
            text: "card-3",
            zIndex: 3,
            bgColor: "yellow",
            img:require("../../assets/images/03.jpg")
          },
          {
            text: "card-4",
            zIndex: 4,
            bgColor: "green",
            img:require("../../assets/images/04.jpg")
          },
          {
            text: "card-5",
            zIndex: 5,
            bgColor: "white",
            img:require("../../assets/images/01.jpg")
          }
        ],
        maxLength: 5
			}
		},
		mounted(){

		},
		methods:{
      changeArrIndex(index){
//                if(index == this.maxLength - 1) {
//                    return;
//                }
        let _zIndex = "";
        let _newArr = [];
        this.cardArrs.forEach((item,idx)=> {
          let _obj = {};
          if(idx == index) {
            _zIndex = item.zIndex;
            _obj.zIndex = this.maxLength;
            _obj.bgColor = item.bgColor;
            _obj.text = item.text;
            _obj.img=item.img;
            _obj.flag = true;
            _newArr.push(_obj)

          }else {
            _newArr.push(item)
          }
//          console.log(_newArr);
        });
        _newArr.forEach((obj)=>{
          if(obj.zIndex == this.maxLength && !obj.flag) {
            obj.zIndex = _zIndex;
          }
        });
        _newArr.map((item)=>{
          delete item.flag;
        });
        this.cardArrs = _newArr;
      }
		},

	}
</script>
<style lang="scss" scoped>
  .wrap{
    width: 100%;
    height: 100vh;
    background-color: #000000;
  }
  .wrap-img{
    width: 250px;
    position: relative;
    perspective:600px;
    margin: 0 auto;
  }
  .card-item {
    width: 250px;
    height: 300px;
    line-height: 198px;
    text-align: center;
    font-size: 18px;
    border-radius: 5px;
    position: absolute;
  }
  .card-item.t30 {
    top: 0px;
    animation: positionAnimate1 1.1s
  }
  .card-item.t60 {
    top: 30px;
    animation: positionAnimate2 0.9s
  }
  .card-item.t90 {
    top: 80px;
    animation: positionAnimate3 0.7s
  }
  .card-item.t120 {
    top: 150px;
    /*box-shadow: 0 0 2px 2px #fff;*/
    animation: positionAnimate4 0.5s
  }
  .card-item.t150 {
    top: 240px;
    /*box-shadow: 0 0 2px 2px #fff;*/
    animation: positionAnimate5 0.5s
  }
  @keyframes positionAnimate5 {
    0% {
      opacity: 0;
      transform: scale(1.0);
    }
    100% {
      transform: scale(1.2);
      opacity: 1;
    }
  }
  .card-item.z1 {
    z-index:  1;
    transform: scale(0.8);
  }
  .card-item.z2 {
    z-index:  2;
    transform: scale(0.9);
  }
  .card-item.z3 {
    z-index:  3;
    transform: scale(1.0);
  }
  .card-item.z4 {
    z-index:  4;
    transform: scale(1.1);
  }
  .card-item.z5 {
    z-index:  5;
    transform: scale(1.2);
  }
  .card-item.red {
    border: 1px solid red;
    background-color: #a94442;
  }
  .card-item.blue {
    border: 1px solid blue;
    background-color: #3190e8;
  }
  .card-item.yellow {
    border: 1px solid yellow;
    background-color: yellow;
  }
  .card-item.green {
    border: 1px solid green;
    background-color: #4cae4c;
  }
  .card-item.white {
    border: 1px solid black;
    background-color: white;
  }
  .icon-head{
    width: 20px;
    height: 20px;
    border-radius: 50%;
    position: absolute;
    left: 50%;
    top: -7px;
    transform: translateX(-50%);
  }
  .icon-head>img{
    display: block;
    width: 20px;
    height: 20px;
    width: 100%;
    border-radius: 50%;
  }
</style>
