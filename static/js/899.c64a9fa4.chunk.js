"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[899],{1207:function(t,e,n){n.d(e,{LC:function(){return l},Mc:function(){return f},PY:function(){return o},Xn:function(){return m},bs:function(){return y}});var r=n(5861),a=n(7757),u=n.n(a),c=n(4569),s=n.n(c);s().defaults.baseURL="https://api.themoviedb.org/3/";var i="2834cce01162bee50a22c300f1f38e88";function o(){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(u().mark((function t(){var e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s().get("trending/movie/week?api_key=".concat(i));case 2:return e=t.sent,t.abrupt("return",e.data.results);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function f(t){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(u().mark((function t(e){var n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s().get("movie/".concat(e,"?api_key=").concat(i));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function l(t){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(u().mark((function t(e){var n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s().get("movie/".concat(e,"/credits?api_key=").concat(i));case 2:return n=t.sent,t.abrupt("return",n.data.cast);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function m(t){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(u().mark((function t(e){var n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s().get("movie/".concat(e,"/reviews?api_key=").concat(i,"&language=en-US&page=1"));case 2:return n=t.sent,t.abrupt("return",n.data.results);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function y(t){return k.apply(this,arguments)}function k(){return(k=(0,r.Z)(u().mark((function t(e){var n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s().get("search/movie?api_key=".concat(i,"&query=").concat(e));case 2:return n=t.sent,t.abrupt("return",n.data.results);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}},4899:function(t,e,n){n.r(e),n.d(e,{default:function(){return f}});var r=n(1413),a=n(885),u=n(2791),c=n(9271),s=n(1523),i=n(8116),o=n(1207),p=n(184);function f(){var t=(0,u.useState)(""),e=(0,a.Z)(t,2),n=e[0],f=e[1],h=(0,u.useState)([]),l=(0,a.Z)(h,2),d=l[0],m=l[1],v=(0,c.$B)().url,y=(0,c.k6)(),k=(0,c.TH)(),x=new URLSearchParams(k.search).get("query");(0,u.useEffect)((function(){x&&(o.bs(x).then(m),f(x))}),[x]);return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsxs)("form",{onSubmit:function(t){if(t.preventDefault(),""===n.trim())return i.Am.error("\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u0437\u0430\u043f\u0438\u0442");o.bs(n).then(m),y.push((0,r.Z)((0,r.Z)({},y.location),{},{search:"?query=".concat(n)}))},children:[(0,p.jsx)("input",{onChange:function(t){f(t.target.value)},type:"text",value:n}),(0,p.jsx)("button",{type:"submit",children:"Search"})]}),(0,p.jsx)("ul",{children:d.map((function(t){return(0,p.jsx)("li",{children:(0,p.jsx)(s.rU,{to:"".concat(v,"/").concat(t.id),children:t.title||t.name})},t.id)}))})]})}}}]);
//# sourceMappingURL=899.c64a9fa4.chunk.js.map