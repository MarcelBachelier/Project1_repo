const baseURL = "https://www.boredapi.com/api/activity"
const applySettings = "?"
const adjustType = "?type="
const adjustAccess = "&accessibility="
const adjustParticipants = "&participants="
const adjustPrice = "&price="
const maxPrice = "&maxprice="
const minPrice = "&minprice=0"

function disperseData(data) {
    currentActivity = document.getElementById('activity')
    currentActivity.textContent = data.activity
    console.log(data.activity)
}

function fetchActivity(boredURL) {
    fetch(boredURL)
    .then(function (response) {
        return response.json()
})
    .then(function (data) {
        disperseData(data) 
})
}
// calls all the functions
function iAmBored() {
    dropdownAccuracy = document.getElementById('type');
    dropdownAccuracy.addEventListener('click', showPeople);

    shakeButton = document.getElementById('shakey-shake');
    wholeABall = document.getElementById('outer');

    shakeButton.addEventListener('click', applyChoices);
    shakeButton.addEventListener('click', shakeBall);
<<<<<<< HEAD
    wholeABall.addEventListener('animationend', resetBall) 
    shakeButton.addEventListener('click', titleHinge)
=======
    wholeABall.addEventListener('animationend', resetBall);
    shakeButton.addEventListener('click', resetGif) 
>>>>>>> 98734444373e6fb77f9c2f95f8067eba96bc2829
}
iAmBored();

function applyChoices() {
    let whatType = document.getElementById('type');
    let whatPrice = document.getElementById('price');
    let howManyPeople = document.getElementById('how-many-people');
// forces one person unless stated otherwise in social and ONLY social
    if (whatType.value != 'social') {
        howManyPeople.value = 1
    }
        let priceURL = maxPrice + whatPrice.value;
        let typeURL = adjustType + whatType.value;
        let peopleURL = adjustParticipants + howManyPeople.value;

        let boredURL = baseURL + typeURL + minPrice + priceURL + peopleURL;
    
    console.log(boredURL)

    fetchActivity(boredURL)
    
}

function showPeople(){
    let whatType = document.getElementById("type");
    let peopleChooser = document.getElementById("people-chooser");
    if (whatType.value === 'social') {
        peopleChooser.classList.remove('hide')
    } else {
        peopleChooser.classList.add('hide')
    }
}
// adds css classes to shake ball
function shakeBall(){
    let ball = document.getElementById('outer')
    ball.classList.add('animate__animated', 'animate__wobble')
}
// removes classes so shakeBall() will be able to trigger again 
function resetBall(){
    let resetBall = document.getElementById('outer');
    resetBall.classList.remove('animate__animated', 'animate__wobble')
}

function resetGif(){
<<<<<<< HEAD
    let gif = document.getElementById('button-and-ball');
    gif.reset()
}
function titleHinge(){
    let targetTitle = document.getElementById('falling-title');
    targetTitle.classList.add('animate__animated','animate__hinge')
}
=======
    let gif = document.getElementsByTagName("img");
    gif.classList.add('animate__animated', 'animate__hinge')
}
>>>>>>> 98734444373e6fb77f9c2f95f8067eba96bc2829
