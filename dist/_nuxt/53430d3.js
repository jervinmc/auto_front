(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{673:function(e,t,n){"use strict";n.r(t);var r=n(38),c=(n(35),n(5),n(43),n(45),n(593),n(304),n(116),{props:["isOpen","items","isAdd"],watch:{items:function(){this.users=this.items}},data:function(){return{snackbar:!1,reference:[],room_list:["Standard","Deluxe","Suite"],events:[],buttonLoad:!1,img_holder:"image_placeholder.png",users:[]}},methods:{submitHandler:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.buttonLoad=!0,t.prev=1,n=new FormData,null!=e.image&&""!=e.image&&n.append("image",e.image),null!=e.image_payslip&&""!=e.image_payslip&&n.append("image_payslip",e.image_payslip),n.append("is_verified",!0),n.append("is_active",!0),n.append("password",e.users.password),n.append("firstname",e.users.firstname),n.append("middlename",e.users.middlename),n.append("lastname",e.users.lastname),n.append("email",e.users.email),n.append("account_type","Admin"),t.next=15,e.$axios.post("/signup/",n,{headers:{}}).then((function(){e.snackbar=!0,e.isRegistered=!0,e.$emit("refresh"),e.$emit("notify"),e.isRegistered=!0,e.buttonLoad=!1}));case 15:t.sent,t.next=21;break;case 18:t.prev=18,t.t0=t.catch(1),e.buttonLoad=!1;case 21:case"end":return t.stop()}}),t,null,[[1,18]])})))()},addReference:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.buttonLoad=!0,t.prev=1,n=new FormData,null!=e.image&&""!=e.image&&n.append("image",e.image),n.append("reference_type",e.reference.reference_type),n.append("code",e.reference.code),n.append("name",e.reference.name),!e.isAdd){t.next=13;break}return t.next=10,e.$axios.post("/reference/",n,{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}}).then((function(){e.$refs.form.reset(),e.buttonLoad=!1,e.$emit("cancel"),e.$emit("refresh")}));case 10:t.sent,t.next=16;break;case 13:return t.next=15,e.$axios.patch("/discussions/".concat(e.discussions.id,"/"),n,{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}}).then((function(){e.buttonLoad=!1,e.$emit("cancel"),e.$emit("refresh")}));case 15:t.sent;case 16:t.next=21;break;case 18:t.prev=18,t.t0=t.catch(1),e.buttonLoad=!1;case 21:case"end":return t.stop()}}),t,null,[[1,18]])})))()},onFileUpload:function(e){if(this.image=e,(e=e.target.files[0]).name.length>100)alert("255 characters exceeded filename.");else{try{if(e.size>16e6)return void alert("Only 15mb file can be accepted.")}catch(e){return void alert(e)}this.image=e,null==e||(this.url,this.img_holder=URL.createObjectURL(e))}},cancel:function(){this.$emit("cancel")}}}),o=n(79),l=n(94),d=n.n(l),m=n(218),v=n(207),f=n(174),h=n(439),x=n(442),_=n(440),w=n(634),component=Object(o.a)(c,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-dialog",{attrs:{width:"1000",persistent:""},model:{value:e.isOpen,callback:function(t){e.isOpen=t},expression:"isOpen"}},[n("v-card",{staticClass:"pa-10"},[n("div",{staticClass:"text-h6",attrs:{align:"center"}},[e._v("Add User")]),e._v(" "),n("div",{staticClass:"text-h6"}),e._v(" "),n("v-col",{staticClass:"px-0",attrs:{cols:"12"}},[n("div",[e._v("First Name")]),e._v(" "),n("div",[n("v-text-field",{attrs:{outlined:""},model:{value:e.users.firstname,callback:function(t){e.$set(e.users,"firstname",t)},expression:"users.firstname"}})],1)]),e._v(" "),n("v-col",{staticClass:"px-0",attrs:{cols:"12"}},[n("div",[e._v("Last Name")]),e._v(" "),n("div",[n("v-text-field",{attrs:{outlined:""},model:{value:e.users.lastname,callback:function(t){e.$set(e.users,"lastname",t)},expression:"users.lastname"}})],1)]),e._v(" "),n("v-col",{staticClass:"px-0",attrs:{cols:"12"}},[n("div",[e._v("Email")]),e._v(" "),n("div",[n("v-text-field",{attrs:{outlined:""},model:{value:e.users.email,callback:function(t){e.$set(e.users,"email",t)},expression:"users.email"}})],1)]),e._v(" "),n("v-col",{staticClass:"px-0",attrs:{cols:"12"}},[n("div",[e._v("Password")]),e._v(" "),n("div",[n("v-text-field",{attrs:{outlined:"",type:"password"},model:{value:e.users.password,callback:function(t){e.$set(e.users,"password",t)},expression:"users.password"}})],1)]),e._v(" "),n("v-card-actions",[n("v-row",{attrs:{align:"center"}},[n("v-col",{attrs:{align:"end"}},[n("v-btn",{attrs:{color:"red",text:""},on:{click:e.cancel}},[e._v(" Cancel ")])],1),e._v(" "),n("v-col",[n("v-btn",{attrs:{color:"success",text:"",loading:e.buttonLoad},on:{click:e.submitHandler}},[e._v("\n            Save\n          ")])],1)],1)],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports;d()(component,{VBtn:m.a,VCard:v.a,VCardActions:f.a,VCol:h.a,VDialog:x.a,VRow:_.a,VTextField:w.a})}}]);