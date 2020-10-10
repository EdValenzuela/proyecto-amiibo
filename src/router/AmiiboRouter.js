import React, { lazy, Suspense } from 'react';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';
import { PacmanLoader } from 'react-spinners';

const Header = lazy(() => import('../shared/Header'));
const MainAmiibo = lazy(() => import('../components/MainAmiibo'));
const DetailAmiibo = lazy(() => import('../components/DetailAmiibo'));

const AmiiboRouter = () => {
    return (
        <HashRouter basename="/">
            <div>
            <Suspense fallback={<PacmanLoader color="red" />}>
                <Header/> 
                <Switch>
                    <Route exact path="/" component={ MainAmiibo } />
                    <Route exact path="/detail/:id" component={ DetailAmiibo } />
                    <Redirect to="/" />
                </Switch>
            </Suspense>
            </div>
        </HashRouter>
    )
}

export default AmiiboRouter
