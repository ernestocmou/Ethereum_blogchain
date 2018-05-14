import React from 'react';
import { Router, browserHistory, Route, IndexRoute } from 'react-router';

import TokenListContainer from './TokenListContainer';
import TokenShow from '../components/TokenShow';

const App = props => {
  return(
    <Router history={browserHistory}>
      <Route path='/'>
        <IndexRoute component={TokenListContainer}/>
        <Route path="/tokens" component={TokenListContainer}/>
        <Route path="/tokens/:id" component={TokenShow} />
      </Route>
    </Router>
  )
}
export default App;
