const Mock = require('mockjs')

const url = {
    listPageInfo: 'http://20181024Mock.com/listPageInfo',
    loginAuth: 'http://20181024Mock.com/loginAuth'
}

module.exports = [
    Mock.mock(url.listPageInfo, {
        'code': 114,
        'dataSource|20': [{
            'key|+1': 1,
            'title|1': [
                '腾讯视频 1.9.1',
                'EuDic 欧路词典 3.5.4',
                '网易云音乐 1.5.10',
                'CleanMyMac X 4.8.1',
            ],
            'content|1': [
                '腾讯旗下的无框视频播放器 它是中国领先的在线视频媒体平台，以便捷的登录方式、24小时多平台无缝应用体验以及快捷分享的产品特性，深受用户们喜爱。',
                '跨多平台的词典应用 它支持现在大部分的主流平台，如 Mac OS、Windows、iOS 以及 Androkey等。',
                '音乐播放器 网易云音乐是一款专注于发现与分享的音乐产品，依托专业音乐人、DJ、好友推荐及社交功能,为用户打造全新的音乐生活。',
                '经典好用的Mac清理工具 拥有处理系统内的垃圾文件，以及查找和移除大型文件和文件夹等功能。',
                '城市建造模拟经营游戏 一款大亨策略游戏，让你扮演 20 世纪初的实业家。在自动生成的不断发展、有生命力的世界中，建设和管理你日益增长的帝国，让它不断发展并适应你的游戏风格。。'
            ],
            'url|1': [
                './img/01.jpeg',
                './img/02.jpeg',
                './img/03.jpeg',
                './img/04.jpeg'
            ]
        }]
    }),
    Mock.mock(url.loginAuth, (req => {
        const { userAcount, userPassword } = JSON.parse(req.body)
        if (userAcount === '123' && userPassword === '123') {
            return { code: 114, token: '6087a4a1b5bf96c4be49d4fa' }
        } else {
            return { code: 110, msg: '┭┮﹏┭┮ 密码或账号错误!' }
        }
    })),
]


