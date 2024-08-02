
//----------------------------------------------------------------------------------------------- função principal de alteração da string

const stringManipular = document.getElementById("string-manipular").textContent

// ------------------------------------------------------------------------------------------------ LENGTH

const tamanhoString = document.getElementById("tamanho-string")

tamanhoString.textContent = stringManipular.length

// -------------------------------------------------------------------------------------------- CHAT AT

const indice = 16

const posicaoCaracter = document.getElementById("posicao-caracter").textContent
const caracterEspecifico = document.getElementById("caracter-especifico")

posicaoCaracter.textContent = indice
caracterEspecifico.textContent = stringManipular.charAt(indice)


// ------------------------------------------------------------------------------------------------ ALTERAR COM REPLACE

const resultadoSubstituir = document.getElementById("resultado-substituir")

resultadoSubstituir.textContent = stringManipular.replace("escola", "a melhor escola")


//--------------------------------------------------------------------------------------------------UPPER E LOWER CASE

const tudoMinuscula = document.getElementById("resultado-minuscula")

tudoMinuscula.textContent = stringManipular.toLowerCase()

const tudomaiuscula = document.getElementById("resultado-maiuscula")

tudomaiuscula.textContent = stringManipular.toUpperCase()

//--------------------------------------------------------------------------------------------------TRIM

const stringComEspacos = document.getElementById("string-com-espacos").textContent
const semEspacos = document.getElementById("sem-espacos")
semEspacos.textContent = stringComEspacos.trim()