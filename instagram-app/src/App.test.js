import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import dummyData from './dummy-data';




class App extends React.Component {
  constructor() {
    super();

  }

  
  render() {
    return (
      <div>
        <p>yo</p>
      </div>
    )
  }
}

it('renders without crashing', () => {
  const div = document.createElement('div');



  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
