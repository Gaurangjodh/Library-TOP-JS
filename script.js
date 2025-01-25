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
    for (const book in myLibrary) {
        if (Object.prototype.hasOwnProperty.call(myLibrary, book)) {
            const element = myLibrary[book];
            
        }
    }
}