let peliculas = require('./movies');

let moviesDH = {

    listMovies: () => {
        console.log('Lista de Peliculas:');
        peliculas.forEach((pelicula, index) => {
            console.log(`${index + 1}. - ${pelicula.titulo}`);
        });
    },

    searchMovie: (titulo) => {
        let buscarPeli = peliculas.filter(pelicula => pelicula.titulo === titulo);

        if(buscarPeli.length !== 0 ){
            //console.log('La película que buscas es:')
            return buscarPeli;
        }else{
            return null;
        }
    },

    searchMoviesByGenre: (genero) => {
        let pelisPorGenero = peliculas.filter(pelicula => pelicula.genero === genero);

        if(pelisPorGenero.length !== 0){
            console.log(`Las películas de ${genero} son: `)
            console.log(pelisPorGenero);
        }else{
            console.log(null);
        }
    },

    totalPrice: () => {
        let listaPrecios = [];
        
        peliculas.forEach(pelicula => {
            listaPrecios.push(pelicula.precio);
        })

        console.log(listaPrecios);

        let sumaPrecio = listaPrecios.reduce((acumulador, precio) => acumulador + precio);

        console.log(`El precio de todas las películas es de: $${sumaPrecio}`);
    },

    changeMovieGenre: (titulo, generoCambiar) => {
        let buscarPeli = moviesDH.searchMovie(titulo);

        buscarPeli[0].genero = generoCambiar;

        return buscarPeli;
 
    }
}

console.log(moviesDH.changeMovieGenre('Tonto y ReTonto', 'Comedia'));
console.log(peliculas);

