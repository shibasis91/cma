import axios from 'axios';
import * as Types from './types';

export const getCandidates = () => dispatch => {
    axios({
        "Type": 'GET',
        "url": 'http://gtd-api-customer-dev.peppersquare.com/django/v1/task/mock-data/',
        "headers": {
            "content-type": "application/json",
            "Authorization": "Bearer: abcd-1234-efgh-5678"
        }
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