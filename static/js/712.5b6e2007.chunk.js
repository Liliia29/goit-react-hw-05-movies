"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[712],{4672:function(n,e,r){r.d(e,{Z:function(){return v}});var t,a,u,i,o,c=r(7689),s=r(168),p=r(5706),l=r(1087),f=p.Z.ul(t||(t=(0,s.Z)(["\n    display: flex;\n    flex-wrap: wrap;\n    gap: 35px;\n    justify-content: center;\n    margin-top: 20px;\n"]))),d=(0,p.Z)(l.rU)(a||(a=(0,s.Z)(["\n    transition: color 250ms cubic-bezier(0.65, 0.05, 0.36, 1);\n\n    &:hover,\n    &:focus {\n    color: brown;\n    }\n"]))),m=p.Z.p(u||(u=(0,s.Z)(["\n    padding: 10px;\n    font-weight: 500;\n"]))),h=p.Z.li(i||(i=(0,s.Z)(["\n    background-color: #fde2f3;\n    border-radius: 7px;\n    overflow: hidden;\n    width: 300px;\n\n    transition: transform 250ms cubic-bezier(0.65, 0.05, 0.36, 1);\n\n    &:hover,\n    &:focus {\n    transform: scale(1.02);\n    }\n"]))),g=p.Z.img(o||(o=(0,s.Z)(["\n    object-fit: cover;\n    min-height: 450px;\n"]))),x=r(184),v=function(n){var e=n.movieItems,r=(0,c.TH)(),t=function(n){return"/movies"===r.pathname?"".concat(n):"movies/".concat(n)};return(0,x.jsx)(f,{children:e.map((function(n){var e=n.poster_path,a=n.id,u=n.title;return(0,x.jsx)(h,{children:(0,x.jsxs)(d,{to:t(a),state:{from:r},children:[(0,x.jsx)(g,{width:"300px",src:e?"https://image.tmdb.org/t/p/w500".concat(e):"https://placehold.jp/300x450.png",alt:""}),(0,x.jsx)(m,{children:u})]})},a)}))})}},7712:function(n,e,r){r.r(e),r.d(e,{default:function(){return k}});var t,a,u,i=r(5861),o=r(9439),c=r(4687),s=r.n(c),p=r(2791),l=r(9818),f=r(1087),d=r(5705),m=r(168),h=r(5706),g=(0,h.Z)(d.l0)(t||(t=(0,m.Z)(["\n    display: flex;\n    align-items: center;\n    justify-content: center;\n"]))),x=(0,h.Z)(d.gN)(a||(a=(0,m.Z)(["\n    height: 35px;\n    border: 1px solid #e5beec;\n    outline: none;\n    min-width: 220px;\n\n    border-top-left-radius: 5px;\n    border-bottom-left-radius: 5px;\n    font-size: 16px;\n    padding: 2px 7px;\n\n    transition: border-color 350ms cubic-bezier(0.65, 0.05, 0.36, 1);\n\n    &:focus{\n    border-color: #2a2f4f;\n    }\n"]))),v=h.Z.button(u||(u=(0,m.Z)(["\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    column-gap: 5px;\n    min-width: 100px;\n    height: 36px;\n    padding: 8px 10px;\n\n    border-top-right-radius: 5px;\n    border-bottom-right-radius: 5px;\n    border: none;\n    cursor: pointer;\n\n    font-size: 16px;\n    font-weight: 600;\n    background-color: #e5beec;\n\n    transition: background-color 350ms cubic-bezier(0.65, 0.05, 0.36, 1),\n    color 350ms cubic-bezier(0.65, 0.05, 0.36, 1);\n\n    &:hover{\n        background-color: #2a2f4f;\n        color: orangered;\n        }\n"]))),b=r(184),Z=function(n){var e,r=n.onQueryChange,t=(0,f.lr)(),a=(0,o.Z)(t,2),u=a[0],i=a[1],c=null!==(e=u.get("query"))&&void 0!==e?e:"";(0,p.useEffect)((function(){c&&r(c)}),[c,r]);return(0,b.jsx)(d.J9,{initialValues:{query:""},onSubmit:function(n,e){var r=n.query;i(""!==r?{query:r}:{}),e.resetForm()},children:(0,b.jsxs)(g,{children:[(0,b.jsx)(x,{type:"text",name:"query",title:"Please enter movie name.",placeholder:"Movie name",required:!0}),(0,b.jsx)(d.Bc,{name:"name",component:"div"}),(0,b.jsx)(v,{type:"submit",children:"Search"})]})})},w=r(4672),y=r(1362),k=function(){var n=(0,p.useState)([]),e=(0,o.Z)(n,2),r=e[0],t=e[1],a=(0,p.useState)(!1),u=(0,o.Z)(a,2),c=u[0],f=u[1],d=(0,p.useState)(""),m=(0,o.Z)(d,2),h=m[0],g=m[1],x=(0,p.useState)(null),v=(0,o.Z)(x,2),k=v[0],j=v[1],_=(0,p.useRef)();(0,p.useEffect)((function(){if(""!==h){var n=function(){var n=(0,i.Z)(s().mark((function n(){var e;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return _.current&&_.current.abort(),_.current=new AbortController,n.prev=2,f(!0),j(null),n.next=7,(0,l.Wf)(h,_.current.signal);case 7:e=n.sent,t(e),j(null),n.next=15;break;case 12:n.prev=12,n.t0=n.catch(2),"ERR_CANCELED"!==n.t0.code&&j(n.t0.message);case 15:return n.prev=15,f(!1),n.finish(15);case 18:case"end":return n.stop()}}),n,null,[[2,12,15,18]])})));return function(){return n.apply(this,arguments)}}();n()}}),[h]);return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(Z,{onQueryChange:function(n){n!==h&&(g(n),j(null))}}),c&&(0,b.jsx)(y.Z,{}),k&&(0,b.jsx)("p",{children:k}),!c&&r.length>0&&(0,b.jsx)(w.Z,{movieItem:r})]})}},9818:function(n,e,r){r.d(e,{Hg:function(){return c},IQ:function(){return l},Jh:function(){return f},TP:function(){return p},Wf:function(){return s}});var t=r(5861),a=r(4687),u=r.n(a),i=r(1243),o="37a520d43e9c95df130da7fe0dcee2e8";i.Z.defaults.baseURL="https://api.themoviedb.org/3/";var c=function(){var n=(0,t.Z)(u().mark((function n(e){var r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("trending/movie/day",{signal:e,params:{api_key:o,language:"en-US"}});case 2:return r=n.sent,n.abrupt("return",r.data.results);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),s=function(){var n=(0,t.Z)(u().mark((function n(e,r){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("search/movie",{signal:r,params:{api_key:o,language:"en-US",query:e,include_adult:!1,page:1}});case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})));return function(e,r){return n.apply(this,arguments)}}(),p=function(){var n=(0,t.Z)(u().mark((function n(e,r){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("movie/".concat(e),{signal:r,params:{api_key:o,language:"en-US"}});case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e,r){return n.apply(this,arguments)}}(),l=function(){var n=(0,t.Z)(u().mark((function n(e,r){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("movie/".concat(e,"/credits"),{signal:r,params:{api_key:o,language:"en-US"}});case 2:return t=n.sent,n.abrupt("return",t.data.cats);case 4:case"end":return n.stop()}}),n)})));return function(e,r){return n.apply(this,arguments)}}(),f=function(){var n=(0,t.Z)(u().mark((function n(e,r){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("movie/".concat(e,"/reviews"),{signal:r,params:{api_key:o,language:"en-US",page:1}});case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})));return function(e,r){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=712.5b6e2007.chunk.js.map