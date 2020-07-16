//I have got a help with this project:- https://islam888.github.io/Memory-Game/
//variable that selects the timer
const watch = document.getElementById('watch');
//variable that selects the deck that holds all the cards
const deck = document.querySelector('.deck');
//variable that selects all the page content
const container = document.querySelector('.container');
//variable that selects match class
const matchedCards = document.getElementsByClassName('match');
//variable that selects restart-game button
const restart = document.querySelector('.restart-game');
//variable that selects gameEnd message div
const message = document.querySelector('.GameEnd');
//variable that selects moves counter span
const moves = document.querySelector('.moves');
//variable that holds the moves counter steps
const congrats = document.querySelector('.congratulation-msg');
//variable that selects open class
let openCards = deck.querySelectorAll('.open');
//variable that selects card class
const allCards = document.querySelectorAll('.card');
//variable that selects play-again button
const playAgain = document.querySelector('.Play-again');
//variable that selects stars in the scorepanel
const stars = document.querySelector('.stars');
//variable that selects stars in the gameEnd message
const starsMsg = document.querySelector('.stars-msg');
//variable that selects firststar in the scorepanel
const firstStar = stars.getElementsByTagName('li')[2].firstElementChild;
//variable that selects secondstar in the scorepanel
const secondStar = stars.getElementsByTagName('li')[1].firstElementChild;
//variable that selects thirdstar in the scorepanel
const thirdStar = stars.getElementsByTagName('li')[0].firstElementChild;
//variable that selects firststar in the gameEnd
const firststarmsg = starsMsg.getElementsByTagName('li')[2].firstElementChild;
//variable that selects secondstar in the gameEnd
const secondstarmsg = starsMsg.getElementsByTagName('li')[1].firstElementChild;
//variable that selects thirdstar in the gameEnd
const thirdstarmsg = starsMsg.getElementsByTagName('li')[0].firstElementChild;
//variable that selects
const starmsg = document.querySelector('.star');
//variable that movescounter
let movescounter = 0;
//variable that holds seconds
let sec = 0;
//variable that holds minutes
let min = 0;
//variable that holds stopwatch
var stopWatch;
//creating variables that holds all card icons
const diamond = '<i class="fa fa-diamond"></i>';
const plane = '<i class="fa fa-paper-plane-o"></i>';
const anchor = '<i class="fa fa-anchor"></i>';
const bolt = '<i class="fa fa-bolt"></i>';
const cube = '<i class="fa fa-cube"></i>';
const leaf = '<i class="fa fa-leaf"></i>';
const bicycle = '<i class="fa fa-bicycle"></i>';
const bomb = '<i class="fa fa-bomb"></i>';
const iconsArray = [diamond, diamond, plane, plane, anchor  , anchor  , bolt , bolt, cube   , cube   , leaf , leaf , bicycle , bicycle , bomb , bomb];
const shuffledIcons = shuffle(iconsArray);
    insertIcons();

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length,
        temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}
//function that manipulate shuffled icons
function insertIcons() {
        for (const index in shuffledIcons) {
            const singleCard = document.querySelector('#card'+ index);
            singleCard.innerHTML = shuffledIcons[index];
        }
    }
//EventListener of the deck cards    
deck.addEventListener('click', clickFunction, false);

//EventListener of the restart function
restart.addEventListener('click', Restart, false);

//Event Listener of playagain message
playAgain.addEventListener('click', hideMessage, false);

//function that checks the card match algorithm. 
function clickFunction(e){
    timer();
    const clickedCard = e.target;
    openCards = deck.querySelectorAll('.open');
    //algorithm that makes comparison between two cards.
    if(clickedCard.nodeName == 'LI'){
        //check if the first card is clicked.
        if(openCards.length == 0 ){
            //check if the clickedCard has class match.
            if(!clickedCard.classList.contains('match')){
                //revel the cards.
                clickedCard.classList.add('open','show');
                //get the new card
                openCards = deck.querySelectorAll('.open');
            }
            //check if the second card is clicked.
        }else if(openCards.length == 1){
            //check if the second card has class match.
            if(!clickedCard.classList.contains('match')){
                //revel the card.
                clickedCard.classList.add('open', 'show');
                //get the new card.
                openCards = deck.querySelectorAll('.open');
            };
            //check if two cards are open and matched
            if((openCards.length == 2) && (openCards[0].innerHTML == openCards[1].innerHTML)) {
                setTimeout( function(){
                    openCards[1].classList.add ('match')
                    openCards[1].classList.remove('show','open')
                    openCards[0].classList.add('match')
                    openCards[0].classList.remove('show', 'open')
                    stepCounter();
                    gameEnd();
                },500);
                //check if two cards open and aren't matched.
            }else if((openCards.length == 2) && (openCards[1].innerHTML !== openCards[0].innerHTML)){
                setTimeout( function(){
                    openCards[1].classList.remove('open','show');
                    openCards[0].classList.remove('open','show')  },500);
                    stepCounter()
            };
        };
    };
    starsCounter()
}

//function that prevent previous stopwatch
function timer(){if (stopWatch) {clearInterval(stopWatch);}

//function that makes time counter
stopWatch = setInterval(function(){
    watch.textContent = '0' + min + ':' + '0' + sec;
    if(sec > 9){
        watch.textContent = '0' + min + ':'  + sec;
    }
    if(sec > 59){
        min++;
        sec = 0;
        watch.textContent = '0' + min + ':' + '00';
    }
    if(min > 9){
        watch.textContent =  min + ':'  + sec;
    }
    sec++;},1000);};
 
//function that makes stepcounter
function stepCounter(){
    movescounter++

    if(movescounter < 9){
        moves.textContent = '0' + movescounter
    }else if (movescounter > 9){
        moves.textContent =  movescounter ;
    }else {
        moves.textContent = 0 ;
    }
}

//function that makes game Ends
function gameEnd(){
    if(matchedCards.length == 16){
        clearInterval(stopWatch);
        message.classList.remove('hide');

        congrats.textContent = 'completed in '+  movescounter +  ' moves'
    };
};

//functions that makes star counter
function starsCounter(){
    if(movescounter == 15){
        firstStar.classList.add('hidestar');
        firststarmsg.classList.add('hidestar');
    }else if(movescounter == 20){
        secondStar.classList.add('hidestar');
        secondstarmsg.classList.add('hidestar');
    };
};

//function that hide Gongratulation message
function hideMessage(){    
message.classList.add('hide');
Restart();
};

//function that makes game restart
function Restart(){
    sec = 0;
    min = 0;
    watch.textContent = '0' + min + ':' + '0' + sec;
    clearInterval(stopWatch);
    shuffle(iconsArray);
    insertIcons();
    movescounter = 0;
    moves.textContent = 0 ;
    for(const index in shuffledIcons){
        const singleCard = document.querySelector('#card' + index);
        singleCard.classList.remove('open', 'match', 'show');
    }
};