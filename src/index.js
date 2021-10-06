import { createStore } from "redux"

const form = document.querySelector("form")
const input = document.querySelector("input")
const ul = document.querySelector("ul")

const ADD_TODO = "ADD_TODO"
const DELETE_TODO = "DELETE_TODO"

const reducer = (toDos = [], action) => {
  switch (action.type){
    case ADD_TODO:
      return [...toDos, { text: action.text, id: Date.now() }]
    case DELETE_TODO:
      return toDos.filter(toDos => toDos.id !== action.id)
    default:
      return toDos
  }
}

const store = createStore(reducer)

const addTodo = text => {
  return { type: ADD_TODO, text }
}

const dispatchAddToDo = text => {
  store.dispatch(addTodo(text))
}

const deleteTodo = id => {
  return { type: DELETE_TODO, id }
}

const dispatchDeleteToDo = (e) => {
  const id = parseInt(e.target.parentNode.id)
  store.dispatch(deleteTodo(id))
}

const paintToDos = () => {
  const toDos = store.getState()
  ul.innerHTML = ""
  toDos.forEach(toDo => {
    const li = document.createElement("li")
    const btn = document.createElement("button")
    btn.innerText = "DEL"
    btn.addEventListener("click", dispatchDeleteToDo)
    li.id = toDo.id
    li.innerText = toDo.text
    li.appendChild(btn)
    ul.appendChild(li)
  })
}

store.subscribe(paintToDos)

const onSubmit = e => {
  e.preventDefault()
  const toDo = input.value
  input.value = ""
  dispatchAddToDo(toDo)
}

form.addEventListener("submit", onSubmit)