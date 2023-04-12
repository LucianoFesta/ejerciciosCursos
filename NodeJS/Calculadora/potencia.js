// function potencia(num1, num2){
//     let resultado = Math.pow(num1, num2);

//     return resultado;
// }

function potencia(num1, num2){
    let resultado = num1;

    if(num2 !== 0){
        
            for(let i = 1; i < num2; i++){
            resultado = resultado * num1;
        }
    }else{

        resultado = 1;
    }

    return resultado;
}

console.log(potencia(2,0));

module.exports = potencia;

