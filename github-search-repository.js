require=function(r,e,n){function t(n,o){function i(r){return t(i.resolve(r))}function f(e){return r[n][1][e]||e}if(!e[n]){if(!r[n]){var c="function"==typeof require&&require;if(!o&&c)return c(n,!0);if(u)return u(n,!0);var l=new Error("Cannot find module '"+n+"'");throw l.code="MODULE_NOT_FOUND",l}i.resolve=f;var s=e[n]=new t.Module(n);r[n][0].call(s.exports,i,s,s.exports)}return e[n].exports}function o(r){this.id=r,this.bundle=t,this.exports={}}var u="function"==typeof require&&require;t.isParcelRequire=!0,t.Module=o,t.modules=r,t.cache=e,t.parent=u;for(var i=0;i<n.length;i++)t(n[i]);return t}({6:[function(require,module,exports) {
var e=document.getElementById("submit");e.addEventListener("click",function(e){var t=document.getElementById("textForm").value;fetch("https://api.github.com/search/repositories?q="+t+"&sort=stars",{method:"GET"}).then(function(e){return e.json()}).catch(function(e){return console.error("Error:",e)}).then(function(e){console.log("Success:",e);for(var t=document.getElementById("container"),r="",s=0;s<e.items.length;s++){var n=e.items[s].clone_url;r+='<div class="user_cell">'+('<div class="user_img"><image class="user_image" src='+e.items[s].owner.avatar_url+"></div>")+('<div class="user_info">'+('<div class="owner_name">'+e.items[s].owner.login+"</div>")+("<a href="+n+"> "+n+"</a>")+('<div class="star">★：'+e.items[s].stargazers_count+"</div>")+"</div>")+"</div>"}t.innerHTML=r})});
},{}]},{},[6])