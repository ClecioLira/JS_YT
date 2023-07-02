// Trabalhar com datas
// Importante lembrar caso coloque o mes em número ele irá comecar a contar do mes 0 e não mes 1

// Traz a informação com a data atual
const data1 = new Date()

// Passando a data manualmente por uma string MM/DD/YYYY HH:MM
const data2 = new Date('March 06 2012 09:30')

// Tem os metodos .get e .set para puxar e alterar as datas

// Transformar o Date em string
data1.toDateString()

// Puxar o horário para saber de qual referencia ele esta colocando aquela hora
date1.toTimeString()

// Como as horas sao vistas no banco de dados
date1.toISOString()