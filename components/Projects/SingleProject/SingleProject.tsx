import React from 'react'

import styles from './*.module.css'
import { Project } from '../Projects'

type SingleProjectProp = {
    project: Project
}

export const SingleProject: React.FC<SingleProjectProp> = ({ project }) => {
    return <>
        <p>{project.name}</p>
        <p>{project.startDate} - {project.endDate ? project.endDate : "Present"}</p>
        <p>{project.description}</p>
        <p>Technologies: {project.technologies.join(", ")}</p>
    </>
}