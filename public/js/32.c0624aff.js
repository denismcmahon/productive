"use strict";(self["webpackChunkclient"]=self["webpackChunkclient"]||[]).push([[32],{6032:function(e,r,s){s.r(r),s.d(r,{default:function(){return R}});var a=s(3396),o=s(9242);const n=(0,a._)("h2",null,"Register",-1),l={class:"row"},t={class:"card mx-auto"},i=(0,a._)("div",{class:"card-header text-white bg-primary"},[(0,a._)("h4",null,"Register")],-1),m={class:"card-body"},d={class:"form-group"},c=(0,a._)("label",{for:"username"},"Username",-1),u={class:"form-group"},p=(0,a._)("label",{for:"name"},"Name",-1),f={class:"form-group"},w=(0,a._)("label",{for:"email"},"Email",-1),_={class:"form-group"},h=(0,a._)("label",{for:"password"},"Password",-1),g={class:"form-group"},v=(0,a._)("label",{for:"confirm_password"},"Confirm Password",-1),y=(0,a._)("button",{class:"btn btn-primary"},"Register",-1),b=(0,a.Uk)("      "),U=(0,a.Uk)("Already have an account?");function k(e,r,s,k,x,V){const C=(0,a.up)("router-link");return(0,a.wg)(),(0,a.iD)("div",null,[n,(0,a._)("div",l,[(0,a._)("div",t,[i,(0,a._)("div",m,[(0,a._)("form",{onSubmit:r[5]||(r[5]=(0,o.iM)(((...e)=>V.registerUser&&V.registerUser(...e)),["prevent"]))},[(0,a._)("div",d,[c,(0,a.wy)((0,a._)("input",{id:"username",type:"text",placeholder:"Username",name:"username","onUpdate:modelValue":r[0]||(r[0]=e=>x.username=e),class:"form-control"},null,512),[[o.nr,x.username]])]),(0,a._)("div",u,[p,(0,a.wy)((0,a._)("input",{id:"name",type:"text",placeholder:"Name",name:"name","onUpdate:modelValue":r[1]||(r[1]=e=>x.name=e),class:"form-control"},null,512),[[o.nr,x.name]])]),(0,a._)("div",f,[w,(0,a.wy)((0,a._)("input",{id:"email",type:"text",placeholder:"Email",name:"email","onUpdate:modelValue":r[2]||(r[2]=e=>x.email=e),class:"form-control"},null,512),[[o.nr,x.email]])]),(0,a._)("div",_,[h,(0,a.wy)((0,a._)("input",{id:"password",type:"password",placeholder:"Password",name:"password","onUpdate:modelValue":r[3]||(r[3]=e=>x.password=e),class:"form-control"},null,512),[[o.nr,x.password]])]),(0,a._)("div",g,[v,(0,a.wy)((0,a._)("input",{id:"confirm_password",type:"password",placeholder:"Confirm Password",name:"confirm_password","onUpdate:modelValue":r[4]||(r[4]=e=>x.confirm_password=e),class:"form-control"},null,512),[[o.nr,x.confirm_password]])]),y,b,(0,a.Wm)(C,{to:"/login",class:"card-link"},{default:(0,a.w5)((()=>[U])),_:1})],32)])])])])}var x=s(65),V={data(){return{username:"",password:"",confirm_password:"",name:"",email:""}},methods:{...(0,x.nv)(["register"]),registerUser(){let e={username:this.username,password:this.password,confirm_password:this.confirm_password,email:this.email,name:this.name};this.register(e).then((e=>{e.data.success&&this.$router.push("login")}))}}},C=s(89);const P=(0,C.Z)(V,[["render",k]]);var R=P}}]);
//# sourceMappingURL=32.c0624aff.js.map