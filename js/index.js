"use strict";
const venc = document.getElementById('venc');
const prec = document.getElementById('prec');
const btn = document.getElementById('btn');
const resu = document.getElementById('resU');
const formatDate = (date, format) => {
    const map = {
        mm: date.getMonth() + 1,
        dd: date.getDate(),
        yyyy: date.getFullYear()
    };
    return format.replace(/yyyy|mm|dd/gi, (matched) => map[matched]);
};
const text = (preco, precoDesconto, diferencaDias, desconto) => {
    resu.innerHTML += `<p>Faltam ${diferencaDias} dias para o vencimento</p>`;
    resu.innerHTML += `<p>Desconto de ${desconto}%</p>`;
    resu.innerHTML += `<p>Valor Atual: R$ ${preco}</p>`;
    resu.innerHTML += `<p>Valor Desconto: ${precoDesconto}</p>`;
};
btn.addEventListener('click', () => {
    const dataAtual = formatDate(new Date(), 'yyyy-mm-dd');
    const dataUsuario = String(venc.value);
    const preco = (prec.value);
    let res = Math.abs(new Date(dataUsuario).getTime() - new Date(dataAtual).getTime()) / (1000 * 60 * 60 * 24);
    const diferencaDias = Math.floor(res) + 1;
    if (preco != '' && dataUsuario != '') {
        resu.innerHTML = '';
        if (diferencaDias > 60 && diferencaDias <= 90) {
            let p10 = preco * 10 / 100;
            const precoDesconto = (preco - p10).toLocaleString('pt-br', { style: 'currency', currency: 'Brl' });
            text(preco, precoDesconto, diferencaDias, 10);
        }
        if (diferencaDias > 30 && diferencaDias <= 60) {
            let p10 = preco * 20 / 100;
            const precoDesconto = (preco - p10).toLocaleString('pt-br', { style: 'currency', currency: 'Brl' });
            text(preco, precoDesconto, diferencaDias, 20);
        }
        if (diferencaDias <= 30) {
            let p10 = preco * 30 / 100;
            const precoDesconto = (preco - p10).toLocaleString('pt-br', { style: 'currency', currency: 'Brl' });
            text(preco, precoDesconto, diferencaDias, 30);
        }
        if (diferencaDias > 90) {
            resu.innerHTML += `<p>Faltam ${diferencaDias} dias para o vencimento.</p>`;
            resu.innerHTML += `<p>FORA DO PERÍDO DE DESCONTO!!</p>`;
        }
    }
    else {
        resu.innerHTML += '<p>INSIRA OS DADOS!</p>';
    }
});
