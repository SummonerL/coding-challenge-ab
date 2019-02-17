// let's pull in the json on page load
$(document).ready(function() {
    var rates = [];
    $.getJSON( "https://raw.githubusercontent.com/allylabs/fed-coding-challenge/public/code-test.json", function( json ) {
        constructTable(rates.concat(json));
    });
});

function openNav() {
    $('#primary-nav').toggleClass('nav__items-open');
};

function toggleModal(modalName) {
    $('#'+modalName).toggleClass('modal-open');
}

function changeTab(oldTab, newTab) {
    $('#'+oldTab).removeClass('tab__content-active');
    $('#'+newTab).addClass('tab__content-active')

    $('#'+oldTab+'-tab').removeClass('tab__control-active');
    $('#'+newTab+'-tab').addClass('tab__control-active');
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
