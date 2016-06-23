$(document).ready(function() {

/**
 * Version 1.0, Jan 2012
 */

var Markit = {};
/**
* Define the QuoteService.
* First argument is symbol (string) for the quote. Examples: AAPL, MSFT, JNJ, GOOG.
* Second argument is fCallback, a callback function executed onSuccess of API.
*/
Markit.QuoteService = function(sSymbol, fCallback) {
    this.symbol = sSymbol;
    this.fCallback = fCallback;
    this.DATA_SRC = "http://dev.markitondemand.com/Api/v2/Quote/jsonp";
    this.makeRequest();
};
/**
* Ajax success callback. fCallback is the 2nd argument in the QuoteService constructor.
*/
Markit.QuoteService.prototype.handleSuccess = function(jsonResult) {
    this.fCallback(jsonResult);
};
/**
* Ajax error callback
*/
Markit.QuoteService.prototype.handleError = function(jsonResult) {
    console.error(jsonResult);
};
/**
* Starts a new ajax request to the Quote API
*/
Markit.QuoteService.prototype.makeRequest = function() {
    //Abort any open requests
    if (this.xhr) { this.xhr.abort(); }
    //Start a new request
    this.xhr = $.ajax({
        data: { symbol: this.symbol },
        url: this.DATA_SRC,
        dataType: "jsonp",
        success: this.handleSuccess,
        error: this.handleError,
        context: this
    });
};
var sym = prompt("quote")
new Markit.QuoteService(sym, function(jsonResult) {

    //Catch errors
    if (!jsonResult || jsonResult.Message){
        console.error("Error: ", jsonResult.Message);
        return;
    }

    //If all goes well, your quote will be here.
    console.log(jsonResult);

var stock = makePersonCard(jsonResult)
    //Now proceed to do something with the data.
    $("h1").first().text(jsonResult.Name);
    $('.display').append(stock);


    /**
    * Need help? Visit the API documentation at:
    * http://dev.markitondemand.com
    */
});


// var trutheyTester = function(expr) {
//   console.log(expr ? "truthey" : "falsey")
//     return expr ? "truthey" : "falsey";
// }
//
// var nums = [];
// if (limit === 0) {return } else {
//   for (i=1; i < limit; i++) {
//   nums.push(i);
// }
// return nums
// }
'use strict'




  $("div").on("mouseover", ".card", function() {
        // console.log( $( this ).text() );
        $(this).removeClass('animated jello bounceInLeft over')
        $(this).addClass('animated jello over')
    });
    $("div").on("animationend", ".card", function(e) {
        $(this).removeClass('jello bounceInLeft over')
    })





    var all = [];
var page;
    $("button.btn").click(getInfo);

    function renderPage(page) {
 page = page || 1



        $.ajax(`http://swapi.co/api/people/?page=${page}`)
                .done(function(data) {

                  var personObj = data.results;
                  var pageCard = personObj.map(makePersonCard)
                    $('.display').append(pageCard)
                })
                .fail(function(err) {
                    console.log(err);
                })


}

function getInfo() {
    event.preventDefault();
    var user = $('#num').val();
    $.ajax({
        url: `http://swapi.co/api/people/${user}/`,
        success: function(Pdata) {
            var $P = makePersonCard(Pdata);
            $('.display').append($P);

        },
        error: function(err) {
            console.log(err);
        }
    });
}





function makePersonCard(personObj) {
    var $card = $('<div>').addClass('card');
    var x = personObj.name
    var y = personObj.birth_year
    var z = personObj.gender
    var $name = $('<p>').text("Name: " + x);
    var $bday = $('<p>').text("Birth: " + y);
    var $sex = $('<p>').text("Sex: " + z);
    $card.append($name, $bday, $sex);
    return $card
}
renderPage();


function makeStockCard(symb) {
    var $card = $('<div>').addClass('card');
    var x = symb.name
    var y = symb.LastPrice
    var z = symb.MarketCap
    var $name = $('<p>').text("Name: " + x);
    var $price = $('<p>').text("Price: " + y);
    var $market = $('<p>').text("MarketCap: " + z);
    $card.append($name, $price, $market);
    return $card
}
});
