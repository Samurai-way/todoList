(this.webpackJsonpmy_todolist=this.webpackJsonpmy_todolist||[]).push([[0],{102:function(e,t,a){e.exports=a(131)},107:function(e,t,a){},108:function(e,t,a){},131:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(9),c=a.n(r);a(107),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(108);var i,l,s=a(174),u=a(175),d=a(176),m=a(167),f=a(133),b=a(170),O=a(178),E=a(179),T=a(177),g=a(18),v=a(7),p=a(60),j=a(82),h=a.n(j).a.create(Object(v.a)({baseURL:"https://social-network.samuraijs.com/api/1.1/"},{withCredentials:!0,headers:{"API-KEY":"1cdd9f77-c60e-4af5-b194-659e4ebd5d41"}})),k=function(){return h.get("todo-lists")},I=function(e){return h.post("todo-lists",{title:e})},S=function(e){return h.delete("todo-lists/".concat(e))},C=function(e,t){return h.put("todo-lists/".concat(e),{title:t})},y=function(e){return h.get("todo-lists/".concat(e,"/tasks"))},A=function(e,t){return h.delete("todo-lists/".concat(e,"/tasks/").concat(t))},w=function(e,t){return h.post("todo-lists/".concat(e,"/tasks"),{title:t})},D=function(e,t,a){return h.put("todo-lists/".concat(e,"/tasks/").concat(t),a)},L=function(e){return h.post("auth/login",e)},P=function(){return h.delete("auth/login")},N=function(){return h.get("auth/me")};!function(e){e[e.New=0]="New",e[e.InProgress=1]="InProgress",e[e.Completed=2]="Completed",e[e.Draft=3]="Draft"}(i||(i={})),function(e){e[e.Low=0]="Low",e[e.Middle=1]="Middle",e[e.Hi=2]="Hi",e[e.Urgently=3]="Urgently",e[e.Later=4]="Later"}(l||(l={}));var F=function(e,t){e.messages.length?t(M(e.messages[0])):t(M("Some error occurred")),t(H("failed"))},R=function(e,t){t(M(e.message?e.message:"Some error occurred")),t(H("failed"))},x={isLoggedIn:!1},G=function(e){return{type:"login/SET-IS-LOGGED-IN",value:e}},K={status:"idle",error:null,isInitialized:!1},M=function(e){return{type:"APP/SET-ERROR",error:e}},H=function(e){return{type:"APP/SET-STATUS",status:e}},U=[],V=a(35),q={},z=function(e,t,a){return function(n,o){var r=o().tasks[a].find((function(t){return t.id===e}));if(r){var c=Object(v.a)({deadline:r.deadline,description:r.description,priority:r.priority,startDate:r.startDate,title:r.title,status:r.status},t);D(a,e,c).then((function(o){if(0===o.data.resultCode){var r=function(e,t,a){return{type:"UPDATE-TASK",model:t,todolistId:a,taskId:e}}(e,t,a);n(r)}else F(o.data,n)})).catch((function(e){R(e,n)}))}else console.warn("task not found in the state")}},B=a(171),Y=a(132),_=a(45),J=a(180),W=a(168),$=o.a.memo((function(e){var t=e.addItem,a=e.disabled,r=void 0!==a&&a;console.log("AddItemForm called");var c=Object(n.useState)(""),i=Object(_.a)(c,2),l=i[0],s=i[1],u=Object(n.useState)(null),d=Object(_.a)(u,2),f=d[0],b=d[1],O=function(){""!==l.trim()?(t(l),s("")):b("Title is required")};return o.a.createElement("div",null,o.a.createElement(J.a,{variant:"outlined",disabled:r,error:!!f,value:l,onChange:function(e){s(e.currentTarget.value)},onKeyPress:function(e){null!==f&&b(null),13===e.charCode&&O()},label:"Title",helperText:f}),o.a.createElement(m.a,{color:"primary",onClick:O,disabled:r},o.a.createElement(W.a,null)))})),Q=a(90),X=o.a.memo((function(e){console.log("EditableSpan called");var t=Object(n.useState)(!1),a=Object(_.a)(t,2),r=a[0],c=a[1],i=Object(n.useState)(e.value),l=Object(_.a)(i,2),s=l[0],u=l[1];return r?o.a.createElement(J.a,{value:s,onChange:function(e){u(e.currentTarget.value)},autoFocus:!0,onBlur:function(){c(!1),e.onChange(s)}}):o.a.createElement("span",{onDoubleClick:function(){c(!0),u(e.value)}},e.value)})),Z=a(169),ee=a(182),te=o.a.memo((function(e){var t=Object(n.useCallback)((function(){return e.removeTask(e.task.id,e.todolistId)}),[e.task.id,e.todolistId]),a=Object(n.useCallback)((function(t){var a=t.currentTarget.checked;e.changeTaskStatus(e.task.id,a?i.Completed:i.New,e.todolistId)}),[e.task.id,e.todolistId]),r=Object(n.useCallback)((function(t){e.changeTaskTitle(e.task.id,t,e.todolistId)}),[e.task.id,e.todolistId]);return o.a.createElement("div",{key:e.task.id,className:e.task.status===i.Completed?"is-done":""},o.a.createElement(ee.a,{checked:e.task.status===i.Completed,color:"primary",onChange:a}),o.a.createElement(X,{value:e.task.title,onChange:r}),o.a.createElement(m.a,{onClick:t},o.a.createElement(Z.a,null)))})),ae=o.a.memo((function(e){var t=e.demo,a=void 0!==t&&t,r=Object(Q.a)(e,["demo"]);console.log("Todolist called");var c=Object(g.b)();Object(n.useEffect)((function(){if(!a){var e,t=(e=r.todolist.id,function(t){t(H("loading")),y(e).then((function(a){var n=a.data.items;t(function(e,t){return{type:"SET-TASKS",tasks:e,todolistId:t}}(n,e)),t(H("succeeded"))}))});c(t)}}),[]);var l=Object(n.useCallback)((function(e){r.addTask(e,r.todolist.id)}),[r.addTask,r.todolist.id]),s=Object(n.useCallback)((function(e){r.changeTodolistTitle(r.todolist.id,e)}),[r.todolist.id,r.changeTodolistTitle]),u=Object(n.useCallback)((function(){return r.changeFilter("all",r.todolist.id)}),[r.todolist.id,r.changeFilter]),d=Object(n.useCallback)((function(){return r.changeFilter("active",r.todolist.id)}),[r.todolist.id,r.changeFilter]),f=Object(n.useCallback)((function(){return r.changeFilter("completed",r.todolist.id)}),[r.todolist.id,r.changeFilter]),O=r.tasks;return"active"===r.todolist.filter&&(O=r.tasks.filter((function(e){return e.status===i.New}))),"completed"===r.todolist.filter&&(O=r.tasks.filter((function(e){return e.status===i.Completed}))),o.a.createElement("div",null,o.a.createElement("h3",null,o.a.createElement(X,{value:r.todolist.title,onChange:s}),o.a.createElement(m.a,{onClick:function(){r.removeTodolist(r.todolist.id)},disabled:"loading"===r.todolist.entityStatus},o.a.createElement(Z.a,null))),o.a.createElement($,{addItem:l,disabled:"loading"===r.todolist.entityStatus}),o.a.createElement("div",null,O.map((function(e){return o.a.createElement(te,{key:e.id,task:e,todolistId:r.todolist.id,removeTask:r.removeTask,changeTaskTitle:r.changeTaskTitle,changeTaskStatus:r.changeTaskStatus})}))),o.a.createElement("div",{style:{paddingTop:"10px"}},o.a.createElement(b.a,{variant:"all"===r.todolist.filter?"outlined":"text",onClick:u,color:"default"},"All"),o.a.createElement(b.a,{variant:"active"===r.todolist.filter?"outlined":"text",onClick:d,color:"primary"},"Active"),o.a.createElement(b.a,{variant:"completed"===r.todolist.filter?"outlined":"text",onClick:f,color:"secondary"},"Completed")))})),ne=a(14),oe=function(e){var t=e.demo,a=void 0!==t&&t,r=Object(g.c)((function(e){return e.todolists})),c=Object(g.c)((function(e){return e.tasks})),i=Object(g.c)((function(e){return e.auth.isLoggedIn})),l=Object(g.b)();Object(n.useEffect)((function(){if(!a&&i){var e=function(e){e(H("loading")),k().then((function(t){e({type:"SET-TODOLISTS",todolists:t.data}),e(H("succeeded"))})).catch((function(t){R(t,e)}))};l(e)}}),[]);var s=Object(n.useCallback)((function(e,t){var a=function(e,t){return function(a){A(t,e).then((function(n){var o=function(e,t){return{type:"REMOVE-TASK",taskId:e,todolistId:t}}(e,t);a(o)}))}}(e,t);l(a)}),[]),u=Object(n.useCallback)((function(e,t){var a=function(e,t){return function(a){a(H("loading")),w(t,e).then((function(e){if(0===e.data.resultCode){var t=function(e){return{type:"ADD-TASK",task:e}}(e.data.data.item);a(t),a(H("succeeded"))}else F(e.data,a)})).catch((function(e){R(e,a)}))}}(e,t);l(a)}),[]),d=Object(n.useCallback)((function(e,t,a){var n=z(e,{status:t},a);l(n)}),[]),m=Object(n.useCallback)((function(e,t,a){var n=z(e,{title:t},a);l(n)}),[]),f=Object(n.useCallback)((function(e,t){var a={type:"CHANGE-TODOLIST-FILTER",id:t,filter:e};l(a)}),[]),b=Object(n.useCallback)((function(e){var t,a=(t=e,function(e){e(H("loading")),e({type:"CHANGE-TODOLIST-ENTITY-STATUS",id:t,status:"loading"}),S(t).then((function(a){e(function(e){return{type:"REMOVE-TODOLIST",id:e}}(t)),e(H("succeeded"))}))});l(a)}),[]),O=Object(n.useCallback)((function(e,t){var a=function(e,t){return function(a){C(e,t).then((function(n){a(function(e,t){return{type:"CHANGE-TODOLIST-TITLE",id:e,title:t}}(e,t))}))}}(e,t);l(a)}),[]),E=Object(n.useCallback)((function(e){var t=function(e){return function(t){t(H("loading")),I(e).then((function(e){t({type:"ADD-TODOLIST",todolist:e.data.data.item}),t(H("succeeded"))}))}}(e);l(t)}),[l]);return i?o.a.createElement(o.a.Fragment,null,o.a.createElement(B.a,{container:!0,style:{padding:"20px"}},o.a.createElement($,{addItem:E})),o.a.createElement(B.a,{container:!0,spacing:3},r.map((function(e){var t=c[e.id];return o.a.createElement(B.a,{item:!0,key:e.id},o.a.createElement(Y.a,{style:{padding:"10px"}},o.a.createElement(ae,{todolist:e,tasks:t,removeTask:s,changeFilter:f,addTask:u,changeTaskStatus:d,removeTodolist:b,changeTaskTitle:m,changeTodolistTitle:O,demo:a})))})))):o.a.createElement(ne.a,{to:"/login"})},re=a(184),ce=a(181);function ie(e){return o.a.createElement(ce.a,Object.assign({elevation:6,variant:"filled"},e))}function le(){var e=Object(g.c)((function(e){return e.app.error})),t=Object(g.b)(),a=function(e,a){"clickaway"!==a&&t(M(null))},n=null!==e;return o.a.createElement(re.a,{open:n,autoHideDuration:6e3,onClose:a},o.a.createElement(ie,{onClose:a,severity:"error"},e))}var se=a(52),ue=a(185),de=a(166),me=a(172),fe=a(173),be=a(89),Oe=function(){var e=Object(g.b)(),t=Object(g.c)((function(e){return e.auth.isLoggedIn})),a=Object(be.a)({validate:function(e){return e.email?e.password?void 0:{password:"Password is required"}:{email:"Email is required"}},initialValues:{email:"",password:"",rememberMe:!1},onSubmit:function(t){var a;e((a=t,function(e){e(H("loading")),L(a).then((function(t){0===t.data.resultCode?(e(G(!0)),e(H("succeeded"))):F(t.data,e)})).catch((function(t){R(t,e)}))}))}});return t?o.a.createElement(ne.a,{to:"/"}):o.a.createElement(B.a,{container:!0,justify:"center"},o.a.createElement(B.a,{item:!0,xs:4},o.a.createElement("form",{onSubmit:a.handleSubmit},o.a.createElement(ue.a,null,o.a.createElement(de.a,null,o.a.createElement("p",null,"To log in get registered ",o.a.createElement("a",{href:"https://social-network.samuraijs.com/",target:"_blank"},"here")),o.a.createElement("p",null,"or use common test account credentials:"),o.a.createElement("p",null," Email: free@samuraijs.com"),o.a.createElement("p",null,"Password: free")),o.a.createElement(me.a,null,o.a.createElement(J.a,Object.assign({label:"Email",margin:"normal"},a.getFieldProps("email"))),a.errors.email?o.a.createElement("div",null,a.errors.email):null,o.a.createElement(J.a,Object.assign({type:"password",label:"Password",margin:"normal"},a.getFieldProps("password"))),a.errors.password?o.a.createElement("div",null,a.errors.password):null,o.a.createElement(fe.a,{label:"Remember me",control:o.a.createElement(ee.a,Object.assign({},a.getFieldProps("rememberMe"),{checked:a.values.rememberMe}))}),o.a.createElement(b.a,{type:"submit",variant:"contained",color:"primary"},"Login"))))))};var Ee=function(e){var t=e.demo,a=void 0!==t&&t,r=Object(g.c)((function(e){return e.app.status})),c=Object(g.c)((function(e){return e.app.isInitialized})),i=Object(g.c)((function(e){return e.auth.isLoggedIn})),l=Object(g.b)();Object(n.useEffect)((function(){l((function(e){N().then((function(t){0===t.data.resultCode&&e(G(!0)),e({type:"APP/SET-IS-INITIALIED",value:!0})}))}))}),[]);var v=Object(n.useCallback)((function(){l((function(e){e(H("loading")),P().then((function(t){0===t.data.resultCode?(e(G(!1)),e(H("succeeded"))):F(t.data,e)})).catch((function(t){R(t,e)}))}))}),[]);return c?o.a.createElement(se.a,null,o.a.createElement("div",{className:"App"},o.a.createElement(le,null),o.a.createElement(u.a,{position:"static"},o.a.createElement(d.a,null,o.a.createElement(m.a,{edge:"start",color:"inherit","aria-label":"menu"},o.a.createElement(T.a,null)),o.a.createElement(f.a,{variant:"h6"},"News"),i&&o.a.createElement(b.a,{color:"inherit",onClick:v},"Log out")),"loading"===r&&o.a.createElement(O.a,null)),o.a.createElement(E.a,{fixed:!0},o.a.createElement(ne.b,{exact:!0,path:"/",render:function(){return o.a.createElement(oe,{demo:a})}}),o.a.createElement(ne.b,{path:"/login",render:function(){return o.a.createElement(Oe,null)}})))):o.a.createElement("div",{style:{position:"fixed",top:"30%",textAlign:"center",width:"100%"}},o.a.createElement(s.a,null))},Te=a(42),ge=a(88),ve=Object(Te.c)({tasks:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"REMOVE-TASK":return Object(v.a)(Object(v.a)({},e),{},Object(V.a)({},t.todolistId,e[t.todolistId].filter((function(e){return e.id!=t.taskId}))));case"ADD-TASK":return Object(v.a)(Object(v.a)({},e),{},Object(V.a)({},t.task.todoListId,[t.task].concat(Object(p.a)(e[t.task.todoListId]))));case"UPDATE-TASK":return Object(v.a)(Object(v.a)({},e),{},Object(V.a)({},t.todolistId,e[t.todolistId].map((function(e){return e.id===t.taskId?Object(v.a)(Object(v.a)({},e),t.model):e}))));case"ADD-TODOLIST":return Object(v.a)(Object(v.a)({},e),{},Object(V.a)({},t.todolist.id,[]));case"REMOVE-TODOLIST":var a=Object(v.a)({},e);return delete a[t.id],a;case"SET-TODOLISTS":var n=Object(v.a)({},e);return t.todolists.forEach((function(e){n[e.id]=[]})),n;case"SET-TASKS":return Object(v.a)(Object(v.a)({},e),{},Object(V.a)({},t.todolistId,t.tasks));default:return e}},todolists:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"REMOVE-TODOLIST":return e.filter((function(e){return e.id!=t.id}));case"ADD-TODOLIST":return[Object(v.a)(Object(v.a)({},t.todolist),{},{filter:"all",entityStatus:"idle"})].concat(Object(p.a)(e));case"CHANGE-TODOLIST-TITLE":return e.map((function(e){return e.id===t.id?Object(v.a)(Object(v.a)({},e),{},{title:t.title}):e}));case"CHANGE-TODOLIST-FILTER":return e.map((function(e){return e.id===t.id?Object(v.a)(Object(v.a)({},e),{},{filter:t.filter}):e}));case"CHANGE-TODOLIST-ENTITY-STATUS":return e.map((function(e){return e.id===t.id?Object(v.a)(Object(v.a)({},e),{},{entityStatus:t.status}):e}));case"SET-TODOLISTS":return t.todolists.map((function(e){return Object(v.a)(Object(v.a)({},e),{},{filter:"all",entityStatus:"idle"})}));default:return e}},app:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"APP/SET-STATUS":return Object(v.a)(Object(v.a)({},e),{},{status:t.status});case"APP/SET-ERROR":return Object(v.a)(Object(v.a)({},e),{},{error:t.error});case"APP/SET-IS-INITIALIED":return Object(v.a)(Object(v.a)({},e),{},{isInitialized:t.value});default:return Object(v.a)({},e)}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"login/SET-IS-LOGGED-IN":return Object(v.a)(Object(v.a)({},e),{},{isLoggedIn:t.value});default:return e}}}),pe=Object(Te.d)(ve,Object(Te.a)(ge.a));window.store=pe,c.a.render(o.a.createElement(g.a,{store:pe},o.a.createElement(Ee,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[102,1,2]]]);
//# sourceMappingURL=main.a33108f3.chunk.js.map