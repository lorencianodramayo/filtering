import React, { Component } from 'react'
import {connect} from 'react-redux'
import Scroll from '../components/Scroll'
import ErrorBoundry from '../components/ErrorBoundry'
import CardList from '../components/CardList'
import SearchList from '../components/SearchList'
import { setSearch, requestRobots } from '../actions'

const matchStateToProps = state => {
    return {
        searchField: state.searchRobots.searchField,
        robots: state.requestRobots.robots,
        isPending: state.requestRobots.isPending,
        error: state.requestRobots.error
    }
}

const matchDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (event) => dispatch(setSearch(event.target.value)),
        onRequestRobots: () => dispatch(requestRobots())
    }
}

class App extends Component { 

    componentDidMount(){
        this.props.onRequestRobots()
    }

    render(){
        const { 
            searchField, 
            onSearchChange,
            robots,
            isPending
        } = this.props;
        const filterRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        })

        return isPending ?
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