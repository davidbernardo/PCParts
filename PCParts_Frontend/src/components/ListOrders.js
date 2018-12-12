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
            <div className="games_board">
                <Header id="title" as="h1" textAlign="center" style={{paddingBottom: 10}}>Orders</Header>
                {
                        this.state.orders.map((order, i) =>
                            (
                            <Container fluid className="game_details" key={order.OrderID}><Link to={'/orderdetails'+order.OrderID}>
                                <Grid columns='equal'>
                                    <Grid.Row>
                                        <Grid.Column textAlign="left" style={{paddingLeft:40}} >
                                            <h3>Client: fuck</h3>
                                            Status: {order.Status}
                                        </Grid.Column>
                                        <Grid.Column style={{fontSize:15}}>
                                            <div><h3>Order Date: {order.OrderDate}</h3></div>
                                        </Grid.Column>
                                    </Grid.Row>
                                </Grid>
                                </Link></Container>
                            ))
                }
            </div>
        );
    }
}