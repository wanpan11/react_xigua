import Page0 from '../pages/content/page_0'
import Page1 from '../pages/content/page_1'
import Page2 from '../pages/content/page_2'
import Page3 from '../pages/content/page_3'

import Page0Content from '../pages/content/page_0/listPage'
import Page0ContentItem from '../pages/content/page_0/itemInfoPage'



const sidebar = [
    { 'path': '/Page0', 'defaultPath': '/', 'exact': false, 'text': '首页', 'key': 'sidebar_000' },
    { 'path': '/Page1', 'defaultPath': '', 'exact': false, 'text': '热门活动', 'key': 'sidebar_001' },
    { 'path': '/Page2', 'defaultPath': '', 'exact': false, 'text': '精彩推荐', 'key': 'sidebar_002' },
    { 'path': '/Page3', 'defaultPath': '', 'exact': false, 'text': '账号设置', 'key': 'sidebar_003' }
]

const page = [
    { 'path': '/Page0', 'exact': false, 'component': Page0, 'key': 'page_000' },
    { 'path': '/Page1', 'exact': false, 'component': Page1, 'key': 'page_001' },
    { 'path': '/Page2', 'exact': false, 'component': Page2, 'key': 'page_002' },
    { 'path': '/Page3', 'exact': false, 'component': Page3, 'key': 'page_003' }
]

const page0 = [
    { 'path': '/Page0', 'exact': true, 'component': Page0Content, 'key': 'page0_000' },
    { 'path': '/Page0/Page0ContentItem', 'exact': true, 'component': Page0ContentItem, 'key': 'page0_001' }
]

const setUrl = {
    Page0: '/Page0',
    ListPage: '/Page0/Page0ContentItem'
}


export { sidebar, page, page0, setUrl }