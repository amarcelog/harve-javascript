function calcular(event) {

    event.preventDefault()
    // DOM 
    
    // busca o valor do input chamado nota
    const nota = document.getElementById("nota").value
    // busca o valor do input chamado resultado
    const resultado = document.getElementById("resultado")
    
    const aluno = document.getElementById("aluno").value
    
    if (nota < 0 || nota > 10 || !aluno  ||!nota) {
        resultado.innerHTML = '<span class="reprovado">"Dados Inválidos"</span>'
    } else if (nota >= 7) {
        resultado.innerHTML = `
        <p>${aluno} tirou a nota ${nota}. <span class="aprovado">Aluno APROVADO</span></p>
        `
    }  else { 
        resultado.innerHTML = `
        <p>${aluno} tirou a nota ${nota}. <span class="reprovado">Aluno REPROVADO</span></p>
        `
    
      }
}