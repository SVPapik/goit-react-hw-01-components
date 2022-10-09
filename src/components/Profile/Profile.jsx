import {
  UserCard,
  Avatar,
  Username,
  Tag,
  Location,
  StatsList,
  Stat,
  Description,
  Label,
  Quantity,
} from './Profile.styled';
import PropTypes from 'prop-types';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <UserCard>
      <Description>
        <Avatar src={avatar} alt={username} />
        <Username>{username}</Username>
        <Tag>{tag}</Tag>
        <Location>{location}</Location>
      </Description>
      <StatsList>
        <Stat>
          <Label>Followers</Label>
          <Quantity>{stats.followers}</Quantity>
        </Stat>
        <Stat>
          <Label>Views</Label>
          <Quantity>{stats.views}</Quantity>
        </Stat>
        <Stat>
          <Label>Likes</Label>
          <Quantity>{stats.likes}</Quantity>
        </Stat>
      </StatsList>
    </UserCard>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
