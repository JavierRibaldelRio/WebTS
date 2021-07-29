class ClaseGenerada {

    constructor(letras, delegado, horario, tutor, ubicacion, confinamiento, clase, companyero) {
        this.letras = letras;   //A
        this.horario = horario; //Inglés
        this.tutor = tutor;     //Mayte
        this.ubicacion = ubicacion; //de las escaletas
        this.delegado = delegado;   //Malo
        this.confinamiento = confinamiento; //Sí
        this.clase = clase;                 //Grnade
        this.companyero = companyero        //Toni

        this.puntos = (this.tutor.valor + this.letras.valor + this.horario.valor + this.ubicacion.valor + this.delegado.valor + this.confinamiento.valor + this.clase.valor)

    }


    //Genera la frase
    generarFrase() {

        let frase = `El año que viene pasaras a 4º de la ESO. Tu clase será 4º${this.letras.nombre.toUpperCase()} y tut tutor/a será ${this.tutor.nombre}. Tu clase será ${this.clase.nombre} y estara ubicada cerca ${this.ubicacion.nombre} y el delgado será ${this.delegado.nombre}. El viernes a última hora tendrás ${this.horario.nombre}  y además iras a clase con ${this.companyero}. Has obtenido ${this.puntos}`

    }

}

export default ClaseGenerada;