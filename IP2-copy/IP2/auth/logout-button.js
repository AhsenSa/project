import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const LogoutButton = () => {
    const {isLoading} = useAuth0();  
    
    if (isLoading) return <div> loading....</div>


};

export default LogoutButton;