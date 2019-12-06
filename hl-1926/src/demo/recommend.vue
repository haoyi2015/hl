<template>
  <div class="recommend" ref="recommend" >
    <m-header></m-header>
    <tab></tab>
    <scroll class="recommend-content" ref="scroll" :data="playList">
      <div>
        <div v-show="banner.length" class="decorate" v-if="banner.length"></div>
        <div v-if="banner.length" class="slider-wrapper">
          <slider>
            <div v-for="item in banner" :key="item.id" @click.stop="selectBanner(item)">
              <img :src="item.picUrl">
            </div>
          </slider>
        </div>
        <div class="recommend-list" ref="recommendList">
          <h1 class="title">推荐歌单</h1>
          <ul>
            <li class="item" v-for="item in playList" :key="item.id">
              <div class="icon" @click="selectList(item)">
                <div class="gradients"></div>
                <img :src="item.picUrl">
              </div>
              <p class="play-count">
                <i class="fa fa-headphones"></i>
                {{Math.floor(item.playCount / 10000) }}万
              </p>
              <div class="text">
                <p class="name">{{item.name}}</p>
              </div>
            </li>
          </ul>
        </div>
        <div class="recommend-song" ref="recommendSong">
          <h1 class="title">推荐歌曲</h1>
          <ul>
            <li class="item" v-for="item in recommendMusic" :key="item.id" @click="selectSong(item)">
              <div class="icon">
                <img v-lazy="item.image">
              </div>
              <p class="text">{{item.name}}</p>
              <p class="singer">{{item.singer}}</p>
            </li>
          </ul>
        </div>
      </div>
    </scroll>
    <router-view></router-view>
  </div>
</template>

<script>
import MHeader from '@/componentss/vueMusic/header'
import Tab from '@/componentss/vueMusic/tab'
import Scroll from '@/componentss/vueMusic/scroll'
import Slider from '@/componentss/vueMusic/slider'
import {mapMutations, mapActions} from 'vuex'

export default {
  data () {
    return {
      banner: [],
      playList: [],
      recommendMusic: []
    }
  },
  created () {
    this._getBanner()
    this._getRecommendList()
    this._getRecommendMusic()
    // this.$refs.recommendList.style.
  },
  methods: {
    // firstPlay () {
    //   console.log('firstPlay')
    //   this.$refs.audio.play()
    // },
    selectBanner (item) {
      let regHttp = /^http/
      let regSong = /\/song\?id/
      if (regHttp.test(item.url)) {
        window.open(item.url)
      }
      if (regSong.test(item.url)) {
        getSongDetail(item.targetId).then((res) => {
          let m = res.data.songs[0]
          let song = {
            id: m.id,
            singer: m.ar[0].name,
            name: m.name,
            image: m.al.picUrl,
            album: m.al.name
          }
          this.insertSong(song)
          this.setFullScreen(true)
        })
      }
    },
    selectSong (item) {
      this.insertSong(item)
    },
    handlePlaylist (playlist) {
      const bottom = playlist.length > 0 ? '60px' : ''
      this.$refs.recommend.style.bottom = bottom
      this.$refs.scroll.refresh()
    },
    selectList (item) {
      this.$router.push({
        path: `/recommend/${item.id}`
      })
      sessionStorage.setItem('picUrl',JSON.stringify(item.picUrl))
      // console.log(item)
      //this.setMuiscList(item)
    },
    _getBanner () {

      //获取baner
      let lists = [{"picUrl":"http://p1.music.126.net/fusWjtcuyBcyLPHBoYaHIQ==/109951163445751844.jpg","url":"http://music.163.com/store/newalbum/detail?id=72070730","targetId":"0","backgroundUrl":"http://p1.music.126.net/UGSlCMYdwrViBQiXBQA2QQ==/109951163445750879.jpg","targetType":"3000","monitorType":"","monitorImpress":"","monitorClick":""},{"picUrl":"http://p1.music.126.net/EYnW4Ctc5b-ldKfDCtx05A==/109951163448250410.jpg","url":"/mv?id=5965315","targetId":"5965315","backgroundUrl":"http://p1.music.126.net/TdO0gt8wkilJLbfK6LBxYA==/109951163448252800.jpg","targetType":"1004","monitorType":"","monitorImpress":"","monitorClick":""},{"picUrl":"http://p1.music.126.net/kyZT3UJQTXIt4S7Swjgqtw==/109951163445743728.jpg","url":"/album?id=72069949","targetId":"72069949","backgroundUrl":"http://p1.music.126.net/LVBzw8BPe6FQfAlmRKx5gg==/109951163445744684.jpg","targetType":"10","monitorType":"","monitorImpress":"","monitorClick":""},{"picUrl":"http://p1.music.126.net/BFsVk6A0FiR78twBIiI8AA==/109951163448247148.jpg","url":"/album?id=72131650","targetId":"72131650","backgroundUrl":"http://p1.music.126.net/B3Z3EnaOeE-3vZcaUn7HMg==/109951163448246631.jpg","targetType":"10","monitorType":"","monitorImpress":"","monitorClick":""},{"picUrl":"http://p1.music.126.net/vx4UCxZWl_msJg5cQXsiXA==/109951163447416265.jpg","url":"/song?id=1299557115","targetId":"1299557115","backgroundUrl":"http://p1.music.126.net/INFdwRaLAXQr1-R3zx9uGg==/109951163447416738.jpg","targetType":"1","monitorType":"","monitorImpress":"","monitorClick":""},{"picUrl":"http://p1.music.126.net/r_2ldAI2P8O2JRhl_gzOPA==/109951163447660471.jpg","url":"http://music.163.com/m/at/5b67e17a205b29b7af9d3706","targetId":"0","backgroundUrl":"http://p1.music.126.net/YwySq9w_xQ-11mHkPV0sgQ==/109951163447664809.jpg","targetType":"3000","monitorType":"","monitorImpress":"","monitorClick":""},{"picUrl":"http://p1.music.126.net/DbPDNZeIwQsGmiDUyjwR7A==/109951163447681765.jpg","url":"/song?id=1299570329","targetId":"1299570329","backgroundUrl":"http://p1.music.126.net/xbh_vcISD_oD5ixk8O0A7Q==/109951163447683630.jpg","targetType":"1","monitorType":"","monitorImpress":"","monitorClick":""},{"picUrl":"http://p1.music.126.net/BDpErcRicCeMGk-3ttrJPw==/109951163447928432.jpg","url":"http://m.tb.cn/h.33cTpt3","targetId":"0","backgroundUrl":"http://p1.music.126.net/b3UmCQQiLMXRIm2dLGB0fg==/109951163447935125.jpg","targetType":"3000","monitorType":"","monitorImpress":"","monitorClick":""}]
      this.banner = lists.splice(4)
      console.log(this.banner)
    },
    _getRecommendList () {
      //获取推荐列表
      let playLists = [{"id":2321983233,"type":0,"name":"100种人生的态度，有没有你的归宿？","copywriter":"编辑推荐：什么样的态度决定什么样的生活","picUrl":"http://p1.music.126.net/9Erhh0FSSJn0w9pyLMqAFA==/109951163446893422.jpg","canDislike":false,"playCount":2056163.5,"trackCount":100,"highQuality":false,"alg":"featured"},{"id":2315893920,"type":0,"name":"孤身化为林中燕」只为一人赏呢喃","copywriter":"编辑推荐：倾听你心里的声音，做最快乐的自己","picUrl":"http://p1.music.126.net/9yjA7A0zirLS0231Qp3qNA==/109951163446800499.jpg","canDislike":false,"playCount":549736.56,"trackCount":40,"highQuality":false,"alg":"featured"},{"id":909822653,"type":0,"name":"午睡民谣","copywriter":"根据你喜欢的标签 民谣 推荐","picUrl":"http://p1.music.126.net/4HTyupyD-UOMJQICmscT8w==/109951163020513888.jpg","canDislike":true,"playCount":34279.0,"trackCount":119,"highQuality":false,"alg":"taste"},{"id":935507189,"type":0,"name":"毛阿姨唱过的歌","copywriter":"根据你喜欢的标签 民谣 推荐","picUrl":"http://p1.music.126.net/2fypBTo8GNQ7QiEs41INDw==/19182079858548695.jpg","canDislike":true,"playCount":59743.6,"trackCount":140,"highQuality":false,"alg":"taste"},{"id":649645501,"type":0,"name":"『港乐』香港音乐大师第三辑：黄霑作品集","copywriter":"根据你喜欢的标签 影视原声 推荐","picUrl":"http://p1.music.126.net/--g2cC8VzJGrn940Bix4mQ==/18729081069408776.jpg","canDislike":true,"playCount":348262.6,"trackCount":356,"highQuality":false,"alg":"taste"},{"id":618706112,"type":0,"name":"『旧影』台湾琼瑶剧&电影歌曲全记录","copywriter":"根据你喜欢的标签 影视原声 推荐","picUrl":"http://p1.music.126.net/VLHkaCwI_V8yOKWt0J9sFA==/18554258720544063.jpg","canDislike":true,"playCount":632879.8,"trackCount":300,"highQuality":false,"alg":"taste"},{"id":811070521,"type":0,"name":"一些适合男生的城市民谣","copywriter":"根据你喜欢的标签 民谣 推荐","picUrl":"http://p1.music.126.net/pnlUvdYdzCt2YIsusgKlsQ==/109951163039178329.jpg","canDislike":true,"playCount":1232106.4,"trackCount":141,"highQuality":false,"alg":"taste"},{"id":635991067,"type":0,"name":"《四大名著》央视版 电视剧配乐原声","copywriter":"根据你喜欢的标签 影视原声 推荐","picUrl":"http://p1.music.126.net/WnvJKJG5tye164Fy1AXDBg==/19013854579305239.jpg","canDislike":true,"playCount":192661.0,"trackCount":142,"highQuality":false,"alg":"taste"},{"id":2268276393,"type":0,"name":"【相见恨晚系列】小众fusion的好奇味道","copywriter":"热门歌单推荐","picUrl":"http://p1.music.126.net/ZUMw5dv91LOVCcbfZUwujg==/109951163379184639.jpg","canDislike":true,"playCount":1237138.0,"trackCount":21,"highQuality":false,"alg":"hot_server"},{"id":2229469033,"type":0,"name":"「纯音乐」你偶尔需要安静的发泄","copywriter":"热门歌单推荐","picUrl":"http://p1.music.126.net/KfA50nsD2BVup_ACFRGPPA==/19017153114621423.jpg","canDislike":true,"playCount":949551.4,"trackCount":73,"highQuality":false,"alg":"hot_server"},{"id":2277563774,"type":0,"name":"艳阳里的大雪纷飞 寒夜里的四季如春","copywriter":"热门歌单推荐","picUrl":"http://p1.music.126.net/EV1RrWoB8HigwjzLp1Dy_g==/109951163368762091.jpg","canDislike":true,"playCount":1128543.8,"trackCount":70,"highQuality":false,"alg":"hot_server"},{"id":2286581638,"type":0,"name":"日系情话|就像故事的伏笔，就像眼前的你","copywriter":"热门歌单推荐","picUrl":"http://p1.music.126.net/YVREKcrYQzK3Uo73Qbzbhw==/18973172649489100.jpg","canDislike":true,"playCount":732772.56,"trackCount":74,"highQuality":false,"alg":"hot_server"},{"id":2222445772,"type":0,"name":"【女声控】天籁之音，声线美到窒息「终」","copywriter":"热门歌单推荐","picUrl":"http://p1.music.126.net/7GUQTjkQUefpkYJDwBpaiA==/109951163294767899.jpg","canDislike":true,"playCount":755675.2,"trackCount":85,"highQuality":false,"alg":"hot_server"},{"id":2206966142,"type":0,"name":"『韩语』补充点恋爱糖分喵～","copywriter":"热门歌单推荐","picUrl":"http://p1.music.126.net/Zfpdsy12Zf25g4cHqlo_2Q==/109951163287848752.jpg","canDislike":true,"playCount":924859.6,"trackCount":92,"highQuality":false,"alg":"hot_server"},{"id":2185087020,"type":0,"name":"【女声控】天籁之音，声线美到窒息「七」","copywriter":"热门歌单推荐","picUrl":"http://p1.music.126.net/KFRfhKMZKBU4oSlewSPxrQ==/109951163292731900.jpg","canDislike":true,"playCount":663976.6,"trackCount":53,"highQuality":false,"alg":"hot_server"},{"id":2241818422,"type":0,"name":"【日系&节奏控】这个歌单有毒，请谨慎食用","copywriter":"热门歌单推荐","picUrl":"http://p1.music.126.net/fuch3ZqTkMPKqhaexD0krg==/109951163317832147.jpg","canDislike":true,"playCount":738787.0,"trackCount":63,"highQuality":false,"alg":"hot_server"},{"id":2281026097,"type":0,"name":"一句情话‖山有木兮木有枝 心悦君兮君不知","copywriter":"热门歌单推荐","picUrl":"http://p1.music.126.net/A8e_RkF9I2POgca3jNRRbA==/18636722093067732.jpg","canDislike":true,"playCount":925414.0,"trackCount":30,"highQuality":false,"alg":"hot_server"},{"id":2298808550,"type":0,"name":"这位同学 打扰一下，有个恋爱想和你谈谈","copywriter":"热门歌单推荐","picUrl":"http://p1.music.126.net/DGka2Wu_5PSaqLyKaQT7ww==/18988565812043578.jpg","canDislike":true,"playCount":838495.0,"trackCount":47,"highQuality":false,"alg":"hot_server"},{"id":2173273497,"type":0,"name":"电音｜精选20首神级电音纯音乐","copywriter":"热门歌单推荐","picUrl":"http://p1.music.126.net/2DPfIcaeTxHKYONRmmsVlA==/18685100604622380.jpg","canDislike":true,"playCount":893867.8,"trackCount":20,"highQuality":false,"alg":"hot_server"},{"id":2261917904,"type":0,"name":"听完这首歌，就把你忘掉。","copywriter":"热门歌单推荐","picUrl":"http://p1.music.126.net/Z_D1CHceRJ_r612q4-g_nQ==/18649916232562040.jpg","canDislike":true,"playCount":941605.0,"trackCount":72,"highQuality":false,"alg":"hot_server"},{"id":2195453350,"type":0,"name":"闽南语丨原来也可以如此清新与情深","copywriter":"热门歌单推荐","picUrl":"http://p1.music.126.net/TL139JzpNqm3SxC7ig6Meg==/109951163305967285.jpg","canDislike":true,"playCount":1124994.9,"trackCount":150,"highQuality":false,"alg":"hot_server"},{"id":2336165805,"type":0,"name":"香港乐坛女子图鉴（1983-2005）","copywriter":"热门歌单推荐","picUrl":"http://p1.music.126.net/B2RjM_mkyBxeDCS6OlwKyw==/109951163430806499.jpg","canDislike":true,"playCount":1072531.5,"trackCount":200,"highQuality":false,"alg":"hot_server"},{"id":2308797182,"type":0,"name":"麻麻，我要踩着复古小调出去玩耍了","copywriter":"热门歌单推荐","picUrl":"http://p1.music.126.net/nTilbFmTKP3GVWBQEh-sxw==/109951163400107737.jpg","canDislike":true,"playCount":828482.2,"trackCount":20,"highQuality":false,"alg":"hot_server"},{"id":2283758857,"type":0,"name":"时光总是无言，越有故事的人越沉静","copywriter":"热门歌单推荐","picUrl":"http://p1.music.126.net/41dYVrKxEN7mU9mIOPbEvQ==/109951163376868999.jpg","canDislike":true,"playCount":1237052.0,"trackCount":45,"highQuality":false,"alg":"hot_server"},{"id":2321143546,"type":0,"name":"快节奏的冲击幻境/Drum&Bass","copywriter":"热门歌单推荐","picUrl":"http://p1.music.126.net/AXJX7LkCZtnx81boNOMEzw==/18528969953507949.jpg","canDislike":true,"playCount":1122493.1,"trackCount":43,"highQuality":false,"alg":"hot_server"},{"id":2263759852,"type":0,"name":"50首走心民谣 适合一个人安静的时候听","copywriter":"热门歌单推荐","picUrl":"http://p1.music.126.net/19G6eFp15QTcuIc_i4kjhg==/18804947372062912.jpg","canDislike":true,"playCount":1131281.5,"trackCount":50,"highQuality":false,"alg":"hot_server"},{"id":2301062393,"type":0,"name":"Emotional EDM丨失落的贝斯","copywriter":"热门歌单推荐","picUrl":"http://p1.music.126.net/TY_yygiRsvT-ErZfRXzDGw==/109951163393260827.jpg","canDislike":true,"playCount":916262.2,"trackCount":40,"highQuality":false,"alg":"hot_server"},{"id":2232001906,"type":0,"name":"欧美清新／柠檬味的夏日海风","copywriter":"热门歌单推荐","picUrl":"http://p1.music.126.net/0tuth8f8SCuvKT8jgkpctw==/19077626254153534.jpg","canDislike":true,"playCount":868987.0,"trackCount":50,"highQuality":false,"alg":"hot_server"},{"id":2230735156,"type":0,"name":"直抒胸臆丨华语嘻哈的武侠情怀","copywriter":"热门歌单推荐","picUrl":"http://p1.music.126.net/4vIvtyDOnAThQvGx2Q3z9g==/109951163304116586.jpg","canDislike":true,"playCount":956082.44,"trackCount":29,"highQuality":false,"alg":"hot_server"},{"id":2245673579,"type":0,"name":"「致友人」问君此去几时还，来时莫徘徊","copywriter":"热门歌单推荐","picUrl":"http://p1.music.126.net/KArF8Sw93Oh192T5BjOPqA==/18825838092856624.jpg","canDislike":true,"playCount":1103338.9,"trackCount":66,"highQuality":false,"alg":"hot_server"}]
      this.playList = playLists
    },
    _getRecommendMusic () {
      //获取推荐歌曲
      let recommendMusics = []
      this.recommendMusic = recommendMusics
    }
  },
  components: {
    Slider,
    Scroll,
    MHeader,
    Tab
  }
}
</script>

<style lang="scss" scoped>
// 颜色定义规范
$color-background: #F2F3F4;
$color-background-d: rgba(0, 0, 0, 0.3);
$color-highlight-background: rgb(253, 108, 98);
$color-dialog-background: rgb(204, 204, 204);
$color-theme: rgb(212, 68, 57);
$color-theme-l: rgb(241, 241, 241);
$color-theme-g: rgb(219, 219, 219);
$color-theme-d: rgba(19, 19, 19, 0.6);
$color-sub-theme: rgb(240, 116, 107);
$color-text: #2E3030;
$color-text-g: #757575;
$color-text-ggg: #c7c7c7;
$color-text-gg: rgb(219, 219, 219);
$color-text-l: rgb(241, 241, 241);
$color-text-lm: rgb(228, 228, 228);
$color-text-ll: rgba(255, 255, 255, 0.8);

//字体定义规范
$font-size-small-ss: 9px;
$font-size-small-s: 10px;
$font-size-small: 11px;
$font-size-small-x: 12px;
$font-size-medium: 14px;
$font-size-medium-x: 16px;
$font-size-large-s: 17px;
$font-size-large: 18px;
$font-size-large-x: 22px;
// 背景图片
@mixin bg-image($url) {
  background-image: url($url + "@2x.png");
  @media (-webkit-min-device-pixel-ratio: 3),(min-device-pixel-ratio: 3) {
    background-image: url($url + "@3x.png");
  }
}

// 不换行
@mixin no-wrap() {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}

// 扩展点击区域
@mixin extend-click() {
  position: relative;
  &:before {
    content: '';
    position: absolute;
    top: -10px;
    left: -10px;
    right: -10px;
    bottom: -10px;
  }
}
 .recommend {
  position: fixed;
  width: 100%;
  top: 50px;
  bottom: 0;
  z-index: 100;
  .recommend-content {
    width: 100%;
    height: 100%;
    overflow: hidden;
    .decorate {
      position: absolute;
      top: -30vh;
      z-index: -10;
      background: $color-theme;
      width: 100%;
      height: 50vh;
      vertical-align: inherit;
    }
    .slider-wrapper {
      width: 96%;
      margin: 0 auto;
      border-radius: 5px;
      overflow: hidden;
    }
    .recommend-list {
      position: relative;
      box-sizing: border-box;
      width: 100%;
      text-align: center;
      .title {
        height: 65px;
        line-height: 65px;
        padding-left: 1.5%;
        text-align: left;
        font-size: $font-size-medium;
        font-weight: bold;
        color: $color-text;
      }
      .item {
        display: inline-block;
        position: relative;
        box-sizing: border-box;
        width: 33%;
        padding: 0 1%;
        .icon {
          position: relative;
          display: inline-block;
          width: 100%;
          margin-bottom: 5px;
          .gradients {
            position: absolute;
            top: 0;
            width: 100%;
            height: 35px;
            border-radius: 3px;
            background: linear-gradient(rgba(109, 109, 109, 0.4),rgba(255, 255, 255, 0));
          }
          img {
            width: 100%;
            height: 100%;
            border-radius: 3px;
          }
        }
        .play-count {
          position: absolute;
          top: 5px;
          right: 8px;
          font-size: $font-size-small-s;
          color: $color-text-l
        }
        .text {
          float: left;
          line-height: 16px;
          text-align: left;
          height: 40px;
          line-height: 16px;
          overflow: hidden;
          margin-bottom: 10px;
          font-size: $font-size-small;
        }
      }
    }
    .recommend-song {
      margin-top: -20px;
      box-sizing: border-box;
      width: 100%;
      text-align: center;
      .title {
        height: 65px;
        line-height: 65px;
        padding-left: 1.5%;
        text-align: left;
        font-size: $font-size-medium;
        font-weight: bold;
        color: $color-text;
      }
      .item {
        display: inline-block;
        position: relative;
        box-sizing: border-box;
        width: 33%;
        padding: 0 1%;
        .icon {
          position: relative;
          display: inline-block;
          width: 100%;
          margin-bottom: 5px;
          img {
            width: 100%;
            height: 100%;
            border-radius: 3px;
          }
        }
        .text {
          line-height: 16px;
          text-align: left;
          height: 16px;
          @include no-wrap();
          font-size: $font-size-small;
        }
        .singer {
          line-height: 16px;
          margin-bottom: 10px;
          text-align: left;
          @include no-wrap();
          font-size: $font-size-small;
          color: $color-text-g;
        }
      }
    }
  }
 }
</style>
