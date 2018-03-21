import React from 'react'
import {render} from 'react-dom'
import {hello, goodbye} from './lib'
import {SkiDayCount} from './components/skidaycount'
window.React = React


render(
    // <div>
    //      {hello} 
    //      {goodbye} 
    // </div>, 
    <SkiDayCount total={50}
                 powder={20}
                 backcountry={10}
                 goal={100}/>,  
    document.getElementById('react-container')
)


