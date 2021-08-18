import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import FAQ from '../components/Item/FAQ'
import App from '../App';
import ItemDetailContainer from '../components/Item/ItemDetailContainer';
import NotFound from '../components/Item/NotFound';


const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={App} />
                <Route path="/itemDetail/:id" component={ItemDetailContainer} />
                <Route path="/Lagers" component={App} />
                <Route path="/Ales" component={App} />
                <Route path="/FAQ" component={FAQ} />
                <Route path="*" component={NotFound} />
            </Switch>
        </BrowserRouter>
    )
}

export default Router;