"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[387],{4387:function(e,n,r){r.r(n),r.d(n,{default:function(){return y}});var t,a,u,c,s=r(5861),i=r(9439),o=r(4687),p=r.n(o),f=r(1362),l=r(2791),d=r(7689),h=r(9818),v=r(168),g=r(5706),m=g.Z.h2(t||(t=(0,v.Z)(["\n    margin-bottom: 5px;\n"]))),x=g.Z.p(a||(a=(0,v.Z)(["\n    line-height: 1.3;\n"]))),Z=g.Z.li(u||(u=(0,v.Z)(["\n    padding: 10px;\n    background-color: #fde2f3;\n    border-radius: 10px;\n"]))),w=g.Z.ul(c||(c=(0,v.Z)(["\n    display: flex;\n    flex-direction: column;\n    row-gap: 15px;\n"]))),k=r(184),y=function(){var e=(0,d.UO)().movieId,n=(0,l.useState)([]),r=(0,i.Z)(n,2),t=r[0],a=r[1],u=(0,l.useState)(!1),c=(0,i.Z)(u,2),o=c[0],v=c[1],g=(0,l.useState)(null),y=(0,i.Z)(g,2),b=y[0],_=y[1],j=(0,l.useRef)();return(0,l.useEffect)((function(){var n=function(){var n=(0,s.Z)(p().mark((function n(){var r;return p().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return j.current&&j.current.abort(),j.current=new AbortController,n.prev=2,v(!0),_(null),n.next=7,(0,h.Jh)(e,j.current.signal);case 7:r=n.sent,a(r),_(null),n.next=15;break;case 12:n.prev=12,n.t0=n.catch(2),"ERR_CANCELED"!==n.t0.code&&_(n.t0.message);case 15:return n.prev=15,v(!1),n.finish(15);case 18:case"end":return n.stop()}}),n,null,[[2,12,15,18]])})));return function(){return n.apply(this,arguments)}}();n()}),[e]),(0,k.jsxs)(k.Fragment,{children:[o&&(0,k.jsx)(f.Z,{}),b&&(0,k.jsx)("p",{children:b}),!o&&t.length>0&&(0,k.jsx)("div",{children:(0,k.jsx)(w,{children:t.map((function(e){var n=e.id,r=e.author,t=e.content;return(0,k.jsxs)(Z,{children:[(0,k.jsxs)(m,{children:["Author: ",r]}),(0,k.jsx)(x,{children:t})]},n)}))})}),!o&&0===t.length&&(0,k.jsx)("div",{children:"Sorry, there are no reviews for this movie yet."})]})}},9818:function(e,n,r){r.d(n,{Hg:function(){return i},IQ:function(){return f},Jh:function(){return l},TP:function(){return p},Wf:function(){return o}});var t=r(5861),a=r(4687),u=r.n(a),c=r(1243),s="37a520d43e9c95df130da7fe0dcee2e8";c.Z.defaults.baseURL="https://api.themoviedb.org/3/";var i=function(){var e=(0,t.Z)(u().mark((function e(n){var r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("trending/movie/day",{signal:n,params:{api_key:s,language:"en-US"}});case 2:return r=e.sent,e.abrupt("return",r.data.results);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),o=function(){var e=(0,t.Z)(u().mark((function e(n,r){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("search/movie",{signal:r,params:{api_key:s,language:"en-US",query:n,include_adult:!1,page:1}});case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})));return function(n,r){return e.apply(this,arguments)}}(),p=function(){var e=(0,t.Z)(u().mark((function e(n,r){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("movie/".concat(n),{signal:r,params:{api_key:s,language:"en-US"}});case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(n,r){return e.apply(this,arguments)}}(),f=function(){var e=(0,t.Z)(u().mark((function e(n,r){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("movie/".concat(n,"/credits"),{signal:r,params:{api_key:s,language:"en-US"}});case 2:return t=e.sent,e.abrupt("return",t.data.cast);case 4:case"end":return e.stop()}}),e)})));return function(n,r){return e.apply(this,arguments)}}(),l=function(){var e=(0,t.Z)(u().mark((function e(n,r){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("movie/".concat(n,"/reviews"),{signal:r,params:{api_key:s,language:"en-US",page:1}});case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})));return function(n,r){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=387.dacfb695.chunk.js.map