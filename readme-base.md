# async-for-each !heading
## Asynchronous array iteration
`async-for-each` exposes a function to iterate over an array asynchronously. This is useful
for iteration that must occur in an asynchronous context, or for iterating over long arrays
without blocking the event loop.

# Installation !heading

    npm install --save async-for-each

# Usage !heading

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
#include "docs.md"
