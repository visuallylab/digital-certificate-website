(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"A2+M":function(e,t,n){var r=n("X8hv");e.exports={MDXRenderer:r}},I5cv:function(e,t,n){var r=n("XKFU"),o=n("Kuth"),i=n("2OiF"),c=n("y3w9"),a=n("0/R4"),l=n("eeVq"),u=n("8MEG"),f=(n("dyZX").Reflect||{}).construct,p=l((function(){function e(){}return!(f((function(){}),[],e)instanceof e)})),s=!l((function(){f((function(){}))}));r(r.S+r.F*(p||s),"Reflect",{construct:function(e,t){i(e),c(t);var n=arguments.length<3?e:i(arguments[2]);if(s&&!p)return f(e,t,n);if(e==n){switch(t.length){case 0:return new e;case 1:return new e(t[0]);case 2:return new e(t[0],t[1]);case 3:return new e(t[0],t[1],t[2]);case 4:return new e(t[0],t[1],t[2],t[3])}var r=[null];return r.push.apply(r,t),new(u.apply(e,r))}var l=n.prototype,d=o(a(l)?l:Object.prototype),m=Function.apply.call(e,d,t);return a(m)?m:d}})},X8hv:function(e,t,n){function r(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function o(e,t,n){return(o=r()?Reflect.construct:function(e,t,n){var r=[null];r.push.apply(r,t);var o=new(Function.bind.apply(e,r));return n&&i(o,n.prototype),o}).apply(null,arguments)}function i(e,t){return(i=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function c(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){u(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n("jm62"),n("yt8O"),n("RW0V"),n("XfO3"),n("HEwt"),n("rE2o"),n("ioFf"),n("rGqo"),n("/SS/"),n("a1Th"),n("Btvt"),n("I5cv"),n("I5cv"),n("/SS/"),n("XfO3"),n("HEwt"),n("a1Th"),n("rE2o"),n("jm62"),n("ioFf"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V");var f=n("q1tI"),p=n("7ljp"),s=p.useMDXComponents,d=p.mdx,m=n("BfwJ").useMDXScope;e.exports=function(e){var t=e.scope,n=e.components,r=e.children,i=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,["scope","components","children"]),a=s(n),u=m(t),p=f.useMemo((function(){if(!r)return null;var e=l({React:f,mdx:d},u),t=Object.keys(e),n=t.map((function(t){return e[t]}));return o(Function,["_fn"].concat(c(t),[""+r])).apply(void 0,[{}].concat(c(n)))}),[r,t]);return f.createElement(p,l({components:a},i))}},r3mR:function(e,t,n){"use strict";n.r(t),n.d(t,"query",(function(){return b}));n("dRSK");var r=n("q1tI"),o=n.n(r),i=n("Wbzz"),c=n("A2+M"),a=n("soUV"),l=n("9u5D"),u=n("3HrO"),f=n("vOnD"),p=n("AqDw"),s=Object(f.default)(p.a).withConfig({displayName:"DocsTemplate__Content",componentId:"ols4wa-0"})(["overflow:hidden;padding:64px 32px;"]),d=Object(f.default)(p.a).withConfig({displayName:"DocsTemplate__Sidebar",componentId:"ols4wa-1"})(["padding:24px 12px;"]),m=Object(f.default)(i.Link).withConfig({displayName:"DocsTemplate__A",componentId:"ols4wa-2"})(["display:block;font-size:16px;margin-bottom:12px;text-decoration:none;color:#999;:hover{color:#333;}"]),y=Object(f.default)(i.Link).withConfig({displayName:"DocsTemplate__PaginationButton",componentId:"ols4wa-3"})(["text-decoration:none;color:black;font-size:16px;box-sizing:border-box;margin-top:12px;display:inline-block;margin-right:12px;transition:0.2s;border:1px solid silver;padding:12px 32px;border-radius:4px;:hover{background-color:#eee;}"]),b="1040366614";t.default=function(e){var t=e.data,n=t.mdx,r=t.allMdx.edges||[],i=r.filter((function(e){return e.node.fields&&e.node.fields.slug&&e.node.frontmatter&&e.node.frontmatter.title})).map((function(e){return{slug:e.node.fields.slug,title:e.node.frontmatter.title}})),f=r.find((function(e){return e.node.id===(null==n?void 0:n.id)})),b=f&&f.previous&&f.previous.fields&&f.previous.fields.slug&&f.previous.frontmatter&&f.previous.frontmatter.title?f.previous:void 0,v=f&&f.next&&f.next.fields&&f.next.fields.slug&&f.next.frontmatter&&f.next.frontmatter.title?f.next:void 0;return o.a.createElement(a.a,null,o.a.createElement(l.a,null),o.a.createElement(u.a,null),o.a.createElement(p.b,{fluid:!0},o.a.createElement(p.c,null,o.a.createElement(d,{xs:!1,sm:2},o.a.createElement("input",{placeholder:"搜尋任何文字..."}),o.a.createElement("h3",null,"文件列表"),i.map((function(e){return o.a.createElement(m,{key:e.slug,to:e.slug},e.title)}))),o.a.createElement(s,{xs:12,sm:10},(null==n?void 0:n.body)&&o.a.createElement(c.MDXRenderer,null,null==n?void 0:n.body),b&&o.a.createElement(y,{to:b.fields.slug},"上一章：",b.frontmatter.title),v&&o.a.createElement(y,{to:v.fields.slug},"下一章：",v.frontmatter.title)))))}}}]);
//# sourceMappingURL=component---src-components-docs-template-tsx-ef6d6d09a1887a5f4bfd.js.map