import * as React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import image from "../asset/person2.png";
import { useAuth0 } from '@auth0/auth0-react';


export default function AccountMenu() {
  const { user } = useAuth0();
  const { name, picture, email } = user;
  const accountAvatar = { width: 55, height: 55, margin: '8px 0 0 -20px', backgroundSize: 'cover', backgroundImage: `url(${picture})` };
  const usernameAvatar = { width: 35, height: 35, backgroundSize: 'cover', backgroundImage: `url(${image})` };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const {loginWithRedirect, isAuthenticated, logout} = useAuth0();

   var  firstname = name.substring(0, name.indexOf('.'));
   console.log (firstname);
   firstname = firstname[0].toUpperCase() + firstname.slice(1);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <React.Fragment>
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
        <Tooltip title="Account settings">

          <IconButton
            onClick={handleClick} size="large"
            sx={{ ml: 2 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <Avatar style={accountAvatar}> </Avatar>
          </IconButton>
        </Tooltip>
      </Box>

      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgb(0, 0, 0))',
            mt: 1.5,
            bgcolor: 'transparent',
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
              bgcolor: '',
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'green',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'center', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'center', vertical: 'bottom' }}
      >
        <MenuItem >   <Avatar style={usernameAvatar}> </Avatar> {firstname} </MenuItem>

        <MenuItem >  <Avatar /> My account </MenuItem>
        <Divider />

        <MenuItem>
          <ListItemIcon>
            <PersonAdd style={{ fontColor: 'red' }} fontSize="small" />
          </ListItemIcon>
          Add another
        </MenuItem>

        <MenuItem>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>

        <MenuItem onClick={()=> logout()} >
          <ListItemIcon>
  
            <Logout fontSize="small"  onClick={()=> logout({
               returnTo: window.location.origin,
            })} />
          </ListItemIcon>
          Logout
        </MenuItem>

      </Menu>
    </React.Fragment>
  );
}
