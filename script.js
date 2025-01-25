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

const table = document.querySelector("#bookTable");
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

addBookToLibrary("Lil nigga", "Kanye", 3, "read");
addBookToLibrary("Lil ", "ye", 30, "not read");
addBookToLibrary("igga", "west", 123, "read");
displayBooks();