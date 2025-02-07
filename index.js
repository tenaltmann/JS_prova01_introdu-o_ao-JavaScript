const n1 = Number(prompt("Defina a Nota 1: "))
const n2 = Number(prompt("Defina a Nota 2: "))
const n3 = Number(prompt("Defina a Nota 3: "))

const p1 = 2 
const p2 = 4
const p3 = 6

const multiplica_notas_pesos = (n1 * p1) + (n2 * p2) + (n3 * p3)
const soma_notas_pesos = p1 + p2 + p3
const media_ponderada = multiplica_notas_pesos / soma_notas_pesos


console.log(media_ponderada)

