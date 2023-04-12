window.addEventListener('load', () => {

    document.getElementById('title').focus();

    let formulario = document.getElementById('formulario');
    formulario.addEventListener('submit', e => {
        let errores = [];

        let titulo = document.getElementById('title');
        if(titulo.value.length <= 0){
            titulo.classList.add('is-invalid');
            titulo.classList.remove('is-valid');
            errores.push('El campo nombre no puede estar vacío');
        }else{
            titulo.classList.add('is-valid');
            titulo.classList.remove('is-invalid');
        }


        let rating = document.getElementById('rating');
        if(rating.value.length <= 0){
            rating.classList.add('is-invalid');
            rating.classList.remove('is-valid');
            errores.push('El campo rating no puede estar vacío');
        }else{
            rating.classList.add('is-valid');
            rating.classList.remove('is-invalid');
        }


        let awards = document.getElementById('awards');
        if(awards.value.length <= 0){
            awards.classList.add('is-invalid');
            awards.classList.remove('is-valid');
            errores.push('El campo premios no puede estar vacío');
        }else{
            awards.classList.add('is-valid');
            awards.classList.remove('is-invalid');
        }


        let releaseDate = document.getElementById('release_date');
        if(releaseDate.value.length <= 0){
            releaseDate.classList.add('is-invalid');
            releaseDate.classList.remove('is-valid');
            errores.push('El campo fecha de estreno no puede estar vacío');
        }else{
            releaseDate.classList.add('is-valid');
            releaseDate.classList.remove('is-invalid');
        }


        let length = document.getElementById('length');
        if(length.value.length <= 0){
            length.classList.add('is-invalid');
            length.classList.remove('is-valid');
            errores.push('El campo duración no puede estar vacío');
        }else{
            length.classList.add('is-valid');
            length.classList.remove('is-invalid');
        }


        let genero = document.getElementById('genre_id');
        if(genero.value === ''){
            genero.classList.add('is-invalid');
            genero.classList.remove('is-valid');
            errores.push('El campo genero no puede estar vacío');
        }else{
            genero.classList.add('is-valid');
            genero.classList.remove('is-invalid');
        }



        if(awards.value <= 0 || awards.value > 10){
            awards.classList.add('is-invalid');
            awards.classList.remove('is-valid');
            errores.push('Premios debe estar entre 0 y 10');
        }else{
            awards.classList.add('is-valid');
            awards.classList.remove('is-invalid');
        }


        if(rating.value <= 0 || rating.value > 10){
            rating.classList.add('is-invalid');
            rating.classList.remove('is-valid');
            errores.push('Rating debe estar entre 0 y 10');
        }else{
            rating.classList.add('is-valid');
            rating.classList.remove('is-invalid');
        }


        if(length.value < 60 || length.value > 360){
            length.classList.add('is-invalid');
            length.classList.remove('is-valid');
            errores.push('La duración debe estar entre 60 y 360');
        }else{
            length.classList.add('is-valid');
            length.classList.remove('is-invalid');
        }
        


        if(errores.length > 0){
            e.preventDefault()

            let listaErrores = document.querySelector('.errores');
            listaErrores.classList.add('alert-warning');

            listaErrores.innerHTML = '';

            errores.forEach(errorActual => {
                listaErrores.innerHTML += '<li>' + errorActual + '</li>'
            })

        }else{
            alert('La película fue creada correctamente');
            formulario.submit();
        }

    })
})