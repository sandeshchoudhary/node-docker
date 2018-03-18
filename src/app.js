import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import axios from 'axios';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <h1>Sample NodeJs Docker App</h1>
    );
  }
}

ReactDOM.render(
  <Home />,
  document.getElementById('app')
);

if (module.hot) {
  module.hot.accept();
}
