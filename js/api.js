export async function buscarPelicula(titulo) { // validar antes de pedir
        try{

            const respuesta = await fetch(`https://www.omdbapi.com/?t=${titulo}&apikey=a2146072`) //http://www.omdbapi.com/?i=tt3896198&apikey=a2146072
            const datos = await respuesta.json()
            return datos
        }catch(error) {
    return null
    }
}