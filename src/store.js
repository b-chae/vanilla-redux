import { configureStore, createAction, createReducer } from "@reduxjs/toolkit"

const addToDo = createAction("ADD")
const deleteToDo = createAction("DELETE")

/* 
 * return a new state
 * or mutate the state
 */

const reducer = createReducer([], {
    [addToDo] : (state, action) => {
        state.push({text: action.payload, id: Date.now()})
    },
    [deleteToDo] : (state, action) => 
        state.filter(toDo => (toDo.id !== action.payload))
})

const store = configureStore({ reducer })

export const actionCreators = {
    addToDo,
    deleteToDo
}

export default store