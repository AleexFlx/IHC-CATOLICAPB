function showresult(){
    var n1 = parseFloat(document.getElementById('num1').value);
    var n2 = parseFloat(document.getElementById('num2').value);
    var r;
    
    var operacao = document.getElementById('operacao').value;
    
    switch (operacao) {
        case 'soma':
            r = n1 + n2;
            break;
        case 'subtracao':
            r = n1 - n2;
            break;
        case 'multiplicacao':
            r = n1 * n2;
            break;
        case 'divisao': 
            r = n1 / n2;
            break;
        default:
            r = 'Erro';
            break;
    }
    
    document.getElementById('resultado').value = r;
}