var React = require('react');

//Se ocupa de los botones

class Boton extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {

        return (

            <button className="boton" onClick={this.props.alPulsar}>{this.props.texto}</button>
        )
    }

}

export default Boton;