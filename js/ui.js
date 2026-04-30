const resultado = document.querySelector('#resultado')
const lista = document.querySelector('#lista')

export function mostrarPeliculas(title, year, genre, director){
            resultado.textContent = `Pelicula: ${title}, Año: ${year}, Género: ${genre}, Director: ${director}`
}

export function historialPeliculas(title, year, genre, director, indice, onEliminar){
    const nuevoLi = document.createElement('li')//creamos la lista
    nuevoLi.textContent = `Pelicula: ${title}, Año: ${year}, Género: ${genre}, Director: ${director}`
    const btnEliminar = document.createElement('button')
    btnEliminar.textContent = 'Eliminar'
    btnEliminar.addEventListener('click', function(){
        nuevoLi.remove()
        onEliminar()
        actualizarContador()
    })
    nuevoLi.appendChild(btnEliminar)
    lista.appendChild(nuevoLi)
    actualizarContador()

}

export function actualizarContador(){
    //contador
    document.querySelector('#contador').textContent=`Películas: `+ lista.children.length

}



