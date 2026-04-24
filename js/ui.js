const resultado = document.querySelector('#resultado')
const lista = document.querySelector('#lista')

export function mostrarPeliculas(Title, Year, Genre, Director){
            resultado.textContent = `Pelicula: ${Title}, Año: ${Year}, Género: ${Genre}, Director: ${Director}`
}

export function historialPeliculas(Title, Year, Genre, Director){
    const nuevoLi = document.createElement('li')//creamos la lista
    nuevoLi.textContent = `Pelicula: ${Title}, Año: ${Year}, Género: ${Genre}, Director: ${Director}`
    const btnEliminar = document.createElement('button')
    btnEliminar.textContent = 'Eliminar'
    btnEliminar.addEventListener('click', function(){
        nuevoLi.remove()
        actualizarContador()
    })
    nuevoLi.appendChild(btnEliminar)
    lista.appendChild(nuevoLi)
    actualizarContador()

}

export function actualizarContador(){
    //contador
    document.querySelector('#contador').textContent=`Películas: `+ lista.children.lenght

}



