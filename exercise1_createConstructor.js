"use strict";

function Book(title, author, pages, isRead){
    this.title  = title;
    this.author = author;
    this.pages  = pages;
    this.isRead = isRead;
    this.info   = function(){
        let str = (this.isRead)? 'already read' : 'not read yet';
        return `"${this.title}, ${this.author}, ${this.pages} pages, ${str}"`;
    }
}

let book1 = new Book("Jazz", "Jazzy author", 492, true);
let book2 = new Book("C", "Dennis Ritchie", 44, false);

let arrBooks = [];
arrBooks.push(book1, book2);

for( let book of arrBooks){
    console.log(book.info());
}


