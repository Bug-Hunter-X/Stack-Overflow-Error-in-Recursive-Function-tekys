# Stack Overflow Error in JavaScript Recursive Function

This repository demonstrates a common error in JavaScript: stack overflow errors caused by uncontrolled recursion.  The `bug.js` file contains a recursive function that, under certain inputs, will exceed the maximum call stack size, resulting in a runtime error.

The `bugSolution.js` file provides a corrected version of the function using iteration to avoid the stack overflow issue.  This solution demonstrates a more robust and efficient approach to solving the problem.

## How to reproduce the bug

1. Clone this repository.
2. Open `bug.js` and run the `foo` function with a large positive integer as the first argument (e.g., `foo(10000, 0)`).
3. Observe the stack overflow error in your console.