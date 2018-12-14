import React from 'react';
import Time from 'react-time-format'
import { Link } from "react-router-dom";
import { Container, Header, Grid, Statistic, Menu, Dimmer, Loader, Button } from 'semantic-ui-react';
import { Redirect } from 'react-router';
import "../styles/Games/PublicGames.css"

export default class ListOrders extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            orders: []
        };
    }

    componentDidMount() {
        var headers = new Headers({
            'Content-Type': 'application/json'
        });
        var myInit = {
            method: 'GET',
            headers: headers
        }
        fetch(`http://localhost:55013/orders`,myInit)
            .then(result => result.json())
            .then(ord => {this.setState({orders: ord.data})}
            );
    }

    render() {
        return (
            <div >
                <h2 style={{paddingBottom: 10, textAlign: "center"}}>Orders</h2>
                {
                        this.state.orders.map((order, i) =>
                            (
                            <Container fluid  key={order.Order.OrderID}><Link to={'/order/'+order.Order.OrderID}>
                                <Grid columns='equal'>
                                    <Grid.Row>
                                        <Grid.Column textAlign="left" style={{paddingLeft:40}} >
                                            <h3>Client: {order.UserName}</h3>
                                            Status: {order.Order.Status}
                                        </Grid.Column>
                                        <Grid.Column style={{fontSize:15}}>
                                            <div><h3>Order Date: {order.Order.OrderDate}</h3></div>
                                        </Grid.Column>
                                    </Grid.Row>
                                </Grid>
                                </Link><hr /></Container>
                            ))
                }
            </div>
        );
    }
}