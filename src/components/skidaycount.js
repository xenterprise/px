import '../stylesheets/ui.scss'
var createReactClass = require('create-react-class');

//export const TodoComponent = createReactClass({ render:function(){ return(<h1>Helloooo</h1>); } });

const percentToDecimal = (decimal) => {
    return((decimal*100 )+'%')
}

const calcGoalProgress = (total, goal) => {
    return (percentToDecimal(total/goal))
}


export const SkiDayCount = ({total, powder, backcountry, goal}) =>(
            <div className="ski-day-count">
                <div className="total-days">
                    <span>{total}</span>
                    <span> Days</span>
                </div>
                <div className="powder-days">
                    <span>{powder}</span>
                    <span> Days</span>
                </div>
                <div className="backcountry-days">
                    <span>{backcountry}</span>
                    <span> Days</span>
                </div>
                <div>
                    <span>
                    {
                        calcGoalProgress(total, goal)
                    }
                    </span>
                </div>
            </div>
        )
    