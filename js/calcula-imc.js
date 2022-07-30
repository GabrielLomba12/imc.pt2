let titulo = document.querySelector("h1")
titulo.textContent = "Aparecida Nutricionista"

let pacientes = document.querySelectorAll(".paciente")

for(let i = 0; i < pacientes.length; i++){

	let paciente = pacientes[i]

	let tdPeso = paciente.querySelector(".info-peso")
	let peso = tdPeso.textContent

	let tdAltura = paciente.querySelector(".info-altura")
	let altura = tdAltura.textContent

	let tdImc = paciente.querySelector(".info-imc")

	let pesoEhValido = true
	let alturaEhValida = true

	          //ou
	if(peso <= 0 || peso >= 1000){
		console.log("Peso inválido.")
		pesoEhValido = false
		tdImc.textContent = "Peso inválido!"
		paciente.classList.add("paciente-invalido")
	}

	if(altura <= 0 || altura >= 3.00){
		console.log("Altura inválida.")
		alturaEhValida = false
		tdImc.textContent = "Altura inválido!"
		paciente.style.backgroundColor = "red"
	}

	if(alturaEhValida && pesoEhValido){
		let imc = calculaImc(peso, altura)
		tdImc.textContent = imc
	}
}

function calculaImc(peso, altura){
	let imc = 0

	imc = peso / (altura * altura)

	return imc.toFixed(1)
}






     //escutar um evento
titulo.addEventListener("click", /*mostraMensagem*/ function(){
	console.log("Função anonima.")
})
/*
function mostraMensagem(){
	console.log("Olá, eu fui clicado!")
}
*/



/*
let botaoAdiciona = document.querySelector("#adicionar-paciente")
function letssee(){
	console.log("O botao foi clicado")
}
botaoAdiciona.addEventListener("click", letssee)
*/




//