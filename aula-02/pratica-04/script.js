function calcular(event) {

    event.preventDefault()
    const nota = document.getElementById("nota").value 

    const condicaoAluno =nota >= 7 ? "Aluno aprovado" : "Aluno reprovado"

    alert(condicaoAluno)

}