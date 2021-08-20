import jsPDF from "jspdf";


class ClaseGenerada {

    constructor(letras, delegado, horario, tutor, ubicacion, confinamiento, clase, companyero) {
        this.letras = letras;   //A u
        this.horario = horario; //Inglés
        this.tutor = tutor;     //Mayteu
        this.ubicacion = ubicacion; //de las escaletas
        this.delegado = delegado;   //Malo
        this.confinamiento = confinamiento; //Sí
        this.clase = clase;                 //Grnade
        this.companyero = companyero        //Toni

        this.puntos = (this.tutor.valor + this.letras.valor + this.horario.valor + this.ubicacion.valor + this.delegado.valor + this.confinamiento.valor + this.clase.valor)

    }


    //Genera la frase
    generarFrase() {

        return (
            `El año que viene pasaras a 4º de la ESO. Tu clase será
        4º${this.letras.nombre} y tu tutor/a será  ${this.tutor.nombre}.
        Tu clase será ${this.clase.nombre.toLocaleLowerCase()} y estara ubicada 
        cerca ${this.ubicacion.nombre} y el delgado será 
        ${this.delegado.nombre.toLocaleLowerCase()}. El viernes a última hora tendrás ${this.horario.nombre.toLocaleLowerCase()}  y además iras a clase con ${this.companyero}. ${this.confinamiento.nombre} tendrás confinamiento.
        
        Has obtenido un total de ${this.puntos} puntos.`)

    }

    pdf(nombre) {
        var pdf = new jsPDF('p', 'pt');

        pdf.setFontSize(36);

        pdf.setFont(undefined, 'bold');
        pdf.text(10, 40, " GENERADOR DE CLASES 4ºESO");

        pdf.setFontSize(14);

        pdf.setFont(undefined, undefined);

        pdf.text(20, 80,
            `Nombre: ${nombre}\n\n
            Puntos: ${this.puntos}\n                  
            Letra: ${this.letras.nombre}\n            
            Tutor: ${this.tutor.nombre}\n             
            Tamaño clase: ${this.clase.nombre}\n
            Delegado: ${this.delegado.nombre}\n
            Compañero: ${this.companyero}\n
            Confinamiento: ${this.confinamiento.nombre}\n
            Última hora viernes: ${this.horario.nombre}\n
            Ubicación: Cerca de ${this.ubicacion.nombre}\n\n
            `);


        pdf.save(nombre + '.pdf');
    }

}

export default ClaseGenerada;