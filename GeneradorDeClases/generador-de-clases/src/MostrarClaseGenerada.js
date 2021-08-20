var React = require('react');

class MostrarClaseGenerada extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {

        return (

            <div className="Clase_Generada">

                {this.props.clase.generarFrase()}


            </div>

        )
    }
}

export default MostrarClaseGenerada;