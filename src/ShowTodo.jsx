/* eslint-disable react/prop-types */
function ShowTodo(props) {
    return(
        <div>{props.todo.todo} <input type="checkbox" onClick={() => props.doneTodo(props.todo.id)}/></div>
    )
}

export default ShowTodo;