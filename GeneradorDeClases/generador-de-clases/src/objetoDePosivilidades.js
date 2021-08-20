//crea todos los objetos con todas las psibilidades

import Posibilidad from "./objetoPosibilidad";
import posibilidades from "./posibilidades.json";


function objetoTotal() {


    return {
        letras: rellenarPosibilidades(posibilidades.letras),
        delegado: rellenarPosibilidades(posibilidades.delegado),
        clase: rellenarPosibilidades(posibilidades.clase),
        horario: rellenarPosibilidades(posibilidades.horario),
        tutor: rellenarPosibilidades(posibilidades.tutor),
        ubicacion: rellenarPosibilidades(posibilidades.ubicacion),
        confinamiento: rellenarPosibilidades(posibilidades.confinamiento)
    }
}

function rellenarPosibilidades(arr) {

    var arrayDevolucion = new Array();

    //For inverso
    for (var i = 0; i < arr.length; i++) {

        arrayDevolucion.push(new Posibilidad(arr[i], (arr.length - i)));

    }

    return arrayDevolucion;

}
export default objetoTotal;