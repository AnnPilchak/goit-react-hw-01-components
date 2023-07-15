import { Item, Chip } from './FriendListItem.styled';
import PropTypes from 'prop-types';

export const FriendListItem = ({ avatar, name, online }) => {
    return (
        <Item>
            <Chip online={online}></Chip>
            <img src={avatar} alt="User avatar" width="48" />
            <p>{name}</p>
           </Item>
    )
}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  online: PropTypes.bool.isRequired,
};