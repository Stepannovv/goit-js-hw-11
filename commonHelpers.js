import{S as p,i as n}from"./assets/vendor-8c59ed88.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();function m(i){const r=`https://pixabay.com/api/?key=44808293-64f6d68c9109520376c76cf92&q=${i}&image_type=photo&orientation=horizontal&safesearch=true`;return fetch(r).then(o=>{if(!o.ok)throw new Error(o.statusText);return o.json()})}function d(i){return i.map(({webformatURL:s,largeImageURL:r,tags:o,likes:e,views:t,comments:l,downloads:f})=>`
      <li class="gallery-item">
      <a class="gallery-link" href="${r}">
      <img class="gallery-img" src="${s}" alt="${o}" />
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
    </li>`).join("")}const g="/vanilla-app-template/assets/error-9bc150ed.svg",y="/vanilla-app-template/assets/caution-4e670f25.svg",a=document.querySelector(".form"),c=document.querySelector(".gallery"),u=document.querySelector(".loader-wrap"),h=new p(".gallery a",{captionsData:"alt",captionDelay:250});a.addEventListener("submit",S);function S(i){i.preventDefault(),c.innerHTML="";const s=a.elements.input.value.toLowerCase().trim();if(s===""){n.warning({title:"Caution",titleColor:"white",titleSize:"16px",message:"Please, fill out the field!",messageColor:"white",messageSize:"16px",position:"topRight",backgroundColor:"#ffa000",iconUrl:y,close:!1,closeOnClick:!0});return}u.style.display="flex",m(s).then(r=>{r.hits.length===0?n.error({title:"Error",titleColor:"white",titleSize:"16px",message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"white",messageSize:"16px",position:"bottomRight",backgroundColor:"#ef4040",iconUrl:g,close:!1,closeOnClick:!0}):(c.innerHTML=d(r.hits),h.refresh())}).catch(r=>console.log(r)).finally(()=>{a.reset(),u.style.display="none"})}
//# sourceMappingURL=commonHelpers.js.map
