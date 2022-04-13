import PropTypes from 'prop-types';

import {
  Container,
  Description,
  Avatar,
  Text,
  Stats,
  Item,
  ListItem,
} from './Profile.styled';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <Container>
      <Description className="description">
        <Avatar src={avatar} alt={username} />
        <Text>{username}</Text>
        <Text>@{tag}</Text>
        <Text>{location}</Text>
      </Description>

      <Stats>
        <li>
          <Item>Followers</Item>
          <Item>{stats.followers}</Item>
        </li>
        <li>
          <Item>Views</Item>
          <Item>{stats.views}</Item>
        </li>
        <li>
          <Item>Likes</Item>
          <Item>{stats.likes}</Item>
        </li>
      </Stats>
    </Container>
  );
};
Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.objectOf(PropTypes.number),
};
