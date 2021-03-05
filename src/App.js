import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom';
import './App.css';
import Home from './components/home/Home';
import UserList from './components/user-list/user-list';
import NotFound from './components/NotFound';

//only for testing purposes
const busyHome = {
  name: 'JaneBuHo',
  status: 'busy',
  place: 'home-office'
}

const busyCampus = {
  name: 'JaneBuCa',
  status: 'busy',
  place: 'on-campus'
}

const availableHome = {
  name: 'JaneAvHo',
  status: 'available',
  place: 'home-office'
}

const availableCampus = {
  name: 'JaneAvCa',
  status: 'available',
  place: 'on-campus'
}

const users = [busyHome, busyCampus, availableHome, availableCampus];

class App extends Component {
  constructor(props) {
    super(props);
    // posible values "available/busy and on-campus/home-office"
    this.state = {
      myUser: users[0],
      users: users
    }
  }

  render() {
    return (
      <div className="App">
        <Router>
          <nav>
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/">Home</Link>
          </nav>

          <Switch >
            <Route exact path="/dashboard">
              <UserList users={this.state.users} />
            </Route>
            <Route exact path="/">
              <Home user={this.state.myUser} onChangePlace={this.updateUserPlace} onChangeStatus={this.updateUserStatus} />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }

  updateUserPlace = (onCampus) => {
    const place = onCampus ? 'on-campus' : 'home-office';
    this.setState((state) => {

      let newUserList = [...this.state.users];
      //myUser is always in pos[0] in the demo. However, in real app this will not be true.
      newUserList[0].place = place;

      return {
        myUser: {
          ...state.myUser,
          place
        },
        users: newUserList
      }
    });
  }

  updateUserStatus = (available) => {
    const status = available ? 'available' : 'busy';
    this.setState((state) => {

      let newUserList = [...this.state.users];
      //myUser is always in pos[0] in the demo. However, in real app this will not be true.
      newUserList[0].status = status;

      return {
        myUser: {
          ...state.myUser,
          status
        },
        users: newUserList
      }
    });
  }
}

export default App;