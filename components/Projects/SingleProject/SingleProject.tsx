import React from 'react'

import { Project } from '../Projects'
import { CustomCard, CustomCardContent, CustomCardActions, CustomCardReveal, CustomCardThumbnail } from '../../CustomCard/CustomMaterialCard'

type SingleProjectProp = {
    project: Project
}

export const SingleProject: React.FC<SingleProjectProp> = ({ project }) => {
    return <CustomCard size={'large'} >
        <CustomCardThumbnail reveal imgSrc={project.image} />
        <CustomCardContent 
            reveal 
            title={project.name}
            startDate={project.startDate} 
            endDate={project.endDate}
            shortDesc={'Technologies: ' + project.technologies.join(", ")}/>
        <CustomCardActions 
            links={project.links}/>
        <CustomCardReveal 
            title={project.name}
            description={project.description}/>
    </CustomCard>
    
}