<a name="asyncForEach"></a>

## asyncForEach(array, iterator, callback)
Iterates over an array asynchronously.

<br>

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| array | <code>Array</code> | The array over which to iterate. <br> |
| iterator | <code>function</code> | The iterator function. Called with the signature    iterator(value, index, next), where value is the    current array value, index is the current index,    and next is a function to be called when the next    iteration should occur.    <br>    IMPORTANT: if next() is never called in the iterator    function, the iteration will never complete. <br> |
| callback | <code>function</code> | The callback function. Called with the signature     callback(error) when the iteration is complete. |

