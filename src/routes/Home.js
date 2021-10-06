import React, { useState } from "react";
import { connect } from "react-redux";

function Home({toDos}){

    const [text, setText] = useState("")
    function onChange(e){
        setText(e.target.value)
    }

    function onSubmit(e) {
        e.preventValue()
        console.log(text)
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
function mapStateToProps(state, ownProps){
    return { toDos: state }
}

export default connect(mapStateToProps)(Home)