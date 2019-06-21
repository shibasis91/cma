import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Dashboard from './Dashboard/Dashboard';
import ViewCandidate from './candidate/viewCandidate';
import AddCandidate from './candidate/AddCandidate';

class App extends Component {
    render(){
        return(
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Dashboard} />
                    <Route path="/view" component={ViewCandidate} />
                    <Route path="/add" component={AddCandidate} />
                </Switch>
            </BrowserRouter>
        )
    }
}

export default App;


// Basic flow of Redux
// store          -> hold all of our application data/state
// reducer        -> a function who returns a specific amount of state or data
// action/event   -> event occurs
// dispatch       -> based on action return the update/add/delete data in store/state by reducer
// subscriber     -> when store is updated then all the updated value will available for those components who subscribe the store.


// steps
// 1. Create a reducer ---- takes two argument (1.State ? initial state : Updated state ----- 2.Action)
// 2. Create a store with the help of reducer  ----- takes to reducer
// 3. Now subscribed
// 4. then dispatch(action) --- must have a type and payload


