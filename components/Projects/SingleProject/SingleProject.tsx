import React from 'react'

//import styles from './SingleProject.module.css'
import { Project } from '../Projects'
import { CustomCard, CustomCardContent, CustomCardActions, CustomCardReveal, CustomCardThumbnail } from '../../CustomCard/CustomMaterialCard'

type SingleProjectProp = {
    project: Project
}

// const projectImgStyles: CSSProperties = {
//     height: 195,
//     width: 350
// }


export const SingleProject: React.FC<SingleProjectProp> = ({ project }) => {
    return <>
        <CustomCard size={'large'} >
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
    </>
}