let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []

function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <=100) {
        return true
    } else {
        return false
    }
}

function isLista(n, l) { 
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
        
}

function adicionar() {
    if(isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.txt = `Valor ${num.value} adicionado`
        lista.appendChild(item)    
        res.innerHTML = ''
    } else {
        window.alert('Valor inválido ou já encontrado na lista.')
    }
    num.value = ''
    num.focus()
}

function finalizar() {
    if(valores.length == 0) {
        window.alert('Adicione valores antes de finalizar')
    } else {
        let tot = valores.length
        let maior = valores [0]
        let menor = valores [0]
        let soma = 0
        let media = 0
        for(let pon in valores) {
            soma += valores[pos]
            if (valores[pos] > maior) 
                maior = valores[pos]
            if (valores[pos] < menor)
                menos = valores [pos]
            }
        }
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${tot} número cadastrados.`
        res.innerHTML += `<p>O maior valor informado foi ${maior}.`
        res.innerHTML += `<p>O menor valor informado foi ${menor}.`
        res.innerHTML += `Somando todos os valores, temos ${soma}`
        res.innerHTML += `<p> A média dos valores digitados é ${media}.`
}


