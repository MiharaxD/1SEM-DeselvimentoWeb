function data (){
    let meses = new Array('Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro')
    let agora = new Date
    let saida = document.getElementById('saida')
    let dia = agora.getDate()
    let mes = agora.getMonth() 
    let ano = agora.getFullYear()
    saida.innerHTML = `<p>${dia}/0${mes}/${ano}</p>`
    saida.innerHTML += `<p>${dia} de ${meses[mes]} de ${ano}</p>`
}

function quadro (){
    let soma = document.getElementById('soma')
    let multi = document.getElementById('multi')
    let divi = document.getElementById('divi')
    let resto = document.getElementById('resto')
    n1 = Number(prompt('Digite o primeiro valor:'))
    n2 = Number(prompt('Digite o segundo valor:'))
    s = n1 + n2
    m = n1 * n2
    d = n1 / n2
    r = n1 % n2
    soma.innerHTML = `<td>${n1}+${n2}</td> <td>${s}</td>`
    multi.innerHTML = `<td>${n1}x${n2}</td> <td>${m}</td>`
    divi.innerHTML = `<td>${n1}/${n2}</td> <td>${d}</td>`
    resto.innerHTML = `<td>${n1}%${n2}</td> <td>${r}</td>`
}

function verm (){
    let el = document.getElementById('pag')
    el.style.backgroundColor = 'rgb(204, 69, 69)';
}

function ver (){
    let el = document.getElementById('pag')
    el.style.backgroundColor = 'green';
}

function az (){
    let el = document.getElementById('pag')
    el.style.backgroundColor = 'rgb(91, 91, 209)';
}

function amar (){
    let el = document.getElementById('pag')
    el.style.backgroundColor = 'yellow';
}

function mpmm (){
    let n1 = Number(document.getElementById('primeiro').value)
    let n2 = Number(document.getElementById('segundo').value)
    let resultado = document.getElementById('tabela')
    soma = n1 + n2
    media = soma/2
    produto = n1 * n2
    if (n1>n2){
    resultado.innerHTML = `<table><tr><th>Adição</th><td>${soma}</td></tr><tr><th>Média</th><td>${media}</td></tr><tr><th>Produto</th><td>${produto}</td></tr><tr><th>Maior</th><td>${n1}</td></tr><tr><th>Maior</th><td>${n2}</td></tr></table>`
    }else {
    resultado.innerHTML = `<table><tr><th>Adição</th><td>${soma}</td></tr><tr><th>Média</th><td>${media}</td></tr><tr><th>Produto</th><td>${produto}</td></tr><tr><th>Maior</th><td>${n2}</td></tr><tr><th>Maior</th><td>${n1}</td></tr></table>`
    }
}