import BooksController from "./Controller/BooksController.js";
BooksController.bookList()

const filerValue = document.querySelector('#filerValue')
const oflabel = document.querySelector('#offcanvasExampleLabel');



filerValue.addEventListener('click', (e) => {
    oflabel.textContent = e.target.textContent

    if (e.target.textContent.toLowerCase() === 'categories') {
        BooksController.categoriesList()
    } else if (e.target.textContent.toLowerCase() === 'authors') {
        BooksController.authorsList()
    } else {
        BooksController.bookList()
    }

})