import*as e from"../../core/i18n/i18n.js";import*as i from"../../ui/legacy/legacy.js";const r={cssOverview:"CSS overview",showCssOverview:"Show CSS overview"},s=e.i18n.registerUIStrings("panels/css_overview/css_overview-meta.ts",r),o=e.i18n.getLazilyComputedLocalizedString.bind(void 0,s);let v;i.ViewManager.registerViewExtension({location:"panel",id:"cssoverview",commandPrompt:o(r.showCssOverview),title:o(r.cssOverview),order:95,persistence:"closeable",async loadView(){const e=await async function(){return v||(v=await import("./css_overview.js")),v}();return new e.CSSOverviewPanel.CSSOverviewPanel(new e.CSSOverviewController.OverviewController)},isPreviewFeature:!0});
