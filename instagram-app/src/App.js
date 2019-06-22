import React from 'react';
import './App.css';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer';
import SearchBar from './components/SearchBar/SearchBar';
import Username from './components/SearchBar/Username';



class App extends React.Component {
  constructor(){
    super();
    this.state = {
      data: []
      
    }
    
  }

componentDidMount(){
  this.setState({data : dummyData})
  return <PostContainer data={this.state.data} />
}

  render(){
  return (
    <div className="App">
      {dummyData.map(item => {
      return <Username posts={item} />
    })}
    {dummyData.map(item => {
      return <PostContainer posts={item} />
    })}



    </div>
  );
}
}
export default App;
