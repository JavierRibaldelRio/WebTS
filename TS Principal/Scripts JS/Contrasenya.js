var contrasenya = 2006;

$("#pagina").hide();

$("#alerta").hide();

$("#validar").click(function (){

    if (contrasenya == Number($("#inserteContrasenya").val())){

        $("body").removeClass("contrasenyaIncorrecta").addClass("contrasenyaCorrecta");

        $("#log").hide();

        $("#pagina").show();



    } 

    else{


        $("#alerta").show();

        $("#inserteContrasenya").val("");

        setTimeout(function(){

            $("#alerta").hide();



        },4000);

        

    }

});