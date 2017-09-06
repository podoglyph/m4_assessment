const $ = require('jquery')
const API = "https://wordwatch-api.herokuapp.com"

document.addEventListener("DOMContentLoaded", () => {
  const tw = $('.top-word h3')
  const wc = $('.word-count')
  const button = $('.text-submission button')


  $.getJSON(API + `/api/v1/top_word`, function(data) {
    let word = Object.keys(data.word)[0]
    let number = Object.values(data.word)[0]
    currentText = tw.text()
    tw.text(`${currentText} ${word} (${number})`)
  })

  $(button).click(function() {
    let newText = $('.text-submission textarea').val()
    let words = new Object()

    $.each(newText.split(' '), function(i, word) {
      if (word in words) {
        words[word]++
      } else {
        words[word] = 1
      }
    });
    displayWords(words)
  })

  function displayWords(wordObj) {
    let allWords = []
    $.each(wordObj, function(word) {
      allWords.push(word)
    })
    wc.text(allWords.join(" "))
  }

  // and the size of each word is relative to its frequency in the paragraph.

})
