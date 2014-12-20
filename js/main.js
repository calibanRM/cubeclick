$(document).on("ready",function(){
	$(".pieza").on("click",function(){
		console.log($(this).css("background-color"));
		if($(this).prop("color")!="red"){
			$(this).css("background-color","red");
			$(this).prop("color","red");
		}else{
			newSubContainer($(this));
			$(this).css("background-color","white");
			$(this).prop("color","white");	
			
		}
	});

	/*
	*====================================
	*FUNCION PARA AGREGAR SUBCONTAINER===
	*====================================
	*/
	function newSubContainer(pieza){
		//remuevo la clase pieza y agrego la clase sub_container
		pieza.removeClass("pieza").addClass("sub_container");
		//con esta funcion agrego 4 div dentro de la pieza que recien hice click
		pieza.html("<div class='pieza'></div><div class='pieza'></div><div class='pieza'></div><div class='pieza'></div>");
		
	}
});