import Boton from './boton';
import ClaseGenerada from './objetoclaseenerada';
import objetoTotal from './objetoDePosivilidades';
import PreguntaNombre from './PreguntaNombre';

import jsonPosibilidades from './posibilidades.json'
import { toLower } from 'lodash';
var React = require('react');
//Contien todo lo relativo al generador
class Generador extends React.Component {


    constructor(props) {
        super(props)

        this.state = { posibilidades: objetoTotal(), generado: undefined }



    }
    //Genera el curso y crea el objeto del curso
    generarCurso() {

        console.log("Me ejecuto")
        //copia porpiedades
        var posibilidades = this.state.posibilidades;

        var a = new Array(); //Almacena los datos del nuevo obejto

        //Deefine una variable global que al macena todos ls de un arrr
        window.$nombresArrays = ['letras', 'delegado', 'horario', 'tutor', 'ubicacion', 'confinamiento', 'clase'];
        //Saca 1 casilla de cada array aleatrioamente y la s pone juntas en otro array
        for (var i = 0; i < window.$nombresArrays.length; i++) {

            a.push(posibilidades[window.$nombresArrays[i]][sacarAleatorio(posibilidades[window.$nombresArrays[i]])]);
        }

        let claseGenerado = new ClaseGenerada(a[0], a[1], a[2], a[3], a[4], a[5], a[6], a[7]);

        this.setState({ generado: claseGenerado });

        //Saca aleatoriamente una casilla del array
        function sacarAleatorio(arr) {

            let devolucion = Math.floor(Math.random() * arr.length - 1) + 1;

            return devolucion;
        }
    }

    //Coge el nombre del compañero

    eliminarCompanyero(usuario) {
        var arrayAmigos = [...jsonPosibilidades.companyeros];      //Crea una copia del array del json y se lo asigna a uns a variable

        arrayAmigos.map(toLowerCase());

    }



    render() {

        return (
            <div>
                <Boton texto="Mostrar estado" alPulsar={this.generarCurso.bind((this))} />

                <PreguntaNombre cogerNombre={() => { console.log("cogo nombre") }} />

            </div>
        )

    }
}
export default Generador;