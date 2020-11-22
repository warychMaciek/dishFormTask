const submitReducer = (state = false, action) => {
    switch (action.type) {
        case 'submitted':
            return state = true;
        case 'notSubmitted':
            return state = false;
        default: 
            return state;
    }
}

export default submitReducer;

export const submitted = () => {
    return {
        type: 'submitted'
    }
}

export const mapStateToProps = (state) => {
    return {
        isSubmitted: state.isSubmitted
    }
}
export const mapDispatchToProps = dispatch => {
    return {
        switchToSubmitted: () => {
            dispatch({type: 'submitted'});
        }, 
        switchToNotSubmitted: () => {
            dispatch({type: 'notSubmitted'});
        }
    }
}