import React from 'react';
import Time from 'react-time-format'
import { Link } from "react-router-dom";
import { Container, Header, Grid, Statistic, Menu, Dimmer, Loader, Button, Image, Divider } from 'semantic-ui-react';
import { Redirect } from 'react-router';
import "../styles/Games/PublicGames.css"

export default class OrderDetails extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            orderID: this.props.match.params.id,
            order: undefined
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
        fetch(`http://localhost:55013/order/` + this.props.match.params.id, myInit)
            .then(result => result.json())
            .then((ord) => this.setState({ order: ord.data }))
    }
    render() {
        console.log(this.state.order)
        if (this.state.order == null)
            return "loading";
        return (
            <div>
                <h2 style={{ textAlign: 'center' }}>Order Details</h2>

               
                    <Grid columns='equal'>
                        {
                            this.state.order.Products.map((product, i) =>
                                (
                                    <Grid.Row>
                                        <Grid.Column width={3} >
                                            <Image centered size='tiny' src={require('../assets/images/'+product.Product.Image)} />
                                        </Grid.Column>
                                        <Grid.Column style={{ fontSize: 15 }}>
                                            <div style={{ paddingBottom: 10 }}><h4>Name: </h4>{product.Product.Name}</div>
                                            <div><h4>Price: </h4>{product.Product.Price}€</div>
                                            
                                        </Grid.Column>
                                        <Grid.Column>
                                            <div style={{margin: 2+'em'}}><h4>Supplier: </h4>{product.SupplierName}</div>
                                        </Grid.Column>
                                        <Grid.Column width={2}>
                                            <div style={{ textAlign: 'center', paddingTop: '30px' }}><h4>Quantity:</h4>x{product.Quantity}</div>
                                        </Grid.Column>
                                        <div style={{borderBottom:1}}></div>
                                    </Grid.Row>
                                    
                                ))
                        }
                    </Grid>
                
                <h3 style={{ textAlign: 'right' }}>Price Total: {this.state.order.Order.Price}€</h3>
            </div>
        );
    }
}

//{ this.state.order.Products.map(p => <p>{p.Product.ProductID}</p>) }