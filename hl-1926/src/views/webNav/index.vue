<template>
    <section class="nav-warp-cont cont-pad-top">
        <div class="big-warp" v-for="(item,index) in data" :key="index">
            <div class="item-title">
                <span>{{ item.name }}</span>
            </div>
            <ul>
                <li class="item-list" v-for="(items,ms) in item.list" :key="ms">
                    <div class="logo-small">
                        <a target="_blank" :href="items.url"><img data-original="" width="100%" class="loaded" :src="items.logo">
                        {{ items.name }}
                        </a>
                    </div>
                    <div class="item-desc">
                        {{ items.desc }}
                    </div>
                </li>
            </ul>
        </div>
        <div class="ws-bg"></div>
    </section>
</template>
<style lang="scss" scoped>
    // .ws-bg{
    //     margin: 0 auto;
    //     width: 100%;
    //     height: 100%;
    //     background-color: #000;
    //     position: fixed!important;
    //     top:0;
    //     left: 0;
    //     background-image: url(https://yssimage.oss-cn-hangzhou.aliyuncs.com/bg9.jpg);
    //     background-size: 100% 100%;
    //     z-index: -1;
    // }
    .nav-warp-cont{
        width: 1254px;
        margin: 0 auto;
        .big-warp{
            overflow: hidden;
            background: #fff;
            margin: 20px 0;
            padding: 10px 22px 6px 22px;
            padding-bottom: 20px;
            border-radius: 3px;
            box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
        }
    }
    .item-title{
        margin-right: 15px;
        height: 42px;
        line-height: 42px;
        margin-top: 15px;
        span{
            color: #fff;
            font-size: 15px;
            letter-spacing: 1px;
            border-radius: 2px 20px 2px 20px;
            -webkit-border-radius: 1px 20px 1px 20px;
            font-family: Lato,Microsoft Jhenghei,Hiragino Sans GB,Microsoft YaHei;
            -webkit-transition: all .8s ease;
            transition: all .8s ease;
            background: #3273dc;
            padding: 12px 16px;
        }
    }
    .item-list {
        border-radius: 6px;
        background: #fff;
        padding: 10px;
        width: 180px;
        min-width: 200px;
        margin: 22px 10px 0 10px;
        float: left;
        overflow: hidden;
        border: 1px solid #e4ecf3;
        box-shadow: 1px 2px 3px #f2f6f8;
    }
    .item-list:hover {
        transform: translateY(-6px);
        -webkit-transform: translateY(-6px);
        -moz-transform: translateY(-6px);
        box-shadow: 0 26px 40px -24px rgba(0,36,100,.3);
        -webkit-box-shadow: 0 26px 40px -24px rgba(0,36,100,.3);
        -moz-box-shadow: 0 26px 40px -24px rgba(0,36,100,.3);
        transition: all .3s ease;
        cursor: pointer;
    }
    .logo-small{
        height: 40px;
        position: relative;
        font-size: 14px;
        font-weight: 700;
        color: #3273dc;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        padding: 0 .1rem;
        img{
            width: 40px;
            height: 40px;
            border-radius: 50%;
            vertical-align: middle;
        }
    }
    .item-desc{
        color: gray;
        font-size: 12px;
        padding-top: 10px;
        height: 35px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
    }
</style>
<script>
export default {
    data() {
        return{
            data: [{
                id: "001",
                weight: 2,
                name: "开发社区",
                list: [{
                    id: "00101",
                    name: "掘金",
                    logo: "http://www.xinaliu.com/static/images/gold-favicon.png",
                    url: "https://juejin.im/",
                    desc: "只有高手分享的中文技术社区"
                }, {
                    id: "00102",
                    name: "Stack Overflow",
                    logo: "http://www.xinaliu.com/static/images/stackoverflow-favicon.png",
                    url: "http://stackoverflow.com/",
                    desc: "编程相关的IT技术问答网站"
                }, {
                    id: "00103",
                    name: "GitHub",
                    logo: "http://www.xinaliu.com/static/images/github-favicon.png",
                    url: "https://github.com/",
                    desc: "面向开源及私有软件项目的git托管平台"
                }, {
                    id: "00104",
                    name: "SegmentFault",
                    logo: "http://www.xinaliu.com/static/images/segmentfault-favicon.png",
                    url: "https://segmentfault.com/",
                    desc: "一个专注于解决编程问题，提高开发技能的社区。"
                }, {
                    id: "00105",
                    name: "V2EX",
                    logo: "http://www.xinaliu.com/static/images/v2ex-favicon.png",
                    url: "https://www.v2ex.com/",
                    desc: "一个关于分享和探索的地方。"
                }, {
                    id: "00106",
                    name: "Smashingmagazine",
                    logo: "http://www.xinaliu.com/static/images/smashingmagazine-favicon.png",
                    url: "https://www.smashingmagazine.com/",
                    desc: "一个web技术类的博客杂志站点"
                }, {
                    id: "00107",
                    name: "JS Tips",
                    logo: "http://www.xinaliu.com/static/images/jstips-favicon.png",
                    url: "http://www.jstips.co/",
                    desc: "每天推出一个JS技巧的网站"
                }]
            },{
                id: "002",
                weight: 2,
                name: "团队组织",
                list: [{
                    id: "1",
                    name: "淘宝前端团队（FED）",
                    logo: "http://www.xinaliu.com/static/images/fed-favicon.png",
                    url: "https://www.docschina.org/",
                    desc: "用技术为体验提供无限可能"
                }, {
                    id: "2",
                    name: "腾讯 AlloyTeam 团队",
                    logo: "http://www.xinaliu.com/static/images/alloyteam-favicon.jpg",
                    url: "http://www.alloyteam.com/",
                    desc: "腾讯Web前端团队，代表作品WebQQ，致力于前端技术的研究"
                }, {
                    id: "3",
                    name: "ISUX",
                    logo: "http://www.xinaliu.com/static/images/isux-favicon.jpg",
                    url: "https://isux.tencent.com/",
                    desc: "腾讯社交用户体验设计，简称ISUX，腾讯设计团队网站"
                }, {
                    id: "4",
                    name: "FEX",
                    logo: "http://www.xinaliu.com/static/images/fex-favicon.png",
                    url: "http://fex.baidu.com/",
                    desc: "百度Web前端研发部出品"
                }, {
                    id: "5",
                    name: "凹凸实验室",
                    logo: "http://www.xinaliu.com/static/images/aotu-favicon.png",
                    url: "https://aotu.io/",
                    desc: "京东用户体验设计部出品"
                }, {
                    id: "6",
                    name: "阿里巴巴国际UED团队",
                    logo: "http://www.xinaliu.com/static/images/aliued-favicon.ico",
                    url: "http://www.aliued.com/",
                    desc: "在更新的屏幕里创造出更好的产品和更优的体验"
                }, {
                    id: "6",
                    name: "奇舞团",
                    logo: "http://www.xinaliu.com/static/images/75team-favicon.png",
                    url: "https://75team.com/",
                    desc: "奇虎360旗下前端开发团队出品"
                }]
            },{
                id: "003",
                weight: 2,
                name: "框架类库",
                list: [{
                    id: "00301",
                    name: "React",
                    logo: "http://www.xinaliu.com/static/images/react-favicon.png",
                    url: "https://facebook.github.io/react/",
                    desc: "用于构建用户界面的Javscript库"
                }, {
                    id: "00302",
                    name: "Vue",
                    logo: "http://www.xinaliu.com/static/images/vue-favicon.png",
                    url: "https://cn.vuejs.org/",
                    desc: "构建数据驱动的web界面的渐进式框架"
                }, {
                    id: "00303",
                    name: "jQuery",
                    logo: "http://www.xinaliu.com/static/images/jquery.png",
                    url: "http://www.jquery123.com/",
                    desc: "优秀的JavaScript代码库"
                }, {
                    id: "00304",
                    name: "React Native",
                    logo: "http://www.xinaliu.com/static/images/react-native.png",
                    url: "https://reactnative.cn/",
                    desc: "使用React构建原生app的框架"
                }, {
                    id: "00305",
                    name: "Ant Design",
                    logo: "https://antv.vision/icons/icon-512x512.png",
                    url: "https://ant.design/index-cn",
                    desc: "服务于企业级产品的设计体系，基于确定和自然的设计价值观上的模块化解决方案，让设计者和开发者专注于更好的用户体验"
                }, {
                    id: "00306",
                    name: "Ant Design",
                    logo: "",
                    url: "https://element.eleme.cn/#/zh-CN",
                    desc: "Element，一套为开发者、设计师和产品经理准备的基于 Vue 2.0 的桌面端组件库"
                }]
            },{
                id: "004",
                weight: 2,
                name: " 图形动效",
                list: [{
                    id: "00401",
                    name: "D3",
                    logo: "http://www.xinaliu.com/static/images/d3-favicon.png",
                    url: "https://d3js.org/",
                    desc: "用动态图形显示数据的JavaScript库"
                }, {
                    id: "00402",
                    name: "Threejs",
                    logo: "http://www.xinaliu.com/static/images/threejs-favicon.png",
                    url: "https://threejs.org/",
                    desc: "运行在浏览器中的3D 引擎"
                }, {
                    id: "00403",
                    name: "Echarts",
                    logo: "http://www.xinaliu.com/static/images/echarts-favicon.png",
                    url: "http://echarts.baidu.com/",
                    desc: "百度开发的可定制的数据可视化图表"
                }, {
                    id: "00404",
                    name: "Highcharts",
                    logo: "http://www.xinaliu.com/static/images/echarts-favicon.png",
                    url: "http://www.highcharts.com/",
                    desc: "兼容 IE6+、支持移动端、图表类型丰富的HTML5交互性图表库"
                }, {
                    id: "00405",
                    name: "G2 可视化引擎",
                    logo: "https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg",
                    url: "https://antv-g2.gitee.io/zh",
                    desc: "G2 是一套基于图形语法理论的可视化底层引擎，以数据驱动，具有高度的易用性和扩展性。用户无需关注各种繁琐的实现细节，一条语句即可构建出各种各样的可交互的统计图表。"
                }],
            },{
                id: "005",
                weight: 2,
                name: "开发（代码仓库）平台",
                list: [{
                    id: "00501",
                    name: "Coding",
                    logo: "http://www.xinaliu.com/static/images/coding.png",
                    url: "https://coding.net/",
                    desc: "中国最大的git平台。"
                }, {
                    id: "00502",
                    name: "Vue",
                    logo: "https://gitee.com/logo-black.svg?20171024",
                    url: "https://gitee.com/",
                    desc: "代码托管·协作开发平台"
                }],
            },{
                id: "006",
                weight: 2,
                name: "游戏框架",
                list: [{
                    id: "00601",
                    name: "PhaserJS",
                    logo: "http://www.xinaliu.com/static/images/phaserjs.png",
                    url: "http://phaser.io/",
                    desc: "PC端和移动端HTML5游戏框架。"
                }, {
                    id: "00602",
                    name: "Cocos2d-x",
                    logo: "http://www.xinaliu.com/static/images/cocos2dx.png",
                    url: "http://www.cocos.com/",
                    desc: "以内容创作为核心的一体化游戏开发工具"
                }, {
                    id: "00603",
                    name: "白鹭引擎",
                    logo: "https://egret.com/img/homepage/dist/newIndex/logo.png",
                    url: "https://www.egret.com/",
                    desc: "效率至上的一站式完整开发工作流"
                }],
            },{
                id: "007",
                weight: 2,
                name: "CSS相关",
                list: [{
                    id: "00701",
                    name: "CSS-Tricks",
                    logo: "http://www.xinaliu.com/static/images/css-tricks-favicon.png",
                    url: "https://css-tricks.com/",
                    desc: "一个关于运用CSS技术进行网络开发和设计的小技巧的交流网站"
                }, {
                    id: "00702",
                    name: "Sass",
                    logo: "http://www.xinaliu.com/static/images/sass-favicon.png",
                    url: "http://sass.bootcss.com/docs/sass-reference/",
                    desc: "Sass 是成熟、稳定、强大的 CSS 扩展语言"
                }, {
                    id: "00703",
                    name: "Less",
                    logo: "http://www.xinaliu.com/static/images/less-favicon.png",
                    url: "http://less.bootcss.com/",
                    desc: "一种将css赋予了动态语言特性的动态样式语言"
                }, {
                    id: "00704",
                    name: "Stylus",
                    logo: "http://www.xinaliu.com/static/images/stylus-favicon.png",
                    url: "http://stylus-lang.com/",
                    desc: "EXPRESSIVE, DYNAMIC, ROBUST CSS"
                }],
            },{
                id: "008",
                weight: 2,
                name: "Node.js相关",
                list: [{
                    id: "00801",
                    name: "Node",
                    logo: "http://static.nodejs.cn/_static/img/logo.svg",
                    url: "http://nodejs.cn/api/",
                    desc: "Node.js 是一个基于 Chrome V8 引擎的 JavaScript 运行时。"
                }, {
                    id: "00802",
                    name: "Express",
                    logo: "http://www.xinaliu.com/static/images/express.png",
                    url: "http://www.expressjs.com.cn/",
                    desc: "基于 Node.js 平台，快速、开放、极简的 web 开发框架。"
                }, {
                    id: "00803",
                    name: "Koa",
                    logo: "http://www.xinaliu.com/static/images/koa.png",
                    url: "http://koa.bootcss.com/",
                    desc: "基于Nodejs的新一代框架。"
                }],
            },{
                id: "009",
                weight: 2,
                name: "调试工具",
                list: [{
                    id: "00901",
                    name: "Fiddler",
                    logo: "http://www.xinaliu.com/static/images/fiddler-favicon.png",
                    url: "http://www.telerik.com/fiddler",
                    desc: "前端必备抓包调试工具，没有之一"
                }, {
                    id: "00902",
                    name: "Charles",
                    logo: "https://www.charlesproxy.com/static/img/charles_hdr.06351fb7.png",
                    url: "https://www.charlesproxy.com/",
                    desc: "好用的抓包调试工具，可在mac上使用"
                }],
            },{
                id: "0010",
                weight: 2,
                name: "构建(工程化)工具",
                list: [{
                    id: "001001",
                    name: "Webpack",
                    logo: "http://www.xinaliu.com/static/images/webpack-favicon.png",
                    url: "https://webpack.js.org/",
                    desc: "代码模块化构建打包工具"
                }, {
                    id: "001002",
                    name: "Gulp",
                    logo: "http://www.xinaliu.com/static/images/gulp-favicon.png",
                    url: "http://www.gulpjs.com.cn/",
                    desc: "基于流的自动化构建工具"
                }, {
                    id: "001003",
                    name: "Grunt",
                    logo: "http://www.xinaliu.com/static/images/grunt-favicon.png",
                    url: "http://www.gruntjs.net/",
                    desc: "JavaScript  构建工具"
                }, {
                    id: "001004",
                    name: "Babel",
                    logo: "http://www.xinaliu.com/static/images/babel-favicon.png",
                    url: "https://babeljs.io/",
                    desc: "使用最新的规范来编写js"
                }, {
                    id: "001005",
                    name: "Yarn",
                    logo: "https://yarn.bootcss.com/assets/feature-speed.png",
                    url: "https://yarn.bootcss.com/",
                    desc: "快速、可靠、安全的依赖管理工具"
                }],
            },{
                id: "0011",
                weight: 2,
                name: "字体图标库",
                list: [{
                    id: "001101",
                    name: "Iconfont",
                    logo: "http://www.xinaliu.com/static/images/iconfont-favicon.jpg",
                    url: "https://www.iconfont.cn/",
                    desc: "阿里巴巴矢量图标库"
                }, {
                    id: "001101",
                    name: "Font Awesome",
                    logo: "http://www.xinaliu.com/static/images/font-awesome-favicon.png",
                    url: "http://www.bootcss.com/p/font-awesome/",
                    desc: "完美的图标字体 只为Bootstrap设计"
                }, {
                    id: "001103",
                    name: "IcoMoon",
                    logo: "http://www.xinaliu.com/static/images/icomoon-favicon.png",
                    url: "https://icomoon.io/",
                    desc: "WEB字体图标制造器"
                }],
            }],
            itemsData:[
                {
                    type: '团队组织',
                    data: [
                        {
                            name: '腾讯 AlloyTeam 团队',
                            logo: 'http://www.alloyteam.com/nav/static/images/alloyteam-favicon.jpg',
                            dec: '腾讯Web前端团队，代表作品WebQQ，致力于前端技术的研究',
                            url: 'http://www.alloyteam.com/'
                        },
                        {
                            name: 'ISUX',
                            logo: 'http://www.alloyteam.com/nav/static/images/alloyteam-favicon.jpg',
                            dec: '腾讯社交用户体验设计，简称ISUX，腾讯设计团队网站'
                        },
                        {
                            name: '腾讯 AlloyTeam 团队',
                            logo: 'http://www.alloyteam.com/nav/static/images/alloyteam-favicon.jpg',
                            dec: '腾讯Web前端团队，代表作品WebQQ，致力于前端技术的研究'
                        },
                        {
                            name: '腾讯 AlloyTeam 团队',
                            logo: 'http://www.alloyteam.com/nav/static/images/alloyteam-favicon.jpg',
                            dec: '腾讯Web前端团队，代表作品WebQQ，致力于前端技术的研究'
                        }
                    ]
                }
            ]
        }
    }
}
</script>