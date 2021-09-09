import React from 'react';
import ReactDOM from 'react-dom';

function MyApp() {
  return (
    <div>
      <h1>Nathan Huber</h1>
      <p>I'm the coolest dude around!  Below I've listed some of my favorite bands.</p>
      <ul>
        <li>AC/DC</li>
        <li>Avengend Sevenfold</li>
        <li>Papa Roach</li>
      </ul>
    </div>
  )
}

// ReactDOM.render(What Do I Want To render, Where Do I Want To Render It);
// ReactDOM.render(<div><h1>Hello World!</h1><p>What's up with that!??</p></div>, document.getElementById('root'));
ReactDOM.render(
  <MyApp />,
  document.getElementById('root'));