import{S as m,i as a}from"./assets/vendor-8c59ed88.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();function p(s){const r=`https://pixabay.com/api/?key=44808293-64f6d68c9109520376c76cf92&q=${s}&image_type=photo&orientation=horizontal&safesearch=true`;return fetch(r).then(i=>{if(!i.ok)throw new Error(i.statusText);return i.json()})}function d(s){return s.map(({webformatURL:o,largeImageURL:r,tags:i,likes:e,views:t,comments:l,downloads:f})=>`
      <li class="gallery-item">
      <a class="gallery-link" href="${r}">
      <img class="gallery-img" src="${o}" alt="${i}" />
      <ul class="card-info">
        <li class="card-info-item">
          Likes<span class="accent">${e}</span>
        </li>
        <li class="card-info-item">
          Views<span class="accent">${t}</span>
        </li>
        <li class="card-info-item">
          Comments<span class="accent">${l}</span>
        </li>
        <li class="card-info-item">
          Downloads<span class="accent">${f}</span>
        </li>
      </ul>
      </a>
    </li>`).join("")}const n=document.querySelector(".form"),c=document.querySelector(".gallery"),u=document.querySelector(".loader-wrap"),y=new m(".gallery a",{captionsData:"alt",captionDelay:250});n.addEventListener("submit",g);function g(s){s.preventDefault(),c.innerHTML="";const o=n.elements.input.value.toLowerCase().trim();if(o===""){a.warning({title:"Caution",titleColor:"white",titleSize:"16px",message:"Please, fill out the field!",messageColor:"white",messageSize:"16px",position:"topRight",backgroundColor:"#ffa000",iconUrl:cautionSvg,close:!1,closeOnClick:!0});return}u.style.display="flex",p(o).then(r=>{r.hits.length===0?a.error({title:"Error",titleColor:"white",titleSize:"16px",message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"white",messageSize:"16px",position:"bottomRight",backgroundColor:"#ef4040",iconUrl:errorSvg,close:!1,closeOnClick:!0}):(c.innerHTML=d(r.hits),y.refresh())}).catch(r=>console.log(r)).finally(()=>{n.reset(),u.style.display="none"})}
//# sourceMappingURL=commonHelpers.js.map
