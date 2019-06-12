import React from 'react';
import './App.css';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer';

function App() {
  return (
    <div className="App">
    {dummyData.map(item => {
      return <PostContainer posts={item} />
    })}
   { console.log(dummyData)};
      <header className="App-header">
        <p>
      
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
