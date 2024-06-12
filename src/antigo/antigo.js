let venc = document.getElementById('venc')
let prec = document.getElementById('prec')
const btn = document.getElementById('btn')
let resu = document.getElementById('resU')

let hoje = new Date()
let d = hoje.getDate()
d = d < 10 ?  "0" + d : d

let m = hoje.getMonth()
m = m + 1
m = m < 10 ? "0" + m : m

let a = hoje.getFullYear()

let dataA = `${a}-${m}-${d}`
console.log(dataA)


 btn.addEventListener('click', ()=>{
    let data = venc.value + ' 00:00:00'   
    console.log(data)
    let res = Math.abs(new Date(data) - new Date(dataA)) //MILISSEGUNDOS
    
    res = res / 1000 //SEGUNDO
    
    res = res / 60 //MINUTO
    
    res = res / 60 //HORA
    
    res = res / 24 // DIA
    let resD = Number.parseInt(res)
    console.log(resD)
    
    res = res / 30 // MÊS
    let resM = Number.parseInt(res)
    
    res = res / 365 // ANO
    let resA = Number.parseInt(res)


    if (prec.value != '' && venc != ''){
        resu.innerHTML = ''
        let preco = prec.value.toLocaleString('pt-br', {style:'currency', currency:'Brl'})
        if(resD > 60 && resD <= 90){
            let p1 = prec.value * 10/100
            let prec1 = prec.value - p1
            prec1 = prec1.toLocaleString('pt-br', {style:'currency', currency:'Brl'})         
            resu.innerHTML += `<p>Faltam ${resD} dias para o vencimento</p>`
            resu.innerHTML += '<p>Desconto de 10%</p>'
            resu.innerHTML += `<p>Valor Atual: R$ ${preco}</p>`
            resu.innerHTML += `<p>Valor Desconto: ${prec1}</p>`
                
        } if(resD > 30 && resD <= 60){
            let p2 = prec.value * 20 / 100
            let prec2 = prec.value - p2
            prec2 = prec2.toLocaleString('pt-br', {style:'currency', currency:'Brl'})
            resu.innerHTML += `<p>Faltam ${resD} dias para o vencimento</p>`
            resu.innerHTML += '<p>Desconto de 20%</p>'
            resu.innerHTML += `<p>Valor Atual: R$ ${preco}</p>`
            resu.innerHTML += `<p>Valor Desconto: ${prec2}</p>`
                    
        } else if(resD <= 30)  {
            let p3 = prec.value * 30 / 100
            let prec3 = prec.value - p3
            prec3 = prec3.toLocaleString('pt-br', {style:'currency', currency:'Brl'})           
            resu.innerHTML += `<p>Faltam ${resD} dias para o vencimento</p>`
            resu.innerHTML += '<p>Desconto de 30%</p>'
            resu.innerHTML += `<p>Valor Atual: R$ ${preco}</p>`
            resu.innerHTML += `<p>Valor Desconto: ${prec3}</p>`    
        } else if(resD > 90) {
            resu.innerHTML += `<p>Faltam ${resD} dias para o vencimento</p>`
            resu.innerHTML += '<P>FORA DO PERÍODO DE DESCONTO!</P>'
        }

    } else {
        resu.innerHTML += '<p>INSIRA OS DADOS!</p>' 
    }
       
})







