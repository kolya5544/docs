"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[38948],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>u});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=s(a),u=r,k=c["".concat(p,".").concat(u)]||c[u]||m[u]||i;return a?n.createElement(k,l(l({ref:t},d),{},{components:a})):n.createElement(k,l({ref:t},d))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},22769:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var n=a(87462),r=(a(67294),a(3905));const i={title:"Fast Execution",sidebar_label:"Fast Execution",sidebar_position:2.1},l=void 0,o={unversionedId:"v5/websocket/private/fast-execution",id:"v5/websocket/private/fast-execution",title:"Fast Execution",description:'Fast execution stream significantly reduces data latency compared original "execution" stream. However, it pushes limited',source:"@site/docs/v5/websocket/private/fast-execution.mdx",sourceDirName:"v5/websocket/private",slug:"/v5/websocket/private/fast-execution",permalink:"/docs/v5/websocket/private/fast-execution",draft:!1,tags:[],version:"current",sidebarPosition:2.1,frontMatter:{title:"Fast Execution",sidebar_label:"Fast Execution",sidebar_position:2.1},sidebar:"v5SideBar",previous:{title:"Execution",permalink:"/docs/v5/websocket/private/execution"},next:{title:"Order",permalink:"/docs/v5/websocket/private/order"}},p={},s=[{value:"Response Parameters",id:"response-parameters",level:3},{value:"Subscribe Example",id:"subscribe-example",level:3},{value:"Stream Example",id:"stream-example",level:3}],d={toc:s};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,'Fast execution stream significantly reduces data latency compared original "execution" stream. However, it pushes limited\nexecution type of trades, and fewer data fields.'),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"All-In-One Topic:")," ",(0,r.kt)("inlineCode",{parentName:"p"},"execution.fast"),(0,r.kt)("br",null),"\n",(0,r.kt)("strong",{parentName:"p"},"Categorised Topic:")," ",(0,r.kt)("inlineCode",{parentName:"p"},"execution.fast.linear"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"execution.fast.inverse"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"execution.fast.spot"),(0,r.kt)("br",null)),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"Supports all Perps, Futures and Spot exceution, and do not support Options for now"),(0,r.kt)("li",{parentName:"ul"},"You can only receive ",(0,r.kt)("a",{parentName:"li",href:"../../enum#exectype"},"execType"),"=Trade update"))),(0,r.kt)("h3",{id:"response-parameters"},"Response Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Comments"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"topic"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Topic name")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"creationTime"),(0,r.kt)("td",{parentName:"tr",align:"left"},"number"),(0,r.kt)("td",{parentName:"tr",align:null},"Data created timestamp (ms)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"data"),(0,r.kt)("td",{parentName:"tr",align:"left"},"array"),(0,r.kt)("td",{parentName:"tr",align:null},"Object")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> ",(0,r.kt)("a",{parentName:"td",href:"../../enum#category"},"category")),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Product type ",(0,r.kt)("ul",null,(0,r.kt)("li",null,(0,r.kt)("a",{parentName:"td",href:"../../acct-mode#uta-20"},"UTA2.0"),", ",(0,r.kt)("a",{parentName:"td",href:"../../acct-mode#uta-10"},"UTA1.0"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"linear"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"inverse"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"spot")),(0,r.kt)("li",null,"Classic account: ",(0,r.kt)("inlineCode",{parentName:"td"},"linear"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"inverse"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"spot"),".")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> symbol"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Symbol name")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> orderId"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Order ID")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> isMaker"),(0,r.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"true"),": Maker, ",(0,r.kt)("inlineCode",{parentName:"td"},"false"),": Taker")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> orderLinkId"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"User customized order ID ",(0,r.kt)("li",null,"maker trade is always ",(0,r.kt)("inlineCode",{parentName:"td"},'""')),(0,r.kt)("li",null,'If a maker order in the orderbook is converted to taker (by price amend), orderLinkId is also ""'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> execId"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Execution ID")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> execPrice"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Execution price")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> execQty"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Execution qty")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> side"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Side. ",(0,r.kt)("inlineCode",{parentName:"td"},"Buy"),",",(0,r.kt)("inlineCode",{parentName:"td"},"Sell"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> execTime"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Executed timestamp\uff08ms\uff09")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> seq"),(0,r.kt)("td",{parentName:"tr",align:"left"},"long"),(0,r.kt)("td",{parentName:"tr",align:null},"Cross sequence, used to associate each fill and each position update",(0,r.kt)("ul",null,(0,r.kt)("li",null,"The seq will be the same when conclude multiple transactions at the same time"),(0,r.kt)("li",null,"Different symbols may have the same seq, please use seq + symbol to check unique")))))),(0,r.kt)("h3",{id:"subscribe-example"},"Subscribe Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "op": "subscribe",\n    "args": [\n        "execution.fast"\n    ]\n}\n')),(0,r.kt)("h3",{id:"stream-example"},"Stream Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "topic": "execution.fast",\n    "creationTime": 1716800399338,\n    "data": [\n        {\n            "category": "linear",\n            "symbol": "ICPUSDT",\n            "execId": "3510f361-0add-5c7b-a2e7-9679810944fc",\n            "execPrice": "12.015",\n            "execQty": "3000",\n            "orderId": "443d63fa-b4c3-4297-b7b1-23bca88b04dc",\n            "isMaker": false,\n            "orderLinkId": "test-00001",\n            "side": "Sell",\n            "execTime": "1716800399334",\n            "seq": 34771365464\n        }\n    ]\n}\n')))}m.isMDXComponent=!0}}]);