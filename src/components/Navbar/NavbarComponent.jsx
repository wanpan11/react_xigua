import React, { Component } from 'react';

import './Navbar.scss'

//引入数据
import navbar from './navbar.json'

class NavBar extends Component {

    state = {
        navbarList: navbar
    }

    render() {
        const { navbarList } = this.state
        return (
            <div className='navbarBox'>
                <ul className={'navbar'}>
                    {
                        navbarList.map((itme) => {
                            return <li key={itme.id} className={itme.status ? 'selected' : ''} onClick={this.setNavbarStatus(itme)}>{itme.name}</li>
                        })
                    }
                </ul>
            </div>
        )
    }

    setNavbarStatus = (itme) => {
        return () => {
            const { navbarList } = this.state
            const { id } = itme
            navbarList.forEach(ele => {
                ele.id === id ? ele.status = true : ele.status = false
            })
            this.setState({ navbarList: navbarList })
        }
    }

}

export { NavBar };
