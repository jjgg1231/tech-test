import $ from 'jquery';

console.log('nick');

$(document).ready(function () {
    $('.js-basket-desktop-trigger').click(function () {
        $('.basket-summary__breakdown-content--visible').slideToggle();
    });
});

$('.basket-summary__totals').height($('.basket-summary__breakdown').height());