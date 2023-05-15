const calculate = document.querySelector("p.calculate");

calculate.addEventListener("click", function(){
    const km = document.getElementById('distance').value;
    const userAge = document.getElementById('user-age').value;
    let price = km * 0.233;
    let discountPrice;

    let writeKm;
    let writeUserAge;
    let writeFinalPrice;
    
    if(userAge < 18){
        discountPrice = (price / 100) * 19.4;
        price = price - discountPrice;
        console.log("Il prezzo è " + price.toFixed(2));
    }else if(userAge > 65){
        discountPrice = (price / 100) * 37.7;
        price = price - discountPrice;
        console.log("Il prezzo è " + price.toFixed(2));
    }else{
        price = km * 0.233
        console.log("Il prezzo è " + price.toFixed(2));
    }

    writeKm = document.getElementById("final-km").innerHTML = "I chilometri che vuoi percorrere sono: " + km;

    writeUserAge = document.getElementById("final-user-age").innerHTML = "La tua età è: " + userAge;

    writeFinalPrice = document.getElementById("final-price").innerHTML = "Il prezzo del biglietto è: " + price.toFixed(2);
}
);

