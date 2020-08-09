import React from 'react'

import styles from './SingleProject.module.css'
import { Project } from '../Projects'
import { CustomCard, CustomCardContent, CustomCardActions, CustomCardReveal, CustomCardThumbnail } from '../../CustomCard/CustomMaterialCard'
import { Link } from '../../types'

type SingleProjectProp = {
    project: Project
}


export const SingleProject: React.FC<SingleProjectProp> = ({ project }) => {
    const links: Link[] = project.links.map(link => {
        return new Link("Link", link)
    })
    return <>
        <CustomCard >
            <CustomCardThumbnail reveal imgSrc='/placeholder.jpg'/>
            <CustomCardContent 
                reveal 
                title={project.name}
                startDate={project.startDate} 
                endDate={project.endDate}
                shortDesc={'Technologies: ' + project.technologies.join(", ")}/>
            <CustomCardActions 
                links={links}/>
            <CustomCardReveal 
                title={project.name}
                description={project.description}/>
        </CustomCard>
    </>
}