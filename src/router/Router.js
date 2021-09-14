import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import FAQ from '../components/Item/FAQ'
import Home from '../components/Item/Home';
import ItemDetailContainer from '../components/Item/ItemDetailContainer';
import NotFound from '../components/Item/NotFound';
import ProductorList from '../components/Item/ProductorList';
import Cart from '../components/Item/Cart';
import Checkout from '../components/Item/Checkout';
import { Thankyou } from '../components/Item/Thakyou';



export const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/FAQ" component={FAQ} />
                <Route exact path="/cart" component={Cart} />
                <Route exact path="/checkout" component={Checkout} />
                <Route exact path="/thankyou/:id" component={Thankyou} />
                <Route exact path="/itemDetail/:id" component={ItemDetailContainer} />
                <Route exact path="/:productor" component={ProductorList} />
                <Route path="*" component={NotFound} />
            </Switch>
        </BrowserRouter>
    )
}

export default Router;