import * as Types from '../actions/types';

const candidateReducer = (state=[], action) => {
    switch(action.type){
        case Types.GET_CANDIDATE: {
            return action.payload.candidates
        }
        default: return state
    }
}

export default candidateReducer;