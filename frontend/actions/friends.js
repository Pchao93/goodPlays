import {
  postFriendship,
  deleteFriendship,
} from '../utils/friends';

export const RECEIVE_FRIENDSHIP = "RECEVIE_FRIENDSHIP";
export const REMOVE_FRIENDSHIP = "REMOVE_FRIENDSHIP";

export const receiveFriendship = (users) => ({
  type: RECEIVE_FRIENDSHIP,
  users
});

export const removeFriendship = (users, currentUser) => ({
  type: REMOVE_FRIENDSHIP,
  users,
  currentUser,
});



export const createFriendship = (user1Id, user2Id) => dispatch => {
  postFriendship(user1Id, user2Id).then(response =>
    {
      dispatch(receiveFriendship(response.users));
    }

);};

export const destroyFriendship = (user1Id, user2Id) => dispatch => {
  deleteFriendship(user1Id, user2Id).then(response =>
    {
      dispatch(removeFriendship(response.users, response.currentUser));
    }

);};
