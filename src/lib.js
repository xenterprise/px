import React from 'react'
// var greetings = require('./titles.json')
import greetings from './titles.json'
import './stylesheets/goodbye.scss'
import './stylesheets/hello.css'



export const hello = (
    <h1 id='title'
        className='style1'>
        {greetings.hello}    
    </h1>
)


export const goodbye = (
    <h1 id='title'
        className='style2'>
        {greetings.goodbye}    
    </h1>
)