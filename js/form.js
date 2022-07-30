let botaoAdicionar = document.querySelector("#adicionar-paciente")
botaoAdicionar.addEventListener("click", function(event){
	event.preventDefault() //previne comportamentos padróes do browser
	console.log("O botão foi clicado!")

	let form = document.querySelector("#form-adiciona")

	//extracting patients form information
	let paciente = obtemPacienteDoFormulario(form)
	console.log(paciente)

/*
	let nome = form.nome.value
	let peso = form.peso.value
	let altura = form.altura.value
	let gordura = form.gordura.value
*/

    //create the patient's td and tr
	let pacienteTr = document.createElement("tr")//cria um elemento no html

	let nomeTd = document.createElement("td")
	let pesoTd = document.createElement("td")
	let alturaTd = document.createElement("td")
	let gorduraTd = document.createElement("td")
	let imcTd = document.createElement("td")
	

	nomeTd.textContent = nome
	pesoTd.textContent = peso
	alturaTd.textContent = altura
	gorduraTd.textContent = gordura
	imcTd.textContent = calculaImc(peso, altura)
	

	//appendChild(o que estiver aqui sera o "filho") faz um elemento filho de outro elemento

	pacienteTr.appendChild(nomeTd)
	pacienteTr.appendChild(pesoTd)
	pacienteTr.appendChild(alturaTd)
	pacienteTr.appendChild(gorduraTd)
	pacienteTr.appendChild(imcTd)
	

	let tabela = document.querySelector("#tabela-pacientes")
	tabela.appendChild(pacienteTr)



	function obtemPacienteDoFormulario(form){
		let paciente = {
			nome: form.nome.value,
			peso: form.peso.value,
			altura: form.altura.value,
			gordura: form.gordura.value
			imc: calculaImc(form.peso.value, form.altura.value)
		}

		return paciente
	}

	
	//console.log(nome,peso,altura,gordura)
})