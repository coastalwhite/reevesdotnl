(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{dLIU:function(e,t,n){"use strict";var a=n("sKyC"),r=n("4jWa"),o=n("CRla"),i=n("U6LL"),l=n("BXwj"),c=n("epLR"),s=n("pr4h"),u=n("q1tI"),h=n.n(u);function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var d=Object(a.a)((function(e,t){var n=Object(r.b)("Text",e),a=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(Object(o.b)(e),["className","align","decoration","casing"]),s=Object(l.a)({textAlign:e.align,textDecoration:e.decoration,textTransform:e.casing});return u.createElement(i.a.p,f({ref:t,className:Object(c.a)("chakra-text",e.className)},s,a,{__css:n}))}));s.a&&(d.displayName="Text");var m=n("rGDf"),p=n("zHD3"),b=n("v7Hm"),g=n("vG+z"),v=n("Wbzz"),y=n("7ljp"),w=n("pfq/"),O=n("g+/x"),j=function(e){var t=e.heading,n=e.children;return u.createElement(b.a,{mb:"4"},t&&u.createElement(m.a,{size:"md",fontFamily:"heading"},t),n)},E=n("qhky"),k=n("rePB");function x(){return(x=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var A={path:u.createElement("g",{stroke:"currentColor",strokeWidth:"1.5"},u.createElement("path",{strokeLinecap:"round",fill:"none",d:"M9,9a3,3,0,1,1,4,2.829,1.5,1.5,0,0,0-1,1.415V14.25"}),u.createElement("path",{fill:"currentColor",strokeLinecap:"round",d:"M12,17.25a.375.375,0,1,0,.375.375A.375.375,0,0,0,12,17.25h0"}),u.createElement("circle",{fill:"none",strokeMiterlimit:"10",cx:"12",cy:"12",r:"11.25"})),viewBox:"0 0 24 24"},D=Object(a.a)((function(e,t){var n=e.as,a=e.viewBox,r=e.color,o=void 0===r?"currentColor":r,l=e.focusable,s=void 0!==l&&l,h=e.children,f=e.className,d=e.__css,m=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,["as","viewBox","color","focusable","children","className","__css"]),p={ref:t,focusable:s,className:Object(c.a)("chakra-icon",f),__css:x({w:"1em",h:"1em",display:"inline-block",lineHeight:"1em",flexShrink:0,color:o},d)},b=null!=a?a:A.viewBox;if(n&&"string"!=typeof n)return u.createElement(i.a.svg,x({as:n},p,m));var g=null!=h?h:A.path;return u.createElement(i.a.svg,x({verticalAlign:"middle",viewBox:b},p,m),g)}));s.a&&(D.displayName="Icon");var L=n("5+Am"),T=n("JX03");function M(){return(M=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function N(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}var B=Object(a.a)((function(e,t){var n=Object(r.a)("List",e),a=Object(o.b)(e),l=a.children,c=a.styleType,s=void 0===c?"none":c,h=a.stylePosition,f=a.spacing,d=N(a,["children","styleType","stylePosition","spacing"]),m=Object(T.b)(l),p=f?Object(k.a)({},"& > *:not(style) ~ *:not(style)",{mt:f}):{};return u.createElement(L.b,{value:n},u.createElement(i.a.ul,M({ref:t,listStyleType:s,listStylePosition:h,role:"list",__css:M({},n.container,p)},d),m))}));s.a&&(B.displayName="List");var S=Object(a.a)((function(e,t){var n=N(e,["as"]);return u.createElement(B,M({ref:t,as:"ol",styleType:"decimal",marginLeft:"1em"},n))}));s.a&&(S.displayName="OrderedList");var _=Object(a.a)((function(e,t){var n=N(e,["as"]);return u.createElement(B,M({ref:t,as:"ul",styleType:"initial",marginLeft:"1em"},n))}));s.a&&(_.displayName="UnorderedList");var I=Object(a.a)((function(e,t){var n=Object(L.c)();return u.createElement(i.a.li,M({ref:t},e,{__css:n.item}))}));s.a&&(I.displayName="ListItem");var R=Object(a.a)((function(e,t){var n=Object(L.c)();return u.createElement(D,M({ref:t,role:"presentation"},e,{__css:n.icon}))}));s.a&&(R.displayName="ListIcon");var z=["January","February","March","April","May","June","July","August","September","October","November","December"],C=function(e){var t=new Date(e);return function(e){var n=t.getFullYear()+" "+z[t.getMonth()]+(e.noday?"":" "+t.getDate()),a="";if(void 0!==e.updated){var r=new Date(e.updated);a=" (updated "+r.getFullYear()+" "+z[r.getMonth()]+" "+r.getDate()+")"}return h.a.createElement(d,{fontStyle:"italic"},e.prepend||"",n,a,e.append||"")}},P=function(e,t){return function(n){return h.a.createElement(m.a,{as:e,size:t,mt:"4",mb:2},n.children)}},W=function(e){return h.a.createElement(v.a,{to:e.href},h.a.createElement(p.a,{color:"refcolor"},e.children))},G=function(e){return h.a.createElement("div",null,h.a.createElement(d,{fontStyle:"italic"},e.children," ",e.link&&h.a.createElement(W,{href:e.link},e.link)))},F=function(e){return h.a.createElement(d,{fontStyle:"italic"},e.children)},H=function(e){return h.a.createElement(d,{fontWeight:"bold"},e.children)},K=function(e){return h.a.createElement(b.a,{w:"full",p:"4",bg:"bgcolor",color:"#555",my:"4"},e.children)},q=function(e){return h.a.createElement(g.a,{mx:"auto",src:e.src,alt:e.alt,maxW:["100%","100%","640px"]})},J=function(e){return h.a.createElement(_,{mb:4},e.children)},U=function(e){return h.a.createElement(S,{mb:4},e.children)},X=function(e){return h.a.createElement(I,null,e.children)};t.a=function(e){var t=e.children,n=e.pageContext,a=e.path,r=Object(v.d)("2025927828").allFile.edges.map((function(e){return e.node})).filter((function(e){return e.absolutePath.includes("banners")})).find((function(e){return a.includes(e.name)})),o=a.split("/"),i=o[o.length-3],l=n.frontmatter,c=l.title,s=l.date,u={PublishDate:C(s),Reference:G,p:j,a:W,h1:P("h1","xl"),h2:P("h2","lg"),h3:P("h3","base"),h4:P("h4","sm"),img:q,i:F,b:H,blockquote:K,ol:U,ul:J,li:X};return h.a.createElement(w.a,{pageName:i},h.a.createElement(E.a,null,h.a.createElement("meta",{charSet:"utf-8"}),h.a.createElement("title",null,c),h.a.createElement("link",{rel:"canonical",href:"http://reeves.nl/"})),h.a.createElement(b.a,{w:"100%"},h.a.createElement(O.a,{title:c},h.a.createElement(y.a,{components:u},r&&h.a.createElement(g.a,{src:r.publicURL,mx:"auto"}),h.a.createElement(b.a,{mx:"auto",maxW:"xl",fontSize:"lg"},t)))))}},"g+/x":function(e,t,n){"use strict";var a=n("q1tI"),r=n("nwMj"),o=n("tofy"),i=n("v7Hm"),l=n("rGDf");t.a=function(e){return a.createElement(r.a,{w:"100%",h:"100%"},a.createElement(o.a,{direction:"column",maxW:"100%"},a.createElement(i.a,{w:"100%",borderBottomColor:"seperatorcolor",borderBottomWidth:"thin",mb:"4"},a.createElement(l.a,{fontFamily:"heading",size:"lg"},e.title)),a.createElement(i.a,{color:"contentcolor",maxW:"100%"},e.children)))}},y3gp:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return i})),n.d(t,"default",(function(){return f}));var a=n("zLVn"),r=(n("q1tI"),n("7ljp")),o=n("dLIU"),i={},l=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(r.b)("div",t)}},c=l("PublishDate"),s=l("Reference"),u={_frontmatter:i},h=o.a;function f(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)(h,Object.assign({},u,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"The Kalahari occupies an exceedingly flat tableland taking up much of the\ncentral part of southern  Africa. When the national gravity survey of Botswana\nwas mooted in 1970, absolute heights  above seal level for this remote, dry and\nthinly-populated area were unavailable and precision  primary levelling was\nstill in progress. Earlier levelling work in pursuit of potential engineering\nwork on river courses (Du Toit, 1926; Brind, 1955) had proved inconclusive. A\nby-product of the  national gravity survey (Reeves & Hutchins, 1976) was the\nfirst rough topographic contour map of  Botswana derived from about 2500 heights\ndetermined by barometric altimeters tied to the few  available reliable datum\npoints. The lowest point in the inland drainage basin in the Makgadikgadi  salt\nflats was determined as 903 (+/- 5) metres. Almost all of northern Botswana lay\nbelow 1000  m with the only escape for water from the annual flooding of the\nOkavango delta in the NW of the  country at about 930 m, located near the\nadministrative centre of Maun."),Object(r.b)("p",null,"More recently, Shuttle imaging radar (SIR) has determined the topographic\nsurface with  centimetre accuracy. Geomorphological studies, linked to SIR data,\nhave defined old shorelines at  973 m outlining a lake that occupied most of\nnorthern Botswana - an area about half the size of  France - in earlier pluvial\ntimes. Archaeological studies of these ancient shorelines have revealed  copious\nstone tools, relics of a Stone Age civilisation living in a much more clement\nclimate than  today's (Moore & Larkin, 2001). In a recent Nature publication\n(Chan et al., 2019) it is claimed  that studies of mitochondrial DNA lead back\nto this earthly lakeshore paradise hosting the origin of  Man. Migratory pulses\nare interpreted to have left for east Africa 130 000 years ago, and for the\nsouth 110 000 years ago."),Object(r.b)("p",null,"The Mwembishi fault zone (see previous news item, below) separates the ancient\nlake from the  present-day watercourses of three large rivers, the Okavango, the\nCuando and the Zambezi, all  drawing their water from the Angola highlands that,\neven today, enjoy higher levels of rainfall than  the Kalahari. It would seem\nthat movements on the Mwembishi shear zone in the Early  Cretaceous set up the\ntopography of southern Africa, much of which persists to the present  day.\nPerhaps we should all be grateful for that!"),Object(r.b)("p",null,"In the figure, Karoo rocks are indicated in beige and Kalahari sand cover in\npale  yellow. International boundaries are in red and the paleo-lake is shaded\nin blue."),Object(r.b)(c,{mdxType:"PublishDate"}),Object(r.b)("h1",null,"References"),Object(r.b)(s,{link:"https://doi.org/10.1038/s41586-019-1714-1",mdxType:"Reference"},"Brind, W.G., 1955. The Okavango delta: report on the 1951-3 field surveys. Chan, E.K.F., et al., 2019. Human origins in a southern Africa paleo-wetland and first migration. Nature."),Object(r.b)(s,{mdxType:"Reference"},"Du Toit, A, 1926. Report of the Kalahari reconnaissance of 1925. Union of South Africa, Department of Irrigation."),Object(r.b)(s,{mdxType:"Reference"},"Moore, A.E., and Larkin, P.A., 2001. Drainage evolution in south-central Africa since the break-up of Gondwana. South Africa journal of Geology, 104, 47-68."),Object(r.b)(s,{mdxType:"Reference"},"Reeves, C.V. and Htuchins, D.G., 1976. The national gravity survey of Botswana, 1972- 73. Bulletin No. 3, Geological Survey Department, Botswana."))}f.isMDXComponent=!0},zLVn:function(e,t,n){"use strict";function a(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}n.d(t,"a",(function(){return a}))}}]);
//# sourceMappingURL=component---src-pages-news-gravity-survey-origin-mankind-mdx-d21bede04fced75ca2e8.js.map