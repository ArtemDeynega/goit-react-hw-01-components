import PropTypes from 'prop-types';
import { FriendListItem } from './FriendListItem';

export const FriendList = ({ friends }) => {
  return (
    <>
      <ul className="friendList">
        {friends.map(data => (
          <FriendListItem
            key={data.id}
            avatar={data.avatar}
            name={data.name}
            isOnline={data.isOnline}
          />
        ))}
      </ul>
    </>
  );
};

FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
};
