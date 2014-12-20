$(document).on("ready",function(){
	$(document).on("click",".pieza",function(){
		console.log($(this).css("background-color"));
		if($(this).prop("color")!="red"){
			$(this).css("background-color","red");
			$(this).prop("color","red");
		}else{
			newSubContainer($(this));
			$(this).css("background-color","");
			$(this).prop("color","white");	
			
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