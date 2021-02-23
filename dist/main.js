(()=>{"use strict";var e={585:(e,t,o)=>{e.exports=o.p+"7e178dadce62bd8c8618.png"},533:(e,t,o)=>{e.exports=o.p+"4bdd05d4d9bbd0e7c4d7.png"},501:(e,t,o)=>{e.exports=o.p+"fa6666e4d8348d010ac7.png"},770:(e,t,o)=>{e.exports=o.p+"147ed40f688099336aa6.png"},596:(e,t,o)=>{e.exports=o.p+"90c0606f9655aa7386e1.png"},844:(e,t,o)=>{e.exports=o.p+"7c53d5c3907c1ef9db48.png"},705:(e,t,o)=>{e.exports=o.p+"02f74ec9399b9fbc5bc3.svg"},591:(e,t,o)=>{e.exports=o.p+"acdbb70a8d1827918946.png"},64:(e,t,o)=>{e.exports=o.p+"a2dda5195fda753f66a8.png"},208:(e,t,o)=>{e.exports=o.p+"c3c6fb4e8b659702b30f.png"},152:(e,t,o)=>{e.exports=o.p+"96691e4e50cf1dfac33a.png"}},t={};function o(i){if(t[i])return t[i].exports;var n=t[i]={exports:{}};return e[i](n,n.exports,o),n.exports}o.p="",(()=>{var e=o(705),t=o(533),i='<li class="icon__element"><i class="icon fab fa-js"></i><p class="icon__name">JavaScript ES6</p></li>',n='<li class="icon__element"><i class="icon fab fa-react"></i><p class="icon__name">React</p></li>',a='<li class="icon__element"><i class="icon fab fa-html5"></i><p class="icon__name">HTML5</p></li>',c='<li class="icon__element"><i class="icon fab fa-css3-alt"></i><p class="icon__name">CSS3</p></li>',r='<li class="icon__element"><i class="icon fab fa-node-js"></i><p class="icon__name">Node.js / Express.js</p></li>',s='<li class="icon__element"><i class="icon fas fa-database"></i><p class="icon__name">MongoDB</p></li>',l='<li class="icon__element"><i class="icon fas fa-mobile-alt"></i><p class="icon__name">Responsive Layouts</p></li>',p='<li class="icon__element"><i class="icon far fa-comments"></i><p class="icon__name">Rest API</p></li>',u='<li class="icon__element"><i class="icon fas fa-box-open"></i><p class="icon__name">WebPack</p></li>',d='<li class="icon__element"><img srs="#" alt=\'postmanIcon\' class=\'postmanIcon\'> <p class="icon__name icon__name-postman">Postman</p></li>',m=[{title:"The Degree Final Project",description:["'News Explorer' it is a full stack React application to allow users find and save news.  To find news user need to enter keyword. It is possiple to sign-up and save news in users profile. "],githubUrl:"https://github.com/MilaSergeeva/news-explorer-frontend",url:"https://milasergeeva.github.io/news-explorer-frontend/",imgUrl:o(585),id:1,tech:[i,n,c,a,r,l,p,s,d]},{title:"Todo app",description:["A Vanilla JavaScript Todo App.","You can use the input field to enter the title of a new task and add that task to the list by either clicking the plus icon or hitting return. It is possible to sort tasks as completed or uncompleted. Orange your tasks (drag and drob). Data saved in Local Storage"],githubUrl:"https://github.com/MilaSergeeva/to_do_vanillaJS",url:" https://milasergeeva.github.io/to_do_vanillaJS/",imgUrl:o(64),id:2,tech:[i,a,c,l]},{title:"Mesto-React",description:["'Mesto-React'. It is a full-stack single page application on React. It allows users to upload, view, like and delete photos, add . with following features - identification, authentication and authorization."],githubUrl:"https://github.com/MilaSergeeva/react-mesto-api-full",url:"https://mesto-react-front.herokuapp.com",imgUrl:o(596),id:3,tech:[i,n,c,a,r,l,p,s,d]},{title:"Mesto",description:["'Mesto' It is a single page application. OOP (class-based object-oriented js) "],githubUrl:"https://github.com/MilaSergeeva/mesto",url:"https://milasergeeva.github.io/mesto/",imgUrl:o(770),id:4,tech:[i,c,a,l,u]},{title:"Turbina",description:["'Turbina' is a voluntary promotion project for the children's bookshop Marshak. It's a React web application with a music player and a feedback form. "],githubUrl:"https://github.com/MilaSergeeva/turbina-dd",url:"https://milasergeeva.github.io/turbina-dd/",imgUrl:o(152),id:5,tech:[i,n,c,a,l]},{title:"Procastinate",description:["It is a study project. Simple JS generator of ideas for procrastination."],githubUrl:"https://github.com/MilaSergeeva/procastinate",url:"https://milasergeeva.github.io/procastinate/",imgUrl:o(591),id:6,tech:[i,c,a,l]},{title:"Landing 'Travel through Russia'",description:["it is a single page web site with useful information about how to travel through Russia.  HTML, CSS, adaptive layout"],githubUrl:"https://github.com/MilaSergeeva/russian-travel",url:"https://milasergeeva.github.io/russian-travel/",imgUrl:o(208),id:7,tech:[i,c,a,l]},{title:"Landing 'How to learn'",description:["It is a single page app with tips on how to learn. HTML, CSS adaptive layout"],githubUrl:"https://github.com/MilaSergeeva/how-to-learn",url:"https://mkvaratshelia.github.io/learn/",imgUrl:o(501),id:8,tech:[i,c,a,l]},{title:"My Portfolio",description:["It is a single page app to know me better"],githubUrl:"https://github.com/MilaSergeeva/portfolio",url:"https://milasergeeva.github.io/portfolio/",imgUrl:o(844),id:9,tech:[i,c,a,l,u]}],g=document.querySelectorAll(".popup"),h=document.querySelector(".popup__img"),f=document.querySelector(".popup__title"),_=(document.querySelector(".popup__discription"),document.querySelector(".popup__card")),v=document.querySelectorAll(".popup__close"),b=document.querySelector(".popup__docs"),S=document.querySelector(".popup__doc"),y=document.querySelector(".navbar__menu-button"),w=document.querySelector(".navbar"),k=document.querySelectorAll(".navbar__menu-item"),E=document.querySelectorAll(".docs-pdf"),L=document.querySelector(".cards");E[0].addEventListener("click",(function(e){S.src=t,console.log(S,e.target),x(b)})),y.addEventListener("click",(function(){w.classList.toggle("nav-opened")})),k.forEach((function(e){return e.addEventListener("click",(function(){w.classList.contains("nav-opened")&&w.classList.remove("nav-opened")}))}));var q=function(e){if(27===e.keyCode){var t=document.querySelector(".popup_opened");t&&(M(),x(t))}},x=function(e){var t=e.closest(".popup");t.classList.toggle("popup_opened"),t.classList.contains("popup_opened")?document.addEventListener("keydown",q):document.removeEventListener("keydown",q)};function M(){var e=document.querySelectorAll(".popup__discription"),t=document.querySelectorAll(".icon__element");e.forEach((function(e){return e.remove()})),t.forEach((function(e){return e.remove()}))}var U=function(e){var t=e.target;t.classList.contains("popup")&&(M(),x(t))},H=function(t){var o=document.querySelector(".popup__card"),i=o.querySelector(".popup__discription-container"),n=o.querySelector(".technologies");console.log("discription",i);var a=t.target.previousElementSibling;console.log("cardImg",a),h.src=a.src,f.textContent=a.alt;var c=m.findIndex((function(e){return e.title===a.alt}));m[c].description.forEach((function(e){i.insertAdjacentHTML("beforeEnd",'<p class="popup__discription">'.concat(e,"</p>"))})),m[c].tech.forEach((function(e){n.insertAdjacentHTML("beforeEnd",e),console.log(e)})),document.querySelector(".postmanIcon")&&(document.querySelector(".postmanIcon").src=e),x(_)};m.forEach((function(e){var t=function(e,t,o,i){var n=document.querySelector(".card-template").content.cloneNode(!0);n.querySelector(".card__title").textContent=e;var a=n.querySelector(".card__img"),c=n.querySelector(".card__github-link"),r=n.querySelector(".card__app-link"),s=n.querySelector(".overlay");return a.src=t,a.alt=e,c.href=o,r.href=i,s.addEventListener("click",H),n}(e.title,e.imgUrl,e.githubUrl,e.url);L.append(t)}));var I=document.querySelectorAll(".anim-on-scroll"),A=document.querySelectorAll(".main-content"),T=function(){[].forEach.call(I,(function(e){var t;(t=e.getBoundingClientRect()).top<=0&&t.bottom>=0||t.bottom>=(window.innerHeight||document.documentElement.clientHeight)&&t.top<=(window.innerHeight||document.documentElement.clientHeight)||t.top>=0&&t.bottom<=(window.innerHeight||document.documentElement.clientHeight)?e.classList.add("is-visible"):e.classList.contains("anim-stop")||e.classList.remove("is-visible")})),[].forEach.call(A,(function(e){var t=e.id,o=document.querySelector('.navebar__link[href="#'+t+'"]');!function(e){var t=e.getBoundingClientRect();return t.bottom>=(window.innerHeight||document.documentElement.clientHeight)&&t.top<=(window.innerHeight||document.documentElement.clientHeight)}(e)?e.classList.contains("active-link")||o.classList.remove("active-link"):o.classList.add("active-link")}))};I.length>0&&(window.addEventListener("scroll",(function(){return T()})),setTimeout((function(){T()}),400)),g.forEach((function(e){return e.addEventListener("click",U)})),g.forEach((function(e){return e.addEventListener("keydown",q)})),v.forEach((function(e){e.addEventListener("click",(function(e){var t=e.target.closest(".popup");M(),x(t)}))}))})()})();