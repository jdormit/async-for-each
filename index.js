/**
 * Iterates over an array asynchronously.
 *
 * <br>
 *
 * @param {Array} array - The array over which to iterate.
 * 
 * <br>
 * 
 * @param {function} iterator -
 *    The iterator function. Called with the signature
 *    iterator(value, index, next), where value is the
 *    current array value, index is the current index,
 *    and next is a function to be called when the next
 *    iteration should occur.
 *
 *    <br>
 *
 *    IMPORTANT: if next() is never called in the iterator
 *    function, the iteration will never complete.
 *
 * <br>
 *
 * @param {function} callback - 
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
