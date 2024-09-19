import books from '../Model/books.js'
import { Card, FilterItem } from '../utils/components.js';
/**
 * @description Dado un autor, devuelve los libros en donde participó dicho autor
 * @param String author 
 * @returns []
 */
export async function filterByAuthor(author) {
    const libros = await books.getBooks();
    const result = libros.filter(libro => libro.authors.includes(author));
    return result;
}

/**
 * @description Dada una categoría, devuelve los libros que pertenecen a dicha categoría
 * @param String category 
 * @returns []
 */
export async function filterByCategory(category) {
    const libros = await books.getBooks();
    const result = libros.filter(libro => libro.categories.includes(category));
    return result.slice(0, 10);
}
/**
 * @description Busca un libro por su title (a partir de 3 caracteres, dados por el usuário)
 * @param String title
 * @returns []
 */
export async function searchByTitle(title) {
    if (title.length > 3) {
        const libros = await books.getBooks();
        const result = libros.filter(libro => libro.title.toLowerCase().includes(title.toLowerCase()));
        return result;
    }
}


export async function bookList() {
    const card = document.querySelector("#card-container")
    const bs = await books.getBooks()
    card.innerHTML = ""

    bs.forEach(element => {
        let tito = Card(element.thumbnailUrl, element.title, element.isbn)
        card.appendChild(tito)
    });
}

export async function authorsList() {
    const authors = await books.getAuthors();
    const list_opt = document.querySelector('#list-options');
    list_opt.innerHTML = ''
    authors.forEach(author => {
        const item = FilterItem(author);
        list_opt.appendChild(item)
    })
}

export async function categoriesList() {
    const categories = await books.getCategories();
    const list_opt = document.querySelector('#list-options');
    list_opt.innerHTML = ''
    categories.forEach(category => {
        const item = FilterItem(category);
        list_opt.appendChild(item)
    })
}


export default { filterByAuthor, filterByCategory, searchByTitle, bookList, authorsList, categoriesList }