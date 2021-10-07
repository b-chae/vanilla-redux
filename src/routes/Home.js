import React, { useState } from "react";
import { connect } from "react-redux";
import ToDo from "../components/ToDo";
import { actionCreators } from "../store";

function Home({toDos, addToDo}){

    const [text, setText] = useState("")
    function onChange(e){
        setText(e.target.value)
    }

    function onSubmit(e) {
        addToDo(text)
        e.preventDefault()
        setText("")
    }

    return (
        <>
            <h1>To Do List</h1>
            <form onSubmit={onSubmit}>
                <input type="text" value={text} onChange={onChange}></input>
                <button>Add</button>
            </form>
            <ul>
                {toDos.map(toDo => <ToDo key={toDo.id} {...toDo}></ToDo>)}
            </ul>
        </>
    )
}

/* intercept prop */
function mapStateToProps(state){
    return { toDos: state }
}

function mapDispatchToProps(dispatch){
    return {
        addToDo: text => dispatch(actionCreators.addToDo(text))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)