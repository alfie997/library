const addBook = document.querySelector(".add");
const newBook = document.querySelector(".new");
const details = document.querySelector(".details");
const library = document.querySelector(".library");
const dialog = document.querySelector("dialog");

const buttons = [];

const myLibrary = [];

let bookTitle = '';
let bookAuthor = '';
let bookPages = 0;
let bookRead = false;

let books = 0;

// document.body.onload = displayButtons;

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
    myLibrary.push(book);
    console.log(myLibrary);
    console.log(buttons);
}

function displayBooks() {
    // for(let i = 0; i < myLibrary.length; i++) {
    const element = document.createElement("tr");
    element.setAttribute("id", `book${books}`);
    element.innerHTML =
        `<td>${myLibrary[books].title}</td>
        <td>${myLibrary[books].author}</td>
        <td>${myLibrary[books].pages}</td>
        <td>${myLibrary[books].read}</td>`;
    library.appendChild(element);

    // library.innerHTML +=
    // `<tr id="book${books}">
    //     <td>${myLibrary[books].title}</td>
    //     <td>${myLibrary[books].author}</td>
    //     <td>${myLibrary[books].pages}</td>
    //     <td>${myLibrary[books].read}</td>
    // </tr>`;
    // }
}

function displayButtons() {
    // for(let i = 0; i < myLibrary.length; i++) {
        // if(!(buttons[i] === undefined) && books !== 0) {
        //     buttons[i].parentElement.remove();
        //     buttons.splice(i, 1);
        // }

        const newButton = document.createElement("button");
        newButton.className = "remove";
        const newContent = document.createTextNode("remove book");
        newButton.appendChild(newContent);
        buttons.push(newButton);

        const newTd = document.createElement("td");
        newTd.appendChild(newButton);
        // console.log(newTd);

        const currentTr = document.getElementById(`book${books}`);
        // console.log(currentTr);
        currentTr.appendChild(newTd);
        // buttons.push(newTd);
    // }
}

function handleButtons() {
    // for(let i = 0; i < buttons.length; i++) {
    //     buttons[i].addEventListener("click", (e) => {
    //         // console.log(e instanceof Event);
    //         const element = document.querySelector(`#book${i}`);
    //         if(!(element === null)) {
    //             element.remove();
    //         }
    //         if(!(buttons[i] === undefined)) {
    //             buttons[i].remove();
    //         }
    //         myLibrary.splice(i, 1);
    //         console.log(myLibrary);
    //         buttons.splice(i, 1);
    //         console.log(buttons);
    //         console.log(buttons.length);
    //         books = i;
    //         console.log(books);
    //     });
    // }

    let book = null;

    for(let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("mouseenter", (e) => {
            // console.log(e);
            book = i;
            console.log(book);
        });

        // if(!(book === null)) {
            buttons[i].addEventListener("click", (e) => {
                console.log(book);
                // books--;
                const element = document.querySelector(`#book${book}`);
                if(!(element === null)) {
                    element.remove();
                }
                // buttons[book].remove();
                myLibrary.splice(book, 1);
                console.log(myLibrary);
                buttons.splice(book, 1);
                console.log(buttons);
                books--;
            });
        // }
    }
}

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

    displayBooks();

    displayButtons();

    handleButtons();

    books++;

    bookTitle = '';
    bookAuthor = '';
    bookPages = 0;

    document.getElementById("title").value = "";
    document.getElementById("author").value = "";
    document.getElementById("pages").value = 0;

    dialog.close();
});

newBook.addEventListener("click", (e) => {
    dialog.showModal();
});

const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 295, false);
myLibrary.push(theHobbit);
displayBooks();
displayButtons();
handleButtons();
books++;

const theManWhoWasThursday = new Book('The Man Who Was Thursday', 'G.K. Chesterton', 138, true);
myLibrary.push(theManWhoWasThursday);
displayBooks();
displayButtons();
handleButtons();
books++;

const abcOfReading = new Book('ABC of Reading', 'Ezra Pound', 224, true);
myLibrary.push(abcOfReading);
displayBooks();
displayButtons();
handleButtons();
books++;

const languageTruthAndLogic = new Book('Language, Truth, and Logic', 'A.J. Ayer', 160, false);
myLibrary.push(languageTruthAndLogic);
displayBooks();
displayButtons();
handleButtons();
books++;

console.log(myLibrary);
console.log(buttons);

// console.log(theHobbit.info());
// console.log(theManWhoWasThursday.info());
// console.log(abcOfReading.info());

// displayBooks();

// displayButtons();

// handleButtons();