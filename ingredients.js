const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:
let i = 0;
while (i < ingredients.length) {
  console.log(ingredients[i]);
}
i = 0;

// Write a for loop that prints out the contents of ingredients:
for (i; i < ingredients.length; i++) {
  console.log(ingredients[i]);
}
i = 0;

// Write any loop (while or for) that prints out the contents of ingredients backwards:
i = ingredients.length - 1;
for (i; i >= 0; i--) {
  console.log(ingredients[i]);
}
