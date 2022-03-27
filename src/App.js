import React, { Component } from 'react';
import { withRouter, Route, Switch, BrowserRouter,} from 'react-router-dom';
import routes from './routes';
import './App.css';
import Review from './components/reviewPage/review';
class App extends Component {

  constructor(props){
    super(props)
    this.state = {}
  }

  render() {
    return(
      <Review/>
      /*<React.Fragment>
        <div>
          <BrowserRouter>
            <Switch>
              {
                routes.map((route, idx) => 
                  <Route exact path = {route.path} component = {route.component} key = {idx} /> 
                )
              }
            </Switch>
          </BrowserRouter>
        </div>
      </React.Fragment>*/
    );
  }
}

export default withRouter(App);
