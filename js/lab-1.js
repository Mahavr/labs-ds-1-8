const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.38,
    genres: ["adventure", "history"],
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    rating: 8.51,
    genres: ["fiction"],
  },
  {
    title: "The Dream of a Ridiculous Man",
    author: "Fyodor Dostoevsky",
    rating: 7.75,
    genres: ["horror", "mysticism"],
  },
  {
    title: "Redder Than Blood",
    author: "Tanith Lee",
    rating: 7.94,
    genres: ["fiction", "horror"],
  },
];
console.log("Початковий вигляд масива (завд. 1-3)");
console.table(books);
/*
  |============================
  | task-1
  |============================
*/
// Використовуючи метод find(), доповни код таким чином, щоб:
// У змінній bookWithTitle утворився об'єкт книги, назва якої (властивість title)
// збігається зі значенням змінної BOOK_TITLE.
// У змінній bookByAuthor утворився об'єкт книги, автор якої
// (властивість author) збігається зі значенням змінної AUTHOR.
console.warn("метод find()");
const BOOK_TITLE = "The Dream of a Ridiculous Man";
const AUTHOR = "Robert Sheckley";

const bookWithTitle = books.find(({ title }) => title === BOOK_TITLE);
const bookByAuthor = books.find(({ author }) => author === AUTHOR);
console.log("Виведення книги за заданою назвою");
console.table(bookWithTitle);
console.log("Виведення книги за заданим автором");
console.table(bookByAuthor);

/*
  |============================
  | task-2
  |============================
*/
// Використовуючи метод map(), зроби так, щоб у змінній titles вийшов масив
// назв книг(властивість title) з усіх об'єктів масиву books.
console.warn(" метод map()");
const titles = books.map((book) => book.title);
console.log(titles);
/*
  |============================
  | task-3
  |============================
*/
// Використовуючи метод flatMap(), зроби так, щоб у змінній genres вийшов масив
//  усіх жанрів книг(властивість genres) з масиву книг books.
console.warn(" метод flatMap()");
const genres = books.flatMap((book) => book.genres);
console.log(genres);
/*
  |============================
  | task-4
  |============================
*/
// Доповни код таким чином, щоб у змінній evenNumbers утворився масив парних чисел
// з масиву numbers, а в змінній oddNumbers - масив непарних.
// Обов'язково використовуй метод filter().
console.warn("метод filter()");
const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
console.log("Початковий масив: " + numbers);
const evenNumbers = numbers.filter((number) => number % 2 === 0);
const oddNumbers = numbers.filter((number) => !(number % 2 === 0));
console.log(
  "Парні числа: " + evenNumbers + " " + "Непарні числа: " + oddNumbers
);
/*
  |============================
  | task-5
  |============================
*/
// Використовуючи метод every(), доповни код таким чином, щоб:
// У змінній eachElementInFirstIsEven був результат перевірки всіх елементів масиву firstArray
//  на парність.
// У змінній eachElementInFirstIsOdd був результат перевірки всіх елементів масиву firstArray
// на непарність.
console.warn("метод every()");
const firstArray = [26, 94, 36, 18];
const secondArray = [17, 61, 23];
const thirdArray = [17, 26, 94, 61, 36, 23, 18];
console.log("Перший масив: " + firstArray);
console.log("Другий масив: " + secondArray);
console.log("Третій масив: " + thirdArray);
const eachElementInFirstIsEven = firstArray.every((value) => value % 2 === 0);
const eachElementInFirstIsOdd = firstArray.every((value) => !(value % 2 === 0));
const eachElementInSecondIsEven = secondArray.every((value) => value % 2 === 0);
const eachElementInSecondIsOdd = secondArray.every(
  (value) => !(value % 2 === 0)
);
const eachElementInThirdIsEven = thirdArray.every((value) => value % 2 === 0);
const eachElementInThirdIsOdd = thirdArray.every((value) => !(value % 2 === 0));
console.log(
  "Перевіка чи всі числа першого масиву парні: " + eachElementInFirstIsEven
);
console.log(
  "Перевіка чи всі числа першого масиву непарні: " + eachElementInFirstIsOdd
);
console.log(
  "Перевіка чи всі числа другого масиву парні: " + eachElementInSecondIsEven
);
console.log(
  "Перевіка чи всі числа другого масиву непарні: " + eachElementInSecondIsOdd
);
console.log(
  "Перевіка чи всі числа третього масиву парні: " + eachElementInThirdIsEven
);
console.log(
  "Перевіка чи всі числа третього масиву непарні: " + eachElementInThirdIsOdd
);
/*
  |============================
  | task-6
  |============================
*/
// Ігровому сервісу необхідний функціонал підрахунку середнього часу,
// проведеного в іграх.Доповни код таким чином, щоб у змінній totalPlayTime
// вийшло загальний ігровий час з масиву playtimes.
console.warn("метод reduce()");
const players = {
  mango: 1270,
  poly: 468,
  ajax: 710,
  kiwi: 244,
};
console.log("Час проведений в іграх");
console.table(players);
const playtimes = Object.values(players);

const totalPlayTime = playtimes.reduce((previousValue, number) => {
  return previousValue + number;
}, 0);

const averagePlayTime = totalPlayTime / playtimes.length;
console.log(
  "Середнє значення часу проведоного в іграх " + averagePlayTime + " год"
);
/*
  |============================
  | task-7
  |============================
*/
// Онлайн бібіліотеці необхідно відображати книги, відсортовані за автором, в алфавітному і
// зворотному алфавітному порядку.Доповни код таким чином, щоб у змінній
// authorsInAlphabetOrder вийшла копія масиву authors, відсортована за алфавітом,
// а у змінній authorsInReversedOrder - копія, відсортована у зворотному алфавітному порядку.
console.warn("метод sort()-1");
const authors = [
  "Tanith Lee",
  "Bernard Cornwell",
  "Robert Sheckley",
  "Fyodor Dostoevsky",
  "Howard Lovecraft",
];
console.log("Масив авторів: " + authors);
const authorsInAlphabetOrder = [...authors].sort((a, b) => a.localeCompare(b));

const authorsInReversedOrder = [...authors].sort((a, b) => b.localeCompare(a));
console.log(
  "Масив авторів відсортованих за алфавітом: " + authorsInAlphabetOrder
);
console.log(
  "Масив авторів відсортовани у зворотному алфавітному порядку: " +
    authorsInReversedOrder
);
/*
  |============================
  | task-8
  |============================
*/
// Онлайн бібіліотеці необхідно відображати книги, відсортовані за датою видання,
// за її зростанням або спаданням.Доповни код таким чином,
// щоб у змінній ascendingReleaseDates вийшла копія масиву releaseDates, відсортована
// за зростанням, а у змінній descendingReleaseDates - копія, відсортована за спаданням.
console.warn("метод sort()-2");
const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
console.log("Вихідний масив: " + releaseDates);
const ascendingReleaseDates = [...releaseDates].sort((a, b) => a - b);
const descendingReleaseDates = [...releaseDates].sort((a, b) => b - a);
console.log("За зростанням: " + ascendingReleaseDates);
console.log("За спаданням: " + descendingReleaseDates);