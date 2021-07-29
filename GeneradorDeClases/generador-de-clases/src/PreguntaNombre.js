var React = require('react');
const { default: Boton } = require('./boton');
class PreguntaNombre extends React.Component {
    constructor(props) {
        super(props);

        this.state = { texto: undefined }
    }

    //Al cambio se actualiza el estado
    cambio(e) {
        this.setState({ texto: e.target.value });
    }

    //Evitar que se refresque la página 
    alValidar(e) {
        e.preventDefault();
        //Cambia le estado del componente padre

        this.props.cogerNombre(this.state.texto);
    }

    render() {
        return (
            <form onSubmit={this.alValidar.bind(this)}>

                <input className="input"></input>

                <Boton type="submit" texto="Validar"></Boton>
            </form>
        )
    }
}

export default PreguntaNombre;