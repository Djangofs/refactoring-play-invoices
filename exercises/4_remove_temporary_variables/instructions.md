# Removing temporary variables

As we saw before, temporary variables can be problematic. They are only useful in their own routine, and so encourage long complex routines. We should therefore aim to replace some of them. In this exercise we will replace `format`, `totalAmount`, and `volumeCredits`.

## Tasks
1. Replace the `format` variable with a declared function that also incorporates the duplicated division by 100. 
2. Replace the `volumeCredits` variable with a function `totalVolumeCredits`.
3. Replace the `totalAmount` variable with a function `totalAmount`.

Note that due to removing the temporary variable `play` earlier it is now easier to extract the volume credits calculation.

## Hints

Replacing `volumeCredits` and `totalAmount` is hard as they are built up during a loop. There are, however, a few steps you can take to make this achievable. The first is to apply the Split Loop refactor to seperate the two accumulations. Following that, Slide Statements lets you move the declaration of the variable next to the loop. We can then use Extract Function and Inline Variable as before. 

When refactoring a temporary variable to a function with the same name, you will need to give it a random temporary name before you finish the refactoring.

You may not always take steps as short as these, particularly as you get better at refactoring. However, when things get hard, the first step should always be to make smaller steps and test those smaller steps before moving on. 

## More notes on performance
This again raises the performance issues of many repeated loops. There is an excellent explanation of this in the Refactoring book but to summarise: the impact this has on performance is negligable. We are inherently bad at judging what will and won't affect performance, a lot of the time due to "magic" (compiling, caching) going on between us writing the code and the computer executing the code. You can prove this by looking at the test execution time through the previous exercises.

Of course, sometimes our refactoring will introduce worse performance. In these cases the reccomended approach is to do it anyway, and performance tune later on when you have better code which is easier to change.