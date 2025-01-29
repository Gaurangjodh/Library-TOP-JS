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
  console.log("entered addBTL()");
  const book = new Book(title, author, pages, read, imageurl);

  myLibrary.push(book);
}


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
  favDialog.close();
});