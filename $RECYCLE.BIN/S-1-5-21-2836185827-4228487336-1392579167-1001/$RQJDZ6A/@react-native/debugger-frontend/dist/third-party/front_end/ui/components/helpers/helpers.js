import*as e from"../../legacy/theme_support/theme_support.js";import*as t from"../../lit-html/lit-html.js";import*as r from"../render_coordinator/render_coordinator.js";var o=Object.freeze({__proto__:null,setup:async function(){const t={get:()=>"default"};e.ThemeSupport.instance({forceNew:!0,setting:t})}});class n extends t.Directive.Directive{constructor(e){if(super(e),e.type!==t.Directive.PartType.ATTRIBUTE)throw new Error("Node rendered callback directive must be used as an attribute.")}update(e,[t]){t(e.element)}render(e){}}const a=t.Directive.directive(n);var d=Object.freeze({__proto__:null,nodeRenderedCallback:a});var c=Object.freeze({__proto__:null,getRootNode:function(e){const t=e.getRootNode();if(!(t instanceof Document||t instanceof ShadowRoot))throw new Error(`Expected root of widget to be a document or shadowRoot, but was "${t.nodeName}"`);return t}});const s=r.RenderCoordinator.RenderCoordinator.instance(),i=new WeakSet,l=new WeakSet,u=new WeakMap,p=new WeakMap;var f=Object.freeze({__proto__:null,scheduleRender:async function e(t,r){if(l.has(t))return void u.set(t,r);if(i.has(t))return;i.add(t);let o=p.get(r);if(o||(o=async()=>{i.delete(t),l.add(t);try{await r.call(t)}catch(e){throw console.error(`ScheduledRender: rendering ${t.nodeName.toLowerCase()}:`),console.error(e),e}finally{l.delete(t)}},p.set(r,o)),await s.write(o),u.has(t)){const r=u.get(t);if(u.delete(t),!r)return;e(t,r)}},isScheduledRender:function(e){return l.has(e)}});export{o as ComponentServerSetup,d as Directives,c as GetRootNode,f as ScheduledRender};
