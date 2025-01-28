const myLibrary = [];

function Book(title, author, pages, readStatus, imageurl){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readStatus = readStatus;
    this.imageurl = imageurl;
}
// Book.prototype.toggleReadStatus = function(){
//   this.readStatus = "read";
// }
function addBookToLibrary(title, author, pages, readStatus, imageurl){
    const newBook = new Book(title, author, pages, readStatus, imageurl);
    myLibrary.push(newBook);
    displayBooks(title, author, pages, readStatus), imageurl;
}
const readS = document.createElement('p');
function displayBooks(title, author, pages, readStatus, imageurl = "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Gutenberg_Bible%2C_Lenox_Copy%2C_New_York_Public_Library%2C_2009._Pic_01.jpg/600px-Gutenberg_Bible%2C_Lenox_Copy%2C_New_York_Public_Library%2C_2009._Pic_01.jpg"){
  const card = document.createElement('div');
  card.classList.add('card');

  const imageBox = document.createElement('div');
  imageBox.classList.add('image');

  const bookimg = document.createElement('img');
  bookimg.classList.add('book-img');
  bookimg.setAttribute('src', imageurl);

  const heartImg = document.createElement('img');
  heartImg.classList.add('heart');
  heartImg.setAttribute('src', 'heart.svg');

  imageBox.appendChild(bookimg);
  imageBox.appendChild(heartImg);

  const textBox = document.createElement('div');
  textBox.classList.add('text-box');

  const bookTitle = document.createElement('h3');
  bookTitle.classList.add('book-title');
  bookTitle.textContent = title;

  
  readS.classList.add('readStatus');
  readS.textContent = readStatus;

  const noP = document.createElement('p');
  noP.classList.add('noPages');
  noP.textContent = `${pages} pages`;

  const authorN = document.createElement('h4');
  authorN.textContent = author;

  textBox.appendChild(bookTitle);
  textBox.appendChild(readS);
  textBox.appendChild(noP);
  textBox.appendChild(authorN);

  const buttonBox = document.createElement('div');
  buttonBox.classList.add('button-box');

  const toggle = document.createElement('button');
  toggle.classList.add('toggle');
  toggle.textContent = "Toggle Read status";

  const deleteBtn = document.createElement('button');
  deleteBtn.classList.add('delete');
  deleteBtn.textContent = "Delete";

  buttonBox.appendChild(toggle);
  buttonBox.appendChild(deleteBtn);

  card.appendChild(imageBox);
  card.appendChild(textBox);
  card.appendChild(buttonBox);

  document.querySelector(".card-holder").appendChild(card);
}

function addButton(){
  const readButton = document.createElement('button');
  readButton.classList.add('readBtn');
  readButton.innerHTML = 'Toggle read';
  return readButton;
}

// function removePreviousBooks(){
//   const totalRows = table.rows.length;
//   if(totalRows>1){
//     const count = 1;
//     for (let index = 0; index < totalRows-1; index++) {
//       table.deleteRow(count);
//     }
//   }
//   return;
// }

// function checkInputs(){
//   if(!titleOp.value || !authorOp.value || !pagesOp.value || !text){
//     return false;
//   }
//   return true;
// }

// addBookToLibrary("Lil nigga", "Kanye", 3, "read");
// addBookToLibrary("Lil ", "ye", 30, "not read");
// addBookToLibrary("igga", "west", 123, "read");
// displayBooks();


const toggleRead = document.querySelector(".readBtn");
const showButton = document.getElementById("showDialog");
const favDialog = document.getElementById("favDialog");
const confirmBtn = favDialog.querySelector("#confirmBtn");
const titleOp = document.querySelector("#title");
const authorOp = document.querySelector("#author");
const pagesOp = document.querySelector("#pages");
const imageurl = document.querySelector("#imageurl");
const toggleBtn = document.querySelector(".toggle");
const delBtn = document.querySelector(".delete");
const selectElement = document.getElementById("reads");
let selectedValue = selectElement.value;
selectElement.addEventListener("change", function() {
    selectedValue = selectElement.value;
    console.log(selectedValue);  // Logs the selected option: "Read" or "NotRead"
});

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
 
    //displayBooks();
    console.log(selectedValue);
  addBookToLibrary(titleOp.value, authorOp.value, pagesOp.value, selectedValue, imageurl);
    // removePreviousBooks();
  
  favDialog.close();
});