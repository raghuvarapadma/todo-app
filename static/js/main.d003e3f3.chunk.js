(this["webpackJsonptodo-app"]=this["webpackJsonptodo-app"]||[]).push([[0],{150:function(e,t,n){},152:function(e,t,n){"use strict";n.r(t);var c=n(3),o=n(0),a=n(61),r=n.n(a),i=n(29),s=n(6),l=function(){return Object(c.jsx)("header",{className:"masthead",children:Object(c.jsx)("div",{children:Object(c.jsx)("div",{children:Object(c.jsx)(i.b,{to:"/",children:Object(c.jsx)("h1",{className:"site-title",children:"To Do!"})})})})})},j=function(){return Object(c.jsx)("div",{className:"footer",children:Object(c.jsxs)("footer",{children:["\xa9 ",(new Date).getFullYear()," - Raghu Padma"]})})},d=n(23),u=function(e){var t=e.name,n=e.onEdit,o=e.onDelete;return Object(c.jsxs)("div",{id:t,children:[Object(c.jsx)("h4",{className:"column5",children:t}),Object(c.jsx)(d.a,{onClick:function(){return n(t)},variant:"warning",className:"column25l",children:"Edit Me!"}),Object(c.jsx)(d.a,{onClick:function(){return o(t)},variant:"danger",className:"column25r",children:"Delete Me!"})]})},b=n(65),h=n(46),O=n(63),x=n.n(O),f=n(64),m=n(31),p=n(45),v=function(){var e=Object(o.useState)(""),t=Object(h.a)(e,2),n=t[0],a=t[1],r=Object(o.useState)([]),i=Object(h.a)(r,2),s=i[0],l=i[1],j=function(e){var t=s.findIndex((function(t){return t===e}));s[t]=n,console.log(t)},O=function(e){l(s.filter((function(t){return t!==e}))),console.log(s)};return Object(c.jsx)("div",{className:"home",children:Object(c.jsxs)("div",{id:"content",children:[Object(c.jsx)(x.a,{source:"##### An app allowing you to sort your life. \n###### Built with React & Bootstrap!"}),Object(c.jsx)(p.a,{children:Object(c.jsxs)(p.a.Group,{controlId:"form-input",children:[Object(c.jsx)(m.a,{placeholder:"Add a Task!",onChange:function(e){e.preventDefault(),a(e.target.value),console.log(n)}}),Object(c.jsx)(f.a.Append,{children:Object(c.jsx)(d.a,{onClick:function(e){e.preventDefault(),l([].concat(Object(b.a)(s),[n])),console.log(s)},type:"submit",children:"Enter!"})})]})}),s.map((function(e,t){return Object(c.jsx)(u,{name:e,onEdit:j,onDelete:O},t)}))]})})},g=(n(150),n(151),function(){return Object(c.jsx)("div",{className:"main",children:Object(c.jsxs)(i.a,{children:[Object(c.jsx)(l,{}),Object(c.jsx)("div",{children:Object(c.jsx)(s.a,{path:"/",component:v})}),Object(c.jsx)(j,{})]})})});r.a.render(Object(c.jsx)(g,{}),document.getElementById("root"))}},[[152,1,2]]]);
//# sourceMappingURL=main.d003e3f3.chunk.js.map