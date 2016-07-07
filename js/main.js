$(document).on("ready", function() {
    /*
     *=======================================
     *CAMBIO PARA TRABAJAR CON CLASE ROJO ===
     *=======================================
     */
    $(document).on("click", ".pieza", function() {
        console.log($(this).css("background-color"));
        if (!$(this).hasClass("rojo")) {
            //deberia bajarle puntos
            // $(this).addClass("rojo");
        } else {
            newSubContainer($(this));
            $(this).removeClass("rojo");
        }
    });

    /*
     *====================================
     *FUNCION PARA AGREGAR SUBCONTAINER===
     *====================================
     */
    function newSubContainer(box) {
        var leven = 0;
        if (box.attr("nivel") === undefined) {
            leven = 1;
        } else {
            leven = parseInt(box.attr("nivel")) + 1;
        }
        if (leven < 5) {
            box.removeClass("pieza").addClass("sub_container");
            var div = "<div class='pieza' nivel='" + leven + "'></div>";
            box.html(div + div + div + div);
        } else {
            box.addClass("removed");
        }
    }
    /*
     *===================================
     *FUNCTION FOR ADDCLASS RANDOM ======
     *===================================
     */
    //es mejor usar una funcion mas generica que simplemente colorear los div
    var randomAddClassObjects = function(elements, objClass) {
        var midLenght = Math.floor(elements.length / 2); //tomo como maximo la mitad redondeada hacia abajo
        elements.removeClass(objClass); //saco la clase a todos

        var index = null; //solo instancio la variable(es una buena practica y es mas legible)
        for (var i = 0; i < midLenght; i++) {
            index = Math.round(Math.random() * elements.length); //agarro un random sin preocupare por q se repitan ni nada
            $(elements[index]).addClass(objClass);
        }
    };

    var minuto = 2;
    var segundo = 0;
    $("#reloj").prop("disabled", true);
    $(document).on("click", "#start", function() {
        crono();
    });

    function crono() {
        randomAddClassObjects($(".pieza"), "rojo");
        $("#reloj").val(minuto + " : " + segundo);
        var timeout = setTimeout(crono, 1000);
        segundo = segundo - 1;
        if (segundo <= -1 && minuto <= 0) {
            clearTimeout(timeout);
        }
        if (segundo < 0) {
            minuto = minuto - 1;
            segundo = 59;
        }
        bloqueoBtn();
    }

    function bloqueoBtn() {
        $("#start").prop("disabled", true);
    }
});
