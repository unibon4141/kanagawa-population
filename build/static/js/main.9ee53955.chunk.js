(this.webpackJsonpprototype=this.webpackJsonpprototype||[]).push([[0],{174:function(e,t,n){"use strict";n.r(t);var c=n(69),r=n(1),a=n(4),s=n(70),i=n(5),o=n(2),j=n.n(o),l=n(14),x=n(0);function d(e){var t=e.scale,n="#888",c=t.range(),r=Object(a.a)(c,2),s=r[0],i=r[1];return Object(x.jsxs)("g",{children:[Object(x.jsx)("line",{x1:0,y1:s,x2:0,y2:i+2,stroke:n,strokeWidth:"2"}),Object(x.jsxs)("g",{children:[Object(x.jsx)("g",{transform:"translate(-80, 200) rotate(-90)",children:Object(x.jsx)("text",{x:"0",y:"0",textAnchor:"end",dominantBaseline:"central",fontSize:"15",children:"\u4eba\u53e3"})}),t.ticks().map((function(e,c){return Object(x.jsxs)("g",{transform:"translate(0, ".concat(t(e),")"),children:[Object(x.jsx)("line",{x1:"0",y1:"0",x2:"5",y2:"0",stroke:n}),Object(x.jsx)("text",{x:"-8",y:"0",textAnchor:"end",dominantBaseline:"central",fill:"black",fontSize:"12",children:e})]},c)}))]})]})}function u(e){var t=e.scale,n="#888",c=500,r=t.range(),s=Object(a.a)(r,2),i=s[0],o=s[1];return Object(x.jsxs)("g",{children:[Object(x.jsx)("line",{x1:c,y1:i,x2:c,y2:o+2,stroke:n,strokeWidth:"2"}),Object(x.jsxs)("g",{children:[Object(x.jsx)("g",{transform:"translate(".concat(c,", 200) rotate(-90)"),children:Object(x.jsx)("text",{x:"30",y:"60",textAnchor:"end",dominantBaseline:"central",fontSize:"15",children:"\u4e16\u5e2f\u5e73\u5747\u4eba\u6570"})}),t.ticks().map((function(e,r){return Object(x.jsxs)("g",{transform:"translate(".concat(c,", ").concat(t(e),")"),children:[Object(x.jsx)("line",{x1:"0",y1:"0",x2:"-5",y2:"0",stroke:n}),Object(x.jsx)("text",{x:"30",y:"0",textAnchor:"end",dominantBaseline:"central",fill:"black",fontSize:"12",children:e})]},r)}))]})]})}function b(e){var t=e.scale,n="#888",c=t.range(),r=Object(a.a)(c,2),s=r[0],i=r[1];return Object(x.jsxs)("g",{children:[Object(x.jsx)("line",{x1:s,y1:350,x2:i+5,y2:350,stroke:n}),Object(x.jsxs)("g",{children:[Object(x.jsx)("g",{transform:"translate(250, 380)",children:Object(x.jsx)("text",{x:"0",y:"0",textAnchor:"end",dominantBaseline:"central",fontSize:"15",children:"\u5e74"})}),t.ticks().map((function(e,c){return Object(x.jsxs)("g",{transform:"translate(".concat(t(e),", 0)"),children:[Object(x.jsx)("line",{x1:"0",y1:"395",x2:"0",y2:"400",stroke:n}),Object(x.jsx)("text",{x:"0",y:365,textAnchor:"middle",dominantBaseline:"central",fontSize:"12",children:e})]},c)}))]})]})}var O=function(e){var t=e.scale,n=e.type;return"main"===n?Object(x.jsx)("g",{transform:"translate(".concat(150,",0)"),children:t.domain().map((function(e,n){return Object(x.jsxs)("g",{transform:"translate(400, ".concat(20+15*n,")"),children:[Object(x.jsx)("circle",{r:"5",fill:t(e)}),Object(x.jsx)("text",{x:"10",fontSize:"11",dominantBaseline:"central",children:e})]},n)}))}):Object(x.jsx)("g",{transform:"translate(".concat(150,",0)"),children:t.domain().map((function(e,n){if(1===n)return Object(x.jsxs)("g",{transform:"translate(400, ".concat(20+15*n,")"),children:[Object(x.jsx)("circle",{r:"5",fill:t(e)}),Object(x.jsx)("text",{x:"10",fontSize:"11",dominantBaseline:"central",children:e})]},n)}))})};var f=function(e){var t=e.target,n=e.colorScale,c=Object(i.useState)([]),s=Object(a.a)(c,2),o=s[0],u=s[1],f=10,h=100,p=180+h+500,g=f+50+350;if(Object(i.useEffect)((function(){Object(l.a)(j.a.mark((function e(){var t,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("kanagawa3.json");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,u(n);case 7:case"end":return e.stop()}}),e)})))()}),[]),0===o.length||null===t)return Object(x.jsxs)("div",{children:[Object(x.jsx)("h2",{children:"\u5e02\u533a\u753a\u6751\u5225\u306e\u30b0\u30e9\u30d5"}),Object(x.jsx)("div",{style:{width:p,height:g,border:"solid 2px"}})]});var y=o.find((function(e){return e.name===t})),m=1970,v=y.population.filter((function(e){return null!==e[m]?(m+=5,!0):(m+=5,!1)})).map((function(e){var t=Object.keys(e)[0];return{year:t,population:e[t]}})),k=r.e().domain(r.a(v,(function(e){return e.year}))).range([0,500]).nice(),w=r.e().domain([0,r.a(v,(function(e){return e.population}))[1]]).range([350,0]);return Object(x.jsxs)("div",{children:[Object(x.jsxs)("h2",{children:["\u5e02\u533a\u753a\u6751\u5225\u306e\u30b0\u30e9\u30d5 : ",t]}),Object(x.jsx)("div",{children:Object(x.jsxs)("svg",{viewBox:"".concat(-h," ").concat(-f," ").concat(p," ").concat(g),width:p,height:g,style:{border:"solid 2px"},children:[Object(x.jsx)(O,{scale:n,type:"sub"}),Object(x.jsx)(d,{scale:w}),Object(x.jsx)(b,{scale:k}),Object(x.jsx)("g",{children:v.map((function(e,t){var n=t>0?v[t-1]:null;if(t>0)return Object(x.jsx)("line",{x1:k(n.year),y1:w(n.population),x2:k(e.year),y2:w(e.population),stroke:"black"},t)}))}),Object(x.jsx)("g",{children:v.map((function(e,t){return Object(x.jsx)("circle",{transform:"translate(".concat(k(e.year),",").concat(w(e.population),")"),cx:"0",cy:"0",r:"5",fill:n("\u4eba\u53e3")},t)}))})]})})]})};var h=function(e){var t=e.scale,n=Object(i.useState)([]),c=Object(a.a)(n,2),o=c[0],j=c[1],l=Object(i.useState)(null),d=Object(a.a)(l,2),u=d[0],b=d[1],O=10,h=50,p=100+h+400,g=O+10+300;function y(e){b(e.currentTarget.dataset.name)}return Object(i.useEffect)((function(){r.d("kanagawa.topojson").then((function(e){var t=s.a(e,e.objects.kanagawa),n=JSON.parse(JSON.stringify(t));n.features=[];for(var c=14101,a=[];c<=14402;){var i=t.features.filter((function(e){return e.properties.N03_007==c}));if(i.length>0){var o=JSON.parse(JSON.stringify(n));o.features=i,a.push(o)}c++}var l=r.b().center([139.355972,35.400833500000005]).translate([200,150]).scale(21e3),x=r.c().projection(l),d=[];a.map((function(e){d.push({name:e.features[0].properties.N03_004,path:x(e)})})),j(d)}))}),[]),0==o?Object(x.jsx)("div",{children:"loading"}):Object(x.jsxs)("div",{children:[Object(x.jsx)("div",{children:Object(x.jsx)(f,{target:u,colorScale:t})}),Object(x.jsx)("div",{children:Object(x.jsx)("svg",{viewBox:"".concat(-h," ").concat(-O," ").concat(p," ").concat(g),width:p,height:g,style:{border:"solid 2px"},children:o.map((function(e,t){return Object(x.jsx)("path",{onClick:y,d:e.path,"data-name":e.name,style:{stroke:"black",fill:u===e.name?"#aad5ff":"white",strokeWidth:"1"}},t)}))})})]})};var p=function(e){var t=e.scale,n=Object(i.useState)([]),c=Object(a.a)(n,2),s=c[0],o=c[1],f=10,h=100,p=180+h+500,g=f+50+350;if(Object(i.useEffect)((function(){Object(l.a)(j.a.mark((function e(){var t,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("kanagawa1.json");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,o(n);case 7:case"end":return e.stop()}}),e)})))()}),[]),0==s.length)return Object(x.jsx)("div",{children:"loading"});var y=r.e().domain(r.a(s,(function(e){return e.year}))).range([0,500]).nice(),m=r.e().domain([0,r.a(s,(function(e){return e.sizeOfHousehold}))[1]]).range([350,0]),v=r.e().domain([0,r.a(s,(function(e){return e.population}))[1]]).range([350,0]);return Object(x.jsxs)("div",{children:[Object(x.jsx)("h2",{children:"\u795e\u5948\u5ddd\u770c\u5168\u4f53\u306e\u30b0\u30e9\u30d5"}),Object(x.jsx)("div",{children:Object(x.jsxs)("svg",{viewBox:"".concat(-h," ").concat(-f," ").concat(p," ").concat(g),width:p,height:g,style:{border:"solid 2px"},children:[Object(x.jsx)(O,{scale:t,type:"main"}),Object(x.jsx)(d,{scale:v}),Object(x.jsx)(b,{scale:y}),Object(x.jsx)(u,{scale:m}),Object(x.jsx)("g",{children:s.map((function(e,t){var n=t>0?s[t-1]:null;if(t>0)return Object(x.jsx)("line",{x1:y(n.year),y1:m(n.sizeOfHousehold),x2:y(e.year),y2:m(e.sizeOfHousehold),stroke:"black"},e.id)}))}),Object(x.jsx)("g",{children:s.map((function(e,n){return Object(x.jsx)("circle",{cx:y(e.year),cy:m(e.sizeOfHousehold),r:"5",fill:t("\u4e16\u5e2f\u5e73\u5747\u4eba\u6570")},e.id)}))}),Object(x.jsx)("g",{children:s.map((function(e,t){var n=t>0?s[t-1]:null;if(t>0)return Object(x.jsx)("line",{x1:y(n.year),y1:v(n.population),x2:y(e.year),y2:v(e.population),stroke:"black"},e.id)}))}),Object(x.jsx)("g",{children:s.map((function(e,n){return Object(x.jsx)("circle",{transform:"translate(".concat(y(e.year),",").concat(v(e.population),")"),cx:"0",cy:"0",r:"5",fill:t("\u4eba\u53e3")},e.id)}))})]})})]})};n(173);function g(){var e=r.f(r.g);return Object(x.jsxs)("div",{children:[Object(x.jsx)(p,{scale:e}),Object(x.jsx)(h,{scale:e})]})}function y(){return Object(x.jsx)("header",{children:Object(x.jsx)("div",{class:"hero is-success",children:Object(x.jsxs)("div",{class:"hero-body",children:[Object(x.jsx)("p",{class:"title",children:"Kanagawa Visualizar"}),Object(x.jsx)("p",{class:"subtitle",children:"Success subtitle"})]})})})}function m(){return Object(x.jsx)("footer",{class:"footer",children:Object(x.jsx)("div",{class:"content has-text-centered",children:Object(x.jsx)("p",{children:"kanagawa visualizar"})})})}var v=function(){return Object(x.jsxs)("div",{children:[Object(x.jsx)(y,{}),Object(x.jsx)(g,{}),Object(x.jsx)(m,{})]})};Object(c.render)(Object(x.jsx)(v,{}),document.querySelector("#content"))}},[[174,1,2]]]);
//# sourceMappingURL=main.9ee53955.chunk.js.map