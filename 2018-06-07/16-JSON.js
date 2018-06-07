'use strict';

const dry = [
  '2 cups all-purpose flour',
  '1 tablespoon baking powder',
  '1/2 teaspoon salt',
];

const wet = [
  '1/2 cup shortening',
  '3/4 cup milk',
];

const ingredients = {
    dry: dry,
    wet: wet,
};

const directions = [
  'Preheat oven to 450 degrees F (230 degrees C).',
  'In a large mixing bowl sift together flour, baking powder and salt. Cut in shortening with fork or pastry blender until mixture resembles coarse crumbs.',
  'Pour milk into flour mixture while stirring with a fork. Mix in milk until dough is soft, moist and pulls away from the side of the bowl.',
  'Turn dough out onto a lightly floured surface and toss with flour until no longer sticky. Roll dough out into a 1/2 inch thick sheet and cut with a floured biscuit or cookie cutter. Press together unused dough and repeat rolling and cutting procedure.',
  'Place biscuits on ungreased baking sheets and bake in preheated oven until golden brown, about 10 minutes.',
];

const recipe = {
    ingredients: ingredients,
    directions: directions,
};

const stringified = JSON.stringify(recipe);
console.log(stringified);

var parsed = JSON.parse(stringified);
console.log()
console.log(parsed);
console.log()
console.log(parsed === recipe);
