import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Container from './components/Container'

const Routes = (props) => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" component={Container} />
            </Switch>
        </BrowserRouter>
    )
}

export { Routes }