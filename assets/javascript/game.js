



// for images
var clubArray = [
    {
        team: "arsenal",
        image: "assets/images/Arsenal_FC.svg"
    },
    {
        team: "astonvilla",
        image: "assets/images/Aston_villa_logo16.png"
    },
    {
        team: "barnsley",
        image: "assets/images/Barnsley_FC.svg"
    },
    {
        team: "birmingham",
        image: "assets/images/Birmingham_City_FC_logo.svg"
    },
    {
        team: "blackburnrovers",
        image: "assets/images/Blackburn_Rovers.svg"
    },
    {
        team: "blackpool",
        image: "assets/images/Blackpool_FC_logo.svg"
    },
    {
        team: "boltonwanderers",
        image: "assets/images/Bolton_Wanderers_FC_logo.svg"
    },
    {
        team: "bournemouth",
        image: "assets/images/AFC_Bournemouth_(2013).svg"
    },
    {
        team: "bradford",
        image: "assets/images/Bradford_City_AFC.png"
    },
    {
        team: "brighton",
        image: "assets/images/Brighton_&_Hove_Albion_logo.svg"
    },
    {
        team: "burnley",
        image: "assets/images/Burnley_F.C._Logo.svg"
    },
    {
        team: "cardiff",
        image: "assets/images/Cardiff_City_crest.svg"
    },
    {
        team: "charltonathletic",
        image: "assets/images/Charlton_Athletic.svg"
    },
    {
        team: "chelsea",
        image: "assets/images/Chelsea_FC.svg"
    },
    {
        team: "coventty",
        image: "assets/images/Coventry_City_FC_logo.svg"
    },
    {
        team: "crystalpalace",
        image: "assets/images/Crystal_Palace_FC_logo.svg"
    },
    {
        team: "derbycounty",
        image: "assets/images/Derby_County_crest.svg"
    },
    {
        team: "everton",
        image: "assets/images/Everton_FC_logo.svg"
    },
    {
        team: "fulham",
        image: "assets/images/Fulham_FC_(shield).svg"
    },
    {
        team: "huddersfield",
        image: "assets/images/Huddersfield_Town_A.F.C._logo.svg"
    },
    {
        team: "hull",
        image: "assets/images/Hull_City_Crest_2014.svg"
    },
    {
        team: "ipswichtown",
        image: "assets/images/Ipswich_Town.svg"
    },
    {
        team: "leedsunited",
        image: "assets/images/Leeds_United_Logo.png"
    },
    {
        team: "leicester",
        image: "assets/images/Leicester_City_crest.svg"
    },
    {
        team: "liverpool",
        image: "assets/images/Liverpool_FC.svg"
    },
    {
        team: "manchestercity",
        image: "assets/images/Manchester_City_FC_badge.svg"
    },
    {
        team: "manchesterunited",
        image: "assets/images/Manchester_United_FC_crest.svg"
    },
    {
        team: "middlesbrough",
        image: "assets/images/Middlesbrough_FC_crest.svg"
    },
    {
        team: "newcastle",
        image: "assets/images/Newcastle_United_Logo.svg"
    },
    {
        team: "norwich",
        image: "assets/images/Norwich_City.svg"
    },
    {
        team: "nottingham",
        image: "assets/images/Nottingham_Forest_logo.svg"
    },
    {
        team: "oldham",
        image: "assets/images/Oldham_Athletic_new_badge.png"
    },
    {
        team: "portsmouth",
        image: "assets/images/Portsmouth_FC_crest.svg"
    },
    {
        team: "queensparkrangers",
        image: "assets/images/Queens_Park_Rangers_crest.svg"
    },
    {
        team: "reading",
        image: "assets/images/Reading_FC.svg"
    },
    {
        team: "sheffield",
        image: "assets/images/Sheffield_United_FC_logo.svg"
    },
    {
        team: "southampton",
        image: "assets/images/FC_Southampton.svg"
    },
    {
        team: "stoke",
        image: "assets/images/Stoke_City_FC.svg"
    },
    {
        team: "sunderland",
        image: "assets/images/Logo_Sunderland.svg"
    },
    {
        team: "swansea",
        image: "assets/images/Swansea_City_AFC_logo.svg"
    },
    {
        team: "swindon",
        image: "assets/images/Swindon_Town_FC.svg"
    },
    {
        team: "tottenham",
        image: "assets/images/Tottenham_Hotspur.svg"
    },
    {
        team: "watford",
        image: "assets/images/Watford.svg"
    },
    {
        team: "westbromwichalbion",
        image: "assets/images/West_Bromwich_Albion.svg"
    },
    {
        team: "westham",
        image: "assets/images/West_Ham_United_FC_logo.svg"
    },
    {
        team: "wigan",
        image: "assets/images/Wigan_Athletic.svg"
    },
    {
        team: "wimbledon",
        image: "assets/images/Wimbledon_fc.png"
    },
    {
        team: "wolverhampton",
        image: "assets/images/Wolverhampton_Wanderers.svg"
    },
]

var gameStatus = false;

var clubIndex = Math.floor(Math.random() * (clubArray.length - 1));


var club = clubArray[clubIndex].team;
var crestImage = clubArray[clubIndex].image;

// Length of club name
var nameLength = club.length;

var answerArray = [];


//Key Events


document.addEventListener("keyup", function (event) {
    if (gameStatus) {
        letterCheck(event);
    } else {
        gameStart();
    }
});

// for letter bank
var alphabet = ["a", "b", "c", "d", "e", "f","g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

// Check if guess is a letter
function letterCheck(guess) {
    if (alphabet.indexOf(guess.key) > -1) {
        correctGuessCheck(guess);
    }
}

// Check if guess is correct
var winScore = 0;
function correctGuessCheck(guess) {
    //if correct
    if (club.indexOf(guess.key) > -1) {
        correctGuess(guess);

        //if incorrect
    } else {
        incorrectGuess(guess);
    }
}


function correctGuess(guess) {
    // if guess isn't in array yet, run function to add it
    if (answerArray.indexOf(guess.key.toUpperCase()) < 0) {
        addCorrectLetter(guess);
    }
}

function addCorrectLetter(guess) {
    for (var j = 0; j < club.length; j++) {
        //if guess is in answer
        if (guess.key === club[j]) {
            //make letter to as upperCase.
            answerArray[j] = guess.key.toUpperCase();
            displayCurrentWord();
            //Reduce remaining letters by one.
            lettersRemaining--;
            //when all letters guessed, you win 
            if (lettersRemaining === 0) {
                //wins go up 1
                winScore++;
                displayWins();
                //Reveal correct answer
                newGame();
                //Turn correct answer green
                addCorrect();
                displayCurrentWord();
            }
        }
    }
}

//For incorrect guesses
var incorrectGuesses = [];
var guessesLeft = 9;

function incorrectGuess(guess) {
    if (incorrectGuesses.indexOf(guess.key.toUpperCase()) < 0) {
        addIncorrectLetter(guess);
    }
}

function addIncorrectLetter(guess) {
    incorrectGuesses.push(guess.key.toUpperCase());
    //you guessed wrong dumbass
    displayGuessesMade();

    //subtract remaining guesses
    guessesLeft--;

    displayGuessesLeft();
    if (guessesLeft === 0) {
        //No more guesses... you lost dumbass
        //Display corrent answer.
        displayAnswer();
        newGame();
    }
}

// -------------------------------------------------------------------

//Number of wins
function displayWins() {
    var winsDisplay = document.querySelector("#winsDisplay");
    winsDisplay.textContent = winScore;
}

//Guessed Letters
function displayGuessesMade() {
    var guessesMadeDisplay = document.querySelector("#guessesMadeDisplay");
    guessesMadeDisplay.textContent = incorrectGuesses.join(", ");
}

//Guesses left
function displayGuessesLeft() {
    var guessesLeftDisplay = document.querySelector("#guessesLeftDisplay");
    guessesLeftDisplay.textContent = guessesLeft;
}

//Current status of guesses
function displayCurrentWord() {
    var currentWordDisplay = document.querySelector("#currentWordDisplay");
    currentWordDisplay.innerHTML = answerArray.join(" ");
}

//Displays club crest
function displayImage() {
    var pictureDisplay = document.querySelector("#pictureDisplay");
    pictureDisplay.src = crestImage;
}

function newGame() {
    gameStatus = false;
}

//Reveals answer
function displayAnswer() {
    var revealedAnswerDisplay = document.querySelector("#revealedAnswerDisplay");
    revealedAnswerDisplay.textContent = club.toUpperCase();
}

//Turns current word green
function addCorrect() {
    var currentWordDisplay = document.querySelector("#currentWordDisplay");
    currentWordDisplay.classList.add('correct');
}

//Removes green color 
function removeCorrect() {
    var currentWordDisplay = document.querySelector("#currentWordDisplay");
    currentWordDisplay.classList.remove('correct');
}


// Restart ----------------------------------------------------------------------------------------------------------------

function gameStart() {
    gameStatus = true;
    //new clubIndex number and get new club name and image
    clubIndex = Math.floor(Math.random() * clubArray.length);
    club = clubArray[clubIndex].team;
    crestImage = clubArray[clubIndex].image;
    
    //restart letters remaining
    lettersRemaining = club.length;

    //new answer array
    answerArray = [];

    //Convert word answer into an array.
    for (var i = 0; i < club.length; i++) {
        //Replace word answer with underscore  _ 
        answerArray[i] = "_";

    }

    //restart letters remaining (again)
    lettersRemaining = club.length;

    //restart guesses left
    guessesLeft = 9;
    displayGuessesLeft()

    //restart guesses made
    incorrectGuesses = [];
    displayGuessesMade()

    //show current club word spacing
    displayCurrentWord();

    //Display club crest
    displayImage();

    //empty answer shown
    revealedAnswerDisplay.textContent = "";

    //crowd audio
    document.getElementById('crowdChant').play();

    //Remove green word
    removeCorrect();
}
