import React from 'react'
import CV  from '../pdf/stgary.pdf';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faLinkedinIn,
  faFacebook,
  faTwitter,
  faGithub 
} from '@fortawesome/free-brands-svg-icons';

export default function Header() {
  return (
    <div className='header'>
      <p className='header-name'>Hey, I'm Steve!</p>
      <p className='header-title'>You can follow me on</p>
      <div className='icon-container'>
        <a href='https://github.com/stgary'>
          <FontAwesomeIcon className='icon' icon={faGithub} />
        </a>

        <a href='https://www.linkedin.com/in/sgary0'>
          <FontAwesomeIcon className='icon' icon={faLinkedinIn} />
        </a>

        <a href='https://twitter.com/explore'>
          <FontAwesomeIcon className='icon' icon={faTwitter} />
        </a>
        
        <a href='https://m.facebook.com/stephen.gary.566'> 
          <FontAwesomeIcon className='icon' icon={faFacebook} />
        </a> 
      </div>
      <a 
        href={CV}
        className='header-download' 
        title='pdf download' 
        download
      >
        Download CV
      </a>
    </div>
  )
}
