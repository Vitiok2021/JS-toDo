let tasks = [
  {
    title: 'new task',
    checked: false,
  },
]

function render() {
  let list = document.getElementsByClassName('task-list')
  list[0].innerHTML = ''
  let item
  for (let i = 0; i < tasks.length; i++) {
    item = document.createElement('li')
    item.classList.add('task-item')
    item.textContent = tasks[i].title
    list[0].append(item)
  }
}
document.querySelector('.add-task').addEventListener('click', addTask)
function addTask() {
  let val = document.querySelector('.new-task').value
  console.log(val)
  tasks.push({ title: val, checked: false })
  render()
}
function toggleTask() {}
render()
