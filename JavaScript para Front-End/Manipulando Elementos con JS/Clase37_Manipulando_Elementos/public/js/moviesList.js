window.addEventListener('load', () => {

    const body = document.querySelector('body');
    const titulo = document.querySelector('h1');

    const modoOscuro = confirm('¿Desea aplicar el modo oscuro?');
    if(modoOscuro){
        body.style.backgroundColor = '#7f7f7f';
        body.classList.add('fondoMoviesList');
    }

    titulo.innerHTML = 'LISTADO DE PELICULAS';
    titulo.style.color = 'white';
    titulo.style.backgroundColor = 'teal';
    titulo.style.padding = '20px';

})