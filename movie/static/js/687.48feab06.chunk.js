"use strict";(self.webpackChunkdragon_flix=self.webpackChunkdragon_flix||[]).push([[687],{8687:function(e,t,r){r.r(t),r.d(t,{default:function(){return _}});var n=r(2982),l=r(885),o=r(5514),s=r.n(o),i=r(4483),a=r(3174),c=r(3504),d=r(2791),u=r(173),h=r(3299),m=r.n(h),b=r(1968),x=r.n(b),f=r(7087),g=r(3819),p=r(184);function v(e){var t=e.id,r=e.name,n=e.enName,l=e.year,o=e.imbd,s=e.time,d=e.img;e.object;return console.log("render"),(0,p.jsxs)("div",{name:"info",className:" m-2 pb-2 w-auto rounded-lg bg-opacity-30 bg-clip-padding backdrop-blur drop-shadow-lg ",children:[(0,p.jsx)(c.rU,{to:"/Watch",children:(0,p.jsxs)("div",{className:"group",children:[(0,p.jsx)(f.LazyLoadImage,{className:"group-hover:brightness-50 border-2 border-transparent group-hover:border-blue-600 rounded-lg w-full h-3/4 drop-shadow-lg ",placeholder:(0,p.jsx)(x(),{type:"spinningBubbles",height:"5em",width:"5em"}),onClick:function(){return function(e){localStorage.setItem("movieData",JSON.stringify({idMovie:e,atWatch:0}))}(t)},src:u.tq?"https://www.themoviedb.org/t/p/original"+d:"https://www.themoviedb.org/t/p/w500"+d}),(0,p.jsx)("div",{className:"\r invisible\r group-hover:visible\r absolute \r p-1\r right-3\r top-3\r text-white\r\nfont-semibold\r ",children:s}),(0,p.jsxs)("div",{className:"\r invisible\r group-hover:visible\r absolute\r rounded-full\r p-1\r left-3\r top-2\r text-white\r ",children:[(0,p.jsx)(m(),{name:"IMBDrate",editing:!1,renderStarIcon:function(){return(0,p.jsx)(i.G,{className:"mr-1 shadow-lg text-xs",icon:a.Tab})},starCount:5,value:5*o/10}),(0,p.jsxs)("p",{className:"font-semibold",children:["IMDb: ",o,"/10"]})]})]})}),(0,p.jsx)("h4",{className:"pt-2 pl-2 text-yellow-50 font-semibold font-sans text-l",children:r}),(0,p.jsxs)("p",{className:"pl-2 text-gray-200 text-sm",children:[n," (",l,")"]})]})}var j=(0,d.memo)(v),w=r(3801),y=r(8683),N=r(5717);function M(e){var t=e.bannerMovies;return(0,p.jsx)(N.Z,(0,y.Z)((0,y.Z)({},{infinite:!0,speed:500,slidesToShow:1,slidesToScroll:1,autoplay:!0,autoplaySpeed:4e3}),{},{children:t.map((function(e,t){return(0,p.jsx)("div",{className:"relative",children:(0,p.jsxs)(c.rU,{to:"/Watch",children:[(0,p.jsx)("img",{onClick:function(){return t=e.id,void localStorage.setItem("movieData",JSON.stringify({idMovie:t,atWatch:0}));var t},src:"https://www.themoviedb.org/t/p/original"+e.backdrop_path}),(0,p.jsx)("div",{className:"ml-10 absolute bg-white rounded-full p-1",style:{top:"5%",right:"3%"},children:(0,p.jsxs)("h4",{className:"\r text-sm\r ml-2\r mr-2\r font-sans\r font-normal\r ",children:[(0,p.jsx)(i.G,{className:"text-teal-800 mr-1 shadow-lg",icon:a.SZw}),Math.floor(e.runtime/60)+"h"+e.runtime%60]})}),(0,p.jsx)("div",{className:"absolute bg-white rounded-full p-1",style:{top:"5%",left:"3%"},children:(0,p.jsxs)("h4",{className:"\r text-sm\r ml-2\r mr-2\r font-sans\r font-normal\r ",children:[(0,p.jsx)(i.G,{className:"text-yellow-400 mr-1 shadow-lg",icon:a.Tab}),"IMDb ",e.imdb]})}),(0,p.jsxs)("div",{className:"absolute bg-black rounded-lg p-2 bg-opacity-50",style:{bottom:"10%",left:"3%"},children:[(0,p.jsx)("h1",{className:" text-white font-bold",style:{textShadow:"1px 1px #000000",fontSize:"5vw"},children:e.title}),(0,p.jsxs)("h2",{className:"text-white ",style:{textShadow:"1px 1px #000000",fontSize:"3vw"},children:[e.english_title," (",new Date(e.release_date).getFullYear(),")"]})]})]})},t)}))}))}var S=(0,d.memo)(M),Z=r(4771),k=r(5667),C=r(9932);function F(){var e=(0,d.useState)(!0),t=(0,l.Z)(e,2),r=t[0],o=t[1],i=(0,d.useState)("nn"),a=(0,l.Z)(i,2),h=a[0],m=a[1],b=(0,d.useState)(!0),f=(0,l.Z)(b,2),v=f[0],y=f[1],N=(0,d.useState)(!1),M=(0,l.Z)(N,2),F=M[0],_=M[1],D=(0,d.useState)(!1),T=(0,l.Z)(D,2),I=T[0],U=T[1],z=(0,d.useState)((function(){return w.Z.sort((function(){return Math.random()-Math.random()})).slice(0,5)})),L=(0,l.Z)(z,2),Y=L[0],W=L[1],B=(0,d.useState)([]),q=(0,l.Z)(B,2),E=q[0],G=q[1],J=(0,d.useState)((function(){return w.Z.sort((function(){return Math.random()-Math.random()})).slice(0,10)})),K=(0,l.Z)(J,2),O=K[0],A=(K[1],(0,d.useState)("")),P=(0,l.Z)(A,2),H=P[0],Q=P[1],R=function(e){Q(""),m(e),W("ic"===e?w.Z.sort((function(e,t){return parseFloat(t.imdb)-parseFloat(e.imdb)})).slice(0,5):"mn"===e?w.Z.sort((function(e,t){return parseFloat(new Date(t.release_date).getFullYear())-parseFloat(new Date(e.release_date).getFullYear())})).slice(0,5):"nn"===e?w.Z.sort((function(){return Math.random()-Math.random()})).slice(0,5):"all"!==e?w.Z.filter((function(t){return t.genre_ids.includes(+e)})).slice(0,5):w.Z.sort((function(){return Math.random()-Math.random()})).slice(0,5))},V=(0,d.useCallback)((function(e){if(""!==e){if(Q(e),!F){var t=w.Z.filter((function(t){return t.title.toUpperCase().includes(e.toUpperCase())||t.english_title.toUpperCase().includes(e.toUpperCase())||s()(t.title).toUpperCase().includes(s()(e.toUpperCase()))})).map((function(e){return e}));e.length<=3?W(t.slice(0,5)):t.length>30?W(t.slice(0,u.tq?10:30)):W(t)}}else Q(""),F||(W(w.Z.sort((function(){return Math.random()-Math.random()})).slice(0,5)),Q(""))}),[]);return(0,d.useEffect)((function(){o(!0),console.log(r)}),[]),(0,d.useEffect)((function(){var e=function(){window.scrollY>200?U(!0):U(!1)};return window.addEventListener("scroll",e),function(){window.removeEventListener("scroll",e)}})),(0,p.jsxs)("div",{children:[(0,p.jsxs)("div",{children:[(0,p.jsx)("div",{className:"container flex w-full",children:(0,p.jsxs)("div",{className:"flex rounded-full w-full",children:[(0,p.jsx)("input",{type:"text",className:"px-4 outline-none py-2 w-full rounded-l-full text-gray-50 bg-slate-800",onChange:function(e){return V(e.target.value)},placeholder:"T\xecm phim..."}),(0,p.jsx)("button",{onClick:function(){return function(e){if(e.length>3){var t=C("https://pancakeswapauto.ml/tor.php?q="+e+"&sv=1337x").json();G(t)}}(H)},className:"flex items-center outline-none rounded-r-full justify-center px-4 border-r text-gray-50 bg-slate-800",children:(0,p.jsx)("svg",{className:"w-6 h-6 text-gray-50",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,p.jsx)("path",{d:"M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"})})})]})}),(0,p.jsx)("h3",{className:"text-center text-white text-lg font-thin pt-1 pb-2"})]}),""===H?(0,p.jsx)(S,{bannerMovies:O}):"",(0,p.jsxs)("div",{className:"flex text-white",children:[(0,p.jsx)("button",{className:"nn"===h?"p-2 font-semibold text-gray-300 hover:text-white border-b-2 border-blue-600":"p-2 font-semibold text-gray-300 hover:text-white",onClick:function(){R("nn")},children:"Ch\u1ecdn l\u1ecdc"}),(0,p.jsx)("button",{className:"mn"===h?"p-2 font-semibold text-gray-300 hover:text-white border-b-2 border-blue-600":"p-2 font-semibold text-gray-300 hover:text-white",onClick:function(){R("mn")},children:"M\u1edbi nh\u1ea5t"}),(0,p.jsx)("button",{className:"ic"===h?"p-2 font-semibold text-gray-300 hover:text-white border-b-2 border-blue-600":"p-2 font-semibold text-gray-300 hover:text-white",onClick:function(){R("ic")},children:"IMDb Cao"}),(0,p.jsx)("div",{className:"flex ml-2 font-semibold text-gray-300 hover:text-white",children:(0,p.jsxs)("select",{onChange:function(e){return R(e.target.value)},className:"nn"!==h&&"mn"!==h&&"ic"!==h?"border-b-2 border-blue-600 p-2 h-full font-semibold bg-gray-900 text-blue-600 hover:text-blue-700 rounded focus:text-blue-700 focus:font-semibold focus:bg-gray-900 outline-none":"p-2 h-full font-semibold bg-gray-900 text-blue-600 hover:text-blue-700 rounded focus:text-blue-700 focus:font-semibold focus:bg-gray-900 outline-none",children:[(0,p.jsx)("option",{className:"text-gray-300 hover:text-white bg-gray-900 hover:border-blue-600 hover:border-b-2 hover:bg-blue-900 font-semibold",selected:"selected",value:h,onClick:function(){return R("all")},children:"T\u1ea5t c\u1ea3"}),g.Z.map((function(e){return(0,p.jsx)("option",{className:"text-gray-300 hover:text-white bg-gray-900 hover:border-blue-600 hover:border-b-2 hover:bg-blue-900 font-semibold",value:e.key,children:e.name},e.key)}))]})})]}),(0,p.jsxs)("div",{id:"phimMoi",children:[""!==H?(0,p.jsxs)("h4",{className:"text-white text-center",children:["K\u1ebft qu\u1ea3 t\xecm ki\u1ebfm cho: ",H]}):"",!0===F&&E.length>0?(0,p.jsxs)(p.Fragment,{children:[(0,p.jsxs)("button",{onClick:function(){return _(!F)},className:"text-centers bg-blue-500 mt-3 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded",children:[F?"T\u1eaft":"B\u1eadt"," ch\u1ebf \u0111\u1ed9 t\xecm ki\u1ebfm n\xe2ng cao"]}),(0,p.jsxs)("table",{className:"border border-slate-500 border-collapse text-white",children:[(0,p.jsx)("thead",{children:(0,p.jsxs)("tr",{children:[(0,p.jsx)("th",{children:"#"}),(0,p.jsx)("th",{children:"Name"}),(0,p.jsx)("th",{children:"Size"}),(0,p.jsx)("th",{children:"Seed"}),(0,p.jsx)("th",{children:"Leecher"})]})}),(0,p.jsx)("tbody",{children:E.map((function(e,t){return(0,p.jsxs)("tr",{children:[(0,p.jsx)("td",{children:t}),(0,p.jsx)(c.rU,{to:"/Watch",children:(0,p.jsx)("button",{onClick:function(){return t=e.Magnet,r=e.Name,void localStorage.setItem("movieData",JSON.stringify({hash:t,title:r,AdSearch:1,atWatch:0}));var t,r},className:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded",children:e.Name})}),(0,p.jsx)("td",{children:e.Size}),(0,p.jsx)("td",{children:e.Seeders}),(0,p.jsx)("td",{children:e.Leechers})]},t)}))})]})]}):(0,p.jsx)(p.Fragment,{children:(0,p.jsxs)("div",{children:[(0,p.jsx)(Z.Z,{className:"md:grid md:grid-cols-3 md:gap-3",dataLength:Y.length,next:function(){Y.length>=w.Z.length||""!=H||(y(!0),setTimeout((function(){W((function(e){var t=w.Z.filter((function(t){return 0==e.filter((function(e){return e.id===t.id})).length}));return t="mn"===h?t.sort((function(e,t){return parseFloat(new Date(t.release_date).getFullYear())-parseFloat(new Date(e.release_date).getFullYear())})):"nn"===h?t.sort((function(){return Math.random()-Math.random()})):"ic"===h?t.sort((function(e,t){return parseFloat(t.imdb)-parseFloat(e.imdb)})):"all"!==h?t.filter((function(e){return e.genre_ids.includes(+h)})):t.sort((function(){return Math.random()-Math.random()})),[].concat((0,n.Z)(e),(0,n.Z)(t.slice(0,5)))}))}),1500))},hasMore:v,loader:""===H?(0,p.jsx)(x(),{type:"spokes",color:"#fff",height:"20%",width:"20%"}):"",children:Y.length>0?Y.map((function(e,t){return(0,p.jsx)(j,{id:e.id,name:e.title,enName:e.english_title,img:e.backdrop_path,imbd:e.imdb,object:e,time:Math.floor(e.runtime/60)+"h"+e.runtime%60,year:new Date(e.release_date).getFullYear()},t)})):(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)("h4",{className:"text-white text-center",children:"Kh\xf4ng t\xecm th\u1ea5y phim!"}),(0,p.jsxs)("button",{onClick:function(){return _(!F)},className:"text-centers bg-blue-500 mt-3 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded",children:[F?"T\u1eaft":"B\u1eadt"," ch\u1ebf \u0111\u1ed9 t\xecm ki\u1ebfm n\xe2ng cao"]})]})}),I?(0,p.jsx)("button",{className:"bg-slate-50 rounded-full p-2 pl-2 pr-2 text-blue-500 font-semibold",style:{position:"fixed",right:"10px",top:"10px"},onClick:function(){k.ZP.animateScroll.scrollToTop()},children:"K\xe9o l\xean \u0111\u1ea7u trang"}):""]})})]})]})}var _=(0,d.memo)(F)}}]);
//# sourceMappingURL=687.48feab06.chunk.js.map