import React, { Component } from 'react';
import { connect } from 'react-redux';
import TimeField from 'react-simple-timefield';
import { mapStateToProps, mapDispatchToProps } from '../submitReducer';

class TimeInput extends Component {
    constructor() {
        super();

        this.state = {
            touched: false
        }
    }

    isTouched = () => {
        this.setState({touched: true})
    }

    componentDidUpdate() {
        if (this.props.isSubmitted) {
            this.setState({touched: false})
            //this.props.switchToNotSubmitted()
        }
    }

    render() {
        const {
            input: {value, onChange},
            meta: {error},
        } = this.props;

        return (
            <>
                <TimeField 
                    value={value} 
                    showSeconds={true} 
                    onChange={onChange} 
                    onBlur={this.isTouched} 
                />
                {this.state.touched && ((error && <span>{error}</span>))}
            </>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TimeInput);