import { Grid, Box, TextField, Button, Typography } from '@mui/material'
import image from "../asset/background4.jpg"
import { Container } from '@mui/material'




const PasswordChange = function passwordChange() {
    const imageStyle = { backgroundImage: `url(${image})`, width: '100vw', height: '100vh', backgroundSize: 'cover', backgroundPosition: 'center' }
    const avatarStyle = { margin: '0 0 10px', backgroundColor: '#610864' };
    const boxStyle = { marginTop: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', height: '10vh' };
    const containerStyle = { padding: 30, width: '30vw' };


    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
    };
    return (

        <Grid style={imageStyle}>
            <Container style={containerStyle} >
                <Box style={boxStyle}>
                    <Typography sx={{ marginBottom: 2, }}>
                         <h3 className="title" >Change Password</h3>
                    </Typography>

                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                        <Grid container spacing={1}>
                            <Grid item xs={12} sm={12}>
                                <TextField autoComplete="given-name" name="Username" required fullWidth id="firstName" label="Username" autoFocus
                                />
                            </Grid>
                            <Grid item xs={12}>
                            <TextField required fullWidth name="current-password" label="Current Password" type="password" id="current-password" autoComplete="current-password" />
                            </Grid>

                            <Grid item xs={12}>
                                <TextField required fullWidth name="password" label="Password" type="password" id="password" autoComplete="new-password" />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField required fullWidth name="password-verfiy" label="Repeat new Password" type="password" id="repear-password" autoComplete="new-password" />
                            </Grid>

                        </Grid>
                        <Button type="submit"  fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                           Send
                        </Button>

                        <Grid container justifyContent="flex-end" sx={{ ml: -11.5 }}>
                            <Grid item>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>

        </Grid>
    )

}

export default PasswordChange;