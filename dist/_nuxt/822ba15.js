(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{225:function(t,e,o){"use strict";o.r(e);var r={methods:{route:function(link){window.location.href=link}}},n=o(79),c=o(94),l=o.n(c),v=o(439),m=o(172),d=o(440),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"black--text",staticStyle:{width:"100%"}},[o("v-row",{staticClass:"mt-16"},[o("v-col",{staticClass:"mr-16",attrs:{align:"start",cols:"12",xl:"6",md:"6",lg:"6"}},[o("v-row",[o("v-col",{attrs:{cols:"3"}},[o("v-img",{attrs:{src:"/auto_logo.png",height:"250",width:"250",contain:""}})],1),t._v(" "),o("v-col",[o("div",{staticStyle:{color:"#6609af"}},[o("b",[t._v("About the Shop")])]),t._v(" "),o("div",[t._v("\n            Auto-Oto aims to provide a platform that is centralized for the buying, selling and bidding of cars. Car enthusiast, new and old car owners will have an easy time picking their preferred cars by the use of Sales Force Automation with a key component of Sales Recommendation by matching their preference into the recommendation market. This will help them choose the best car matched for them.\n          ")]),t._v(" "),o("a",{attrs:{href:"https://www.facebook.com/Auto-Oto-100287059229982",target:"_blank"}},[o("v-img",{attrs:{src:"/facebook.png",height:"30",width:"30"}})],1)])],1)],1),t._v(" "),o("v-col",{class:t.$vuetify.breakpoint.width>400?"pl-16":"pl-5",attrs:{align:"start",cols:"12",xl:"3",lg:"3",md:"3"}},[o("div",{staticStyle:{color:"#6609af"}},[o("b",[t._v("Main Menu")])]),t._v(" "),o("div",{staticClass:"py-2",staticStyle:{cursor:"pointer"},on:{click:function(e){return t.route("/about")}}},[t._v("About")]),t._v(" "),o("div",{staticClass:"py-2",staticStyle:{cursor:"pointer"},on:{click:function(e){return t.route("/about")}}},[t._v("Home")]),t._v(" "),o("div",{staticClass:"py-2",staticStyle:{cursor:"pointer"},on:{click:function(e){return t.route("/market")}}},[t._v("Market")]),t._v(" "),o("div",{staticClass:"py-2",staticStyle:{cursor:"pointer"},on:{click:function(e){return t.route("/contacts")}}},[t._v("Contact us")])]),t._v(" "),o("v-col",{attrs:{align:"start"}},[o("div",{staticStyle:{color:"#6609af"}},[o("b",[t._v("Contacts")])]),t._v(" "),o("div",{staticClass:"py-2"},[t._v("\n        Burol Main, Dasmariñas Cavite "),o("br")]),t._v(" "),o("div",{staticClass:"py-2"},[t._v("\n        autootoncst@gmail.com\n          "),o("br"),t._v("\n        09156830724\n      ")])])],1)],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{VCol:v.a,VImg:m.a,VRow:d.a})},279:function(t,e,o){var content=o(344);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(21).default)("48517564",content,!0,{sourceMap:!1})},302:function(t,e,o){"use strict";var r=o(2),n=(o(35),{components:{Footer:o(225).default},created:function(){this.loadData()},name:"DefaultLayout",data:function(){var t;return t={profileImage:"",clipped:!1,drawer:!1,name:"",account_type:"",isOpenLogout:!1,fixed:!1,items:[{icon:"mdi-apps",title:"Dashboard",to:"/admin/dashboard"},{icon:"mdi-cog",title:"System Configuration",to:"/admin/configuration"},{icon:"mdi-account-group",title:"Users",to:"/admin/usermanagement"},{icon:"mdi-alert",title:"Reports",to:"/admin/reports"},{icon:"mdi-home",title:"Homepage",to:"/"}],items_seller:[{icon:"mdi-apps",title:"Dashboard",to:"/seller/dashboard"},{icon:"mdi-scale-unbalanced",title:"Bid",to:"/seller/bid"},{icon:"mdi-bullhorn",title:"Messages",to:"/seller/messages"},{icon:"mdi-garage",title:"Transactions",to:"/seller/transactions"},{icon:"mdi-swap-horizontal-bold",title:"Swap Cars",to:"/seller/swap"},{icon:"mdi-calendar-check",title:"Create a Listing",to:"/seller/c-listing"},{icon:"mdi-calendar-text",title:"Listing",to:"/seller/listing"},{icon:"mdi-currency-usd",title:"Sold",to:"/seller/sold"},{icon:"mdi-alert",title:"Reports",to:"/seller/reports"},{icon:"mdi-home",title:"Homepage",to:"/"}],items_customer:[{icon:"mdi-calendar-multiple",title:"Messages",to:"/customer/messages"},{icon:"mdi-calendar-multiple",title:"Transactions/Activity",to:"/customer/transaction"},{icon:"mdi-account-group",title:"Reports",to:"/customer/reports"},{icon:"mdi-calendar-multiple",title:"Homepage",to:"/"}],miniVariant:!1,right:!0,rightDrawer:!1,title:"Vuetify.js"},Object(r.a)(t,"account_type",""),Object(r.a)(t,"token",null),t},methods:{loadData:function(){this.token=localStorage.getItem("token"),this.name=localStorage.getItem("firstname")+" "+localStorage.getItem("lastname"),this.account_type=localStorage.getItem("account_type")},confirm:function(){localStorage.clear(),window.location.href="/",this.isOpenLogout=!1},logout:function(){this.isOpenLogout=!0},route:function(t){"index"!=t?window.location.href="/"+t:this.$router.push("/")}}}),c=o(79),l=o(94),v=o.n(l),m=o(438),d=o(446),_=o(441),f=o(218),h=o(207),w=o(174),y=o(439),C=o(447),k=o(442),x=o(206),S=o(172),V=o(210),L=o(131),A=o(211),O=o(114),I=o(443),$=o(444),z=o(440),M=o(445),D=o(224),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-app",{attrs:{dark:""}},[o("v-dialog",{attrs:{width:"500",persistent:""},model:{value:t.isOpenLogout,callback:function(e){t.isOpenLogout=e},expression:"isOpenLogout"}},[o("v-card",{staticClass:"pa-10"},[o("div",{staticClass:"text-h6",attrs:{align:"center"}},[t._v("Logout User")]),t._v(" "),o("div",{staticClass:"pa-10",attrs:{align:"center"}},[t._v("\n      Would you like to logout?\n  ")]),t._v(" "),o("v-card-actions",[o("v-row",{attrs:{align:"center"}},[o("v-col",{attrs:{align:"end"}},[o("v-btn",{attrs:{color:"red",text:""},on:{click:function(e){t.isOpenLogout=!1}}},[t._v(" Cancel ")])],1),t._v(" "),o("v-col",[o("v-btn",{attrs:{color:"success",text:""},on:{click:t.confirm}},[t._v(" Logout ")])],1)],1)],1)],1)],1),t._v(" "),null==t.account_type||"index"==t.$route.name||"contacts"==t.$route.name||"about"==t.$route.name||"market"==t.$route.name||"login"==t.$route.name||"seller"==t.$route.name?o("v-app-bar",{attrs:{color:"white","clipped-left":t.clipped,fixed:"",app:"",elevation:"1"}},[o("v-img",{staticStyle:{cursor:"pointer"},attrs:{src:"/auto_logo.png",height:"60",width:"60",contain:""},on:{click:function(e){return t.route("index")}}}),t._v(" "),o("v-spacer"),t._v(" "),o("v-toolbar-title",{staticClass:"px-4 black--text",staticStyle:{cursor:"pointer","font-size":"16px"},on:{click:function(e){return t.route("index")}}},[o("v-icon",{staticClass:"pb-1"},[t._v("mdi-home")]),t._v("Home")],1),t._v(" "),o("v-toolbar-title",{staticClass:"px-4 black--text",staticStyle:{cursor:"pointer","font-size":"16px"},on:{click:function(e){return t.route("market")}}},[o("v-icon",{staticClass:"pb-1"},[t._v("mdi-store")]),t._v(" Market")],1),t._v(" "),o("v-toolbar-title",{staticClass:"px-4 black--text",staticStyle:{cursor:"pointer","font-size":"16px"},on:{click:function(e){return t.route("contacts")}}},[o("v-icon",{staticClass:"pb-1"},[t._v("mdi-phone")]),t._v(" Contact us")],1),t._v(" "),o("v-toolbar-title",{staticClass:"px-4 black--text",staticStyle:{cursor:"pointer","font-size":"16px"},on:{click:function(e){return t.route("about")}}},[o("v-icon",{staticClass:"pb-1"},[t._v("mdi-information")]),t._v(" About us")],1),t._v(" "),null==t.token?o("v-toolbar-title",{staticClass:"px-4 black--text",staticStyle:{cursor:"pointer","font-size":"16px"},on:{click:function(e){return t.route("seller")}}},[o("v-icon",{staticClass:"pb-1"},[t._v("mdi-account")]),t._v(" Be a seller")],1):t._e(),t._v(" "),o("div",{staticClass:"pl-16"}),t._v(" "),null==t.token?o("v-toolbar-title",{staticClass:"px-4 black--text",staticStyle:{cursor:"pointer","font-size":"16px"},on:{click:function(e){return t.route("login")}}},[o("v-icon",{staticClass:"pb-1"},[t._v("mdi-login")]),t._v("Login")],1):o("v-toolbar-title",{staticClass:"px-4 black--text",staticStyle:{cursor:"pointer","font-size":"16px"},on:{click:function(e){"Seller"==t.account_type?t.route("seller/dashboard"):"Customer"==t.account_type?t.route("customer/transaction"):t.route("admin/dashboard")}}},[o("v-icon",{staticClass:"pb-1"},[t._v("mdi-login")]),t._v(t._s(t.name))],1),t._v(" "),null==t.token?o("v-toolbar-title",{staticClass:"px-4 black--text",staticStyle:{cursor:"pointer","font-size":"16px"},on:{click:function(e){return t.route("register")}}},[o("v-icon",{staticClass:"pb-1"},[t._v("mdi-plus")]),t._v(" Register")],1):t._e()],1):"Admin"==t.account_type?o("v-app-bar",{attrs:{color:"#6609af","clipped-left":t.clipped,fixed:"",app:"",elevation:"1"}},[o("v-app-bar-nav-icon",{attrs:{color:"white"},on:{click:function(e){t.drawer=!0}}}),t._v(" "),o("div",{staticClass:"white--text"},[t._v("\n     Auto-Oto Admin\n  ")]),t._v(" "),o("div",{staticClass:"white--text"},[t._v("\n    "+t._s("admin-configuration"==t.$route.name?"System Configuration":"")+"\n  ")])],1):"Seller"==t.account_type?o("v-app-bar",{attrs:{color:"#6609af","clipped-left":t.clipped,fixed:"",app:"",elevation:"1"}},[o("v-app-bar-nav-icon",{attrs:{color:"white"},on:{click:function(e){t.drawer=!0}}}),t._v(" "),o("div",{staticClass:"white--text"},[t._v("\n     Auto-Oto Seller\n  ")])],1):"Customer"==t.account_type?o("v-app-bar",{attrs:{color:"#6609af","clipped-left":t.clipped,fixed:"",app:"",elevation:"1"}},[o("v-app-bar-nav-icon",{attrs:{color:"white"},on:{click:function(e){t.drawer=!0}}}),t._v(" "),o("div",{staticClass:"white--text"},[t._v("\n     Auto-Oto Customer\n  ")])],1):t._e(),t._v(" "),o("v-main",[o("v-container",{staticClass:"pa-0",attrs:{fluid:""}},[o("Nuxt")],1)],1),t._v(" "),o("v-navigation-drawer",{attrs:{absolute:"",bottom:"",temporary:"",color:"#6609af"},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},["Admin"==t.account_type?o("v-list",{attrs:{nav:"",dense:""}},[o("v-list-item-group",{attrs:{"active-class":"primary",color:"white"}},[t._l(t.items,(function(e,r){return o("v-list-item",{key:r,attrs:{color:"white",to:t.items[r].to}},[o("v-icon",{staticClass:"pr-2",attrs:{color:"white"}},[t._v(t._s(t.items[r].icon))]),t._v(" "),o("v-list-item-title",{staticStyle:{color:"white"}},[t._v(t._s(t.items[r].title))])],1)})),t._v(" "),o("v-list-item",{attrs:{color:"white"},on:{click:t.logout}},[o("v-icon",{staticClass:"pr-2",attrs:{color:"white"}},[t._v("mdi-logout")]),t._v(" "),o("v-list-item-title",{staticStyle:{color:"white"}},[t._v("Logout")])],1)],2)],1):t._e(),t._v(" "),"Seller"==t.account_type?o("v-list",{attrs:{nav:"",dense:""}},[o("v-list-item-group",{attrs:{"active-class":"primary",color:"white"}},[t._l(t.items_seller,(function(e,r){return o("v-list-item",{key:r,attrs:{color:"white",to:t.items_seller[r].to}},[o("v-icon",{staticClass:"pr-2",attrs:{color:"white"}},[t._v(t._s(t.items_seller[r].icon))]),t._v(" "),o("v-list-item-title",{staticStyle:{color:"white"}},[t._v(t._s(t.items_seller[r].title))])],1)})),t._v(" "),o("v-list-item",{attrs:{color:"white"},on:{click:t.logout}},[o("v-icon",{staticClass:"pr-2",attrs:{color:"white"}},[t._v("mdi-logout")]),t._v(" "),o("v-list-item-title",{staticStyle:{color:"white"}},[t._v("Logout")])],1)],2)],1):t._e(),t._v(" "),"Customer"==t.account_type?o("v-list",{attrs:{nav:"",dense:""}},[o("v-list-item-group",{attrs:{"active-class":"primary",color:"white"}},[t._l(t.items_customer,(function(e,r){return o("v-list-item",{key:r,attrs:{color:"white",to:t.items_customer[r].to}},[o("v-icon",{staticClass:"pr-2",attrs:{color:"white"}},[t._v(t._s(t.items_customer[r].icon))]),t._v(" "),o("v-list-item-title",{staticStyle:{color:"white"}},[t._v(t._s(t.items_customer[r].title))])],1)})),t._v(" "),o("v-list-item",{attrs:{color:"white"},on:{click:t.logout}},[o("v-icon",{staticClass:"pr-2",attrs:{color:"white"}},[t._v("mdi-logout")]),t._v(" "),o("v-list-item-title",{staticStyle:{color:"white"}},[t._v("Logout")])],1)],2)],1):t._e()],1)],1)}),[],!1,null,null,null);e.a=component.exports;v()(component,{VApp:m.a,VAppBar:d.a,VAppBarNavIcon:_.a,VBtn:f.a,VCard:h.a,VCardActions:w.a,VCol:y.a,VContainer:C.a,VDialog:k.a,VIcon:x.a,VImg:S.a,VList:V.a,VListItem:L.a,VListItemGroup:A.a,VListItemTitle:O.c,VMain:I.a,VNavigationDrawer:$.a,VRow:z.a,VSpacer:M.a,VToolbarTitle:D.a})},316:function(t,e,o){o(317),t.exports=o(318)},338:function(t,e){},343:function(t,e,o){"use strict";o(279)},344:function(t,e,o){var r=o(20)(!1);r.push([t.i,"h1[data-v-6ffeedc3]{font-size:20px}",""]),t.exports=r},88:function(t,e,o){"use strict";var r={name:"EmptyLayout",layout:"empty",props:{error:{type:Object,default:null}},data:function(){return{pageNotFound:"404 Not Found",otherError:"An error occurred"}},head:function(){return{title:404===this.error.statusCode?this.pageNotFound:this.otherError}}},n=(o(343),o(79)),c=o(94),l=o.n(c),v=o(438),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-app",{attrs:{dark:""}},[404===t.error.statusCode?o("h1",[t._v("\n    "+t._s(t.pageNotFound)+"\n  ")]):o("h1",[t._v("\n    "+t._s(t.otherError)+"\n  ")]),t._v(" "),o("NuxtLink",{attrs:{to:"/"}},[t._v(" Home page ")])],1)}),[],!1,null,"6ffeedc3",null);e.a=component.exports;l()(component,{VApp:v.a})}},[[316,78,14,79]]]);