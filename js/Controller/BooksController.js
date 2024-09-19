import books from '../Model/books.js'

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
    return result.slice(0,10);
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



export default { filterByAuthor, filterByCategory, searchByTitle }