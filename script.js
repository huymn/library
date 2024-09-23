function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

let myLibrary = [];

const addBookButton = document.querySelector(".add-book-btn");
const modal = document.querySelector(".modal");
const submitButton = document.querySelector(".submit");
const cancelButton = document.querySelector(".cancel");
const titleInput = document.querySelector("#title");
const authorInput = document.querySelector("#author");
const pagesInput = document.querySelector("#pages");
const hasReadCheckbox = document.querySelector("#read");
const booksContainer = document.querySelector(".books-container");

function addBookToLibrary(book) {
  myLibrary = [...myLibrary, book];
}

function display() {
  booksContainer.replaceChildren();
  const newBookCard = document.createElement("div");
  newBookCard.classList.add("book-card");

  myLibrary.forEach((book) => {
    const titleHeader = document.createElement("h2");
    const authorParagraph = document.createElement("p");
    const pagesParagraph = document.createElement("p");
    const hasReadParagraph = document.createElement("p");

    titleHeader.innerText = book.title;
    authorParagraph.innerText = `Author: ${book.author}`;
    pagesParagraph.innerText = `No. of Pages: ${book.pages}`;
    hasReadParagraph.innerText = book.read ? "Has read" : "Not yet read";

    newBookCard.appendChild(titleHeader);
    newBookCard.appendChild(authorParagraph);
    newBookCard.appendChild(pagesParagraph);
    newBookCard.appendChild(hasReadParagraph);

    booksContainer.appendChild(newBookCard);
  });
}

function resetInputs() {
  titleInput.value = "";
  authorInput.value = "";
  pagesInput.value = "";
  hasReadCheckbox.checked = false;
}

addBookButton.addEventListener("click", () => {
  modal.style.display = "flex";
});

submitButton.addEventListener("click", (e) => {
  e.preventDefault();
  modal.style.display = "none";
  const hasRead = hasReadCheckbox.checked ? true : false;
  const newBook = new Book(
    titleInput.value,
    authorInput.value,
    pagesInput.value,
    hasRead
  );
  addBookToLibrary(newBook);
  resetInputs();
  console.log(myLibrary);
  display();
});

cancelButton.addEventListener("click", () => {
  modal.style.display = "none";
  resetInputs();
});
