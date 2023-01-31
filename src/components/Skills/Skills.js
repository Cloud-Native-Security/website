import uniqid from 'uniqid'
import {useContext} from "react";
import { skills } from '../../portfolio'
import './Skills.css'
import {SkillsContext} from "../../contexts/skills";

const Skills = () => {
    if (!skills.length) return null
    const { setSkillName } = useContext(SkillsContext)

    return (
        <section className='section skills' id='skills'>
            <h2 className='section__title'>Skills</h2>
            <ul className='skills__list'>
                {skills.map((skill) => (
                    <>
                        <button  type="button" key={uniqid()} onClick={() => setSkillName(skill)} className='skills__list-item btn btn--plain'>
                            {skill}
                        </button>
                    </>
                ))}
                <button  type="button" key={uniqid()} onClick={() => setSkillName('')} className='skills__list-item btn btn--plain'>
                    All
                </button>
            </ul>
        </section>
    )
}

export default Skills
