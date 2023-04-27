import React from 'react'

const UserItem = ({user}) => {
    return (
        <tr>
            <td>
                {user.username}
            </td>
            <td>
                {user.firstname}
            </td>
            <td>
                {user.lastname}
            </td>
            <td>
                {user.email}
            </td>
        </tr>
    )
}

const UserList = ({User}) => {
    return (
        <table>
            <th>
                name
            </th>
            <th>
                firstname
            </th>
            <th>
                lastname
            </th>
            <th>
                email
            </th>
            {User.map((User) => <UserItem user={User} />)}
        </table>
    )
}

export default UserList