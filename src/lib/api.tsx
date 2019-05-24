import { Route, Redirect } from 'react-router-dom';

const AuthService = {
  isAuthenticated: false,
  authenticate(cb: any) {
    this.isAuthenticated = true
    setTimeout(cb, 100)
  },
  logout(cb: any) {
    this.isAuthenticated = false
    setTimeout(cb, 100)
  }
};

const SecretRoute = ({ component: Component, ...rest }: any) => (
  <Route {...rest} render={(props: any) => (
    AuthService.isAuthenticated === true
      ? <Component {...props} />
      : <Redirect to='/login' />
  )} />
);



