window.onload = async () => {

    //Nosotros debemos, mediante un query string, acceder a una película para modificar.
    //En la ruta agregamos en el link el query: ?movie_id=3. 
    //Para acceder a dicho id, a travéz de location podemos acceder a todos los atributos. El atributo es search: console.log(window.location.search)
    //Para acceder al valor:

    const formulario = document.querySelector('form');
    const params = new URLSearchParams(window.location.search);
    const movieID = params.get('movie_id');

    //Para obtener dicha pelicula con ese id y traerla de la API:

    const movieFetch = async (id) => {

        try {
            const response = await fetch(`http://localhost:3031/api/movies/${id}`);
            const movie = await response.json();
            console.log(movie)
            return movie;
            
        } catch (error) {
            console.log(error)

        }
    }
    
    const movie = await movieFetch(movieID);
    formulario.title.value = movie.data.title;   //De esta forma, colocamos el value del form para que aparezca en la vista.
    formulario.rating.value = movie.data.rating;
    formulario.awards.value = movie.data.awards;
    formulario.release_date.value = movie.data.release_date.split('T')[0]; //Formato de la fecha --> split separa en un array a partir del parametro que le ingresamos, en este caso a partir de la 'T', y queremos el indice 0, que es la fecha.
    
    if(movie.data.length !== null) {
        formulario.length.value = movie.data.length;
    }else{
        formulario.length.value = 0;
    }

    //Ahora si queremos editar, tenemos que mandar los cambios al endpoint de modificar de la API, para ello:
    //Al formulario le agregamos el atributo action para que rediriga al endpoint de la API

    formulario.setAttribute('action', `http://localhost:3031/api/movies/update/${movieID}?_method=PUT`);
    formulario.setAttribute('method', `POST`);
    





}