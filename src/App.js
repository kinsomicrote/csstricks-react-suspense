import React, {Timeout} from 'react';
import Profile from './Profile'
import './App.css'
import Loader from './Loader';

const Placeholder = ({ delayMs, fallback, children }) => {
  return (
    <Timeout ms={delayMs}>
      {didTimeout => {
        return didTimeout ? fallback : children;
      }}
    </Timeout>
  );
}

export default class App extends React.Component {

  render() {

    return (
      <React.Fragment>        
        <div className="App container-fluid">
          <div className="jumbotron">
            <h1>CSS-Tricks React Suspense</h1>
          </div>

          <div className="container">
            <div>
              <Placeholder
                delayMs={1000}
                fallback={
                  <div className="row">
                    <div className="col-md">
                      <div className="div__loading">
                        <Loader />
                      </div>
                    </div>
                  </div>
                }
              >
                <div className="row">
                    <Profile />
                </div>
              </Placeholder>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

