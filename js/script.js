const userName = document.getElementById("user-name");
const path = document.getElementById("path");
const userAge = document.getElementById("user-age");
const genBtn = document.getElementById("gen-btn");
const annBtn = document.getElementById("ann-btn");
const btnUser = document.getElementById('btn-user');
const hiddenTicket = document.getElementById("hidden-ticket");
const price = document.getElementById('price');

// per mettere in display-none la section biglietto
hiddenTicket.style.display = "none";
const pricePerKm = 0.21;

// // al click del bottone attiva
genBtn.addEventListener('click', function() {
    // per mettere il nome cognome nel biglietto
    btnUser.innerHTML = userName.value;
    let ticketPrice = path.value * pricePerKm;

    if (userAge.value === "minorenne") {
        ticketPrice = (ticketPrice * 20) / 100;
    } else if (userAge.value === "over65") {
        ticketPrice = (ticketPrice * 40) / 100;
    }

    price.innerHTML = ticketPrice.toFixed(2) + " EUR";
    hiddenTicket.style.display = "block";
});

// al click del bottone annulla
// rimuovo i valori degli input e nascondo il biglietto

annBtn.addEventListener('click',function(){
    userName.value = "";
    path.value = "";
    hiddenTicket.style.display = "none";
}
)