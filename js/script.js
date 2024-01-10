const userName = document.getElementById ("user-name");
const path = document.getElementById ("path");
const userAge = document.getElementById ("user-age");
const genBtn = document.getElementById ("gen-btn");
const btnUser = document.getElementById('btn-user')
const hiddenTicket = document.getElementById("hidden-ticket")
const price = document.getElementById('price')

// per mettere in display-none la section biglietto
hiddenTicket.style.display = "none"


// // al click del bottone attiva
genBtn.addEventListener( 'click', function() {

// per mettere il nome cognome nel biglietto
 btnUser.innerHTML = userName.value
if( userAge.value === "minorenne" ){
    price.innerHTML = (path.value * 0.21) * 0.8
  
}else if( userAge.value === "maggiorenne" ){  
 price.innerHTML = (kmHtml.value * 0.21) * 0.2
  
}else if( userAge.value === "over65" ){  
    price.innerHTML = (kmHtml.value * 0.21) * 0.6
}
});