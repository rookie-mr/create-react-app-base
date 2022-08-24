import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

export default class RouterPage extends Component {
    render() {
        return (<div>
            <div>React Router</div>
            <Router>
                <Link to="/">首页</Link>
                <Link to="/user">用户中心</Link>
                
                {/* children > component > render  */}
                <Route 
                    exact 
                    path="/"  
                    // componet={HomePage}
                    // children={(() => <div></div>)}
                    render={() => <div>react-router render</div>}
                />
            </Router>
        </div>)
    }
}