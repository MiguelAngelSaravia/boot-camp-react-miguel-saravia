import React from 'react';
import { BrowserRouter , Switch, Route } from 'react-router-dom';

import HomePage from '../../pages/Home';
import LoginPage from '../../pages/Login';
import NotFoundPage from '../../pages/NotFound';
import Favorites from '../../pages/Favorites';
import VideoDetailsView from '../../pages/VideoDetailsView';

function App() {
    return (
        <BrowserRouter>
            <Switch>

                <Route exact path="/" >
                    <LoginPage />
                </Route>
                <Route exact path="/home" >
                    <HomePage />
                </Route>
                <Route exact path="/home/:id" >
                    <VideoDetailsView />
                </Route>
                <Route exact path="/favorites" >
                    <Favorites />
                </Route>
                <Route exact path="*">
                    <NotFoundPage />
                </Route>

            </Switch>
        </BrowserRouter>
    )
}
export default App;