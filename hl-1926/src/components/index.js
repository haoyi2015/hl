import Toast from './toast'

if (!window.requestAnimationFrame) {
  window.requestAnimationFrame = window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || setTimeout
}
let components = [Toast]
const install = (Vue) => {
  components.map(component => {
    component.componentName && Vue.component(component.componentName, component)
  })
  Vue.prototype.$toast = (_props, mounted = document.body) => {
    let props = Object.assign({
      open: true,
      onClose: () => {
        return true
      }
    }, _props)
    let node = document.createElement('div')
    mounted.appendChild(node)
    let vue = new Vue({ //eslint-disable-line
      el: node,
      render (createElement) {
        let message = props.message
        return createElement(Toast, {
          props: props,
          on: {
            'close': this.handleClose
          },
          scopedSlots: {
            default: props => createElement('div', {domProps: {innerHTML: message}})
          }
        })
      },
      data () {
        return {
          props
        }
      },
      methods: {
        handleClose () {
          props.open = props.onClose() === false
          !props.open && setTimeout(() => {
            vue.$destroy()
          }, 1000)
        }
      },
      destroyed () {
        vue.$el.parentNode && vue.$el.parentNode.removeChild(vue.$el)
      }
    })
    return vue
  }
}
export default {install,Toast}

export {install,Toast}
