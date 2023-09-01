function dadosCartao() {
    const numberInput = document.getElementById('number');
    const numberCard = document.getElementById('card-number');
    const number = numberInput.value.replace(/\D/g, '');
    const formattedNumber = number.replace(/(\d{4})(?=\d)/g, '$1 ');

    if (formattedNumber !== "") {
        numberInput.value = formattedNumber;
        numberCard.innerHTML = formattedNumber;
    } else {
        numberInput.value = "";
        numberCard.innerHTML = "0000 0000 0000 0000";
    }

    const name = document.getElementById('name').value
    const nameCard = document.getElementById('name-card')

    if (name !== "") {
        nameCard.innerHTML = name
    } else {
        nameCard.innerHTML = "Jane Appleseed"
    }

    const month = document.querySelector('.month').value
    const monthCard = document.getElementById('month');

    if (month !== ""){
        monthCard.innerHTML = month;
    } else {
        monthCard.innerHTML = "00"
    }
   
    const year = document.querySelector('.year').value
    const yearCard = document.getElementById('year');

    if (year !== ""){
        yearCard.innerHTML = year;
    } else {
        yearCard.innerHTML = "00"
    }

    const cvc = document.getElementById('cvc').value
    const cvcCard = document.getElementById('cvcCard')

    if(cvc !== ''){
        cvcCard.innerHTML = cvc
    } else{
        cvcCard.innerHTML = '000'
    }

    buttonEvent()
}

function buttonEvent(){
    const buttonContinue = document.getElementById('form')
    const sucess = document.getElementById('sucess')

    buttonContinue.addEventListener('submit', (e) => {
        e.preventDefault()
        buttonContinue.style.display = 'none'
        sucess.style.display = 'flex'

    })

    const buttonConfirm = document.getElementById('button-continue')
    buttonConfirm.addEventListener('click', (e) =>{
        e.preventDefault()

        buttonContinue.style.display = 'flex'
        sucess.style.display = 'none'

        const input = document.querySelectorAll('input')
        input.forEach(input => {
            input.value = ''   
            input.style.borderColor = '#ccc'
        })

        const error = document.querySelector('.mensage-error')
        error.remove()
    })
}
dadosCartao()
