import React from 'react';

const Comment = ({comment}) => {
  return (
    <p>Author: {comment.author} - {comment.text}</p>
  )
}

export default Comment;
