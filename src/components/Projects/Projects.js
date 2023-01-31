import uniqid from 'uniqid'
import {useContext} from "react";
import { projects } from '../../portfolio'
import ProjectContainer from '../ProjectContainer/ProjectContainer'
import './Projects.css'
import {SkillsContext} from "../../contexts/skills";

const Projects = () => {
    if (!projects.length) return null
    const { skillName, setSkillName } = useContext(SkillsContext)
    let filteredProjects = projects
    if (skillName !== '') {
        console.log(skillName)
        filteredProjects = projects.filter(project => project.stack.includes(skillName))
    }

    return (
        <section id='projects' className='section projects'>
            <h2 className='section__title'>Projects</h2>

            <div className='projects__grid'>
                {filteredProjects.map((project) => (
                    <ProjectContainer key={uniqid()} project={project} setSkillName={setSkillName} />
                ))}
            </div>
        </section>
    )
}

export default Projects
