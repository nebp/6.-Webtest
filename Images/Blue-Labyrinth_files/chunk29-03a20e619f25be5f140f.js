webpackJsonp([29],{458:function(i,t,s){"use strict";var o=s(44),n="web.com.pinterest.www",a={request:function e(){if(o.isAuthenticated()&&window.safari&&window.safari.pushNotification)try{var i=window.safari.pushNotification.permission(n);"default"===i.permission&&window.safari.pushNotification.requestPermission("https://"+window.location.hostname+"/_/_/push",n,{},function(){})}catch(t){}}};i.exports=a}});