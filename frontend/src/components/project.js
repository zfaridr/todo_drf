import React from 'react'

const ProjectItem = ({project}) => {
    return (
        <tr>
            <td>
                {project.name}
            </td>
            <td>
                {project.description}
            </td>
            <td>
                {project.days}
            </td>
        </tr>
    )
}

const ProjectList = ({Project}) => {
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
            {Project.map((Project) => <ProjectItem project={Project} />)}
        </table>
    )
}

export default ProjectList