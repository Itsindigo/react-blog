import _ from 'lodash';
import { FETCH_BLOGS, CREATE_BLOG } from '../actions/index';

export default function(state = {}, action) {
    switch (action.type) {
        case FETCH_BLOGS:
            return _.mapKeys(action.payload.data, 'id');
        case CREATE_BLOG:
            return ''
        default:
            return state;
    }
}