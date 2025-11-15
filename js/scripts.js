let tasks = [
  {
    title: 'new task',
    checked: false,
  },
]

const activeAll = 'all'
const newTask = 'new'
const chked = 'checked'

let activeFilter = activeAll

function render() {
  let list = document.getElementsByClassName('task-list')
  list[0].innerHTML = ''

  let filteredTasks = tasks.map((t, index) => ({ ...t, index }))
  if (activeFilter === newTask) {
    filteredTasks = filteredTasks.filter((t) => !t.checked)
  }
  if (activeFilter === chked) {
    filteredTasks = filteredTasks.filter((t) => t.checked)
  }

  let counter = tasks.length
  let done = tasks.filter((t) => t.checked).length
  document.querySelector('.counter-item').innerHTML = `${counter}. Виконані: ${done}`

  for (let i = 0; i < filteredTasks.length; i++) {
    let item = document.createElement('li')
    item.classList.add('task-item')
    let btn = document.createElement('button')
    btn.addEventListener('click', () => delTask(filteredTasks[i].index))
    btn.classList.add('del-btn')
    btn.innerHTML = 'Видалити'
    let chk = document.createElement('input')
    chk.type = 'checkbox'
    chk.checked = filteredTasks[i].checked
    chk.addEventListener('change', () => {
      let realIndex = filteredTasks[i].index
      tasks[realIndex].checked = chk.checked
      render()
    })
    item.append(chk)
    item.append(document.createTextNode(filteredTasks[i].title))
    item.append(btn)
    list[0].append(item)
  }
  document.querySelector('.new-task').value = ''
}
document.querySelector('.add-task').addEventListener('click', addTask)

function addTask() {
  let val = document.querySelector('.new-task').value
  tasks.push({ title: val, checked: false })
  render()
}

function delTask(index) {
  tasks.splice(index, 1)
  render()
}
document.querySelector('.show-all').addEventListener('click', () => {
  activeFilter = activeAll
  render()
})
document.querySelector('.ended').addEventListener('click', () => {
  activeFilter = chked
  render()
})
document.querySelector('.new').addEventListener('click', () => {
  activeFilter = newTask
  render()
})
render()
