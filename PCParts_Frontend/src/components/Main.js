import React from 'react';
import {Switch, Route} from "react-router-dom";

import Homepage from './Homepage';
import AboutUs from './AboutUs';
import ListProductsByType from './ListProductsByType';
import ProductDetails from './ProductDetails';
import ListOrders from './ListOrders';
import OrderDetails from './OrderDetails';
import Login from './Auth/Login';
import Register from './Auth/Register';


export default class Main extends React.Component {
    render(){
        return (
            <Switch>
                <Route exact path="/" component={Homepage} />
                <Route exact path="/aboutus" component={AboutUs} />
                <Route exact path="/productdetails/:id" component={ProductDetails} />
                <Route exact path="/listorders" component={ListOrders} />
                <Route exact path="/products/type/:id" component={ListProductsByType} />
                <Route exact path="/order/:id" component={OrderDetails} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
            </Switch>           
        );
    }

} 
