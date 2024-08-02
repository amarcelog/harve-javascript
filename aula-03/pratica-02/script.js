function formatarData() {

const data = document.getElementById("data").value

const meses = [

        "janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro", 

    ]

const arrayData = data.split("/")

const dia = arrayData[0]
const mes = arrayData[1]
const ano = arrayData[2]

const dataFormatada = document.getElementById("data-formatada")

dataFormatada.textContent = `${dia} de ${meses[Number(mes) -1]} de ${ano}`

}