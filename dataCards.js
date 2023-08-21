function dadosCartao() {
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

}
dadosCartao()
