function dadosCartao() {
    const number = document.getElementById('number').value
    const numberCard = document.getElementById('card-number')

    if(number !== ""){
        numberCard.innerHTML = number
    } else{
        numberCard.innerHTML = "0000 0000 0000 0000"
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



}
dadosCartao()
