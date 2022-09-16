let APIkey = 'ujejQesKc7cmGMRrD34axhQof1xoXTfD'
let testUrl = 'https://giphy.p.rapidapi.com/v1/gifs/search?api_key=' + APIkey + '&q=funny%20cat'


fetch(testUrl)
.then(function (response) {
    return response.json()
})
.then(function (data) {
    console.log(data)
})