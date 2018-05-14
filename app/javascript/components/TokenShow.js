import React from 'react';
import { Link } from 'react-router';
import CommentsContainer from '../containers/CommentsContainer'
import CommentForm from '../containers/CommentForm'

class TokenShow extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      tokenInfo: {},
      comments: [],
      errorMessage: ''
    }
    this.addNewComment = this.addNewComment.bind(this);
  }

  addNewComment(formPayload) {
    fetch('/api/v1/comments.json', {
      credentials: 'same-origin',
      method: 'post',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify(formPayload)
    })
      .then(response => {
          console.log('response',response);
        if (response.ok) {
          return response;
        } else {
          let errorMessage = `${response.status} (${response.statusText})`, error = new Error(errorMessage);
          throw(error);
        }
      })
      .then(response => response.json())
      .then(responseComment => {
        if (responseComment['id'] == 'error message') {
          this.setState({ errorMessage: responseComment['body'] })
        } else {
          let newComment = this.state.comments.concat(responseComment)
          this.setState({
            comments: newComment,
            errorMessage: ''
          })
      }
    })
  }

  componentDidMount(){
    let tokenId = this.props.params.id;
    fetch(`/api/v1/tokens/${tokenId}`)
    .then(response => {

      if (response.ok) {
        return response;
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
            error = new Error(errorMessage);
        throw(error);
      }
    })
    .then(response => response.json())
    .then(body => {
      this.setState({
        tokenInfo: body,
        comments: body.comments
      });

    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  render() {
    let errorDiv = <div className="react-message">{this.state.errorMessage}</div>
    console.log('tokenInfo',this.state.tokenInfo);
    return(
      <div>
        <div><h1>Details of Token:</h1></div>
        <div className="token-details-box">
          <div className="panel medium-10 columns medium-centered">
            <h1>Name: {this.state.tokenInfo.name} ({this.state.tokenInfo.symbol})</h1>
            <h2>Price: {this.state.tokenInfo.price}</h2>
            <p>Address: {this.state.tokenInfo.address}</p>

          </div>
        </div>
        <div className="token-details-box">
          <div className="panel medium-10 columns medium-centered">
            <CommentsContainer
              comments = {this.state.comments}
              tokenId = {this.state.tokenInfo.id}
            />
          </div>
        </div>


        <div className="small-12 medium-10 columns medium-centered">
            {errorDiv}
            <CommentForm
              tokenId = {this.state.tokenInfo.id}
              addNewComment = {this.addNewComment}
            />
          </div>
      </div>
    )
  }
}

export default TokenShow;
