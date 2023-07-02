// Crie neste exercicio um objeto de postagem de blog que vai conter as seguintes propriedades
// Postagem
/* 
titulo
mensagem
autor
vizualizacoes
comentarios
    (autor, mensagem)
estaAoVivo
*/

let postagem = {
    titulo: 'post',
    mensagem: 'Nunca desista',
    autor: 'Clécio',
    vizualizacoes: 10,
    comentario: [
        {autor: 'a', mensagem: 'b'},
        {autor: 'c', mensagem: 'd'}
    ],
    estaAoVivo: false
}

console.log(postagem)