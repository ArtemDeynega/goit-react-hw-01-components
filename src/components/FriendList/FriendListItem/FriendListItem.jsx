import PropTypes from 'prop-types';

import { Item, IsOnline, IsOfline } from './FriendListItem.styled';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <>
      <Item>
        {isOnline ? (
          <IsOnline>{isOnline}</IsOnline>
        ) : (
          <IsOfline>{isOnline}</IsOfline>
        )}

        <img src={avatar} alt={name} width="48" />
        <p>{name}</p>
      </Item>
    </>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
