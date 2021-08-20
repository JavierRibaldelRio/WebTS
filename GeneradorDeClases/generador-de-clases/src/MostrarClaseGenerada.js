var React = require('react');
const { default: Boton } = require('./boton');

class MostrarClaseGenerada extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {

        return (
            <div>

                <div className="Clase_Generada">

                    {this.props.clase.generarFrase()}


                </div>
                <div id="Centrado">

                    <Boton alPulsar={this.props.pulsar.bind(this)} texto="Descargar Informe" />
                </div>
            </div>

        )
    }
}

export default MostrarClaseGenerada;