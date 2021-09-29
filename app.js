//Passo 3, Passo 4, Passo 5 e Passo 6

const { listaDeAlunos } = require('./aluno');
let alunos = require('./aluno')


let curso = {
    nomeDoCurso: 'CTD-TN2',
    notaDeAprovacao: 10,
    faltasMaximas: 4,
    listaEstudantes: alunos.listaDeAlunos,
    addAluno: function(){
        let novoAluno = new alunos.ConstruirAluno('Janaina', 3,[8,10,8], this.calcularMedia,this.faltas)
            this.listaEstudantes.push(novoAluno)
    }, 
    aprovacaoAluno: function(aluno){
        if(aluno.calcularMedia() >= curso.notaDeAprovacao && aluno.quatidadeDeFaltas < curso.faltasMaximas){
            return true;
        } else if (aluno.calcularMedia() >= (curso.notaDeAprovacao * 0.1) && aluno.quatidadeDeFaltas == curso.faltasMaximas){
            return true;
        } else { 
            return false;
        }
        
    },
    listaAprovados: function () {
        let listaDeAlunos = []
        for (let aluno of this.listaEstudantes) {
            if (this.aprovacaoAluno(aluno) == true) {
                listaDeAlunos.push (true)
            }
            else {
                listaDeAlunos.push (false)
            }
        }
        return listaDeAlunos
                }
}
curso.addAluno();

// console.log(alunos.listaDeAlunos[1])
// console.log(alunos.listaDeAlunos[1].calcularMedia())
// console.log(alunos.listaDeAlunos[1].quatidadeDeFaltas)
// curso.aprovacaoAluno(1)
console.log(curso.listaAprovados()) 
