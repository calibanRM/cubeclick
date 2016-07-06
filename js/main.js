$(document).on("ready", function() {
    /*
     *=======================================
     *CAMBIO PARA TRABAJAR CON CLASE ROJO ===
     *=======================================
     */
    //DOCUMENTACION DE LAS FUNCIONES USADAS
    //http://api.jquery.com/hasclass/
    //http://api.jquery.com/addClass/
    //http://api.jquery.com/removeClass/
    $(document).on("click", ".pieza", function() {
        console.log($(this).css("background-color"));
        if (!$(this).hasClass("rojo")) {
            $(this).addClass("rojo");
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
    function newSubContainer(pieza) {
        console.log(pieza.attr("nivel"));
        var nivel;
        if (pieza.attr("nivel") === undefined) {
            nivel = 1;
        } else {
            nivel = parseInt(pieza.attr("nivel")) + 1;
        }
        if (nivel < 5) {
            //remuevo la clase pieza y agrego la clase sub_container
            pieza.removeClass("pieza").addClass("sub_container");
            //con esta funcion agrego 4 div dentro de la pieza que recien hice click
            var div = "<div class='pieza' nivel='" + nivel + "'></div>";
            pieza.html(div + div + div + div);

        }

    }

        var minuto = 2;
        var segundo = 0;
        $("#reloj").prop("disabled",true);
    $(document).on("click","#start", function(){  crono();  })
        function crono(){
            $("#reloj").val(minuto + " : " + segundo);
            var timeout = setTimeout(crono,1000);
            
            segundo = segundo-1;
            if(segundo <= -1 && minuto <= 0){
                clearTimeout(timeout);
                
            }
            if(segundo < 0){
                minuto = minuto-1;
                segundo = 59;
            }
        bloqueoBtn();
        }
        
        function bloqueoBtn(){
            $("#start").prop("disabled",true);
        }     
    });
