import { Login, Password } from '@mui/icons-material';
import { render, screen } from '@testing-library/react';
import App from './App';
import PasswordChange from './components/passwordCh';
import Signup from './components/signup';


test('logIn', () => {
  render(<Login />);
  const component = render(<Login/>);
  console.log(component);

});


test('renders learn react link', () => {
  render(<App />);
  const component = render(<App/>);
  console.log(component);

});


test('renders learn react link', () => {
  render(<map />);
  const component = render(<map/>);
  console.log(component);

});


test('renders learn react link', () => {
  render(<slideDialog />);
  const component = render(<slideDialog/>);
  console.log(component);

});


test('renders learn react link', () => {
  render(<PasswordChange />);
  const component = render(<PasswordChange/>);
  console.log(component);

});
