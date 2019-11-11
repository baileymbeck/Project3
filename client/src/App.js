import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import TriviaGame from "./components/TriviaGame";
import ClickyGame from "./components/ClickyGame";
import SpaceClicky from "./components/SpaceClicky";
import Nav from "./components/Nav";
import Home from "./pages/Home/Home";
import LoginPage from './components/Login/Login';
import GameHome from "./pages/GameHome/GameHome"

const style = {
  app: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column'
  }
}


class App extends Component {

  state = {
    userLogin : false 
  }

  render () {
    return(

      // this.state.userLogin ?  () : <h3> please sign up </h3>;
      <Router>
      <div style={style.app}>
        <Nav/>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/gamehome" component={GameHome} />
            <Route exact path="/login" component={LoginPage} />
            {/* <Route exact path="/profile" component={} /> */}
            <Route exact path="/clickygame" component={ClickyGame} />
            <Route exact path="/spaceshuffle" component={SpaceClicky} />
          <Route exact path="/trivia" component={TriviaGame} />
          </Switch>
        {/* <Footer/> */}
      </div>
    </Router>
  );
  }
   
}

export default App;
