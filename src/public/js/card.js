const card1 = document.querySelector('.card-1')
const card2 = document.querySelector('.card-2')

const card1Si = document.querySelector('.card-1__si')
const card2Si = document.querySelector('.card-2__si')

const buttonClose1 = document.querySelector('.card-1__button-close')
const buttonClose2 = document.querySelector('.card-2__button-close')

card1Si.addEventListener('click', () => {
    card1.classList.toggle('is-flipped')
})

card2Si.addEventListener('click', () => {
    card2.classList.toggle('is-flipped')
})

buttonClose1.addEventListener('click', () => {
    card1.classList.toggle('is-flipped')
})

buttonClose2.addEventListener('click', () => {
    card2.classList.toggle('is-flipped')
})