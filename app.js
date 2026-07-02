const h1El = document.querySelector('h1')
const buttonEl = document.querySelector('button')


let cookies = 0 
buttonEl.addEventListener('click', ()=>{
    cookies += 1

    h1El.textContent = `You won ${cookies} cookies!`
})