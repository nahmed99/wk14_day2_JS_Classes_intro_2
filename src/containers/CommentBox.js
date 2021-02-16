import React, { Component } from 'react';
import CommentList from '../components/CommentList.js';
import CommentForm from '../components/CommentForm.js';

class CommentBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: []
    }
  }


  handleCommentSubmit(newComment) {
    newComment.id = Date.now();

    // add new comment to comments state - spread the existing 
    // elements, and then add the new one at the end.
    const updatedComments = [...this.state.comments, newComment];

    this.setState({ comments: updatedComments });
  }

  render() {
    return (
      <div>
        <CommentForm onCommentSubmit={this.handleCommentSubmit} />
        <h2>Comments</h2>
        <CommentList comments={this.state.comments} />
      </div>
    )
  }
}

export default CommentBox;
