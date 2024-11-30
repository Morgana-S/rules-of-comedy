addEventListener("DOMContentLoaded", function() {
    incrementRules();
})
let rulesNumber = 25000
let intervalRate;
function incrementRules() {
    setInterval(function() {
        let heading = document.getElementsByClassName('main-heading');
        heading[0].innerHTML = `<h1>The ${rulesNumber} rules of comedy`;
        updateRulesNumber();;
    }, 750)
}

function updateRulesNumber() {
    let newRulesNumber = Math.floor(Math.random() * 25);
    rulesNumber = rulesNumber + newRulesNumber;

}