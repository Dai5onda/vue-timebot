(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-60ec"],{LYAf:function(t,n,i){},c11S:function(t,n,i){"use strict";var s=i("gTgX");i.n(s).a},dx7s:function(t,n,i){},eplk:function(t,n,i){"use strict";var s=i("LYAf");i.n(s).a},fYdh:function(t,n,i){"use strict";var s=i("dx7s");i.n(s).a},gTgX:function(t,n,i){},ntYl:function(t,n,i){"use strict";i.r(n);var s=i("Yfch"),e={name:"SocialSignin",methods:{wechatHandleClick:function(t){alert("ok")},tencentHandleClick:function(t){alert("ok")}}},o=(i("eplk"),i("KHd+")),a=Object(o.a)(e,function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",{staticClass:"social-signup-container"},[i("div",{staticClass:"sign-btn",on:{click:function(n){t.wechatHandleClick("wechat")}}},[i("span",{staticClass:"wx-svg-container"},[i("svg-icon",{staticClass:"icon",attrs:{"icon-class":"wechat"}})],1),t._v(" 微信\n  ")]),t._v(" "),i("div",{staticClass:"sign-btn",on:{click:function(n){t.tencentHandleClick("tencent")}}},[i("span",{staticClass:"qq-svg-container"},[i("svg-icon",{staticClass:"icon",attrs:{"icon-class":"qq"}})],1),t._v(" QQ\n  ")])])},[],!1,null,"6b9f09a3",null);a.options.__file="socialsignin.vue";var l={name:"Login",components:{SocialSign:a.exports},data:function(){return{loginForm:{email:"",password:""},loginRules:{email:[{required:!0,trigger:"input",validator:function(t,n,i){Object(s.a)(n)?i():i(new Error("Please enter the correct email"))}}],password:[{required:!0,trigger:"input",validator:function(t,n,i){n.length<6?i(new Error("The password can not be less than 6 digits")):i()}}]},passwordType:"password",loading:!1,showDialog:!1,redirect:void 0}},watch:{$route:{handler:function(t){this.redirect=t.query&&t.query.redirect},immediate:!0}},methods:{showPwd:function(){"password"===this.passwordType?this.passwordType="":this.passwordType="password"},handleLogin:function(){var t=this;this.$refs.loginForm.validate(function(n){if(!n)return console.log("error submit!!"),!1;t.loading=!0,t.$store.dispatch("LoginByUsername",{type:"login",payload:t.loginForm}).then(function(){t.loading=!1,t.$router.push({path:t.redirect||"/"})}).catch(function(){t.loading=!1})})}}},r=(i("c11S"),i("fYdh"),Object(o.a)(l,function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",{staticClass:"login-container"},[i("el-form",{ref:"loginForm",staticClass:"login-form",attrs:{model:t.loginForm,rules:t.loginRules,"auto-complete":"on","label-position":"left"}},[i("div",{staticClass:"title-container"},[i("h3",{staticClass:"title"},[t._v(t._s(t.$t("login.title")))])]),t._v(" "),i("el-form-item",{attrs:{prop:"email"}},[i("span",{staticClass:"svg-container"},[i("svg-icon",{attrs:{"icon-class":"user"}})],1),t._v(" "),i("el-input",{attrs:{placeholder:t.$t("login.username"),name:"email",type:"text","auto-complete":"on"},model:{value:t.loginForm.email,callback:function(n){t.$set(t.loginForm,"email",n)},expression:"loginForm.email"}})],1),t._v(" "),i("el-form-item",{attrs:{prop:"password"}},[i("span",{staticClass:"svg-container"},[i("svg-icon",{attrs:{"icon-class":"password"}})],1),t._v(" "),i("el-input",{attrs:{type:t.passwordType,placeholder:t.$t("login.password"),name:"password","auto-complete":"on"},nativeOn:{keyup:function(n){return"button"in n||!t._k(n.keyCode,"enter",13,n.key,"Enter")?t.handleLogin(n):null}},model:{value:t.loginForm.password,callback:function(n){t.$set(t.loginForm,"password",n)},expression:"loginForm.password"}}),t._v(" "),i("span",{staticClass:"show-pwd",on:{click:t.showPwd}},[t.passwordType?i("svg-icon",{attrs:{"icon-class":"hide"}}):i("svg-icon",{attrs:{"icon-class":"display"}})],1)],1),t._v(" "),i("el-button",{staticStyle:{width:"100%","margin-bottom":"30px"},attrs:{loading:t.loading,type:"primary"},nativeOn:{click:function(n){return n.preventDefault(),t.handleLogin(n)}}},[t._v(t._s(t.$t("login.logIn")))])],1)],1)},[],!1,null,"18d2a9c3",null));r.options.__file="index.vue";n.default=r.exports}}]);