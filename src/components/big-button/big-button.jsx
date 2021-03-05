import './big-button.css';
import React, { Component } from 'react';

class BigButton extends Component {
    
    handleOnClick = () => {
        this.props.onClick(!this.props.enabled);
    };

    render() {
        const classes = `BigButton ${this.props.enabled ? '' : 'disabled'}`;
        return (
            <div className={classes} onClick={this.handleOnClick}>
                <p>{this.props.text}</p>
            </div>
        );
    }
}

BigButton.defaultProps = {
    enabled: true,
    text: 'Button',
    onClick: ()=>{console.log('click!')}
};

export default BigButton;