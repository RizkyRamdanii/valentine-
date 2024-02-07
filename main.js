"use strict";

const textElement = document.getElementById('text')
const buttonsContainer = document.getElementById('buttons')
const buttonYes = document.getElementById('btnYes')
const buttonNo = document.getElementById('btnNo')
const catImage = document.getElementById('cat-img')

const maxImages = 5

let play = true
let noCount = 0

buttonYes.addEventListener("click", handleYesClick)
buttonNo.addEventListener("click", function() {
    if (play) {
        noCount ++
        const imageIndex = Math.min(noCount, maxImages)

        changeImage(imageIndex)
        resizeYesButton()
        updateNoButtonText()

        if (noCount == maxImages) {
            play = false
        }
    }
})

function handleYesClick() {
    textElement.innerHTML = "Yaayyy!!! :3"
    buttonsContainer.classList.add('hidden')
    changeImage('yes')
}

function resizeYesButton() {
    const computedStyle = window.getComputedStyle(buttonYes)
    const fontSize = parseFloat(computedStyle.getPropertyValue('font-size'))
    const newFontSize = fontSize * 1.4

    buttonYes.style.fontSize = `${newFontSize}px`
}

function generateMessage(_noCount) {
    const messages = [
        "NOO!!",
        "Are You Sure??!!",
        "Pookie Please",
        "Don't Do This To Me :(",
        "You're Breaking My Heart",
        "I'm Gonna Cry...",
    ]

    const messageIndex = Math.min(noCount, messages.length - 1)
    return messages[messageIndex]
}

function changeImage(image) {
    catImage.src = `./src/img/cat-${image}.jpg`
}

function updateNoButtonText() {
    buttonNo.innerHTML = generateMessage(noCount)
}