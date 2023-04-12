function dividir(num1, num2){
    
    let resultado;

    if(num1 === 0 || num2 === 0){
        
        resultado = 'No se puede dividir por 0.';

    }else{
        resultado = num1 / num2;
    }

    return resultado;
    
}

module.exports = dividir;