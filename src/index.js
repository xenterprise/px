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
    <SkiDayList days={
        [
            {
                resort : "Square Valley",
                date : new Date("3/26/2018"),
                powder : true,
                backcountry : false

            },
            {
                resort : "Silicon Valley",
                date : new Date("3/27/2018"),
                powder : false,
                backcountry : true

            },
            {
                resort : "New Valley",
                date : new Date("3/28/2018"),
                powder : true,
                backcountry : true

            }
        ]
    }/>,  
    document.getElementById('react-container')
)


