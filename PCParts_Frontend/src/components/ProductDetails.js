import React from 'react';
import Time from 'react-time-format';
import { Container, Header, Grid, Image, Label, Icon, Loader, Dimmer, Button } from 'semantic-ui-react';

export default class ProductDetails extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            productID: this.props.match.params.id,
            product: []
            //loading: true
        };
    }

    /*componentDidMount() {
        var headers = new Headers({
            "Authorization": localStorage.getItem("token"),
            'Content-Type': 'application/json'
        });
        var myInit = {
            method: 'GET',
            headers: headers
        }
        fetch(`http://localhost:3000/player`, myInit)
            .then(result => result.json())
            .then(usr => this.setState({ user: usr.user }))
        this.setState({ loading: false })

    }*/
    componentDidMount() {
        var headers = new Headers({
            'Content-Type': 'application/json'
        });
        var myInit = {
            method: 'GET',
            headers: headers
        }
        fetch(`http://localhost:55013/product/`+this.props.match.params.id, myInit)
            .then(result => result.json())
            .then(prd => {this.setState({product: prd.data})});
    }

    render() {
        /*const loading = this.state.loading;
        if (loading) {
            return (
                <Dimmer active>
                    <Loader size='massive'>Loading</Loader>
                </Dimmer>
            )
        } else {*/
        return (
            <div>
                <Header id="title" style={{ textAlign: 'left', fontSize: 50 }}>{'Nome do Produto'}</Header>
                <Grid>
                    <Grid.Column width={4} >
                        <Grid.Column style={{ backgroundColor: '#353535', paddingTop: 15, paddingLeft: 10, paddingRight: 10 }}>
                            <Image src={require("../assets/images/creatorImage.png")} centered />
                            <div style={{ fontSize: 30, textAlign: 'center', fontWeight: 600, paddingTop: 10 }}>
                                {this.state.product.Name}
                            </div>
                            <Grid.Row style={{ fontSize: 16, fontWeight: 600, paddingBottom: 10, paddingTop: 15 }}>
                                Price:
                            </Grid.Row>
                            <Grid.Row style={{ fontSize: 20, paddingBottom: 15, paddingLeft: 5 }}>
                                {this.state.product.Price}
                            </Grid.Row>
                        </Grid.Column>
                        <Grid.Column>
                            <Grid.Row>
                                <Button fluid style={{ marginTop: 10 }}>Add to Cart</Button>
                            </Grid.Row>
                        </Grid.Column>
                    </Grid.Column>
                    <Grid.Column width={12}>
                        <Grid.Row>
                            <p style={{ fontSize: 30, fontFamily: 'Teko', fontWeight: 600, paddingLeft: 50, paddingTop: 25 }}>
                                Product Details...
                            </p>
                            <p>
                                Details...
                            </p>
                            <p>
                                {this.state.product.Details}
                            </p>
                        </Grid.Row>
                    </Grid.Column>
                </Grid>
            </div>
        );
        //}
    }
}