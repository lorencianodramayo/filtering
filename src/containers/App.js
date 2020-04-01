import React, { Component } from 'react'
import Scroll from '../components/Scroll'
import CardList from '../components/CardList'
import SearchList from '../components/SearchList'

class App extends Component { 
    constructor(){
        super()
        this.state ={
            robots: [],
            SearchRobots: ''
        }
    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({robots:users}))
    }

    onSearchChange = (event) => {
        this.setState({SearchRobots:event.target.value})
    }

    render(){
        const { robots, SearchRobots } = this.state;
        const filterRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(SearchRobots.toLowerCase());
        })

        return !robots.length ?
            <h1 className="tc">Loading....</h1>:
            (
                <div className="tc">
                    <h1>Robots</h1>
                    <SearchList searchChange={this.onSearchChange}></SearchList>
                    <Scroll>
                        <CardList robots={filterRobots}/>
                    </Scroll>
                </div>
            )
    }
}
export default App 