# Web Audio API Snippets for Atom
Snippets for working with the [Web Audio API](#) within [Atom](http://atom.io)
This package currently supports AnalyserNode, AudioBuffer, AudioContext, AudioListener and AudioNode methods. More to be added.

## AnalyserNode
### getByteFrequencyData
#### [waangbf]
```js
${1:AnalyserNode}.getByteFrequencyData(${2:dataArray});
```

### getByteTimeDomainData
#### [waangbt]
```js
${1:AnalyserNode}.getByteTimeDomainData(${2:dataArray});
```

### getFloatFrequencyData
#### [waangff]
```js
${1:AnalyserNode}.getFloatFrequencyData(${2:dataArray});
```

### getFloatTimeDomainData
#### [waangft]
```js
${1:AnalyserNode}.getFloatTimeDomainData(${2:dataArray});
```

## AudioBuffer
### copyFromChannel
#### [waabcfc]
```js
${1:AudioBuffer}.copyFromChannel(${2:destination},${3:channelNumber},${4:startInChannel});
```

### copyToChannel
#### [waabctc]
```js
${1:AudioBuffer}.copyToChannel(${2:source},${3:channelNumber},${4:startInChannel});
```

### getChannelData
#### [waabgcd]
```js
${1:AudioBuffer}.getChannelData(${2:channel});
```
## AudioBufferSourceNode
### start
#### [waabsnsta]
```js
${1:AudioBufferSourceNode}.start(${2:when}, ${3:offset}, ${4:duration});
```
### stop
#### [waabsnsto]
```js
${1:AudioBufferSourceNode}.stop(${2:when});
```

## AudioContext
### close
#### [waaccl]
```js
${1:AudioContext}.close().then(${2:function() \{ /*stuff here*/\}});
```
### createAnalyser
#### [waacca]
```js
${1:AudioContext}.createAnalyser();
```
### createAudioWorker
#### [waaccaw]
```js
${1:AudioContext}.createAudioWorker();
```
### createBiquadFilter
#### [waaccbf]
```js
${1:AudioContext}.createBiquadFilter();
```
### createBuffer
#### [waaccbu]
```js
${1:AudioContext}.createBuffer(${2:numOfChannels}, ${3:length}, ${4:sampleRate});
```
### createBufferSource
#### [waaccbs]
```js
${1:AudioContext}.createBufferSource();
```
### createChannelMerger
#### [waacccm]
```js
${1:AudioContext}.createChannelMerger(${2:numOfInputs});
```
### createChannelSplitter
#### [waacccs]
```js
${1:AudioContext}.createChannelSplitter(${2:numOfInputs});
```
### createConvolver
#### [waaccco]
```js
${1:AudioContext}.createConvolver();
```
### createDelay
#### [waaccd]
```js
${1:AudioContext}.createDelay(${2:maxDelayTime});
```
### createDynamicsCompressor
#### [waaccdc]
```js
${1:AudioContext}.createDynamicsCompressor();
```
### createGain
#### [waaccg]
```js
${1:AudioContext}.createGain();
```
### createMediaElementSource
#### [waaccme]
```js
${1:AudioContext}.createMediaElementSource(${2:myMediaElement});
```
### createMediaStreamDestination
#### [waaccmsd]
```js
${1:AudioContext}.createMediaStreamDestination();
```
### createMediaStreamsource
#### [waaccmss]
```js
${1:AudioContext}.createMediaStreamSource(${2:stream});
```
### createOscillator
#### [waaccos]
```js
${1:AudioContext}.createOscillator();
```
### createPanner
#### [waaccp]
```js
${1:AudioContext}.createPanner();
```
### createPeriodicWave
#### [waaccpw]
```js
${1:AudioContext}.createPeriodicWave(${2:real}, ${3:imag}, ${4:options});
```
### createScriptProcessor
#### [waaccsp]
```js
${1:AudioContext}.createScriptProcessor(${2:bufferSize}, ${3:numberOfInputChannels}, ${4:numberOfOutputChannels});
```
### createStereoPanner
#### [waaccspa]
```js
${1:AudioContext}.createStereoPanner();
```
### createWaveShaper
#### [waaccws]
```js
${1:AudioContext}.createWaveShaper();
```
### decodeAudioData
#### [waacda]
```js
${1:AudioContext}.decodeAudioData({2:audioData}).then(${3:function(decodedData) \{/* stuff here*/\}});
```
### resume
#### [waacr]
```js
${1:AudioContext}.resume().then(${2:function() \{ /*stuff here */ \}});
```
### suspend
#### [waacsu]
```js
${1:AudioContext}.suspend().then(${2:function() \{ /*stuff here*/ \}});;
```
## Audio Listener
### setOrientation
#### [waalso]
```js
${1:AudioListener}.setOrientation(${2:frontX},${3:frontY},${4:frontZ},${5:upX},${6:upY},${7:upZ});
```
## Audio Node
### Connect
#### [waanc]
```js
${1:AudioNode}.connect(${2:AudioNode or AudioParam});
```

### Disconnect
#### [waand]
```js
${1:AudioNode}.disconnect(${2:destination}, ${3:output}, ${4:input});
```
## Audio Param
### cancelScheduledValues
#### [waapcsv]
```js
${1:AudioParam}.cancelScheduledValues(${2:startTime});
```
### exponentialRampToValueAtTime
#### [waapertv]
```js
${1:AudioParam}.exponentialRampToValueAtTime(${2:value}, ${3:endTime});
```
### linearRampToValueAtTime
#### [waaplrtv]
```js
${1:AudioParam}.linearRampToValueAtTime(${2:value}, ${3:endTime});
```
### setTargetAtTime
#### [waapstat]
```js
${1:AudioParam}.setTargetAtTime(${2:target}, ${3:startTime}, ${4:timeConstant});
```
### setValueAtTime
#### [waapsvat]
```js
${1:AudioParam}.setValueAtTime(${2:value}, ${3:startTime});
```
### setValueCurveAtTime
#### [waapsvcat]
```js
${1:AudioParam}.setValueCurveAtTime(${2:values}, ${3:startTime}, ${4:duration});
```
## Biquad Filter Node
### getFrequencyResponse
#### [wabf]
```js
${1:BiquadFilterNode}.getFrequencyResponse(${2:freqHz}, ${3:magResponse}, ${4:phaseResponse});
```
## Offline Audio Context
### startRendering
#### [waoa]
```js
${1:OfflineAudioContext}.startRendering();
```

## Oscillator Node
### setPeriodicWave
#### [waonsp]
```js
${1:OscillatorNode}.setPeriodicWave(${2:periodicWave});
```
### start
#### [waonsta]
```js
${1:OscillatorNode}.start(${2:when});
```
### stop
#### [waonsto]
```js
${1:OscillatorNode}.stop(${2:when});
```
