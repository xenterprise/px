import React from 'react'
import '../stylesheets/ui.scss'
var createReactClass = require('create-react-class');

//export const TodoComponent = createReactClass({ render:function(){ return(<h1>Helloooo</h1>); } });

export const SkiDayCount = createReactClass({
    percentToDecimal(decimal){
        return((decimal*100 )+'%')
    },
    
    calcGoalProgress(total, goal){
        return (this.percentToDecimal(total/goal))
    },
    render(){
        return (
            <div className="ski-day-count">
                <div className="total-days">
                    <span>{this.props.total}</span>
                    <span> Days</span>
                </div>
                <div className="powder-days">
                    <span>{this.props.powder}</span>
                    <span> Days</span>
                </div>
                <div className="backcountry-days">
                    <span>{this.props.backcountry}</span>
                    <span> Days</span>
                </div>
                <div>
                    <span>
                    {
                        this.calcGoalProgress(this.props.total, this.props.goal)
                    }
                    </span>
                </div>
            </div>
        )
    }
})