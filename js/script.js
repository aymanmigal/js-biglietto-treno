// PROMPT INSERIMENTO DATI UTENTE
let number_km = parseInt(prompt('Quanti Km vuoi percorrere?'));

let user_age = parseInt(prompt('Quanti anni hai?'));

// VARIABILI
let price_km = 0.21;

let total_price = (number_km * price_km);

let under_18_price;

let over_65_price;

// CALCOLO E STAMPA DEL PREZZO DELLA TARIFFA UTENTE  
if (isNaN(number_km) || isNaN(user_age) || (user_age===0) || (number_km===0)){
    alert('Uno dei due numeri non e un numero');
}

else if (user_age < 18){
    under_18_price = (total_price - (total_price * 20 / 100)).toFixed(2);
    document.getElementById('ticket_price').innerHTML = `Il prezzo é di ${under_18_price} € (per te uno sconto del 20%)`;
}

else if (user_age > 65){
    over_65_price = (total_price - (total_price * 40 / 100)).toFixed(2);
    document.getElementById('ticket_price').innerHTML = `Il prezzo é di ${over_65_price} € (per te uno sconto del 40%)`;
}

else {
    document.getElementById('ticket_price').innerHTML = `Il prezzo é di ${total_price} €`;
}
