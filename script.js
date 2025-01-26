const myLibrary = [];

function Book(title, author, pages, readStatus){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readStatus = readStatus;
}

function addBookToLibrary(title, author, pages, readStatus){
    const newBook = new Book(title, author, pages, readStatus);
    myLibrary.push(newBook);
}

function displayBooks(){
  for (let index = 0; index < myLibrary.length; index++) {
    const book = myLibrary[index];
    let row = table.insertRow(index+1);
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        let cell3 = row.insertCell(2);
        let cell4 = row.insertCell(3);
        let cell5 = row.insertCell(4);
        
        cell1.innerText = `${index+1}`;
        cell2.innerText = `${book.title}`;
        cell3.innerText = `${book.author}`;
        cell4.innerText = `${book.pages}`;
        cell5.innerText = `${book.readStatus}`;
      }
}

function removePreviousBooks(){
  const totalRows = table.rows.length;
  if(totalRows>1){
    const count = 1;
    for (let index = 0; index < totalRows-1; index++) {
      table.deleteRow(count);
    }
  }
  return;
}

function checkInputs(){
  if(!titleOp.value || !authorOp.value || !pagesOp.value || !readOp.value){
    return false;
  }
  return true;
}

// addBookToLibrary("Lil nigga", "Kanye", 3, "read");
// addBookToLibrary("Lil ", "ye", 30, "not read");
// addBookToLibrary("igga", "west", 123, "read");
// displayBooks();

const table = document.querySelector("#bookTable");

const showButton = document.getElementById("showDialog");
const favDialog = document.getElementById("favDialog");
const confirmBtn = favDialog.querySelector("#confirmBtn");
const titleOp = document.querySelector("#title");
const authorOp = document.querySelector("#author");
const pagesOp = document.querySelector("#pages");
const readOp = document.querySelector("#read");
const deleteBook = document.querySelector("#deleteBook");
const output = document.querySelector(".output");

deleteBook.addEventListener("click", () => {
  if(table.rows.length > 1){
    table.deleteRow(-1);
    output.textContent = ``
  }
  else{
    output.textContent = `Nothing to delete here.`
  }
})

// "Show the dialog" button opens the <dialog> modally
showButton.addEventListener("click", () => {
  favDialog.showModal();
});

// "Cancel" button closes the dialog without submitting because of [formmethod="dialog"], triggering a close event.
favDialog.addEventListener("close", (e) => {
  favDialog.close();
  // Have to check for "default" rather than empty string
});

// Prevent the "confirm" button from the default behavior of submitting the form, and close the dialog with the `close()` method, which triggers the "close" event.
confirmBtn.addEventListener("click", (event) => {
  event.preventDefault(); // We don't want to submit this fake form
  //addBookToLibrary(titleOp.textContent) // Have to send the select box value here.
  if(checkInputs()){
    //displayBooks();
    addBookToLibrary(titleOp.value, authorOp.value, pagesOp.value, readOp.value);
    removePreviousBooks();
    displayBooks();
    output.textContent = ``;
  }
  favDialog.close();
});