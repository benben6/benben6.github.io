(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-220afe18"],{a090:function(n,t,e){},cc07:function(n,t,e){"use strict";var i=e("a090"),a=e.n(i);a.a},d624:function(n,t,e){"use strict";e.r(t);var i=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("van-tabs",{staticClass:"affairs-tab-box",attrs:{"title-active-color":n.$t("skin.greenColor"),color:n.$t("skin.greenColor")},on:{change:n.changeHandle},model:{value:n.innerActive,callback:function(t){n.innerActive=t},expression:"innerActive"}},n._l(n.options,(function(n,t){return e("van-tab",{key:t,attrs:{title:n.title,badge:n.badgeNum?n.badgeNum:""}})})),1)},a=[],c=(e("c5f6"),{props:{value:[Number],options:{type:Array,default:function(){return[]}}},watch:{value:function(){this.innerActive=this.value},innerActive:function(){this.$emit("input",this.innerActive)}},data:function(){return{innerActive:this.value}},methods:{changeHandle:function(n,t){this.$emit("change",{index:n,title:t})}}}),r=c,o=(e("cc07"),e("2877")),u=Object(o["a"])(r,i,a,!1,null,null,null);t["default"]=u.exports}}]);