(function(t){function e(e){for(var i,a,c=e[0],r=e[1],l=e[2],h=0,m=[];h<c.length;h++)a=c[h],s[a]&&m.push(s[a][0]),s[a]=0;for(i in r)Object.prototype.hasOwnProperty.call(r,i)&&(t[i]=r[i]);u&&u(e);while(m.length)m.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],i=!0,c=1;c<n.length;c++){var r=n[c];0!==s[r]&&(i=!1)}i&&(o.splice(e--,1),t=a(a.s=n[0]))}return t}var i={},s={app:0},o=[];function a(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=i,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)a.d(n,i,function(e){return t[e]}.bind(null,i));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],r=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var u=r;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var i=n("64a9"),s=n.n(i);s.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var i=n("2b0e"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"container"},[n("h1",[t._v("Cubeclick")]),n("div",{staticClass:"counter"},[n("span",[t._v("Points: "+t._s(t.points))]),n("span",[t._v("Combo: "+t._s(t.combo)),t.combo==t.maxCombo?n("span",[t._v("MAX")]):t._e()])]),n("div",{staticClass:"game-container"},[n("div",{staticClass:"game"},[n("div",{staticClass:"game-content"},t._l(t.initial,function(e,i){return n("div",{class:{red:e.active,sub_container:e.sub_container,item:!e.sub_container},on:{click:function(n){return n.stopPropagation(),t.selectParent(e)}}},t._l(e.childs,function(e){return n("CubeItem",{attrs:{item:e},on:{callback:t.selectParent}})}),1)}),0)]),n("div",{staticClass:"history"},[n("h3",[t._v("History")]),n("ul",t._l(t.history,function(e){return n("li",[t._v(t._s(e.points))])}),0)])])])])},o=[],a=(n("55dd"),n("ac6a"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:{red:t.item.active,sub_container:t.item.sub_container,item:!t.item.sub_container},on:{click:function(e){return e.stopPropagation(),t.onClick(t.item)}}},t._l(t.item.childs,function(e){return n("CubeItem",{attrs:{item:e},on:{callback:t.onClick}})}),1)}),c=[],r={name:"CubeItem",props:["item","callback"],methods:{showItems:function(){console.log(this.items)},onClick:function(t){this.$emit("callback",t)}}},l=r,u=n("2877"),h=Object(u["a"])(l,a,c,!1,null,null,null),m=h.exports,f={name:"app",components:{CubeItem:m},data:function(){return{initial:[{active:!1,childs:[],sub_container:!1},{active:!1,childs:[],sub_container:!1},{active:!1,childs:[],sub_container:!1},{active:!1,childs:[],sub_container:!1}],allElements:[],points:0,started:!1,history:[],combo:0,maxCombo:10,latestClick:!1}},methods:{selectParent:function(t){t.active?(this.points++,this.combo<this.maxCombo&&this.combo++,this.latestClick=new Date,this.combo>2&&(this.points+=Math.round(this.combo/2)),t.active=!1,t.childs=[{active:!1,childs:[]},{active:!1,childs:[]},{active:!1,childs:[]},{active:!1,childs:[]}],this.allElements=this.allElements.filter(function(e){return e!==t}),this.allElements=this.allElements.concat(t.childs),t.sub_container=!0):this.restart()},clearActives:function(){this.allElements.forEach(function(t){t.active=!1})},activeRandom:function(){this.clearActives();var t=Math.abs(this.allElements.length/3),e=0;while(e<t){var n=Math.floor(Math.random()*this.allElements.length);this.allElements[n].active||(this.allElements[n].active=!0,e++)}},compare:function(t,e){return t.points>e.points?-1:t.points<e.points?1:0},restart:function(){this.history.push({points:this.points}),this.history=this.history.sort(this.compare),this.combo=0,this.latestClick=!1,this.initial=[{active:!1,childs:[],sub_container:!1},{active:!1,childs:[],sub_container:!1},{active:!1,childs:[],sub_container:!1},{active:!1,childs:[],sub_container:!1}],this.points=0,this.allElements=this.allElements.concat(this.initial)},startInterval:function(){this.interval=setInterval(function(){this.activeRandom()}.bind(this),1e3)},clearIntervals:function(){clearInterval(this.interval),clearInterval(this.comboTimer)},checkCombo:function(){var t=new Date;t.setSeconds(t.getSeconds()-1.5),this.latestClick&&this.latestClick<t&&(this.combo=0)}},created:function(){this.allElements=this.allElements.concat(this.initial),this.comboTimer=setInterval(this.checkCombo.bind(this),500),this.startInterval()},beforeDestroy:function(){this.clearIntervals()}},v=f,d=(n("034f"),Object(u["a"])(v,s,o,!1,null,null,null)),p=d.exports;i["a"].config.productionTip=!1,new i["a"]({render:function(t){return t(p)}}).$mount("#app")},"64a9":function(t,e,n){}});
//# sourceMappingURL=app.925e6daa.js.map