const baseURL = "https://www.boredapi.com/api/activity"
const applySettings = "?"
const adjustType = "?type="
const adjustAccess = "&accessibility="
const adjustParticipants = "&participants="
const adjustPrice = "&price="
const maxPrice = "&maxprice="
const minPrice = "&minprice="

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

function iAmBored() {
    dropdownAccuracy = document.getElementById('type');
    dropdownAccuracy.addEventListener('click', showPeople)
    shakeButton = document.getElementById('shakey-shake');
    wholeABall = document.getElementById('outer')
    shakeButton.addEventListener('click', applyChoices);
    shakeButton.addEventListener('click', shakeBall);
    wholeABall.addEventListener('animationend', resetBall) 
    shakeButton.addEventListener('click', titleHinge)
}
iAmBored();

function applyChoices() {
    let whatType = document.getElementById('type');
    let whatPrice = document.getElementById('price');
    let howManyPeople = document.getElementById('how-many-people');

    let priceURL = adjustPrice + whatPrice.value;
    let typeURL = adjustType + whatType.value;
    let peopleURL = adjustParticipants + howManyPeople.value;

    let boredURL = baseURL + typeURL + priceURL + peopleURL;

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

function shakeBall(){
    let ball = document.getElementById('outer')
    ball.classList.add('animate__animated', 'animate__wobble')
}

function resetBall(){
    let resetBall = document.getElementById('outer');
    resetBall.classList.remove('animate__animated', 'animate__wobble')
}

function resetGif(){
    let gif = document.getElementById('button-and-ball');
    gif.reset()
}
function titleHinge(){
    let targetTitle = document.getElementById('falling-title');
    targetTitle.classList.add('animate__animated','animate__hinge')
}