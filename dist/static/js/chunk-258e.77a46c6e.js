(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-258e"],{"7OA+":function(t,e,a){},A6Kr:function(t,e,a){"use strict";var i=a("Slkr");a.n(i).a},G2KY:function(t,e,a){"use strict";a.d(e,"a",function(){return d}),a.d(e,"f",function(){return u}),a.d(e,"b",function(){return p}),a.d(e,"d",function(){return m}),a.d(e,"e",function(){return h}),a.d(e,"c",function(){return f});var i=a("4d7F"),n=a.n(i),s=(a("aHnO"),a("P2sY")),r=a.n(s),o=a("QbLZ"),l=a.n(o),c=a("L2JU"),d={data:function(){return{pickerOptions:{disabledDate:function(t){return t.getTime()>Date.now()},shortcuts:[{text:"Last week",onClick:function(t){var e=new Date,a=new Date;a.setTime(a.getTime()-6048e5),t.$emit("pick",[a,e])}},{text:"Last month",onClick:function(t){var e=new Date,a=new Date;a.setTime(a.getTime()-2592e6),t.$emit("pick",[a,e])}},{text:"Last 3 months",onClick:function(t){var e=new Date,a=new Date;a.setTime(a.getTime()-7776e6),t.$emit("pick",[a,e])}}]},isAnswered:!0}},methods:{formatDate:function(t){if(t){var e=t.getDate();e<10&&(e="0"+e);var a=t.getMonth()+1;a<10&&(a="0"+a);var i=t.getFullYear();return i<10&&(i="0"+i),i+"-"+a+"-"+e}}},computed:l()({},Object(c.b)(["rangeDate"]),{date:{get:function(){return this.rangeDate},set:function(t){this.$store.dispatch("setRangeDate",t)}}}),created:function(){},mounted:function(){if(this.date){var t=new Date("2018-08-18"),e=new Date("2018-08-12");e.setTime(e.getTime()-6048e5),this.$store.dispatch("setRangeDate",[this.formatDate(e),this.formatDate(t)])}}},u={data:function(){var t=function(t,e,a){e?a():a(new Error)},e=function(t,e,a){e?a():a(new Error)};return{rules:{type:[{required:!0,message:"type is required",trigger:"change"}],date:[{validator:e,type:"date",required:!0,message:"Date is required",trigger:"blur"}],time:[{validator:e,type:"datetime",required:!0,message:"Time is required",trigger:"blur"}],title:[{required:!0,message:"title is required",trigger:"blur"}],id:[{validator:t,required:!0,message:"User is required",trigger:"change"}],project:[{validator:function(t,e,a){e?a():a(new Error)},required:!0,message:"Project is required",trigger:"change"}],name:[{validator:t,required:!0,message:"Name of project is requires",trigger:"change"}],team:[{required:!0,message:"Team is requires",trigger:"change"}]}}}},p={data:function(){return{dialogStatus:"",dialogFormVisible:!1,dialogViewVisible:!1,dialogFormLoading:!1,textMap:{update:"Edit",create:"Create",view:"View"},temp:{id:void 0,type:"",date:"",attributes:{"is-active":!1},relationships:{team:{data:{}},user:{data:{}},project:{data:{}}}}}},methods:{handleUpdate:function(t){var e=this;this.temp=r()({},t),this.dialogStatus="update",this.dialogFormVisible=!0,this.$nextTick(function(){e.$refs.dataForm.clearValidate()})},handleCreate:function(){var t=this;this.resetTemp(),this.dialogStatus="create",this.dialogFormVisible=!0,this.$nextTick(function(){t.$refs.dataForm.clearValidate()})},handleView:function(t){this.temp=r()({},t),this.dialogStatus="view",this.dialogViewVisible=!0},resetTemp:function(){this.temp={id:void 0,type:"",date:"",attributes:{"is-active":!1},relationships:{team:{data:{}},user:{data:{}},project:{data:{}}}}}}},m={data:function(){return{}},methods:{handleSizeChange:function(t){var e=this;this.$store.dispatch("actionEntityTable/setPagination",{type:"limit",value:t}).then(function(){e.getList()})},handleCurrentChange:function(t){var e=this;this.$store.dispatch("actionEntityTable/setPagination",{type:"page",value:t}).then(function(){e.getList()})}}},h={beforeDestroy:function(){this.$store.dispatch("actionEntityTable/clearStore")},methods:{getList:function(){var t=this;return new n.a(function(e,a){t.$store.dispatch("actionEntityTable/setLoader",!0),t.$store.dispatch("actionEntityTable/fetchList",t.type).then(function(){t.$store.dispatch("actionEntityTable/setLoader",!1),e()})})},removeEntity:function(t,e){var a=this;this.$confirm("This will permanently delete the entity. Continue?","Warning",{confirmButtonText:"OK",cancelButtonText:"Cancel",type:"warning"}).then(function(){a.$store.dispatch("actionEntityTable/deleteEntity",{row:t,type:a.type}).then(function(){a.$message({message:"Project was deleted",type:"success"}),t.status=e})}).catch(function(){a.$message({type:"info",message:"Delete canceled"})})},createEntity:function(t){var e=this;return new n.a(function(a,i){e.$refs.dataForm.validate(function(i){i&&(e.dialogFormLoading=!0,e.$store.dispatch("actionEntityTable/createEntity",{row:t,type:e.type}).then(function(t){e.dialogFormVisible=!1,e.dialogFormLoading=!1,e.$notify({title:"Success",message:e.setMessageName(e.type)+" was created",type:"success",duration:2e3}),a()}).catch(function(){e.dialogFormVisible=!1,e.dialogFormLoading=!1}))})})},updateEntity:function(t){var e=this;this.$refs.dataForm.validate(function(a){a&&(e.dialogFormLoading=!0,e.$store.dispatch("actionEntityTable/updateEntity",{row:t,type:e.type}).then(function(){e.dialogFormVisible=!1,e.dialogFormLoading=!1,e.$notify({title:"Success",message:e.setMessageName(e.type)+" was updated",type:"success",duration:2e3})}).catch(function(t){console.log(t),e.dialogFormVisible=!1,e.dialogFormLoading=!1}))})},setMessageName:function(t){switch(t){case"projects":return"Project";case"time-entries":return"Time entry";case"users":return"User";case"teams":return"Team";case"holidays":return"Holiday";case"absences":return"Absence";case"admins":return"Admin"}},remoteGetProjects:function(t){var e=this;"string"!=typeof t&&(t=this.temp&&this.getIncluded(this.temp.relationships.project.data.id)||""),this.loading=!0,this.$store.dispatch("actionEntityTable/fetchEntityByName",{type:"projects",query:t}).then(function(){e.loading=!1})},remoteGetUsers:function(t){var e=this;"string"!=typeof t&&(t=this.temp&&this.getIncluded(this.temp.relationships.user.data.id)||""),this.loading=!0,this.$store.dispatch("actionEntityTable/fetchEntityByName",{type:"users",query:t}).then(function(){e.loading=!1})},filter:function(){var t=this;return new n.a(function(e,a){t.$store.dispatch("actionEntityTable/setLoader",!0),t.$store.dispatch("actionEntityTable/setFilter",t.entity).then(function(){t.$store.dispatch("actionEntityTable/fetchList",t.type).finally(function(){t.$store.dispatch("actionEntityTable/setLoader",!1),e()})})})}}},f={methods:{getIncluded:function(t){if(this.included(this.type)){var e=this.included(this.type).find(function(e){if(e.id===t)return e});if(e)return e.attributes.name}}}}},Mz3J:function(t,e,a){"use strict";var i=a("QbLZ"),n=a.n(i),s=a("G2KY"),r=a("L2JU"),o={name:"Pagination",mixins:[s.d,s.e],props:{type:{type:String,require:!0,default:""}},computed:n()({},Object(r.b)({pagination:"actionEntityTable/pagination"})),methods:{handleSizeChange:function(t){var e=this;this.$store.dispatch("actionEntityTable/setPagination",{limit:t}).then(function(){e.$store.dispatch("actionEntityTable/setLoader",!0),e.getList().then(function(){e.$store.dispatch("actionEntityTable/setLoader",!1)})})},handleCurrentChange:function(t){var e=this;this.$store.dispatch("actionEntityTable/setPagination",{page:t}).then(function(){e.$store.dispatch("actionEntityTable/setLoader",!0),e.getList().then(function(){e.$store.dispatch("actionEntityTable/setLoader",!1),e.$scrollTo("body",1e3)})})}}},l=(a("A6Kr"),a("KHd+")),c=Object(l.a)(o,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"pagination-container"},[e("el-pagination",{directives:[{name:"show",rawName:"v-show",value:this.pagination.total>0,expression:"pagination.total > 0"}],attrs:{"current-page":this.pagination.page,"page-sizes":[10,20,30,50],"page-size":this.pagination.limit,total:this.pagination.total,background:"",layout:"total, sizes, prev, pager, next"},on:{"size-change":this.handleSizeChange,"current-change":this.handleCurrentChange}})],1)},[],!1,null,"26aa7921",null);c.options.__file="index.vue";e.a=c.exports},Slkr:function(t,e,a){},aHnO:function(t,e,a){t.exports={default:a("tbFO"),__esModule:!0}},cikZ:function(t,e,a){"use strict";var i=a("7OA+");a.n(i).a},dRwK:function(t,e,a){"use strict";var i=a("oARa");a.n(i).a},oARa:function(t,e,a){},pGU1:function(t,e,a){var i=a("Y7ZC"),n=a("vwuL").f,s=a("5K7Z");i(i.S,"Reflect",{deleteProperty:function(t,e){var a=n(s(t),e);return!(a&&!a.configurable)&&delete t[e]}})},tbFO:function(t,e,a){a("pGU1"),t.exports=a("WEpk").Reflect.deleteProperty},ypNi:function(t,e,a){"use strict";a.r(e);var i=a("QbLZ"),n=a.n(i),s=a("L2JU"),r=a("G2KY"),o={name:"AbsenseTable",components:{pagination:a("Mz3J").a},mixins:[r.f,r.b,r.e,r.c],data:function(){return{multipleSelection:[],tableKey:0,type:"absences",loading:!1}},computed:n()({},Object(s.b)({list:"actionEntityTable/list",filterable:"actionEntityTable/filterable",included:"actionEntityTable/included",loader:"actionEntityTable/loader"}),{entity:function(){return{date:this.temp.attributes.date,reason:this.temp.attributes.reason,comment:this.temp.attributes.comment,user_id:this.temp.relationships.user.data.id,project_id:this.temp.relationships.project.data.id}}}),created:function(){this.getList()},methods:{update:function(){var t={id:this.temp.id,absence:this.entity};this.updateEntity(t)},create:function(){var t={absence:this.entity};this.createEntity(t)},handleSelectionChange:function(t){this.multipleSelection=t}}},l=(a("dRwK"),a("KHd+")),c=Object(l.a)(o,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",[a("div",{staticClass:"position-create-new-category"},[a("div",[a("el-button",{staticClass:"filter-item create-new-category",attrs:{type:"primary"},on:{click:t.handleCreate}},[t._v("Add new absence")])],1)]),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loader,expression:"loader"}],key:t.tableKey,ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:t.list(t.type),border:"",fit:"","highlight-current-row":""},on:{"selection-change":t.handleSelectionChange}},[a("el-table-column",{attrs:{type:"selection",align:"center",width:"55"}}),a("el-table-column",{attrs:{label:t.$t("table.id"),align:"center",width:"65"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row.id))])]}}])}),a("el-table-column",{attrs:{label:"Name"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(t.getIncluded(e.row.relationships.user.data.id)))])]}}])}),a("el-table-column",{attrs:{label:"Date"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row.attributes.date))])]}}])}),a("el-table-column",{attrs:{label:"Reason"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row.attributes.reason))])]}}])}),a("el-table-column",{attrs:{label:"Comment"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row.attributes.comment))])]}}])}),a("el-table-column",{attrs:{label:t.$t("table.actions"),width:"230","class-name":"small-padding fixed-width"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"info",size:"mini"},on:{click:function(a){t.handleView(e.row)}}},[t._v("View")]),a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(a){t.handleUpdate(e.row)}}},[t._v(t._s(t.$t("table.edit")))]),"deleted"!==e.row.status?a("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(a){t.removeEntity(e.row,"deleted")}}},[t._v(t._s(t.$t("table.delete")))]):t._e()]}}])})],1),t.list(t.type).length?a("pagination",{attrs:{type:t.type}}):t._e()],1),a("el-dialog",{attrs:{title:t.textMap[t.dialogStatus],visible:t.dialogFormVisible},on:{"update:visible":function(e){t.dialogFormVisible=e},open:t.remoteGetUsers}},[a("el-form",{ref:"dataForm",staticStyle:{width:"400px","margin-left":"50px"},attrs:{rules:t.rules,model:t.temp.attributes,"label-position":"left","label-width":"70px"}},[a("el-form-item",{attrs:{label:"User",prop:"user"}},[a("el-select",{attrs:{filterable:"",remote:"",placeholder:"Please enter a keyword","remote-method":t.remoteGetUsers,loading:t.loading,clearable:""},on:{focus:t.remoteGetUsers},model:{value:t.temp.relationships.user.data.id,callback:function(e){t.$set(t.temp.relationships.user.data,"id",e)},expression:"temp.relationships.user.data.id"}},t._l(t.filterable("users"),function(t){return a("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})}))],1),a("el-form-item",{attrs:{label:"Date",prop:"date"}},[a("el-date-picker",{attrs:{format:"yyyy-MM-dd","value-format":"yyyy-MM-dd",type:"date",placeholder:"Please pick a date"},model:{value:t.temp.attributes.date,callback:function(e){t.$set(t.temp.attributes,"date",e)},expression:"temp.attributes.date"}})],1),a("el-form-item",{attrs:{label:"Reason",prop:"reason"}},[a("el-radio-group",{model:{value:t.temp.attributes.reason,callback:function(e){t.$set(t.temp.attributes,"reason",e)},expression:"temp.attributes.reason"}},[a("el-radio",{attrs:{label:"vacation"}},[t._v("Vacation")]),a("el-radio",{attrs:{label:"illness"}},[t._v("Illness")]),a("el-radio",{attrs:{label:"other"}},[t._v("Other")])],1)],1),a("el-form-item",{attrs:{label:"Comment",prop:"comment"}},[a("el-input",{attrs:{placeholder:"Please input",clearable:""},model:{value:t.temp.attributes.comment,callback:function(e){t.$set(t.temp.attributes,"comment",e)},expression:"temp.attributes.comment"}})],1)],1),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.dialogFormVisible=!1}}},[t._v(t._s(t.$t("table.cancel")))]),"create"===t.dialogStatus?a("el-button",{attrs:{type:"primary",loading:t.dialogFormLoading},on:{click:t.create}},[t._v(t._s(t.$t("table.confirm")))]):a("el-button",{attrs:{type:"primary",loading:t.dialogFormLoading},on:{click:t.update}},[t._v("Update")])],1)],1),a("el-dialog",{attrs:{title:t.textMap[t.dialogStatus],visible:t.dialogViewVisible},on:{"update:visible":function(e){t.dialogViewVisible=e}}},[a("div",{staticClass:"view-flex"},[a("div",[a("strong",[t._v("ID")]),a("div",[t._v(t._s(t.temp.id))])]),a("div",[a("strong",[t._v("NAME")]),a("div",[t._v(t._s(t.getIncluded(t.temp.relationships.user.data.id)))])]),a("div",[a("strong",[t._v("DATE")]),a("div",[t._v(t._s(t.temp.attributes.date))])]),a("div",[a("strong",[t._v("REASON")]),a("div",[t._v(t._s(t.temp.attributes.reason))])]),a("div",[a("strong",[t._v("COMMENT")]),a("div",[t._v(t._s(t.temp.attributes.comment))])])])])],1)},[],!1,null,"7f2098cc",null);c.options.__file="absenceTable.vue";var d=c.exports,u={name:"Filters",mixins:[r.e,r.c,r.a],data:function(){return{type:"absences",searchParams:{date:[],user:"",reason:""}}},computed:n()({},Object(s.b)({filterable:"actionEntityTable/filterable"}),{entity:function(){return{date_from:this.searchParams.date?this.searchParams.date[0]:"",date_to:this.searchParams.date?this.searchParams.date[1]:"",by_reason:this.searchParams.reason,by_user:this.searchParams.user}}}),methods:{clearFilter:function(){this.searchParams={date:[],user:"",reason:"any"}}}},p=Object(l.a)(u,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"time-entries-filters-container"},[a("div",{staticClass:"time-entries-filters"},[a("div",{staticClass:"filters-label"},[t._v("User name"),a("el-select",{attrs:{filterable:"",remote:"",clearable:"",placeholder:"Please enter a keyword","remote-method":t.remoteGetUsers},on:{focus:t.remoteGetUsers},model:{value:t.searchParams.user,callback:function(e){t.$set(t.searchParams,"user",e)},expression:"searchParams.user"}},t._l(t.filterable("users"),function(t){return a("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})}))],1)]),a("div",{staticClass:"time-entries-filters"},[a("div",{staticClass:"filters-label"},[t._v("Reason"),a("el-select",{attrs:{placeholder:"Please select"},model:{value:t.searchParams.reason,callback:function(e){t.$set(t.searchParams,"reason",e)},expression:"searchParams.reason"}},[a("el-option",{attrs:{value:"",label:"Any"}}),a("el-option",{attrs:{value:"vacation",label:"Vacation"}}),a("el-option",{attrs:{value:"illness",label:"Illness"}}),a("el-option",{attrs:{value:"other",label:"Other"}})],1)],1)]),a("div",{staticClass:"time-entries-filters"},[a("div",{staticClass:"filters-label"},[t._v("Date")]),a("el-date-picker",{attrs:{format:"yyyy-MM-dd",type:"daterange","range-separator":"-","value-format":"yyyy-MM-dd","picker-options":t.pickerOptions,"start-placeholder":"Start date","end-placeholder":"End date",placeholder:"Please pick a date","prefix-icon":"date-calendar"},model:{value:t.searchParams.date,callback:function(e){t.$set(t.searchParams,"date",e)},expression:"searchParams.date"}})],1),a("div",{staticStyle:{margin:"19px 0 0"}},[a("div",[a("el-button",{staticClass:"el-button-filter",on:{click:t.filter}},[t._v("Filter")]),a("el-button",{staticClass:"el-button-clear-filter",attrs:{type:"info"},on:{click:t.clearFilter}},[t._v("Clear Filters")])],1)])])},[],!1,null,null,null);p.options.__file="filters.vue";var m={name:"Absense",components:{absenceTable:d,filters:p.exports},data:function(){return{}},computed:n()({},Object(s.b)({loader:"actionEntityTable/loader"}))},h=(a("cikZ"),Object(l.a)(m,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{directives:[{name:"loading",rawName:"v-loading",value:this.loader,expression:"loader"}]},[e("div",{staticClass:"timebot-header"},[this._v("Absence")]),e("filters"),e("absenceTable")],1)},[],!1,null,"3d5f3fcd",null));h.options.__file="index.vue";e.default=h.exports}}]);