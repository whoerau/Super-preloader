(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{248:function(e,t,a){"use strict";a.r(t);var r=a(17),s=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"site-rules"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#site-rules"}},[e._v("#")]),e._v(" Site rules")]),e._v(" "),a("blockquote",[a("p",[e._v("🌰 has similar pronounciation as "),a("code",[e._v("example")]),e._v(" in Chinese")])]),e._v(" "),a("blockquote",[a("p",[e._v("😂 I didn't finish the manual translation yet.")])]),e._v(" "),a("blockquote",[a("p",[e._v("🇯🇵 users: I would like to provide one for you but I don't speak Japanese. PR is welcomed")])]),e._v(" "),a("p",[e._v("Site rules can be")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://en.wikipedia.org/wiki/JavaScript",target:"_blank",rel:"noopener noreferrer"}},[e._v("JavaScript object"),a("OutboundLink")],1),e._v(" stored in the "),a("code",[e._v("SITEINFO")]),e._v(" variable")]),e._v(" "),a("li",[a("a",{attrs:{href:"https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/JSON",target:"_blank",rel:"noopener noreferrer"}},[e._v("JSON data"),a("OutboundLink")],1),e._v(" stored in "),a("code",[e._v("dist/mydata.json")])])]),e._v(" "),a("p",[e._v("We prefer "),a("a",{attrs:{href:"https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/JSON",target:"_blank",rel:"noopener noreferrer"}},[e._v("JSON data"),a("OutboundLink")],1),e._v(" because "),a("a",{attrs:{href:""}},[e._v("JSON")]),e._v(" can implement hot update. An example is shown at the "),a("RouterLink",{attrs:{to:"/en/siterule.html#example"}},[e._v("end")]),e._v(".")],1),e._v(" "),a("h2",{attrs:{id:"the-basic-composition-of-the-rules"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#the-basic-composition-of-the-rules"}},[e._v("#")]),e._v(" The basic composition of the rules")]),e._v(" "),a("h3",{attrs:{id:"name"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#name"}},[e._v("#")]),e._v(" name")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("type")]),e._v(": "),a("code",[e._v("String")]),e._v(" "),a("Jbadge")],1),e._v(" "),a("li",[a("strong",[e._v("description")]),e._v(": name of the website")])]),e._v(" "),a("h3",{attrs:{id:"url"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#url"}},[e._v("#")]),e._v(" url")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("type")]),e._v(": "),a("code",[e._v("XPath String")]),a("Jbadge"),e._v(", "),a("code",[e._v("XPath")]),a("Jbadge",{attrs:{json:!1}})],1),e._v(" "),a("li",[a("strong",[e._v("description")]),e._v(": regular expression to match the URL of the website")])]),e._v(" "),a("h3",{attrs:{id:"enable"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#enable"}},[e._v("#")]),e._v(" enable")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("type")]),e._v(": "),a("code",[e._v("Boolean")]),e._v(" "),a("Badge",{attrs:{text:"Optional",type:"error"}})],1),e._v(" "),a("li",[a("strong",[e._v("default")]),e._v(": "),a("code",[e._v("true")])]),e._v(" "),a("li",[a("strong",[e._v("description")]),e._v(": set to false to disable both autopager and preloader")])]),e._v(" "),a("h3",{attrs:{id:"useiframe"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#useiframe"}},[e._v("#")]),e._v(" useiframe")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("type")]),e._v(": "),a("code",[e._v("Boolean")]),e._v(" "),a("Badge",{attrs:{text:"Optional",type:"error"}})],1),e._v(" "),a("li",[a("strong",[e._v("default")]),e._v(": "),a("code",[e._v("false")])]),e._v(" "),a("li",[a("strong",[e._v("description")]),e._v(": user iframe to preload next page content and display it")])]),e._v(" "),a("h3",{attrs:{id:"exampleurl"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#exampleurl"}},[e._v("#")]),e._v(" exampleUrl "),a("Badge",{attrs:{text:"Optional",type:"error"}})],1),e._v(" "),a("ul",[a("li",[a("strong",[e._v("type")]),e._v(": "),a("code",[e._v("String")]),e._v(" "),a("Jbadge")],1),e._v(" "),a("li",[a("strong",[e._v("description")]),e._v(": example of the URL")])]),e._v(" "),a("h3",{attrs:{id:"nextlink"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nextlink"}},[e._v("#")]),e._v(" nextLink")]),e._v(" "),a("p",[e._v("The script finds the URL of "),a("code",[e._v("next page")]),e._v(" based on "),a("code",[e._v("nextLink")]),e._v(". We provide a variety of methods to acheive it:")]),e._v(" "),a("ol",[a("li",[a("p",[a("a",{attrs:{href:"https://devhints.io/xpath",target:"_blank",rel:"noopener noreferrer"}},[e._v("XPath selector"),a("OutboundLink")],1),e._v(": an element that has an "),a("code",[e._v("href")]),e._v(" attribute and points to the next page or an element whose content is the URL of the next page")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("type")]),e._v(": "),a("code",[e._v("XPath String")]),e._v(" "),a("Jbadge"),e._v(", "),a("code",[e._v("XPath")]),e._v(" "),a("Jbadge",{attrs:{json:!1}})],1),e._v(" "),a("li",[a("strong",[e._v("example")]),e._v(": "),a("code",[e._v('//div[@id="nav"]/a')]),e._v(", "),a("code",[e._v('//div[@id="nav"]/a/@href')]),e._v(", both equivalent")])])]),e._v(" "),a("li",[a("p",[a("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors",target:"_blank",rel:"noopener noreferrer"}},[e._v("CSS selector"),a("OutboundLink")],1),a("br")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("type")]),e._v(": "),a("code",[e._v("String")]),e._v(" "),a("Jbadge")],1),e._v(" "),a("li",[a("strong",[e._v("content")]),e._v(": "),a("code",[e._v("css;${CSS selector}")])]),e._v(" "),a("li",[a("strong",[e._v("example")]),e._v(": "),a("code",[e._v("css;div#nav>a")])])])]),e._v(" "),a("li",[a("p",[e._v("The "),a("a",{attrs:{href:""}},[e._v('"auto;"')]),e._v(" the script will automatically find all "),a("code",[e._v("text()")]),e._v(' elements containing "next page", "next page" and all '),a("code",[e._v("a")]),e._v(" elements with "),a("code",[e._v("href")]),e._v(" attribute.")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("type")]),e._v(": "),a("code",[e._v("String")]),e._v(" "),a("Jbadge")],1),e._v(" "),a("li",[a("strong",[e._v("content")]),e._v(": "),a("code",[e._v("auto;")]),e._v(" no options")])])]),e._v(" "),a("li",[a("p",[a("a",{attrs:{href:""}},[e._v("function")]),e._v(" a "),a("code",[e._v("JS")]),e._v(" function return the link of next page")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("type")]),e._v(": "),a("code",[e._v("JS function")]),e._v(" "),a("Jbadge",{attrs:{json:!1}})],1),e._v(" "),a("li",[a("strong",[e._v("content")]),e._v(":")])]),e._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("Function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[e._v("currentDocument"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" currentWindow"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" currentPageURL")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// **** your function is here ****")]),e._v("\n  Return urlOfNextPage\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])])]),e._v(" "),a("li",[a("p",[e._v("The "),a("a",{attrs:{href:""}},[e._v("Array")]),e._v(" script will iterate through all the elements and use "),a("span",{staticStyle:{color:"blue","font-weight":"bold"}},[e._v("above methods")]),e._v(" until the link of the next page link found")])]),e._v(" "),a("li",[a("p",[a("a",{attrs:{href:""}},[e._v("Object")]),e._v(" complex mode, check the function "),a("code",[e._v("hrefInc")]),e._v(" to learn more"),a("Jbadge")],1)])]),e._v(" "),a("h3",{attrs:{id:"prevlink"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#prevlink"}},[e._v("#")]),e._v(" prevLink "),a("Badge",{attrs:{text:"Optional",type:"error"}})],1),e._v(" "),a("p",[e._v("It serves the same function as "),a("a",{attrs:{href:"#nextlink"}},[e._v("nextLink")]),e._v(" but is designed for previous page. Usually you don't need it 😂")]),e._v(" "),a("h3",{attrs:{id:"pageelement"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pageelement"}},[e._v("#")]),e._v(" pageElement")]),e._v(" "),a("p",[e._v("The script finds the elements that are joined together automatically when the page is flipped. For example 🌰 a search engine like Google, "),a("code",[e._v("pageElement")]),e._v(" should be the searching result. We also provide different methods:")]),e._v(" "),a("ol",[a("li",[a("p",[a("a",{attrs:{href:"https://devhints.io/xpath",target:"_blank",rel:"noopener noreferrer"}},[e._v("XPath selector"),a("OutboundLink")],1),e._v(": The "),a("code",[e._v("XPath selector")]),e._v(" of the element.")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("type")]),e._v(": "),a("code",[e._v("XPath String")]),e._v(" "),a("Jbadge"),e._v(", "),a("code",[e._v("XPath")]),e._v(" "),a("Jbadge",{attrs:{json:!1}})],1),e._v(" "),a("li",[a("strong",[e._v("example")]),e._v(": "),a("code",[e._v('//div[@id="content]')])])])]),e._v(" "),a("li",[a("p",[a("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors",target:"_blank",rel:"noopener noreferrer"}},[e._v("CSS selector"),a("OutboundLink")],1),a("br")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("type")]),e._v(": "),a("code",[e._v("String")]),e._v(" "),a("Jbadge")],1),e._v(" "),a("li",[a("strong",[e._v("content")]),e._v(": "),a("code",[e._v("css;${CSS selector}")])]),e._v(" "),a("li",[a("strong",[e._v("example")]),e._v(": "),a("code",[e._v("css;div#content")])])])]),e._v(" "),a("li",[a("p",[a("a",{attrs:{href:""}},[e._v("function")]),e._v(" a function returning "),a("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/API/HTMLCollection",target:"_blank",rel:"noopener noreferrer"}},[e._v("HTMLCollection"),a("OutboundLink")],1),e._v(" containing the elements. One example is the rule of "),a("code",[e._v("WordPress")]),e._v(". With the "),a("code",[e._v("JS")]),e._v(" function we can determine whether a page is a post, if not, return "),a("code",[e._v("null")]),e._v(" to jump out of the logic of the script, and if so, return the contents of the post. One more 🌰 is some comic websites, we can use "),a("code",[e._v("pageElement")]),e._v(" to directly calculate the address of the next figure, so as to avoid loading useless content.")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("type")]),e._v(": "),a("code",[e._v("JS function")]),e._v(" "),a("Jbadge",{attrs:{json:!1}})],1),e._v(" "),a("li",[a("strong",[e._v("content")]),e._v(":")])]),e._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("Function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[e._v("currentDocument"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" currentWindow"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" currentPageURL")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// **** your function is here ****")]),e._v("\n  Return HTMLCollection\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])])])]),e._v(" "),a("h2",{attrs:{id:"rules-enhancements"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rules-enhancements"}},[e._v("#")]),e._v(" Rules enhancements")]),e._v(" "),a("p",[e._v("In addition to the basic elements, the rule can also contain an "),a("code",[e._v("Object")]),e._v(" with "),a("code",[e._v("key")]),e._v(" as "),a("code",[e._v("autopager")]),e._v(" for enhanced functionality. "),a("code",[e._v("autopager")]),e._v(" can contain the following "),a("code",[e._v("key")]),e._v(". All "),a("code",[e._v("key")]),e._v(" are "),a("Badge",{attrs:{text:"Optional",type:"error"}})],1),e._v(" "),a("h3",{attrs:{id:"enable-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#enable-2"}},[e._v("#")]),e._v(" enable")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("type")]),e._v(": "),a("code",[e._v("Boolean")]),e._v(" "),a("Jbadge")],1),e._v(" "),a("li",[a("strong",[e._v("default")]),e._v(": "),a("code",[e._v("true")])]),e._v(" "),a("li",[a("strong",[e._v("description")]),e._v(": enable autopager instead of preloadeder")])]),e._v(" "),a("h3",{attrs:{id:"useiframe-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#useiframe-2"}},[e._v("#")]),e._v(" useiframe")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("type")]),e._v(": "),a("code",[e._v("Boolean")]),e._v(" "),a("Jbadge")],1),e._v(" "),a("li",[a("strong",[e._v("default")]),e._v(": "),a("code",[e._v("false")])]),e._v(" "),a("li",[a("strong",[e._v("description")]),e._v(": user iframe to load next page content instead of "),a("a",{attrs:{href:"https://developer.mozilla.org/en/docs/Web/API/XMLHttpRequest",target:"_blank",rel:"noopener noreferrer"}},[e._v("XHR"),a("OutboundLink")],1)])]),e._v(" "),a("h3",{attrs:{id:"iloaded"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#iloaded"}},[e._v("#")]),e._v(" iloaded")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("type")]),e._v(": "),a("code",[e._v("Boolean")]),e._v(" "),a("Jbadge"),a("Badge",{attrs:{text:"useriframe: true",type:"error"}})],1),e._v(" "),a("li",[a("strong",[e._v("default")]),e._v(": "),a("code",[e._v("false")])]),e._v(" "),a("li",[a("strong",[e._v("description")]),e._v(": Whether to operate after the iframe is fully loaded.. otherwise the script will start after the DOM is loaded.")])]),e._v(" "),a("h3",{attrs:{id:"itimeout"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#itimeout"}},[e._v("#")]),e._v(" itimeout")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("type")]),e._v(": "),a("code",[e._v("Number")]),e._v(" "),a("Jbadge"),a("Badge",{attrs:{text:"useriframe: true",type:"error"}})],1),e._v(" "),a("li",[a("strong",[e._v("default")]),e._v(": "),a("code",[e._v("0")])]),e._v(" "),a("li",[a("strong",[e._v("description")]),e._v(": Delay when "),a("code",[e._v("iloaded")]),e._v(" is "),a("code",[e._v("false")]),e._v(", in milliseconds")])]),e._v(" "),a("h3",{attrs:{id:"newiframe"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#newiframe"}},[e._v("#")]),e._v(" newIframe")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("type")]),e._v(": "),a("code",[e._v("Boolean")]),e._v(" "),a("Jbadge"),a("Badge",{attrs:{text:"useriframe: true",type:"error"}})],1),e._v(" "),a("li",[a("strong",[e._v("default")]),e._v(": "),a("code",[e._v("false")])]),e._v(" "),a("li",[a("strong",[e._v("description")]),e._v(": Whether to create a new "),a("code",[e._v("iframe")]),e._v(" when flipping the current page +2, in some cases there is a miracle")])]),e._v(" "),a("h3",{attrs:{id:"reload"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#reload"}},[e._v("#")]),e._v(" reload")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("type")]),e._v(": "),a("code",[e._v("Boolean")]),e._v(" "),a("Jbadge"),a("Badge",{attrs:{text:"useriframe: true",type:"error"}})],1),e._v(" "),a("li",[a("strong",[e._v("default")]),e._v(": "),a("code",[e._v("false")])]),e._v(" "),a("li",[a("strong",[e._v("description")]),e._v(": Force overloading of "),a("code",[e._v("iframe")]),e._v(", which has some effects in some cases")])]),e._v(" "),a("h3",{attrs:{id:"force-enable"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#force-enable"}},[e._v("#")]),e._v(" force_enable")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("type")]),e._v(": "),a("code",[e._v("Boolean")]),e._v(" "),a("Jbadge"),e._v(" "),a("Badge",{attrs:{text:"Not Recommend",type:"error"}})],1),e._v(" "),a("li",[a("strong",[e._v("default")]),e._v(": "),a("code",[e._v("false")])]),e._v(" "),a("li",[a("strong",[e._v("description")]),e._v(": If it is really difficult to find "),a("RouterLink",{attrs:{to:"/en/siterule.html#pageelement"}},[e._v("pageElement")]),e._v(", turning this option on will make the entire page spliced ​​up.")],1)]),e._v(" "),a("h3",{attrs:{id:"headers"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#headers"}},[e._v("#")]),e._v(" headers")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("type")]),e._v(": "),a("code",[e._v("Object")]),e._v(" "),a("Jbadge")],1),e._v(" "),a("li",[a("strong",[e._v("default")]),e._v(": "),a("code",[e._v("{ Referer: <Link of current page> }")])]),e._v(" "),a("li",[a("strong",[e._v("description")]),e._v(": Customized headers to request next page")])]),e._v(" "),a("h3",{attrs:{id:"remain"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#remain"}},[e._v("#")]),e._v(" remain")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("type")]),e._v(": "),a("code",[e._v("Number")]),e._v(" "),a("Jbadge")],1),e._v(" "),a("li",[a("strong",[e._v("default")]),e._v(": "),a("code",[e._v("1")]),e._v(" always pre-turns a page")]),e._v(" "),a("li",[a("strong",[e._v("description")]),e._v(": The script will decide whether to turn the page according to the remaining height of the current page. "),a("code",[e._v("When the remaining height")]),e._v(" <= "),a("code",[e._v("page height")]),e._v(" x "),a("code",[e._v("remain")])])]),e._v(" "),a("h3",{attrs:{id:"maxpage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#maxpage"}},[e._v("#")]),e._v(" maxpage")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("type")]),e._v(": "),a("code",[e._v("Number")]),e._v(" "),a("Jbadge")],1),e._v(" "),a("li",[a("strong",[e._v("default")]),e._v(": "),a("code",[e._v("99")])]),e._v(" "),a("li",[a("strong",[e._v("description")]),e._v(": Maximum page views")])]),e._v(" "),a("h3",{attrs:{id:"ipages"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ipages"}},[e._v("#")]),e._v(" ipages")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("type")]),e._v(": "),a("code",[e._v("Array")]),e._v(" "),a("Jbadge")],1),e._v(" "),a("li",[a("strong",[e._v("default")]),e._v(": "),a("code",[e._v("[false,2]")])]),e._v(" "),a("li",[a("strong",[e._v("description")]),e._v(": Turn the page immediately. The first item is to control whether the second item (must be smaller than maxpage) is turned off immediately when the script is loaded, such as "),a("code",[e._v("[true,3]")]),e._v(". That is to say, after JS is loaded. . Turn 3 pages immediately. For the map station you can have: the experience of joy:")])]),e._v(" "),a("h3",{attrs:{id:"separator"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#separator"}},[e._v("#")]),e._v(" separator")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("type")]),e._v(": "),a("code",[e._v("Boolean")]),e._v(" "),a("Jbadge")],1),e._v(" "),a("li",[a("strong",[e._v("default")]),e._v(": "),a("code",[e._v("true")])]),e._v(" "),a("li",[a("strong",[e._v("description")]),e._v(": Whether to display the page navigation bar")])]),e._v(" "),a("h3",{attrs:{id:"sepdivdom"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sepdivdom"}},[e._v("#")]),e._v(" sepdivDom")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("type")]),e._v(": "),a("code",[e._v("JS function")]),e._v(" "),a("Jbadge",{attrs:{json:!1}})],1),e._v(" "),a("li",[a("strong",[e._v("description")]),e._v(": For some pages, the navigation bar automatically added by the script may cause the page format to be garbled. "),a("code",[e._v("sepdivDom")]),e._v(" defines a function to generate the appropriate navigation bar that will be inserted after the last "),a("RouterLink",{attrs:{to:"/en/siterule.html#pageelement"}},[e._v("pageElement")]),e._v(". An example is "),a("code",[e._v("小木虫-posts")])],1),e._v(" "),a("li",[a("strong",[e._v("example")])])]),e._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("Function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[e._v("currentDocument"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" sepdiv")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// currentDocument: read the next page of DOM")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// sepdiv: the navigation bar generated by the script, the tag is div")]),e._v("\n  Const td "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" doc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("createElement")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"td"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n  td"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("appendChild")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("sepdiv"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n  Const tr "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" doc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("createElement")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"tr"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n  td"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("setAttribute")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"colspan"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n  tr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("appendChild")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("td"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n  Const tbody "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" doc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("createElement")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"tbody"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n  Return tbody"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n")])])]),a("h3",{attrs:{id:"startfilter"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#startfilter"}},[e._v("#")]),e._v(" startFilter")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("type")]),e._v(": "),a("code",[e._v("JS function")]),e._v(" "),a("Jbadge",{attrs:{json:!1}})],1),e._v(" "),a("li",[a("strong",[e._v("description")]),e._v(": A js function that acts on the home page (i.e. current page) to fix the page. Receive "),a("code",[e._v("currentDocument")]),e._v(", "),a("code",[e._v("currentWindow")]),e._v(" two parameters. For details, please see "),a("RouterLink",{attrs:{to:"/en/siterule.html#documentfilter"}},[e._v("documentFilter (1)")])],1)]),e._v(" "),a("h3",{attrs:{id:"documentfilter"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#documentfilter"}},[e._v("#")]),e._v(" documentFilter")]),e._v(" "),a("ol",[a("li",[a("a",{attrs:{href:""}},[e._v("JS function")]),e._v(" "),a("Jbadge",{attrs:{json:!1}}),e._v(" "),a("ul",[a("li",[a("strong",[e._v("description")]),e._v(": A js function for prefetching content that can be used to correct prefetched content (such as csdn), remove ads (such as many nsfw), generate page content based on XHR results, and avoid using iframes (such as bl -novel) even generate new content (like m-team). In theory, you can use js to modify the static content of DOM.")]),e._v(" "),a("li",[a("strong",[e._v("content")]),e._v(": "),a("code",[e._v("function (currentDocument, nextPageLink) {return newDocument}")])])])],1),e._v(" "),a("li",[a("a",{attrs:{href:""}},[e._v('"startFilter"')]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("description")]),e._v(": Reuse "),a("RouterLink",{attrs:{to:"/en/siterule.html#startfilter"}},[e._v("startFilter")])],1)])])]),e._v(" "),a("h3",{attrs:{id:"scriptfilter"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#scriptfilter"}},[e._v("#")]),e._v(" scriptFilter")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("type")]),e._v(": String "),a("Jbadge")],1),e._v(" "),a("li",[a("strong",[e._v("description")]),e._v(": The script will delete all "),a("code",[e._v("<script>")]),e._v(" nodes before inserting the preloaded content into the page. You can set "),a("code",[e._v("scriptFilter")]),e._v(" as a Regex string to match the "),a("code",[e._v("src")]),e._v(" or inline content of the "),a("code",[e._v("<script>")]),e._v(" node to keep some nodes. In this way, you can use these inline js scripts in the "),a("RouterLink",{attrs:{to:"/en/siterule.html#filter"}},[e._v("filter")])],1)]),e._v(" "),a("h3",{attrs:{id:"filter"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#filter"}},[e._v("#")]),e._v(" filter")]),e._v(" "),a("ol",[a("li",[a("a",{attrs:{href:""}},[e._v("JS function")]),e._v(" "),a("Jbadge",{attrs:{json:!1}}),e._v(" "),a("ul",[a("li",[a("strong",[e._v("description")]),e._v(": a js function to manipulate with the preloaded content once it is inserted into the page")]),e._v(" "),a("li",[a("strong",[e._v("content")]),e._v(": "),a("code",[e._v("function (pageElement) {return null}")])])])],1)]),e._v(" "),a("h3",{attrs:{id:"stylish"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#stylish"}},[e._v("#")]),e._v(" stylish")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("type")]),e._v(": "),a("code",[e._v("String")]),e._v(" "),a("Jbadge")],1),e._v(" "),a("li",[a("strong",[e._v("description")]),e._v(": [CSS Style] for fixing pages (https://www.w3schools.com/css/)")])]),e._v(" "),a("h3",{attrs:{id:"replacee"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#replacee"}},[e._v("#")]),e._v(" replaceE")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("description")]),e._v(": Similar to "),a("RouterLink",{attrs:{to:"/en/siterule.html#pageelement"}},[e._v("pageElement")]),e._v(", select the "),a("code",[e._v("node")]),e._v(" to replace the navigation bar.")],1)]),e._v(" "),a("h2",{attrs:{id:"example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[e._v("#")]),e._v(" example")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/machsix/Super-preloader/raw/master/dist/mydata.json",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/machsix/Super-preloader/raw/master/dist/mydata.json"),a("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=s.exports}}]);