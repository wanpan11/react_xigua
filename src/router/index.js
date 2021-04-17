import Page0 from '../pages/content/page_0'
import Page1 from '../pages/content/page_1'
import Page2 from '../pages/content/page_2'
import Page3 from '../pages/content/page_3'



const sidebar = [
    { 'path': '/', 'key': '000', 'text': '首页' },
    { 'path': '/Page1', 'key': '001', 'text': '热门活动' },
    { 'path': '/Page2', 'key': '002', 'text': '精彩推荐' },
    { 'path': '/Page3', 'key': '003', 'text': '账号设置' }
]
const page = [
    { 'path': '/', 'component': Page0, 'key': '000' },
    { 'path': '/Page1', 'component': Page1, 'key': '001' },
    { 'path': '/Page2', 'component': Page2, 'key': '002' },
    { 'path': '/Page3', 'component': Page3, 'key': '003' }
]

export { sidebar, page }