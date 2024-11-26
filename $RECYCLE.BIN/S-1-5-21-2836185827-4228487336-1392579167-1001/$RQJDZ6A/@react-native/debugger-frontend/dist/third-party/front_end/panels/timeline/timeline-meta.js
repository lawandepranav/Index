import*as e from"../../core/common/common.js";import*as i from"../../core/i18n/i18n.js";import"../../core/root/root.js";import*as t from"../../ui/legacy/legacy.js";const n={performance:"Performance",showPerformance:"Show Performance",javascriptProfiler:"JavaScript Profiler",showJavascriptProfiler:"Show JavaScript Profiler",record:"Record",stop:"Stop",startProfilingAndReloadPage:"Start profiling and reload page",saveProfile:"Save profile…",loadProfile:"Load profile…",previousFrame:"Previous frame",nextFrame:"Next frame",showRecentTimelineSessions:"Show recent timeline sessions",previousRecording:"Previous recording",nextRecording:"Next recording",hideChromeFrameInLayersView:"Hide `chrome` frame in Layers view",startStopRecording:"Start/stop recording"},o=i.i18n.registerUIStrings("panels/timeline/timeline-meta.ts",n),r=i.i18n.getLazilyComputedLocalizedString.bind(void 0,o);let a,l;async function s(){return a||(a=await import("./timeline.js")),a}async function c(){return l||(l=await import("../profiler/profiler.js")),l}function m(e){return void 0===a?[]:e(a)}t.ViewManager.registerViewExtension({location:"panel",id:"timeline",title:r(n.performance),commandPrompt:r(n.showPerformance),order:50,experiment:"enable-performance-panel",loadView:async()=>(await s()).TimelinePanel.TimelinePanel.instance()}),t.ViewManager.registerViewExtension({location:"panel",id:"js-profiler",title:r(n.javascriptProfiler),commandPrompt:r(n.showJavascriptProfiler),persistence:"permanent",order:65,experiment:"js-profiler-temporarily-enable",loadView:async()=>(await c()).ProfilesPanel.JSProfilerPanel.instance()}),t.ActionRegistration.registerActionExtension({actionId:"timeline.toggle-recording",category:"PERFORMANCE",iconClass:"record-start",toggleable:!0,toggledIconClass:"record-stop",toggleWithRedColor:!0,contextTypes:()=>m((e=>[e.TimelinePanel.TimelinePanel])),loadActionDelegate:async()=>new((await s()).TimelinePanel.ActionDelegate),options:[{value:!0,title:r(n.record)},{value:!1,title:r(n.stop)}],bindings:[{platform:"windows,linux",shortcut:"Ctrl+E"},{platform:"mac",shortcut:"Meta+E"}]}),t.ActionRegistration.registerActionExtension({actionId:"timeline.record-reload",iconClass:"refresh",contextTypes:()=>m((e=>[e.TimelinePanel.TimelinePanel])),category:"PERFORMANCE",title:r(n.startProfilingAndReloadPage),loadActionDelegate:async()=>new((await s()).TimelinePanel.ActionDelegate),bindings:[{platform:"windows,linux",shortcut:"Ctrl+Shift+E"},{platform:"mac",shortcut:"Meta+Shift+E"}]}),t.ActionRegistration.registerActionExtension({category:"PERFORMANCE",actionId:"timeline.save-to-file",contextTypes:()=>m((e=>[e.TimelinePanel.TimelinePanel])),loadActionDelegate:async()=>new((await s()).TimelinePanel.ActionDelegate),title:r(n.saveProfile),bindings:[{platform:"windows,linux",shortcut:"Ctrl+S"},{platform:"mac",shortcut:"Meta+S"}]}),t.ActionRegistration.registerActionExtension({category:"PERFORMANCE",actionId:"timeline.load-from-file",contextTypes:()=>m((e=>[e.TimelinePanel.TimelinePanel])),loadActionDelegate:async()=>new((await s()).TimelinePanel.ActionDelegate),title:r(n.loadProfile),bindings:[{platform:"windows,linux",shortcut:"Ctrl+O"},{platform:"mac",shortcut:"Meta+O"}]}),t.ActionRegistration.registerActionExtension({actionId:"timeline.jump-to-previous-frame",category:"PERFORMANCE",title:r(n.previousFrame),contextTypes:()=>m((e=>[e.TimelinePanel.TimelinePanel])),loadActionDelegate:async()=>new((await s()).TimelinePanel.ActionDelegate),bindings:[{shortcut:"["}]}),t.ActionRegistration.registerActionExtension({actionId:"timeline.jump-to-next-frame",category:"PERFORMANCE",title:r(n.nextFrame),contextTypes:()=>m((e=>[e.TimelinePanel.TimelinePanel])),loadActionDelegate:async()=>new((await s()).TimelinePanel.ActionDelegate),bindings:[{shortcut:"]"}]}),t.ActionRegistration.registerActionExtension({actionId:"timeline.show-history",loadActionDelegate:async()=>new((await s()).TimelinePanel.ActionDelegate),category:"PERFORMANCE",title:r(n.showRecentTimelineSessions),contextTypes:()=>m((e=>[e.TimelinePanel.TimelinePanel])),bindings:[{platform:"windows,linux",shortcut:"Ctrl+H"},{platform:"mac",shortcut:"Meta+Y"}]}),t.ActionRegistration.registerActionExtension({actionId:"timeline.previous-recording",category:"PERFORMANCE",loadActionDelegate:async()=>new((await s()).TimelinePanel.ActionDelegate),title:r(n.previousRecording),contextTypes:()=>m((e=>[e.TimelinePanel.TimelinePanel])),bindings:[{platform:"windows,linux",shortcut:"Alt+Left"},{platform:"mac",shortcut:"Meta+Left"}]}),t.ActionRegistration.registerActionExtension({actionId:"timeline.next-recording",category:"PERFORMANCE",loadActionDelegate:async()=>new((await s()).TimelinePanel.ActionDelegate),title:r(n.nextRecording),contextTypes:()=>m((e=>[e.TimelinePanel.TimelinePanel])),bindings:[{platform:"windows,linux",shortcut:"Alt+Right"},{platform:"mac",shortcut:"Meta+Right"}]}),t.ActionRegistration.registerActionExtension({actionId:"profiler.js-toggle-recording",category:"JAVASCRIPT_PROFILER",title:r(n.startStopRecording),iconClass:"record-start",toggleable:!0,toggledIconClass:"record-stop",toggleWithRedColor:!0,contextTypes(){return e=e=>[e.ProfilesPanel.JSProfilerPanel],void 0===l?[]:e(l);var e},loadActionDelegate:async()=>(await c()).ProfilesPanel.JSProfilerPanel.instance(),bindings:[{platform:"windows,linux",shortcut:"Ctrl+E"},{platform:"mac",shortcut:"Meta+E"}]}),e.Settings.registerSettingExtension({category:"PERFORMANCE",storageType:"Synced",title:r(n.hideChromeFrameInLayersView),settingName:"frame-viewer-hide-chrome-window",settingType:"boolean",defaultValue:!1}),e.Linkifier.registerLinkifier({contextTypes:()=>m((e=>[e.CLSLinkifier.CLSRect])),loadLinkifier:async()=>(await s()).CLSLinkifier.Linkifier.instance()}),t.ContextMenu.registerItem({location:"timelineMenu/open",actionId:"timeline.load-from-file",order:10}),t.ContextMenu.registerItem({location:"timelineMenu/open",actionId:"timeline.save-to-file",order:15});
