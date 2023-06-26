import React  from 'react';
import GitHubIcon from '@material-ui/icons/GitHub'
import TwitterIcon from '@material-ui/icons/Twitter'
import { about } from '../../portfolio'
import './About.css'

const About = () => {
  const { name, role, description, contact, social } = about

  return (
    <div className='about center'>
      {name && (
        <h1>
          <span className='about__name'>{name}.</span>
        </h1>
      )}

      <p className='about__desc'>{description && description}</p>

      <div className='about__contact center'>
        {contact && (
          <a href={contact}>
            <span type='button' className='btn btn--outline'>
              Contact
            </span>
          </a>
        )}
      </div>
    </div>
  )
}

export default About
