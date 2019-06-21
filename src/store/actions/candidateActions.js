import axios from 'axios';
import * as Types from './types';

export const getCandidates = () => dispatch => {
    axios({
       
    })
        .then(res => {
            console.log(res.data);
            dispatch({
                type: Types.GET_CANDIDATE, 
                payload: {
                    candidates: res.data
                }
            })
        })
        .catch(err => {
            console.log(err);
        })
}
