function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

Book.prototype.info = function () {
  if (this.read) {
    return `${this.title} by ${this.author}, ${this.pages} pages, has read.`;
  }

  return `${this.title} by ${this.author}, ${this.pages} pages, not yet read.`;
};

let myLibrary = [];

const addBookButton = document.querySelector(".add-book-btn");
const modal = document.querySelector(".modal");
const submitButton = document.querySelector(".submit");
const cancelButton = document.querySelector(".cancel");
const titleInput = document.querySelector("#title");
const authorInput = document.querySelector("#author");
const pagesInput = document.querySelector("#pages");
const hasReadCheckbox = document.querySelector("#read");

function addBookToLibrary(book) {
  myLibrary = [...myLibrary, book];
}

function display(library) {}

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
});

cancelButton.addEventListener("click", () => {
  modal.style.display = "none";
  resetInputs();
});
