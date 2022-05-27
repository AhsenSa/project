
import { useAuth0 } from '@auth0/auth0-react';
import { Logout } from '@mui/icons-material';
// import JSONPretty from 'react-json-pretty';
// <JSONPretty data ={user}/>
const Profile = () => {
   
    const {user, isAuthenticated} = useAuth0();


    return (
      (
        <div>
             {JSON.stringify(user, null, 2)}
        </div>   
    ))

}

export default Profile;