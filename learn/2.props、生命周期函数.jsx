import React from 'react';
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'; //检查数据类型依赖包
import './Navbar.scss'

class NavBar extends React.Component {

    //定义props 传入参数的数据类型
    static propTypes = {
        tabData: PropTypes.array
    }

    //定义props 传入参数的默认值
    static defaultProps = {
        tabData: [1, 2, 3, 4]
    }

    //#region 生命周期
    /* constructor(props) {
        super(props)
        console.log('constructor');
    } */

    //是否应该更新组件
    shouldComponentUpdate() {
        // console.log('shouldComponentUpdate');
        return true;
    }

    //组件即将挂载完成
    UNSAFE_componentWillMount() {
        // console.log('UNSAFE_componentWillMount');
    }

    //组件挂载完毕时调用一次
    componentDidMount() {
        // console.log('componentDidMount');
        const body = document.getElementsByTagName('body')[0]
        body.style.background = '#f2f2f2';
    }

    //组件更新完毕时调用
    UNSAFE_componentWillUpdate(preProps, preState) {
        // console.log('componentDidUpdate', preProps, preState);
    }

    //组件将要被卸载时调用
    componentWillUnmount() {
        // console.log('componentWillUnmount，啊 我要被卸载了~~');
    }

    //初始化时、state更新时调用
    render() {

        const { navbar, setNavbarStatus } = this.props

        return (
            <div className='navbarBox'>
                <ul className={'navbar'}>
                    {
                        /* jsx 内部只能书写表达式(有返回值的) 不能书写公式(既逻辑判断之类)   */
                        navbar.map((itme) => {
                            return <li key={itme.id} onClick={setNavbarStatus(itme)} className={itme.status ? 'selected' : ''}>{itme.name}</li>
                        })
                    }
                </ul>
                <div onClick={this.unmountThis}>卸载组件</div>
            </div>
        )
    }

    //#endregion

    //点击事件  所有传给React的事件回调函数 都会接受一个event对象 
    /* clickTab = (event) => {
        const crrenteNode = event.target
        const navbarLi = document.getElementsByClassName('navbar')[0].childNodes
        if (crrenteNode.className === 'selected') {
            return
        } else {
            navbarLi.forEach(li => {
                li.className = ''
            })
            crrenteNode.className = 'selected'
        }
    } */

    //卸载组件
    unmountThis = () => {
        //卸载组件API ReactDOM.unmountComponentAtNode()
        ReactDOM.unmountComponentAtNode(document.getElementById('root'))
    }
}

export { NavBar };
