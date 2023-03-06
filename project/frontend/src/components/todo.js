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
            <td>
                {todo.todousername}
            </td>
            <td>
                {todo.project}
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
            <th>
                username
            </th>
            <th>
                projectname
            </th>
            {ToDo.map((ToDo) => <ToDoItem todo={ToDo} />)}
        </table>
    )
}

export default ToDoList