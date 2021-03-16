import React, { Component } from 'react';

import './Navbar.scss'

//引入数据
import navbar from './navbar.json'
// import logo from '../../img/logo.png';

export default class NavBar extends Component {

    state = {
        navbarList: navbar
    }

    render() {
        const { navbarList } = this.state
        return (
            <div className='navbarBox'>
                {/* <div className="navbarBox_logo">
                    <img src={logo} alt="logo" />
                </div> */}
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
            // const { toggleAppContainer } = this.props
            // toggleAppContainer(itme)
            const { id } = itme
            navbarList.forEach(ele => {
                ele.id === id ? ele.status = true : ele.status = false
            })
            this.setState({ navbarList: navbarList })
        }
    }

}

