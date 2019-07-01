
var start = [
    'Hey you, ',
    'Ohh you look good, listen, ',
    'In Adventure World we live by this quote, ',
    'Wazaaap, ',
    'You know what, ',
    'Believe me, ',
    'Sup pal, ',
    'Smile and read, '

]



var quotesNice = [
    '"You\'re letting your brain dial turn your fear volume up." – Finn the Human',
    '"Bad biscuits make the baker broke, bro." – Jake the Dog',
    '"You don’t need a mirror to know you look good. You’re beautiful on the inside." – Finn',
    '"Let’s kick today some digital bootays!" – Finn',
    '"Sometimes life is scary and dark. That is why we must find the light." – BMO',
    '"I don’t need to feel like I’m waiting to be noticed. I know who I am, and I’ll know what I want if and when it ever comes along." – Fionna ',
    '"Everything small is just a smaller version of something big." – Finn',
    '"Your heart may be small, but it’s strong as a bull donk." – Jake ',
    '"Suckin’ at something is the first step to being sorta good at something." – Jake',
    '"I’m a tough tootin’ baby, I can punch-a yo buns!" – Finn ',
    '"You’re getting hung up on imaginary problems. You got to focus on what’s real." – Jake',
    '"Y’all are just hating on my steez. I’m not listening to haters." – Ice King ',
    '"Responsibility demands sacrifice." – Princess Bubblegum'
   

];


var quotesLumpy = [
        'It just means he\'s changing into a Lumpy Space guy on account of my bite. It\'s just like um... you know... werewolf rules',
        'First you should check out my house. It\'s, like, kinda lame but way less lame than, like, your house.',
        'I said, "Lump off"',
        'I want surgery to make my body hot',
        'Get away from my camp. I\'ll cut you!',
        'Get in touch with your feelings, babe!',
        'I\'m doing so awesome on my own, like I found this can of beans',
        'What the jug?',
        'Maybe he\'ll be a steaming hot babe with huge money',
        'I blinked my balls... my eyeballs',
        'He tried to kiss me on the mouth! And I was like, blah blah!',
        'GET THE LUMP OUTTA HERE!!',
        'I know you want this body, but you can\'t have it! YOU CAN\'T HAVE IT!'

        

 
]

var end = [
    ', that\'s how it is, you know?',
    ', can you believe that?',
    ', that is not a lie',
    ', smart, right?',
    ', You could not say anything better',
    ', click on another quote',
    ', have a Blessed day',
    ', have a Wonderfull Day'
]

function newQuote() {

    var userInput = document.getElementById('numQuotes').value;
    document.querySelector('#show-quote').innerHTML = '';
   
    for (i=1; i<=userInput; i++) {

    var number = Math.floor(Math.random() * (quotesNice.length));
    var numberStart = Math.floor(Math.random() * (start.length));
    var numberEnd = Math.floor(Math.random() * (end.length));
    var randomQuote = start[numberStart] + quotesNice[number] + end[numberEnd] + '\n\n\n\n\n\n\n\n\n\n\n' + ', ';

// targeted elemtn <p id = "show-quote"></p>
    var elementQ = document.querySelector('#show-quote');
// grab elemtn <p></p>, make aniother one and add quote
    elementQ.innerHTML = elementQ.innerHTML + randomQuote;
    document.querySelector('.main-char').src ='../extra/dog.gif';
    document.querySelector('body').style.background = "url('../extra/background.jpg')";
  
    }
    
}


function lumpyQuote() {

    var userInput = document.getElementById('numQuotes').value;
    document.querySelector('#show-quote').innerHTML = '';

    for(i=1; i<= userInput; i++) {

    var number = Math.floor(Math.random() * (quotesLumpy.length));
    var numberStart = Math.floor(Math.random() * (start.length));
    var numberEnd = Math.floor(Math.random() * (end.length));
    var randomQuote = start[numberStart] + quotesLumpy[number] + end[numberEnd] + '\n\n\n\n\n\n\n\n\n\n\n' + ', ';
    var elementQ = document.querySelector('#show-quote');
    elementQ.innerHTML = elementQ.innerHTML + randomQuote;
    document.querySelector('.main-char').src ='../extra/lumpy.gif';
    document.querySelector('body').style.background = "url('../extra/adventure.jpg')";

    }
 
}

function noQuote() {
    document.querySelector('.show-quote').innerHTML = '';
}








