import React from 'react';
import { Link } from "react-router-dom";
import { Image, Grid } from 'semantic-ui-react';

export default class Homepage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
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
        fetch(`http://localhost:55013/products/recent`,myInit)
            .then(result => result.json())
            .then(prd => {this.setState({products: prd.data})}
            );
    }

    render() {
        return (
            <Grid>
                <Grid.Row centered >
                    <Image size="massive" src={require('../assets/images/banner.jpg')} />
                </Grid.Row>
                <Grid.Row>
                    <div style={{ fontSize: 50, fontFamily: 'Teko', fontWeight: 600, paddingLeft: 150, paddingTop: 25 }}>
                        New Products
                     </div>
                </Grid.Row>
                <Grid.Row centered columns={4} style={{ paddingTop: 30 }}>
                    {
                        this.state.products.map((product, i) =>
                            (
                                <Grid.Column key={product.ProductID}><Link to={"/productdetails/"+product.ProductID}>
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
            </Grid >
        );
    }
}