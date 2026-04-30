import { buscarPelicula } from "./api.js";
import { mostrarPeliculas, historialPeliculas, actualizarContador } from "./ui.js";

const movieInput = document.querySelector('#movie')
const btnBuscar = document.querySelector('#btn-input')
const resultado = document.querySelector('#resultado')
const peliculasGuardadas = JSON.parse(localStorage.getItem('peliculas')) || []
peliculasGuardadas.forEach((p, indice) => {
historialPeliculas(p.title, p.year, p.genre, p.director, indice, function() {
 peliculasGuardadas.splice(indice, 1)
localStorage.setItem('peliculas', JSON.stringify(peliculasGuardadas))
actualizarContador()
})
})

btnBuscar.addEventListener('click', async function(){
    if(movieInput.value){ //validar antes de petición
        try {
            resultado.textContent = 'Buscando ...'
            const datos = await buscarPelicula(movieInput.value)
            if(!datos) {
                 resultado.textContent = 'Error de conexión'
                    return
            }
            console.log(datos)

            if(datos.Response === "False"){
                resultado.textContent = 'Esta pelicula no existe'
            }else{
               const title = datos.Title      // título de la película
               const year = datos.Year       // año de estreno
               const genre = datos.Genre      // género
               const director =  datos.Director   // director
               // datos.Response   // "True" si existe, "False" si no existe
               mostrarPeliculas(title, year, genre, director)
                peliculasGuardadas.push({ title, year, genre, director })
                const indice = peliculasGuardadas.length-1
                localStorage.setItem('peliculas', JSON.stringify(peliculasGuardadas))
                

                    historialPeliculas(title, year, genre, director, indice, function(){
                        peliculasGuardadas.splice(indice, 1)
                        localStorage.setItem('peliculas', JSON.stringify(peliculasGuardadas))
                       actualizarContador()
                })
   
               actualizarContador()          
            }
            
        } catch (error) {
            resultado.textContent = 'Algo no ha ido bien '+ error
        }   
        }else{
            resultado.textContent = 'Indica una Pelicula'
        
    
    }
})








