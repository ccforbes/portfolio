import React from 'react'

import styles from './*.module.css'
import { Project } from '../Projects'
import { Card, CardTitle, Icon } from 'react-materialize'

type SingleProjectProp = {
    project: Project
}

export const SingleProject: React.FC<SingleProjectProp> = ({ project }) => {
    return <>
        <Card
            actions={project.links ? project.links.map(link => {
                return <a key={link} href={link}>link</a>
            }) : undefined}
            header={
                <CardTitle image='/placeholder.jpg' reveal waves='light'>
                    {project.name}
                </CardTitle>
            }
            reveal={<p>{project.description}</p>}
            revealIcon={<Icon>more_vert</Icon>}
        >
                <p>{project.startDate} - {project.endDate ? project.endDate : "Present"}</p>
                <p>Technologies: {project.technologies.join(", ")}</p>
        </Card>
    </>
}