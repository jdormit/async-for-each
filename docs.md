<a name="asyncForEach"></a>

## asyncForEach(array, iterator, callback)
Iterates over an array asynchronously.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| array | <code>Array</code> | The array over which to iterate. |
| iterator | <code>function</code> | The iterator function. Called with the signature    iterator(value, index, next), where value is the    current array value, index is the current index,    and next is a function to be called when the next    iteration should occur.        IMPORTANT: if next() is never called in the iterator    function, the iteration will never complete. |
| callback | <code>function</code> | The callback function. Called with an error if one     exists when the iteration is complete. |

