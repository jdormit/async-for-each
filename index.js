/**
 * The asyncForEach iterator callback.
 * @callback iteratorCallback
 * @param value - The value currently being iterated over.
 * @param {number} index - The index currently being iterated over
 * @param {function} next - 
 *     Called to indicate that the current iteration is over.
 */
/**
 * The asyncForEach final callback.
 * @callback finalCallback
 * @param {?Error} error - Error that was raised during iteration, if any.
 */
/**
 * Iterates over an array asynchronously.
 *
 * @param {Array} array - The array over which to iterate.
 * 
 * @param {iteratorCallback} iterator -
 *    The iterator function. Called with the signature
 *    iterator(value, index, next), where value is the
 *    current array value, index is the current index,
 *    and next is a function to be called when the next
 *    iteration should occur.
 *
 *    <br><br>
 *
 *    IMPORTANT: if next() is never called in the iterator
 *    function, the iteration will never complete.
 *
 * @param {finalCallback} callback - 
 *     The callback function. Called with the signature
 *     callback(error) when the iteration is complete.
 */
var asyncForEach = function(array, iterator, callback) {
    if (!array) {
        return callback(new Error("The array is undefined or null"));
    }
    var n = -1;
    var next = function() {
        n++;
        if (n == array.length) {
            callback();
        }
        else {
            setTimeout(function() {
                iterator(array[n], n, next);
            });
        }
    }
    next();
}

module.exports = asyncForEach;
