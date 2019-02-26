# Splitting calculation and formatting

Now that we have added enough structure to our code to make it understandable, we can start to look at how we might add future functionality. In this case, we will look at adding HTML as an output format. We can easily see how to do this, as we just need to re create the seven lines of code at the top of the statement function to produce HTML. However, we need to make sure we're using the same calculation functions for Text and HTML outputs, so will look to apply Split Phase.

## Tasks
1. Apply extract function to the the code that makes up the second phase (text output) to a new function called `renderPlainText`
2. Create an object to act as an intermediate data structure between the two phases, which is passed to `renderPlainText` as an object.
3. Begin moving all the data which comes from the other parameters of `renderPlainText` (invoice and plays) to the `data` parameter. This will mean all the calculation code is in the statement function. First move the customer information to the intermediate object.
4. Add `performances` to the intermediate data structure, and delete the invoices parameter.
5. The next step is to add play name to the intermediate data. To do this we will "enrich" the performance record with information from the play. Create a new function `enrichPerformance` which copies a performance object and returns it. Apply this using the `Array.Prototype.map`.
6. Apply Move Function to `playFor` and call it from `enrichPerformance`. Replace references to `playFor` inside `renderPlainText` with to use the `data` parameter instead.
7. Move `amountFor` in the same way.
8. Move `voumeCresitsFor` in the same way.
9. Move the two calculations of the totals.
10. Optional: refactor `totalAmount` and `totalVolumeCredits` using Replace Loop with Pipeline.
11. Move all the first phase (calculation) code to it's own function `createStatementData` and its own file.

## Hints
