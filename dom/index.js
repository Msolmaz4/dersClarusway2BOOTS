const btn = document.getElementById('btn')
const baslik = document.querySelectorAll('.H1')


baslik[0].innerHTML ='<a> dom cok kolay </a>'
baslik[1].textContent = 'iyimisin'

document.querySelector('title').textContent= 'dom 🌴'
//document.querySelector('#badi').style.backgroundImage = 'linear-gradient(green,pink)'
const js =document.querySelector('#js')
const badi = document.querySelector('#badi')

js.onmouseover= ()=>{
    badi.style.backgroundColor = 'pink'
}
js.onmouseout=()=>{
    badi.style.backgroundColor ='blueviolet'  //eger mouseout olursa background rengini degistirir
}
const bir =document.querySelector('.bir')
const iki =document.querySelector('.iki')

bir.onclick=()=>{
    bir.src='./img/logo2.png'
    iki.src = './img/js_logo.png'

    iki.onclick=()=>{
    bir.src="./img/js_logo.png"
    iki.src='./img/logo2.png'
}
}
iki.ondblclick= ()=>{
    bir.src='./img/bir.jpeg'
    iki.src='./img/iki.webp'
}

btn.onclick=()=>{
    badi.style.backgroundImage = 'linear-gradient(to right,purple,gray)'
    btn.textContent = 'search'
    
}