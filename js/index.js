// Selecting the html elements
const clear = document.querySelector('.clear')
const dateElement = document.getElementById('date')
const list = document.getElementById('list')
const input = document.getElementById('input')

// storing icon classes
const check = 'fa-check-circle'
const uncheck = 'fa-circle-thin'
const lineThrough = 'lineThrough'

// showing todays date
const options = {weekday: 'long', month: 'short', day: 'numeric'}
const today = new Date()
dateElement.innerHTML = today.toLocaleDateString('en-US', options)

