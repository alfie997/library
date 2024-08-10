const addBook = document.querySelector(".add");
const newBook = document.querySelector(".new");
const details = document.querySelector(".details");
const library = document.querySelector(".library");

const myLibrary = [];

let bookTitle = '';
let bookAuthor = '';
let bookPages = 0;
let bookRead = false;

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        let state;
        if(read) {
            state = "read";
        } else {
            state = "not read yet";
        }
        return `${title} by ${author}, ${pages} pages, ${state}.`
    }
}

function addBookToLibrary(title, author, pages, read) {
    const book = new Book(title, author, pages, read);
    console.log(book.info());
    // const abcOfReading = new Book('ABC Of Reading', 'Ezra Pound', 130, true);
    // console.log(abcOfReading.info());
    // myLibrary.push(abcOfReading);
    myLibrary.push(book);
    console.log(myLibrary);
}

function displayBooks() {
    for(let i = 0; i < myLibrary.length; i++) {
        library.innerHTML +=
        `<tr>
            <td>${myLibrary[i].title}</td>
            <td>${myLibrary[i].author}</td>
            <td>${myLibrary[i].pages}</td>
            <td>${myLibrary[i].read}</td>
        </tr>`;
    }
}

const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 295, false);
myLibrary.push(theHobbit);

const theManWhoWasThursday = new Book('The Man Who Was Thursday', 'G.K. Chesterton', 138, true);
myLibrary.push(theManWhoWasThursday);

console.log(theHobbit.info());
console.log(theManWhoWasThursday.info());

displayBooks();

addBook.addEventListener("click", (e) => {
    bookTitle = document.getElementById("title").value;
    bookAuthor = document.getElementById("author").value;
    bookPages = parseInt(document.getElementById("pages").value);
    if(document.getElementById("yes").checked) {
        bookRead = true;
    } else if(document.getElementById("no").checked) {
        bookRead = false;
    }

    addBookToLibrary(bookTitle, bookAuthor, bookPages, bookRead);

    library.innerHTML +=
        `<tr>
            <td>${bookTitle}</td>
            <td>${bookAuthor}</td>
            <td>${bookPages}</td>
            <td>${bookRead}</td>
        </tr>`;

    document.getElementById("title").value = "";
    document.getElementById("author").value = "";
    document.getElementById("pages").value = 0;
});

// newBook.addEventListener("click", (e) => {

// });