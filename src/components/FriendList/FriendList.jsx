import PropTypes from 'prop-types';
import { FriendListItem } from './FriendListItem';

import { List } from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <>
      <List>
        {friends.map(data => (
          <FriendListItem
            key={data.id}
            avatar={data.avatar}
            name={data.name}
            isOnline={data.isOnline}
          />
        ))}
      </List>
    </>
  );
};

FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
};
