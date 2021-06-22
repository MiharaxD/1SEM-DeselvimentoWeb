function conta (){
    let usuario = document.getElementById('usuario').value
    let senha = document.getElementById('senha').value
    let senha1 = document.getElementById('senha').value.length
    let confirmar = document.getElementById('confirmar').value
    let erro = document.getElementById('erro')
    if (usuario == 0){
        erro.innerHTML = `<p>Digite um usuario primeiramente</p>`
    }else if (senha1 < 6){
        erro.innerHTML = `<p>Senha precisa no minimo 6 caracteres</p>`
    }else if (senha1 > 10){
        erro.innerHTML = `<p>Máximo de caracteres na senha são 10</p>`
    }
    if (parseInt(senha) == parseInt(confirmar)){
        if (senha1 >= 6 && senha1 <=10){
        window.open("Atividade JS2.html")}
    }else if (senha1 >= 6 && senha1 <= 10){
        erro.innerHTML = `<p>Voce digitou a senha errado</p> <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/80c977ea-f882-4329-8151-3f7670a390e0/ddyz5ku-aedf592f-f732-4e70-9111-f218dc5ea207.jpg/v1/fill/w_362,h_361,q_75,strp/will_smith_figurinhas_by_danielghost515_ddyz5ku-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MzYxIiwicGF0aCI6IlwvZlwvODBjOTc3ZWEtZjg4Mi00MzI5LTgxNTEtM2Y3NjcwYTM5MGUwXC9kZHl6NWt1LWFlZGY1OTJmLWY3MzItNGU3MC05MTExLWYyMThkYzVlYTIwNy5qcGciLCJ3aWR0aCI6Ijw9MzYyIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.ex3evGAl6nXv0zLKykMmvk32pPDNAZJ12nm-4I5I7aw" alt=""></a>`
    }
}

function pali (){
    let inverter = document.getElementById('palid').value
    let area = document.getElementById('x')
    let teste = inverter.split('').reverse().join('');
    if (teste == inverter){
        area.innerHTML = `<p>Invertido ficará: <b>${teste}</b></p><p>Parabens você tem um palindromo</p>`
    }else{
        area.innerHTML = `<p>Invertido ficará: <b>${teste}</b></p><p>Isso não é um palindromo!!!</p>`
    }
} 

function inverco (){
    let primeiro = document.getElementById('0').value
    let segundo = document.getElementById('1').value
    let terceiro = document.getElementById('2').value
    let quarto = document.getElementById('3').value
    let quinto = document.getElementById('4').value
    let formes = document.getElementById('formes')
    var nomes = []
    nomes[1] = primeiro
    nomes[2] = segundo
    nomes[3] = terceiro
    nomes[4] = quarto
    nomes[5] = quinto
    formes.innerHTML = `<p>${nomes[5]} - ${nomes[4]} - ${nomes[3]} - ${nomes[2]} - ${nomes[1]} </p>` 
}

function medias (){
    let y
    let c 
    let soma = 0
    let valores = []
    c = prompt ("Quantos valores você irá digitar?");
    for (y=1;y<=c;y=y+1)
    {
    valores[y] = prompt ("Digite o valor número " + y);
    valores[y] = parseFloat(valores[y])
    soma = soma + valores[y]
    }
    media = soma/c;
    alert("A media dos valores é: " + media)
}

function usuar (){
    let idade = []
    let altura = []
    let sexo = []
    let masc = 0
    let fem = 0
    let maior = 0
    let adultos = 0
    let adolescentes = 0
    i = prompt("Digite quantos pessoas serão digitadas: ")
        for (z=0;z<i;z=z+1)
        {
            sexo[z] = prompt("Sexo pessoa " + z + " Digite 1 para masculino e 2 para feminino")
            idade[z] = prompt("Idade pessoa " + z)
            altura[z] = prompt("Altura pessoa " + z)
            if (sexo[z] == 1){
                masc = masc + 1;
            }else
            {
                fem = fem + 1;
            }
            if (maior<altura[z])
            {
                maior = altura[z]
                sexomaior = sexo[z]
            }
            if (idade[z] >= 18)
            {
                adultos = adultos + 1;
            }else{
                adolescentes = adolescentes + 1;
            }
        }
        alert("Foram registradas " + masc + " do sexo masculino e " + fem + " do sexo feminino");
        alert("A maior altura registrada é " + maior + " pertencente ao sexo " + sexomaior);
        alert("Foram registrados " + adultos + " adultos e " + adolescentes + " menores de idade");
}

function datax(){
    insert = document.getElementById('data')
    let meses = new Array('Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro')
    dia = prompt("Digite o dia de hoje")
    mes = prompt("Digite o mês")
    ano = prompt("Digite o ano")
    insert.innerHTML = `<p>Dia: ${dia}</p><br><p>Mês: ${meses[mes]}</p><br><p>ano: ${ano}</p>`
}




