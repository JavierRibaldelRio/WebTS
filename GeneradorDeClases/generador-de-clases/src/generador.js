import Boton from './boton';
import objetoTotal from './objetoDePosivilidades';
var React = require('react');
//Contien todo lo relativo al generador
class Generador extends React.Component {


    constructor(props) {
        super(props)


    }
    render() {
        console.log(objetoTotal());

        return (
            <Boton texto="kjfdsgga" alPulsar={() => { console.log("He sido presionado") }} />
        )

    }
}
export default Generador;