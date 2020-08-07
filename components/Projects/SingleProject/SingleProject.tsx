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
            className='hoverable sticky-action medium'
            actions={project.links ? project.links.map(link => {
                return <a key={link} href={link}>link</a>
            }) : undefined}
            closeIcon={<Icon>close</Icon>}
            header={
                <CardTitle image='/placeholder.jpg' reveal waves='light' />
            }
            reveal={<p>{project.description}</p>}
            revealIcon={<Icon>more_vert</Icon>}
            title={project.name}
        >
                <em>{project.startDate} - {project.endDate ? project.endDate : "Present"}</em>
                <p>Technologies: {project.technologies.join(", ")}</p>
        </Card>
    </>
}