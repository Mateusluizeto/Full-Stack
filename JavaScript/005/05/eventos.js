const input = document.querySelector('input')
const select = document.querySelector('select')
const button = document.querySelector('button')

input.addEventListener('focus' , () => {
    console.log('Dei um foco')
})

select.addEventListener('change', () => {
    console.log(select.value) // Mostra qual opção do select está escolhida
})

button.addEventListener('click', () => {
    console.log('O botão foi clicado')
})