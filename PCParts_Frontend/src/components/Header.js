import React from 'react';

import { Link } from "react-router-dom";
import { Image, Responsive, Icon, Sidebar, Menu, Container, Dropdown } from 'semantic-ui-react';

import '../styles/header.css';

/*function LoginButton(props) {
    return (
        <Menu.Menu position="right">
            <Menu.Item><Link to='/login'>Login</Link></Menu.Item>
            <Menu.Item><Link to='/register'>Register</Link></Menu.Item>
        </Menu.Menu>
    );
}

function DropDownTeamInvitations(props) {
    const inv = props.invites.invites;
    const myStyle = {
        animation: "haveInvites",
        animationDuration: "1.5s",
        animationIterationCount: "infinite"
    }
    return (
        <Dropdown item text='Team Invitations' icon={inv.length > 0 ? 'bell outline' : ''} pointing style={inv.length > 0 ? myStyle : {}}>
            <Dropdown.Menu>

                {
                    inv.map(i => {//image_url:null is_official:false name:null partner:{id: 7, nickname: "ricardma", image_url: null}
                        return (
                            <Dropdown.Item key={"invite" + i.id}>
                                <b>{i.partner.nickname}</b> invited you for a team
                                <br />
                                <button style={{ width: 100 + "%", backgroundColor: "#00ff94", border: "1px solid #00ff94", cursor: "pointer", color: "white" }} onClick={() => acceptInvite(i.id)}>Accept</button>
                            </Dropdown.Item>
                        )
                    })
                }
            </Dropdown.Menu>
        </Dropdown>
    )
}

function acceptInvite(id) {
    fetch('http://127.0.0.1:3000/team/join/' + id, {
        method: 'PUT',
        headers: {
            "Authorization": localStorage.getItem("token"),
            'Content-Type': 'application/json'
        },
    }).then(function (response) {
        return response.json();
    }).then(function (body) {
        console.log(body)
    });
}

function LogoutButton(props) {
    return (
        <Menu.Menu position="right">
            <DropDownTeamInvitations invites={props} />
            <Menu.Item as="a" href='/user/details'>{JSON.parse(localStorage.getItem('user')).nickname}</Menu.Item>
            <Menu.Item as='a' onClick={() => { localStorage.removeItem('token'); localStorage.removeItem('user'); window.location.href = ("/") }}>Logout</Menu.Item>
        </Menu.Menu>
    );
}
*/
export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            product_types: []
        }
    }

    /*getInvites = () => {
        var headers = new Headers({
            "Authorization": localStorage.getItem("token"),
            'Content-Type': 'application/json'
        });
        var myInit = {
            method: 'GET',
            headers: headers
        }
        fetch(`http://localhost:3000/teams/pendent/`, myInit)
            .then(result => result.json())
            .then(invs => {
                if (invs.status===401){
                    localStorage.clear();
                    window.location.href="/login"
                }else{
                    this.setState({
                        invites: invs.data
                    })
                }
            })
    }

    componentDidMount() {
        
        if (localStorage.getItem('token') != null) {
            this.getInvites();
            this.interval = setInterval(this.getInvites, 10000)
        }
    }

    componentWillUpdate(nextProps, nextState) {
        if (nextState == this.state) {
            if (localStorage.getItem('token') != null) {
                this.getInvites();
                this.interval = setInterval(this.getInvites, 10000)
            }
        }
    }
*/
    toggleVisibility = () => this.setState({ visible: !this.state.visible })

    componentDidMount() {
        var headers = new Headers({
            'Content-Type': 'application/json'
        });
        var myInit = {
            method: 'GET',
            headers: headers
        }
        fetch(`http://localhost:55013/products/type`, myInit)
            .then(result => result.json())
            .then(prdtp => { this.setState({ product_types: prdtp.data }) }
            );
    }

    render() {
        /*let log = null;
        if (localStorage.getItem('token') != null) {
            //log = <LogoutButton invites={this.state.invites} />;
        } else {
            log = <LoginButton />;
        }*/
        return (

            <Responsive minWidth={740}>
                <Container style={{ marginBottom: 0 + "px" }}>
                    <Menu>
                        <Menu.Menu className="nav-main">
                            <Menu.Item>
                                <Image src={require('../assets/images/logoPEBOLIM.png')} size='mini' as="a" href="/" />
                            </Menu.Item>
                            <Dropdown item text='Products'>
                                <Dropdown.Menu>
                                    {
                                        this.state.product_types.map((type, i) =>
                                            (
                                                <Dropdown.Item key={type.ProductTypeID}><Link to={"/products/type/"+type.ProductTypeID}>{type.Type}</Link></Dropdown.Item>

                                            ))
                                    }
                                </Dropdown.Menu>
                            </Dropdown>
                            <Menu.Item><Link to='/listorders'>Orders</Link></Menu.Item>
                            <Menu.Item><Link to='/aboutus'>About Us</Link></Menu.Item>
                            <Menu.Item><Link to='/contactus'>Contact Us</Link></Menu.Item>
                        </Menu.Menu>
                        <Menu.Menu position="right">
                            <Menu.Item><Link to='/login'>Login</Link></Menu.Item>
                            <Menu.Item><Link to='/register'>Register</Link></Menu.Item>
                            <Menu.Item>
                                <Image src={require('../assets/images/shopping_cart.png')} size='mini' as="a" href="/" />
                            </Menu.Item>
                        </Menu.Menu>
                    </Menu>
                </Container>
            </Responsive>

        );
    }
}