(this.webpackJsonpprototype=this.webpackJsonpprototype||[]).push([[0],{173:function(e,t,n){"use strict";n.r(t);var c=n(69),r=n(2),a=n.n(r),s=n(13),i=n(4),o=n(70),l=n(1),j=n(5),x=n(0);function u(e){var t=e.scale,n="#888",c=t.range(),r=Object(i.a)(c,2),a=r[0],s=r[1];return Object(x.jsxs)("g",{children:[Object(x.jsx)("line",{x1:0,y1:a,x2:0,y2:s+2,stroke:n,strokeWidth:"2"}),Object(x.jsxs)("g",{children:[Object(x.jsx)("g",{transform:"translate(-80, 200) rotate(-90)",children:Object(x.jsx)("text",{x:"0",y:"0",textAnchor:"end",dominantBaseline:"central",fontSize:"15",children:"\u4eba\u53e3"})}),t.ticks().map((function(e,c){return Object(x.jsxs)("g",{transform:"translate(0, ".concat(t(e),")"),children:[Object(x.jsx)("line",{x1:"0",y1:"0",x2:"5",y2:"0",stroke:n}),Object(x.jsx)("text",{x:"-8",y:"0",textAnchor:"end",dominantBaseline:"central",fill:"black",fontSize:"12",children:e})]},c)}))]})]})}function d(e){var t=e.scale,n="#888",c=500,r=t.range(),a=Object(i.a)(r,2),s=a[0],o=a[1];return Object(x.jsxs)("g",{children:[Object(x.jsx)("line",{x1:c,y1:s,x2:c,y2:o+2,stroke:n,strokeWidth:"2"}),Object(x.jsxs)("g",{children:[Object(x.jsx)("g",{transform:"translate(".concat(c,", 200) rotate(-90)"),children:Object(x.jsx)("text",{x:"30",y:"60",textAnchor:"end",dominantBaseline:"central",fontSize:"15",children:"\u4e16\u5e2f\u5e73\u5747\u4eba\u6570"})}),t.ticks().map((function(e,r){return Object(x.jsxs)("g",{transform:"translate(".concat(c,", ").concat(t(e),")"),children:[Object(x.jsx)("line",{x1:"0",y1:"0",x2:"-5",y2:"0",stroke:n}),Object(x.jsx)("text",{x:"30",y:"0",textAnchor:"end",dominantBaseline:"central",fill:"black",fontSize:"12",children:e})]},r)}))]})]})}function b(e){var t=e.scale,n="#888",c=t.range(),r=Object(i.a)(c,2),a=r[0],s=r[1];return Object(x.jsxs)("g",{children:[Object(x.jsx)("line",{x1:a,y1:350,x2:s+5,y2:350,stroke:n}),Object(x.jsxs)("g",{children:[Object(x.jsx)("g",{transform:"translate(250, 380)",children:Object(x.jsx)("text",{x:"0",y:"0",textAnchor:"end",dominantBaseline:"central",fontSize:"15",children:"\u5e74"})}),t.ticks().map((function(e,c){return Object(x.jsxs)("g",{transform:"translate(".concat(t(e),", 0)"),children:[Object(x.jsx)("line",{x1:"0",y1:"395",x2:"0",y2:"400",stroke:n}),Object(x.jsx)("text",{x:"0",y:365,textAnchor:"middle",dominantBaseline:"central",fontSize:"12",children:e})]},c)}))]})]})}var f=function(e){var t=e.scale,n=e.type;return"main"===n?Object(x.jsx)("g",{transform:"translate(".concat(150,",0)"),children:t.domain().map((function(e,n){return Object(x.jsxs)("g",{transform:"translate(400, ".concat(20+15*n,")"),children:[Object(x.jsx)("circle",{r:"5",fill:t(e)}),Object(x.jsx)("text",{x:"10",fontSize:"11",dominantBaseline:"central",children:e})]},n)}))}):Object(x.jsx)("g",{transform:"translate(".concat(150,",0)"),children:t.domain().map((function(e,n){if(1===n)return Object(x.jsxs)("g",{transform:"translate(400, ".concat(20+15*n,")"),children:[Object(x.jsx)("circle",{r:"5",fill:t(e)}),Object(x.jsx)("text",{x:"10",fontSize:"11",dominantBaseline:"central",children:e})]},n)}))})};var O=function(e){var t=e.target,n=e.colorScale,c=Object(j.useState)([]),r=Object(i.a)(c,2),o=r[0],d=r[1],O=10,p=100,h=180+p+500,y=O+50+350;if(Object(j.useEffect)((function(){Object(s.a)(a.a.mark((function e(){var t,n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("kanagawa3.json");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,d(n);case 7:case"end":return e.stop()}}),e)})))()}),[]),0===o.length||null===t)return Object(x.jsxs)("div",{children:[Object(x.jsx)("h2",{style:{position:"absolute",top:"0",left:"850px"},children:"\u5e02\u533a\u753a\u6751\u5225\u306e\u30b0\u30e9\u30d5"}),Object(x.jsx)("div",{style:{width:h,height:y,border:"solid 2px",position:"absolute",top:"50px",left:"800px"}})]});var g=o.find((function(e){return e.name===t})),m=1970,v=g.population.filter((function(e){return null!==e[m]?(m+=5,!0):(m+=5,!1)})).map((function(e){var t=Object.keys(e)[0];return{year:t,population:e[t]}})),k=l.e().domain(l.a(v,(function(e){return e.year}))).range([0,500]).nice(),S=l.e().domain([0,l.a(v,(function(e){return e.population}))[1]]).range([350,0]);return Object(x.jsxs)("div",{children:[Object(x.jsxs)("h2",{style:{position:"absolute",top:"0",left:"850px"},children:["\u5e02\u533a\u753a\u6751\u5225\u306e\u30b0\u30e9\u30d5 : ",t]}),Object(x.jsx)("div",{style:{position:"absolute",top:"50px",left:"800px"},children:Object(x.jsxs)("svg",{viewBox:"".concat(-p," ").concat(-O," ").concat(h," ").concat(y),width:h,height:y,style:{border:"solid 2px"},children:[Object(x.jsx)(f,{scale:n,type:"sub"}),Object(x.jsx)(u,{scale:S}),Object(x.jsx)(b,{scale:k}),Object(x.jsx)("g",{children:v.map((function(e,t){var n=t>0?v[t-1]:null;if(t>0)return Object(x.jsx)("line",{x1:k(n.year),y1:S(n.population),x2:k(e.year),y2:S(e.population),stroke:"black"},t)}))}),Object(x.jsx)("g",{children:v.map((function(e,t){return Object(x.jsx)("circle",{transform:"translate(".concat(k(e.year),",").concat(S(e.population),")"),cx:"0",cy:"0",r:"5",fill:n("\u4eba\u53e3")},t)}))})]})})]})};function p(){var e=l.f(l.g);return Object(x.jsx)("div",{children:Object(x.jsx)(y,{scale:e})})}function h(e){var t=e.scale,n=Object(j.useState)([]),c=Object(i.a)(n,2),r=c[0],o=c[1],O=10,p=100,h=180+p+500,y=O+50+350;if(Object(j.useEffect)((function(){Object(s.a)(a.a.mark((function e(){var t,n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("kanagawa1.json");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,o(n);case 7:case"end":return e.stop()}}),e)})))()}),[]),0==r.length)return Object(x.jsx)("div",{children:"loading"});var g=l.e().domain(l.a(r,(function(e){return e.year}))).range([0,500]).nice(),m=l.e().domain([0,l.a(r,(function(e){return e.sizeOfHousehold}))[1]]).range([350,0]),v=l.e().domain([0,l.a(r,(function(e){return e.population}))[1]]).range([350,0]);return Object(x.jsxs)("div",{children:[Object(x.jsx)("h2",{style:{position:"absolute",top:"0",left:"0"},children:"\u795e\u5948\u5ddd\u770c\u5168\u4f53\u306e\u30b0\u30e9\u30d5"}),Object(x.jsx)("div",{style:{position:"absolute",top:"50px",left:0},children:Object(x.jsxs)("svg",{viewBox:"".concat(-p," ").concat(-O," ").concat(h," ").concat(y),width:h,height:y,style:{border:"solid 2px"},children:[Object(x.jsx)(f,{scale:t,type:"main"}),Object(x.jsx)(u,{scale:v}),Object(x.jsx)(b,{scale:g}),Object(x.jsx)(d,{scale:m}),Object(x.jsx)("g",{children:r.map((function(e,t){var n=t>0?r[t-1]:null;if(t>0)return Object(x.jsx)("line",{x1:g(n.year),y1:m(n.sizeOfHousehold),x2:g(e.year),y2:m(e.sizeOfHousehold),stroke:"black"},e.id)}))}),Object(x.jsx)("g",{children:r.map((function(e,n){return Object(x.jsx)("circle",{cx:g(e.year),cy:m(e.sizeOfHousehold),r:"5",fill:t("\u4e16\u5e2f\u5e73\u5747\u4eba\u6570")},e.id)}))}),Object(x.jsx)("g",{children:r.map((function(e,t){var n=t>0?r[t-1]:null;if(t>0)return Object(x.jsx)("line",{x1:g(n.year),y1:v(n.population),x2:g(e.year),y2:v(e.population),stroke:"black"},e.id)}))}),Object(x.jsx)("g",{children:r.map((function(e,n){return Object(x.jsx)("circle",{transform:"translate(".concat(g(e.year),",").concat(v(e.population),")"),cx:"0",cy:"0",r:"5",fill:t("\u4eba\u53e3")},e.id)}))})]})})]})}function y(e){var t=e.scale,n=Object(j.useState)([]),c=Object(i.a)(n,2),r=c[0],a=c[1],s=Object(j.useState)(null),u=Object(i.a)(s,2),d=u[0],b=u[1],f=10,p=50,y=100+p+400,g=f+10+300;function m(e){b(e.currentTarget.dataset.name)}return Object(j.useEffect)((function(){l.d("kanagawa.topojson").then((function(e){var t=o.a(e,e.objects.kanagawa),n=JSON.parse(JSON.stringify(t));n.features=[];for(var c=14101,r=[];c<=14402;){var s=t.features.filter((function(e){return e.properties.N03_007==c}));if(s.length>0){var i=JSON.parse(JSON.stringify(n));i.features=s,r.push(i)}c++}var j=l.b().center([139.355972,35.400833500000005]).translate([200,150]).scale(21e3),x=l.c().projection(j),u=[];r.map((function(e){u.push({name:e.features[0].properties.N03_004,path:x(e)})})),a(u)}))}),[]),0==r?Object(x.jsx)("div",{children:"loading"}):Object(x.jsxs)("div",{style:{position:"relative",margin:0,padding:0},children:[Object(x.jsxs)("div",{children:[Object(x.jsx)(h,{scale:t}),Object(x.jsx)(O,{target:d,colorScale:t})]}),Object(x.jsx)("div",{style:{position:"absolute",top:"470px",left:"800px"},children:Object(x.jsx)("svg",{viewBox:"".concat(-p," ").concat(-f," ").concat(y," ").concat(g),width:y,height:g,style:{border:"solid 2px"},children:r.map((function(e,t){return Object(x.jsx)("path",{onClick:m,d:e.path,"data-name":e.name,style:{stroke:"black",fill:d===e.name?"#aad5ff":"white",strokeWidth:"1"}},t)}))})})]})}var g=function(){return Object(x.jsx)("div",{children:Object(x.jsx)(p,{})})};Object(c.render)(Object(x.jsx)(g,{}),document.querySelector("#content"))}},[[173,1,2]]]);
//# sourceMappingURL=main.052f8bfc.chunk.js.map