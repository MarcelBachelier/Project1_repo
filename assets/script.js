const baseURL = "http://www.boredapi.com/api/activity"
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
    shakeButton = document.getElementById('shakey-shake');
    shakeButton.addEventListener('click', applyChoices)   
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
applyChoices()