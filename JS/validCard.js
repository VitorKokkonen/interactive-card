const errors = [
    "Wrong Format, numbers only",
    "Can't be blank",
    "Invalid month"
]
function validaCartao() {
    const required = document.querySelectorAll('[required]');

    required.forEach(input => {
        let errorAdded = false;

        
        input.addEventListener('invalid', (e) => {
            e.preventDefault()
            input.style.borderColor = 'hsl(0, 100%, 66%)'
            const elementoMesInvalido = document.querySelector('.month').value
            const mesInvalido = parseInt(elementoMesInvalido)
            if (input.classList.contains('month')) {
                return;
            }
            if (!errorAdded && input.value == '') {
                const p = document.createElement('p')
                p.className = 'mensage-error'
                p.textContent = errors[1]

                input.parentNode.insertBefore(p, input.nextSibling)
                errorAdded = true
            } else if (mesInvalido > 12) {
                const divMes = document.querySelector('.data-experiation')
                const p = document.createElement('p')
                p.className = 'mensage-error'
                p.textContent = errors[2]

                divMes.appendChild(p);
            }
        })

    })


}
validaCartao()
