(this.webpackJsonpcovid=this.webpackJsonpcovid||[]).push([[0],{197:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(15),o=a.n(c),u=a(5),l=a.n(u),s=a(8),i=a(13),d=a(14),p=a.n(d),f=(a(96),a(201)),m=a(200),v=a(71),E=a(41),b=(a(97),function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(E.a,{className:"nav"},r.a.createElement(E.a.Brand,null,r.a.createElement("h1",null,"Covid 19 rasteador"))))}),h=a(27),g=function(e){var t=e.onChange,a=Object(n.useState)([]),c=Object(i.a)(a,2),o=c[0],u=c[1];Object(n.useEffect)((function(){(function(){var e=Object(s.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=u,e.next=3,d();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var d=function(){var e=Object(s.a)(l.a.mark((function e(){var t,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.a.get("https://covid19.mathdro.id/api/countries");case 3:return t=e.sent,a=t.data.countries.map((function(e){return e.name})),e.abrupt("return",a);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();return r.a.createElement(h.a.Group,null,r.a.createElement(h.a.Label,null,"Elija un Pa\xeds"),r.a.createElement(h.a.Control,{as:"select",onChange:function(e){return t(e.target.value)}},r.a.createElement("option",{value:"Seleccione un pais"},"Seleccione un pais"),o.map((function(e,t){return r.a.createElement("option",{value:e,key:t},e)}))))},w=a(26),x=a.n(w),j=a(199),O=a(202),y=function(e){var t=e.data;return r.a.createElement(r.a.Fragment,null,t.data?r.a.createElement("div",null,r.a.createElement(m.a,null,r.a.createElement(O.a,null,r.a.createElement(O.a.Body,null,r.a.createElement(O.a.Text,null,"Contagios:",r.a.createElement(x.a,{start:0,end:t.data.confirmed.value,duration:3,separators:"."}),r.a.createElement("br",null),"Muertos:",r.a.createElement(x.a,{start:0,end:t.data.deaths.value,duration:3,separators:"."}),r.a.createElement("br",null),"Recuperados:",r.a.createElement(x.a,{start:0,end:t.data.recovered.value,duration:3,separators:"."})))))):r.a.createElement(j.a,{animation:"grow",variant:"info"}))},k=a(40),C=function(e){var t=e.pais,a=e.data,c=Object(n.useState)({}),o=Object(i.a)(c,2),u=o[0],d=o[1];Object(n.useEffect)((function(){(function(){var e=Object(s.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m();case 2:t=e.sent,d(t),console.log(u);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var f,m=function(){var e=Object(s.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Date.now(),e.prev=1,e.next=4,p.a.get("https://covid19.mathdro.id/api/daily/10-2-2020");case 4:return t=e.sent,console.log(t),e.abrupt("return",t);case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(){return e.apply(this,arguments)}}();return!u.data||"Seleccione un pais"!==t&&""!==t?u.data&&(f=r.a.createElement(k.Doughnut,{data:{labels:["infectados","recuperados","muertos"],datasets:[{label:"Gente",backgroundColor:["cornflowerblue","grey","red"],data:[a.data.confirmed.value,a.data.recovered.value,a.data.deaths.value]}]},options:{legend:{display:!0,fontColor:"white"},title:{display:!0,text:"Coronavirus en ".concat(t),fontColor:"black"}}})):f=r.a.createElement(k.Line,{data:{labels:u.data.map((function(e){return e.countryRegion})),datasets:[{data:u.data.map((function(e){return e.confirmed})),label:"Infectados",borderColor:"red",fill:!0},{data:u.data.map((function(e){return e.deaths})),label:"Muertos",borderColor:"black",fill:!0}]},options:{legend:{labels:{fontColor:"black",fontSize:18}},title:{display:!0,text:"Coronavirus en el mundo",fontColor:"black"}}}),r.a.createElement(r.a.Fragment,null,a.data?r.a.createElement("div",null,f):r.a.createElement(j.a,{animation:"grow",variant:"info"}))},S=function(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)({}),u=Object(i.a)(o,2),d=u[0],E=u[1];Object(n.useEffect)((function(){(function(){var e=Object(s.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w(a);case 2:t=e.sent,E(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[a]),console.log(d);var h=function(){var e=Object(s.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:c(t);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),w=function(){var e=Object(s.a)(l.a.mark((function e(t){var a,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="",a=""===t||"Seleccione un pais"===t?"https://covid19.mathdro.id/api":"https://covid19.mathdro.id/api/countries/".concat(t),e.prev=2,e.next=5,p.a.get(a);case 5:return n=e.sent,e.abrupt("return",n);case 9:e.prev=9,e.t0=e.catch(2),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",null,r.a.createElement(b,null),r.a.createElement(f.a,{fluid:!0},r.a.createElement(m.a,null,r.a.createElement(v.a,{xl:2},r.a.createElement(g,{onChange:h})),r.a.createElement(v.a,{xl:8},r.a.createElement(C,{pais:a,data:d})),r.a.createElement(v.a,{xl:2},r.a.createElement(y,{data:d})))))};o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(S,null)),document.getElementById("root"))},74:function(e,t,a){e.exports=a(197)},97:function(e,t,a){}},[[74,1,2]]]);
//# sourceMappingURL=main.738ca8ab.chunk.js.map