function e(e){return e&&e.__esModule?e.default:e}var t,r,n,i=globalThis,a={},o={},s=i.parcelRequire3a11;null==s&&((s=function(e){if(e in a)return a[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return a[e]=r,t.call(r.exports,r,r.exports),r.exports}var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){o[e]=t},i.parcelRequire3a11=s),(0,s.register)("27Lyk",function(e,t){Object.defineProperty(e.exports,"register",{get:()=>r,set:e=>r=e,enumerable:!0,configurable:!0});var r,n=new Map;r=function(e,t){for(var r=0;r<t.length-1;r+=2)n.set(t[r],{baseUrl:e,path:t[r+1]})}}),s("27Lyk").register(new URL("",import.meta.url).toString(),JSON.parse('["f9fpV","index.e44eca9c.js","eyyUD","icons.c14567a0.svg"]'));var c=function(e){var t,r=Object.prototype,n=r.hasOwnProperty,i=Object.defineProperty||function(e,t,r){e[t]=r.value},a="function"==typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",s=a.asyncIterator||"@@asyncIterator",c=a.toStringTag||"@@toStringTag";function l(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(e){l=function(e,t,r){return e[t]=r}}function u(e,r,n,a){var o,s,c=Object.create((r&&r.prototype instanceof m?r:m).prototype);return i(c,"_invoke",{value:(o=new F(a||[]),s=h,function(r,i){if(s===p)throw Error("Generator is already running");if(s===f){if("throw"===r)throw i;return{value:t,done:!0}}for(o.method=r,o.arg=i;;){var a=o.delegate;if(a){var c=function e(r,n){var i=n.method,a=r.iterator[i];if(a===t)return n.delegate=null,"throw"===i&&r.iterator.return&&(n.method="return",n.arg=t,e(r,n),"throw"===n.method)||"return"!==i&&(n.method="throw",n.arg=TypeError("The iterator does not provide a '"+i+"' method")),g;var o=d(a,r.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,g;var s=o.arg;return s?s.done?(n[r.resultName]=s.value,n.next=r.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,g):s:(n.method="throw",n.arg=TypeError("iterator result is not an object"),n.delegate=null,g)}(a,o);if(c){if(c===g)continue;return c}}if("next"===o.method)o.sent=o._sent=o.arg;else if("throw"===o.method){if(s===h)throw s=f,o.arg;o.dispatchException(o.arg)}else"return"===o.method&&o.abrupt("return",o.arg);s=p;var l=d(e,n,o);if("normal"===l.type){if(s=o.done?f:"suspendedYield",l.arg===g)continue;return{value:l.arg,done:o.done}}"throw"===l.type&&(s=f,o.method="throw",o.arg=l.arg)}})}),c}function d(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=u;var h="suspendedStart",p="executing",f="completed",g={};function m(){}function v(){}function _(){}var y={};l(y,o,function(){return this});var b=Object.getPrototypeOf,w=b&&b(b(S([])));w&&w!==r&&n.call(w,o)&&(y=w);var k=_.prototype=m.prototype=Object.create(y);function E(e){["next","throw","return"].forEach(function(t){l(e,t,function(e){return this._invoke(t,e)})})}function $(e,t){var r;i(this,"_invoke",{value:function(i,a){function o(){return new t(function(r,o){!function r(i,a,o,s){var c=d(e[i],e,a);if("throw"===c.type)s(c.arg);else{var l=c.arg,u=l.value;return u&&"object"==typeof u&&n.call(u,"__await")?t.resolve(u.__await).then(function(e){r("next",e,o,s)},function(e){r("throw",e,o,s)}):t.resolve(u).then(function(e){l.value=e,o(l)},function(e){return r("throw",e,o,s)})}}(i,a,r,o)})}return r=r?r.then(o,o):o()}})}function L(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function x(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function F(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(L,this),this.reset(!0)}function S(e){if(null!=e){var r=e[o];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var i=-1,a=function r(){for(;++i<e.length;)if(n.call(e,i))return r.value=e[i],r.done=!1,r;return r.value=t,r.done=!0,r};return a.next=a}}throw TypeError(typeof e+" is not iterable")}return v.prototype=_,i(k,"constructor",{value:_,configurable:!0}),i(_,"constructor",{value:v,configurable:!0}),v.displayName=l(_,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===v||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,_):(e.__proto__=_,l(e,c,"GeneratorFunction")),e.prototype=Object.create(k),e},e.awrap=function(e){return{__await:e}},E($.prototype),l($.prototype,s,function(){return this}),e.AsyncIterator=$,e.async=function(t,r,n,i,a){void 0===a&&(a=Promise);var o=new $(u(t,r,n,i),a);return e.isGeneratorFunction(r)?o:o.next().then(function(e){return e.done?e.value:o.next()})},E(k),l(k,c,"Generator"),l(k,o,function(){return this}),l(k,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},e.values=S,F.prototype={constructor:F,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(x),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function i(n,i){return s.type="throw",s.arg=e,r.next=n,i&&(r.method="next",r.arg=t),!!i}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],s=o.completion;if("root"===o.tryLoc)return i("end");if(o.tryLoc<=this.prev){var c=n.call(o,"catchLoc"),l=n.call(o,"finallyLoc");if(c&&l){if(this.prev<o.catchLoc)return i(o.catchLoc,!0);if(this.prev<o.finallyLoc)return i(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return i(o.catchLoc,!0)}else if(l){if(this.prev<o.finallyLoc)return i(o.finallyLoc)}else throw Error("try statement without catch or finally")}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.tryLoc<=this.prev&&n.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var a=i;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var o=a?a.completion:{};return(o.type=e,o.arg=t,a)?(this.method="next",this.next=a.finallyLoc,g):this.complete(o)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),g},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),x(r),g}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var i=n.arg;x(r)}return i}}throw Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:S(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),g}},e}({});try{regeneratorRuntime=c}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=c:Function("r","regeneratorRuntime = r")(c)}const l="https://forkify-api.herokuapp.com/api/v2/recipes/",u="34f3afe2-efe3-4504-aa3f-2880f5fb1b9e",d=async function(e,t){try{let r=t?fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}):fetch(e),n=await Promise.race([r,new Promise(function(e,t){setTimeout(function(){t(Error("Request took too long! Timeout after 10 second"))},1e4)})]),i=await n.json();if(!n.ok)throw Error(`${i.message}`);return i}catch(e){throw e}},h={recipe:{},search:{query:"",page:1,results:[],resultsPerPage:13},bookmarks:[]},p=function(e){let{recipe:t}=e.data;return h.recipe={id:t.id,title:t.title,publisher:t.publisher,sourceUrl:t.source_url,image:t.image_url,servings:t.servings,cookingTime:t.cooking_time,ingredients:t.ingredients,...t.key&&{key:t.key}}},f=async function(e){try{let t=await d(`${l}${e}?key=${u}`);h.recipe=p(t),h.bookmarks.some(t=>t.id===e)?h.recipe.bookmarked=!0:h.recipe.bookmarked=!1}catch(e){throw e}},g=async function(e){try{h.search.query=e;let t=await d(`${l}?search=${e}&key=${u}`);h.search.results=t.data.recipes.map(e=>({id:e.id,title:e.title,publisher:e.publisher,image:e.image_url,...e.key&&{key:e.key}})),h.search.page=1}catch(e){throw e}},m=function(e=h.search.page){h.search.page=e;let t=(e-1)*h.search.resultsPerPage,r=e*h.search.resultsPerPage;return h.search.results.slice(t,r)},v=function(e){h.recipe.ingredients.forEach(t=>{t.quantity=t.quantity*e/h.recipe.servings}),h.recipe.servings=e},_=function(){localStorage.setItem("bookmarks",JSON.stringify(h.bookmarks))},y=function(e){h.bookmarks.push(e),e.id===h.recipe.id&&(h.recipe.bookmarked=!0),_()},b=function(e){let t=h.bookmarks.findIndex(t=>t.id===e);h.bookmarks.splice(t,1),e===h.recipe.id&&(h.recipe.bookmarked=!1),_()};!function(){let e=localStorage.getItem("bookmarks");e&&(h.bookmarks=JSON.parse(e))}();const w=async function(e){try{let t=Object.entries(e).filter(e=>e[0].startsWith("ingredient")&&""!==e[1]).map(e=>{let t=e[1].replaceAll(" ","").split(",");if(3!==t.length)throw Error("Wrong ingredient format! Please use correct format");let[r,n,i]=t;return{quantity:r?+r:null,unit:n,description:i}}),r={title:e.title,source_url:e.sourceUrl,image_url:e.image,publisher:e.publisher,cooking_time:+e.cookingTime,servings:+e.servings,ingredients:t};console.log(r);let n=await d(`${l}?key=${u}`,r);h.recipe=p(n),y(h.recipe)}catch(e){throw e}};var k={};k=new URL("icons.c14567a0.svg",import.meta.url).toString();class E{_data;render(e){if(!e||Array.isArray(e)&&0===e.length)return this.renderError();this._data=e;let t=this._generateMarkup();this._clear(),this._parentEl.insertAdjacentHTML("afterbegin",t)}update(e){this._data=e;let t=this._generateMarkup(),r=Array.from(document.createRange().createContextualFragment(t).querySelectorAll("*")),n=Array.from(this._parentEl.querySelectorAll("*"));r.forEach((e,t)=>{let r=n[t];e.isEqualNode(r)||e.firstChild?.nodeValue.trim()===""||(r.textContent=e.textContent),e.isEqualNode(r)||Array.from(e.attributes).forEach(e=>r.setAttribute(e.name,e.value))})}_clear(){this._parentEl.innerHTML=""}renderError(t=this._errorMessage){let r=`<div class="error">
        <div>
          <svg>
            <use href="${e(k)}#icon-alert-triangle"></use>
          </svg>
        </div>
        <p>${t}</p>
    </div>`;this._clear(),this._parentEl.insertAdjacentHTML("afterbegin",r)}renderMessage(t=this._message){let r=`
      <div class="message">
        <div>
          <svg>
            <use href="${e(k)}#icon-smile"></use>
          </svg>
        </div>
        <p>${t}</p>
      </div>`;this._clear(),this._parentEl.insertAdjacentHTML("afterbegin",r)}renderSpinnner(){let t=`
    <div class="spinner">
      <svg>
        <use href="${e(k)}#icon-loader"></use>
      </svg>
    </div>`;this._clear(),this._parentEl.insertAdjacentHTML("afterbegin",t)}}(Fraction=function(e,t){if(void 0!==e&&t)"number"==typeof e&&"number"==typeof t?(this.numerator=e,this.denominator=t):"string"==typeof e&&"string"==typeof t&&(this.numerator=parseInt(e),this.denominator=parseInt(t));else if(void 0===t){if("number"==typeof(num=e))this.numerator=num,this.denominator=1;else if("string"==typeof num){var r,n,i=num.split(" ");if(i[0]&&(r=i[0]),i[1]&&(n=i[1]),r%1==0&&n&&n.match("/"))return new Fraction(r).add(new Fraction(n));if(!r||n)return;if("string"==typeof r&&r.match("/")){var a=r.split("/");this.numerator=a[0],this.denominator=a[1]}else{if("string"==typeof r&&r.match("."))return new Fraction(parseFloat(r));this.numerator=parseInt(r),this.denominator=1}}}this.normalize()}).prototype.clone=function(){return new Fraction(this.numerator,this.denominator)},Fraction.prototype.toString=function(){if("NaN"===this.denominator)return"NaN";var e=this.numerator/this.denominator>0?Math.floor(this.numerator/this.denominator):Math.ceil(this.numerator/this.denominator),t=this.numerator%this.denominator,r=this.denominator,n=[];return 0!=e&&n.push(e),0!=t&&n.push((0===e?t:Math.abs(t))+"/"+r),n.length>0?n.join(" "):0},Fraction.prototype.rescale=function(e){return this.numerator*=e,this.denominator*=e,this},Fraction.prototype.add=function(e){var t=this.clone();return e instanceof Fraction?e=e.clone():e=new Fraction(e),td=t.denominator,t.rescale(e.denominator),e.rescale(td),t.numerator+=e.numerator,t.normalize()},Fraction.prototype.subtract=function(e){var t=this.clone();return e instanceof Fraction?e=e.clone():e=new Fraction(e),td=t.denominator,t.rescale(e.denominator),e.rescale(td),t.numerator-=e.numerator,t.normalize()},Fraction.prototype.multiply=function(e){var t=this.clone();if(e instanceof Fraction)t.numerator*=e.numerator,t.denominator*=e.denominator;else{if("number"!=typeof e)return t.multiply(new Fraction(e));t.numerator*=e}return t.normalize()},Fraction.prototype.divide=function(e){var t=this.clone();if(e instanceof Fraction)t.numerator*=e.denominator,t.denominator*=e.numerator;else{if("number"!=typeof e)return t.divide(new Fraction(e));t.denominator*=e}return t.normalize()},Fraction.prototype.equals=function(e){e instanceof Fraction||(e=new Fraction(e));var t=this.clone().normalize(),e=e.clone().normalize();return t.numerator===e.numerator&&t.denominator===e.denominator},Fraction.prototype.normalize=(t=function(e){return"number"==typeof e&&(e>0&&e%1>0&&e%1<1||e<0&&e%-1<0&&e%-1>-1)},r=function(e,t){if(!t)return Math.round(e);var r=Math.pow(10,t);return Math.round(e*r)/r},function(){if(t(this.denominator)){var e=r(this.denominator,9),n=Math.pow(10,e.toString().split(".")[1].length);this.denominator=Math.round(this.denominator*n),this.numerator*=n}if(t(this.numerator)){var e=r(this.numerator,9),n=Math.pow(10,e.toString().split(".")[1].length);this.numerator=Math.round(this.numerator*n),this.denominator*=n}var i=Fraction.gcf(this.numerator,this.denominator);return this.numerator/=i,this.denominator/=i,(this.numerator<0&&this.denominator<0||this.numerator>0&&this.denominator<0)&&(this.numerator*=-1,this.denominator*=-1),this}),Fraction.gcf=function(e,t){var r=[],n=Fraction.primeFactors(e),i=Fraction.primeFactors(t);return(n.forEach(function(e){var t=i.indexOf(e);t>=0&&(r.push(e),i.splice(t,1))}),0===r.length)?1:function(){var e,t=r[0];for(e=1;e<r.length;e++)t*=r[e];return t}()},Fraction.primeFactors=function(e){for(var t=Math.abs(e),r=[],n=2;n*n<=t;)t%n==0?(r.push(n),t/=n):n++;return 1!=t&&r.push(t),r},n=Fraction;class $ extends E{_parentEl=document.querySelector(".recipe");_data;_errorMessage="Could not find the recipe. Please try another one!";_message="";addHandleRender(e){["hashchange","load"].forEach(t=>window.addEventListener(t,e))}addHandlerUpdateServings(e){this._parentEl.addEventListener("click",function(t){let r=t.target.closest(".btn--update-servings");if(!r)return;let n=+r.dataset.updateTo;n>0&&e(n)})}addHandlerAddBookmark(e){this._parentEl.addEventListener("click",function(t){t.target.closest(".btn--bookmark")&&e()})}_generateMarkup(){return`<figure class="recipe__fig">
    <img src="${this._data.image}" alt="${this._data.title}" class="recipe__img" />
    <h1 class="recipe__title">
      <span>${this._data.title}</span>
    </h1>
  </figure>

  <div class="recipe__details">
    <div class="recipe__info">
      <svg class="recipe__info-icon">
        <use href="${e(k)}#icon-clock"></use>
      </svg>
      <span class="recipe__info-data recipe__info-data--minutes">${this._data.cookingTime}</span>
      <span class="recipe__info-text">minutes</span>
    </div>
    <div class="recipe__info">
      <svg class="recipe__info-icon">
        <use href="${e(k)}#icon-users"></use>
      </svg>
      <span class="recipe__info-data recipe__info-data--people">${this._data.servings}</span>
      <span class="recipe__info-text">servings</span>

      <div class="recipe__info-buttons">
        <button class="btn--tiny btn--update-servings" data-update-to="${this._data.servings-1}">
          <svg>
            <use href="${e(k)}#icon-minus-circle"></use>
          </svg>
        </button>
        <button class="btn--tiny btn--update-servings" data-update-to="${this._data.servings+1}">
          <svg>
            <use href="${e(k)}#icon-plus-circle"></use>
          </svg>
        </button>
      </div>
    </div>

    <div class="recipe__user-generated ${this._data.key?"":"hidden"}">
     <svg>
        <use href="${e(k)}#icon-user"></use>
      </svg>
    </div>
    
    <button class="btn--round btn--bookmark">
      <svg class="">
        <use href="${e(k)}#icon-bookmark${this._data.bookmarked?"-fill":""}"></use>
      </svg>
    </button>
  </div>

  <div class="recipe__ingredients">
    <h2 class="heading--2">Recipe ingredients</h2>
    <ul class="recipe__ingredient-list">
      ${this._data.ingredients.map(t=>`  <li class="recipe__ingredient">
        <svg class="recipe__icon">
          <use href="${e(k)}#icon-check"></use>
        </svg>
        <div class="recipe__quantity">${t.quantity?new n(t.quantity):""}</div>
        <div class="recipe__description">
          <span class="recipe__unit">${t.unit}</span>
          ${t.description}
        </div>
      </li>
        `).join("")}
     
  </div>

  <div class="recipe__directions">
    <h2 class="heading--2">How to cook it</h2>
    <p class="recipe__directions-text">
      This recipe was carefully designed and tested by
      <span class="recipe__publisher">${this._data.publisher}</span>. Please check out
      directions at their website.
    </p>
    <a
      class="btn--small recipe__btn"
      href="${this._data.sourceUrl}"
      target="_blank"
    >
      <span>Directions</span>
      <svg class="search__icon">
        <use href="${e(k)}#icon-arrow-right"></use>
      </svg>
    </a>
  </div>`}}var L=new $;class x{#e=document.querySelector(".search");getQuery(){let e=this.#e.querySelector(".search__field").value;return this.#t(),e}#t(){this.#e.querySelector(".search__field").value=""}addHandlerSearch(e){this.#e.addEventListener("submit",function(t){t.preventDefault(),e()})}}var F=new x;class S extends E{_parentEl=document.querySelector(".results");_errorMessage="No recipes found for your query! Please try again :)";_message="";_generateMarkup(){return this._data.map(this._generateMarkupPreview).join("")}_generateMarkupPreview(t){let r=window.location.hash.slice(1);return`<li class="preview">
    <a class="preview__link ${t.id===r?"preview__link--active":""}" href="#${t.id}">
      <figure class="preview__fig">
        <img src="${t.image}" alt="${t.title}" />
      </figure>
      <div class="preview__data">
        <h4 class="preview__title">${t.title}</h4>
        <p class="preview__publisher">${t.publisher}</p>
        <div class="recipe__user-generated ${t.key?"":"hidden"}">
        <svg>
           <use href="${e(k)}#icon-user"></use>
         </svg>
       </div>
      </div>
    </a>
  </li>
`}}var M=new S;class H extends E{_parentEl=document.querySelector(".pagination");addHandlerClick(e){this._parentEl.addEventListener("click",function(t){let r=t.target.closest(".btn--inline");r&&e(+r.dataset.goto)})}_generateMarkup(){let t=this._data.page,r=Math.ceil(this._data.results.length/this._data.resultsPerPage);return 1===t&&r>1?`
        <button data-goto="${t+1}" class="btn--inline pagination__btn--next">
          <span>Page ${t+1}</span>
          <svg class="search__icon">
            <use href="${e(k)}#icon-arrow-right"></use>
          </svg>
        </button>
    `:t===r&&r>1?`
        <button data-goto="${t-1}" class="btn--inline pagination__btn--prev">
          <svg class="search__icon">
            <use href="${e(k)}#icon-arrow-left"></use>
          </svg>
          <span>Page ${t-1}</span>
        </button>`:t<r?`
        <button data-goto="${t-1}" class="btn--inline pagination__btn--prev">
          <svg class="search__icon">
            <use href="${e(k)}#icon-arrow-left"></use>
          </svg>
          <span>Page ${t-1}</span>
        </button>
          <button data-goto="${t+1}" class="btn--inline pagination__btn--next">
          <span>Page ${t+1}</span>
          <svg class="search__icon">
            <use href="${e(k)}#icon-arrow-right"></use>
          </svg>
        </button>
    `:""}}var P=new H;class q extends E{_parentEl=document.querySelector(".bookmarks__list");_errorMessage="No bookmarks yet. Find a nice recipe to bookmark!";_message="";_generateMarkup(){return this._data.map(this._generateMarkupPreview).join("")}addHandlerRender(e){window.addEventListener("load",e)}_generateMarkupPreview(e){let t=window.location.hash.slice(1);return`<li class="preview">
    <a class="preview__link ${e.id===t?"preview__link--active":""}" href="#${e.id}">
      <figure class="preview__fig">
        <img src="${e.image}" alt="${e.title}" />
      </figure>
      <div class="preview__data">
        <h4 class="preview__title">${e.title}</h4>
        <p class="preview__publisher">${e.publisher}</p>
      </div>
    </a>
  </li>
`}}var O=new q;class j extends E{_parentEl=document.querySelector(".upload");_message="Recipe was successfully uploaded :)";_window=document.querySelector(".add-recipe-window");_overlay=document.querySelector(".overlay");_btnOpen=document.querySelector(".nav__btn--add-recipe");_btnClose=document.querySelector(".btn--close-modal");constructor(){super(),console.log(this._btnOpen),this._addHandlerShowWindow(),this._addHandlerHideWindow()}toggleWindow(){this._overlay.classList.toggle("hidden"),this._window.classList.toggle("hidden")}_addHandlerShowWindow(){this._btnOpen.addEventListener("click",this.toggleWindow.bind(this))}_addHandlerHideWindow(){this._btnClose.addEventListener("click",this.toggleWindow.bind(this)),this._overlay.addEventListener("click",this.toggleWindow.bind(this))}addHandlerUpload(e){this._parentEl.addEventListener("submit",function(t){t.preventDefault(),e(Object.fromEntries([...new FormData(this)]))})}_generateMarkup(){}}var T=new j;const N=async function(){try{let e=window.location.hash.slice(1);if(!e)return;L.renderSpinnner(),M.update(m()),O.update(h.bookmarks),await f(e),L.render(h.recipe)}catch(e){L.renderError()}},A=async function(){try{M.renderSpinnner();let e=F.getQuery();if(!e)return;await g(e),M.render(m()),P.render(h.search)}catch(e){console.log(e)}},R=async function(e){try{T.renderSpinnner(),await w(e),console.log(h.recipe),L.render(h.recipe),T.renderMessage(),O.render(h.bookmarks),window.history.pushState(null,"",`#${h.recipe.id}`),setTimeout(function(){T.toggleWindow()},2500)}catch(e){console.log(e),T.renderError(e.message)}};O.addHandlerRender(function(){O.render(h.bookmarks)}),L.addHandleRender(N),L.addHandlerUpdateServings(function(e){v(e),L.update(h.recipe)}),L.addHandlerAddBookmark(function(){h.recipe.bookmarked?h.recipe.bookmarked&&b(h.recipe.id):y(h.recipe),L.update(h.recipe),O.render(h.bookmarks)}),F.addHandlerSearch(A),P.addHandlerClick(function(e){M.render(m(e)),P.render(h.search)}),T.addHandlerUpload(R);
//# sourceMappingURL=index.e44eca9c.js.map
