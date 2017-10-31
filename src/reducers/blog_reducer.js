import _ from 'lodash';
import { FETCH_BLOGS } from '../actions/fetch_blogs';

export default function(state = {}, action) {
    switch (action.type) {
        case FETCH_BLOGS:
            return _.mapKeys(action.payload.data, 'id');
        default:
            return state;
    }
}