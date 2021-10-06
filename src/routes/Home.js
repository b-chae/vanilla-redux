import React, { useState } from "react";

function Home(){

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
            <ul></ul>
        </>
    )
}

export default Home