import React from 'react'

class Comment extends React.Component {
  constructor(props) {
    super(props)

  }

  render(){
      console.log('state',this.state);
      // let messageDiv = <div><p className="callout alert">{this.state.voteMessage}</p></div>


    return(
      <div className="panel">
        <p>Comment by: {this.props.user}</p>
        <p>{this.props.text}</p>

      </div>
    )
  }
}

export default Comment;
