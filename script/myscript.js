calculate.addEventListener("click", function(){
    const km = document.getElementById('distance').value;
    const userAge = document.getElementById('user-age').value;
    let price = km * 0.233;
    let discountPrice;

    const button = document.querySelector("button.calculate");


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
}
);

