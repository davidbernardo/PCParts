import React from 'react';
import Time from 'react-time-format'
import { Link } from "react-router-dom";
import { Container, Header, Grid, Statistic, Menu, Dimmer, Loader, Button, Image } from 'semantic-ui-react';
import { Redirect } from 'react-router';
import "../styles/Games/PublicGames.css"

export default class ListProductsByType extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            typeID: this.props.match.params.id,
            products: []
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
        fetch(`http://localhost:55013/products/type/` + this.props.match.params.id, myInit)
            .then(result => result.json())
            .then(prds => { this.setState({ products: prds.data }) }
            );
    }

    render() {
        return (
            <div className="games_board">
                <h2 style={{paddingBottom: 10, textAlign: "center"}}>Products</h2>
                <Grid>
                <Grid.Row centered columns={4} style={{ paddingTop: 30 }}>
                    {
                        this.state.products.map((product, i) =>
                            (
                                <Grid.Column key={product.ProductID}><Link to={"/productdetails/" + product.ProductID}>
                                    <Image centered size='small' circular src={require('../assets/images/'+product.Image)} />
                                    <div style={{ fontSize: 30, textAlign: 'center', fontWeight: 600, paddingTop: 10 }}>
                                        <p>
                                            {product.Name}
                                        </p>
                                        <p style={{ fontSize: 15, marginTop: -20 }}>
                                            {product.Price}€
                                        </p>
                                    </div>
                                </Link></Grid.Column>
                            ))
                    }
                </Grid.Row>
                </Grid>
            </div>
        );
    }
}