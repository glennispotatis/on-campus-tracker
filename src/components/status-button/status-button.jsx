import React, { Component } from 'react';
import './status-button.css';

class StatusButton extends Component {

    render() {
        const isBusy = this.props.available ? '' : 'busy';

        return (
            <div className="StatusButton" onClick={this.handleOnClick}>
                <div className="textContainer"></div>
                <div className={['dot', isBusy].join(' ')}></div>
                <p className="text">{this.props.available === true ? 'Available' : 'Busy'}</p>
            </div>
        );
    }

    handleOnClick = () => {
        this.props.onChange(!this.props.available);
    };
}

StatusButton.defaultProps = {
    available: true,
    onChange: () => { console.log('StatusButton click!') }
}

export default StatusButton;