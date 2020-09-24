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

// static lists data
let LIST = [] 
let id = 0

// add todo
function addTodo (todo, id, done, trash) {
    if (trash) return

    const DONE = done ? check : uncheck
    const LINETHROUGH = done ? lineThrough : ''

    const item = `
        <li class="item">
            <i class="fa ${DONE} co" job="complete" id="${id}"></i>
            <p class="text ${LINETHROUGH}">${ todo }</p>
            <i class="fa fa-trash-o de" job="delete" id="${id}"></i>
        </li>
    `

    const position = 'beforeend'
    list.insertAdjacentHTML(position, item)
}

// add todo on keypress(enter)
document.addEventListener('keyup', function(e) {
    if (e.keyCode == 13) {
        const todo = input.value
        if (todo) {
            addTodo(todo, id, false, false)
            LIST.push({
                name: todo,
                id: id,
                done: false,
                trash: false
            })
            id++
        }
        input.value = ''
    }
})



