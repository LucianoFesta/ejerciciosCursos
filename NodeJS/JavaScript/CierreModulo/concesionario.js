let autos = require('./autos');

const concesionaria = {
    autos: autos,

    buscarAuto: patente => {
        for(let i = 0; i < autos.length; i++){
            if(autos[i].patente === patente){
                return autos[i];
            }
        }
        return null;
    },

    venderAuto: function (patente) {
        let autoVendido = this.buscarAuto(patente);

        autoVendido.vendido = true;

        return autoVendido;

    },

    autosParaLaVenta: () => 
        autos.filter(auto => {
            return auto.vendido === false;
    }),
    
    autosNuevos: function() {
        return this.autosParaLaVenta().filter((auto) => {
            return auto.km < 100;
            })
    },

    listaDeVentas: () => {
        let autosVendidos = [];
 
        autos.forEach(auto => {
           if(auto.vendido === true){
              autosVendidos.push(auto.precio);
           }
        })
       return autosVendidos;
     },

    totalDeVentas: () => {

        return concesionaria.listaDeVentas().reduce((acumulador, precio) => {
           if(concesionaria.listaDeVentas() != 0){
            return acumulador + precio;
           }else{
            return acumulador;
           }
        }, 0)
     },

    //  puedeComprar: (auto, persona) => {
    //     if (auto.precio > persona.capacidadDePagoTotal) {
    //         return false;
    //     } else if ((auto.precio/auto.cuotas) > persona.capacidadDePagoEnCuotas){
    //         return false;
    //     } else {
    //         return true;
    //     }
    // },

    puedeComprar: (persona, patenteAuto) => {
        let cliente = {
            nombre: persona[0],
            capacidadDePagoEnCuotas: persona[1],
            capacidadDePagoTotal: persona[2]
        }
        
        let autoConsultado = concesionaria.buscarAuto(patenteAuto);

        let pagoTotal = autoConsultado.precio;
        let pagoCuotas = autoConsultado.precio / autoConsultado.cuotas;

        if((cliente.capacidadDePagoEnCuotas >= pagoCuotas) && (cliente.capacidadDePagoTotal >= pagoTotal)){
            return true;
            console.log(cliente);
        }else{
            return false;
            console.log(cliente);
        }
     },

    autosQuePuedeComprar: () => {
        let autosALaVenta = concesionaria.autosParaLaVenta();

        autosALaVenta.filter(auto => {
            let autoDisponible = puedeComprar(auto, persona);
            if(autoDisponible === true){
                return auto;
            }
        })
    }

    

    //  puedeComprar: (auto, persona) => {
    //     if((auto[1] <= persona[1]) && (auto[2] <= persona[2])){
    //         return true
    //     }else{
    //         return false
    //     }
    //  }

};

console.log(concesionaria.venderAuto('APL123'));
//console.log(concesionaria.autos);
//concesionaria.autos[0].vendido = true;
//concesionaria.autos[1].vendido = true;
//console.log(concesionaria.listaDeVentas());
//console.log(concesionaria.totalDeVentas());






