(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{27:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),r=n(14),s=n.n(r),o=n(10),l=(n(22),n(6)),i=n(16),j=n(8),u=n(7),b=n(17),d=n(15),x=n.n(d),O=n(5);var h=function(){var e=Object(c.useState)(0),t=Object(o.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(0),s=Object(o.a)(r,2),d=s[0],h=s[1],f=Object(c.useState)(0),m=Object(o.a)(f,2),p=m[0],g=m[1];return Object(O.jsx)(i.a,{children:Object(O.jsxs)(u.a,{md:12,children:[Object(O.jsx)(j.a,{md:12,children:Object(O.jsx)("h1",{className:"text-center mt-4",children:"CommSec Total Profit/Loss Calculator"})}),Object(O.jsx)(j.a,{md:12,children:Object(O.jsxs)(l.a,{children:[Object(O.jsxs)(l.a.Group,{children:[Object(O.jsx)(l.a.Label,{children:"Current Portfolio Value"}),Object(O.jsx)(l.a.Control,{onChange:function(e){h(e.target.value)},type:"text",placeholder:"Enter Portfolio Value"})]}),Object(O.jsx)("br",{}),Object(O.jsxs)(l.a.Group,{children:[Object(O.jsx)(l.a.Label,{children:"Confirmation Details (ConfirmationDetails.csv)"}),Object(O.jsx)(l.a.File,{accept:".csv",onChange:function(e){return function(e){var t=e.target.files[0];if(t&&"csv"===t.name.substring(t.name.lastIndexOf(".")+1)){var n=new FileReader;n.readAsText(t,"UTF-8"),n.onload=function(e){var t=x.a.parse(e.target.result).data.reduce((function(e,t){return"S"===t[3]?e+parseFloat(t[8]):"B"===t[3]?e-parseFloat(t[8]):e}),0);g(t)}}}(e)},id:"csv"})]}),Object(O.jsx)("br",{}),Object(O.jsx)(b.a,{variant:"primary",type:"submit",onClick:function(e){return function(e){e.preventDefault(),console.log(parseFloat(d)),console.log(p),a((p+parseFloat(d)).toFixed(2))}(e)},children:"Calculate"})]})}),Object(O.jsxs)(j.a,{md:12,children:[Object(O.jsx)("h2",{className:"text-center",children:"Total Returns"}),Object(O.jsx)("h3",{className:"text-center",style:n<0?{color:"red"}:{color:"green"},children:n>=0?"+$".concat(n):"-$".concat(n.substring(1))})]})]})})},f=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,28)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),r(e),s(e)}))};s.a.render(Object(O.jsx)(a.a.StrictMode,{children:Object(O.jsx)(h,{})}),document.getElementById("root")),f()}},[[27,1,2]]]);
//# sourceMappingURL=main.48f28c61.chunk.js.map