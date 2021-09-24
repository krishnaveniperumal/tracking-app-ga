import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import Home from './component/Home'
import Service from './component/Service'

class Routes extends React.Component {
    render() {
        return (
            <BrowserRouter>
            <Route path="/home" component={Home}/>
            <Route path="/service" component={Service}/>
            </BrowserRouter>
        )
    }
}
export default Routes;