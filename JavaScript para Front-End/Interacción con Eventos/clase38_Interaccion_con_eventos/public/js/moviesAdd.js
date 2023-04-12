window.onload = function(){
    let titulo = document.querySelector('.moviesAddTitulo')
    let formulario = document.querySelector('#formulario');
    let article = document.querySelector('article');

    titulo.innerHTML = 'AGREGAR PELÍCULA';
    titulo.classList.add('titulo');
    article.classList.add('fondoTransparente');
    formulario.classList.add('fondoCRUD');

    titulo.addEventListener('mouseover', () => {
        titulo.style.color = 'red';
    })
    titulo.addEventListener('mouseout', () => {
        titulo.style.color = 'black';
    })



    let contador = 0;
    const tituloInput = document.getElementById('titulo');

    tituloInput.addEventListener('keypress', (e) => {
        const secreto = 'secreto';
        let letra = e.key;

        if(letra === secreto[contador]){
            contador++;
        }else{
            contador = 0;
        }

        if(contador >= 7){
            contador = 0;
            alert('SECRETO MAGICO!!!!!!!')
        }
    })



}