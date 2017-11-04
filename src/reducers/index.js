import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import BlogReducer from  './blog_reducer';


const rootReducer = combineReducers({
  blogs: BlogReducer,
  form: formReducer
});

export default rootReducer;
