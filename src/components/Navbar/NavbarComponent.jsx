import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { withRouter } from 'react-router-dom';


import './Navbar.scss'

//引入数据
import navbar from './navbar.json'

class NavBar extends Component {

    state = {
        navbarList: navbar
    }

    componentDidMount() {
        this.props.history.push('/tab_0')
    }

    render() {
        const { navbarList } = this.state
        return (
            <div className='navbarBox'>
                <ul className={'navbar'}>
                    {
                        navbarList.map((itme) => {
                            return (
                                <li key={itme.id}>
                                    <NavLink to={itme.url}> {itme.name}</NavLink>
                                </li>
                            )
                        })
                    }
                </ul>
            </div >
        )
    }
}

export default withRouter(NavBar)