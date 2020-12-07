import React from 'react';
import { BrowserRouter , Switch, Route } from 'react-router-dom';

import AuthProvider from '../../providers/Auth';
import Private from '../Private/';
import HomePage from '../../pages/Home';
import NotFoundPage from '../../pages/NotFound';
import Favorites from '../../pages/Favorites';
import VideoDetailsView from '../../pages/VideoDetailsView';

function App() {
    return (
        <BrowserRouter>
            <AuthProvider>
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route exact path="/home/:id" component={VideoDetailsView} />
                    <Private>
                      <Route path="/favorites/" component={Favorites} />
                    </Private>
                    <Route exact path="*" component={NotFoundPage} />
                </Switch>
            </AuthProvider>
        </BrowserRouter>
    )
}
export default App;