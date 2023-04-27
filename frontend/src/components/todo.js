import React from 'react'
import {Link} from 'react-router-dom'


const ToDoItem = ({item, deleteToDo}) => {
    return (
        <tr>
            <td>
                {item.name}
            </td>
            <td>
                {item.description}
            </td>
            <td>
                {item.days}
            </td>
            <td>
                {item.todousername}
            </td>
            <td>
                {item.project}
            </td>
            <td>
                <button onClick={()=>deleteToDo(item.id)} type='button'>Delete</button>
            </td>
        </tr>
    )
}

const ToDoList = ({items, deleteToDo}) => {
    return (
        <div>
        <table>
            <tr>
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
                <th></th>
            </tr>
            {items.map((item) => <ToDoItem item={item} deleteToDo={deleteToDo}/>)}
        </table>
        <Link to='/todo/create'>Create</Link>
        </div>
    )
}

export default ToDoList