(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{dLIU:function(e,t,a){"use strict";var n=a("sKyC"),r=a("4jWa"),i=a("CRla"),l=a("U6LL"),c=a("BXwj"),o=a("epLR"),s=a("pr4h"),m=a("q1tI"),u=a.n(m);function b(){return(b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var p=Object(n.a)((function(e,t){var a=Object(r.b)("Text",e),n=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(Object(i.b)(e),["className","align","decoration","casing"]),s=Object(c.a)({textAlign:e.align,textDecoration:e.decoration,textTransform:e.casing});return m.createElement(l.a.p,b({ref:t,className:Object(o.a)("chakra-text",e.className)},s,n,{__css:a}))}));s.a&&(p.displayName="Text");var f=a("rGDf"),d=a("zHD3"),h=a("v7Hm"),g=a("vG+z"),O=a("Wbzz"),j=a("7ljp"),y=a("pfq/"),v=a("g+/x"),E=function(e){var t=e.heading,a=e.children;return m.createElement(h.a,{mb:"4"},t&&m.createElement(f.a,{size:"md",fontFamily:"heading"},t),a)},N=a("qhky"),w=a("rePB");function x(){return(x=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var k={path:m.createElement("g",{stroke:"currentColor",strokeWidth:"1.5"},m.createElement("path",{strokeLinecap:"round",fill:"none",d:"M9,9a3,3,0,1,1,4,2.829,1.5,1.5,0,0,0-1,1.415V14.25"}),m.createElement("path",{fill:"currentColor",strokeLinecap:"round",d:"M12,17.25a.375.375,0,1,0,.375.375A.375.375,0,0,0,12,17.25h0"}),m.createElement("circle",{fill:"none",strokeMiterlimit:"10",cx:"12",cy:"12",r:"11.25"})),viewBox:"0 0 24 24"},L=Object(n.a)((function(e,t){var a=e.as,n=e.viewBox,r=e.color,i=void 0===r?"currentColor":r,c=e.focusable,s=void 0!==c&&c,u=e.children,b=e.className,p=e.__css,f=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,["as","viewBox","color","focusable","children","className","__css"]),d={ref:t,focusable:s,className:Object(o.a)("chakra-icon",b),__css:x({w:"1em",h:"1em",display:"inline-block",lineHeight:"1em",flexShrink:0,color:i},p)},h=null!=n?n:k.viewBox;if(a&&"string"!=typeof a)return m.createElement(l.a.svg,x({as:a},d,f));var g=null!=u?u:k.path;return m.createElement(l.a.svg,x({verticalAlign:"middle",viewBox:h},d,f),g)}));s.a&&(L.displayName="Icon");var M=a("5+Am"),A=a("JX03");function T(){return(T=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function _(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}var S=Object(n.a)((function(e,t){var a=Object(r.a)("List",e),n=Object(i.b)(e),c=n.children,o=n.styleType,s=void 0===o?"none":o,u=n.stylePosition,b=n.spacing,p=_(n,["children","styleType","stylePosition","spacing"]),f=Object(A.b)(c),d=b?Object(w.a)({},"& > *:not(style) ~ *:not(style)",{mt:b}):{};return m.createElement(M.b,{value:a},m.createElement(l.a.ul,T({ref:t,listStyleType:s,listStylePosition:u,role:"list",__css:T({},a.container,d)},p),f))}));s.a&&(S.displayName="List");var D=Object(n.a)((function(e,t){var a=_(e,["as"]);return m.createElement(S,T({ref:t,as:"ol",styleType:"decimal",marginLeft:"1em"},a))}));s.a&&(D.displayName="OrderedList");var z=Object(n.a)((function(e,t){var a=_(e,["as"]);return m.createElement(S,T({ref:t,as:"ul",styleType:"initial",marginLeft:"1em"},a))}));s.a&&(z.displayName="UnorderedList");var B=Object(n.a)((function(e,t){var a=Object(M.c)();return m.createElement(l.a.li,T({ref:t},e,{__css:a.item}))}));s.a&&(B.displayName="ListItem");var G=Object(n.a)((function(e,t){var a=Object(M.c)();return m.createElement(L,T({ref:t,role:"presentation"},e,{__css:a.icon}))}));s.a&&(G.displayName="ListIcon");var P=["January","February","March","April","May","June","July","August","September","October","November","December"],I=function(e){var t=new Date(e);return function(e){var a=t.getFullYear()+" "+P[t.getMonth()]+(e.noday?"":" "+t.getDate()),n="";if(void 0!==e.updated){var r=new Date(e.updated);n=" (updated "+r.getFullYear()+" "+P[r.getMonth()]+" "+r.getDate()+")"}return u.a.createElement(p,{fontStyle:"italic"},e.prepend||"",a,n,e.append||"")}},W=function(e,t){return function(a){return u.a.createElement(f.a,{as:e,size:t,mt:"4",mb:2},a.children)}},C=function(e){return u.a.createElement(O.a,{to:e.href},u.a.createElement(d.a,{color:"refcolor"},e.children))},R=function(e){return u.a.createElement("div",null,u.a.createElement(p,{fontStyle:"italic"},e.children," ",e.link&&u.a.createElement(C,{href:e.link},e.link)))},q=function(e){return u.a.createElement(p,{fontStyle:"italic"},e.children)},F=function(e){return u.a.createElement(p,{fontWeight:"bold"},e.children)},J=function(e){return u.a.createElement(h.a,{w:"full",p:"4",bg:"bgcolor",color:"#555",my:"4"},e.children)},H=function(e){return u.a.createElement(g.a,{mx:"auto",src:e.src,alt:e.alt,maxW:["100%","100%","640px"]})},U=function(e){return u.a.createElement(z,{mb:4},e.children)},X=function(e){return u.a.createElement(D,{mb:4},e.children)},V=function(e){return u.a.createElement(B,null,e.children)};t.a=function(e){var t=e.children,a=e.pageContext,n=e.path,r=Object(O.d)("2025927828").allFile.edges.map((function(e){return e.node})).filter((function(e){return e.absolutePath.includes("banners")})).find((function(e){return n.includes(e.name)})),i=n.split("/"),l=i[i.length-3],c=a.frontmatter,o=c.title,s=c.date,m={PublishDate:I(s),Reference:R,p:E,a:C,h1:W("h1","xl"),h2:W("h2","lg"),h3:W("h3","base"),h4:W("h4","sm"),img:H,i:q,b:F,blockquote:J,ol:X,ul:U,li:V};return u.a.createElement(y.a,{pageName:l},u.a.createElement(N.a,null,u.a.createElement("meta",{charSet:"utf-8"}),u.a.createElement("title",null,o),u.a.createElement("link",{rel:"canonical",href:"http://reeves.nl/"})),u.a.createElement(h.a,{w:"100%"},u.a.createElement(v.a,{title:o},u.a.createElement(j.a,{components:m},r&&u.a.createElement(g.a,{src:r.publicURL,mx:"auto"}),u.a.createElement(h.a,{mx:"auto",maxW:"xl",fontSize:"lg"},t)))))}},"g+/x":function(e,t,a){"use strict";var n=a("q1tI"),r=a("nwMj"),i=a("tofy"),l=a("v7Hm"),c=a("rGDf");t.a=function(e){return n.createElement(r.a,{w:"100%",h:"100%"},n.createElement(i.a,{direction:"column",maxW:"100%"},n.createElement(l.a,{w:"100%",borderBottomColor:"seperatorcolor",borderBottomWidth:"thin",mb:"4"},n.createElement(c.a,{fontFamily:"heading",size:"lg"},e.title)),n.createElement(l.a,{color:"contentcolor",maxW:"100%"},e.children)))}},sOWd:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return l})),a.d(t,"default",(function(){return s}));var n=a("zLVn"),r=(a("q1tI"),a("7ljp")),i=a("dLIU"),l={},c={_frontmatter:l},o=i.a;function s(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(r.b)(o,Object.assign({},c,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",null,"How to do plate-tectonic modelling in animation"),Object(r.b)("p",null,"There is no substitute for watching animations when it comes to understanding geodynamics. The principles employed in making the Gondwana model are illustrated in the following series of animations. "),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"../starting-data"},"1. Global Data-sets")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"../making-ends-meet"},"2. Making Ends Meet")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"../mar-mag-anom"},"3. Marine Magnetic Anomalies")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"../mid-ocean-ridges"},"4. Mid-Ocean Ridges")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"../large-igneous-provinces"},"5. Large Igneous Provinces")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"../fixed-is-fixed"},"6. A fixed mantle reference frame")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"../africa-antarctica"},"7. The Africa-Antarctica corridor")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"../aac-anim-1"},"8. The Bouvet triple junction")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"../oceansonlygrow"},"9. Oceans Only Grow")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"../east-versus-west"},"Example 1: STASS animation")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"../articulated-africa"},"Example 2: Articulated Africa")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"../ego-aac-plates"},"Example 3: East Gondwana Break-up")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"../moz-plains"},"Example 4: Mozambique Plains & Ridge")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"../sri-lanka-2"},"Example 5: India - Sri Lanka - Antarctica")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"../guinea-1"},"Example 6: Gulf of Guinea - Borborema - African Rifts"))),Object(r.b)("p",null,"The building of animations that are credible mechanically, geometrically and geologically is a challenge that tests the ideas behind the animations rather severely. Many ideas, including those that get published, turn out to be untenable when subjected to simple constraints of geometry and time. The animations presented here attempt to show the lessons learned and the principles established over many years of working with the Gondwana dispersal system using the CPSL ",Object(r.b)("em",{parentName:"p"},"Atlas")," paleo-reconstruction software. In addition to modelling continental movements, the positions of the mid-ocean ridge systems have been modelled and checked against the dispersal record they have left in the topography of the ocean crust so created over the past 200 Myr, as shown in the animation on the ",Object(r.b)("strong",{parentName:"p"},"Gondwana")," main page."),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Last updated: 2024 February 22")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"../../gondwana"},"Return to Gondwana main page"))))}s.isMDXComponent=!0},zLVn:function(e,t,a){"use strict";function n(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}a.d(t,"a",(function(){return n}))}}]);
//# sourceMappingURL=component---src-pages-gondwana-animations-mdx-6ee1c1289775217fff72.js.map