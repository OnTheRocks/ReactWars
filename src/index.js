import React from 'react';
import ReactDOM from 'react-dom';

import MyInfo from "./components/MyInfo"


// ReactDOM.render(What Do I Want To render, Where Do I Want To Render It);
// ReactDOM.render(<div><h1>Hello World!</h1><p>What's up with that!??</p></div>, document.getElementById('root'));
ReactDOM.render(
  <MyInfo />,
  document.getElementById('root'));