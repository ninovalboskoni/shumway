/**
 * Copyright 2014 Mozilla Foundation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// Runs SWF files
// USAGE: js ./run.js <swf-file> [<duration>]

load("./domstubs.js");

var SHUMWAY_ROOT = "../../src/";

/* Autogenerated parser references: base=../../ */
console.time("Load Parser Dependencies");

load("../../build/ts/swf/jpeg.js");

load("../../build/ts/utilities.js");
load("../../build/ts/dataBuffer.js");
load("../../build/ts/ShapeData.js");

load("../../build/ts/tools/profiler/timelineFrame.js");
load("../../build/ts/tools/profiler/timelineBuffer.js");

// Load SWF Dependencies
console.time("Load SWF Dependencies");
load("../../build/ts/swf/module.js");
load("../../build/ts/swf/inflate.js");
load("../../build/ts/swf/stream.js");
load("../../build/ts/swf/parser/bitmap.js");
load("../../build/ts/swf/parser/button.js");
load("../../build/ts/swf/parser/font.js");
load("../../build/ts/swf/parser/image.js");
load("../../build/ts/swf/parser/label.js");
load("../../build/ts/swf/parser/shape.js");
load("../../build/ts/swf/parser/sound.js");
load("../../build/ts/swf/parser/text.js");
console.timeEnd("Load SWF Dependencies");

console.time("Load SWF Parser");
load("../../build/ts/swf/parser/swfTag.js");
load("../../build/ts/swf/parser/templates.js");
load("../../build/ts/swf/parser/handlers.js");
load("../../build/ts/swf/parser/parser.js");
console.timeEnd("Load SWF Parser");

load("../../build/ts/swf/resourceLoader.js");
load("../../build/ts/swf/binaryFileReader.js");

console.timeEnd("Load Parser Dependencies");

/* Autogenerated parser references end */

/* Autogenerated player references: base=../../ */
console.time("Load Player Dependencies");

console.time("Load Shared Dependencies");

// DUP: load("../../build/ts/utilities.js");
// DUP: load("../../build/ts/dataBuffer.js");
load("../../build/ts/htmlparser.js");
// DUP: load("../../build/ts/ShapeData.js");
load("../../build/ts/options.js");
load("../../build/ts/settings.js");

load("../../build/ts/metrics.js");

load("../../build/ts/player/remoting.js");

// DUP: load("../../build/ts/tools/profiler/timelineFrame.js");
// DUP: load("../../build/ts/tools/profiler/timelineBuffer.js");
load("../../build/ts/avm2/module.js");

console.timeEnd("Load Shared Dependencies");

// Load AVM2 Dependencies
Shumway.AVM2.enterTimeline("Load AVM2 Dependencies");
load("../../build/ts/avm2/options.js");
load("../../build/ts/avm2/errors.js");
load("../../build/ts/avm2/parser.js");
load("../../build/ts/avm2/bytecode.js");
load("../../build/ts/avm2/compiler/verifier.js");
load("../../build/ts/avm2/compiler/c4/ir.js");
load("../../build/ts/avm2/compiler/c4/as.ir.js");
load("../../build/ts/avm2/compiler/c4/ast.js");
load("../../build/ts/avm2/compiler/c4/optimizer.js");
load("../../build/ts/avm2/compiler/c4/looper.js");
load("../../build/ts/avm2/compiler/c4/backend.js");
load("../../build/ts/avm2/compiler/builder.js");
load("../../build/ts/avm2/trampoline.js");
load("../../build/ts/avm2/bindings.js");
load("../../build/ts/avm2/scope.js");
load("../../build/ts/avm2/domain.js");

load("../../src/avm2/xregexp.js");
load("../../build/ts/avm2/runtime.js");
load("../../src/avm2/runtime-exports.js");
load("../../build/ts/avm2/hacks.js");
load("../../src/avm2/amf.js");
load("../../build/ts/avm2/natives/int32Vector.js");
load("../../build/ts/avm2/natives/uint32Vector.js");
load("../../build/ts/avm2/natives/float64Vector.js");
load("../../build/ts/avm2/native.js");
load("../../build/ts/avm2/natives/genericVector.js");
load("../../build/ts/avm2/natives/dictionary.js");
load("../../build/ts/avm2/natives/proxy.js");
load("../../build/ts/avm2/natives/xml.js");
load("../../build/ts/avm2/natives/system.js");
load("../../build/ts/avm2/natives/byteArray.js");
load("../../src/avm2/disassembler.js");
load("../../build/ts/avm2/interpreter.js");
//../../build/ts/avm2/vm.js
Shumway.AVM2.leaveTimeline();

// Load AVM1 Dependencies
console.time("Load AVM1 Dependencies");
load("../../build/ts/avm1/stream.js");
load("../../build/ts/avm1/parser.js");
load("../../build/ts/avm1/analyze.js");
load("../../build/ts/avm1/context.js");
load("../../build/ts/avm1/interpreter.js");
console.timeEnd("Load AVM1 Dependencies");

console.time("Load Compiled Code Cache");
console.timeEnd("Load Compiled Code Cache");

load("../../build/ts/player/module.js");

// Load Flash TS Dependencies
Shumway.Player.enterTimeline("Load Flash TS Dependencies");

load("../../build/ts/TextContent.js");

load("../../build/ts/flash/geom/Matrix.js");
load("../../build/ts/flash/geom/PerspectiveProjection.js");
load("../../build/ts/flash/geom/ColorTransform.js");
load("../../build/ts/flash/geom/Rectangle.js");
load("../../build/ts/flash/geom/Point.js");
load("../../build/ts/flash/geom/Transform.js");
load("../../build/ts/flash/geom/Matrix3D.js");

load("../../build/ts/flash/xml/XMLTag.js");
load("../../build/ts/flash/net/NetStreamInfo.js");
//../../build/ts/flash/sampler/StackFrame.js
//../../build/ts/flash/sampler/Sample.js
//../../build/ts/flash/sampler/ClassFactory.js
//../../build/ts/flash/sampler/NewObjectSample.js
//../../build/ts/flash/sampler/DeleteObjectSample.js
//../../build/ts/flash/display3D/Context3DBlendFactor.js
//../../build/ts/flash/display3D/Context3DStencilAction.js
//../../build/ts/flash/text/engine/CFFHinting.js
load("../../build/ts/flash/display/IDrawCommand.js");
load("../../build/ts/flash/net/Responder.js");
load("../../build/ts/flash/utils/ObjectInput.js");
load("../../build/ts/flash/events/EventPhase.js");
//../../build/ts/flash/net/URLLoaderDataFormat.js
//../../build/ts/flash/net/IDynamicPropertyWriter.js
load("../../build/ts/flash/events/Event.js");
load("../../build/ts/flash/events/IEventDispatcher.js");
load("../../build/ts/flash/events/EventDispatcher.js");
//../../build/ts/flash/display/Stage3D.js
load("../../build/ts/flash/sensors/Geolocation.js");
//../../build/ts/flash/errors/IOError.js
//../../build/ts/flash/errors/MemoryError.js
//../../build/ts/flash/errors/IllegalOperationError.js
//../../build/ts/flash/errors/EOFError.js
//../../build/ts/flash/text/engine/ContentElement.js
//../../build/ts/flash/text/engine/TextElement.js
load("../../build/ts/flash/display/NativeMenu.js");
load("../../build/ts/flash/ui/ContextMenu.js");
load("../../build/ts/flash/display/IBitmapDrawable.js");
load("../../build/ts/flash/display/BlendMode.js");
load("../../build/ts/flash/display/DisplayObject.js");
load("../../build/ts/flash/display/Bitmap.js");
//../../build/ts/flash/globalization/DateTimeFormatter.js
//../../build/ts/flash/media/VideoStatus.js
load("../../build/ts/flash/system/FSCommand.js");
load("../../build/ts/flash/external/ExternalInterface.js");
//../../build/ts/flash/security/CertificateStatus.js
load("../../build/ts/flash/system/Security.js");
load("../../build/ts/flash/events/KeyboardEvent.js");
//../../build/ts/flash/events/SoftKeyboardTrigger.js
//../../build/ts/flash/display3D/Context3DRenderMode.js
//../../build/ts/flash/ui/GameInputControl.js
//../../build/ts/flash/events/ThrottleType.js
load("../../build/ts/flash/text/TextInteractionMode.js");
load("../../build/ts/flash/filters/DisplacementMapFilterMode.js");

load("../../build/ts/flash/utils/Timer.js");
load("../../build/ts/flash/utils/SetIntervalTimer.js");
//../../build/ts/flash/text/engine/TextJustifier.js
load("../../build/ts/flash/media/Microphone.js");
load("../../build/ts/flash/sensors/Accelerometer.js");
//../../build/ts/flash/display3D/textures/TextureBase.js
//../../build/ts/flash/display3D/textures/Texture.js
load("../../build/ts/flash/display/InteractiveObject.js");
load("../../build/ts/flash/display/DisplayObjectContainer.js");
load("../../build/ts/flash/display/FocusDirection.js");
load("../../build/ts/flash/display/StageScaleMode.js");
load("../../build/ts/flash/display/ColorCorrection.js");
load("../../build/ts/flash/display/ColorCorrectionSupport.js");
load("../../build/ts/flash/display/StageQuality.js");
load("../../build/ts/flash/display/Stage.js");
load("../../build/ts/flash/events/UncaughtErrorEvents.js");
load("../../build/ts/flash/display/IGraphicsData.js");
load("../../build/ts/flash/display/IGraphicsFill.js");
load("../../build/ts/flash/display/GraphicsEndFill.js");
load("../../build/ts/flash/accessibility/Accessibility.js");
load("../../build/ts/flash/text/GridFitType.js");
//../../build/ts/flash/globalization/CollatorMode.js
//../../build/ts/flash/errors/StackOverflowError.js
//../../build/ts/flash/errors/ScriptTimeoutError.js
//../../build/ts/flash/errors/InvalidSWFError.js
//../../build/ts/flash/media/VideoCodec.js

load("../../build/ts/flash/ui/Mouse.js");
load("../../build/ts/flash/xml/XMLParser.js");
//../../build/ts/flash/net/NetGroupInfo.js
//../../build/ts/flash/display/ShaderJob.js
load("../../build/ts/flash/text/FontStyle.js");
//../../build/ts/flash/accessibility/ISearchableText.js
//../../build/ts/flash/display/GraphicsShaderFill.js
load("../../build/ts/flash/net/NetStream.js");
//../../build/ts/flash/printing/PrintJobOptions.js
//../../build/ts/flash/net/FileReference.js

load("../../build/ts/flash/accessibility/AccessibilityProperties.js");
load("../../build/ts/flash/filters/BitmapFilter.js");
load("../../build/ts/flash/filters/DropShadowFilter.js");
//../../build/ts/flash/system/ApplicationInstaller.js
//../../build/ts/flash/display3D/Context3DVertexBufferFormat.js
//../../build/ts/flash/globalization/DateTimeNameContext.js
load("../../build/ts/flash/display/GraphicsSolidFill.js");
//../../build/ts/flash/display/ShaderParameterType.js
load("../../build/ts/flash/filters/GradientGlowFilter.js");
load("../../build/ts/flash/system/SecurityDomain.js");
//../../build/ts/flash/net/IDynamicPropertyOutput.js
//../../build/ts/flash/net/DynamicPropertyOutput.js
load("../../build/ts/flash/media/SoundTransform.js");
//../../build/ts/flash/text/engine/FontLookup.js
load("../../build/ts/flash/display/MorphShape.js");
load("../../build/ts/flash/net/LocalConnection.js");
//../../build/ts/flash/display3D/Program3D.js
//../../build/ts/flash/ui/MouseCursor.js
load("../../build/ts/flash/events/TextEvent.js");
load("../../build/ts/flash/net/URLRequestHeader.js");
load("../../build/ts/flash/display/TriangleCulling.js");
load("../../build/ts/flash/display/JPEGEncoderOptions.js");
load("../../build/ts/flash/net/URLLoader.js");
//../../build/ts/flash/accessibility/ISimpleTextSelection.js
load("../../build/ts/flash/display/Sprite.js");
load("../../build/ts/flash/net/Socket.js");
//../../build/ts/flash/net/SecureSocket.js
//../../build/ts/flash/text/engine/TypographicCase.js
load("../../build/ts/flash/display/IGraphicsPath.js");
load("../../build/ts/flash/display/GraphicsTrianglePath.js");
load("../../build/ts/flash/display/PixelSnapping.js");
//../../build/ts/flash/display3D/Context3DProgramType.js
load("../../build/ts/flash/display/Shape.js");
load("../../build/ts/flash/media/SoundMixer.js");
load("../../build/ts/flash/filters/ConvolutionFilter.js");
//../../build/ts/flash/net/NetGroupReceiveMode.js
//../../build/ts/flash/text/engine/TextLineCreationResult.js
//../../build/ts/flash/events/StatusEvent.js
//../../build/ts/flash/display/ShaderData.js
//../../build/ts/flash/ui/Multitouch.js
load("../../build/ts/flash/display/SWFVersion.js");
load("../../build/ts/flash/events/ProgressEvent.js");
load("../../build/ts/flash/media/Camera.js");
//../../build/ts/flash/text/engine/TextBaseline.js
load("../../build/ts/flash/text/AntiAliasType.js");
//../../build/ts/flash/net/NetGroup.js
load("../../build/ts/flash/events/ErrorEvent.js");
load("../../build/ts/flash/events/IOErrorEvent.js");
//../../build/ts/flash/ui/MultitouchInputMode.js
load("../../build/ts/flash/text/TextFormatAlign.js");
//../../build/ts/flash/text/engine/Kerning.js
//../../build/ts/flash/net/NetStreamAppendBytesAction.js
load("../../build/ts/flash/display/IGraphicsStroke.js");
//../../build/ts/flash/net/NetGroupSendResult.js
load("../../build/ts/flash/display/CapsStyle.js");
load("../../build/ts/flash/display/JointStyle.js");
load("../../build/ts/flash/display/LineScaleMode.js");
//../../build/ts/flash/events/AsyncErrorEvent.js
//../../build/ts/flash/ui/GameInput.js
load("../../build/ts/flash/filters/BitmapFilterQuality.js");
load("../../build/ts/flash/display/BitmapData.js");
//../../build/ts/flash/events/ShaderEvent.js
load("../../build/ts/flash/events/TimerEvent.js");
//../../build/ts/flash/ui/GameInputHand.js
//../../build/ts/flash/media/H264Level.js
load("../../build/ts/flash/text/FontType.js");
load("../../build/ts/flash/display/NativeMenuItem.js");
load("../../build/ts/flash/net/FileFilter.js");
load("../../build/ts/flash/text/Font.js");
//../../build/ts/flash/events/SampleDataEvent.js
load("../../build/ts/flash/utils/Endian.js");
load("../../build/ts/flash/filters/BevelFilter.js");
load("../../build/ts/flash/net/SharedObject.js");
load("../../build/ts/flash/media/SoundLoaderContext.js");
//../../build/ts/flash/events/AccelerometerEvent.js
//../../build/ts/flash/display/ShaderParameter.js
load("../../build/ts/flash/ui/ContextMenuClipboardItems.js");
//../../build/ts/flash/media/SoundCodec.js
//../../build/ts/flash/automation/ActionGenerator.js
load("../../build/ts/flash/text/TextFormat.js");
load("../../build/ts/flash/events/NetStatusEvent.js");
load("../../build/ts/flash/display/GraphicsBitmapFill.js");
//../../build/ts/flash/system/DomainMemoryWithStage3D.js
load("../../build/ts/flash/system/MessageChannelState.js");
load("../../build/ts/flash/system/MessageChannel.js");
load("../../build/ts/flash/display/ActionScriptVersion.js");
load("../../build/ts/flash/display/LoaderInfo.js");
//../../build/ts/flash/text/TextDisplayMode.js
//../../build/ts/flash/net/URLRequestMethod.js
//../../build/ts/flash/display/Shader.js
//../../build/ts/flash/events/NetDataEvent.js
load("../../build/ts/flash/system/ImageDecodingPolicy.js");
load("../../build/ts/flash/display/GraphicsGradientFill.js");
//../../build/ts/flash/text/engine/TextLineMirrorRegion.js
//../../build/ts/flash/display3D/IndexBuffer3D.js
//../../build/ts/flash/events/IMEEvent.js
//../../build/ts/flash/text/engine/TextLine.js
//../../build/ts/flash/display3D/VertexBuffer3D.js
//../../build/ts/flash/utils/CompressionAlgorithm.js
load("../../build/ts/flash/utils/IDataInput2.js");
load("../../build/ts/flash/utils/IDataOutput2.js");
load("../../build/ts/flash/display/FrameLabel.js");
//../../build/ts/flash/events/GameInputEvent.js
//../../build/ts/flash/net/ObjectEncoding.js

//../../build/ts/flash/media/H264Profile.js
load("../../build/ts/flash/display/Scene.js");
//../../build/ts/flash/display3D/Context3DClearMask.js
load("../../build/ts/flash/net/NetStreamMulticastInfo.js");
//../../build/ts/flash/globalization/LastOperationStatus.js
//../../build/ts/flash/events/ActivityEvent.js
load("../../build/ts/flash/net/NetConnection.js");
//../../build/ts/flash/events/VideoEvent.js
load("../../build/ts/flash/filters/BitmapFilterType.js");
load("../../build/ts/flash/text/TextField.js");
//../../build/ts/flash/events/GestureEvent.js
//../../build/ts/flash/events/PressAndTapGestureEvent.js
load("../../build/ts/flash/media/SoundChannel.js");
//../../build/ts/flash/text/engine/EastAsianJustifier.js
load("../../build/ts/flash/accessibility/AccessibilityImplementation.js");
//../../build/ts/flash/text/CSMSettings.js
//../../build/ts/flash/events/StageVideoAvailabilityEvent.js
//../../build/ts/flash/net/NetGroupSendMode.js
load("../../build/ts/flash/text/TextRun.js");
//../../build/ts/flash/net/XMLSocket.js
//../../build/ts/flash/utils/Dictionary.js
//../../build/ts/flash/display3D/Context3DCompareMode.js
load("../../build/ts/flash/text/TextFieldAutoSize.js");
//../../build/ts/flash/text/engine/GroupElement.js
//../../build/ts/flash/automation/AutomationAction.js
//../../build/ts/flash/automation/KeyboardAutomationAction.js
load("../../build/ts/flash/net/NetStreamPlayOptions.js");
//../../build/ts/flash/text/engine/ElementFormat.js
load("../../build/ts/flash/filters/DisplacementMapFilter.js");
//../../build/ts/flash/globalization/CurrencyParseResult.js
//../../build/ts/flash/display3D/Context3D.js
//../../build/ts/flash/printing/PrintJob.js
load("../../build/ts/flash/xml/XMLNodeType.js");
//../../build/ts/flash/events/TransformGestureEvent.js
//../../build/ts/flash/net/GroupSpecifier.js
load("../../build/ts/flash/system/SecurityPanel.js");
//../../build/ts/flash/globalization/Collator.js
load("../../build/ts/flash/display/GradientType.js");
load("../../build/ts/flash/display/InterpolationMethod.js");
load("../../build/ts/flash/display/SpreadMethod.js");
load("../../build/ts/flash/display/GraphicsPathWinding.js");
load("../../build/ts/flash/display/GraphicsPathCommand.js");
load("../../build/ts/flash/display/GraphicsPath.js");
load("../../build/ts/flash/display/Graphics.js");
load("../../build/ts/flash/ui/ContextMenuItem.js");
//../../build/ts/flash/net/FileReferenceList.js
//../../build/ts/flash/events/DataEvent.js
//../../build/ts/flash/ui/GameInputFinger.js
load("../../build/ts/flash/geom/Utils3D.js");
//../../build/ts/flash/text/TextColorType.js
//../../build/ts/flash/ui/KeyLocation.js
load("../../build/ts/flash/display/BitmapDataChannel.js");
load("../../build/ts/flash/text/StaticText.js");
//../../build/ts/flash/events/FocusEvent.js
//../../build/ts/flash/net/SharedObjectFlushStatus.js
load("../../build/ts/flash/events/HTTPStatusEvent.js");
load("../../build/ts/flash/geom/Orientation3D.js");
//../../build/ts/flash/text/engine/TextBlock.js
load("../../build/ts/flash/filters/BlurFilter.js");
//../../build/ts/flash/media/StageVideoAvailability.js
load("../../build/ts/flash/system/Capabilities.js");
load("../../build/ts/flash/system/ApplicationDomain.js");
load("../../build/ts/flash/display/StageAlign.js");
load("../../build/ts/flash/text/TextFieldType.js");
load("../../build/ts/flash/display/GraphicsStroke.js");
//../../build/ts/flash/globalization/DateTimeStyle.js
//../../build/ts/flash/net/NetGroupReplicationStrategy.js
//../../build/ts/flash/events/NetFilterEvent.js
load("../../build/ts/flash/geom/Vector3D.js");
//../../build/ts/flash/events/ThrottleEvent.js
//../../build/ts/flash/globalization/LocaleID.js
//../../build/ts/flash/events/GesturePhase.js
//../../build/ts/flash/globalization/DateTimeNameStyle.js
//../../build/ts/flash/automation/MouseAutomationAction.js
//../../build/ts/flash/ui/GameInputControlType.js
//../../build/ts/flash/display3D/Context3DTextureFormat.js
load("../../build/ts/flash/ui/MouseCursorData.js");
load("../../build/ts/flash/display/StageDisplayState.js");
//../../build/ts/flash/net/NetMonitor.js
//../../build/ts/flash/events/SyncEvent.js
//../../build/ts/flash/globalization/NumberFormatter.js
//../../build/ts/flash/media/MicrophoneEnhancedOptions.js
load("../../build/ts/flash/xml/XMLNode.js");
load("../../build/ts/flash/trace/Trace.js");
//../../build/ts/flash/system/IMEConversionMode.js
//../../build/ts/flash/text/TextFormatDisplay.js
load("../../build/ts/flash/filters/ColorMatrixFilter.js");
//../../build/ts/flash/system/SystemUpdater.js
//../../build/ts/flash/system/SystemUpdaterType.js
load("../../build/ts/flash/media/Video.js");
//../../build/ts/flash/desktop/ClipboardFormats.js
//../../build/ts/flash/desktop/ClipboardTransferMode.js
//../../build/ts/flash/desktop/Clipboard.js
load("../../build/ts/flash/display/AVM1Movie.js");
load("../../build/ts/flash/filters/GradientBevelFilter.js");
load("../../build/ts/flash/ui/ContextMenuBuiltInItems.js");
//../../build/ts/flash/text/engine/BreakOpportunity.js
load("../../build/ts/flash/display/PNGEncoderOptions.js");
//../../build/ts/flash/globalization/NationalDigitsType.js
//../../build/ts/flash/text/TextExtent.js
//../../build/ts/flash/text/engine/GraphicElement.js
//../../build/ts/flash/system/IME.js
//../../build/ts/flash/text/engine/FontMetrics.js
//../../build/ts/flash/security/X509Certificate.js
//../../build/ts/flash/events/TouchEvent.js
//../../build/ts/flash/text/engine/TextRotation.js
//../../build/ts/flash/display3D/Context3DProfile.js
//../../build/ts/flash/text/ime/IIMEClient.js
//../../build/ts/flash/display3D/Context3DTriangleFace.js
load("../../build/ts/flash/events/MouseEvent.js");
load("../../build/ts/flash/xml/XMLDocument.js");
//../../build/ts/flash/text/engine/RenderingMode.js
load("../../build/ts/flash/net/URLRequest.js");
//../../build/ts/flash/automation/StageCapture.js
//../../build/ts/flash/media/StageVideo.js
//../../build/ts/flash/events/SoftKeyboardEvent.js
//../../build/ts/flash/text/engine/FontPosture.js
//../../build/ts/flash/display/ShaderPrecision.js
//../../build/ts/flash/text/engine/LineJustification.js
//../../build/ts/flash/globalization/StringTools.js
load("../../build/ts/flash/text/StyleSheet.js");
//../../build/ts/flash/display/ShaderInput.js
//../../build/ts/flash/net/NetStreamPlayTransitions.js
load("../../build/ts/flash/display/BitmapEncodingColorSpace.js");
load("../../build/ts/flash/media/ID3Info.js");
load("../../build/ts/flash/system/TouchscreenType.js");
load("../../build/ts/flash/events/SecurityErrorEvent.js");
//../../build/ts/flash/system/AuthorizedFeatures.js
load("../../build/ts/flash/media/Sound.js");
//../../build/ts/flash/system/WorkerDomain.js
load("../../build/ts/flash/net/URLStream.js");
//../../build/ts/flash/events/OutputProgressEvent.js
load("../../build/ts/flash/display/SimpleButton.js");
//../../build/ts/flash/display/JPEGXREncoderOptions.js
load("../../build/ts/flash/net/URLVariables.js");
//../../build/ts/flash/globalization/CurrencyFormatter.js
//../../build/ts/flash/printing/PrintJobOrientation.js
//../../build/ts/flash/events/NetMonitorEvent.js
//../../build/ts/flash/text/engine/TextLineValidity.js
load("../../build/ts/flash/text/TextSnapshot.js");
load("../../build/ts/flash/system/LoaderContext.js");
load("../../build/ts/flash/system/JPEGLoaderContext.js");
load("../../build/ts/flash/display/Loader.js");
//../../build/ts/flash/events/FullScreenEvent.js
load("../../build/ts/flash/utils/ObjectOutput.js");
load("../../build/ts/flash/utils/IExternalizable.js");
//../../build/ts/flash/text/engine/FontDescription.js
//../../build/ts/flash/globalization/NumberParseResult.js
//../../build/ts/flash/automation/StageCaptureEvent.js
//../../build/ts/flash/security/X500DistinguishedName.js
//../../build/ts/flash/text/engine/LigatureLevel.js
load("../../build/ts/flash/media/VideoStreamSettings.js");
//../../build/ts/flash/media/H264VideoStreamSettings.js
//../../build/ts/flash/automation/Configuration.js
//../../build/ts/flash/text/engine/JustificationStyle.js
//../../build/ts/flash/ui/KeyboardType.js
//../../build/ts/flash/text/ime/CompositionAttributeRange.js
//../../build/ts/flash/text/engine/TabStop.js
//../../build/ts/flash/text/engine/FontWeight.js
//../../build/ts/flash/ui/GameInputDevice.js
//../../build/ts/flash/media/AudioDecoder.js
//../../build/ts/flash/text/TextRenderer.js
//../../build/ts/flash/events/StageVideoEvent.js
//../../build/ts/flash/text/engine/DigitWidth.js
//../../build/ts/flash/system/AuthorizedFeaturesLoader.js
//../../build/ts/flash/text/engine/TabAlignment.js
//../../build/ts/flash/profiler/Telemetry.js
load("../../build/ts/flash/events/UncaughtErrorEvent.js");
//../../build/ts/flash/text/engine/DigitCase.js
//../../build/ts/flash/filters/ShaderFilter.js
//../../build/ts/flash/events/GeolocationEvent.js
load("../../build/ts/flash/ui/Keyboard.js");
//../../build/ts/flash/media/MicrophoneEnhancedMode.js
load("../../build/ts/flash/filters/GlowFilter.js");
load("../../build/ts/flash/display/MovieClip.js");
//../../build/ts/flash/text/engine/SpaceJustifier.js
//../../build/ts/flash/events/ContextMenuEvent.js
//../../build/ts/flash/display3D/textures/CubeTexture.js
load("../../build/ts/flash/text/TextLineMetrics.js");
Shumway.Player.leaveTimeline();

console.time("Load avm1lib Dependencies");
load("../../build/ts/avm1lib/AS2Button.js");
load("../../build/ts/avm1lib/AS2Globals.js");
load("../../build/ts/avm1lib/AS2MovieClip.js");
load("../../build/ts/avm1lib/AS2MovieClipLoader.js");
load("../../build/ts/avm1lib/AS2TextField.js");
load("../../build/ts/avm1lib/AS2TextFormat.js");
load("../../build/ts/avm1lib/AS2Utils.js");
console.timeEnd("Load avm1lib Dependencies");

load("../../build/ts/player/options.js");
load("../../build/ts/player/timeline.js");
load("../../build/ts/player/remotingPlayer.js");
load("../../build/ts/player/player.js");
load("../../build/ts/player/avmLoader.js");

load("../../build/ts/flash/linker.js");

console.timeEnd("Load Player Dependencies");

/* Autogenerated player references end */

/* Old style script arguments */
if (typeof scriptArgs === "undefined") {
  scriptArgs = arguments;
}

var swfPath = scriptArgs[0];
if (!swfPath) {
  throw new Error('SWF is not specified');
}

console.log('Running SWF: ' + swfPath);

var EXECUTION_MODE = Shumway.AVM2.Runtime.ExecutionMode;

load('./playerservices.js');

var avm2Root = "../../src/avm2/";
var builtinPath = avm2Root + "generated/builtin/builtin.abc";
var avm1Path = avm2Root + "generated/avm1lib/avm1lib.abc";

// different playerglobals can be used here
var playerglobalInfo = {
  abcs: "../../build/playerglobal/playerglobal.abcs",
  catalog: "../../build/playerglobal/playerglobal.json"
};

function FakePlayer() {
  Shumway.Player.Player.call(this);
}
FakePlayer.prototype = Object.create(Shumway.Player.Player.prototype);
FakePlayer.prototype.onSendUpdates = function (updates, assets) {
  var bytes = updates.getBytes();
  // console.log('Updates sent');
};

function runSwfPlayer(data) {
  var sysMode = data.sysMode;
  var appMode = data.appMode;
  var asyncLoading = data.asyncLoading;
  var loaderURL = data.loaderURL;
  var movieParams = data.movieParams;
  var file = data.file;
  Shumway.createAVM2(builtinPath, playerglobalInfo, avm1Path, sysMode, appMode, function (avm2) {
    function runSWF(file) {
      var player = new FakePlayer();
      player.load(file);
    }

    if (asyncLoading) {
      Shumway.FileLoadingService.instance.setBaseUrl(file);
      runSWF(file);
    } else {
      Shumway.FileLoadingService.instance.setBaseUrl(file);
      new BinaryFileReader(file).readAll(null, function(buffer, error) {
        if (!buffer) {
          throw "Unable to open the file " + file + ": " + error;
        }
        runSWF(file, buffer);
      });
    }
  });
}

runSwfPlayer({
  sysMode: true ? EXECUTION_MODE.COMPILE : EXECUTION_MODE.INTERPRET,
  appMode: true ? EXECUTION_MODE.COMPILE : EXECUTION_MODE.INTERPRET,
  asyncLoading: true,
  file: swfPath
});

var runDuration = +scriptArgs[1] || 5000;
console.log('Running for ' + runDuration + 'ms...');
runMicroTaskQueue(runDuration);
console.log('Done.');
