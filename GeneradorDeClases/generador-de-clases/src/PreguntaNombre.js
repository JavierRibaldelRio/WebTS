var React = require('react');
const { default: Boton } = require('./boton');
class PreguntaNombre extends React.Component {
    constructor(props) {
        super(props);

        this.state = { texto: undefined }
    }

    //Al cambio se actualiza el estado
    cambio(e) {
        this.setState({ texto: e.target.value.trim() });
    }

    //Evitar que se refresque la página 
    alValidar(e) {
        e.preventDefault();
        //Cambia le estado del componente padre

        this.props.cogerNombre(this.state.texto);
    }

    render() {
        return (
            <div>
                <h1>Generador de Clases 4ºESO</h1>
                <table className="Preguntar_Nombre">
                    <tr>
                        <td>
                            <h2>Inserte su nombre</h2>
                            <form onSubmit={this.alValidar.bind(this)}>

                                <input className="input" onChange={this.cambio.bind(this)}></input>

                                <br></br>

                                <b><Boton type="submit" texto="Generar Clase"></Boton></b>
                            </form>
                        </td>
                    </tr>
                </table>
            </div>
        )
    }
}

export default PreguntaNombre;