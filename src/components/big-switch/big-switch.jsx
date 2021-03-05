import './big-switch.css';
import React, { Component } from 'react';
import BigButton from '../big-button/big-button';

class BigSwitch extends Component {

    handleOnClickFirstButton = (newValue) => {
        this.updatEnabled(newValue);
    }

    handleOnClickSecondButton = (newValue) => {
        this.updatEnabled(!newValue);
    }

    updatEnabled(newValue){
        this.props.onChange(newValue);
    }

    render() {
        const { checked, config: { textWhenChecked, textWhenUnchecked } } = this.props;

        return (
            <div className="BigSwitch">
                <BigButton text={textWhenChecked} enabled={checked} onClick={this.handleOnClickFirstButton}/>
                <BigButton text={textWhenUnchecked} enabled={!checked} onClick={this.handleOnClickSecondButton}/>
            </div>
        );
    }
}

BigSwitch.defaultProps = {
    config: { textWhenChecked: 'on-campus', textWhenUnchecked: 'Home office' },
    checked: true,
    onChange: ()=>{console.log('<BigSwitch> onChange')}
};

export default BigSwitch;