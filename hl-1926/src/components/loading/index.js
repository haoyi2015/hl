import LoadingPd from './loading'
export default {
  install(Vue) {
    let $vm
    if (!$vm) {
      const NwdLoadingPlugin = Vue.extend(LoadingPd);
      $vm = new NwdLoadingPlugin({
        el: document.createElement('div')
      });
    }
    $vm.open = false;
    let loading = {
      open(msg) {
        $vm.open = true;
        $vm.lodTxt = msg;
        document.body.appendChild($vm.$el);
      },
      close() {
        $vm.open = false;
      }
    };
    if (!Vue.$loading) {
      Vue.$loading = loading;
    }
    Vue.mixin({
      created() {
        this.$loading = Vue.$loading;
      }
    })
  }
}