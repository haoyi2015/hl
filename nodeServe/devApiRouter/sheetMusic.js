/**
 * 乐谱API
 */
const SHEET_MUSIC = {
    /** 已经选择的乐谱
     * get请求
     */
    selectedSheetMusic(req, res) {
        res.json({
            code: 200,
            data: {
                list: [{
                    id: 1,
                    book_id: 1,
                    name: '第一级-古老的利戈顿舞曲'
                },
                {
                    id: 2,
                    book_id: 2,
                    name: '第一级-咏叹调'
                }]
            },
            time: new Date().getTime(),
            msg: '获取已选乐谱成功'
        })
    },
    /** 上次选择的乐谱
     * get请求
     */
    lastSelectedSheet(req, res) {
        res.json({
            code: 200,
            data: {
                list: [{
                    id: 1,
                    book_id: 2,
                    name: '第一级-波西米亚歌曲'
                },
                {
                    id: 2,
                    book_id: 2,
                    name: '第一级-咏叹调'
                }]
            },
            time: new Date().getTime(),
            msg: '获取上次选择的乐谱成功'
        })
    },
    /** 自主上传的乐谱图片
     * get请求
     */
    studentUploadImage(req, res) {
        res.json({
            code: 200,
            data: {
                list: [
                    {
                        id: 6738159,
                        url: 'http://test001.pnlyy.com/class/image/b864a60d7cabaeb443cf4e4109844519?imageView2/0/w/1200/format/jpg/q/60|imageslim'
                    },
                    {
                        id: 6738160,
                        url: 'http://test001.pnlyy.com/class/image/0a9fb2c54f69353d2bf040e85d00b0ae?imageView2/0/w/1200/format/jpg/q/60|imageslim'
                    },
                    {
                        id: 6738161,
                        url: 'http://test001.pnlyy.com/class/image/0d529b88a7b7b48d9a885c561cd22d8c?imageView2/0/w/1200/format/jpg/q/60|imageslim'
                    },
                    {
                        id: 7688159,
                        url: 'http://test001.pnlyy.com/class/image/b864a60d7cabaeb443cf4e4109844519?imageView2/0/w/1200/format/jpg/q/60|imageslim'
                    },
                    {
                        id: 6734560,
                        url: 'http://test001.pnlyy.com/class/image/0a9fb2c54f69353d2bf040e85d00b0ae?imageView2/0/w/1200/format/jpg/q/60|imageslim'
                    },
                    {
                        id: 67987661,
                        url: 'http://test001.pnlyy.com/class/image/0d529b88a7b7b48d9a885c561cd22d8c?imageView2/0/w/1200/format/jpg/q/60|imageslim'
                    }
                ]
            },
            time: new Date().getTime(),
            msg: '获取乐谱图片成功'
        })
    },
    /** 上次上传的乐谱图片
     * get请求
     */
    lastUploadImage(req, res) {
        res.json({
            code: 200,
            data: {
                list: [
                    {
                        id: 6738159,
                        url: 'http://test001.pnlyy.com/class/image/b864a60d7cabaeb443cf4e4109844519?imageView2/0/w/1200/format/jpg/q/60|imageslim'
                    },
                    {
                        id: 6738160,
                        url: 'http://test001.pnlyy.com/class/image/0a9fb2c54f69353d2bf040e85d00b0ae?imageView2/0/w/1200/format/jpg/q/60|imageslim'
                    },
                    {
                        id: 6738161,
                        url: 'http://test001.pnlyy.com/class/image/0d529b88a7b7b48d9a885c561cd22d8c?imageView2/0/w/1200/format/jpg/q/60|imageslim'
                    },
                    {
                        id: 7688159,
                        url: 'http://test001.pnlyy.com/class/image/b864a60d7cabaeb443cf4e4109844519?imageView2/0/w/1200/format/jpg/q/60|imageslim'
                    }
                ]
            },
            time: new Date().getTime(),
            msg: '获取乐谱图片成功'
        })
    },
    /** 搜索乐谱库
     * get请求
     */
    sheetMusicLibrary(req, res) {
        if (typeof this.keywords !== 'undefined' && this.keywords.replace(/(^\s*)|(\s*$)/g, '') !== '') {
            this.getSheetMusicList()
        }
        let request = {}
        let code = 401
        let msg = '参数错误'
        let data = {}
        if (req.method === 'GET') {
            request = req.query
            console.log('GET sheetMusicLibrary', request)
            if (typeof request.book_id !== 'undefined' && request.book_id.replace(/(^\s*)|(\s*$)/g, '') !== '') {
                code = 200
                msg = '搜索乐谱库成功'
                data = {
                    list: [
                        {id: 61556, name: '01 A Nightingale Sang in Berkeley Square'},
                        {id: 61557, name: '02 An Sylvia'},
                        {id: 61558, name: '03 Dove sei?'},
                        {id: 61559, name: `04 Fear no more the heat o' the sun`},
                        {id: 61560, name: '05 From a Railway Carriage'},
                        {id: 61561, name: '06 Hirschlein ging im Wald spazieren'},
                        {id: 61562, name: `07 I attempt from love's sickness to fly`},
                        {id: 61563, name: '08 If doughty deeds'},
                        {id: 61564, name: '09 It was a lover and his lass'}
                    ]
                }
            } else if ( typeof request.keywords !== 'undefined' && request.keywords.replace(/(^\s*)|(\s*$)/g, '') !== '') {
                code = 200
                msg = '搜索乐谱库成功'
                data = {
                    list: [{
                        id: 345,
                        name: '(伦敦原版）Dont_-24_Etudes_and_Caprices_Op.35.pdf',
                        img: 'http://book.static.pnlyy.com/book_cover/1779_1495611338.jpg!200'
                    }, {
                        id: 789,
                        name: '轻松学钢琴2',
                        img: 'http://book.static.pnlyy.com/book_cover/1328_1437117393.jpg!200'
                    }, {
                        id: 987,
                        name: '英皇声乐考级 Book1',
                        img: 'http://book.static.pnlyy.com/book_cover/1300_1436853464.jpg!200'
                    }, {
                        id: 1305,
                        name: '英皇声乐考级 Book5',
                        img: 'http://book.static.pnlyy.com/book_cover/1305_1436854085.jpg!200'
                    }]
                }
            }
        }
        res.json({
            code: code,
            data: data,
            request: request,
            time: new Date().getTime(),
            msg: msg
        })
    },
    /** 上传乐谱图片
     * post请求
     * @param {*} req 
     * @param {*} res 
     */
    uploadImage(req, res) {
        // console.log(req, req.files)
        res.json({
            code: 200,
            data: {
                host: "http://test001.pnlyy.com/",
                kefu_name: "客服名字",
                key :"chat/image/a9f5256a2cac36efeebede27721ebf64"
            },
            request: req.body,
            time: new Date().getTime(),
            msg: '图片上传成功'
        })
    },
    /** 保存乐谱
     * post请求
     */
    saveSheetMusic(req, res) {
        // 请求参数格式
        postReq = {
            class_id: 3456,
            remarks: '备注信息',
            list: ['2-4', '3456-4567']
        }
        let request = {}
        let code = 401
        let msg = '参数错误'
        let data = {}
        if (req.method === 'POST') {
            request = req.body
            console.log('POST saveSheetMusic', request)
            if (typeof request.class_id !== 'undefined' && request.class_id.replace(/(^\s*)|(\s*$)/g, '') !== '') {
                code = 200
                msg = '乐谱保存成功'
                data = {}
            }
        }
        res.json({
            code: code,
            data: data,
            request: request,
            time: new Date().getTime(),
            msg: msg
        })
    },
    /** 删除已上传的乐谱图片
     * delete请求
     */
    deleteUploadImage(req, res) {
        // 请求参数格式
        postReq = {
            image_id: 3456
        }
        let request = {}
        let code = 401
        let msg = '参数错误'
        let data = {}
        if (req.method === 'POST') {
            request = req.body
            console.log('POST deleteUploadImage', request)
            if (typeof request.image_id !== 'undefined' && request.image_id.replace(/(^\s*)|(\s*$)/g, '') !== '') {
                code = 200
                msg = '上传的乐谱图片已删除成功'
                data = {
                    image_id: Number(request.image_id)
                }
            }
        }
        res.json({
            code: code,
            data: data,
            request: request,
            time: new Date().getTime(),
            msg: msg || '服务器错误'
        })
    }
}

module.exports = SHEET_MUSIC
