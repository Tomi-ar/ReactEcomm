import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import FAQ from '../components/Item/FAQ'
import App from '../App';
import ItemDetailContainer from '../components/Item/ItemDetailContainer';
import NotFound from '../components/Item/NotFound';
import ProductorList from '../components/Item/ProductorList';


const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={App} />
                <Route exact path="/FAQ" component={FAQ} />

                <Route exact path="/itemDetail/:id" component={ItemDetailContainer} />
                <Route exact path="/:productor" component={ProductorList} />
                <Route path="*" component={NotFound} />
            </Switch>
        </BrowserRouter>
    )
}

export default Router;