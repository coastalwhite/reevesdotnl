(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{OGr7:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),r=a("v7Hm"),l=a("zHD3"),o=a("tofy"),c=a("Wbzz"),m=a("g+/x"),i=a("xyai"),u=function(e){return n.createElement(r.a,{w:"100%",mb:"4"},n.createElement(m.a,{title:e.title},n.createElement(r.a,{dangerouslySetInnerHTML:{__html:e.html}}),n.createElement(r.a,null,n.createElement(c.a,{to:e.pageName},n.createElement(l.a,{color:"refcolor"},"Read more...")))))};t.default=function(e){var t=e.data.allMdx.edges.map((function(e){return e.node})).sort((function(e,t){var a=e.frontmatter,n=t.frontmatter;return a.date==n.date?0:a.date<n.date?1:-1})).map((function(e){var t=e.excerpt,a=e.slug;return{html:t,title:e.frontmatter.title,pageName:a.substr(a.lastIndexOf("/")+1)}}));return n.createElement(i.a,{pageName:"news",pageTitle:"News",images:[{src:"img/news.jpg",alt:"news"}]},n.createElement(o.a,{direction:"column",flex:"1"},t.map((function(e,t){return n.createElement(u,Object.assign({key:t},e))}))))}},"g+/x":function(e,t,a){"use strict";var n=a("q1tI"),r=a("nwMj"),l=a("tofy"),o=a("v7Hm"),c=a("rGDf");t.a=function(e){return n.createElement(r.a,{w:"100%",h:"100%"},n.createElement(l.a,{direction:"column",maxW:"100%"},n.createElement(o.a,{w:"100%",borderBottomColor:"seperatorcolor",borderBottomWidth:"thin",mb:"4"},n.createElement(c.a,{fontFamily:"heading",size:"lg"},e.title)),n.createElement(o.a,{color:"contentcolor",maxW:"100%"},e.children)))}},xyai:function(e,t,a){"use strict";var n=a("q1tI"),r=a("pfq/"),l=a("tofy"),o=a("v7Hm"),c=a("nwMj"),m=a("rGDf"),i=a("vG+z"),u=function(e){return n.createElement(c.a,{w:"100%"},n.createElement(l.a,{direction:"column"},e.title&&n.createElement(o.a,{w:"100%",borderBottomColor:"seperatorcolor",borderBottomWidth:"thin",mb:"4"},n.createElement(m.a,{fontFamily:"heading",size:"lg"},e.title)),n.createElement(o.a,null,e.images.map((function(e,t){return n.createElement(i.a,{key:t,src:e.src,alt:e.alt,mb:"4"})})))))},s=a("Wbzz");t.a=function(e){var t=e.pageName,a=e.pageTitle,c=e.images,m=e.children,i=Object(s.d)("600036406").allFile.edges.map((function(e){return e.node})),d=c.map((function(e){var t=e.src,a=e.alt;return{src:i.find((function(e){return e.absolutePath.includes(t)})).publicURL,alt:a}}));return n.createElement(r.a,{pageName:t},n.createElement(l.a,{direction:["column","column","row"],w:"100%"},n.createElement(o.a,{mr:["0","0","4"],mb:["4","4","0"],w:["100%","100%","sm"]},n.createElement(u,{title:a,images:d})),n.createElement(o.a,{flex:"1"},m)))}}}]);
//# sourceMappingURL=component---src-pages-news-index-tsx-e1bf5c1d085eaf237247.js.map