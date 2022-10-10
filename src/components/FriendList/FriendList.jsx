import { FriendsList } from './FriendList.styled';
import { FriendListItem } from '../FriendListItem/FriendListItem';
import PropTypes from 'prop-types';

export const FriendList = ({ friends }) => {
  return (
    <FriendsList>
      {friends.map(friend => (
        <FriendListItem friend={friend} key={friend.id} />
      ))}
    </FriendsList>
  );
};

FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
};
