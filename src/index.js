import React from 'react'
import {render} from 'react-dom'
import {hello, goodbye} from './lib'
import {SkiDayList} from './components/skidaylist'
window.React = React


render(
    // <div>
    //      {hello} 
    //      {goodbye} 
    // </div>, 
    <SkiDayList days="Lots of days"/>,  
    document.getElementById('react-container')
)


