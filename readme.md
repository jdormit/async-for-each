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
<a name="asyncForEach"></a>

## asyncForEach(array, iterator, callback)
Iterates over an array asynchronously.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| array | <code>Array</code> | The array over which to iterate. |
| iterator | <code>function</code> | The iterator function. Called with the signature    iterator(value, index, next), where value is the    current array value, index is the current index,    and next is a function to be called when the next    iteration should occur.        IMPORTANT: if next() is never called in the iterator    function, the iteration will never complete. |
| callback | <code>function</code> | The callback function. Called with an error if one     exists when the iteration is complete. |


