import React from 'react';
import { Image, Container, Divider } from 'semantic-ui-react';

export default class ContactUs extends React.Component {

    render() {
        return (
            <Container style={{ paddingBottom: 20, paddingRight: 20, textAlign: 'justify' }}>
                <p style={{ fontSize: 50, fontFamily: 'Teko', fontWeight: 500, paddingLeft: 50, paddingTop: 25, marginBottom: -1 }}>
                    About us...
                </p>
                <Divider />
                <p style={{ fontSize: 18, paddingLeft: 25}}>
                    <p>
                    David Bernardo started PCParts because he wanted to offer their customers the best online shop service for computer parts.
                    </p>
                    <p>
                    That's why after alot of market research and with a team of excellent professionals the solution was created.
                    </p>
                    <p>
                    Along the way, PCParts as already been awarded multiple prizes as the leading companny in online shopping.
                    </p>
                    <p>
                    We strive to be the best and provide our customers the best prices on the market.
                    </p>
                </p>
            </Container>
        );
    }
}


