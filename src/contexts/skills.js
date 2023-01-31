import { createContext, useState } from 'react'

const SkillsContext = createContext()

const SkillsProvider = ( {children}) => {
    const [skillName, setSkillName] = useState('')

    return (
        <SkillsContext.Provider value={{ skillName, setSkillName}} >
            {children}
        </SkillsContext.Provider>
    )
}

export { SkillsProvider, SkillsContext }
