const errors = [
    "Wrong Format, numbers only",
    "Can't be blank",
    "Invalid month"
]
function validaCartao() {
    const required = document.querySelectorAll('[required]');

    required.forEach(input => {
        input.addEventListener('invalid', (e) => {
            e.preventDefault()            

            const elementoMesInvalido = document.querySelector('.month').value;
            const mes = parseInt(elementoMesInvalido)

            
            if (input.value == '') {
                const errorIndex = input.validity.valueMissing ? 1 : 0; 
                const errorMessage = errors[errorIndex];

                const para = document.createElement('p');
                para.innerHTML = errorMessage;

                input.parentNode.insertBefore(para, input.nextSibling);
            } else if (mes > 12) {
                const divDoMes = document.querySelector('.data-experiation')
                const mesInvalido = document.createElement('p')
                
                divDoMes.appendChild(mesInvalido)
                
            }
        });
    });

}
validaCartao()
