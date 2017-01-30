# async-for-each
## Asynchronous array iteration
`async-for-each` exposes a function to iterate over an array asynchronously. This is useful
for iteration that must occur in an asynchronous context, or for iterating over long arrays
without blocking the event loop.

# Installation

    npm install --save async-for-each

# Usage

```javascript
const asyncForEach = require("async-for-each");
    
const arr = [1, 2, 3, 4, 5];
asyncForEach(arr, function(value, index, next) {
    console.log("The value at %s is %s", index, value);
    doSomethingAsyncWithValue(value, function() {
        next();
    });
}, function() {
    console.log("Iteration complete!");
});
```
# API
## Functions

<dl>
<dt><a href="#asyncForEach">asyncForEach(array, iterator, callback)</a></dt>
<dd><p>Iterates over an array asynchronously.</p>
</dd>
</dl>

## Typedefs

<dl>
<dt><a href="#iteratorCallback">iteratorCallback</a> : <code>function</code></dt>
<dd><p>The asyncForEach iterator callback.</p>
</dd>
<dt><a href="#finalCallback">finalCallback</a> : <code>function</code></dt>
<dd><p>The asyncForEach final callback.</p>
</dd>
</dl>

<a name="asyncForEach"></a>

## asyncForEach(array, iterator, callback)
Iterates over an array asynchronously.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| array | <code>Array</code> | The array over which to iterate. |
| iterator | <code>[iteratorCallback](#iteratorCallback)</code> | The iterator function. Called with the signature    iterator(value, index, next), where value is the    current array value, index is the current index,    and next is a function to be called when the next    iteration should occur.    <br><br>    IMPORTANT: if next() is never called in the iterator    function, the iteration will never complete. |
| callback | <code>[finalCallback](#finalCallback)</code> | The callback function. Called with the signature     callback(error) when the iteration is complete. |

<a name="iteratorCallback"></a>

## iteratorCallback : <code>function</code>
The asyncForEach iterator callback.

**Kind**: global typedef  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | The value currently being iterated over. |
| index | <code>number</code> | The index currently being iterated over |
| next | <code>function</code> | Called to indicate that the current iteration is over. |

<a name="finalCallback"></a>

## finalCallback : <code>function</code>
The asyncForEach final callback.

**Kind**: global typedef  

| Param | Type | Description |
| --- | --- | --- |
| error | <code>Error</code> | Error that was raised during iteration, if any. |


