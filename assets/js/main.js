
function ticketPrice(){

    var ppkm = 0.21; /* euro/km */
    var ageunder = 18; /* minorenni */
    var ageover = 65; /* over aged people */
    var discunder = 20/100; /* discount for under 18 */
    var discover = 40/100; /* discount for over 65 */

    var numberkm = +document.getElementById('kmNumber').value;
    var passengerAge = +document.getElementById('passengerAge').value;
    
    var totalPrice = numberkm * ppkm; /* compute total price */

    /* start: apply discount */
    if (passengerAge < ageunder) {
        var priceFinal = totalPrice * ( 1 - discunder );
    } else if (passengerAge >= ageover) {
        var priceFinal = totalPrice * ( 1 - discover );
    } else {
        var priceFinal = totalPrice;
    }
    /* end: apply discount */

    priceFinal = parseFloat(priceFinal.toFixed(2));

    let stringPriceFinal = priceFinal.toString();

    /* document.getElementById('p_result').innerText = priceFinal.toString(); */

    document.getElementById('p_result').innerText = stringPriceFinal.concat("€");

    return priceFinal

}

