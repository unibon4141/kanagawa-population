(this.webpackJsonpprototype=this.webpackJsonpprototype||[]).push([[0],{174:function(e,t,n){"use strict";n.r(t);var c=n(69),r=n(1),a=n(4),s=n(70),i=n(5),o=n(2),l=n.n(o),j=n(14),d=n(0);function x(e){var t=e.scale,n=(e.graphHeight,"#888"),c=t.range(),r=Object(a.a)(c,2),s=r[0],i=r[1];return Object(d.jsxs)("g",{children:[Object(d.jsx)("line",{x1:0,y1:s,x2:0,y2:i+2,stroke:n,strokeWidth:"2"}),Object(d.jsxs)("g",{children:[Object(d.jsx)("g",{transform:"translate(-80, 200) rotate(-90)",children:Object(d.jsx)("text",{x:"0",y:"0",textAnchor:"end",dominantBaseline:"central",fontSize:"15",children:"\u4eba\u53e3"})}),t.ticks().map((function(e,c){return Object(d.jsxs)("g",{transform:"translate(0, ".concat(t(e),")"),children:[Object(d.jsx)("line",{x1:"0",y1:"0",x2:"5",y2:"0",stroke:n}),Object(d.jsx)("text",{x:"-8",y:"0",textAnchor:"end",dominantBaseline:"central",fill:"black",fontSize:"12",children:e})]},c)}))]})]})}function u(e){var t=e.scale,n=e.graphWidth,c="#888",r=n,s=t.range(),i=Object(a.a)(s,2),o=i[0],l=i[1];return Object(d.jsxs)("g",{children:[Object(d.jsx)("line",{x1:r,y1:o,x2:r,y2:l+2,stroke:c,strokeWidth:"2"}),Object(d.jsxs)("g",{children:[Object(d.jsx)("g",{transform:"translate(".concat(r,", 200) rotate(-90)"),children:Object(d.jsx)("text",{x:"30",y:"60",textAnchor:"end",dominantBaseline:"central",fontSize:"15",children:"\u4e16\u5e2f\u5e73\u5747\u4eba\u6570"})}),t.ticks().map((function(e,n){return Object(d.jsxs)("g",{transform:"translate(".concat(r,", ").concat(t(e),")"),children:[Object(d.jsx)("line",{x1:"0",y1:"0",x2:"-5",y2:"0",stroke:c}),Object(d.jsx)("text",{x:"30",y:"0",textAnchor:"end",dominantBaseline:"central",fill:"black",fontSize:"12",children:e})]},n)}))]})]})}function h(e){var t=e.scale,n=e.graphHeight,c="#888",r=n,s=t.range(),i=Object(a.a)(s,2),o=i[0],l=i[1];return Object(d.jsxs)("g",{children:[Object(d.jsx)("line",{x1:o,y1:r,x2:l+5,y2:r,stroke:c}),Object(d.jsxs)("g",{children:[Object(d.jsx)("g",{transform:"translate(400, ".concat(r+40,")"),children:Object(d.jsx)("text",{x:"0",y:"0",textAnchor:"end",dominantBaseline:"central",fontSize:"15",children:"\u5e74"})}),t.ticks().map((function(e,a){return Object(d.jsxs)("g",{transform:"translate(".concat(t(e),", 0)"),children:[Object(d.jsx)("line",{x1:"0",y1:n,x2:"0",y2:n-10,stroke:c}),Object(d.jsx)("text",{x:"0",y:r+15,textAnchor:"middle",dominantBaseline:"central",fontSize:"12",children:e})]},a)}))]})]})}var b=function(e){var t=e.scale,n=e.type,c=e.graphWidth;return"main"===n?Object(d.jsx)("g",{transform:"translate(150,0)",children:t.domain().map((function(e,n){return Object(d.jsxs)("g",{transform:"translate(".concat(c-80,", ").concat(20+15*n,")"),children:[Object(d.jsx)("circle",{r:"5",fill:t(e)}),Object(d.jsx)("text",{x:"10",fontSize:"11",dominantBaseline:"central",children:e})]},n)}))}):Object(d.jsx)("g",{transform:"translate(150,0)",children:t.domain().map((function(e,n){if(1===n)return Object(d.jsxs)("g",{transform:"translate(".concat(c-50,", ").concat(20+15*n,")"),children:[Object(d.jsx)("circle",{r:"5",fill:t(e)}),Object(d.jsx)("text",{x:"10",fontSize:"11",dominantBaseline:"central",children:e})]},n)}))})};var O=function(e){var t=e.target,n=e.colorScale,c=Object(i.useState)([]),s=Object(a.a)(c,2),o=s[0],u=s[1],O=.4*window.innerWidth,f=.5*window.innerHeight,p=10,g=100,m=180+g+O,v=p+50+f;if(Object(i.useEffect)((function(){Object(j.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("kanagawa3.json");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,u(n);case 7:case"end":return e.stop()}}),e)})))()}),[]),0===o.length||null===t)return Object(d.jsxs)("div",{children:[Object(d.jsx)("h2",{children:"\u5e02\u533a\u753a\u6751\u5225\u306e\u30b0\u30e9\u30d5"}),Object(d.jsx)("div",{style:{width:m,height:v}})]});var y=o.find((function(e){return e.name===t})),w=1970,k=y.population.filter((function(e){return null!==e[w]?(w+=5,!0):(w+=5,!1)})).map((function(e){var t=Object.keys(e)[0];return{year:t,population:e[t]}})),S=r.e().domain(r.a(k,(function(e){return e.year}))).range([0,O]).nice(),z=r.e().domain([0,r.a(k,(function(e){return e.population}))[1]]).range([f,0]);return Object(d.jsxs)("div",{class:"box",children:[Object(d.jsxs)("h2",{children:["\u5e02\u533a\u753a\u6751\u5225\u306e\u30b0\u30e9\u30d5 : ",t]}),Object(d.jsx)("div",{children:Object(d.jsxs)("svg",{viewBox:"".concat(-g," ").concat(-p," ").concat(m," ").concat(v),width:m,height:v,children:[Object(d.jsx)(b,{scale:n,type:"sub",graphWidth:O}),Object(d.jsx)(x,{scale:z,graphHeight:f}),Object(d.jsx)(h,{scale:S,graphHeight:f}),Object(d.jsx)("g",{children:k.map((function(e,t){var c=t>0?k[t-1]:null;if(t>0)return Object(d.jsx)("line",{x1:S(c.year),y1:z(c.population),x2:S(e.year),y2:z(e.population),stroke:n("population")},t)}))}),Object(d.jsx)("g",{children:k.map((function(e,t){return Object(d.jsx)("circle",{transform:"translate(".concat(S(e.year),",").concat(z(e.population),")"),cx:"0",cy:"0",r:"5",fill:n("population")},t)}))})]})})]})};var f=function(e){var t=e.scale,n=Object(i.useState)([]),c=Object(a.a)(n,2),o=c[0],l=c[1],j=Object(i.useState)(null),x=Object(a.a)(j,2),u=x[0],h=x[1],b=10,f=10,p=50,g=100,m=window.innerWidth,v=(window.innerHeight,.25*m),y=.7*v,w=g+p+v,k=b+f+y;function S(e){h(e.currentTarget.dataset.name)}return Object(i.useEffect)((function(){r.d("kanagawa.topojson").then((function(e){var t=s.a(e,e.objects.kanagawa),n=JSON.parse(JSON.stringify(t));n.features=[];for(var c=14101,a=[];c<=14402;){var i=t.features.filter((function(e){return e.properties.N03_007==c}));if(i.length>0){var o=JSON.parse(JSON.stringify(n));o.features=i,a.push(o)}c++}var j=v,d=y,x=r.b().center([139.355972,35.400833500000005]).translate([j/2,d/2]).scale(21e3),u=r.c().projection(x),h=[];a.map((function(e){h.push({name:e.features[0].properties.N03_004,path:u(e)})})),l(h)}))}),[]),0==o?Object(d.jsx)("div",{children:"loading"}):Object(d.jsxs)("div",{class:"columns",children:[Object(d.jsx)("div",{class:"column",children:Object(d.jsx)("div",{class:"box",children:Object(d.jsx)("svg",{viewBox:"".concat(-p," ").concat(-b," ").concat(w," ").concat(k),width:w,height:k,children:o.map((function(e,t){return Object(d.jsx)("path",{onClick:S,d:e.path,"data-name":e.name,style:{stroke:"\t#7f7f7f",fill:u===e.name?"#aad5ff":"#fff",strokeWidth:"1"}},t)}))})})}),Object(d.jsx)("div",{class:"column",children:Object(d.jsx)(O,{target:u,colorScale:t})})]})};var p=function(e){var t=e.scale,n=Object(i.useState)([]),c=Object(a.a)(n,2),s=c[0],o=c[1],O=10,f=50,p=100,g=180,m=.5*window.innerWidth,v=.6*window.innerHeight,y=g+p+m,w=O+f+v;if(Object(i.useEffect)((function(){Object(j.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("kanagawa1.json");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,o(n);case 7:case"end":return e.stop()}}),e)})))()}),[]),0==s.length)return Object(d.jsx)("div",{children:"loading"});var k=r.e().domain(r.a(s,(function(e){return e.year}))).range([0,m]).nice(),S=r.e().domain([0,r.a(s,(function(e){return e.sizeOfHousehold}))[1]]).range([v,0]),z=r.e().domain([0,r.a(s,(function(e){return e.population}))[1]]).range([v,0]);return Object(d.jsx)("div",{class:"columns is-centered",children:Object(d.jsx)("div",{class:" column is-9 mt-3",children:Object(d.jsxs)("div",{class:"box",children:[Object(d.jsx)("h2",{children:"\u795e\u5948\u5ddd\u770c\u5168\u4f53\u306e\u30b0\u30e9\u30d5"}),Object(d.jsx)("div",{children:Object(d.jsxs)("svg",{viewBox:"".concat(-p," ").concat(-O," ").concat(y," ").concat(w),width:y,height:w,children:[Object(d.jsx)(b,{scale:t,type:"main",graphWidth:m}),Object(d.jsx)(x,{scale:z}),Object(d.jsx)(h,{scale:k,graphHeight:v}),Object(d.jsx)(u,{scale:S,graphWidth:m}),Object(d.jsx)("g",{children:s.map((function(e,n){var c=n>0?s[n-1]:null;if(n>0)return Object(d.jsx)("line",{x1:k(c.year),y1:S(c.sizeOfHousehold),x2:k(e.year),y2:S(e.sizeOfHousehold),stroke:t("sizeOfHousehold")},e.id)}))}),Object(d.jsx)("g",{children:s.map((function(e,n){return Object(d.jsx)("circle",{cx:k(e.year),cy:S(e.sizeOfHousehold),r:"5",fill:t("sizeOfHousehold")},e.id)}))}),Object(d.jsx)("g",{children:s.map((function(e,n){var c=n>0?s[n-1]:null;if(n>0)return Object(d.jsx)("line",{x1:k(c.year),y1:z(c.population),x2:k(e.year),y2:z(e.population),stroke:t("population")},e.id)}))}),Object(d.jsx)("g",{children:s.map((function(e,n){return Object(d.jsx)("circle",{transform:"translate(".concat(k(e.year),",").concat(z(e.population),")"),cx:"0",cy:"0",r:"5",fill:t("population")},e.id)}))})]})})]})})})};n(173);function g(){var e=r.f(r.g);return Object(d.jsxs)("div",{children:[Object(d.jsx)(p,{scale:e}),Object(d.jsx)(f,{scale:e})]})}function m(){return Object(d.jsx)("header",{children:Object(d.jsx)("div",{class:"hero is-success",children:Object(d.jsxs)("div",{class:"hero-body",children:[Object(d.jsx)("p",{class:"title",children:"Kanagawa Visualizar"}),Object(d.jsx)("p",{class:"subtitle",children:"Success subtitle"})]})})})}function v(){return Object(d.jsx)("footer",{class:"footer",children:Object(d.jsx)("div",{class:"content has-text-centered",children:Object(d.jsx)("p",{children:"kanagawa visualizar"})})})}var y=function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)(m,{}),Object(d.jsx)(g,{}),Object(d.jsx)(v,{})]})};Object(c.render)(Object(d.jsx)(y,{}),document.querySelector("#content"))}},[[174,1,2]]]);
//# sourceMappingURL=main.c670d177.chunk.js.map