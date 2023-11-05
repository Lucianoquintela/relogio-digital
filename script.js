function botao_ver_hora() {    

// Coletar hora
let dia = new Date();
let hora = dia.getHours().toString().padStart(2, '0');
let minutos = dia.getMinutes().toString().padStart(2, '0');
let segundos = dia.getSeconds().toString().padStart(2, '0');
console.log(`O horário atual é: ${hora}:${minutos}:${segundos}`);

// Salvar hora na variável hora_atual
const hora_atual = (`${hora}h ${minutos}m ${segundos}s`)
  console.log(hora_atual) 

// exibir hora no visor
document.querySelector(".mostrar_hora_atual").innerHTML = hora_atual        }