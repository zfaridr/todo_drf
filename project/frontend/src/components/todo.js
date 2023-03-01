import React from 'react'

const ToDoItem = ({todo}) => {
    return (
        <tr>
            <td>
                {todo.name}
            </td>
            <td>
                {todo.description}
            </td>
            <td>
                {todo.days}
            </td>
        </tr>
    )
}

const ToDoList = ({todo}) => {
    return (
        <table>
            <th>
                name
            </th>
            <th>
                description
            </th>
            <th>
                days
            </th>
            {todo.map((todo) => <ToDoItem todo={todo} />)}
        </table>
    )
}

export default ToDoList