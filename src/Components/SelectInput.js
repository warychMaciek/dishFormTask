import React, { Component } from 'react';
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from '../submitReducer';


class SelectInput extends Component {
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
            this.props.switchToNotSubmitted()
        }
    }
    
    render() {
        const {
            input: {value, onChange},
            meta: {error},
            selectOptions
        } = this.props;

        return (
            <>
            <select
                value={value}
                onChange={onChange}
                onBlur={this.isTouched}
            >
                <option value=''>-- Choose option --</option>
                {selectOptions.map(option => {
                    return <option key={option} value={option}>{option}</option>
                })}
            </select>
            {this.state.touched && ((error && <span>{error}</span>))}
            </>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectInput);