(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[543],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return u},kt:function(){return k}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),p=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=p(e.components);return r.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},s=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),s=p(t),k=o,m=s["".concat(c,".").concat(k)]||s[k]||d[k]||i;return t?r.createElement(m,l(l({ref:n},u),{},{components:t})):r.createElement(m,l({ref:n},u))}));function k(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,l=new Array(i);l[0]=s;var a={};for(var c in n)hasOwnProperty.call(n,c)&&(a[c]=n[c]);a.originalType=e,a.mdxType="string"==typeof e?e:o,l[1]=a;for(var p=2;p<i;p++)l[p]=t[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}s.displayName="MDXCreateElement"},3147:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return l},metadata:function(){return a},toc:function(){return c},default:function(){return u}});var r=t(2122),o=t(9756),i=(t(7294),t(3905)),l={title:"tokenId\u306e\u30c7\u30b6\u30a4\u30f3\u30d2\u30f3\u30c8"},a={unversionedId:"TokenIdDesign",id:"TokenIdDesign",isDocsHomePage:!1,title:"tokenId\u306e\u30c7\u30b6\u30a4\u30f3\u30d2\u30f3\u30c8",description:"tokenId \u306f NFT \u306e\u8b58\u5225\u5b50\u306b\u306a\u308a\u307e\u3059\u3002",source:"@site/docs/TokenIdDesign.mdx",sourceDirName:".",slug:"/TokenIdDesign",permalink:"/mint-sdk-js/docs/TokenIdDesign",editUrl:"https://github.com/KyuzanInc/mint-sdk-js/docs/TokenIdDesign.mdx",version:"current",frontMatter:{title:"tokenId\u306e\u30c7\u30b6\u30a4\u30f3\u30d2\u30f3\u30c8"},sidebar:"main",previous:{title:"BlockchainExplorer\u306eURL\u751f\u6210\u65b9\u6cd5",permalink:"/mint-sdk-js/docs/tokenRelatedURL/blockchainExplorer"},next:{title:"SDK\u306b\u304a\u3051\u308b\u901a\u8ca8\u306b\u3064\u3044\u3066",permalink:"/mint-sdk-js/docs/EthInSdk"}},c=[{value:"\u30c7\u30b6\u30a4\u30f3\u6848",id:"\u30c7\u30b6\u30a4\u30f3\u6848",children:[{value:"\u30d9\u30fc\u30b7\u30c3\u30af",id:"\u30d9\u30fc\u30b7\u30c3\u30af",children:[]},{value:"\u30a2\u30c9\u30d0\u30f3\u30b9",id:"\u30a2\u30c9\u30d0\u30f3\u30b9",children:[]}]},{value:"\u30e1\u30a4\u30f3\u30cd\u30c3\u30c8\u3067\u306e\u30c6\u30b9\u30c8\u4f5c\u54c1\u306e tokenId",id:"\u30e1\u30a4\u30f3\u30cd\u30c3\u30c8\u3067\u306e\u30c6\u30b9\u30c8\u4f5c\u54c1\u306e-tokenid",children:[]}],p={toc:c};function u(e){var n=e.components,t=(0,o.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"tokenId \u306f NFT \u306e\u8b58\u5225\u5b50\u306b\u306a\u308a\u307e\u3059\u3002\n\u4ee5\u4e0b\u306e\u6761\u4ef6\u3092\u6e80\u305f\u3057\u3066\u3044\u308c\u3070\u3001\u4efb\u610f\u306e\u3082\u306e\u3092\u6307\u5b9a\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u6574\u6570\u3067\u3042\u308b"),(0,i.kt)("li",{parentName:"ul"},"\u30b3\u30f3\u30c8\u30e9\u30af\u30c8\u306b\u5bfe\u3057\u3066\u30e6\u30cb\u30fc\u30af\u3067\u3042\u308b"),(0,i.kt)("li",{parentName:"ul"},"Max \u306f",(0,i.kt)("inlineCode",{parentName:"li"},"9007199254740990"),"(Mint \u306e\u4e2d\u306b\u9650\u308a)")),(0,i.kt)("h2",{id:"\u30c7\u30b6\u30a4\u30f3\u6848"},"\u30c7\u30b6\u30a4\u30f3\u6848"),(0,i.kt)("p",null,"tokenId \u306f\u4efb\u610f\u306b\u6c7a\u3081\u3066\u554f\u984c\u3042\u308a\u307e\u305b\u3093\u304c\u3001\u3044\u304f\u3064\u304b\u306e\u4f8b\u3092\u7d39\u4ecb\u3057\u307e\u3059\u3002"),(0,i.kt)("h3",{id:"\u30d9\u30fc\u30b7\u30c3\u30af"},"\u30d9\u30fc\u30b7\u30c3\u30af"),(0,i.kt)("p",null,"\u30d9\u30fc\u30b7\u30c3\u30af\u306a\u65b9\u6cd5\u3068\u3057\u3066\u306f\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"1,2,3"),"\u3068\u30a4\u30f3\u30af\u30ea\u30e1\u30f3\u30c8\u3055\u305b\u307e\u3059"),(0,i.kt)("h3",{id:"\u30a2\u30c9\u30d0\u30f3\u30b9"},"\u30a2\u30c9\u30d0\u30f3\u30b9"),(0,i.kt)("p",null,"\u6841\u3092\u533a\u5207\u308a\u3001\uff12\u8ef8\u4ee5\u4e0a\u3092\u8868\u73fe\u3057\u307e\u3059\u3002"),(0,i.kt)("p",null,"\u4f8b\u3048\u3070\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"6 \u6841\u4ee5\u4e0b\u3067\u30a8\u30c7\u30a3\u30b7\u30e7\u30f3\u3092\u8868\u73fe\u3057\u30017 \u6841\u4ee5\u4e0a\u3067\u30a2\u30a4\u30c6\u30e0\u306e\u8b58\u5225\u5b50\u3092\u8868\u73fe\u3059\u308b"),"\u3068\u3057\u307e\u3059\u3002\n\u30a2\u30a4\u30c6\u30e0\u3068\u30a8\u30c7\u30a3\u30b7\u30e7\u30f3\uff12\u8ef8\u3092\u8868\u73fe\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\n\u3053\u306e\u65b9\u6cd5\u306f\u3001Kyuzan Inc. \u304c\u904b\u55b6\u3057\u3066\u3044\u308b EGGRYPTO \u3067\u3082\u53d6\u308a\u5165\u308c\u3089\u308c\u3066\u3044\u307e\u3059\u3002"),(0,i.kt)("h4",{id:"\u4f8b"},"\u4f8b"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"1000001")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"2000001")),(0,i.kt)("p",null,"...."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"21000001")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"22000001")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"1000002")," <- ",(0,i.kt)("inlineCode",{parentName:"p"},"1000001"),"\u306e\u30a8\u30c7\u30a3\u30b7\u30e7\u30f3\uff12"),(0,i.kt)("h2",{id:"\u30e1\u30a4\u30f3\u30cd\u30c3\u30c8\u3067\u306e\u30c6\u30b9\u30c8\u4f5c\u54c1\u306e-tokenid"},"\u30e1\u30a4\u30f3\u30cd\u30c3\u30c8\u3067\u306e\u30c6\u30b9\u30c8\u4f5c\u54c1\u306e tokenId"),(0,i.kt)("p",null,"\u30e1\u30a4\u30f3\u30cd\u30c3\u30c8\u3067\u306e\u30c6\u30b9\u30c8\u4f5c\u54c1\u306f\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"9007199254740990"),"\u304b\u3089\u9806\u306b\u30c7\u30af\u30ea\u30e1\u30f3\u30c8\u3057\u305f\u5024\u3092\u8a2d\u5b9a\u3057\u672c\u756a\u30c6\u30b9\u30c8\u3092\u5b9f\u65bd\u3057\u307e\u3057\u305f\u3002"))}u.isMDXComponent=!0}}]);