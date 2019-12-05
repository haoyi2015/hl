<template>
  <section class="znq-warp">
    <header class="vel-hed">
      <a
        href="javascript:;"
        :class="active == '#home' ? 'active' : ''"
        @click="toTarget('#home')"
      >首页</a>
      <a
        href="javascript:;"
        :class="active == '#team' ? 'active' : ''"
        @click="toTarget('#team')"
      >团队</a>
      <a
        href="javascript:;"
        :class="active == '#contact' ? 'active' : ''"
        @click="toTarget('#contact')"
      >联系</a>
      <a
        href="javascript:;"
        :class="active == '#join' ? 'active' : ''"
        @click="toTarget('#join')"
      >加入我们</a>
    </header>
    <div id="home">首页</div>
    <div id="team">团队</div>
    <div id="contact">联系</div>
    <div id="join">加入我们</div>
  </section>
</template>
<style lang="scss">
    .znq-warp {
    //关键代码，需要给容器添加高度
    width: 100%;
    //   height: 100vh;
    overflow-y: scroll;
    background: #f1f1f1;
    height: auto;
    }
    header.vel-hed {
        width: 100%;
        height: 60px;
        position: fixed;
        top: 0px;
        left: 0px;
        z-index: 9999;
        background: #fff;
        display: flex;
        display: -webkit-flex;
        justify-content: center;
    a {
        width: 200px;
        height: 60px;
        display: block;
        text-align: center;
        line-height: 60px;
        color: #333333;
        text-decoration: none;
        &:hover,
        &.active {
        color: dodgerblue;
        }
    }
    }
    #home,
    #team,
    #contact,
    #join {
    width: 100%;
    height: 500px;
    color: #ffff;
    font-size: 30px;
    text-align: center;
    line-height: 500px;
    }
    #home {
    background: tomato;
    }
    #team {
    background: deepskyblue;
    }
    #contact {
    background: orange;
    }
    #join {
    background: lightgreen;
    }
</style>

<script>
import "./velocity.js";
export default {
  components: {},
  data() {
    return {
      active: "#home"
    };
  },
  methods: {
    toTarget(target) {
      console.log(target);
      this.active = target;
      let toElement = document.querySelector(target);
      let container = document.querySelector("#app");
      Velocity(toElement, "scroll", {
        container: container,
        duration: 500,
        offset: -60,
        easing: "ease-out"
      });
    },
    onScroll() {
      let scrolled = document.querySelector("#app").scrollTop;
      if (scrolled < this.distance_team) {
        this.active = "#home";
      } else if (
        scrolled >= this.distance_team &&
        scrolled < this.distance_contact
      ) {
        this.active = "#team";
      } else if (
        scrolled >= this.distance_contact &&
        scrolled < this.distance_join
      ) {
        this.active = "#contact";
      } else {
        this.active = "#join";
      }
    }
  },
  mounted() {
    // 一次性计算赋值，减少滚动计算节点位置次数
    this.distance_team = document.querySelector("#team").offsetTop - 60;
    this.distance_contact = document.querySelector("#contact").offsetTop - 60;
    this.distance_join = document.querySelector("#join").offsetTop - 60;
    this.$nextTick(function() {
      document.querySelector("#app").addEventListener("scroll", this.onScroll);
    });
  }
};
</script>
