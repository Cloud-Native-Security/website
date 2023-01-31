import { render } from 'react-dom'
import App from './App'
import { ThemeProvider } from './contexts/theme'
import './index.css'
import {SkillsProvider} from "./contexts/skills";

render(
    <ThemeProvider>
        <SkillsProvider>
            <App />
        </SkillsProvider>
    </ThemeProvider>,
    document.getElementById('root')
)
