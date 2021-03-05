import './Home.css';
import React, { Component } from 'react';
import BigSwitch from '../big-switch/big-switch';
import StatusButton from '../status-button/status-button';
import StatusImage from '../status-image/status-image';

const config = { textWhenChecked: 'on-campus', textWhenUnchecked: 'Home office' };

class Home extends Component {
    render() {
        const { status, place } = this.props.user;
        const onCampus = place === 'on-campus';
        const available = status === 'available';

        return (
            <div className="Home">
                <StatusButton available={available} onChange={this.updateUserStatus}/>
                <StatusImage available={available} onCampus={onCampus}/>
                <BigSwitch config={config} checked={onCampus} onChange={this.updateUserPlace} />
            </div>
        );
    }

    updateUserPlace = (onCampus) => {
        console.log('updateUserPlace: ', onCampus );
        this.props.onChangePlace(onCampus);
    }

    updateUserStatus = (available) => {
        console.log('updateUserStatus: ', available );
        this.props.onChangeStatus(available);
    }
}

Home.defaultProps = {
    name: 'John Doe',
    place: 'on-campus',
    status: 'available',
    onChangePlace: () => { console.log('<Home> onChangePlace') },
    onChangeStatus: () => { console.log('<Home> onChangeStatus') }

};

export default Home;