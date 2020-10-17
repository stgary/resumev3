import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import axios from 'axios';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

export default function Contact() {
  const [ confirm, setConfirm ] = useState(false);
  const [ err, setErr ] = useState(false);
  const { register, handleSubmit, errors, reset } = useForm();
  const END_POINT = 'https://resume-bkend.herokuapp.com/send';
  
  const onSubmit = data => {
    axios 
      .post(END_POINT, data)
        .then(res => {
          setConfirm(!confirm);
        })
        .catch(error => {
          setErr(!err);
        });

    reset();
  }

  return (
    <div className='contact'>
      <div className='contact-header'>
        Contact
      </div>
      <div className='contact-info'>
        <div className='contact-container'>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              name='name'
              type='text'
              placeholder='Your name...'
              ref={register({ required: true })}
            />
            <p className='error'>{errors.name && 'Your name is required'}</p>

            <input
              name='email'
              type='email'
              placeholder='Your email...'
              ref={register({ required: true })}
            />
            <p className='error'>{errors.email && 'Your email is required'}</p>

            <input
              name='subject'
              type='text'
              placeholder='Subject...'
              ref={register({ required: true })}
            />
            <p className='error'>{errors.subject && 'A subject is required'}</p>

            <textarea
              name='message'
              type='text'
              placeholder='Message...'
              ref={register({ required: true })}
            />
            <p className='error'>{errors.message && 'A message is required'}</p>

            <div className='btn-container'>
              <button
                name='send'
                type='submit'
              >
                Send
              </button>
            </div>
          </form>
        </div>
        <div className='info'>
          <FontAwesomeIcon className='user-icon' icon={faUserCircle} />
          <p className='me'>Stephen Gary</p>
          <p>(615) 678-3231</p>
          <p>sgary0@protonmail.com</p>
          <p className='detroit'>Detroit, MI</p>
          <p className='relocate'>I am willing to relocate</p>
        </div>
      </div>
      <div className='message-display'>
        {!confirm && !err  && 
          <div className='wait-message'>
            This app is deployed using a Heroku free account which gets placed into idle. 
            The response time can be delayed up to 14 seconds. There will be a corresponding message upon failure or success.
          </div>
        }

        {confirm && 
          <div className='confirmation'>
            Message Sent!
          </div>
        }

        {err && 
          <div className='failure'>
            Failure to send. Please call, text or email me using the contact info above.
          </div>
        }
      </div>
    </div>
  )
}