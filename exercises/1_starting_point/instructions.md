# The first step

This code is "tolerable" in the sense that it works, and the compiler (or interpreter) doesn't care how "good" or "bad" the code is. However, humans do care, and when it comes to making changes to this code it's difficult to understand what to change and to figure out how these changes will interact with the rest of the system. 

In this case, there are a few changes that will need to be made: adding HTML as an output format and adding more types of plays. 

Jumping straight into adding these features will not be efficient with this current code base (discuss why with a partner, or at least spend some time thinking about it and writing down the reasons). Therefore, we need to refactor to enable future changes. The first step in refactoring is always the same: **write some tests**. These are essential as no matter what process you follow, you will make mistakes, as you are a human. Automated tests which you can run quickly every time you make a change will ensure the changes are behaving as intended, and you haven't missed anything. Writing good tests is hard, and there are whole other tutorials devoted to this task, but for now simply create some new invoices and plays data, and check that the output matches the current statement function output (each exercise has some tests with it, you shouldn't need to change these for the purposes of this exercise).

Now that we have some tests, we can do our first bit of refactoring. When faced with a long function such as this, as good place to start is by [extracting functions.](https://refactoring.com/catalog/extractFunction.html) Start by trying to extract the section of code that calculates the charge for one performance. Remember to name the new function after what it does.

## Tasks
1. Extract the section of code that calculates the charge for one performance
2. Run the tests to ensure your change maintains the original functionality