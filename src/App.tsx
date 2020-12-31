import React from 'react';
import Header from './components/header';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomeScreen from './containers/Home';
function App() {
    return (
        <div>
            <Header/>
            <Router>
                <Switch>
                    <Route path="/" component={HomeScreen}/>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
