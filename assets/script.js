const baseURL = "http://www.boredapi.com/api/activity"
const applySettings = "?"
const adjustType = "&type="
const adjustAccess = "&accessibility="
const adjustParticipants = "&participants="
const adjustPrice = "&price="
const maxPrice = "&maxprice="
const minPrice = "&minprice="


function disperseData(data) {
    currentActivity = document.getElementById('activity')
    currentActivity.textContent = data.activity
}

function fetchActivity() {
    fetch(baseURL)
    .then(function (response) {
        return response.json()
})
    .then(function (data) {
        disperseData(data)   
})
}

function iAmBored() {
    shakeButton = document.getElementById('shakey-shake');
    shakeButton.addEventListener('click', fetchActivity)   
}
iAmBored();

