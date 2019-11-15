let Toast = {};
let showToast = false,
  showLoad = false,
  toastVM = null,
  loadNode = null;

Toast.install = function (Vue, options) {
  let opt = {
    defaultType: 'bottom',
    duration: '2500',
    wordWrap: false
  };
  for (let property in options) {
    opt[property] = options[property];
  }

  Vue.prototype.$toast = function (tips, type) {
    let curType = type ? type : opt.defaultType;
    let wordWrap = opt.wordWrap ? 'lx-word-wrap' : '';
    let style = opt.width ? 'style="width: ' + opt.width + '"' : '';
    let tmp = '<div v-show="show" :class="type" class="lx-toast ' + wordWrap + '" ' + style + '>{{tip}}</div>';

    if (showToast) {
      return;
    }
    if (!toastVM) {
      let toastTpl = Vue.extend({
        data: function () {
          return {
            show: showToast,
            tip: tips,
            type: 'lx-toast-' + curType
          }
        },
        template: tmp
      });
      toastVM = new toastTpl()
      let tpl = toastVM.$mount().$el;
      document.body.appendChild(tpl);
    }
    toastVM.type = 'lx-toast-' + curType;
    toastVM.tip = tips;
    toastVM.show = showToast = true;

    setTimeout(function () {
      toastVM.show = showToast = false;
    }, opt.duration)
  };

  ['bottom', 'center', 'top'].forEach(function (type) {
    Vue.prototype.$toast[type] = function (tips) {
      return Vue.prototype.$toast(tips, type)
    }
  });

  Vue.prototype.$loading = function (tips, type) {
    if (type == 'close') {
      loadNode.show = showLoad = false;
    } else {
      if (showLoad) {
        return;
      }
      let loadTpl = Vue.extend({
        data: function () {
          return {
            show: showLoad
          }
        },
        template: '<div v-show="show" class="lx-load-mark"><div class="lx-load-box"><div class="lx-loading"><div class="loading loading_0"></div><div class="loading loading_1"></div><div class="loading loading_2"></div><div class="loading loading_3"></div><div class="loading loading_4"></div><div class="loading loading_5"></div><div class="loading loading_6"></div><div class="loading loading_7"></div><div class="loading loading_8"></div><div class="loading loading_9"></div><div class="loading loading_10"></div><div class="loading loading_11"></div></div><div class="lx-load-content">' + tips + '</div></div></div>'
      });
      loadNode = new loadTpl();
      let tpl = loadNode.$mount().$el;
      document.body.appendChild(tpl);
      loadNode.show = showLoad = true;
    }
  };

  ['open', 'close'].forEach(function (type) {
    Vue.prototype.$loading[type] = function (tips) {
      return Vue.prototype.$loading(tips, type)
    }
  });
}

// export default { Toast }

//export { Toast }

export {
  Toast
}