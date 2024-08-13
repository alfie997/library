const addBook = document.querySelector(".add");
const newBook = document.querySelector(".new");
// const removeBook = document.querySelector(".remove");
// let removeBook;
const details = document.querySelector(".details");
const library = document.querySelector(".library");
const dialog = document.querySelector("dialog");

const buttons = [];

const myLibrary = [];

let bookTitle = '';
let bookAuthor = '';
let bookPages = 0;
let bookRead = false;

// let books = 0;

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
    console.log(buttons);
}

function displayBooks(books) {
    library.innerHTML +=
    `<tr id="book${books}">
        <td>${myLibrary[books].title}</td>
        <td>${myLibrary[books].author}</td>
        <td>${myLibrary[books].pages}</td>
        <td>${myLibrary[books].read}</td>
    </tr>`;

    // const newButton = document.createElement("button");
    // newButton.className = "remove";
    // const newContent = document.createTextNode("remove book");
    // newButton.appendChild(newContent);
    // buttons.push(newButton);
    // const newTd = document.createElement("td");
    // // newTr.innerHTML = newButton;
    // newTd.appendChild(newButton);
    // console.log(newTd);
    // const currentTr = document.getElementById("book0");
    // console.log(currentTr);
    // // document.body.insertBefore(newTd, currentTr);
    // currentTr.appendChild(newTd);
}

function displayButtons() {
    for(let i = 0; i < myLibrary.length; i++) {
        const newButton = document.createElement("button");
        newButton.className = "remove";
        const newContent = document.createTextNode("remove book");
        newButton.appendChild(newContent);
        buttons.push(newButton);
        const newTd = document.createElement("td");
        // newTr.innerHTML = newButton;
        newTd.appendChild(newButton);
        console.log(newTd);
        const currentTr = document.getElementById(`book${i}`);
        console.log(currentTr);
        // document.body.insertBefore(newTd, currentTr);
        currentTr.appendChild(newTd);
    }
}

function handleButtons() {
    buttons[books-1].addEventListener("click", (e) => {
        const element = document.querySelector(`#book${books-1}`);
        if(!(element === null)) {
            element.remove();
        }
        buttons[books-1].remove();
        myLibrary.splice(books-1, 1);
        console.log(myLibrary);
        buttons.splice(books-1, 1);
        console.log(buttons);
        books--;
    });
}

const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 295, false);
myLibrary.push(theHobbit);
const theManWhoWasThursday = new Book('The Man Who Was Thursday', 'G.K. Chesterton', 138, true);
myLibrary.push(theManWhoWasThursday);
const abcOfReading = new Book('ABC of Reading', 'Ezra Pound', 224, true);
myLibrary.push(abcOfReading);

// console.log(theHobbit.info());
// console.log(theManWhoWasThursday.info());
// console.log(abcOfReading.info());

for(let i = 0; i < myLibrary.length; i++) {
    displayBooks(i);

    // buttons[i].addEventListener("click", (e) => {
    //     const element = document.querySelector(`#book${i}`);
    //     if(!(element === null)) {
    //         element.remove();
    //     }
    //     buttons[i].remove();
    //     myLibrary.splice(i, 1);
    //     console.log(myLibrary);
    //     buttons.splice(i, 1);
    //     console.log(buttons);
    // });
}

displayButtons();

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

    books++;
    
    handleButtons();

    bookTitle = '';
    bookAuthor = '';
    bookPages = 0;

    document.getElementById("title").value = "";
    document.getElementById("author").value = "";
    document.getElementById("pages").value = 0;

    dialog.close();

    // library.innerHTML +=
    //     `<tr id="book${books}">
    //         <td>${bookTitle}</td>
    //         <td>${bookAuthor}</td>
    //         <td>${bookPages}</td>
    //         <td>${bookRead}</td>
    //     </tr>`;

    // const newButton = document.createElement("button");
    // newButton.className = "remove";
    // const newContent = document.createTextNode("remove book");
    // newButton.appendChild(newContent);
    // buttons.push(newButton);
    // const currentTr = document.getElementById(`"book${books}"`);
    // document.body.insertBefore(newButton, currentTr);

    // for(let i = 0; i < buttons.length; i++) {
    //     buttons[i].addEventListener("click", (e) => {
    //         const element = document.querySelector("tr");
    //         if(!(element === null)) {
    //             element.remove();
    //         }
    //     });
    // }

    // library.appendChild(newButton);
});

newBook.addEventListener("click", (e) => {
    dialog.showModal();
});

// for(let i = 0; i < buttons.length; i++) {
//     // const button = buttons[i];
//     buttons[i].addEventListener("click", (e) => {
//         // const element = document.querySelector("tr");
//         console.log(i);
//         const element = document.querySelector(`#book${i}`);
//         if(!(element === null)) {
//             element.remove();
//         }
//         buttons[i].remove();
//         myLibrary.splice(i, 1);
//         console.log(myLibrary);
//         buttons.splice(i, 1);
//         console.log(buttons);
//     });
// }

// removeBook.addEventListener("click", (e) => {
//     // removeBook.remove();
//     const element = document.querySelector("tr");
//     element.remove();
//     // library.innerHTML -= `
//     //     <tr>
//     //         <td>${bookTitle}</td>
//     //         <td>${bookAuthor}</td>
//     //         <td>${bookPages}</td>
//     //         <td>${bookRead}</td>
//     //     </tr>`;
// });