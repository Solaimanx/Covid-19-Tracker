(this.webpackJsonpcovid19tracker=this.webpackJsonpcovid19tracker||[]).push([[0],{49:function(e,n,t){},51:function(e,n,t){},57:function(e,n,t){"use strict";t.r(n);var c=t(10),r=t(0),a=t.n(r),i=t(7),s=t.n(i),u=(t(49),t(33)),o=t.n(u),d=t(35),j=t(40),l=(t(51),t(84)),h=t(88),f=t(89);var p=function(){var e=Object(r.useState)([]),n=Object(j.a)(e,2),t=n[0],a=n[1];return Object(r.useEffect)((function(){(function(){var e=Object(d.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://disease.sh/v3/covid-19/countries").then((function(e){return e.json()})).then((function(e){var n=e.map((function(e){return{name:e.country,value:e.countryInfo.ios2}}));a(n)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(c.jsx)("div",{className:"app",children:Object(c.jsxs)("div",{className:"app__header",children:[Object(c.jsx)("h1",{children:"COVID 19 TRACKER1"}),Object(c.jsx)(l.a,{className:"app__dropdown",children:Object(c.jsxs)(h.a,{veriant:"outlined",value:"abc",children:[Object(c.jsx)(f.a,{value:"worldwide",children:"Worldwide"}),t.map((function(e){return Object(c.jsx)(f.a,{value:e.value,children:e.name})}))]})})]})})},v=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,91)).then((function(n){var t=n.getCLS,c=n.getFID,r=n.getFCP,a=n.getLCP,i=n.getTTFB;t(e),c(e),r(e),a(e),i(e)}))};s.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(p,{})}),document.getElementById("root")),v()}},[[57,1,2]]]);
//# sourceMappingURL=main.8ded18f0.chunk.js.map