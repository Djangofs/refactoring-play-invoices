# Refining the extracted function

The next natural step is to see what improvements we can make to the piece of code we extracted. We can rename the variables to match some coding styles, remove a temporary variable, and see where else we can re use this function 

## Tasks
1. Rename the returned value to `result`, a common standard.
2. Rename the `perf` parameter to something less ambigious. Try making it more explicit or including some information about its type.
3. Remove the temporary variable `play` to it's own query function using [Replace Temp with Query](https://refactoring.com/catalog/replaceTempWithQuery.html) and [Inline Variable](https://refactoring.com/catalog/inlineVariable.html)
4. Replace the parameter `play` with the new query function using [Replace Parameter with Query](https://refactoring.com/catalog/replaceParameterWithQuery.html)
5. Apply [Inline Variable](https://refactoring.com/catalog/inlineVariable.html) to any other places where amountFor can be applied. 

### A note
You might be alarmed by some of the refactoring here as it increases the number of function calls by a factor of three in some cases. We will come back to this later, but for now make a note of test execution time between your changes and notice if there are any significant increases. We will also see the benefits of removing local variables and replacing them with queries in exercise 3.