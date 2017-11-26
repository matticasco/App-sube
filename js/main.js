//javascript
	//login
	//PRIMERO

	//LOGIN
	var loginDni;
	var login= document.forms["login"];
	var	loginPass;
	var ingresarLogin;
	//REGISTRO-- SUBE id-- registro2.html


function home(){
	document.location.href = "home.html";
}

function registro2(){
	document.location.href = "registro2.html";
}
function registro3(){
	console.log("nos vimo");
	document.location.href = "registro3.html";
}

	function validarLogin(){
		loginDni = document.getElementById("loginDni");
		loginPass = document.getElementById("loginPass");
		if(loginDni.value.length == 0 ){
			loginDni.setAttribute('placeholder' , "INGRESE SU DNI" );
			console.log(loginDni);
			loginDni.focus();
			return false;
		}else if(loginPass.value.length == 0 ){
			loginPass.setAttribute('placeholder' , "INGRESE SU cONTRASEÑA" );
			loginPass.focus();
			return false;
		}
		//if (loginPass.value )
		if (loginDni.value.length > 4 && loginDni.value.length < 20 && loginPass.value.length > 4 && loginPass.value.length < 20){
			home();
			//alert("nos vemo en home.html");
			return false;
		}

	return true;	


	}


function validar() {
    	cs1 = document.getElementsById("rCod1").value;
    	cs2 = document.getElementsById("rCod2").value;
    	cs3 = document.getElementsById("rCod3").value;
    	cs4 = document.getElementsById("rCod4").value;
	return cs1.trim() != "" && cs2.trim() != "" && cs3.trim() != "" && cs4.trim() != "";
}

var subeR;
function validarR2(){
		subeR = document.getElementById("subeR").value;	

	if (isNaN (subeR) || subeR.length > 16) {
		subeR.setAttribute("placeholder", "Agrega una tarea Valida");
		subeR.className = "error";
		return false;
	}else if (subeR.trim() != "" && subeR.length == 16){
		subeR.className = "inputRegistro";
		return true;
	}
}

var cR;
function validarR3(){
		cR = document.getElementById("contraseñaR").value;	

	if ( cR == "" || cR.length > 16 ) {
		cR.setAttribute("placeholder", "Inserta una contraseña Valida");
		cR.className = "error";
		return false;
	}else if (cR.trim() != "" && cR.length == 16){
		cR.className = "inputRegistro";
		return true;
	}
}

	var comprobarInput= function(){ 
		dniR.setAttribute("placeholder", "INSERTE DNI");
		alert("inserte DNI");
	};

function validarR4(){
		dniR = document.getElementById("dniR").value;	

	if ( dniR == "" || dniR.length > 8 ) {
		dniR.setAttribute("placeholder", "Inserta DNI valido");
		dniR.className = "error";
		alert("MAL");
		return false;
	}else if ( dniR.length >= 6 && dniR.length<= 8){
		dniR.className = "inputRegistro";
		alert("bien");
	}

return dniR.addEventListener("click", comprobarInput);
}


function validarSaldo(){
		codS1 = document.getElementsById("codS1").value;
    	codS2 = document.getElementsById("codS2").value;
    	codS3 = document.getElementsById("codS3").value;
    	codS4 = document.getElementsById("codS4").value;
	return codS1.trim() != "" && codS2.trim() != "" && codS3.trim() != "" && codS4.trim() != "";
}


	/*//REGISTRO-- codigo de seguridad-- registro.html
	var cs1,cs2,cs3,cs4;
	var rCod = document.forms["rcod"];
	var ContinuarRegistro;
	
	var error= false;
	function registroCs(){
		cs1= document.getElementById("rCod1").value;
		cs2= document.getElementById("rCod2").value;
		cs3= document.getElementById("rCod3").value;
		cs4= document.getElementById("rCod4").value;
		
		if ( cs1.length > 1 || cs2.length > 1 || cs3.length > 1 || cs4.length > 1  ) {
			error= true;
		} else if (cs1 != "" && cs2 != "" && cs3 != "" && cs4 != ""){
			error= false;
		}

		if (error == false) {
			alert("a otro lado");
			document.location.href = "registro2.html";
			return true;
		}

	}*/
