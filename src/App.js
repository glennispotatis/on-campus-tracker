import React, { Component } from 'react';
import './App.css';
import Home from './components/home/Home';
import UserList from './components/user-list/user-list';

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

  componentDidMount() {
    this.interval = setInterval(() => {
      //change myUser.status: 'available', busy
      const newStatus = Math.random() < 0.5 ? 'busy' : 'available';
      //change myUser.place: 'on-campus' home-office
      const newPlace = Math.random() < 0.5 ? 'home-office' : 'on-campus';

      //update user in user list (in this demo myUser will always be in the position 0 of users)
      let newUserList = [...this.state.users];
      newUserList[0].status = newStatus;
      newUserList[0].place = newPlace;

      this.setState((state) => {
        return {
          myUser: {
            ...state.myUser,
            status: newStatus,
            place: newPlace
          },
          users: newUserList
        }
      });
    }, 5000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div className="App">
        <p>This is the home component</p>
        <Home user={this.state.myUser} onChangePlace={this.updateUserPlace} onChangeStatus={this.updateUserStatus} />

        <p>This is the UserList</p>
        <UserList users={this.state.users} />
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