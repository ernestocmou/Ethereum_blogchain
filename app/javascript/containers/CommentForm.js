import React from 'react'
import BodyField from '../components/BodyField'

class CommentForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      commentBody: '',
      errors: {}
    }

    this.handleBodyInput = this.handleBodyInput.bind(this)
    this.clearFields = this.clearFields.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleBodyInput(event) {
    this.setState({ commentBody: event.target.value })
  }

  clearFields(event) {
    event.preventDefault()
    this.setState({ commentBody: '' })
  }


  validateCommentBody(selection) {
    if (selection.trim() === '') {
      let newError = { commentBody: 'Please enter comment content.' }
      this.setState({ errors: Object.assign(this.state.errors, newError) })
      return false
    } else {
      let errorState = this.state.errors
      delete errorState.commentBody
      this.setState({ errors: errorState })
      return true
    }
  }


  handleSubmit(event) {
    event.preventDefault()
    if(this.validateCommentBody(this.state.commentBody)) {
      let formPayload = {
        body: this.state.commentBody,
        token_id: this.props.tokenId
      }
      this.props.addNewComment(formPayload)
    }
  }

  render() {
    let errorDiv;
    let errorItems;

    if(Object.keys(this.state.errors).length > 0) {
    errorItems = Object.values(this.state.errors).map(error => {
    return(<p key={error}>{error}</p>)
    })
    errorDiv = <div className="callout alert">{errorItems}</div>
  }

    return(
      <div>
        <h2 className="add-a-comment">Add a comment!</h2>
        {errorDiv}
        <form className="field small-8 columns" onSubmit={this.handleSubmit}>
          <BodyField
            content={this.state.commentBody}
            label="Comment:"
            name="comment-body"
            handleInput={this.handleBodyInput}
          />
          <div className= "small-12 medium-8 columns">
            <ul className="button-group">
              <input type="submit" className="button radius" value="Clear" onClick={this.clearFields}/>
              &nbsp;
              <input type="submit" value="Add Comment" className="button radius"/>
            </ul>
          </div>
        </form>
      </div>
    )
  }
}

export default CommentForm;
