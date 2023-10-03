//document.getElementById() - ziska element z html dokumentu
// odkaz na github spsmb https://github.com/SPSMB
const cookie = document.getElementById("cookie");
const counter = document.getElementById("counter");
const upgradeclick = document.getElementById("upgradeclick");
const upgradeclick2 = document.getElementById("autoclicker");
// .onclick na kliknuti
// () => {} arrow fce
let numberOfCookies = 0;
let cookieIncrease = 1;
let autoclickerIncrease = 0;
let autoclicker;
let upgradeclickCost = 50;
let upgradeclick2Cost = 100;

upgradeclick2.onclick = () => {
    if (numberOfCookies >= upgradeclick2Cost){
        //odecist 100
        numberOfCookies -= upgradeclick2Cost;
        upgradeclick2Cost
        //zobrazit pocet susenek
        counter.innerHTML = `Cookies: ${numberOfCookies}`;
        //autoclickerIncrease zvednout
        autoclickerIncrease++;
        //clear interval
        clearInterval(autoclicker)
        //spusteni opakovani
        autoclicker = setInterval( () =>{
            console.log("Interval")
            numberOfCookies +=autoclickerIncrease;
            counter.innerHTML = `Cookies: ${numberOfCookies}`;
        }, 1000)
    }
}
cookie.onclick = () => {
    //numberOfCookies = numberOfCookies + 1;
    //numberOfCookies += 1;
    //++ inkrement - zveda cislo o 1
    //-- dekrement - zmensuje cislo o 1
    numberOfCookies += cookieIncrease; //++-1
    //counter.innerHTML = "Cookies: " + numberOfCookies;
    counter.innerHTML = `Cookies: ${numberOfCookies}`;
}
upgradeclick.onclick = () => {
    //Pokud mame susenek vic nebo rovno 50
    if (numberOfCookies >= 50){
        //odecist 50
        //numberOfCookies = numberOfCookies - 50
        numberOfCookies -= 50;
        //zobrazit susenky
       
        //zvednoutklikani
        cookieIncrease++;
    }
}
// {} - scope, roysah fce/definice fce
function cheats () {
    numberOfCookies += 1000
    counter.innerHTML = `Cookies: ${numberOfCookies}`;

}
const superCheats = () => {
    numberOfCookies += 1000000
    counter.innerHTML = `Cookies: ${numberOfCookies}`;
}
cheats();
cheats();
cheats();
superCheats();
superCheats();
//na jeden řádek komentář
/* na více řádků */
/* const - promena co se meni, let - promena co se muze zmenit
const PI = 3.14;
let number = 0;
console.log(number);
number = 10;
console.log(number);
console.log(PI);*/