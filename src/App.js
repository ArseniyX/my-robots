import React, {Component} from 'react';
import './App.css';
import CardList from "./CardList";
import {robots} from "./robots";
import SearchBox from "./SearchBox";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            robots: robots,
            searchField: '',
        }
    }

    onSearchChange(event) {
        console.log('Class: App, Function: onSearchChange, Line: 18  ', event);
    }

    render() {
        return (
            <div className={'tc'}>
                <h1>RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <CardList robots={this.state.robots}/>
            </div>
        );
    }
}

export default App;
