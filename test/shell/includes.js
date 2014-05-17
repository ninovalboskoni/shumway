<!-- Autogenerated references: base=../../ -->
console.time("Load");

load("../../lib/jpgjs/jpg.js");

load("../../src/avm2/global.js");
load("../../src/utilities.js");
load("../../src/options.js");
load("../../src/settings.js");

load("../../src/swf/Timeline.js");

load("../../src/gfx/filters/filters.js");
load("../../src/gfx/filters/filters_cxform.js");
load("../../src/gfx/utilities.js");
load("../../src/gfx/geometry.js");
load("../../src/gfx/regionAllocator.js");
load("../../src/gfx/frame.js");
load("../../src/gfx/frameContainer.js");
load("../../src/gfx/stage.js");
load("../../src/gfx/filters.js");
load("../../src/gfx/gl/core.js");
load("../../src/gfx/gl/glContext.js");
load("../../src/gfx/gl/gl.js");
load("../../src/gfx/gl/brush.js");
load("../../src/gfx/2d/2d.js");
load("../../src/gfx/easel.js");
load("../../src/gfx/shapes.js");
//../../src/gfx/glTests.js
//../../src/gfx/shapes.js

// Load SWF Dependencies
console.time("Load SWF Dependencies");
load("../../src/swf/config.js");
load("../../src/swf/options.js");
load("../../src/flash/util.js");
load("../../src/swf/swf.js");
load("../../src/swf/inflate.js");
load("../../src/swf/stream.js");
load("../../src/swf/bitmap.js");
load("../../src/swf/button.js");
load("../../src/swf/font.js");
load("../../src/swf/image.js");
load("../../src/swf/label.js");
load("../../src/swf/shape.js");
load("../../src/swf/sound.js");
load("../../src/swf/text.js");
load("../../src/swf/mp3worker.js");
console.timeEnd("Load SWF Dependencies");

console.time("Load SWF Parser");
load("../../src/swf/types.js");
load("../../src/swf/structs.js");
load("../../src/swf/tags.js");
load("../../src/swf/templates.js");
load("../../src/swf/generator.js");
load("../../src/swf/handlers.js");
load("../../src/swf/parser.js");
load("../../src/swf/resourceloader.js");
console.timeEnd("Load SWF Parser");

// Load AVM2 Dependencies
console.time("Load AVM2 Dependencies");
load("../../src/avm2/avm2Util.js");
load("../../src/avm2/settings.js");
load("../../src/metrics.js");

load("../../src/avm2/constants.js");
load("../../src/avm2/errors.js");
load("../../src/avm2/opcodes.js");
load("../../src/avm2/parser.js");
load("../../src/avm2/analyze.js");
load("../../src/avm2/compiler/lljs/src/estransform.js");
load("../../src/avm2/compiler/lljs/src/escodegen.js");
load("../../src/avm2/compiler/inferrer.js");
load("../../src/avm2/compiler/c4/ir.js");
load("../../src/avm2/compiler/builder.js");
load("../../src/avm2/compiler/c4/looper.js");
load("../../src/avm2/compiler/c4/backend.js");
load("../../src/avm2/trampoline.js");
load("../../src/avm2/bindings.js");
load("../../src/avm2/scope.js");
load("../../src/avm2/domain.js");

load("../../src/avm2/xregexp.js");
load("../../src/avm2/runtime.js");
load("../../src/avm2/runtime-exports.js");
load("../../src/avm2/hacks.js");
//../../src/avm2/vectors-numeric.js
//../../src/avm2/vectors-generic.js
load("../../src/avm2/xml.js");
load("../../src/avm2/amf.js");
load("../../src/avm2/natives/int32Vector.js");
load("../../src/avm2/natives/uint32Vector.js");
load("../../src/avm2/natives/float64Vector.js");
load("../../src/avm2/native.js");
load("../../src/avm2/natives/genericVector.js");
load("../../src/avm2/natives/dictionary.js");
load("../../src/avm2/natives/proxy.js");
load("../../src/avm2/natives/xml.js");
load("../../src/avm2/natives/system.js");
load("../../src/avm2/natives/byteArray.js");
load("../../src/avm2/disassembler.js");
load("../../src/avm2/interpreter.js");
//../../src/avm2/vm.js
console.timeEnd("Load AVM2 Dependencies");

// Load AVM1 Dependencies
console.time("Load AVM1 Dependencies");
load("../../src/avm1/stream.js");
load("../../src/avm1/parser.js");
load("../../src/avm1/analyze.js");
load("../../src/avm1/interpreter.js");
console.timeEnd("Load AVM1 Dependencies");

console.time("Load Compiled Code Cache");
//../../src/avm2/bin/out.js
//../../src/avm2/bin/builtin.as.js
//../../src/avm2/bin/race3.as.js
//../../src/avm2/bin/player.as.js
//../../src/avm2/bin/demo.as.js
//../../src/avm2/bin/box.as.js
//../../src/avm2/bin/box.as.cc.js
//../../src/avm2/bin/main.as.js
//../../src/avm2/bin/main.as.cc.js
//../../src/avm2/bin/truck.as.js
//../../src/avm2/bin/candy.as.js
console.timeEnd("Load Compiled Code Cache");

// Load Flash TS Dependencies
console.time("Load Flash TS Dependencies");
load("../../src/flash.ts/geom/Matrix.js");
load("../../src/flash.ts/geom/PerspectiveProjection.js");
load("../../src/flash.ts/geom/ColorTransform.js");
load("../../src/flash.ts/geom/Rectangle.js");
load("../../src/flash.ts/geom/Point.js");
load("../../src/flash.ts/geom/Transform.js");
load("../../src/flash.ts/geom/Matrix3D.js");

load("../../src/flash.ts/xml/XMLTag.js");
load("../../src/flash.ts/net/NetStreamInfo.js");
//../../src/flash.ts/sampler/StackFrame.js
//../../src/flash.ts/sampler/Sample.js
//../../src/flash.ts/sampler/ClassFactory.js
//../../src/flash.ts/sampler/NewObjectSample.js
//../../src/flash.ts/sampler/DeleteObjectSample.js
//../../src/flash.ts/display3D/Context3DBlendFactor.js
//../../src/flash.ts/display3D/Context3DStencilAction.js
//../../src/flash.ts/text/engine/CFFHinting.js
load("../../src/flash.ts/display/IDrawCommand.js");
load("../../src/flash.ts/net/Responder.js");
load("../../src/flash.ts/utils/ObjectInput.js");
load("../../src/flash.ts/events/EventPhase.js");
//../../src/flash.ts/net/URLLoaderDataFormat.js
//../../src/flash.ts/net/IDynamicPropertyWriter.js
load("../../src/flash.ts/events/Event.js");
load("../../src/flash.ts/events/IEventDispatcher.js");
load("../../src/flash.ts/events/EventDispatcher.js");
//../../src/flash.ts/display/Stage3D.js
load("../../src/flash.ts/sensors/Geolocation.js");
//../../src/flash.ts/errors/IOError.js
//../../src/flash.ts/errors/MemoryError.js
//../../src/flash.ts/errors/IllegalOperationError.js
//../../src/flash.ts/errors/EOFError.js
load("../../src/flash.ts/text/engine/ContentElement.js");
load("../../src/flash.ts/text/engine/TextElement.js");
//../../src/flash.ts/concurrent/Mutex.js
//../../src/flash.ts/concurrent/Condition.js
load("../../src/flash.ts/display/NativeMenu.js");
load("../../src/flash.ts/ui/ContextMenu.js");
//../../src/flash.ts/net/drm/DRMManagerSession.js
//../../src/flash.ts/net/drm/DRMPlaybackTimeWindow.js
//../../src/flash.ts/net/drm/DRMVoucher.js
//../../src/flash.ts/net/drm/DRMManager.js
//../../src/flash.ts/net/drm/DRMModuleCycleProvider.js
//../../src/flash.ts/net/drm/DRMURLDownloadContext.js
//../../src/flash.ts/net/drm/DRMAuthenticationContext.js
//../../src/flash.ts/net/drm/DRMVoucherDownloadContext.js
//../../src/flash.ts/net/drm/DRMVoucherStoreContext.js
load("../../src/flash.ts/display/IBitmapDrawable.js");
load("../../src/flash.ts/display/BlendMode.js");
load("../../src/flash.ts/display/DisplayObject.js");
load("../../src/flash.ts/display/Bitmap.js");
//../../src/flash.ts/globalization/DateTimeFormatter.js
//../../src/flash.ts/media/VideoStatus.js
load("../../src/flash.ts/system/FSCommand.js");
load("../../src/flash.ts/external/ExternalInterface.js");
load("../../src/flash.ts/security/CertificateStatus.js");
load("../../src/flash.ts/system/Security.js");
load("../../src/flash.ts/events/KeyboardEvent.js");
//../../src/flash.ts/events/SoftKeyboardTrigger.js
//../../src/flash.ts/display3D/Context3DRenderMode.js
//../../src/flash.ts/ui/GameInputControl.js
//../../src/flash.ts/events/ThrottleType.js
//../../src/flash.ts/text/TextInteractionMode.js
load("../../src/flash.ts/filters/DisplacementMapFilterMode.js");

//../../src/flash.ts/net/drm/AuthenticationMethod.js
//../../src/flash.ts/net/drm/LoadVoucherSetting.js
//../../src/flash.ts/net/drm/AddToDeviceGroupSetting.js
load("../../src/flash.ts/utils/Timer.js");
load("../../src/flash.ts/utils/SetIntervalTimer.js");
load("../../src/flash.ts/text/engine/TextJustifier.js");
load("../../src/flash.ts/media/Microphone.js");
load("../../src/flash.ts/sensors/Accelerometer.js");
//../../src/flash.ts/display3D/textures/TextureBase.js
//../../src/flash.ts/display3D/textures/Texture.js
//../../src/flash.ts/net/drm/DRMDeviceGroup.js
load("../../src/flash.ts/display/InteractiveObject.js");
load("../../src/flash.ts/display/DisplayObjectContainer.js");
load("../../src/flash.ts/display/FocusDirection.js");
load("../../src/flash.ts/display/StageScaleMode.js");
load("../../src/flash.ts/display/ColorCorrection.js");
load("../../src/flash.ts/display/ColorCorrectionSupport.js");
load("../../src/flash.ts/display/StageQuality.js");
load("../../src/flash.ts/display/Stage.js");
load("../../src/flash.ts/events/UncaughtErrorEvents.js");
load("../../src/flash.ts/display/IGraphicsData.js");
load("../../src/flash.ts/display/IGraphicsFill.js");
load("../../src/flash.ts/display/GraphicsEndFill.js");
load("../../src/flash.ts/accessibility/Accessibility.js");
//../../src/flash.ts/text/GridFitType.js
//../../src/flash.ts/globalization/CollatorMode.js
//../../src/flash.ts/errors/StackOverflowError.js
//../../src/flash.ts/errors/ScriptTimeoutError.js
//../../src/flash.ts/errors/InvalidSWFError.js
//../../src/flash.ts/media/VideoCodec.js

load("../../src/flash.ts/ui/Mouse.js");
load("../../src/flash.ts/xml/XMLParser.js");
//../../src/flash.ts/net/NetGroupInfo.js
//../../src/flash.ts/display/ShaderJob.js
load("../../src/flash.ts/text/FontStyle.js");
//../../src/flash.ts/accessibility/ISearchableText.js
load("../../src/flash.ts/display/GraphicsShaderFill.js");
load("../../src/flash.ts/net/NetStream.js");
//../../src/flash.ts/printing/PrintJobOptions.js
//../../src/flash.ts/net/FileReference.js

load("../../src/flash.ts/accessibility/AccessibilityProperties.js");
load("../../src/flash.ts/filters/BitmapFilter.js");
load("../../src/flash.ts/filters/DropShadowFilter.js");
load("../../src/flash.ts/system/ApplicationInstaller.js");
//../../src/flash.ts/display3D/Context3DVertexBufferFormat.js
//../../src/flash.ts/globalization/DateTimeNameContext.js
load("../../src/flash.ts/display/GraphicsSolidFill.js");
//../../src/flash.ts/display/ShaderParameterType.js
load("../../src/flash.ts/filters/GradientGlowFilter.js");
load("../../src/flash.ts/system/SecurityDomain.js");
//../../src/flash.ts/net/IDynamicPropertyOutput.js
//../../src/flash.ts/net/DynamicPropertyOutput.js
load("../../src/flash.ts/media/SoundTransform.js");
//../../src/flash.ts/text/engine/FontLookup.js
load("../../src/flash.ts/display/MorphShape.js");
load("../../src/flash.ts/net/LocalConnection.js");
//../../src/flash.ts/display3D/Program3D.js
//../../src/flash.ts/ui/MouseCursor.js
load("../../src/flash.ts/events/TextEvent.js");
load("../../src/flash.ts/net/URLRequestHeader.js");
load("../../src/flash.ts/display/TriangleCulling.js");
load("../../src/flash.ts/display/JPEGEncoderOptions.js");
load("../../src/flash.ts/net/URLLoader.js");
//../../src/flash.ts/accessibility/ISimpleTextSelection.js
load("../../src/flash.ts/display/Sprite.js");
load("../../src/flash.ts/net/Socket.js");
//../../src/flash.ts/net/SecureSocket.js
//../../src/flash.ts/text/engine/TypographicCase.js
load("../../src/flash.ts/display/IGraphicsPath.js");
load("../../src/flash.ts/display/GraphicsTrianglePath.js");
load("../../src/flash.ts/display/PixelSnapping.js");
//../../src/flash.ts/display3D/Context3DProgramType.js
load("../../src/flash.ts/display/Shape.js");
load("../../src/flash.ts/media/SoundMixer.js");
load("../../src/flash.ts/filters/ConvolutionFilter.js");
//../../src/flash.ts/net/NetGroupReceiveMode.js
//../../src/flash.ts/events/DRMDeviceGroupEvent.js
//../../src/flash.ts/text/engine/TextLineCreationResult.js
//../../src/flash.ts/events/StatusEvent.js
load("../../src/flash.ts/display/ShaderData.js");
//../../src/flash.ts/system/WorkerState.js
//../../src/flash.ts/system/Worker.js
//../../src/flash.ts/ui/Multitouch.js
load("../../src/flash.ts/display/SWFVersion.js");
load("../../src/flash.ts/events/ProgressEvent.js");
load("../../src/flash.ts/media/Camera.js");
//../../src/flash.ts/text/engine/TextBaseline.js
//../../src/flash.ts/text/AntiAliasType.js
//../../src/flash.ts/net/NetGroup.js
load("../../src/flash.ts/events/ErrorEvent.js");
load("../../src/flash.ts/events/IOErrorEvent.js");
//../../src/flash.ts/ui/MultitouchInputMode.js
load("../../src/flash.ts/text/TextFormatAlign.js");
//../../src/flash.ts/text/engine/Kerning.js
//../../src/flash.ts/net/NetStreamAppendBytesAction.js
load("../../src/flash.ts/display/IGraphicsStroke.js");
//../../src/flash.ts/net/NetGroupSendResult.js
load("../../src/flash.ts/display/LineScaleMode.js");
//../../src/flash.ts/events/AsyncErrorEvent.js
//../../src/flash.ts/ui/GameInput.js
load("../../src/flash.ts/filters/BitmapFilterQuality.js");
load("../../src/flash.ts/display/BitmapData.js");
//../../src/flash.ts/events/ShaderEvent.js
load("../../src/flash.ts/events/TimerEvent.js");
//../../src/flash.ts/ui/GameInputHand.js
//../../src/flash.ts/events/DRMAuthenticateEvent.js
//../../src/flash.ts/media/H264Level.js
load("../../src/flash.ts/text/FontType.js");
load("../../src/flash.ts/display/NativeMenuItem.js");
load("../../src/flash.ts/net/FileFilter.js");
load("../../src/flash.ts/text/Font.js");
//../../src/flash.ts/events/SampleDataEvent.js
load("../../src/flash.ts/utils/Endian.js");
load("../../src/flash.ts/filters/BevelFilter.js");
load("../../src/flash.ts/net/SharedObject.js");
load("../../src/flash.ts/media/SoundLoaderContext.js");
//../../src/flash.ts/events/AccelerometerEvent.js
//../../src/flash.ts/display/ShaderParameter.js
load("../../src/flash.ts/ui/ContextMenuClipboardItems.js");
//../../src/flash.ts/media/SoundCodec.js
//../../src/flash.ts/events/DRMCustomProperties.js
//../../src/flash.ts/events/DRMStatusEvent.js
//../../src/flash.ts/automation/ActionGenerator.js
load("../../src/flash.ts/text/TextFormat.js");
load("../../src/flash.ts/events/NetStatusEvent.js");
load("../../src/flash.ts/display/GraphicsBitmapFill.js");
load("../../src/flash.ts/system/DomainMemoryWithStage3D.js");
load("../../src/flash.ts/system/MessageChannelState.js");
load("../../src/flash.ts/system/MessageChannel.js");
load("../../src/flash.ts/display/ActionScriptVersion.js");
load("../../src/flash.ts/display/LoaderInfo.js");
//../../src/flash.ts/text/TextDisplayMode.js
//../../src/flash.ts/net/URLRequestMethod.js
load("../../src/flash.ts/display/Shader.js");
//../../src/flash.ts/events/NetDataEvent.js
load("../../src/flash.ts/system/ImageDecodingPolicy.js");
load("../../src/flash.ts/display/GraphicsGradientFill.js");
//../../src/flash.ts/text/engine/TextLineMirrorRegion.js
//../../src/flash.ts/display3D/IndexBuffer3D.js
//../../src/flash.ts/events/IMEEvent.js
load("../../src/flash.ts/text/engine/TextLine.js");
//../../src/flash.ts/display3D/VertexBuffer3D.js
//../../src/flash.ts/utils/CompressionAlgorithm.js
load("../../src/flash.ts/utils/IDataInput2.js");
load("../../src/flash.ts/utils/IDataOutput2.js");
load("../../src/flash.ts/display/FrameLabel.js");
//../../src/flash.ts/events/GameInputEvent.js
//../../src/flash.ts/net/ObjectEncoding.js

//../../src/flash.ts/media/H264Profile.js
load("../../src/flash.ts/display/Scene.js");
//../../src/flash.ts/display3D/Context3DClearMask.js
load("../../src/flash.ts/net/NetStreamMulticastInfo.js");
//../../src/flash.ts/globalization/LastOperationStatus.js
//../../src/flash.ts/events/ActivityEvent.js
load("../../src/flash.ts/net/NetConnection.js");
//../../src/flash.ts/events/VideoEvent.js
load("../../src/flash.ts/filters/BitmapFilterType.js");
load("../../src/flash.ts/display/SpreadMethod.js");
load("../../src/flash.ts/text/TextField.js");
//../../src/flash.ts/events/GestureEvent.js
//../../src/flash.ts/events/PressAndTapGestureEvent.js
load("../../src/flash.ts/media/SoundChannel.js");
//../../src/flash.ts/text/engine/EastAsianJustifier.js
load("../../src/flash.ts/accessibility/AccessibilityImplementation.js");
//../../src/flash.ts/text/CSMSettings.js
//../../src/flash.ts/net/drm/DRMContentData.js
//../../src/flash.ts/events/StageVideoAvailabilityEvent.js
//../../src/flash.ts/net/NetGroupSendMode.js
//../../src/flash.ts/text/TextRun.js
//../../src/flash.ts/net/XMLSocket.js
//../../src/flash.ts/utils/Dictionary.js
//../../src/flash.ts/display3D/Context3DCompareMode.js
load("../../src/flash.ts/text/TextFieldAutoSize.js");
load("../../src/flash.ts/text/engine/GroupElement.js");
//../../src/flash.ts/automation/AutomationAction.js
//../../src/flash.ts/automation/KeyboardAutomationAction.js
load("../../src/flash.ts/net/NetStreamPlayOptions.js");
load("../../src/flash.ts/text/engine/ElementFormat.js");
load("../../src/flash.ts/filters/DisplacementMapFilter.js");
//../../src/flash.ts/globalization/CurrencyParseResult.js
//../../src/flash.ts/display3D/Context3D.js
//../../src/flash.ts/printing/PrintJob.js
load("../../src/flash.ts/xml/XMLNodeType.js");
//../../src/flash.ts/events/TransformGestureEvent.js
//../../src/flash.ts/net/GroupSpecifier.js
load("../../src/flash.ts/system/SecurityPanel.js");
//../../src/flash.ts/globalization/Collator.js
load("../../src/flash.ts/display/Graphics.js");
load("../../src/flash.ts/ui/ContextMenuItem.js");
//../../src/flash.ts/net/FileReferenceList.js
//../../src/flash.ts/events/DataEvent.js
//../../src/flash.ts/ui/GameInputFinger.js
load("../../src/flash.ts/geom/Utils3D.js");
//../../src/flash.ts/text/TextColorType.js
//../../src/flash.ts/ui/KeyLocation.js
load("../../src/flash.ts/display/BitmapDataChannel.js");
load("../../src/flash.ts/text/StaticText.js");
//../../src/flash.ts/events/FocusEvent.js
//../../src/flash.ts/net/SharedObjectFlushStatus.js
load("../../src/flash.ts/display/GraphicsPath.js");
load("../../src/flash.ts/events/HTTPStatusEvent.js");
load("../../src/flash.ts/geom/Orientation3D.js");
load("../../src/flash.ts/text/engine/TextBlock.js");
load("../../src/flash.ts/filters/BlurFilter.js");
//../../src/flash.ts/media/StageVideoAvailability.js
load("../../src/flash.ts/system/Capabilities.js");
load("../../src/flash.ts/system/ApplicationDomain.js");
load("../../src/flash.ts/display/StageAlign.js");
load("../../src/flash.ts/text/TextFieldType.js");
load("../../src/flash.ts/display/GraphicsStroke.js");
//../../src/flash.ts/globalization/DateTimeStyle.js
//../../src/flash.ts/events/DRMAuthenticationErrorEvent.js
//../../src/flash.ts/net/NetGroupReplicationStrategy.js
//../../src/flash.ts/events/NetFilterEvent.js
load("../../src/flash.ts/geom/Vector3D.js");
//../../src/flash.ts/events/ThrottleEvent.js
//../../src/flash.ts/globalization/LocaleID.js
//../../src/flash.ts/events/GesturePhase.js
//../../src/flash.ts/globalization/DateTimeNameStyle.js
//../../src/flash.ts/automation/MouseAutomationAction.js
//../../src/flash.ts/ui/GameInputControlType.js
//../../src/flash.ts/display3D/Context3DTextureFormat.js
load("../../src/flash.ts/ui/MouseCursorData.js");
load("../../src/flash.ts/display/StageDisplayState.js");
//../../src/flash.ts/net/NetMonitor.js
//../../src/flash.ts/events/SyncEvent.js
//../../src/flash.ts/globalization/NumberFormatter.js
load("../../src/flash.ts/media/MicrophoneEnhancedOptions.js");
load("../../src/flash.ts/xml/XMLNode.js");
load("../../src/flash.ts/trace/Trace.js");
load("../../src/flash.ts/system/IMEConversionMode.js");
//../../src/flash.ts/text/TextFormatDisplay.js
//../../src/flash.ts/events/DRMErrorEvent.js
load("../../src/flash.ts/filters/ColorMatrixFilter.js");
//../../src/flash.ts/system/SystemUpdater.js
//../../src/flash.ts/system/SystemUpdaterType.js
load("../../src/flash.ts/media/Video.js");
//../../src/flash.ts/desktop/ClipboardFormats.js
//../../src/flash.ts/desktop/ClipboardTransferMode.js
//../../src/flash.ts/desktop/Clipboard.js
load("../../src/flash.ts/display/AVM1Movie.js");
load("../../src/flash.ts/filters/GradientBevelFilter.js");
load("../../src/flash.ts/ui/ContextMenuBuiltInItems.js");
//../../src/flash.ts/text/engine/BreakOpportunity.js
load("../../src/flash.ts/display/PNGEncoderOptions.js");
//../../src/flash.ts/globalization/NationalDigitsType.js
//../../src/flash.ts/text/TextExtent.js
//../../src/flash.ts/text/engine/GraphicElement.js
//../../src/flash.ts/system/IME.js
load("../../src/flash.ts/text/engine/FontMetrics.js");
load("../../src/flash.ts/security/X509Certificate.js");
//../../src/flash.ts/events/TouchEvent.js
//../../src/flash.ts/text/engine/TextRotation.js
//../../src/flash.ts/display3D/Context3DProfile.js
//../../src/flash.ts/text/ime/IIMEClient.js
//../../src/flash.ts/display3D/Context3DTriangleFace.js
load("../../src/flash.ts/events/MouseEvent.js");
load("../../src/flash.ts/xml/XMLDocument.js");
//../../src/flash.ts/text/engine/RenderingMode.js
load("../../src/flash.ts/net/URLRequest.js");
//../../src/flash.ts/automation/StageCapture.js
//../../src/flash.ts/media/StageVideo.js
//../../src/flash.ts/events/DRMDeviceGroupErrorEvent.js
//../../src/flash.ts/events/SoftKeyboardEvent.js
//../../src/flash.ts/errors/DRMManagerError.js
//../../src/flash.ts/text/engine/FontPosture.js
load("../../src/flash.ts/display/JointStyle.js");
//../../src/flash.ts/display/ShaderPrecision.js
//../../src/flash.ts/text/engine/LineJustification.js
//../../src/flash.ts/globalization/StringTools.js
load("../../src/flash.ts/text/StyleSheet.js");
//../../src/flash.ts/display/ShaderInput.js
//../../src/flash.ts/net/NetStreamPlayTransitions.js
load("../../src/flash.ts/display/BitmapEncodingColorSpace.js");
load("../../src/flash.ts/display/InterpolationMethod.js");
load("../../src/flash.ts/media/ID3Info.js");
load("../../src/flash.ts/system/TouchscreenType.js");
//../../src/flash.ts/events/DRMAuthenticationCompleteEvent.js
load("../../src/flash.ts/events/SecurityErrorEvent.js");
load("../../src/flash.ts/system/AuthorizedFeatures.js");
load("../../src/flash.ts/media/Sound.js");
//../../src/flash.ts/system/WorkerDomain.js
load("../../src/flash.ts/net/URLStream.js");
//../../src/flash.ts/events/OutputProgressEvent.js
load("../../src/flash.ts/display/SimpleButton.js");
load("../../src/flash.ts/display/JPEGXREncoderOptions.js");
load("../../src/flash.ts/display/GradientType.js");
load("../../src/flash.ts/net/URLVariables.js");
//../../src/flash.ts/globalization/CurrencyFormatter.js
//../../src/flash.ts/printing/PrintJobOrientation.js
//../../src/flash.ts/events/NetMonitorEvent.js
//../../src/flash.ts/text/engine/TextLineValidity.js
load("../../src/flash.ts/text/TextSnapshot.js");
load("../../src/flash.ts/system/LoaderContext.js");
load("../../src/flash.ts/system/JPEGLoaderContext.js");
load("../../src/flash.ts/display/Loader.js");
//../../src/flash.ts/events/FullScreenEvent.js
load("../../src/flash.ts/utils/ObjectOutput.js");
load("../../src/flash.ts/utils/IExternalizable.js");
load("../../src/flash.ts/text/engine/FontDescription.js");
//../../src/flash.ts/globalization/NumberParseResult.js
//../../src/flash.ts/automation/StageCaptureEvent.js
load("../../src/flash.ts/security/X500DistinguishedName.js");
//../../src/flash.ts/text/engine/LigatureLevel.js
load("../../src/flash.ts/media/VideoStreamSettings.js");
//../../src/flash.ts/media/H264VideoStreamSettings.js
//../../src/flash.ts/automation/Configuration.js
//../../src/flash.ts/text/engine/JustificationStyle.js
//../../src/flash.ts/ui/KeyboardType.js
load("../../src/flash.ts/display/CapsStyle.js");
//../../src/flash.ts/text/ime/CompositionAttributeRange.js
//../../src/flash.ts/text/engine/TabStop.js
//../../src/flash.ts/text/engine/FontWeight.js
//../../src/flash.ts/ui/GameInputDevice.js
//../../src/flash.ts/media/AudioDecoder.js
//../../src/flash.ts/text/TextRenderer.js
//../../src/flash.ts/events/StageVideoEvent.js
//../../src/flash.ts/text/engine/DigitWidth.js
load("../../src/flash.ts/system/AuthorizedFeaturesLoader.js");
load("../../src/flash.ts/display/GraphicsPathWinding.js");
load("../../src/flash.ts/display/GraphicsPathCommand.js");
//../../src/flash.ts/text/engine/TabAlignment.js
//../../src/flash.ts/profiler/Telemetry.js
load("../../src/flash.ts/events/UncaughtErrorEvent.js");
//../../src/flash.ts/text/engine/DigitCase.js
load("../../src/flash.ts/filters/ShaderFilter.js");
//../../src/flash.ts/events/GeolocationEvent.js
load("../../src/flash.ts/ui/Keyboard.js");
//../../src/flash.ts/media/MicrophoneEnhancedMode.js
load("../../src/flash.ts/filters/GlowFilter.js");
load("../../src/flash.ts/display/MovieClip.js");
load("../../src/flash.ts/text/engine/SpaceJustifier.js");
//../../src/flash.ts/net/drm/VoucherAccessInfo.js
//../../src/flash.ts/events/ContextMenuEvent.js
//../../src/flash.ts/display3D/textures/CubeTexture.js
load("../../src/flash.ts/text/TextLineMetrics.js");
console.timeEnd("Load Flash TS Dependencies");


console.time("Load avm1lib Dependencies");
load("../../src/avm1lib/AS2Button.js");
load("../../src/avm1lib/AS2Globals.js");
load("../../src/avm1lib/AS2MovieClip.js");
load("../../src/avm1lib/AS2MovieClipLoader.js");
load("../../src/avm1lib/AS2TextField.js");
load("../../src/avm1lib/AS2TextFormat.js");
load("../../src/avm1lib/AS2Utils.js");
console.timeEnd("Load avm1lib Dependencies");

console.timeEnd("Load");

console.time("Load Player Dependencies");

load("../../src/player/references.js");
load("../../src/player/remoting.js");
load("../../src/player/timeline.js");
load("../../src/player/remotingPlayer.js");
load("../../src/player/remotingGfx.js");
load("../../src/player/player.js");

console.timeEnd("Load Player Dependencies");

load("../../src/flash.ts/linker.js");

<!-- Autogenerated references end -->