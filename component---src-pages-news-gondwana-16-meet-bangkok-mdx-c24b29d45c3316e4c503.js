(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{dLIU:function(e,t,n){"use strict";var a=n("sKyC"),r=n("4jWa"),o=n("CRla"),i=n("U6LL"),l=n("BXwj"),c=n("epLR"),s=n("pr4h"),u=n("q1tI"),m=n.n(u);function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var d=Object(a.a)((function(e,t){var n=Object(r.b)("Text",e),a=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(Object(o.b)(e),["className","align","decoration","casing"]),s=Object(l.a)({textAlign:e.align,textDecoration:e.decoration,textTransform:e.casing});return u.createElement(i.a.p,f({ref:t,className:Object(c.a)("chakra-text",e.className)},s,a,{__css:n}))}));s.a&&(d.displayName="Text");var h=n("rGDf"),p=n("zHD3"),b=n("v7Hm"),v=n("vG+z"),g=n("Wbzz"),y=n("7ljp"),w=n("pfq/"),E=n("g+/x"),O=function(e){var t=e.heading,n=e.children;return u.createElement(b.a,{mb:"4"},t&&u.createElement(h.a,{size:"md",fontFamily:"heading"},t),n)},j=n("qhky"),x=n("rePB");function k(){return(k=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var L={path:u.createElement("g",{stroke:"currentColor",strokeWidth:"1.5"},u.createElement("path",{strokeLinecap:"round",fill:"none",d:"M9,9a3,3,0,1,1,4,2.829,1.5,1.5,0,0,0-1,1.415V14.25"}),u.createElement("path",{fill:"currentColor",strokeLinecap:"round",d:"M12,17.25a.375.375,0,1,0,.375.375A.375.375,0,0,0,12,17.25h0"}),u.createElement("circle",{fill:"none",strokeMiterlimit:"10",cx:"12",cy:"12",r:"11.25"})),viewBox:"0 0 24 24"},D=Object(a.a)((function(e,t){var n=e.as,a=e.viewBox,r=e.color,o=void 0===r?"currentColor":r,l=e.focusable,s=void 0!==l&&l,m=e.children,f=e.className,d=e.__css,h=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,["as","viewBox","color","focusable","children","className","__css"]),p={ref:t,focusable:s,className:Object(c.a)("chakra-icon",f),__css:k({w:"1em",h:"1em",display:"inline-block",lineHeight:"1em",flexShrink:0,color:o},d)},b=null!=a?a:L.viewBox;if(n&&"string"!=typeof n)return u.createElement(i.a.svg,k({as:n},p,h));var v=null!=m?m:L.path;return u.createElement(i.a.svg,k({verticalAlign:"middle",viewBox:b},p,h),v)}));s.a&&(D.displayName="Icon");var C=n("5+Am"),N=n("JX03");function P(){return(P=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function _(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}var T=Object(a.a)((function(e,t){var n=Object(r.a)("List",e),a=Object(o.b)(e),l=a.children,c=a.styleType,s=void 0===c?"none":c,m=a.stylePosition,f=a.spacing,d=_(a,["children","styleType","stylePosition","spacing"]),h=Object(N.b)(l),p=f?Object(x.a)({},"& > *:not(style) ~ *:not(style)",{mt:f}):{};return u.createElement(C.b,{value:n},u.createElement(i.a.ul,P({ref:t,listStyleType:s,listStylePosition:m,role:"list",__css:P({},n.container,p)},d),h))}));s.a&&(T.displayName="List");var S=Object(a.a)((function(e,t){var n=_(e,["as"]);return u.createElement(T,P({ref:t,as:"ol",styleType:"decimal",marginLeft:"1em"},n))}));s.a&&(S.displayName="OrderedList");var I=Object(a.a)((function(e,t){var n=_(e,["as"]);return u.createElement(T,P({ref:t,as:"ul",styleType:"initial",marginLeft:"1em"},n))}));s.a&&(I.displayName="UnorderedList");var M=Object(a.a)((function(e,t){var n=Object(C.c)();return u.createElement(i.a.li,P({ref:t},e,{__css:n.item}))}));s.a&&(M.displayName="ListItem");var z=Object(a.a)((function(e,t){var n=Object(C.c)();return u.createElement(D,P({ref:t,role:"presentation"},e,{__css:n.icon}))}));s.a&&(z.displayName="ListIcon");var B=["January","February","March","April","May","June","July","August","September","October","November","December"],W=function(e){var t=new Date(e);return function(e){var n=t.getFullYear()+" "+B[t.getMonth()]+(e.noday?"":" "+t.getDate()),a="";if(void 0!==e.updated){var r=new Date(e.updated);a=" (updated "+r.getFullYear()+" "+B[r.getMonth()]+" "+r.getDate()+")"}return m.a.createElement(d,{fontStyle:"italic"},e.prepend||"",n,a,e.append||"")}},A=function(e,t){return function(n){return m.a.createElement(h.a,{as:e,size:t,mt:"4",mb:2},n.children)}},G=function(e){return m.a.createElement(g.a,{to:e.href},m.a.createElement(p.a,{color:"refcolor"},e.children))},q=function(e){return m.a.createElement("div",null,m.a.createElement(d,{fontStyle:"italic"},e.children," ",e.link&&m.a.createElement(G,{href:e.link},e.link)))},F=function(e){return m.a.createElement(d,{fontStyle:"italic"},e.children)},J=function(e){return m.a.createElement(d,{fontWeight:"bold"},e.children)},R=function(e){return m.a.createElement(b.a,{w:"full",p:"4",bg:"bgcolor",color:"#555",my:"4"},e.children)},U=function(e){return m.a.createElement(v.a,{mx:"auto",src:e.src,alt:e.alt,maxW:["100%","100%","640px"]})},X=function(e){return m.a.createElement(I,{mb:4},e.children)},H=function(e){return m.a.createElement(S,{mb:4},e.children)},V=function(e){return m.a.createElement(M,null,e.children)};t.a=function(e){var t=e.children,n=e.pageContext,a=e.path,r=Object(g.d)("2025927828").allFile.edges.map((function(e){return e.node})).filter((function(e){return e.absolutePath.includes("banners")})).find((function(e){return a.includes(e.name)})),o=a.split("/"),i=o[o.length-3],l=n.frontmatter,c=l.title,s=l.date,u={PublishDate:W(s),Reference:q,p:O,a:G,h1:A("h1","xl"),h2:A("h2","lg"),h3:A("h3","base"),h4:A("h4","sm"),img:U,i:F,b:J,blockquote:R,ol:H,ul:X,li:V};return m.a.createElement(w.a,{pageName:i},m.a.createElement(j.a,null,m.a.createElement("meta",{charSet:"utf-8"}),m.a.createElement("title",null,c),m.a.createElement("link",{rel:"canonical",href:"http://reeves.nl/"})),m.a.createElement(b.a,{w:"100%"},m.a.createElement(E.a,{title:c},m.a.createElement(y.a,{components:u},r&&m.a.createElement(v.a,{src:r.publicURL,mx:"auto"}),m.a.createElement(b.a,{mx:"auto",maxW:"xl",fontSize:"lg"},t)))))}},"g+/x":function(e,t,n){"use strict";var a=n("q1tI"),r=n("nwMj"),o=n("tofy"),i=n("v7Hm"),l=n("rGDf");t.a=function(e){return a.createElement(r.a,{w:"100%",h:"100%"},a.createElement(o.a,{direction:"column",maxW:"100%"},a.createElement(i.a,{w:"100%",borderBottomColor:"seperatorcolor",borderBottomWidth:"thin",mb:"4"},a.createElement(l.a,{fontFamily:"heading",size:"lg"},e.title)),a.createElement(i.a,{color:"contentcolor",maxW:"100%"},e.children)))}},uDqP:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return l})),n.d(t,"default",(function(){return m}));var a,r=n("zLVn"),o=(n("q1tI"),n("7ljp")),i=n("dLIU"),l={},c=(a="PublishDate",function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),Object(o.b)("div",e)}),s={_frontmatter:l},u=i.a;function m(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)(u,Object.assign({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Every three years, those with scientific interests in the geology common to all\nparts of Gondwana  meet to discuss developments. In November 2017 it was the\nturn of Bangkok and the Thai  Department of Mineral Resources to host the\nmeeting of 300 participants from 20 countries at a  convenient downtown\nlocation. Talks were spread over four days and addressed many aspects  from\ngeodynamics to palaeontology but with an emphasis on the terranes that were\nearly-leavers  of Gondwana, migrating north to form what is now SE Asia while\nthe core of Gondwana remained intact. "),Object(o.b)("p",null,"It was a time to meet up with many old colleagues. The picture shows Colin\nReeves with former  ITC student Simplicio Caluyong (Philippines), now working\nwith the Coordiation Committee for  Geoscience Programmes in East and Southeast\nAsia (CCOP). In the background is the pre-final  edition of the new geological\nmap of Gondwana that attracted a great deal of attention. Thanks to  Simplicio\nfor sending the picture. "),Object(o.b)(c,{mdxType:"PublishDate"}))}m.isMDXComponent=!0},zLVn:function(e,t,n){"use strict";function a(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}n.d(t,"a",(function(){return a}))}}]);
//# sourceMappingURL=component---src-pages-news-gondwana-16-meet-bangkok-mdx-c24b29d45c3316e4c503.js.map