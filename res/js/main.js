//document.getElementById() - ziska element z html dokumentu
// odkaz na github spsmb https://github.com/SPSMB
const cookie = document.getElementById("cookie");
const counter = document.getElementById("counter");
// .onclick na kliknuti
// () => {} arrow fce
let numberOfCookies = 0;

cookie.onclick = () => {
    //numberOfCookies = numberOfCookies + 1;
    //numberOfCookies += 1;
    //++ inkrement - zveda cislo o 1
    //-- dekrement - zmensuje cislo o 1
    numberOfCookies++;
    //counter.innerHTML = "Cookies: " + numberOfCookies;
    counter.innerHTML = `Cookies: ${numberOfCookies}`;
}

//na jeden řádek komentář
/* na více řádků */
/* const - promena co se meni, let - promena co se muze zmenit
const PI = 3.14;
let number = 0;
console.log(number);
number = 10;
console.log(number);
console.log(PI);*/