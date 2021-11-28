"use strict";

let myLibrary = [];
let counter   = 0;

function Book(){}

//Book.prototype = Object.create(Library.prototype);

//Book.prototype.addBookToLibrary = function (arrLibrary){
function addBookToLibrary() {
     
    let localBook    = new Book();
    localBook.title  = prompt("Set the title: ");
    localBook.author = prompt("Insert an author");
    localBook.pages  = Number(prompt("How many pages have the book?"));
    let answer       = prompt("Have you read the book? (Yes/No)");
    localBook.isRead = ("yes" === answer.toLowerCase())? true : false; 
    
    myLibrary.push(localBook);
}

function displayBooks() {

    for(let book of myLibrary) {

        let tr       = document.createElement('tr');
        let tdTitle  = document.createElement('td');
        let tdAuthor = document.createElement('td');
        let tdPages  = document.createElement('td');
        let divIsRead = document.createElement('div');
        let tdIsRead = document.createElement('td');
        let btnIsRead = document.createElement('button');
        btnIsRead.classList.add('toggleStatus');
        btnIsRead.textContent = "Toggle value";
        
        let btnRow   = document.createElement('button');
        btnRow.classList.add('remove');
        btnRow.textContent = "Remove Book";
    
        let row = document.querySelector('tbody');

        tdTitle.textContent  = book.title;
        tr.appendChild(tdTitle);
        tdAuthor.textContent = book.author;
        tr.appendChild(tdAuthor);
        tdPages.textContent  = book.pages;
        tr.appendChild(tdPages);

        btnIsRead.setAttribute('id', counter);
        btnIsRead.addEventListener('click', e => toggleStatus(e.target.id));
        tdIsRead.textContent = book.isRead;
        tdIsRead.setAttribute('id', counter);
        tdIsRead.appendChild(btnIsRead);
        tr.appendChild(tdIsRead);
        
        btnRow.setAttribute('id', counter);
        btnRow.addEventListener('click', e => removeBook(e.target.id));
        tr.appendChild(btnRow);
        
        row.appendChild(tr);

        counter++;
    }

    counter = 0;

}


function removeBook(idElement){

    myLibrary.splice(Number(idElement), 1);

    let rowToRemoveView = document.getElementById(idElement);
    let parentNode      = rowToRemoveView.parentNode;
    let grandPaNode     = parentNode.parentNode;
    grandPaNode.removeChild(parentNode);
}


// Problem when change value, child disappears and the counter doesn't seem to be ok neither
function toggleStatus(idElement) {

    alert(idElement);
    myLibrary[idElement].isRead = !(myLibrary[idElement].isRead);

    let elementToToggleStatus = document.getElementById(idElement);
    alert(elementToToggleStatus.firstChild.data);
    elementToToggleStatus.textContent = !(Boolean(elementToToggleStatus.textContent));

}


// LISTENERS
const btnAdd = document.querySelector("#add");
btnAdd.addEventListener("click", addBookToLibrary);

const btnDisplay = document.querySelector('#display');
btnDisplay.addEventListener('click', displayBooks);