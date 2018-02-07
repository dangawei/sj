<template>
	<div>
		<div class="login-wrap" v-show="showLogin">
			<h3>登录</h3>
			<p v-show="showTishi">{{tishi}}</p>
			<input type="text" placeholder="请输入用户名" v-model="username">
			<input type="password" placeholder="请输入密码" v-model="password">
			<button v-on:click="login">登录</button>
			<span v-on:click="ToRegister">没有账号？马上注册</span>
			<p v-on:click="ToChange" v-show="showPassword" class="pointer">忘记密码</p>
		</div>

		<div class="register-wrap" v-show="showRegister">
			<h3>注册</h3>
			<p v-show="showTishi">{{tishi}}</p>
			<input type="text" placeholder="请输入用户名" v-model="newUsername">
			<input type="password" placeholder="请输入密码" v-model="newPassword">
			<button v-on:click="register">注册</button>
			<span v-on:click="ToLogin">已有账号？马上登录</span>
		</div>
    <div class="change-wrap" v-show="showChange">
      <h3>修改密码</h3>
      <p v-show="showTishi">{{tishi}}</p>
      <input type="text" placeholder="请输入用户名" v-model="oldUsername">
      <input type="password" placeholder="请输入新密码" v-model="changePassword">
      <button v-on:click="change">确定</button>
      <button v-on:click="Formchange">取消</button>
    </div>
    <div class="third-login">
      <div class="tl-text">
        <p>其他方式登录</p>
      </div>
      <div class="d-flex d-flex-center">
        <div class="d-item" v-for="(item,index) in data" @click="ThirdLogin(item,index)">
          <img :src="item.path" :alt="item.name">
        </div>
        <!--<div class="d-item">-->
          <!--<img src="static/images/qq.png" alt="QQ">-->
        <!--</div>-->
        <!--<div class="d-item">-->
          <!--<img src="../../assets/wb.png" alt="微博">-->
        <!--</div>-->
        <!--<div class="d-item">-->
          <!--<img src="../../assets/zfb.png" alt="支付宝">-->
        <!--</div>-->
      </div>
    </div>
	</div>

</template>

<style>
	.login-wrap{text-align:center;}
	input{display:block; width:250px; height:40px; line-height:40px; margin:0 auto; margin-bottom: 10px; outline:none; border:1px solid #888; padding:10px; box-sizing:border-box;}
	p{color:red;}
	button{display:block; width:250px; height:40px; line-height: 40px; margin:0 auto; border:none; background-color:#41b883; color:#fff; font-size:16px; margin-bottom:5px;}
	span{cursor:pointer;}
	span:hover{color:#41b883;}
  .pointer{
    cursor: pointer;
  }
  .d-item{
    flex-shrink: 1;
    flex-grow:1;
    flex-basis: auto;
  }
  .d-item{
    max-width: 48px;
    margin-right: 10px;
  }
  .d-item:last-child{
    margin-right: 0;
  }
  .d-item>img{
    width: 100%;
  }
  .tl-text>p{
    color: #888;
  }
</style>

<script>
import { setCookie,getCookie } from '../../assets/js/cookie.js'
import datas from '../../../static/json/data.json'
	export default{
		data(){
			return{
				username: '',
				password: '',
				newUsername: '',
				newPassword: '',
        oldUsername:'',
        changePassword:'',
				tishi: '',
				showTishi: false,
				showLogin: true,
				showRegister: false,
        showChange:false,
        showPassword:true,
        data:datas.thirdLogin
			}
		},
		mounted(){
			if(getCookie('username')){
				this.$router.push('/home')
			}
		},
		methods: {
			login(){
				if(this.username == "" || this.password == ""){
					alert("请输入用户名或密码")
				}else{
					let data = {'username':this.username,'password':this.password}
					// let datas=JSON.stringify(data).serialize();
					// console.log(data);
					this.$http.post('http://localhost:3000/login/lo',data).then((res)=>{
						console.log(res.body)
            var r=eval(res.body);
						if(r.data == 1000){
							this.tishi = "该用户不存在"
							this.showTishi = true
						}else if(r.data == 0){
							this.tishi = "密码输入错误"
							this.showTishi = true
						}else if(r.data == 'admin'){
							this.$router.push('/main')
						}else{
							this.tishi = "登录成功"
							this.showTishi = true
							setCookie('username',this.username,1000*60)
							setTimeout(function(){
								this.$router.push({path:'home',query:{id:1}})
							}.bind(this),1000)
						}
					})
				}
			},
			ToRegister(){
				this.showRegister = true
				this.showLogin = false
        this.showChange=false
        this.showTishi=false
        this.showPassword=false
			},
			ToLogin(){
				this.showRegister = false
        this.showChange=false
				this.showLogin = true
        this.showPassword=true
			},
      ToChange(){
			  this.showChange=true
        this.showRegister=false
        this.showLogin=false
        this.showTishi=false
      },
      Formchange(){
        this.showRegister = false
        this.showChange=false
        this.showLogin = true
        this.showPassword=true
      },
			register(){
				if(this.newUsername == "" || this.newPassword == ""){
					alert("请输入用户名或密码")
				}else{
					let data = {'username':this.newUsername,'password':this.newPassword}
					this.$http.post('http://localhost:3000/login/reg',data).then((res)=>{
						console.log(res.body)
            var r=eval(res.body);
						if(r.data == 1){
							this.tishi = "注册成功"
							this.showTishi = true
							this.username = ''
							this.password = ''
							setTimeout(function(){
                this.showRegister = false
                this.showChange=false
                this.showLogin = true
                this.showPassword=true
                this.showTishi=false
							}.bind(this),1000)
						}else {
						  this.tishi=r.data;
            }
					})
				}
			},
      change(){
        if(this.oldUsername == "" || this.changePassword == ""){
          alert("请输入用户名或新密码")
        }else{
          let data={'username':this.oldUsername,'password':this.changePassword};
          this.$http.post('http://localhost:3000/login/change',data).then((res)=>{
            console.log(res.body)
            var r=eval(res.body);
            if(r.data == 1){
              this.tishi = "修改成功"
              this.showTishi = true
              this.username = ''
              this.password = ''
              setTimeout(function(){
                this.showRegister = false
                this.showChange=false
                this.showLogin = true
                this.showPassword=true
                this.showTishi=false
              }.bind(this),1000)
            }else {
              this.tishi=r.data;
            }
          })
        }
      },//change
      ThirdLogin(obj,ind){
        console.log(obj);
        console.log(ind);
        switch (ind){
          case 0:
            this.$router.push("");
          case 1:
            this.$router.push("");
          case 2:
            this.$router.push("");
          case 3:
            this.$router.push("");
        }
      }
		}//methods
	}
</script>
