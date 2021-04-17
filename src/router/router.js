import ListCard from '../components/item_card'
import Page1 from '../pages/content/page_1'
import Page2 from '../pages/content/page_2'
import Page3 from '../pages/content/page_3'



const sidebar = [
    { 'path': '/', 'component': ListCard, 'key': '001', 'text': '首页' },
    { 'path': '/Page1', 'component': Page1, 'key': '002', 'text': '热门活动' },
    { 'path': '/Page2', 'component': Page2, 'key': '003', 'text': '精彩推荐' },
    { 'path': '/Page3', 'component': Page3, 'key': '004', 'text': '账号设置' }
]
const page = [
    { 'path': '/', 'component': ListCard, 'key': '001' },
    { 'path': '/Page1', 'component': Page1, 'key': '002' },
    { 'path': '/Page2', 'component': Page2, 'key': '003' },
    { 'path': '/Page3', 'component': Page3, 'key': '004' }
]

export { sidebar, page }