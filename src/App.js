import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Home from './components/Home/Home';
import LogIn from './components/LogIn/LogIn';
import Medics from './components/Medics/Medics';
import NotFound from './components/NotFound/NotFound';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Registration from './components/Registration/Registration';
import Services from './components/Services/Services';
import Navigation from './components/Shared/Navigation/Navigation';
import AuthProvider from './context/AuthProvider';

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <BrowserRouter>
      <Navigation></Navigation>
      <Switch>
        <Route exact path = "/">
            <Home></Home>
        </Route>
        <Route path = "/home">
          <Home></Home>
        </Route>
        <Route path ="/login">
            <LogIn></LogIn>
        </Route>
        <Route path = "/registration">
          <Registration></Registration>
        </Route>
        <PrivateRoute exact path = "/doctors">
          <Services></Services>
        </PrivateRoute>
        <Route exact path = "/doctors/:id">
          <Medics></Medics>
        </Route>
        <PrivateRoute exact path = "/contacts">
          <Contact></Contact>
        </PrivateRoute>
        <Route exact path = "/about">
            <About></About>
        </Route>
        <Route path = "*">
          <NotFound></NotFound>
        </Route>
      </Switch>
      </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
