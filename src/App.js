import React, {Component} from 'react';
//import logo from './logo.svg';
import './App.css';
import Axios from 'axios';
import {CardList} from './components/card-list/card-list.components';
import {Searchbox} from './components/search-box/search-box.components';

class App extends Component{
  constructor(){
    super();
    this.state = {
      string:[],
      searchField:''
    }
  }

  async componentDidMount(){
    const infoarray = await Axios('https://jsonplaceholder.typicode.com/users');
    console.log(infoarray);
    this.setState({string:infoarray.data});   
  }

  handleChange = e => {
    this.setState({searchField:e.target.value});
  }

  render(){
    const {string,searchField} = this.state;
    const filteredstr = string.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      
    <div className="App">
        <Searchbox placeholder = "Search List" hasChanged = {this.handleChange}></Searchbox>
        <CardList list={filteredstr} />
          
    
    </div>

    );
    
  }
}

export default App;
