import { Friends } from './FriendList.styled';
import { FriendCard } from './FriendCard/FriendCard';
import PropTypes from 'prop-types';

export const FriendList = ({ friends }) => {
  return (
    <Friends>
      {friends.map(friend => (
        <FriendCard friend={friend} key={friend.id} />
      ))}
    </Friends>
  );
};

FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
};
