import Map from './newmap'
import Login from './components/login';
import Signup from './components/signup';
import MapDraw from './components/map';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Switch } from "react-router";
import PassworChnage from './components/passwordCh';
import DropZonec from './components/dropZone';
import "./App.css";
import SwipeableTemporaryDrawer from './components/sildeDialog';
import ImagePreview from './components/imagePreview';
import { useAuth0 } from '@auth0/auth0-react';
import ProtectedRoute from './auth/protected-route';
import NavBar from './auth/nav-bar';

const App = () => {
  const {isLoading} = useAuth0();
  if (isLoading) return <div> loading....</div>
  
  return (
    
    <Router> 
      <NavBar />
      <div className='App' >
        <main className='container'>
          <Switch>
            <Route path='/' exact component={Login}></Route>
            <Route path='/signup' component={Signup}></Route>
            <ProtectedRoute path='/map' component={MapDraw}></ProtectedRoute>
            <ProtectedRoute  path='/changepassword' component={PassworChnage}></ProtectedRoute >
            <Route path='/drag' component={DropZonec }></Route>
            <Route path='/silde' component={SwipeableTemporaryDrawer }></Route>
            
          </Switch>
        </main>
      </div>
    </Router>
  );
}


export default App;
