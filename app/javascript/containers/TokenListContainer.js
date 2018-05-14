import React, { Component } from 'react';

import { Link } from 'react-router';

class TokenListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { tokens: [] };
    this.getTokens = this.getTokens.bind(this);
}


  getTokens() {
    fetch('/api/v1/tokens.json')
      .then(response => {
          console.log('aaa',response);
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
          console.log('body',body);
        this.setState({ tokens: body.tokens });
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  componentDidMount() {
    this.getTokens();
  }

  render() {
    let tokenComponents = this.state.tokens.map((token) => {
      return (
        <div className="panel" key={token.id}>
          <Link to={`tokens/${token.id}`}>{ token.name }</Link>
        </div>
          );
    });

    return (
      <div id="token-list">
        <h1>Tokens</h1>
        <div className="small-12 medium-8 columns medium-centered">
          { tokenComponents }
        </div>
      </div>
    );
  }
}

export default TokenListContainer;
