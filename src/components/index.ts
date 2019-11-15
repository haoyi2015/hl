import Confirm from './confirm'
import Alert from './alert'
// import Popup from './popup'
import Toast from './Toast'

if (!window.requestAnimationFrame) {
  window.requestAnimationFrame = window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || setTimeout
}

let components = [
  Confirm,
  Alert,
  // Popup,
  Toast
]

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
  Vue.prototype.$alert = (_props, mounted = document.body) => {
    return new Promise((resolve, reject) => {
      let props = Object.assign({
        open: false,
        onConfirm: () => {
          return true
        },
        onCancel: () => {
          return true
        }
      }, _props)
      let node = document.createElement('div')
      mounted.appendChild(node)
      let vue = new Vue({ //eslint-disable-line
        el: node,
        render (createElement) {
          let message = props.message
          return createElement(Alert, {
            props: props,
            on: {
              'confirm': this.handleConfirm,
              'close': this.handleClose,
              'close-after': this.handleCloseAfter
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
        mounted () {
          props.open = true
        },
        methods: {
          handleConfirm () {
            resolve()
            props.open = props.onConfirm() === false
          },
          handleClose () {
            reject()
            props.open = props.onCancel() === false
          },
          handleCloseAfter () {
            vue.$destroy()
          }
        },
        destroyed () {
          vue.$el.parentNode.removeChild(vue.$el)
        }
      })
    })
  }
  Vue.prototype.$confirm = (_props, mounted = document.body) => {
    return new Promise((resolve, reject) => {
      let props = Object.assign({
        open: false,
        onConfirm: () => {
          return true
        },
        onCancel: () => {
          return true
        }
      }, _props)
      let node = document.createElement('div')
      mounted.appendChild(node)
      let vue = new Vue({ //eslint-disable-line
        el: node,
        render (createElement) {
          let message = props.message
          return createElement(Confirm, {
            props: props,
            on: {
              'confirm': this.handleConfirm,
              'close': this.handleClose,
              'close-after': this.handleCloseAfter
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
        mounted () {
          props.open = true
        },
        methods: {
          handleConfirm () {
            resolve()
            props.open = props.onConfirm() === false
          },
          handleClose () {
            reject()
            props.open = props.onCancel() === false
          },
          handleCloseAfter () {
            this.$nextTick(() => {
              this.$destroy()
            })
          }
        },
        destroyed () {
          vue.$el.parentNode.removeChild(vue.$el)
        }
      })
    })
  }
}

export default {
    install,
    Confirm,
    Alert,
    // Popup,
    Toast
}

export {
    install,
    Confirm,
    Alert,
    // Popup,
    Toast
}
