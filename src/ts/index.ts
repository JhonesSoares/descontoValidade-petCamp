const venc = document.getElementById('venc') as HTMLAnchorElement;
const prec = document.getElementById('prec') as HTMLAnchorElement;
const btn = document.getElementById('btn') as HTMLAnchorElement;
const resu = document.getElementById('resU') as HTMLAnchorElement;

const formatDate = (date: Date, format: string) => {
    const map:any = {
        mm: date.getMonth() + 1,
        dd: date.getDate(),
        yyyy: date.getFullYear()
    }
    return format.replace(/yyyy|mm|dd/gi, (matched: string):any => map[matched])
}

const text = (preco:any, precoDesconto:string, diferencaDias:number, desconto:number)=>{
    resu.innerHTML += `<p>Faltam ${diferencaDias} dias para o vencimento</p>`
    resu.innerHTML += `<p>Desconto de ${desconto}%</p>`
    resu.innerHTML += `<p>Valor Atual: R$ ${preco}</p>`
    resu.innerHTML += `<p>Valor Desconto: ${precoDesconto}</p>`
}

btn.addEventListener('click', ()=>{
    const dataAtual = formatDate(new Date(), 'yyyy-mm-dd');
    const dataUsuario:string = String(venc)  
    const preco:any = (prec) 

    let res = Math.abs(new Date(dataUsuario).getTime() - new Date(dataAtual).getTime()) / (1000 * 60 * 60 * 24); // Dias
    const diferencaDias = Math.floor(res) + 1;

    if(preco != '' && dataUsuario != ''){
        resu.innerHTML = ''
        if(diferencaDias > 60 && diferencaDias <= 90){
            let p10:number = preco * 10/100
            const precoDesconto:string = (preco - p10).toLocaleString('pt-br', {style:'currency', currency:'Brl'});
            text(preco, precoDesconto, diferencaDias, 10)   
        }
        if(diferencaDias > 30 && diferencaDias <= 60){
            let p10:number = preco * 20/100
            const precoDesconto:string = (preco - p10).toLocaleString('pt-br', {style:'currency', currency:'Brl'});
            text(preco, precoDesconto, diferencaDias, 20)   
        }
        if(diferencaDias <= 30){
            let p10:number = preco * 30/100
            const precoDesconto:string = (preco - p10).toLocaleString('pt-br', {style:'currency', currency:'Brl'});
            text(preco, precoDesconto, diferencaDias, 30)   
        }
        if(diferencaDias > 90){
            resu.innerHTML += `<p>Faltam ${diferencaDias} dias para o vencimento.</p>`
            resu.innerHTML += `<p>FORA DO PERÍDO DE DESCONTO!!</p>`
        }
    } else {
        resu.innerHTML += '<p>INSIRA OS DADOS!</p>'
    }
    //console.log('diferença entre as datas: ' + diferencaDias);
    //console.log('data atual: ' + dataAtual)
    //console.log('data usuario: ' + dataUsuario)
    //console.log('preço usuário: ' + preco)   
})