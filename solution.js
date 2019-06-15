// your solution should go here
// for demo purposes use the console for any out you will need.

// Task 1
class Recipe {
	constructor() {
		this.title;
		this.servings;
		this.ingredients = [];
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
class Book {
	constructor(bookTitle, bookAuthor, alreadyRead) {
		this.bookTitle = bookTitle;
		this.bookAuthor = bookAuthor;
		this.alreadyRead = alreadyRead;
	}
}

const hobbit = new Book('The Hobbit', 'J.R.R. Tolkien', true);
const rings = new Book('The Lord of the Rings', 'J.R.R. Tolkien', false);

const books = [];
books.push(hobbit, rings);

books.forEach(book => {
	console.log(book.bookTitle);
	console.log(book.bookAuthor);
	book.alreadyRead
		? console.log(`You already read "${book.bookTitle}" by ${book.bookAuthor}`)
		: console.log(
				`You still need to read "${book.bookTitle}" by ${book.bookAuthor}`
		  );
});
