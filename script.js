const myLibrary = []

function Book(title, author, pages, read, imageurl="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Gutenberg_Bible%2C_Lenox_Copy%2C_New_York_Public_Library%2C_2009._Pic_01.jpg/600px-Gutenberg_Bible%2C_Lenox_Copy%2C_New_York_Public_Library%2C_2009._Pic_01.jpg"){
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.imageurl = imageurl;
}

function addBookToLibrary(){
  const book = new Book();
}





// Dialog box controls below:-
const showButton = document.getElementById("showDialog");
const favDialog = document.getElementById("favDialog");
const selectEl = favDialog.querySelector("select");
const confirmBtn = favDialog.querySelector("#confirmBtn");

showButton.addEventListener("click", () => {
  favDialog.showModal();
});
favDialog.addEventListener("close", (e) => {
  favDialog.close();  
});
confirmBtn.addEventListener("click", (event) => {
  event.preventDefault(); // We don't want to submit this fake form
  console.log(selectEl.value);
  favDialog.close(selectEl.value); // Have to send the select box value here.
});