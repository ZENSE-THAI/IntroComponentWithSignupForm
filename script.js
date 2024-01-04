const form = document.querySelector('form')

form.addEventListener('submit', function (e)  {
    e.preventDefault()
    const input = document.querySelectorAll('Input')
    
    input.forEach(input => {
        if(input.value.trim() === '') {
            form.classList.add('error')
        }
        else{
            form.classList.remove('error')
        }
    });
})