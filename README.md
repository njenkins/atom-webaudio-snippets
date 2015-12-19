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
