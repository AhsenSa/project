import { Grid, Box, Avatar, TextField, Checkbox, FormControlLabel, Button, Link, Typography } from '@mui/material'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import image from "../asset/bg11.jpg"
import { Container, CssBaseline } from '@mui/material'
import { useAuth0 } from '@auth0/auth0-react';
import { style } from '@mui/system';




const Login = () => {
    const imageStyle = { backgroundImage: `url(${image})`, width: '100vw', height: '100vh', backgroundSize: 'cover', backgroundPosition: 'center' }
    const avatarStyle = { margin: '0 0 10px', backgroundColor: '#610864' };
    const boxStyle = { marginTop: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', height: '10vh' };
    const buttonStyle = { margin: "10px 0 20px 0" };
    const containerStyle = { padding: 30, width: '30vw' };
    const {loginWithRedirect, isAuthenticated, user, logout} = useAuth0();

    console.log(user);
    console.log ( " login isAuthenticated: "+ isAuthenticated);

    return (
        !isAuthenticated && (
        <Grid style={imageStyle}>
            <Container style={containerStyle} >
                <CssBaseline />
                <Box style={boxStyle}>
                    <Avatar style={avatarStyle}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5" sx={{ marginBottom: 12, }}>
                        Sign in
                    </Typography>
                    <Box component="form" noValidate sx={{ mt: 1 }}>        
                    </Box>
                    <Button
                            type="submit"  fullWidth variant="contained" onClick={()=> loginWithRedirect(
                                
                            )} style= {buttonStyle}>
                            Sign In
                        </Button>
                       
                </Box>

            </Container>
        </Grid>


    ))

}

export default Login;