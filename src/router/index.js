import Page0 from '../pages/content/page_0'
import Page1 from '../pages/content/page_1'
import Page2 from '../pages/content/page_2'
import Page3 from '../pages/content/page_3'

import Page0Content from '../pages/content/page_0/listPage'
import Page0ContentItem from '../pages/content/page_0/itemInfoPage'


/* 导航路由 */
const sidebar = [
    { 'path': '/page0', 'defaultPath': '/', 'exact': false, 'text': '首页', 'key': 'sidebar_000' },
    { 'path': '/page1', 'defaultPath': '', 'exact': false, 'text': '热门活动', 'key': 'sidebar_001' },
    { 'path': '/page2', 'defaultPath': '', 'exact': false, 'text': '精彩推荐', 'key': 'sidebar_002' },
    { 'path': '/page3', 'defaultPath': '', 'exact': false, 'text': '账号设置', 'key': 'sidebar_003' }
]

/* Conten 路由 */
const page = [
    { 'path': '/page0', 'exact': false, 'component': Page0, 'key': 'page_000' },
    { 'path': '/page1', 'exact': false, 'component': Page1, 'key': 'page_001' },
    { 'path': '/page2', 'exact': false, 'component': Page2, 'key': 'page_002' },
    { 'path': '/page3', 'exact': false, 'component': Page3, 'key': 'page_003' }
]

/* 首页内容路由 */
const page0 = [
    { 'path': '/page0', 'exact': true, 'component': Page0Content, 'key': 'page0_000' },
    { 'path': '/page0/Page0ContentItem', 'exact': true, 'component': Page0ContentItem, 'key': 'page0_001' }
]

/* 指定页面路由 */
const setUrl = {
    defaultUrl: '/',
    page0: '/page0',
    listPage: '/page0/page0ContentItem'
}


export { sidebar, page, page0, setUrl }