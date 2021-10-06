import { createStore } from "redux"

const add = document.getElementById("add")
const minus = document.getElementById("minus")
const number = document.querySelector("span")

const countModifier = (count = 0, action) => {
  if(action.type === "ADD"){
    return count + 1
  }
  else if(action.type === "MINUS"){
    return count - 1
  }
  return count
}

const countStroe = createStore(countModifier)

countStroe.dispatch({ type : "HELLO"})