(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{dLIU:function(e,t,n){"use strict";var a=n("sKyC"),o=n("4jWa"),r=n("CRla"),i=n("U6LL"),s=n("BXwj"),l=n("epLR"),c=n("pr4h"),h=n("q1tI"),d=n.n(h);function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var f=Object(a.a)((function(e,t){var n=Object(o.b)("Text",e),a=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(Object(r.b)(e),["className","align","decoration","casing"]),c=Object(s.a)({textAlign:e.align,textDecoration:e.decoration,textTransform:e.casing});return h.createElement(i.a.p,u({ref:t,className:Object(l.a)("chakra-text",e.className)},c,a,{__css:n}))}));c.a&&(f.displayName="Text");var m=n("rGDf"),p=n("zHD3"),b=n("v7Hm"),g=n("vG+z"),y=n("Wbzz"),v=n("7ljp"),w=n("pfq/"),O=n("g+/x"),j=function(e){var t=e.heading,n=e.children;return h.createElement(b.a,{mb:"4"},t&&h.createElement(m.a,{size:"md",fontFamily:"heading"},t),n)},k=n("qhky"),x=n("rePB");function E(){return(E=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var S={path:h.createElement("g",{stroke:"currentColor",strokeWidth:"1.5"},h.createElement("path",{strokeLinecap:"round",fill:"none",d:"M9,9a3,3,0,1,1,4,2.829,1.5,1.5,0,0,0-1,1.415V14.25"}),h.createElement("path",{fill:"currentColor",strokeLinecap:"round",d:"M12,17.25a.375.375,0,1,0,.375.375A.375.375,0,0,0,12,17.25h0"}),h.createElement("circle",{fill:"none",strokeMiterlimit:"10",cx:"12",cy:"12",r:"11.25"})),viewBox:"0 0 24 24"},B=Object(a.a)((function(e,t){var n=e.as,a=e.viewBox,o=e.color,r=void 0===o?"currentColor":o,s=e.focusable,c=void 0!==s&&s,d=e.children,u=e.className,f=e.__css,m=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,["as","viewBox","color","focusable","children","className","__css"]),p={ref:t,focusable:c,className:Object(l.a)("chakra-icon",u),__css:E({w:"1em",h:"1em",display:"inline-block",lineHeight:"1em",flexShrink:0,color:r},f)},b=null!=a?a:S.viewBox;if(n&&"string"!=typeof n)return h.createElement(i.a.svg,E({as:n},p,m));var g=null!=d?d:S.path;return h.createElement(i.a.svg,E({verticalAlign:"middle",viewBox:b},p,m),g)}));c.a&&(B.displayName="Icon");var N=n("5+Am"),I=n("JX03");function G(){return(G=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function L(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}var T=Object(a.a)((function(e,t){var n=Object(o.a)("List",e),a=Object(r.b)(e),s=a.children,l=a.styleType,c=void 0===l?"none":l,d=a.stylePosition,u=a.spacing,f=L(a,["children","styleType","stylePosition","spacing"]),m=Object(I.b)(s),p=u?Object(x.a)({},"& > *:not(style) ~ *:not(style)",{mt:u}):{};return h.createElement(N.b,{value:n},h.createElement(i.a.ul,G({ref:t,listStyleType:c,listStylePosition:d,role:"list",__css:G({},n.container,p)},f),m))}));c.a&&(T.displayName="List");var D=Object(a.a)((function(e,t){var n=L(e,["as"]);return h.createElement(T,G({ref:t,as:"ol",styleType:"decimal",marginLeft:"1em"},n))}));c.a&&(D.displayName="OrderedList");var A=Object(a.a)((function(e,t){var n=L(e,["as"]);return h.createElement(T,G({ref:t,as:"ul",styleType:"initial",marginLeft:"1em"},n))}));c.a&&(A.displayName="UnorderedList");var C=Object(a.a)((function(e,t){var n=Object(N.c)();return h.createElement(i.a.li,G({ref:t},e,{__css:n.item}))}));c.a&&(C.displayName="ListItem");var P=Object(a.a)((function(e,t){var n=Object(N.c)();return h.createElement(B,G({ref:t,role:"presentation"},e,{__css:n.icon}))}));c.a&&(P.displayName="ListIcon");var M=["January","February","March","April","May","June","July","August","September","October","November","December"],R=function(e){var t=new Date(e);return function(e){var n=t.getFullYear()+" "+M[t.getMonth()]+(e.noday?"":" "+t.getDate()),a="";if(void 0!==e.updated){var o=new Date(e.updated);a=" (updated "+o.getFullYear()+" "+M[o.getMonth()]+" "+o.getDate()+")"}return d.a.createElement(f,{fontStyle:"italic"},e.prepend||"",n,a,e.append||"")}},_=function(e,t){return function(n){return d.a.createElement(m.a,{as:e,size:t,mt:"4",mb:2},n.children)}},J=function(e){return d.a.createElement(y.a,{to:e.href},d.a.createElement(p.a,{color:"refcolor"},e.children))},z=function(e){return d.a.createElement("div",null,d.a.createElement(f,{fontStyle:"italic"},e.children," ",e.link&&d.a.createElement(J,{href:e.link},e.link)))},F=function(e){return d.a.createElement(f,{fontStyle:"italic"},e.children)},H=function(e){return d.a.createElement(f,{fontWeight:"bold"},e.children)},W=function(e){return d.a.createElement(b.a,{w:"full",p:"4",bg:"bgcolor",color:"#555",my:"4"},e.children)},q=function(e){return d.a.createElement(g.a,{mx:"auto",src:e.src,alt:e.alt,maxW:["100%","100%","640px"]})},U=function(e){return d.a.createElement(A,{mb:4},e.children)},K=function(e){return d.a.createElement(D,{mb:4},e.children)},V=function(e){return d.a.createElement(C,null,e.children)};t.a=function(e){var t=e.children,n=e.pageContext,a=e.path,o=Object(y.d)("2025927828").allFile.edges.map((function(e){return e.node})).filter((function(e){return e.absolutePath.includes("banners")})).find((function(e){return a.includes(e.name)})),r=a.split("/"),i=r[r.length-3],s=n.frontmatter,l=s.title,c=s.date,h={PublishDate:R(c),Reference:z,p:j,a:J,h1:_("h1","xl"),h2:_("h2","lg"),h3:_("h3","base"),h4:_("h4","sm"),img:q,i:F,b:H,blockquote:W,ol:K,ul:U,li:V};return d.a.createElement(w.a,{pageName:i},d.a.createElement(k.a,null,d.a.createElement("meta",{charSet:"utf-8"}),d.a.createElement("title",null,l),d.a.createElement("link",{rel:"canonical",href:"http://reeves.nl/"})),d.a.createElement(b.a,{w:"100%"},d.a.createElement(O.a,{title:l},d.a.createElement(v.a,{components:h},o&&d.a.createElement(g.a,{src:o.publicURL,mx:"auto"}),d.a.createElement(b.a,{mx:"auto",maxW:"xl",fontSize:"lg"},t)))))}},"g+/x":function(e,t,n){"use strict";var a=n("q1tI"),o=n("nwMj"),r=n("tofy"),i=n("v7Hm"),s=n("rGDf");t.a=function(e){return a.createElement(o.a,{w:"100%",h:"100%"},a.createElement(r.a,{direction:"column",maxW:"100%"},a.createElement(i.a,{w:"100%",borderBottomColor:"seperatorcolor",borderBottomWidth:"thin",mb:"4"},a.createElement(s.a,{fontFamily:"heading",size:"lg"},e.title)),a.createElement(i.a,{color:"contentcolor",maxW:"100%"},e.children)))}},zLVn:function(e,t,n){"use strict";function a(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}n.d(t,"a",(function(){return a}))},ziBE:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return s})),n.d(t,"default",(function(){return d}));var a,o=n("zLVn"),r=(n("q1tI"),n("7ljp")),i=n("dLIU"),s={},l=(a="PublishDate",function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),Object(r.b)("div",e)}),c={_frontmatter:s},h=i.a;function d(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)(h,Object.assign({},c,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"At the request of the Geological Survey of Botswana I have retrieved a selection\nof 35 mm slides  from my archives to tell the story of how regional geophysical\nsurveys got started in the Kalahari.  The work began with geophysical studies in\nthe Okavango delta (gravity, seismic refraction and  micro-seismicity) and later\nextended into a national gravity survey and aeromagnetic  reconnaissance of the\nsand-covered regions. The slide collection may be viewed at the web-album\naddress ",Object(r.b)("a",{parentName:"p",href:"/"},"here"),"."),Object(r.b)("p",null,"A short descriptive text appears below. "),Object(r.b)("h1",null,"Some notes on my time in Botswana, 1970-74"),Object(r.b)("p",null,"I arrived in Lobatse late in the evening of January 1, 1970 at the end of a 34\nhour train journey  from Cape Town that had followed a 10-day ocean voyage from\nSouthampton, England. I think  that that was the hottest day I ever experienced\nin Botswana! I was met from the train by Chris  Jennings and, complete with all\nmy luggage, taken to the Cumberland Hotel. This was to be my  home for many\nweeks as my entitlement to government housing took some time to fulfill. "),Object(r.b)("p",null,"De Beers were busy starting the development of the Orapa diamond mine at this\ntime and  enhancing the supply of surface water to the mine through accelerating\nthe flow of the Boro River  in the Okavango Delta in order to fill the Mopipi\nPan near the mine (via the Boteti River) was the  strategy of the time. The\nGeological Survey felt it needed to know more about the Okavango Delta  and sent\nme to Maun after a few weeks to undertake some gravity traverses across the\nfault lines  that marked the SE edge of the delta. Mr ‘Burgy’ Burgoffer, GS\ndiamond driller, was already in the  area and met me at Maun airfield. I had\nnever flown before! I stayed at Riley’s Hotel – my first  experience of a\ncolonial-style hotel in Africa. "),Object(r.b)("p",null,"A few days of fieldwork showed interesting anomalies across the fault lines and\nI was sent back  with a full field support camp to do more work on April 1 that\nyear, very shortly after I had finally  acquired a permanent place to live in\nLobatse, in the flats opposite the Geological Survey. This  field effort finally\nextended across the whole six month season until October 1970. I was  constantly\nconcerned that the work would be cut short by other priorities and I became\nutterly  exhausted after months of field living and many kilometers of travel on\nprimitive tracks. The time  was also filled with new experiences of African\nwildlife, the limited facilities of Maun for  replenishing stores and the\nfascinating flooding around Maun in June and July as the floodwaters  from\nAngola brought these rivers to life at the height of the dry season. I travelled\nextensively to  the NE and SW along the base of the delta and executed whatever\ntraverses could be made at  right angles to the strike of the fault lines. An\nearly excursion was along the length of Chief’s  Island, before it became\ninaccessible with the rise of the annual flood waters. Sleepless nights,\nconcerned about the possible appearance of lions in camp, contributed to the\nexcitement. "),Object(r.b)("p",null,"Prior to my time in Lobatse, geophysics in the GS had been confined to local\nstudies for  groundwater and mineral exploration. I had the feeling that this\nwould never grow into the  contribution regional geophysics could make to\nexploring the solid geology hidden below the three quarters of Botswana that\nwere covered by the Kalahari Sand. Pursuing this possibility with gravity  and\naeromagnetic surveys eventually initiated many years of systematic geophysical\nmapping  efforts in Botswana, most of it by air. "),Object(r.b)("p",null,"Back in Lobatse, October 1970 brought the traditional summer season of\nunpredictable rain and  geologists in the office writing up their field results.\nSettling in again revealed the desperate  shortage of professional staff and the\nimminent return to England of several long-serving  geological mapping officers\nlike John Bennett and Dick Crockett . GS Director Colin Boocock – already on\nstaff in Lobatse for, I think, 22 years – also announced his intention to resign\nand move  back to South Africa. For a time there was just myself and a few other\njunior staff members all  told! Nevertheless, the Okavango gravity work was\nconsidered of high importance and I was sent  back for a second, much shorter,\nfield season in August-September 1971. This time I had the  support of technical\nassistant Frank Bicheno and the programme was to include some more  ambitious\ntraverses – by small open boat into the delta itself (courtesy of UNDP) and\naround the  north and west of the delta. This work was eventually written up as\nGS Bulletin 11 – The Gravity  Survey of Ngamiland, 1970-71 ",Object(r.b)("strong",{parentName:"p"},"[2]"),". "),Object(r.b)("p",null,"At the end of the 1971 field season, my return to Lobatse coincided with the\narrival of a whole new  cohort of professional staff from the UK, led by John\nHepworth as the new Director. This quickly led to a new lease of life for many\nGS activities and geophysical reconnaissance was no exception,  now supported by\na second geophysicist, Dave Hutchins, who was to contribute to the GS for  many\nyears to come. The gravity work in Ngamiland was expanded to the idea of\nexecuting a  gravity survey of the whole country – the National Gravity Survey\nor ‘Natgrav’. This was carried  out between August 1972 and December 1973 with\nfinancial support from the UK Government.  The work was made up of three phases,\nnot necessarily in this order: (1) A network of national  base stations was\nneeded and 23 points were established by flying two Lacoste and Romberg\ngravimeters between these points and international base stations in Johannesburg\nand  Livingstone, Zambia. This took two weeks flying with Cessna aircraft Zulu\nGolf Charlie. (2) Then  there were the routine ground observations along all\nmotorable tracks at 10 km intervals – at an  average of about 8 new stations day\nto a total of about 2500 points. This was the bulk of the work  and took 18\nmonths and 45 000 km of driving. (3) Finally, the least accessible areas of the\nCentral  Kalahari and the SW corner of the country were filled in by helicopter\ntransport ",Object(r.b)("strong",{parentName:"p"},"[3]"),". In all these  operations, position-fixing was the most demanding\naspect. A primitive magnetic land navigator  was used on the main survey\nLand-Rover and some of the earliest satellite imagery (Landsat 1) was also\npressed into service. The efficiency of helicopter operations convinced me that\n‘airborne’  was the only way ahead for geophysical reconnaissance programmes in\nthe future. "),Object(r.b)("p",null,"Support for these efforts came from the British Geological Survey, or the\nInstitute of Geological  Sciences as it was then called. Richard Carruthers\nassisted with the gravity base station network  and he was joined by Peter\nGreenwood to execute a seismic refraction survey in the Okavango  delta to\nfollow up the result of the gravity survey ",Object(r.b)("strong",{parentName:"p"},"[1]"),". ‘Okaseis’ was carried out in\n1973-4 at the  height of the hot season. Getting explosives to Maun was a major\npart of that task! Huge charges  had to be used because the Kalahari Sand proved\nvery absorbent of seismic energy. After I left  Botswana, Chris Scholz did\nfurther work investigating the seismicity of the Okavango Delta ",Object(r.b)("strong",{parentName:"p"},"[4]"),". "),Object(r.b)("p",null,"By the start of 1974, the end of my second contract in Lobatse was in sight and\nI was luckily able  to pursue the completion of the National Gravity Survey as\npart of a PhD study at the University of  Leeds where they still had an\nInstitute of African Geology. Remember, there were no suitable  computer\nfacilities in Lobatse at that time. That work kept me busy until October 1976,\ntwo years  after I stopped living in Lobatse. Bulletin 5 – The National Gravity\nSurvey of Botswana – was part  of that output ",Object(r.b)("strong",{parentName:"p"},"[3]"),". "),Object(r.b)("p",null,"John Hepworth had also been successful in interesting the Canadians in helping\nwith an airborne  magnetic reconnaissance of the Kalahari and Norm Paterson came\non a visit to advise on the  specifications for such an exercise early in 1974.\nThis ‘CIDA’ survey was carried out in 1975-6,  some 18 months after I left but,\nby the time I had finished my PhD, I had been offered a job with  Geoterrex in\nOttawa and found myself working on the compilation of that Botswana aeromagnetic\nsurvey and its publication. Eventually Geoterrex also got the job of\ninterpreting these results and I  worked on that in Ottawa, with help from Dave\nHutchins (who had taken over my role as leading  geophysicst in Lobatse), from\nabout September 1977 until mid 1978. The report that emerged  became something\nof a milestone in the exploration of Botswana’s geology and has been reprinted\nseveral times ",Object(r.b)("strong",{parentName:"p"},"[5]"),". "),Object(r.b)("p",null,"For me, my long involvement with Botswana ended in 1978 when I left Geoterrex\nand joined  Paterson Grant and Watson in Toronto and moved on to parallel\nproblems of using geophysics to  map hidden geology in many other parts of the\nworld. This has included a great deal of work in  other parts of Africa as well\nas in India, Australia and elsewhere. But the lessons learned in  Botswana have\nlasted a whole lifetime of professional activity. And Botswana still sets an\nexcellent  example of what could be achieved in many places where the geology\ndoes not lend itself to  mapping by the traditional methods of field geology. "),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Colin Reeves")),Object(r.b)(l,{prepend:"Delft, ",mdxType:"PublishDate"}),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Further reading")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"[1]"," Greenwood, P.G. and Carruthers, R., 1973.")," Geophysical Surveys in the\nOkavango Delta,  Botswana. Report No. 15, Institute of Geological Sciences,\nGeophysical Division, London."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"[2]"," Reeves, C.V., 1978.")," The Gravity Survey of\nNgamiland, 1970-71. Bulletin No. 11, Geological  Survey of Botswana, Lobatse. 78\np + appendices and maps. "),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"[3]"," Reeves, C.V. and Hutchins, D.G., 1976.")," The National Gravity Survey of\nBotswana, 1972-3.  Bulletin No.5, Geological Survey of Botswana, Lobatse. 36 p +\nappendices and maps."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"[4]"," Scholz, C., 1998.")," Fieldwork: A Geologist's Memoir of\nthe Kalahari. Princeton University Press,  198 p."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"[5]"," Terra Surveys Limited, 1978.")," Reconnaissance Aeromagnetic Survey of\nBotswana, 1975-7.  Botswana Geological Survey Department and Canadian\nInternational Development Agency. 199 p  + appendices and maps."))}d.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-news-geophysics-in-botswana-40-years-ago-mdx-c20155cfe57f88efc7f3.js.map