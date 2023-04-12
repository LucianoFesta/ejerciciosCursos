window.addEventListener('load', () => {

    const titulo = document.querySelector('h1');
    const article = document.querySelector('article');
    const section = document.querySelector('section');

    titulo.innerHTML = 'AGREGAR PELÍCULAS';
    titulo.classList.add('titulo');

    article.classList.add('fondoTransparente');
    section.classList.add('fondoCRUD');


})