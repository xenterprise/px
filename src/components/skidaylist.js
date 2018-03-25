import Terrain from 'react-icons/lib/md/terrain'
import SnowFlake from 'react-icons/lib/ti/weather-snow'
import Calendar from 'react-icons/lib/fa/calendar'
import {SkiDayRow} from './skidayrow'
import PropTypes from 'prop-types'

export const SkiDayList = ({days}) =>(
    <table>
        <thead>
            <tr>
                <th>Date</th>
                <th>Resort</th>
                <th>Powder</th>
                <th>Backcountry</th>
            </tr>
        </thead>

        <tbody>
            {/* {days.map((day, i)=><SkiDayRow key={i}
                                    resort = {day.resort}
                                    date = {day.date}
                                    powder = {day.powder}
                                    backcountry = {day.backcountry}/>
            )} */}
            {days.map((day, i)=><SkiDayRow key={i}
                                    {...day}/>
            )}
        </tbody>
    </table>
)

SkiDayList.propTypes = {
    days: function(props){
        if(!Array.isArray(props.days)){
            return new Error(
                "SkiDayList should be an array"
            )
        } else if (!props.days.length){
            return new Error(
                "SkiDayList must have atleast one record"
            )
        } else {
            return null
        }
    }
}