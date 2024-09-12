function soma (a, b) {
    return a + b;
}

function multiplicacao (a, b) {
    return a * b;
}

function subtracao (a, b) {
    return a - b;
}

function divisao (a, b) {
    if (b == 0) {
        return "Número dividido por zero!";
    }
    return a / b
}

function numeroPar (a) {
    if (a % 2 == 0) {
        return "Número par!";
    }
    return a
}

function somaIntervalo(inicio, fim) {
    let soma = 0;
    let expressao = '';
    for (let i = inicio; i <= fim; i++) {
        soma += i;
        expressao += (i === inicio ? '' : ' + ') + i;
    }
    console.log(`${soma} (${expressao})`);
}

function fatorial(n) {
    if (n === 0 || n === 1) return 1;
    let resultado = 1;
    let expressao = '';
    for (let i = n; i > 1; i--) {
        resultado *= i;
        expressao += (i === n ? '' : ' * ') + i;
    }
    expressao += ' * 1';
    console.log(`${expressao}`);
    return resultado;
}

function contarVogais(str) {
    const vogais = ['a', 'e', 'i', 'o', 'u'];
    let contagem = 0;
    let vogaisEncontradas = [];
    let expressao = '';
    
    for (let char of str.toLowerCase()) {
        if (vogais.includes(char)) {
            contagem++;
            vogaisEncontradas.push(char);
            expressao += (expressao === '' ? '' : ', ') + char;
        }
    }
    console.log(`${expressao}`);
    return contagem;
}


let resultado = contarVogais("teste");
console.log (resultado)