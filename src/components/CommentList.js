import React from 'react';
import Comment from './Comment.js'

const CommentList = (props) => {

  const commentNodes = props.comments.map((comment, index) => {
    return <Comment comment={comment} key={index} />
  });


  return (
    <>
      {commentNodes}
    </>
  )
}


export default CommentList;
