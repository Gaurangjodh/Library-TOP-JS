const myLibrary = []

function Book(title, author, pages, read, imageurl){
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  if(imageurl === ""){
    this.imageurl = "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Gutenberg_Bible%2C_Lenox_Copy%2C_New_York_Public_Library%2C_2009._Pic_01.jpg/600px-Gutenberg_Bible%2C_Lenox_Copy%2C_New_York_Public_Library%2C_2009._Pic_01.jpg";
  }
  else{
    this.imageurl = imageurl;
  }
}

function addBookToLibrary(title, author, pages, read, imageurl){
  const book = new Book(title, author, pages, read, imageurl);

  myLibrary.push(book);
}

function displayBooks(){
  if(myLibrary.length === 0){
    cards.innerHTML = '';
  }
  let index = 0;
  let books = '';
  myLibrary.forEach(book => {
    books += `<div class="card">
            <div class="image">
                <img class="book-img" src="${book.imageurl}" alt="Book">
                <img src="heart.svg" alt="heart" class="heart">
            </div>
            <div class="text-box">
                <h3 class="book-title">${book.title}</h3>
                <p class="readStatus">${book.read}</p>
                <p class="noPages">${book.pages} pages</p>
                <h4>${book.author}</h4>
                </div>
            <div class="button-box">
                <button class="toggle" onclick="toggleRead(${index})">Toggle Read status</button>
                <button class="delete" onclick='deleteBook(${index})'>Delete book</button>
            </div>
        </div>`;

        cards.innerHTML = books;
        index += 1;
  });
}

function toggleRead(index){
  if(myLibrary[index].read == "Read"){
    myLibrary[index].read = "Not Read";
  }
  else{
    myLibrary[index].read = "Read";
  }
  displayBooks();
}
function deleteBook(index){
  myLibrary.splice(index,1);
  displayBooks();
}

const deleteCard = document.querySelector(".delete");

const cards = document.querySelector(".card-holder");
const title = document.querySelector("#title");
const author = document.querySelector("#author");
const imageurl = document.querySelector("#imageurl");
const pages = document.querySelector("#pages");
const selectEl = document.querySelector("select");

// Dialog box controls below:-
const showButton = document.getElementById("showDialog");
const favDialog = document.getElementById("favDialog");
const confirmBtn = favDialog.querySelector("#confirmBtn");

showButton.addEventListener("click", () => {
  favDialog.showModal();
});
favDialog.addEventListener("close", (e) => {
  favDialog.close();  
});
confirmBtn.addEventListener("click", (event) => {
  event.preventDefault(); // We don't want to submit this fake form
  console.log("entered confirmBtn");
  console.log(selectEl.value);
  addBookToLibrary(title.value, author.value, pages.value, selectEl.value, imageurl.value);
  displayBooks();
  favDialog.close();
});