import { combineReducers } from 'redux';
import { friendsReducer } from './FriendsListReducer.js';
import { singleFriendReducer } from './loginReducer';

export default combineReducers({
  friendsReducer,
  singleFriendReducer
});
