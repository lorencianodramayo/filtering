import React, { Component } from 'react'
import {connect} from 'react-redux'
import Scroll from '../components/Scroll'
import ErrorBoundry from '../components/ErrorBoundry'
import CardList from '../components/CardList'
import SearchList from '../components/SearchList'
import { setSearch } from '../actions'

const matchStateToProps = state => {
    return {
        searchField: state.searchField
    }
}

const matchDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (event) => dispatch(setSearch(event.target.value))
    }
}

class App extends Component { 
    constructor(){
        super()
        this.state ={
            robots: []
        }
    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({robots:users}))
    }

    render(){
        const { robots } = this.state;
        const { searchField, onSearchChange } = this.props;
        const filterRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        })

        return !robots.length ?
            <h1 className="tc">Loading....</h1>:
            (
                <div className="tc">
                    <h1>Robots</h1>
                    <SearchList searchChange={onSearchChange}></SearchList>
                    <Scroll>
                        <ErrorBoundry>
                            <CardList robots={filterRobots}/>
                        </ErrorBoundry>
                    </Scroll>
                </div>
            )
    }
}
export default connect(matchStateToProps, matchDispatchToProps)(App) 