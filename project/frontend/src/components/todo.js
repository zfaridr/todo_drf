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

const ToDoList = ({ToDo}) => {
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
            {ToDo.map((ToDo) => <ToDoItem todo={ToDo} />)}
        </table>
    )
}

export default ToDoList