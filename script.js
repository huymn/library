function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

Book.prototype.info = function () {
  if (this.read) {
    return `${title} by ${author}, ${this.pages} pages, has read.`;
  }

  return `${title} by ${author}, ${this.pages} pages, not yet read.`;
};

const myLibrary = [];
const addBookButton = document.querySelector(".add-book-btn");
const modal = document.querySelector(".modal");
const submitButton = document.querySelector(".submit");
const cancelButton = document.querySelector(".cancel");

function addBookToLibrary() {}

function display() {}

addBookButton.addEventListener("click", () => {
  modal.style.display = "flex";
});

submitButton.addEventListener("click", (e) => {
  e.preventDefault();
  modal.style.display = "none";
});

cancelButton.addEventListener("click", () => {
  modal.style.display = "none";
});
