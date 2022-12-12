const openMap = document.querySelector('.openMap')
const openMap2 = document.querySelector('.openMap2')
const noActiveMap = document.querySelector('.map-no-active')
const exitMap = document.querySelector('.exit-map')

openMap.addEventListener('click', () => {
    noActiveMap.classList.add('map-active')
})

openMap2.addEventListener('click', () => {
    noActiveMap.classList.add('map-active')
})

exitMap.addEventListener('click', () => {
    noActiveMap.classList.remove('map-active')
})