import { buscarPelicula } from "./api.js";
import { mostrarPeliculas, historialPeliculas, actualizarContador } from "./ui.js";

const movieInput = document.querySelector('#movie')
const btnBuscar = document.querySelector('#btn-input')
const resultado = document.querySelector('#resultado')

btnBuscar.addEventListener('click', async function(){
    if(movieInput.value){ //validar antes de petición
        try {
            resultado.textContent = 'Buscando ...'
            const datos = await buscarPelicula(movieInput.value)

            if(datos.error){
                resultado.textContent = 'Esta pelicula no existe'
            }else{
                
               const title =  datos.Title      // título de la película
               const year = datos.Year       // año de estreno
               const genre = datos.Genre      // género
               const director =  datos.Director   // director
               // datos.Response   // "True" si existe, "False" si no existe
               mostrarPeliculas()
               actualizarContador()
            }
            
        } catch (error) {
            resultado.textContent = 'Algo no ha ido bien '+ error
        }   
        }else{
            resultado.textContent = 'Indica una Pelicula'
        
    
    }
})








