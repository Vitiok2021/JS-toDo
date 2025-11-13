let tasks = [
  {
    title: 'new task',
    checked: false,
  },
]

function render() {
  let list = document.getElementsByClassName('task-list')
  list[0].innerHTML = ''

  for (let i = 0; i < tasks.length; i++) {
    let item = document.createElement('li')
    item.classList.add('task-item')
    let btn = document.createElement('button')
    btn.addEventListener('click', () => delTask(i))
    btn.classList.add('del-btn')
    btn.innerHTML = 'Видалити'
    let chk = document.createElement('input')
    chk.type = 'checkbox'
    chk.checked = tasks[i].checked
    chk.addEventListener('change', () => {
      tasks[i].checked = chk.checked
      render()
    })
    item.append(chk)
    item.append(document.createTextNode(tasks[i].title))
    item.append(btn)
    list[0].append(item)
  }
}
document.querySelector('.add-task').addEventListener('click', addTask)

function addTask() {
  let val = document.querySelector('.new-task').value
  tasks.push({ title: val, checked: false })
  render()
}

function toggleTask() {}
function delTask(index) {
  tasks.splice(index, 1)
  render()
}
render()
