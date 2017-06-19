import { FETCH_VIDEO } from '../actions/action';

export default function(state = [], action){
  switch(action.type){
    case FETCH_VIDEO:
    return [action.payload, ...state];
  }
  return state;
}