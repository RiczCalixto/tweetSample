import React from 'react';
import PropTypes from 'prop-types';

const PostHeader = ({ avatar, name, time }) => (
  <section className="post-header-container">
    <img className="avatar" src={avatar} alt="Avatar" />
    <section className="post-data-container">
      <strong>{name}</strong>
      <span>{time}</span>
    </section>
  </section>
);

PostHeader.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
};

export default PostHeader;
