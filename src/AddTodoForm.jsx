/* eslint-disable react/prop-types */
import { useState } from 'react'

function AddTodoForm(props) {

    const [inputNewTodo, setInputNewTodo] = useState("");

    // const onChange = (event) => {
    //     console.log("ändrig i formulär");          //Skrivs istället direkt i inputfältet
    //     setInputNewTodo(event.target.value);
    // }

    const handleSubmit = (event) => {
        event.preventDefault(); //Förhindrar omladdning
        console.log("Spara formulär");
        props.updateTodos(inputNewTodo)
        setInputNewTodo("");
    }

    return(
        <form onSubmit={(handleSubmit)}>
            {inputNewTodo} <br/>
            <input type="text" value={inputNewTodo} onChange={(event) => setInputNewTodo(event.target.value)} />
            <button>Spara</button>
        </form>
    )
}

export default AddTodoForm;