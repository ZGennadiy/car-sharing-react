import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Navbar} from './components/Navbar/Navbar';
import {MainPage} from './pages/MainPage/MainPage';
import {OrderPage} from './pages/OrderPage/OrderPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/order" component={OrderPage} />
          <Route component={MainPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
