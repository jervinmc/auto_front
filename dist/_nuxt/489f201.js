(window.webpackJsonp=window.webpackJsonp||[]).push([[18,19],{457:function(t,e,r){(function(e){t.exports=function(t){function e(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var r={};return e.m=t,e.c=r,e.i=function(t){return t},e.d=function(t,r,n){e.o(t,r)||Object.defineProperty(t,r,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(r,"a",r),r},e.o=function(object,t){return Object.prototype.hasOwnProperty.call(object,t)},e.p="",e(e.s=3)}([function(t,e,r){"use strict";function n(){return window.google&&window.google.charts?Promise.resolve(window.google.charts):(l||(l=new Promise((function(t){var script=document.createElement("script");script.type="text/javascript",script.onload=function(){return t(window.google.charts)},script.src=c,document.body.appendChild(script)}))),l)}e.a=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"current",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return n().then((function(r){if("object"!==(void 0===e?"undefined":o(e)))throw new Error("Google Charts loader: settings must be an object");var n=t+"_"+JSON.stringify(e,Object.keys(e).sort());if(d.has(n))return d.get(n);var c=new Promise((function(n){r.load(t,e),r.setOnLoadCallback((function(){return n(window.google)}))}));return d.set(n,c),c}))};var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},c="https://www.gstatic.com/charts/loader.js",l=null,d=new Map},function(t,e,r){var n=r(5)(r(4),r(6),null,null);t.exports=n.exports},function(t,e){t.exports=function(t,e,r){function n(){var f=Date.now()-d;f<e&&f>=0?o=setTimeout(n,e-f):(o=null,r||(h=t.apply(l,c),l=c=null))}var o,c,l,d,h;null==e&&(e=100);var f=function(){l=this,c=arguments,d=Date.now();var f=r&&!o;return o||(o=setTimeout(n,e)),f&&(h=t.apply(l,c),l=c=null),h};return f.clear=function(){o&&(clearTimeout(o),o=null)},f.flush=function(){o&&(h=t.apply(l,c),l=c=null,clearTimeout(o),o=null)},f}},function(t,r,n){"use strict";function o(t){t.component("GChart",d.a)}Object.defineProperty(r,"__esModule",{value:!0}),r.install=o;var c=n(0),l=n(1),d=n.n(l);n.d(r,"loadGoogleCharts",(function(){return c.a})),n.d(r,"GChart",(function(){return d.a}));var h={version:"0.3.3",install:o};r.default=h;var f=null;"undefined"!=typeof window?f=window.Vue:void 0!==e&&(f=e.Vue),f&&f.use(h)},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(0),o=r(2),c=r.n(o),l=function(t,i){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return function(t,i){var e=[],r=!0,n=!1,o=void 0;try{for(var c,l=t[Symbol.iterator]();!(r=(c=l.next()).done)&&(e.push(c.value),!i||e.length!==i);r=!0);}catch(t){n=!0,o=t}finally{try{!r&&l.return&&l.return()}finally{if(n)throw o}}return e}(t,i);throw new TypeError("Invalid attempt to destructure non-iterable instance")},d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},h=null;e.default={name:"GChart",props:{type:{type:String},data:{type:[Array,Object],default:function(){return[]}},options:{type:Object,default:function(){return{}}},version:{type:String,default:"current"},settings:{type:Object,default:function(){return{packages:["corechart","table"]}}},events:{type:Object},createChart:{type:Function},resizeDebounce:{type:Number,default:200}},data:function(){return{chartObject:null}},watch:{data:{deep:!0,handler:function(){this.drawChart()}},options:{deep:!0,handler:function(){this.drawChart()}},type:function(t){this.createChartObject(),this.drawChart()}},mounted:function(){var t=this;r.i(n.a)(this.version,this.settings).then((function(e){h=e;var r=t.createChartObject();t.$emit("ready",r,e),t.drawChart()})),this.resizeDebounce>0&&window.addEventListener("resize",c()(this.drawChart,this.resizeDebounce))},beforeDestroy:function(){this.chartObject&&"function"==typeof this.chartObject.clearChart&&this.chartObject.clearChart()},methods:{drawChart:function(){if(h&&this.chartObject){var data=this.getValidChartData();data&&this.chartObject.draw(data,this.options)}},getValidChartData:function(){return this.data instanceof h.visualization.DataTable||this.data instanceof h.visualization.DataView?this.data:Array.isArray(this.data)?h.visualization.arrayToDataTable(this.data):null!==this.data&&"object"===d(this.data)?new h.visualization.DataTable(this.data):null},createChartObject:function(){var t=this.createChart||function(t,e,r){if(!r)throw new Error("please, provide chart type property");return new e.visualization[r](t)};return this.chartObject=t(this.$refs.chart,h,this.type),this.attachListeners(),this.chartObject},attachListeners:function(){var t=this;this.events&&Object.entries(this.events).forEach((function(e){var r=l(e,2),n=r[0],o=r[1];h.visualization.events.addListener(t.chartObject,n,o)}))}}}},function(t,e){t.exports=function(t,e,r,n){var o,c=t=t||{},l=typeof t.default;"object"!==l&&"function"!==l||(o=t,c=t.default);var d="function"==typeof c?c.options:c;if(e&&(d.render=e.render,d.staticRenderFns=e.staticRenderFns),r&&(d._scopeId=r),n){var h=d.computed||(d.computed={});Object.keys(n).forEach((function(t){var e=n[t];h[t]=function(){return e}}))}return{esModule:o,exports:c,options:d}}},function(t,e){t.exports={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{ref:"chart"})},staticRenderFns:[]}}])}).call(this,r(91))},610:function(t,e,r){var map={"./af":458,"./af.js":458,"./ar":459,"./ar-dz":460,"./ar-dz.js":460,"./ar-kw":461,"./ar-kw.js":461,"./ar-ly":462,"./ar-ly.js":462,"./ar-ma":463,"./ar-ma.js":463,"./ar-sa":464,"./ar-sa.js":464,"./ar-tn":465,"./ar-tn.js":465,"./ar.js":459,"./az":466,"./az.js":466,"./be":467,"./be.js":467,"./bg":468,"./bg.js":468,"./bm":469,"./bm.js":469,"./bn":470,"./bn-bd":471,"./bn-bd.js":471,"./bn.js":470,"./bo":472,"./bo.js":472,"./br":473,"./br.js":473,"./bs":474,"./bs.js":474,"./ca":475,"./ca.js":475,"./cs":476,"./cs.js":476,"./cv":477,"./cv.js":477,"./cy":478,"./cy.js":478,"./da":479,"./da.js":479,"./de":480,"./de-at":481,"./de-at.js":481,"./de-ch":482,"./de-ch.js":482,"./de.js":480,"./dv":483,"./dv.js":483,"./el":484,"./el.js":484,"./en-au":485,"./en-au.js":485,"./en-ca":486,"./en-ca.js":486,"./en-gb":487,"./en-gb.js":487,"./en-ie":488,"./en-ie.js":488,"./en-il":489,"./en-il.js":489,"./en-in":490,"./en-in.js":490,"./en-nz":491,"./en-nz.js":491,"./en-sg":492,"./en-sg.js":492,"./eo":493,"./eo.js":493,"./es":494,"./es-do":495,"./es-do.js":495,"./es-mx":496,"./es-mx.js":496,"./es-us":497,"./es-us.js":497,"./es.js":494,"./et":498,"./et.js":498,"./eu":499,"./eu.js":499,"./fa":500,"./fa.js":500,"./fi":501,"./fi.js":501,"./fil":502,"./fil.js":502,"./fo":503,"./fo.js":503,"./fr":504,"./fr-ca":505,"./fr-ca.js":505,"./fr-ch":506,"./fr-ch.js":506,"./fr.js":504,"./fy":507,"./fy.js":507,"./ga":508,"./ga.js":508,"./gd":509,"./gd.js":509,"./gl":510,"./gl.js":510,"./gom-deva":511,"./gom-deva.js":511,"./gom-latn":512,"./gom-latn.js":512,"./gu":513,"./gu.js":513,"./he":514,"./he.js":514,"./hi":515,"./hi.js":515,"./hr":516,"./hr.js":516,"./hu":517,"./hu.js":517,"./hy-am":518,"./hy-am.js":518,"./id":519,"./id.js":519,"./is":520,"./is.js":520,"./it":521,"./it-ch":522,"./it-ch.js":522,"./it.js":521,"./ja":523,"./ja.js":523,"./jv":524,"./jv.js":524,"./ka":525,"./ka.js":525,"./kk":526,"./kk.js":526,"./km":527,"./km.js":527,"./kn":528,"./kn.js":528,"./ko":529,"./ko.js":529,"./ku":530,"./ku.js":530,"./ky":531,"./ky.js":531,"./lb":532,"./lb.js":532,"./lo":533,"./lo.js":533,"./lt":534,"./lt.js":534,"./lv":535,"./lv.js":535,"./me":536,"./me.js":536,"./mi":537,"./mi.js":537,"./mk":538,"./mk.js":538,"./ml":539,"./ml.js":539,"./mn":540,"./mn.js":540,"./mr":541,"./mr.js":541,"./ms":542,"./ms-my":543,"./ms-my.js":543,"./ms.js":542,"./mt":544,"./mt.js":544,"./my":545,"./my.js":545,"./nb":546,"./nb.js":546,"./ne":547,"./ne.js":547,"./nl":548,"./nl-be":549,"./nl-be.js":549,"./nl.js":548,"./nn":550,"./nn.js":550,"./oc-lnc":551,"./oc-lnc.js":551,"./pa-in":552,"./pa-in.js":552,"./pl":553,"./pl.js":553,"./pt":554,"./pt-br":555,"./pt-br.js":555,"./pt.js":554,"./ro":556,"./ro.js":556,"./ru":557,"./ru.js":557,"./sd":558,"./sd.js":558,"./se":559,"./se.js":559,"./si":560,"./si.js":560,"./sk":561,"./sk.js":561,"./sl":562,"./sl.js":562,"./sq":563,"./sq.js":563,"./sr":564,"./sr-cyrl":565,"./sr-cyrl.js":565,"./sr.js":564,"./ss":566,"./ss.js":566,"./sv":567,"./sv.js":567,"./sw":568,"./sw.js":568,"./ta":569,"./ta.js":569,"./te":570,"./te.js":570,"./tet":571,"./tet.js":571,"./tg":572,"./tg.js":572,"./th":573,"./th.js":573,"./tk":574,"./tk.js":574,"./tl-ph":575,"./tl-ph.js":575,"./tlh":576,"./tlh.js":576,"./tr":577,"./tr.js":577,"./tzl":578,"./tzl.js":578,"./tzm":579,"./tzm-latn":580,"./tzm-latn.js":580,"./tzm.js":579,"./ug-cn":581,"./ug-cn.js":581,"./uk":582,"./uk.js":582,"./ur":583,"./ur.js":583,"./uz":584,"./uz-latn":585,"./uz-latn.js":585,"./uz.js":584,"./vi":586,"./vi.js":586,"./x-pseudo":587,"./x-pseudo.js":587,"./yo":588,"./yo.js":588,"./zh-cn":589,"./zh-cn.js":589,"./zh-hk":590,"./zh-hk.js":590,"./zh-mo":591,"./zh-mo.js":591,"./zh-tw":592,"./zh-tw.js":592};function n(t){var e=o(t);return r(e)}function o(t){if(!r.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}n.keys=function(){return Object.keys(map)},n.resolve=o,t.exports=n,n.id=610},633:function(t,e,r){"use strict";var n=r(457);r.o(n,"GChart")&&r.d(e,"GChart",(function(){return n.GChart}))},661:function(t,e,r){var content=r(682);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(21).default)("63a5f1db",content,!0,{sourceMap:!1})},668:function(t,e,r){"use strict";r.r(e);var n=r(643);e.default={extends:n.a,props:["data","options"],mounted:function(){this.renderChart(this.data,{borderWidth:"10px",hoverBackgroundColor:"red",hoverBorderWidth:"10px"})}}},681:function(t,e,r){"use strict";r(661)},682:function(t,e,r){var n=r(20)(!1);n.push([t.i,".pie_chart{margin:0 0 30px 20px;max-width:250px}",""]),t.exports=n},716:function(t,e,r){"use strict";r.r(e);var n=r(38),o=(r(35),r(116),r(633)),c=r(668),l={components:{GChart:o.GChart,PieChart:c.default},created:function(){this.loadData()},methods:{reports:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.get("/getsales/",{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}}).then((function(e){t.total_seller=e.data.no_seller,t.total_buyer=e.data.no_customer,t.chartData1.datasets[0].data[0]=t.total_seller,t.chartData1.datasets[0].data[1]=t.total_buyer,t.chart_data1=!0}));case 2:e.sent;case 3:case"end":return e.stop()}}),e)})))()},loadData:function(){this.reports(),this.name=localStorage.getItem("firstname")+" "+localStorage.getItem("lastname")}},data:function(){return{chart_data1:!1,total_seller:0,total_buyer:0,reports_list:[],name:"",chartData1:{responsive:!1,hoverBackgroundColor:"red",hoverBorderWidth:10,labels:["Total Seller","Total Customer"],datasets:[{label:"Data One",backgroundColor:["#E3C790","#344557"],data:[1,10]}]},chartOptions:{chart:{title:"Company Performance",subtitle:"Sales, Expenses, and Profit: 2014-2017"}}}}},d=(r(681),r(79)),h=r(94),f=r.n(h),j=r(207),v=r(439),m=r(440),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"pa-5 text-h5"},[r("b",[t._v("Hello, "+t._s(t.name))])]),t._v(" "),r("div",[r("v-row",[r("v-col",{attrs:{align:"center"}},[r("div",[r("v-card",{staticClass:"d-flex justify-center align-center mb-5 pa-5",attrs:{elevation:"10",height:"200",width:"200"}},[r("v-row",[r("v-col",{attrs:{cols:"12"}},[r("div",{staticClass:"text-h2 green--text"},[r("b",[t._v(t._s(t.total_seller))])])]),t._v(" "),r("v-col",[r("div",{staticClass:"text-h6"},[r("b",[t._v("Total Number of Seller")])])])],1)],1)],1)]),t._v(" "),r("v-col",{attrs:{align:"center"}},[r("div",[r("v-card",{staticClass:"d-flex justify-center align-center mb-5 pa-5",attrs:{elevation:"10",height:"200",width:"200"}},[r("v-row",[r("v-col",{attrs:{cols:"12"}},[r("div",{staticClass:"text-h2 green--text"},[r("b",[t._v(t._s(t.total_buyer))])])]),t._v(" "),r("v-col",[r("div",{staticClass:"text-h6"},[r("b",[t._v("Total Number of Buyer")])])])],1)],1)],1)])],1)],1),t._v(" "),r("div",{attrs:{align:"center"}},[t._m(0),t._v(" "),t.chart_data1?r("div",{staticClass:"pie_chart",staticStyle:{height:"189px"},attrs:{align:"center"}},[r("pie-chart",{attrs:{data:t.chartData1,options:t.chartOptions}})],1):t._e()])])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"text-h5 pl-6 pt-5"},[r("b",[t._v("Reports and Analytics")])])}],!1,null,null,null);e.default=component.exports;f()(component,{VCard:j.a,VCol:v.a,VRow:m.a})}}]);