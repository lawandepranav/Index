var e=Object.freeze({__proto__:null,DEFAULT:{settings:{},experiments:{timelineV8RuntimeCallStats:!1,timelineShowAllEvents:!1},processing:{eventsPerChunk:15e3,pauseDuration:1}},configToCacheKey:function(e){return[`experiments.timelineShowAllEvents:${e.experiments.timelineShowAllEvents}`,`experiments.timelineV8RuntimeCallStats:${e.experiments.timelineV8RuntimeCallStats}`].join("-")}}),n=Object.freeze({__proto__:null});var t=Object.freeze({__proto__:null,MicroSeconds:function(e){return e},MilliSeconds:function(e){return e},Seconds:function(e){return e}});function r(e){return"b"===e||"e"===e||"n"===e}function a(e){return"X"===e.ph}function i(e){return"I"===e.ph}function c(e){return i(e)||a(e)}function o(e){return"navigationStart"===e.name}function u(e){return"LayoutShift"===e.name}function s(e){return"EventTiming"===e.name}function m(e){return new Set(["b","n","e","T","S","F","p"]).has(e.ph)}function v(e){return"callFrame"in e}function T(e){return"WebSocketCreate"===e.name}function f(e){return"WebSocketSendHandshakeRequest"===e.name}function l(e){return"WebSocketReceiveHandshakeResponse"===e.name}function E(e){return"WebSocketDestroy"===e.name}var d=Object.freeze({__proto__:null,isNestableAsyncPhase:r,isAsyncPhase:function(e){return r(e)||"S"===e||"T"===e||"F"===e||"p"===e},isFlowPhase:function(e){return"s"===e||"t"===e||"f"===e},isTraceEventAuctionWorkletRunningInProcess:function(e){return"AuctionWorkletRunningInProcess"===e.name},isTraceEventAuctionWorkletDoneWithProcess:function(e){return"AuctionWorkletDoneWithProcess"===e.name},isTraceEventScreenshot:function(e){return"Screenshot"===e.name},isTraceEventTracingSessionIdForWorker:function(e){return"TracingSessionIdForWorker"===e.name},isTraceEventScheduleStyleInvalidationTracking:function(e){return"ScheduleStyleInvalidationTracking"===e.name},isTraceEventStyleRecalcInvalidationTracking:function(e){return"StyleRecalcInvalidationTracking"===e.name},isTraceEventStyleInvalidatorInvalidationTracking:function(e){return"StyleInvalidatorInvalidationTracking"===e.name},isTraceEventScheduleStyleRecalculation:function(e){return"ScheduleStyleRecalculation"===e.name},isTraceEventPipelineReporter:function(e){return"PipelineReporter"===e.name},isSyntheticInteractionEvent:function(e){return Boolean("interactionId"in e&&e.args?.data&&"beginEvent"in e.args.data&&"endEvent"in e.args.data)},isSyntheticTraceEntry:function(e){return c(e)||v(e)},isTraceEventDrawFrame:function(e){return"DrawFrame"===e.name&&"I"===e.ph},isLegacyTraceEventDrawFrameBegin:function(e){return"DrawFrame"===e.name&&"b"===e.ph},isTraceEventBeginFrame:function(e){return Boolean("BeginFrame"===e.name&&e.args&&"frameSeqId"in e.args)},isTraceEventDroppedFrame:function(e){return Boolean("DroppedFrame"===e.name&&e.args&&"frameSeqId"in e.args)},isTraceEventRequestMainThreadFrame:function(e){return"RequestMainThreadFrame"===e.name},isTraceEventBeginMainThreadFrame:function(e){return"BeginMainThreadFrame"===e.name},isTraceEventNeedsBeginFrameChanged:function(e){return"NeedsBeginFrameChanged"===e.name},isTraceEventCommit:function(e){return Boolean("Commit"===e.name&&e.args&&"frameSeqId"in e.args)},isTraceEventRasterTask:function(e){return"RasterTask"===e.name},isTraceEventCompositeLayers:function(e){return"CompositeLayers"===e.name},isTraceEventActivateLayerTree:function(e){return"ActivateLayerTree"===e.name},isSyntheticInvalidation:function(e){return"SyntheticInvalidation"===e.name},isTraceEventUpdateLayoutTree:function(e){return"UpdateLayoutTree"===e.name},isTraceEventLayout:function(e){return"Layout"===e.name},isTraceEventInvalidateLayout:function(e){return"InvalidateLayout"===e.name},ProfileID:function(e){return e},CallFrameID:function(e){return e},ProcessID:function(e){return e},ThreadID:function(e){return e},WorkerId:function(e){return e},isTraceEventComplete:a,isTraceEventBegin:function(e){return"B"===e.ph},isTraceEventEnd:function(e){return"E"===e.ph},isTraceEventDispatch:function(e){return"EventDispatch"===e.name},isTraceEventInstant:i,isTraceEventRendererEvent:c,isTraceEventFireIdleCallback:function(e){return"FireIdleCallback"===e.name},isTraceEventUpdateCounters:function(e){return"UpdateCounters"===e.name},isThreadName:function(e){return"thread_name"===e.name},isProcessName:function(e){return"process_name"===e.name},isTraceEventTracingStartedInBrowser:function(e){return"TracingStartedInBrowser"===e.name},isTraceEventFrameCommittedInBrowser:function(e){return"FrameCommittedInBrowser"===e.name},isTraceEventCommitLoad:function(e){return"CommitLoad"===e.name},isTraceEventNavigationStart:o,isTraceEventAnimation:function(e){return"Animation"===e.name},isTraceEventLayoutShift:u,isTraceEventLayoutInvalidationTracking:function(e){return"LayoutInvalidationTracking"===e.name},isTraceEventFirstContentfulPaint:function(e){return"firstContentfulPaint"===e.name},isTraceEventLargestContentfulPaintCandidate:function(e){return"largestContentfulPaint::Candidate"===e.name},isTraceEventLargestImagePaintCandidate:function(e){return"LargestImagePaint::Candidate"===e.name},isTraceEventLargestTextPaintCandidate:function(e){return"LargestTextPaint::Candidate"===e.name},isTraceEventMarkLoad:function(e){return"MarkLoad"===e.name},isTraceEventFirstPaint:function(e){return"firstPaint"===e.name},isTraceEventMarkDOMContent:function(e){return"MarkDOMContent"===e.name},isTraceEventInteractiveTime:function(e){return"InteractiveTime"===e.name},isTraceEventEventTiming:s,isTraceEventEventTimingEnd:function(e){return s(e)&&"e"===e.ph},isTraceEventEventTimingStart:function(e){return s(e)&&"b"===e.ph},isTraceEventGPUTask:function(e){return"GPUTask"===e.name},isTraceEventProfile:function(e){return"Profile"===e.name},isSyntheticCpuProfile:function(e){return"CpuProfile"===e.name},isTraceEventProfileChunk:function(e){return"ProfileChunk"===e.name},isTraceEventResourceChangePriority:function(e){return"ResourceChangePriority"===e.name},isTraceEventResourceSendRequest:function(e){return"ResourceSendRequest"===e.name},isTraceEventResourceReceiveResponse:function(e){return"ResourceReceiveResponse"===e.name},isTraceEventResourceMarkAsCached:function(e){return"ResourceMarkAsCached"===e.name},isTraceEventResourceFinish:function(e){return"ResourceFinish"===e.name},isTraceEventResourceWillSendRequest:function(e){return"ResourceWillSendRequest"===e.name},isTraceEventResourceReceivedData:function(e){return"ResourceReceivedData"===e.name},isSyntheticNetworkRequestDetailsEvent:function(e){return"SyntheticNetworkRequest"===e.name},isTraceEventPrePaint:function(e){return"PrePaint"===e.name},isTraceEventNavigationStartWithURL:function(e){return Boolean(o(e)&&e.args.data&&""!==e.args.data.documentLoaderURL)},isTraceEventMainFrameViewport:function(e){return"PaintTimingVisualizer::Viewport"===e.name},isSyntheticUserTiming:function(e){if("blink.user_timing"!==e.cat)return!1;const n=e.args?.data;return!!n&&("beginEvent"in n&&"endEvent"in n)},isSyntheticConsoleTiming:function(e){if("blink.console"!==e.cat)return!1;const n=e.args?.data;return!!n&&("beginEvent"in n&&"endEvent"in n)},isTraceEventPerformanceMeasure:function(e){return"blink.user_timing"===e.cat&&m(e)},isTraceEventPerformanceMark:function(e){return"blink.user_timing"===e.cat&&("R"===e.ph||"I"===e.ph)},isTraceEventConsoleTime:function(e){return"blink.console"===e.cat&&m(e)},isTraceEventTimeStamp:function(e){return"I"===e.ph&&"TimeStamp"===e.name},isTraceEventParseHTML:function(e){return"ParseHTML"===e.name},isTraceEventAsyncPhase:m,isSyntheticLayoutShift:function(e){return!(!u(e)||!e.args.data)&&"rawEvent"in e.args.data},isProfileCall:v,isTraceEventPaint:function(e){return"Paint"===e.name},isTraceEventSetLayerId:function(e){return"SetLayerTreeId"===e.name},isTraceEventUpdateLayer:function(e){return"UpdateLayer"===e.name},isTraceEventDisplayListItemListSnapshot:function(e){return"cc::DisplayItemList"===e.name},isTraceEventLayerTreeHostImplSnapshot:function(e){return"cc::LayerTreeHostImpl"===e.name},isTraceEventFireAnimationFrame:function(e){return"FireAnimationFrame"===e.name},isTraceEventRequestAnimationFrame:function(e){return"RequestAnimationFrame"===e.name},isTraceEventTimerInstall:function(e){return"TimerInstall"===e.name},isTraceEventTimerFire:function(e){return"TimerFire"===e.name},isTraceEventRequestIdleCallback:function(e){return"RequestIdleCallback"===e.name},isTraceEventWebSocketCreate:T,isTraceEventWebSocketSendHandshakeRequest:f,isTraceEventWebSocketReceiveHandshakeResponse:l,isTraceEventWebSocketDestroy:E,isWebSocketTraceEvent:function(e){return T(e)||E(e)||l(e)||f(e)},isTraceEventV8Compile:function(e){return"v8.compile"===e.name},isJSInvocationEvent:function(e){switch(e.name){case"RunMicrotasks":case"FunctionCall":case"EvaluateScript":case"v8.evaluateModule":case"EventDispatch":case"V8.Execute":return!0}return!(!e.name.startsWith("v8")&&!e.name.startsWith("V8"))}});export{e as Configuration,n as File,t as Timing,d as TraceEvents};