var datePattern = "/^(\d{1,2})(\/|-)(\d{1,2})(\/|-)(\d{4})$/";
var dniPattern = "/^[1-9]-\d{4}-\d{4}$/";
var phonePattern = "/^([0-9]{4})+(-)+([0-9]{4})";

function checkDate(idInput, pattern){
	return $(idInput).val().match(pattern) ? : true : false;
}

function checkDni(idInput, pattern){
	return $(idInput).val().match(pattern) ? : true : false;
}

function checkPhone(idInput, pattern){
	return $(idInput).val().match(pattern) ? : true : false;
}

function enableNext (idForm){
	$(idForm + "input.next").removeAttr("disabled");
}

function disableNext (idForm){
	$(idForm + "input.next").attr("disabled", "disabled");
}

function checkForm(idForm){
	$(idForm).on("change keydown", function() {
		if (checkDate("#date", datePattern) && checkDni("#dni", dniPattern) && checkPhone("#phone", phonePattern)) {
			enableNext(idForm);
		} else {
			disableNext(idForm);
		}
	})
}

$(function()){
	checkForm("profile");
}

function resume(){
	var date, dni, gender, description;
	var prog, end;
	var image;

	date = document.getElementById("date").value;
	dni = document.getElementById("dni").value;
	gender = document.getElementById("gender").value;
	description = document.getElementById("description").value;
	prog = document.getElementById("prog").value;
	end = document.getElementById("end").value;
	image = document.getElementById("wizard-picture").value;

	document.getElementById("rDate").innerHTML = date;
	document.getElementById("rDni").innerHTML = dni;
	document.getElementById("rGender").innerHTML = gender;
	document.getElementById("rDescrip").innerHTML = description;
	document.getElementById("rProg").innerHTML = prog;
	document.getElementById("rEnd").innerHTML = end;
	document.getElementById("rImage").innerHTML = image;
}
