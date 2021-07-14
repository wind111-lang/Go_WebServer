"use strict";

function card(mark, num) {
    this.mark = mark;
    this.num = num;
};

var cards = [];

function initialize() {
    var kazu = 0;
    for (var i = 1; i <= 13; i++) {
        cards[kazu] = new card("Spade", i);
        kazu++;
        cards[kazu] = new card("Clover", i);
        kazu++;
        cards[kazu] = new card("Heart", i);
        kazu++;
        cards[kazu] = new card("Diamond", i);
        kazu++;
    };
};
initialize();

var fight = document.getElementById('fight');
var drop = document.getElementById('drop');
var reset = document.getElementById('reset');
var start = document.getElementById('start');
var your_card = document.getElementById('your_card');
var com_card = document.getElementById('com_card');
var your_sum;
var com_sum;
var result = document.getElementById('result');
var kiroku = [];

start.addEventListener("click", function() {
    start = document.getElementById('start').disabled = true;
    var drawcard = Math.floor(Math.random() * 52);
    while (kiroku.indexOf(drawcard) >= 0) {
        drawcard = Math.floor(Math.random() * 52);
    };
    var com_field = document.createElement("td");
    var com_hand = document.createTextNode(cards[drawcard].mark + cards[drawcard].num);
    com_sum = cards[drawcard].num;
    com_card.appendChild(com_field);
    com_field.appendChild(com_hand);
    kiroku.push(drawcard);

    fight = document.getElementById('fight').removeAttribute("disabled");
    drop = document.getElementById('drop').removeAttribute("disabled");
});

drop.addEventListener("click", function() {
    fight = document.getElementById('fight').disabled = true;
    drop = document.getElementById('drop').disabled = true;
    var drawcard = Math.floor(Math.random() * 52);
    while (kiroku.indexOf(drawcard) >= 0) {
        drawcard = Math.floor(Math.random() * 52);
    };
    var your_field = document.createElement("td");
    var your_hand = document.createTextNode(cards[drawcard].mark + cards[drawcard].num);
    your_sum = cards[drawcard].num;
    your_card.appendChild(your_field);
    your_field.appendChild(your_hand);
    kiroku.push(drawcard);

    start = document.getElementById('start').disabled = true;
    result.innerHTML = "Dropped...";
});

reset.addEventListener("click", function() {
    location.reload();
});

fight.addEventListener("click", function() {
    fight = document.getElementById('fight').disabled = true;
    drop = document.getElementById('drop').disabled = true;
    var drawcard = Math.floor(Math.random() * 52);
    while (kiroku.indexOf(drawcard) >= 0) {
        drawcard = Math.floor(Math.random() * 52);
    };
    var your_field = document.createElement("td");
    var your_hand = document.createTextNode(cards[drawcard].mark + cards[drawcard].num);
    your_sum = cards[drawcard].num;
    your_card.appendChild(your_field);
    your_field.appendChild(your_hand);
    kiroku.push(drawcard);

    start = document.getElementById('start').disabled = true;


    if (your_sum > com_sum) {
        result.innerHTML = "You Win!!";
    } else if (your_sum === com_sum) {
        result.innerHTML = "Draw...";
    } else {
        result.innerHTML = "You Lose...";
    }

});