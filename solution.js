// your solution should go here
// for demo purposes use the console for any out you will need.

// Task 1
class Recipe {
	constructor() {
		this.title;
		this.servings;
		this.ingredients;
	}

	logInformation() {
		console.log(this.title);
		console.log(`Serves: ${this.servings}`);
		let ingredientString = '';
		this.ingredients.forEach(ingredient => {
			ingredientString += `${ingredient} `;
		});
		console.log(`Ingredients: ${ingredientString}`);
	}
}

const recipe = new Recipe();
recipe.title = 'Mole';
recipe.servings = 2;
recipe.ingredients = ['cinnamon', 'cumin', 'cocoa'];

recipe.logInformation();

// Task 2
