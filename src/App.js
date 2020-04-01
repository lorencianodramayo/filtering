import React, { Component } from 'react'
import CardList from './CardList'
import SearchList from './SearchList'
import {robots} from './robots'

class App extends Component { 
    constructor(){
        super()
        this.state ={
            robots: robots,
            SearchList: ''
        }
    }

    onSearchChange = (event) => {
        this.setState({SearchList:event.target.value})
    }

    render(){
        const filterRobots = this.state.robots.filter(robots => {
            return robots.name.toLowerCase().includes(this.state.SearchList.toLowerCase());
        })

        return(
            <div className="tc">
                <h1>Robots</h1>
                <SearchList searchChange={this.onSearchChange}></SearchList>
                <CardList robots={filterRobots}/>
            </div>
        )
    }
}
export default App 