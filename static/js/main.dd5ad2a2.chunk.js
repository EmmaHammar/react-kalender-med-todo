/*! For license information please see main.dd5ad2a2.chunk.js.LICENSE.txt */
(this["webpackJsonpreact-kalender-med-todo"]=this["webpackJsonpreact-kalender-med-todo"]||[]).push([[0],[,,,,,,,,,,,function(e,t,a){},function(e,t,a){},,function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),r=a(6),s=a.n(r),i=(a(11),a(2));var d=function(e){fetch("https://react-kalender-med-to-do-be.herokuapp.com/masterlist").then((function(e){return e.json()})).then((function(t){e(t)}))},o=(a(12),a(0));var j=function(){return Object(o.jsx)("header",{children:Object(o.jsx)("h1",{children:"My Calendar"})})};a(14);function u(e,t){return t.isSame(e,"day")}function l(e,t){return function(e){return e.isBefore(new Date,"day")}(e)?"before":u(e,t)?"selected-day":u(e,t)?console.log("date clicked",e):function(e){return e.isSame(new Date,"day")}(e)?"today":""}function b(e){var t=e.value,a=e.setValue;return Object(o.jsxs)("div",{className:"calendar-header",children:[Object(o.jsx)("div",{className:"prev",onClick:function(){return a(t.clone().subtract(1,"month"))},children:String.fromCharCode(171)}),Object(o.jsxs)("div",{className:"curr",children:[t.format("YYYY")," ",t.format("MMMM")]}),Object(o.jsx)("div",{className:"next",onClick:function(){return a(t.clone().add(1,"month"))},children:String.fromCharCode(187)})]})}var O=a(3);var f=function(e){fetch("https://react-kalender-med-to-do-be.herokuapp.com/task",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){return e.json()})).then((function(e){console.log("newTask \xe4r sparad",e)}))};var h=function(e){var t=Object(c.useState)(""),a=Object(i.a)(t,2),n=a[0],r=a[1],s=Object(c.useState)([]),d=Object(i.a)(s,2),j=(d[0],d[1]),u=Object(c.useState)(!1),l=Object(i.a)(u,2),b=(l[0],l[1],Object(c.useState)(e.isUpdate)),f=Object(i.a)(b,2),h=(f[0],f[1],Object(c.useState)(!1)),p=Object(i.a)(h,2),m=(p[0],p[1],{date:e.selectedDate,title:n,isFinish:!1});return Object(o.jsxs)("div",{children:[Object(o.jsxs)("h3",{children:["L\xe4gg till ny uppgift med deadline: ",e.selectedDate]}),Object(o.jsxs)("form",{onSubmit:function(t){e.addTask(m);var a=Object(O.a)({},a);Object(O.a)(Object(O.a)({},a),m);j(a),console.log("masterArr i setMasterArr(masterArr) i AddTask.js:",a),t.preventDefault()},children:[Object(o.jsx)("input",{type:"text",placeholder:"Skriv ny uppgift",value:n,onChange:function(e){r(e.target.value)}}),Object(o.jsx)("button",{type:"submit",id:"saveBtn",children:"Spara"})]})]})};var p=function(e){fetch("https://react-kalender-med-to-do-be.herokuapp.com/checkbox",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){return e.json()})).then((function(e){console.log("res from fetch updateCheckbox():",e)}))};var m=function(e){var t=Object(c.useState)([]),a=Object(i.a)(t,2),n=a[0],r=a[1],s=Object(c.useState)(!1),d=Object(i.a)(s,2),j=d[0];d[1],Object(c.useEffect)((function(){r(e.masterArr)}),[]),Object(c.useEffect)((function(){r(e.masterArr)}),[j]);var u=function(t){var a={id:t.target.id,isFinish:!0};e.deleteTask(a)};return Object(o.jsxs)("div",{children:[Object(o.jsxs)("h3",{children:["Task-list f\xf6r: ",e.selectedDate]}),Object(o.jsx)("ul",{children:Object.values(n).map((function(t,a){return t.date===e.selectedDate?Object(o.jsxs)("div",{children:[" ",Object(o.jsx)("input",{id:t._id,type:"checkbox",onClick:u}),Object(o.jsx)("li",{children:t.title})]},a):""}))})]})},v=a(5);var x=function(e){var t=Object(c.useState)([]),a=Object(i.a)(t,2),n=a[0],r=a[1],s=Object(c.useState)(v()),d=Object(i.a)(s,2),j=d[0],u=d[1],O=Object(c.useState)(!1),f=Object(i.a)(O,2),p=f[0],x=f[1],k=Object(c.useState)(""),S=Object(i.a)(k,2),y=S[0],g=S[1],A=Object(c.useState)(e.masterArr),T=Object(i.a)(A,2),C=T[0],U=T[1],D=Object(c.useState)(e.doUpdate),M=Object(i.a)(D,2),Y=(M[0],M[1],Object(c.useState)(e.isUpdate)),F=Object(i.a)(Y,2);F[0],F[1],Object(c.useEffect)((function(){console.log("masterArr i MyCalendar:",e.masterArr),U(e.masterArr)}),[e.masterArr]);var N=j.clone().startOf("month").startOf("week").weekday(1),E=j.clone().endOf("month").endOf("week");Object(c.useEffect)((function(){for(var e=N.clone().subtract(1,"day"),t=[];e.isBefore(E,"day");)t.push(Array(7).fill(0).map((function(){return e.add(1,"day").clone()})));r(t)}),[j]),Object(c.useEffect)((function(){}),[p,y]);var w=function(e,t){var a=[];for(var c in C)C[c].date===v(e).format("YYYY-MM-DD")&&!1===C[c].isFinish&&a.push(C[c].title);return Object(o.jsxs)("div",{children:[a.length," deadlines"]})};return Object(o.jsxs)("div",{className:"calendar",children:[Object(o.jsx)(b,{value:j,setValue:u}),Object(o.jsx)("div",{className:"calendar-body",children:n.map((function(e,t){return Object(o.jsx)("div",{children:e.map((function(e,t){return Object(o.jsx)("div",{className:"day",onClick:function(){u(e),function(e){var t=e._d,a=v(t).format("YYYY-MM-DD");g(a)}(e),x(!0)},children:Object(o.jsxs)("div",{className:l(e,j),children:[e.format("D"),Object(o.jsx)("ul",{className:"taskListInCalendar"}),w(e)]})},t)}))},t)}))}),p?Object(o.jsx)(h,{masterArr:C,addTask:e.addTask,deleteTask:e.deleteTask,doUpdate:e.doUpdate,isUpdate:e.isUpdate,selectedDate:y}):"",p?Object(o.jsx)(m,{masterArr:C,selectedDate:y,deleteTask:e.deleteTask,doUpdate:e.doUpdate,isUpdate:e.isUpdate}):""]})};a(16);var k=function(){return Object(o.jsx)("footer",{id:"footer",children:Object(o.jsx)("h4",{children:"2021"})})},S=(a(17),a(5)),y=a.n(S);a(18);var g=function(e,t){var a=Object(c.useState)([]),n=Object(i.a)(a,2),r=(n[0],n[1]),s=Object(c.useState)(!1),d=Object(i.a)(s,2),j=(d[0],d[1],Object(c.useState)(!1)),u=Object(i.a)(j,2),l=(u[0],u[1],Object(c.useState)(e.isFinish)),b=Object(i.a)(l,2);return b[0],b[1],Object(c.useEffect)((function(){r(e.masterArr)}),[]),Object(o.jsxs)("div",{className:"task-card",children:[Object(o.jsx)("input",{id:e.id,type:"checkbox",onClick:function(t){var a={id:t.target.id,isFinish:!0};e.deleteTask(a)}}),Object(o.jsx)("h3",{children:e.title}),Object(o.jsx)("p",{children:e.date})]},e.index)};var A=function(e){var t=Object(c.useState)([]),a=Object(i.a)(t,2),n=(a[0],a[1]),r=Object(c.useState)(!1),s=Object(i.a)(r,2),d=s[0],j=s[1];Object(c.useEffect)((function(){n(e.masterArr)}),[e.masterArr]);var u=function(){j(!0)},l=Object.values(e.masterArr).sort((function(e,t){return e.date>t.date?1:-1})),b=Object.values(l).map((function(t,a){return Object(o.jsx)(g,{isFinish:t.isFinish,title:t.title,date:y()(t.date).format("YYYY/MM/DD"),index:a,id:t._id,deleteTask:e.deleteTask,masterArr:e.masterArr,doUpdate:e.doUpdate,isUpdate:e.isUpdate,checked:d,isChecked:u},a)}));return Object(o.jsxs)("div",{id:"task-list",children:[Object(o.jsx)("h2",{children:"Master task-list"}),b]})};var T=function(){var e=Object(c.useState)([]),t=Object(i.a)(e,2),a=t[0],n=t[1],r=Object(c.useState)(!1),s=Object(i.a)(r,2),u=s[0],l=s[1],b=Object(c.useState)(!1),O=Object(i.a)(b,2),h=O[0],m=(O[1],Object(c.useState)(!1)),v=Object(i.a)(m,2),S=(v[0],v[1],Object(c.useState)(!1)),y=Object(i.a)(S,2),g=(y[0],y[1],Object(c.useState)(!1)),T=Object(i.a)(g,2);T[0],T[1],Object(c.useEffect)((function(){d((function(e){console.log("GetMasterData() till App:",e),n(e)}))}),[]);var C=function(e){f(e)},U=function(e){p(e);var t=a.findIndex((function(t){return t._id===e.id}));a.splice(t,1);n(a),l(!u)};return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(j,{}),Object(o.jsx)(x,{masterArr:a,addTask:C,deleteTask:U,doUpdate:u,isUpdate:h}),Object(o.jsx)(A,{masterArr:a,addTask:C,deleteTask:U,doUpdate:u,isUpdate:h}),Object(o.jsx)(k,{})]})},C=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,20)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,r=t.getLCP,s=t.getTTFB;a(e),c(e),n(e),r(e),s(e)}))};s.a.render(Object(o.jsx)(n.a.StrictMode,{children:Object(o.jsx)(T,{})}),document.getElementById("root")),C()}],[[19,1,2]]]);
//# sourceMappingURL=main.dd5ad2a2.chunk.js.map