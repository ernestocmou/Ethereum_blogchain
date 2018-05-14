import React, { Component } from 'react';
import Comment from "../components/Comment"

const CommentsContainer = (props) => {
  let comments = props.comments.map(comment => {
    return(
      <Comment
        key = {comment.id}
        id = {comment.id}
        text = {comment.body}
        user = {comment.user_name}
        tokenId = {props.tokenId}
      />
    )
  })

  return(
    <div>
      <h3>Comments</h3>
      <div className= "small-12 medium-8 columns medium-centered">
        {comments}
      </div>
    </div>
  )
}

export default CommentsContainer;
