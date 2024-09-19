import getData from '../utils/fetchData.js' 




/**
 * @description Retorna la lista de libros.
 * @returns  []
 */
export async function getBooks() {
    const data = await getData('../../BD/amazon.books.json');

    const rs = data.slice(0,100).map(element => {
        return {
            isbn: element.isbn,
            thumbnailUrl: element.thumbnailUrl,
            title: element.title, 
            authors: element.authors,
            categories: element.categories
        }
    })


    return rs;

}
/**
 * @description Retorna la lista de autores
 * @returns []
 */
export async function getAuthors() {
    const data = await getData('../../BD/amazon.books.json');

    const rs = []
    data.slice(0,100).forEach(element => 
        
        element.authors.forEach(author => {
            if(!rs.includes(author)){
                rs.push(author)
            }
                
        })
        
    )

    return rs;

}

/**
 * @description Retorna la lista de categorías
 * @returns []
 */
export async function getCategories() {
    const data = await getData('../../BD/amazon.books.json');

    const rs = []
    data.slice(0,100).forEach(element => 
        
        element.categories.forEach(category => {
            if(!rs.includes(category)){
                rs.push(category);
            }                
        })
        
    )

    return rs;
}

/**
 * @description Retorna el libro en base al isbn 
 * @returns {*}
 */
export async function getBookDetails(isbn) {
    const data = await getData('../../BD/amazon.books.json');
    return  data.find(item => item.isbn === isbn)
}


export default { getBooks, getAuthors, getBookDetails, getCategories }