import { Name, Status, Item } from './FriendListItem.styled';
import PropTypes from 'prop-types';

export const FriendListItem = ({ friend: { avatar, name, isOnline } }) => {
  return (
    <Item isOnline={isOnline}>
      <Status isOnline={isOnline}>{isOnline}</Status>
      <img src={avatar} alt="User avatar1" width="48" />
      <Name isOnline={isOnline}>{name}</Name>
    </Item>
  );
};

FriendListItem.propTypes = {
  friend: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
  }),
};
