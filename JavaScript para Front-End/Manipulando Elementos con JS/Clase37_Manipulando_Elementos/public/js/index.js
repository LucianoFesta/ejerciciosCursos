window.addEventListener('load', () => {

    const main = document.querySelector('main');
    let subtitulo = document.querySelector('h2');
    const link = document.querySelector('a');
    const parrafo = document.querySelectorAll('p');
    //console.log(main, subtitulo, link, parrafo);


    const nombreUsuario = prompt('¿Cuál es tu nombre?');
    //console.log(nombreUsuario);


    if(nombreUsuario == null){
        subtitulo.innerHTML += 'Invitado';
    }else{
        subtitulo.innerHTML += nombreUsuario;
    }
    //console.log(subtitulo.innerHTML);


    subtitulo.style.textTransform = 'uppercase';


    link.style.color = '#E51B3E';


    const body = document.querySelector('body');
    const fondoPantalla = confirm('¿Desea colocar un fondo de pantalla?');
    if(fondoPantalla == true){
        body.classList.toggle('fondo')
    }


    const parrafosArray = Array.from(parrafo);
    parrafosArray.forEach((parrafoActual, index) =>{
        if(index %2 == 0){
            parrafoActual.classList.toggle('destacadoPar')
        }else{
            parrafoActual.classList.toggle('destacadoImpar')
        }
    })     
    

    main.style.display = 'block';

})