import React from 'react';
import Time from 'react-time-format'
import { Link } from "react-router-dom";
import { Container, Header, Grid, Statistic, Menu, Dimmer, Loader, Button, Image } from 'semantic-ui-react';
import { Redirect } from 'react-router';
import "../styles/Games/PublicGames.css"

export default class OrderDetails extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            order: []
        };
    }

    /*componentDidMount() {
        var headers = new Headers({
            'Content-Type': 'application/json'
        });
        var myInit = {
            method: 'GET',
            headers: headers
        }
        fetch(`http://localhost:55013/products/recent`,myInit)
            .then(result => result.json())
            .then(ord => {this.setState({orders: ord.data})}
            );
    }*/

    render() {
        return (
            <div className="games_board">
                <Header id="title" as="h1" textAlign="center" style={{ paddingBottom: 10 }}>Nome's Order Details</Header>

                <Container fluid className="game_details"><Link to='/aboutus'>
                    <Grid columns='equal'>
                        <Grid.Row>
                            <Grid.Column width={3} >
                                <Image centered size='tiny' src={require('../assets/images/datboy.png')} />
                            </Grid.Column>
                            <Grid.Column style={{ fontSize: 15 }}>
                                <div style={{ paddingBottom: 10 }}><h4>Description: Bery Nice</h4></div>
                                <div style={{ paddingBottom: 10 }}><h4>Details: lots of memories</h4></div>
                                <div><h4>Price: 5 Dolla</h4></div>
                            </Grid.Column>
                            <Grid.Column>
                                <div style={{ paddingBottom: 10 }}><h4>Order Date: Data</h4></div>
                                <div><h4>Payment Method: VISA</h4></div>
                            </Grid.Column>
                            <Grid.Column width={2}>
                                <div style={{textAlign: 'right', paddingTop: '30px'}}><h4>Quantity: 2x</h4></div>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Link></Container>
                
                <h2 style={{textAlign: 'right'}}>Total: Lots of €€€</h2>
            </div>
        );
    }
}