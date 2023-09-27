const btn = document.querySelectorAll('.btn1')
const sonuc = document.querySelector('.sonuc')
const clear= document.querySelector('.btn17')
const op = document.querySelectorAll('.btn12')
const esit = document.querySelector('.btn15')


clear.addEventListener('click',()=>{
    sonuc.value='0'
    location.reload()
})

btn.forEach((er)=> {
    er.addEventListener('click',()=>{
        console.log(er.textContent)
        if(sonuc.value == '0'){
            sonuc.value = ''
        }
        sonuc.value += er.textContent

    })
})
op.forEach((der)=>{
    console.log(der)
    der.addEventListener('click',()=>{
        sonuc.value += der.textContent
    })
})
esit.addEventListener('click',()=>{
    sonuc.value =eval(sonuc.value)
})