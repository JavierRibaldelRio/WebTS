//Ocultar los textos
function ocultarTextos(){

    $("#aprovado").hide();

    $("#suspenso").hide();

}

ocultarTextos();

//Comprobar si los números son validos y hacer la media
$("#calcular").click(function (){

    if($("#notaPokemon").val() == "" || $("#notaMinecraft").val() == ""){

        alert("Rellene las dos casillas");

        ocultarTextos();

    }

    else if (Number($("#notaPokemon").val()) > 12 || Number($("#notaPokemon").val()) < 0 ||Number($("#notaMinecraft").val()) > 10 ||Number($("#notaMinecraft").val()) < 0 ){

        ocultarTextos();

        alert("Ha de insertar un numero positivo, si es en el examen de pokemon debera ser sobre 12 y en el de Minecraft sobre 10")
        
    }else{
        
        ocultarTextos();

        var texto = Number($("#notaPokemon").val())*10/12;

        var media2 = media(Number(($("#notaPokemonSobre10").val())),Number(($("#notaMinecraft").val())));

        $("#notaPokemonSobre10").val(texto);

        $("#notaMinecraftSobre10").val(Number($("#notaMinecraft").val()));

        $("#total").val(media2);

        if(media2 >= 5){

            $("#aprovado").show();

        }else{

            $("#suspenso").show();

        }

       
    }


})

function media(numero1, numero2){

    return (numero1 + numero2 )/ 2;

}