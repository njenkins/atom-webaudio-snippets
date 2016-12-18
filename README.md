# Web Audio API Snippets for Atom

[![Build Status](https://travis-ci.org/njenkins/atom-webaudio-snippets.svg?branch=master)](https://travis-ci.org/njenkins/atom-webaudio-snippets)

Snippets for working with the [Web Audio API](http://www.w3.org/TR/webaudio/) within [Atom](http://atom.io)

## Installation instructions
Go to Atom > File > Settings then search for Web Audio in the Packages tab. Once found, install.
## Development
```js
$ cd ~/.atom/packages
$ git clone https://github.com/njenkins/atom-webaudio-snippets.git
$ cd atom-webaudio-snippets
$ apm install
$ apm link
```

## AnalyserNode
### getByteFrequencyData
#### [waangbf]
```js
${1:AnalyserNode}.getByteFrequencyData(${2:dataArray});$0
```

### getByteTimeDomainData
#### [waangbt]
```js
${1:AnalyserNode}.getByteTimeDomainData(${2:dataArray});$0
```

### getFloatFrequencyData
#### [waangff]
```js
${1:AnalyserNode}.getFloatFrequencyData(${2:dataArray});$0
```

### getFloatTimeDomainData
#### [waangft]
```js
${1:AnalyserNode}.getFloatTimeDomainData(${2:dataArray});$0
```

## AudioBuffer
### copyFromChannel
#### [waabcfc]
```js
${1:AudioBuffer}.copyFromChannel(${2:destination},${3:channelNumber},${4:startInChannel});$0
```

### copyToChannel
#### [waabctc]
```js
${1:AudioBuffer}.copyToChannel(${2:source},${3:channelNumber},${4:startInChannel});$0
```

### getChannelData
#### [waabgcd]
```js
${1:AudioBuffer}.getChannelData(${2:channel});$0
```
## AudioBufferSourceNode
### start
#### [waabsnsta]
```js
${1:AudioBufferSourceNode}.start(${2:when}, ${3:offset}, ${4:duration});$0
```
### stop
#### [waabsnsto]
```js
${1:AudioBufferSourceNode}.stop(${2:when});$0
```

## AudioContext
### close
#### [waaccl]
```js
${1:AudioContext}.close().then(${2:function() \{ /*stuff here*/\}});$0
```
### createAnalyser
#### [waacca]
```js
${1:AudioContext}.createAnalyser();$0
```
### createAudioWorker
#### [waaccaw]
```js
${1:AudioContext}.createAudioWorker();$0
```
### createBiquadFilter
#### [waaccbf]
```js
${1:AudioContext}.createBiquadFilter();$0
```
### createBuffer
#### [waaccbu]
```js
${1:AudioContext}.createBuffer(${2:numOfChannels}, ${3:length}, ${4:sampleRate});$0
```
### createBufferSource
#### [waaccbs]
```js
${1:AudioContext}.createBufferSource();$0
```
### createChannelMerger
#### [waacccm]
```js
${1:AudioContext}.createChannelMerger(${2:numOfInputs});$0
```
### createChannelSplitter
#### [waacccs]
```js
${1:AudioContext}.createChannelSplitter(${2:numOfInputs});$0
```
### createConvolver
#### [waaccco]
```js
${1:AudioContext}.createConvolver();$0
```
### createDelay
#### [waaccd]
```js
${1:AudioContext}.createDelay(${2:maxDelayTime});$0
```
### createDynamicsCompressor
#### [waaccdc]
```js
${1:AudioContext}.createDynamicsCompressor();$0
```
### createGain
#### [waaccg]
```js
${1:AudioContext}.createGain();$0
```
### createIIRFilter
#### [waaccii]
```js
${1:AudioContext}.createIIRFilter(${2:feedforward}, ${3:feedback});$0
```
### createMediaElementSource
#### [waaccme]
```js
${1:AudioContext}.createMediaElementSource(${2:myMediaElement});$0
```
### createMediaStreamDestination
#### [waaccmsd]
```js
${1:AudioContext}.createMediaStreamDestination();$0
```
### createMediaStreamSource
#### [waaccmss]
```js
${1:AudioContext}.createMediaStreamSource(${2:stream});$0
```
### createMediaStreamTrackSource
#### [waaccmsts]
```js
${1:AudioContext}.createMediaStreamTrackSource(${2:streamTrack});$0
```

### createOscillator
#### [waaccos]
```js
${1:AudioContext}.createOscillator();$0
```
### createPanner
#### [waaccp]
```js
${1:AudioContext}.createPanner();$0
```
### createPeriodicWave
#### [waaccpw]
```js
${1:AudioContext}.createPeriodicWave(${2:real}, ${3:imag}, ${4:options});$0
```
### createScriptProcessor
#### [waaccsp]
```js
${1:AudioContext}.createScriptProcessor(${2:bufferSize}, ${3:numberOfInputChannels}, ${4:numberOfOutputChannels});$0
```
### createStereoPanner
#### [waaccspa]
```js
${1:AudioContext}.createStereoPanner();$0
```
### createWaveShaper
#### [waaccws]
```js
${1:AudioContext}.createWaveShaper();$0
```
### decodeAudioData
#### [waacda]
```js
${1:AudioContext}.decodeAudioData({2:audioData}).then(${3:function(decodedData) \{/* stuff here*/\}});$0
```
### getOutputTimestamp
#### [waacgot]
```js
${1:AudioContext}.getOutputTimestamp();$0
```
### resume
#### [waacr]
```js
${1:AudioContext}.resume().then(${2:function() \{ /*stuff here */ \}});$0
```
### suspend
#### [waacsu]
```js
${1:AudioContext}.suspend().then(${2:function() \{ /*stuff here*/ \}});$0
```
## Audio Listener
### setOrientation
#### [waalso]
```js
${1:AudioListener}.setOrientation(${2:frontX},${3:frontY},${4:frontZ},${5:upX},${6:upY},${7:upZ});$0
```
### setPosition
#### [waalsp]
```js
${1:AudioListener}.setPosition(${2:x},${3:y},${4:z});$0
```
## Audio Node
### Connect
#### [waanc]
```js
${1:AudioNode}.connect(${2:AudioNode or AudioParam});$0
```

### Disconnect
#### [waand]
```js
${1:AudioNode}.disconnect(${2:destination}, ${3:output}, ${4:input});$0
```
## Audio Param
### cancelScheduledValues
#### [waapcsv]
```js
${1:AudioParam}.cancelScheduledValues(${2:startTime});$0
```
### exponentialRampToValueAtTime
#### [waapertv]
```js
${1:AudioParam}.exponentialRampToValueAtTime(${2:value}, ${3:endTime});$0
```
### linearRampToValueAtTime
#### [waaplrtv]
```js
${1:AudioParam}.linearRampToValueAtTime(${2:value}, ${3:endTime});$0
```
### setTargetAtTime
#### [waapstat]
```js
${1:AudioParam}.setTargetAtTime(${2:target}, ${3:startTime}, ${4:timeConstant});$0
```
### setValueAtTime
#### [waapsvat]
```js
${1:AudioParam}.setValueAtTime(${2:value}, ${3:startTime});$0
```
### setValueCurveAtTime
#### [waapsvcat]
```js
${1:AudioParam}.setValueCurveAtTime(${2:values}, ${3:startTime}, ${4:duration});$0
```
## Audio Worker
### addParameter
#### [waawap]
```js
${1:AudioWorker}.addParameter(${2:name}, ${3:defaultValue});$0
```
### createNode
#### [waawcn]
```js
${1:AudioWorker}.createNode(${2:numberOfInputs}, ${3:numberOfOutputs});$0
```
### removeParameter
#### [waawrp]
```js
${1:AudioWorker}.removeParameter(${2:name});$0
```

## Biquad Filter Node
### getFrequencyResponse
#### [wabf]
```js
${1:BiquadFilterNode}.getFrequencyResponse(${2:freqHz}, ${3:magResponse}, ${4:phaseResponse});$0
```
## IIR Filter Node
### getFrequencyResponse
#### [wabf]
```js
${1:IIRFilterNode}.getFrequencyResponse(${2:freqHz}, ${3:magResponse}, ${4:phaseResponse});$0
```

## Offline Audio Context
### resume
#### [waoacr]
```js
${1:OfflineAudioContext}.resume();$0
```

### startRendering
#### [waoa]
```js
${1:OfflineAudioContext}.startRendering();$0
```
### suspend
#### [waoacs]
```js
${1:OfflineAudioContext}.suspend(${2:suspendTime});$0
```

## Oscillator Node
### setPeriodicWave
#### [waonsp]
```js
${1:OscillatorNode}.setPeriodicWave(${2:periodicWave});$0
```
### start
#### [waonsta]
```js
${1:OscillatorNode}.start(${2:when});$0
```
### stop
#### [waonsto]
```js
${1:OscillatorNode}.stop(${2:when});$0
```
## Panner Node
### setOrientation
#### [wapnso]
```js
${1:PannerNode}.setOrientation(${2:x}, ${3:y}, ${4:z});$0
```
### setPosition
#### [wapnsp]
```js
${1:PannerNode}.setPosition(${2:x}, ${3:y}, ${4:z});$0
```
### setVelocity
#### [wapnsv]
```js
${1:PannerNode}.setVelocity(${2:x}, ${3:y}, ${4:z});$0
```
