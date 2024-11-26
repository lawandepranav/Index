import*as t from"../../lit-html/lit-html.js";var e={cssContent:':host{flex-grow:0;flex-shrink:0;display:inline-block;width:20px;height:20px;color:var(--icon-default);vertical-align:sub;position:relative}:host([hidden]){display:none}:host([name="triangle-up"]),\n:host([name="triangle-down"]),\n:host([name="triangle-left"]),\n:host([name="triangle-right"]){width:14px;height:14px;vertical-align:baseline}span{display:block;width:100%;height:100%;background-color:currentColor;mask:var(--icon-url) center /contain no-repeat;--icon-url:url("data:image/svg+xml,%3Csvg width=\'1\' height=\'1\' fill=\'%23000\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3C/svg%3E ")}@media (forced-colors: active){span{forced-color-adjust:none}}'};class i extends HTMLElement{static litTagName=t.literal`devtools-icon`;static observedAttributes=["name"];#t;#e;constructor(){super(),this.role="presentation",this.#e=document.createElement("span"),this.#t=this.attachShadow({mode:"open"}),this.#t.appendChild(this.#e);const t=document.createElement("style");t.textContent=e.cssContent,this.#t.appendChild(t)}get data(){return{color:this.style.color,width:this.style.width,height:this.style.height,iconName:this.name??""}}set data(t){const{color:e,width:i="20px",height:n="20px"}=t;if(this.style.color=e,this.style.width=i,this.style.height=n,"iconName"in t&&t.iconName)this.name=t.iconName;else{if(!("iconPath"in t)||!t.iconPath)throw new Error("Misconfigured `iconName` or `iconPath`.");this.name=t.iconPath}}get name(){return this.getAttribute("name")}set name(t){null===t?this.removeAttribute("name"):this.setAttribute("name",t)}attributeChangedCallback(t,e,i){if(e!==i&&"name"===t)if(null===i)this.#e.style.removeProperty("--icon-url");else{const t=URL.canParse(i)?`url(${i})`:`var(--image-file-${i})`;this.#e.style.setProperty("--icon-url",t)}}}customElements.define("devtools-icon",i);var n=Object.freeze({__proto__:null,Icon:i,create:(t,e)=>{const n=new i;return n.name=t,void 0!==e&&(n.className=e),n}});const o=new CSSStyleSheet;o.replaceSync(":host{white-space:normal;display:inline-block}.icon-button{border:none;margin-right:2px;margin-top:4px;display:inline-flex;align-items:center;color:inherit;font-size:inherit;font-family:inherit;background-color:inherit}.icon-button.with-click-handler{padding:0 4px}.icon-button.with-click-handler:hover{background-color:var(--sys-color-state-hover-on-subtle)}.icon-button:focus-visible{background-color:var(--sys-color-state-hover-on-subtle)}.icon-button-title{margin-left:0.5ex}.compact .icon-button-title{display:none}.status-icon{margin-left:1ex}.status-icon:first-child{margin-left:inherit}@media (forced-colors: active){.icon-button{forced-color-adjust:none;background-color:ButtonFace}.icon-button:focus-visible,\n  .icon-button.with-click-handler:hover{background-color:Highlight;color:HighlightText}}\n/*# sourceURL=iconButton.css */\n");class a extends HTMLElement{static litTagName=t.literal`icon-button`;#i=this.attachShadow({mode:"open"});#n=void 0;#o=[];#a=!1;#s="";#c="";#l;set data(t){this.#o=t.groups.map((t=>({...t}))),this.#n=t.clickHandler,this.#c=t.trailingText??"",this.#s=t.leadingText??"",this.#l=t.accessibleName,this.#a=Boolean(t.compact),this.#r()}get data(){return{groups:this.#o.map((t=>({...t}))),accessibleName:this.#l,clickHandler:this.#n,leadingText:this.#s,trailingText:this.#c,compact:this.#a}}connectedCallback(){this.#i.adoptedStyleSheets=[o]}#h(t){this.#n&&(t.preventDefault(),this.#n())}#r(){const e=t.Directives.classMap({"icon-button":!0,"with-click-handler":Boolean(this.#n),compact:this.#a}),n=this.#o.filter((t=>void 0!==t.text)).filter(((t,e)=>!this.#a||0===e));t.render(t.html`
      <button class=${e} @click=${this.#h} aria-label=${t.Directives.ifDefined(this.#l)}>
      ${!this.#a&&this.#s?t.html`<span class="icon-button-title">${this.#s}</span>`:t.nothing}
      ${n.map((e=>t.html`
      <${i.litTagName} class="status-icon"
      .data=${{iconName:e.iconName,color:e.iconColor,width:e.iconWidth||"1.5ex",height:e.iconHeight||"1.5ex"}}>
      </${i.litTagName}>
      ${this.#a?t.html`<!-- Force line-height for this element --><span>&#8203;</span>`:t.nothing}
      <span class="icon-button-title">${e.text}</span>
      </button>`))}
      ${!this.#a&&this.#c?t.html`<span class="icon-button-title">${this.#c}</span>`:t.nothing}
    `,this.#i,{host:this})}}customElements.define("icon-button",a);var s=Object.freeze({__proto__:null,IconButton:a});export{n as Icon,s as IconButton};
