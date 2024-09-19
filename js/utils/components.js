/**
 * @description esta funcion nos crea un div clase card q va contener informacion del libro como la imagen el titulo y su isbn :D
 * @param String img  
 * @param String title 
 * @param String isbn 
 * @returns  Node
 */

 export function Card(img, title, isbn) {
    const carta=document.createElement("div")
    carta.classList.add("card")

    const ima =document.createElement("img")
    ima.classList.add("card-img-top")
    ima.src=img

    const titu=document.createElement("div")
    titu.classList.add("card-body")

    const  h5=document.createElement("h5")
    h5.classList.add("card-title")
    h5.textContent=title

    const a=document.createElement("a")
    a.href=isbn
    a.classList.add("btn")
    a.classList.add("btn-primary")
    a.textContent="Ver detalles"

    titu.append(h5,a)
    carta.append(ima,titu)
    return carta
}


export function FilterItem(text) {
        const li = document.createElement('li')
        // li.classList.add()
        li.textContent = text

        return li
}
export default {Card, FilterItem}

 