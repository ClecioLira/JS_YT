// Criar um objeto postagem
// titulo, mensagem, autor, vizualizações, comentarios, estaaovivo

function Postagem(titulo, mensagem, autor) {
    this.titulo = titulo,
    this.mensagem = mensagem,
    this.autor = autor,
    this.vizualizacao = 0,
    this.comentarios = [autor= 'a', comentario= 'b'],
    this.estaAoVivo = true
}

const postagem1 = new Postagem('a', 'b', 'c', 10)

console.log(postagem1)