import { combineReducers } from 'redux';
import VideoReducer from './reducer_video';

const rootReducer = combineReducers({
  video: VideoReducer
});

export default rootReducer;