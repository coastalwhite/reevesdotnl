(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{dLIU:function(e,t,a){"use strict";var n=a("sKyC"),r=a("4jWa"),o=a("CRla"),i=a("U6LL"),c=a("BXwj"),l=a("epLR"),s=a("pr4h"),m=a("q1tI"),u=a.n(m);function h(){return(h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var f=Object(n.a)((function(e,t){var a=Object(r.b)("Text",e),n=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(Object(o.b)(e),["className","align","decoration","casing"]),s=Object(c.a)({textAlign:e.align,textDecoration:e.decoration,textTransform:e.casing});return m.createElement(i.a.p,h({ref:t,className:Object(l.a)("chakra-text",e.className)},s,n,{__css:a}))}));s.a&&(f.displayName="Text");var p=a("rGDf"),b=a("zHD3"),d=a("v7Hm"),g=a("vG+z"),v=a("Wbzz"),y=a("7ljp"),O=a("pfq/"),j=a("g+/x"),w=function(e){var t=e.heading,a=e.children;return m.createElement(d.a,{mb:"4"},t&&m.createElement(p.a,{size:"md",fontFamily:"heading"},t),a)},E=a("qhky"),x=a("rePB");function k(){return(k=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var N={path:m.createElement("g",{stroke:"currentColor",strokeWidth:"1.5"},m.createElement("path",{strokeLinecap:"round",fill:"none",d:"M9,9a3,3,0,1,1,4,2.829,1.5,1.5,0,0,0-1,1.415V14.25"}),m.createElement("path",{fill:"currentColor",strokeLinecap:"round",d:"M12,17.25a.375.375,0,1,0,.375.375A.375.375,0,0,0,12,17.25h0"}),m.createElement("circle",{fill:"none",strokeMiterlimit:"10",cx:"12",cy:"12",r:"11.25"})),viewBox:"0 0 24 24"},L=Object(n.a)((function(e,t){var a=e.as,n=e.viewBox,r=e.color,o=void 0===r?"currentColor":r,c=e.focusable,s=void 0!==c&&c,u=e.children,h=e.className,f=e.__css,p=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,["as","viewBox","color","focusable","children","className","__css"]),b={ref:t,focusable:s,className:Object(l.a)("chakra-icon",h),__css:k({w:"1em",h:"1em",display:"inline-block",lineHeight:"1em",flexShrink:0,color:o},f)},d=null!=n?n:N.viewBox;if(a&&"string"!=typeof a)return m.createElement(i.a.svg,k({as:a},b,p));var g=null!=u?u:N.path;return m.createElement(i.a.svg,k({verticalAlign:"middle",viewBox:d},b,p),g)}));s.a&&(L.displayName="Icon");var P=a("5+Am"),T=a("JX03");function z(){return(z=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function S(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}var _=Object(n.a)((function(e,t){var a=Object(r.a)("List",e),n=Object(o.b)(e),c=n.children,l=n.styleType,s=void 0===l?"none":l,u=n.stylePosition,h=n.spacing,f=S(n,["children","styleType","stylePosition","spacing"]),p=Object(T.b)(c),b=h?Object(x.a)({},"& > *:not(style) ~ *:not(style)",{mt:h}):{};return m.createElement(P.b,{value:a},m.createElement(i.a.ul,z({ref:t,listStyleType:s,listStylePosition:u,role:"list",__css:z({},a.container,b)},f),p))}));s.a&&(_.displayName="List");var M=Object(n.a)((function(e,t){var a=S(e,["as"]);return m.createElement(_,z({ref:t,as:"ol",styleType:"decimal",marginLeft:"1em"},a))}));s.a&&(M.displayName="OrderedList");var A=Object(n.a)((function(e,t){var a=S(e,["as"]);return m.createElement(_,z({ref:t,as:"ul",styleType:"initial",marginLeft:"1em"},a))}));s.a&&(A.displayName="UnorderedList");var D=Object(n.a)((function(e,t){var a=Object(P.c)();return m.createElement(i.a.li,z({ref:t},e,{__css:a.item}))}));s.a&&(D.displayName="ListItem");var C=Object(n.a)((function(e,t){var a=Object(P.c)();return m.createElement(L,z({ref:t,role:"presentation"},e,{__css:a.icon}))}));s.a&&(C.displayName="ListIcon");var W=["January","February","March","April","May","June","July","August","September","October","November","December"],B=function(e){var t=new Date(e);return function(e){var a=t.getFullYear()+" "+W[t.getMonth()]+(e.noday?"":" "+t.getDate()),n="";if(void 0!==e.updated){var r=new Date(e.updated);n=" (updated "+r.getFullYear()+" "+W[r.getMonth()]+" "+r.getDate()+")"}return u.a.createElement(f,{fontStyle:"italic"},e.prepend||"",a,n,e.append||"")}},F=function(e,t){return function(a){return u.a.createElement(p.a,{as:e,size:t,mt:"4",mb:2},a.children)}},I=function(e){return u.a.createElement(v.a,{to:e.href},u.a.createElement(b.a,{color:"refcolor"},e.children))},q=function(e){return u.a.createElement("div",null,u.a.createElement(f,{fontStyle:"italic"},e.children," ",e.link&&u.a.createElement(I,{href:e.link},e.link)))},G=function(e){return u.a.createElement(f,{fontStyle:"italic"},e.children)},J=function(e){return u.a.createElement(f,{fontWeight:"bold"},e.children)},H=function(e){return u.a.createElement(d.a,{w:"full",p:"4",bg:"bgcolor",color:"#555",my:"4"},e.children)},R=function(e){return u.a.createElement(g.a,{mx:"auto",src:e.src,alt:e.alt,maxW:["100%","100%","640px"]})},U=function(e){return u.a.createElement(A,{mb:4},e.children)},X=function(e){return u.a.createElement(M,{mb:4},e.children)},V=function(e){return u.a.createElement(D,null,e.children)};t.a=function(e){var t=e.children,a=e.pageContext,n=e.path,r=Object(v.d)("2025927828").allFile.edges.map((function(e){return e.node})).filter((function(e){return e.absolutePath.includes("banners")})).find((function(e){return n.includes(e.name)})),o=n.split("/"),i=o[o.length-3],c=a.frontmatter,l=c.title,s=c.date,m={PublishDate:B(s),Reference:q,p:w,a:I,h1:F("h1","xl"),h2:F("h2","lg"),h3:F("h3","base"),h4:F("h4","sm"),img:R,i:G,b:J,blockquote:H,ol:X,ul:U,li:V};return u.a.createElement(O.a,{pageName:i},u.a.createElement(E.a,null,u.a.createElement("meta",{charSet:"utf-8"}),u.a.createElement("title",null,l),u.a.createElement("link",{rel:"canonical",href:"http://reeves.nl/"})),u.a.createElement(d.a,{w:"100%"},u.a.createElement(j.a,{title:l},u.a.createElement(y.a,{components:m},r&&u.a.createElement(g.a,{src:r.publicURL,mx:"auto"}),u.a.createElement(d.a,{mx:"auto",maxW:"xl",fontSize:"lg"},t)))))}},"g+/x":function(e,t,a){"use strict";var n=a("q1tI"),r=a("nwMj"),o=a("tofy"),i=a("v7Hm"),c=a("rGDf");t.a=function(e){return n.createElement(r.a,{w:"100%",h:"100%"},n.createElement(o.a,{direction:"column",maxW:"100%"},n.createElement(i.a,{w:"100%",borderBottomColor:"seperatorcolor",borderBottomWidth:"thin",mb:"4"},n.createElement(c.a,{fontFamily:"heading",size:"lg"},e.title)),n.createElement(i.a,{color:"contentcolor",maxW:"100%"},e.children)))}},z0dL:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return i})),a.d(t,"default",(function(){return s}));var n=a("zLVn"),r=(a("q1tI"),a("7ljp")),o=a("dLIU"),i={},c={_frontmatter:i},l=o.a;function s(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(r.b)(l,Object.assign({},c,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"The colours used in the animations on the Homepage and the Gondwana main page require some explanation."),Object(r.b)("h2",null,"Colour legend"),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"http://www.reeves.nl/upload/colour-legend.jpg",alt:"Sample map for colour legend"})),Object(r.b)("p",null,"Most of Gondwana is made up of an assemblage of Precambrian terranes, though much of the constituent continents by area is covered with younger formations. The main exception is the large belt of Phanerozoic orogeny\nthat separated Precambrian Gondwna from the Pacfific Ocean, evident here in the ",Object(r.b)("strong",{parentName:"p"},"beige")," colours of southern South America and the extreme SW corner of Africa. "),Object(r.b)("p",null,"It is assumed that the Precambrian areas can be taken as fragments that have retained their geometry throughout Phanerozoic time\nand that, once dispersal set in, geometrical distortions were confined to rifting and extension around the margins of the fragments and sub-fragments. These fragments are coloured ",Object(r.b)("strong",{parentName:"p"},"pink")," in the animations.\nNear their margins, boundaries are often taken from airborne geophysical surveys that show clearly where covered but shallow Precambrian rocks give way to deeply-buried Precambrian\nbasement\noutboard of the rift shoulders. Hence the oulines of the fragments, including the fragments that make up Africa itself, often differ from what is shown on a geological map. For example, shallow\nPrecambrian basement extends offshore along part of the Namibian coastline while the eastern margin of the Precambrian rocks of South Africa is placed below the Lebombo mountains, well inshore of\nthe coastline of Mozambique. Some small fragments with less certain Precambrian affinity are shown in paler shades of pink (e.g. Limpopia, Comoros)."),Object(r.b)("p",null," Oceanic areas are shaded in pale blue.  ",Object(r.b)("em",{parentName:"p"},"Fracture zones")," interpreted from ocean-floor topography are shown in ",Object(r.b)("strong",{parentName:"p"},"darker blue"),". ",Object(r.b)("em",{parentName:"p"},"Mid-ocean ridges"),", which have been modeled carefully\nas moving at half the speed of their conjugate continent pair, are portrayed using ",Object(r.b)("strong",{parentName:"p"},"red")," for the ",Object(r.b)("em",{parentName:"p"},"active ridge sections")," and ",Object(r.b)("strong",{parentName:"p"},"dark grey")," for the ",Object(r.b)("em",{parentName:"p"},"transform offsets"),".  The latter have been\npositioned to coincide with prominent ",Object(r.b)("em",{parentName:"p"},"fracture zones")," but without going into the level of detail that would be confusing at the scale of a screen-sized animation of the whole earth."),Object(r.b)("p",null," Sediments depsosited on the ocean floor are not shown.  The large ",Object(r.b)("em",{parentName:"p"},"volcanic edifices")," in oceanic domains are shown, however, in some animations by a solid shading, usually brown, red-brown or buff in colour.\nThe cut-off between volcanic features of the ocean that are shown and those that are omitted is not rigorous."),Object(r.b)("p",null," Locations of the main ",Object(r.b)("em",{parentName:"p"},"plume heads")," are shown by large 18-point stars about 1000 km in diameter. These are shown in grey before a plume strikes and in red afterwards. Some smaller hotspots,\nsuch as the source of the Cameroon volcanic line, are indicated by small stars."),Object(r.b)("p",null," For completeness, many animations also show the ",Object(r.b)("em",{parentName:"p"},"Morokweng meteorite impact")," hidden below the Kalahari sand in central southern Africa. This feature has been proved by drilling and\ngeophysical data indicate a diameter of at least 70 km for the impact crater.  Some authors argue for much larger manifestations of this event.  Dating from the discovery drillhole places the event precisely\non the Jurassic-Cretaceous boundary. Any relationship with tectonics is unproven, but experience has shown that awareness of the Morokweng impact is limited."),Object(r.b)("p",null," ",Object(r.b)("em",{parentName:"p"},"Last updated: 2021 April 28")),Object(r.b)("p",null," ",Object(r.b)("a",{parentName:"p",href:"../other-material"},"Return to Global Thoughts page")),Object(r.b)("p",null," ",Object(r.b)("a",{parentName:"p",href:"../../gondwana"},"Return to Gondwana main page")))}s.isMDXComponent=!0},zLVn:function(e,t,a){"use strict";function n(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}a.d(t,"a",(function(){return n}))}}]);
//# sourceMappingURL=component---src-pages-gondwana-legend-to-the-anims-mdx-7c1a7a49a9b0471c757c.js.map