import { combineReducers } from 'redux';
import BlogReducer from  './blog_reducer'

const rootReducer = combineReducers({
  blogs: BlogReducer
});

export default rootReducer;
