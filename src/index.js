
import React from 'react'
import {render} from 'react-dom'
import {hello, goodbye} from './lib'
import {App} from './components/App'
import {Whoops404} from './components/Whoops404'
import {BrowserRouter, Route, Switch} from 'react-router-dom' 


window.React = React
console.log('I m here');


render(
    <BrowserRouter>
        <div>
            <Switch>
                <Route exact path = '/' component = {App}/>
                <Route component = {Whoops404}/>   
            </Switch>
        </div>
    </BrowserRouter>,  
document.getElementById('react-container'));

