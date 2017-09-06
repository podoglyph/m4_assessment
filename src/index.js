const $ = require('jquery')
const API = "https://wordwatch-api.herokuapp.com"

document.addEventListener("DOMContentLoaded", () => {
  const tw = $('.top-word')

  $.getJSON(API + `/api/v1/top_word`, function(data) {
    // getJSON( url [, data ] [, success ] )
    let word = Object.keys(data.word)[0]
    let number = Object.values(data.word)[0]
    console.log(word, number)
  })

})
