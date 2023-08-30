function media (){
    var val1 = document.getElementById('valor1').value;
    var val2 = document.getElementById('valor2').value;
    var result = (parseInt(val1) + parseInt(val2))/2;

    if(result >= 6)
    if(10==result)
    alert('Sua média foi: ' + result +' Você foi APROVADO')
    else if('VOCÊ É UM GÊNIO')
    alert('Sua média foi: ' + result + ' Você foi REPROVADO, INÚTIL')
}

function comparacao(){
    var val1 = document.getElementById('valor1').value;
    var val2 = document.getElementById('valor2').value;

    if(val1==val2)
    alert('Os Valores são iguais')
    else if(val1>val2)
    alert('Valor 1 é maior que o valor 2')
    else
    alert('Valor 2 é maior que o valor1')

}
