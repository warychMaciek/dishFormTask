import React, { Component } from 'react'

export default class SubmitConfirmation extends Component {
    constructor() {
        super();

        this.state = {
            isOn: false
        }
    }

    handleClick = () => {
        this.setState({isOn: false})
    }

    componentDidUpdate(prevProps) {
        if(prevProps.data !== this.props.data) {
            this.setState({isOn: true})
            setTimeout(() => this.setState({isOn: false}), 5000)
        }
    }

    render() {
        const { name, preparation_time, type, no_of_slices, diameter, spiciness_scale, slices_of_bread, id } = this.props.data;

        if (this.state.isOn) {
            return (
                <div onClick={this.handleClick} className="modal">
                    {id ? 
                        <>
                            <h1>Dish added.</h1>
                            <h3>Name: {name}</h3>
                            <h3>Preparation: {preparation_time}</h3>
                            <h3>Type: {type}</h3>
                            {no_of_slices ? 
                            <>
                                <h3>Number of slices: {no_of_slices}</h3>
                                <h3>Diameter: {diameter}</h3>
                            </>
                            : null }
                            {spiciness_scale ? <h3>Spiciness scale: {spiciness_scale}</h3> : null}
                            {slices_of_bread ? <h3>Slices of bread: {slices_of_bread}</h3> : null}
                        </>
                    :
                        <h1>There was an error: {JSON.stringify(this.props)}</h1>
                    }
                </div>
            )
        } else {
            return null;
        }
    }
}

