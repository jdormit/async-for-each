/**
 * Iterates over an array asynchronously.
 *
 * @param {Array} array - The array over which to iterate.
 * 
 * @param {function} iterator -
 *    The iterator function. Called with the signature
 *    iterator(value, index, next), where value is the
 *    current array value, index is the current index,
 *    and next is a function to be called when the next
 *    iteration should occur.
 *    
 *    IMPORTANT: if next() is never called in the iterator
 *    function, the iteration will never complete.
 *
 * @param {function} callback - 
 *     The callback function. Called with an error if one
 *     exists when the iteration is complete.
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
