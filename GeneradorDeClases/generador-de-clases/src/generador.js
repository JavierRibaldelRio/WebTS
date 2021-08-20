import Boton from './boton';
import ClaseGenerada from './objetoclaseenerada';
import objetoTotal from './objetoDePosivilidades';
import PreguntaNombre from './PreguntaNombre';
import MostrarClaseGenerada from './MostrarClaseGenerada';

import jsonPosibilidades from './posibilidades.json';
var React = require('react');
//Contien todo lo relativo al generador
class Generador extends React.Component {


    constructor(props) {
        super(props)

        this.state = { posibilidades: objetoTotal(), generado: undefined, usuario: undefined }



    }
    //Genera el curso y crea el objeto del curso
    generarCurso(usuario) {
        if (usuario === undefined) {
            usuario = "No ha especificado"
        }

        var arrayAmigos = [...jsonPosibilidades.companyeros];      //Crea una copia del array del json y se lo asigna a uns a variable

        window.$nombresArrays = ['letras', 'delegado', 'horario', 'tutor', 'ubicacion', 'confinamiento', 'clase'];  //almacena el nombre de los arrays

        //copia porpiedades
        var posibilidades = this.state.posibilidades;

        var datos = new Array(); //Almacena los datos del nuevo obejto

        let claseGenerado;  //almacena la clase generada

        //Almacen ael compañero que te ha tocado
        let companyero;


        //Comprueba que el nombre introducido no coincide que ninguno de los compañeros, sin coinciden los elimina
        for (var i = 0; i < arrayAmigos.length; i++) {

            //Si coinciden los numeros almacenamos la i
            if (arrayAmigos[i].toLocaleLowerCase() === usuario.toLocaleLowerCase()) {


                arrayAmigos.splice(i, 1); //Elimina la casilla del array

                i = arrayAmigos.length + 10; //Para que el bucle deje de repetirse

            }
        }

        //Saca uno companyero aleatorio
        companyero = arrayAmigos[sacarAleatorio(arrayAmigos)];

        //Saca 1 casilla de cada array aleatrioamente y la s pone juntas en otro array
        for (var i = 0; i < window.$nombresArrays.length; i++) {

            datos.push(posibilidades[window.$nombresArrays[i]][sacarAleatorio(posibilidades[window.$nombresArrays[i]])]);
        }

        claseGenerado = new ClaseGenerada(datos[0], datos[1], datos[2], datos[3], datos[4], datos[5], datos[6], companyero);
        this.setState({ generado: claseGenerado, usuario: usuario });

        //Saca aleatoriamente una casilla del array
        function sacarAleatorio(arr) {

            let devolucion = Math.floor(Math.random() * arr.length - 1) + 1;

            return devolucion;
        }
    }


    informar() {

        this.state.generado.pdf(this.state.usuario);

    }

    render() {

        var mostrar; //Almacena que parte mostarar

        //Mira que parte tiene que mostrar

        if (this.state.generado === undefined) {
            mostrar = <PreguntaNombre cogerNombre={this.generarCurso.bind(this)} />;
        } else {

            mostrar = <MostrarClaseGenerada pulsar={this.informar.bind(this)} clase={this.state.generado} />;
        }


        return (
            <div>

                {mostrar}

            </div >
        )

    }
}
export default Generador;