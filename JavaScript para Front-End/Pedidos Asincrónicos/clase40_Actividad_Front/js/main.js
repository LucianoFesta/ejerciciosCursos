window.onload = async () => {
  const app = document.getElementById("root");
  const container = document.createElement("div");
  container.setAttribute("class", "container");
  app.appendChild(container);

  // Aqui debemos agregar nuestro fetch

  const fetchMovies = async () => {

    try {
      
    const response = await fetch('http://localhost:3031/api/movies'); //Obtenemos los datos de la API con el ENDPOINT del listado
    const movies = await response.json(); //Convertimos de JSON a JS.
    //console.log(movies);

    return await movies;

    } catch (error) {
      console.log(error);

    }

  }

  const peliculas = await fetchMovies(); //Ejecutamos la funcion para ver el resultado en consola. Agregamos await para que no aparezca en consola cmo promesa.  
  //console.log(peliculas);


  /** Codigo que debemos usar para mostrar los datos en el frontend*/

    let data = peliculas.data;

    data.forEach((movie) => {                                   //Por cada elemento de la API(Pelíclas):
      const card = document.createElement("div");               //Crea una div y setea un atributo class de nombre card,
      card.setAttribute("class", "card");

      const h1 = document.createElement("h1");
      h1.textContent = movie.title;                             //Crea un h1, y el contenido es el titulo de la pelicula.

      const p = document.createElement("p");
      p.textContent = `Rating: ${movie.rating}`;

      const duracion = document.createElement("p");
      duracion.textContent = `Duración: ${movie.length}`;

      container.appendChild(card);                              //A los elementos creados antes, y los agregamos como elementos HIJOS del div "container"
      card.appendChild(h1);                                     //Agregamos al h1 como hijo del div 'card'
      card.appendChild(p);
      card.appendChild(duracion);
      
      if (movie.genre !== null) {
        const genero = document.createElement("p");
        genero.textContent = `Genero: ${movie.genre.name}`;
        card.appendChild(genero);
      }


      //Agragamos un boton de favorito para guardarlos en el LOCAL STORAGE

      const button = document.createElement('button');
      button.setAttribute('class', 'fav_btn');
      button.setAttribute('data-movie-id', movie.id); //Le agregamos un atributo que sea si ID.
      button.textContent = 'Fav';
      card.appendChild(button);
      
    });

    const favMovies = Array.from(document.querySelectorAll('button.fav_btn'));
    //console.log(favMovies)
    //Con el forEach logramos agregarle un addEventListener a todos los botones
    favMovies.forEach((movie, index) => {
      movie.addEventListener('click', () => {

        const localFav = localStorage.getItem('Favourite');

        if(!localFav){
          localStorage.setItem('Favourite', peliculas.data[index].title);

        }else{
          localStorage.setItem('Favourite', `${localFav}-${peliculas.data[index].title}`)
        }

      });
    });

    console.log(localStorage.getItem('Favourite').split('-')); //De esta manera separo el string en un array con cada una de las peliculas para acceder a ellas separadas.

    //FALTA TERMINAR EL ULTIMO PUNTO Y EL BOTON CREAR
};
