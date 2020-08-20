//DO WHILE LOOP

//A program to simulate part of the cake-baking process. Depending on the recipe, a different number of cups of sugar is required. The cups of sugar must be added to the batter one at a time. 

let cupsOfSugarNeeded = 3;
let cupsAdded = 0;

//We have a sweet tooth, so we want to add at least one cup of sugar to the batter even if the value of cupsOfSugarNeeded is 0

do {
  cupsAdded++;
} while(cupsAdded < cupsOfSugarNeeded);

console.log(cupsAdded);