import React, { Component } from 'react';
import './App.css';

import BigButton from './components/big-button/big-button';
import BigSwitch from './components/big-switch/big-switch';
import StatusButton from './components/status-button/status-button';
import StatusImage from './components/status-image/status-image';
import UserList from './components/user-list/user-list';
import UserPreview from './components/user-preview/user-preview';

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

  render() {
    const available = this.state.myUser.status === 'available';
    const onCampus = this.state.myUser.place === 'on-campus';
    const config = { textWhenChecked: 'on-campus', textWhenUnchecked: 'Home office' };
    return (
      <div className="App">
        <p>This is the BigButton (always enabled if not part of a switch</p>
        <BigButton text={this.state.myUser.place} />

        <p>This is the BigSwitch</p>
        <BigSwitch config={config} checked={onCampus} onChange={this.updateUserPlace} />

        <p>This is the StatusButton</p>
        <StatusButton available={available} />

        <p>This is the StatusImage</p>
        <StatusImage available={available} onCampus={onCampus} />

        <p>This is the UserPreview</p>
        <UserPreview user={this.state.myUser} />

        <p>This is the UserList</p>
        <UserList users={users} />
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
}

export default App;