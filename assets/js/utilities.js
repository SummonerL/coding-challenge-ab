// let's pull in the json on page load
$(document).ready(function() {
    var rates = [];
    $.getJSON( "https://raw.githubusercontent.com/allylabs/fed-coding-challenge/public/code-test.json", function( json ) {
        rates = rates.concat(json);

        constructTable(rates);
    });
});

function openNav() {
    $('#primary-nav').toggleClass('nav__items-open');
};

function toggleModal(modalName) {
    $('#'+modalName).toggleClass('modal-open');
}

function constructTable(rates) {
    // sort rates by earnings
    rates = rates.sort(function(rate1, rate2) {return rate2.earnings - rate1.earnings})

    rates.forEach(function (rate) {
        $('#ratesTable tbody').append(
            '<tr><td>' +
            rate.name +
            '</td><td>' +
            rate.apy +
            ' %</td><td>$' +
            (rate.earnings).toFixed(2) +
            '</td></tr>'
        );
    });
}