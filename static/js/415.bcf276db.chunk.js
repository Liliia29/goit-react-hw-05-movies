"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[415],{4672:function(n,e,r){r.d(e,{Z:function(){return x}});var t,a,u,c,s,i=r(7689),o=r(168),p=r(5706),f=r(1087),l=p.Z.ul(t||(t=(0,o.Z)(["\n    display: flex;\n    flex-wrap: wrap;\n    gap: 35px;\n    justify-content: center;\n    margin-top: 20px;\n"]))),d=(0,p.Z)(f.rU)(a||(a=(0,o.Z)(["\n    transition: color 250ms cubic-bezier(0.65, 0.05, 0.36, 1);\n\n    &:hover,\n    &:focus {\n    color: brown;\n    }\n"]))),h=p.Z.p(u||(u=(0,o.Z)(["\n    padding: 10px;\n    font-weight: 500;\n"]))),v=p.Z.li(c||(c=(0,o.Z)(["\n    background-color: #fde2f3;\n    border-radius: 7px;\n    overflow: hidden;\n    width: 300px;\n\n    transition: transform 250ms cubic-bezier(0.65, 0.05, 0.36, 1);\n\n    &:hover,\n    &:focus {\n    transform: scale(1.02);\n    }\n"]))),m=p.Z.img(s||(s=(0,o.Z)(["\n    object-fit: cover;\n    min-height: 450px;\n"]))),g=r(184),x=function(n){var e=n.movieItems,r=(0,i.TH)(),t=function(n){return"/movies"===r.pathname?"".concat(n):"movies/".concat(n)};return(0,g.jsx)(l,{children:e.map((function(n){var e=n.poster_path,a=n.id,u=n.title;return(0,g.jsx)(v,{children:(0,g.jsxs)(d,{to:t(a),state:{from:r},children:[(0,g.jsx)(m,{src:e?"https://image.tmdb.org/t/p/w500".concat(e):"https://placehold.jp/300x450.png",alt:"",width:"300px"}),(0,g.jsx)(h,{children:u})]})},a)}))})}},5415:function(n,e,r){r.r(e);var t=r(5861),a=r(9439),u=r(4687),c=r.n(u),s=r(2791),i=r(9818),o=r(1362),p=r(4672),f=r(184);e.default=function(){var n=(0,s.useState)([]),e=(0,a.Z)(n,2),r=e[0],u=e[1],l=(0,s.useState)(!1),d=(0,a.Z)(l,2),h=d[0],v=d[1],m=(0,s.useState)(null),g=(0,a.Z)(m,2),x=g[0],Z=g[1],w=(0,s.useRef)();return(0,s.useEffect)((function(){var n=function(){var n=(0,t.Z)(c().mark((function n(){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return w.current&&w.current.abort(),w.current=new AbortController,n.prev=2,v(!0),Z(null),n.next=7,(0,i.Hg)(w.current.signal);case 7:e=n.sent,u(e),Z(null),n.next=15;break;case 12:n.prev=12,n.t0=n.catch(2),"ERR_CANCELED"!==n.t0.code&&Z(n.t0.message);case 15:return n.prev=15,v(!1),n.finish(15);case 18:case"end":return n.stop()}}),n,null,[[2,12,15,18]])})));return function(){return n.apply(this,arguments)}}();n()}),[]),(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)("h1",{children:"Trending movies today"}),h&&(0,f.jsx)(o.Z,{}),x&&(0,f.jsx)("p",{children:x}),!h&&r.length>0&&(0,f.jsx)(p.Z,{movieItems:r})]})}},9818:function(n,e,r){r.d(e,{Hg:function(){return i},IQ:function(){return f},Jh:function(){return l},TP:function(){return p},Wf:function(){return o}});var t=r(5861),a=r(4687),u=r.n(a),c=r(1243),s="37a520d43e9c95df130da7fe0dcee2e8";c.Z.defaults.baseURL="https://api.themoviedb.org/3/";var i=function(){var n=(0,t.Z)(u().mark((function n(e){var r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("trending/movie/day",{signal:e,params:{api_key:s,language:"en-US"}});case 2:return r=n.sent,n.abrupt("return",r.data.results);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),o=function(){var n=(0,t.Z)(u().mark((function n(e,r){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("search/movie",{signal:r,params:{api_key:s,language:"en-US",query:e,include_adult:!1,page:1}});case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})));return function(e,r){return n.apply(this,arguments)}}(),p=function(){var n=(0,t.Z)(u().mark((function n(e,r){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(e),{signal:r,params:{api_key:s,language:"en-US"}});case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e,r){return n.apply(this,arguments)}}(),f=function(){var n=(0,t.Z)(u().mark((function n(e,r){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(e,"/credits"),{signal:r,params:{api_key:s,language:"en-US"}});case 2:return t=n.sent,n.abrupt("return",t.data.cats);case 4:case"end":return n.stop()}}),n)})));return function(e,r){return n.apply(this,arguments)}}(),l=function(){var n=(0,t.Z)(u().mark((function n(e,r){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(e,"/reviews"),{signal:r,params:{api_key:s,language:"en-US",page:1}});case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})));return function(e,r){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=415.bcf276db.chunk.js.map