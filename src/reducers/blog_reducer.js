import _ from 'lodash';
import { FETCH_BLOGS, CREATE_BLOG, FETCH_BLOG } from '../actions/index';

export default function(state = {}, action) {
    switch (action.type) {
        case FETCH_BLOGS:
            return _.mapKeys(action.payload.data, 'id');
        case CREATE_BLOG:
            // Would you handle status codes here, and then mutate the data/return messages accordingly?
            return action.payload.data;
        case FETCH_BLOG:
            // ECMA SYNTAX
            // const blog = action.payload.data;
            // const newState = { ...state  }
            // newState[blog.id] = blog
            // return newState
            
            // ES6 Syntax. {...Get existing State, [Define New Key]: Assign value}
            return { ...state, [action.payload.data.id]: action.payload.data};

        default:
            return state;
    }
}