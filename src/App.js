import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Hooks from './Hooks/Hooks';
import Nav from './components/Nav/Nav';
import Service from './service/Service';
import Home from './components/Home/Home';
import Services from './components/Services/Services';
import About from './components/About/About';
import Footer from './Footer/Footer';
import Booking from './components/Booking/Booking';
import Login from './components/Login/Login';
import AuthProvider from './contex/AuthProvider';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import Book from './components/book/Book';



function App() {
  return (
    <div className="App">
      <AuthProvider >
      <Router>
        <Nav></Nav>
        <Switch>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/services">
            <Services></Services>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <PrivateRoute path="/booking/:travelID">
          <Booking></Booking>
             
          </PrivateRoute>
          <PrivateRoute path="/book">
            <Book></Book>

          </PrivateRoute>
          <PrivateRoute path="/hook">
            <Hooks></Hooks>
          </PrivateRoute>
          
            
            
            <Route>           
              <Footer></Footer>
            </Route>
          
        </Switch>

      
      </Router>
           
           </AuthProvider>
      

    </div>
  );
}

export default App;
