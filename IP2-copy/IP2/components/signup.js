import {Grid, Box, Avatar, TextField, Checkbox, FormControlLabel, Button, Link, Typography} from '@mui/material'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import image from "../asset/bg11.jpg"
import {Container} from '@mui/material'
import Axios from "axios";
import React, {Component} from 'react';


const imageStyle = {
    backgroundImage: `url(${image})`,
    width: '100vw',
    height: '100vh',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
}
const avatarStyle = {margin: '0 0 10px', backgroundColor: '#610864'};
const boxStyle = {marginTop: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', height: '10vh'};
const containerStyle = {padding: 30, width: '30vw'};
require('react-dom');
window.React2 = require('react');
console.log('hier');
console.log(window.React1 === window.React2);

class Signup extends Component {


    constructor(props) {
        super(props);
        this.state = {
            usernameReg: "",
            passwordReg: "",
            passwordVerifyReg:"",
            emailReg: ""

        }

        this.user_text = React.createRef();
        this.password_text = React.createRef();
        this.passwordVerify_text = React.createRef();
        this.email_text = React.createRef();


        this.add_credentials = this.add_credentials.bind(this);
        this.register = this.register.bind(this);
        this.handleChange_user = this.handleChange_user.bind(this);
        this.handleChange_pass = this.handleChange_pass.bind(this);
        this.handleChange_email = this.handleChange_email.bind(this);
        this.handleChange_passwordVerify = this.handleChange_passwordVerify .bind(this);

    }


    componentDidMount() {
        // window.addEventListener('load', this.add_credentials);

    }

    componentWillUnmount() {
        //window.removeEventListener('load', this.countdown("sdfsdfs"));

    }

    add_credentials() {
        Axios.defaults.withCredentials = true;
        Axios.get("http://localhost:3001/login").then((response) => {
            if (response.data.loggedIn == true) {
                //setLoginStatus(response.data.user[0].username);
            }
        });
    }

    register() {

        Axios.post("http://localhost:3001/register", {
            username: this.state.usernameReg,
            password: this.state.passwordReg,
            passwordVerify: this.passwordVerifyReg,
            email: this.state.emailReg,
        }).then((response) => {
            console.log(response);

        });

    }

    handleChange_user(event) {
        this.setState({usernameReg: event.target.value});
    }

    handleChange_pass(event) {
        this.setState({passwordReg: event.target.value});
    }

    handleChange_passwordVerify(event) {
        this.setState({passwordVerifyReg: event.target.value});
    }

    handleChange_email(event) {
        this.setState({emailReg: event.target.value});
    }


    render() {


        return (
            <Grid style={imageStyle}>
                <Container style={containerStyle}>
                    <Box style={boxStyle}>
                        <Avatar style={avatarStyle}>
                            <LockOutlinedIcon/>
                        </Avatar>
                        <Typography component="h1" variant="h5" sx={{marginBottom: 2,}}>
                            Sign up
                        </Typography>

                        <Box component="form" sx={{mt: 3}}>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <TextField autoComplete="given-name" name="username" required fullWidth
                                               id="firstName" label="username"
                                               autoFocus
                                               ref={this.user_text}
                                               value={this.state.usernameReg}
                                               onChange={this.handleChange_user}/>
                                </Grid>

                                <Grid item xs={12}>
                                    <TextField required fullWidth id="email" label="Email Address" name="email"
                                               ref={this.email_text}
                                               value={this.state.emailReg}
                                               onChange={this.handleChange_email}/>


                                </Grid>


                                <Grid item xs={12}>
                                    <TextField required fullWidth name="password" label="Password" type="password"
                                               id="password" autoComplete="new-password"
                                               ref={this.password_text}
                                               value={this.state.passwordReg}
                                               onChange={this.handleChange_pass}/>
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField required fullWidth name="passwordVerify" label="repeat Password" type="password"
                                               id="passwordVerify" autoComplete="new-password"
                                               ref={this.passwordVerify_text}
                                               value={this.state.passwordVerifyReg}
                                               onChange={this.handleChange_passwordVerify}/>
                                </Grid>


                                <Grid item xs={12}>
                                    <FormControlLabel
                                        control={<Checkbox value="allowExtraEmails" color="primary"/>}
                                        label="I want to..."
                                    />
                                </Grid>
                            </Grid>
                            <Button type="button" fullWidth variant="contained" sx={{mt: 3, mb: 2}}
                                    onClick={this.register}>
                                Sign Up
                            </Button>

                            <Grid container justifyContent="flex-end" sx={{ml: -11.5}}>
                                <Grid item>
                                    <Link href="/" variant="body2">
                                        Already have an account? Sign in
                                    </Link>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                </Container>

            </Grid>


        );
    }

}

export default Signup;
