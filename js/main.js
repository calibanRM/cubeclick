$(document).on("ready",function(){
	/*
	*=======================================
	*CAMBIO PARA TRABAJAR CON CLASE ROJO ===
	*=======================================
	*/
	//DOCUMENTACION DE LAS FUNCIONES USADAS
	//http://api.jquery.com/hasclass/
	//http://api.jquery.com/addClass/
	//http://api.jquery.com/removeClass/
	$(document).on("click",".pieza",function(){
		console.log($(this).css("background-color"));
		if(!$(this).hasClass("rojo")){
			$(this).addClass("rojo");
		}else{
			newSubContainer($(this));
			$(this).removeClass("rojo");
		}
	});

	/*
	*====================================
	*FUNCION PARA AGREGAR SUBCONTAINER===
	*====================================
	*/
	function newSubContainer(pieza){
		console.log(pieza.attr("nivel"));
		var nivel;
		if(pieza.attr("nivel") == undefined){
			nivel = 1;
		}else{
			nivel = parseInt(pieza.attr("nivel")) + 1;
		}
		if(nivel < 5){
			//remuevo la clase pieza y agrego la clase sub_container
			pieza.removeClass("pieza").addClass("sub_container");
			//con esta funcion agrego 4 div dentro de la pieza que recien hice click
			var div = "<div class='pieza' nivel='"+nivel+"'></div>";
			pieza.html(div+div+div+div);
			
		}
		
	}
});