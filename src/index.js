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
    gatherWords(words)
  })

  function gatherWords(wordObj) {
    $.each(wordObj, function(count, word) {
      displayWord(word, count)
    })
  }

  function displayWord(count, word) {
    wc.append(`<span style='font-size: ${count}em; margin: 5px'>${word}</span>`)
  }

})
