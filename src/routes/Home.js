import React, { useState } from "react";
import { connect } from "react-redux";
import { actionCreators } from "../store";

function Home({toDos, addToDo}){

    const [text, setText] = useState("")
    function onChange(e){
        setText(e.target.value)
    }

    function onSubmit(e) {
        addToDo(text)
        e.preventDefault()
    }

    return (
        <>
            <h1>To Do List</h1>
            <form onSubmit={onSubmit}>
                <input type="text" value={text} onChange={onChange}></input>
                <button>Add</button>
            </form>
            <ul>
                {JSON.stringify(toDos)}
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