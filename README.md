# Web Audio API Snippets for Atom
A few snippets for working with the [Web Audio API](#) within [Atom](http://atom.io)

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
