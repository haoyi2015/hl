<template>
    <section>
      <a @click="open1Fun" href="javascript:;"
        class="weui-btn weui-btn_plain-default">
        default
      </a>
      <a @click="open2Fun" href="javascript:;"
        class="weui-btn weui-btn_plain-default">
        cancel item && title
      </a>
      <a @click="open3Fun" href="javascript:;"
        class="weui-btn weui-btn_plain-default">
        menu
      </a>
        <actionsheet :open.sync="open1" @action="handleAction">
          <actionsheet-item v-for="item in options" :value="item.value" :key="item.value" :disabled="item.disabled">{{item.label}}</actionsheet-item>
        </actionsheet>
        <actionsheet :open.sync="open2" :cancel="true" @action="handleAction" title="标题文字">
          <actionsheet-item v-for="item in options" :value="item.value" :key="item.value" :disabled="item.disabled">{{item.label}}</actionsheet-item>
        </actionsheet>
        <actionsheet type="menu" :open.sync="open3" @action="handleAction" >
          <actionsheet-item v-for="item in options" :value="item.value" :key="item.value" :disabled="item.disabled">{{item.label}}</actionsheet-item>
        </actionsheet>
    </section>
</template>
<script>
import { Actionsheet, ActionsheetItem } from '../componentss/actionsheet'
export default {
  components: {
      Actionsheet,
      ActionsheetItem
  },
  data () {
    return {
      options: [
        {
          value: '1',
          label: '编辑'
        },
        {
          value: '2',
          label: '收藏'
        },
        {
          value: '3',
          label: '分享'
        },
        {
          value: '4',
          label: '删除',
          disabled: true
        }
      ],
      open1: false,
      open2: false,
      open3: false
    }
  },
  methods: {
    handleAction (value) {
      let label = this.options.filter((item) => {
        return item.value === value
      })[0].label
      this.$toast({message: `您点击了“${label}”`})
    },
    open1Fun () {
      this.open1 = true
    },
    open2Fun () {
      this.open2 = true
    },
    open3Fun () {
      this.open3 = true
    },
    handleJSCall () {
      this.open2 = true
      return
      let self = this
      this.$actionsheet({
        title: '标题文字',
        options: [...this.options]
      }).then((value) => {
        self.handleAction(value)
      }).catch(() => {
        console.log('close')
      })
    }
  }
}
</script>
