console.log(campos);

form.addEventListener("submit",function(event){
event.preventDefault();
	var tr = document.createElement("tr"); //testar estando fora, no aliases

	campos.forEach(function(campo){
		var td = document.createElement("td"); //testar estando fora, no aliases
			td.textContent = campo.value;
			tr.appendChild(td);
	
	});
	
	var tdVolume = document.createElement("td");
	tdVolume.textContent = campos[1].value * campos[2].value;
	
	tr.appendChild(tdVolume);
	tbody.appendChild(tr);
	
	form.reset();
});