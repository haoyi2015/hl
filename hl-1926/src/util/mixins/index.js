
const addressObject = {
    methods: {
      cityIndex (data,ax,bx,cx) {
        //地区排序取值
        let aindex ='',bindex ='',cindex ='';
        const cArrs = data||[];
        for(let a=0; a<cArrs.length; a++){
            let childrens = cArrs[a].children;
            if(ax == cArrs[a].id){
              aindex = a;
            }
            for(let b=0; b<childrens.length; b++){
                let childrenss = childrens[b].children;
                if(childrens[b].id == bx){
                  bindex = b;
                }
                if(childrenss&&childrenss.length>=1){
                  for(let c=0; c<childrenss.length; c++){
                    if(childrenss[c].id == cx){
                      cindex = c
                    }
                  }
                }
            }
        }
        return [aindex,bindex,cindex];
      }
    }
  }
  
  const historyPush = {
    props: {
      history: {
        type: Boolean,
        default: true
      }
    },
    methods: {
      getPushURL () {
        let array = [window.location.href.split('#')[0], window.location.hash]
        array.push(window.location.hash ? (window.location.href.indexOf('?') === -1 ? '?' : '&') : '#')
        array.push('popup=' + Math.random().toString(36).substr(2))
        return array.join('')
      },
      pushState () {
        if (this.history) {
          if (window.location.href.indexOf('popup=') > -1) {
            window.history.back()
          }
          setTimeout(() => {
            window.history.pushState({}, '', this.getPushURL())
            let handlePopstate = this.handlePopstate = () => {
              this.$emit('update:open', false).$emit('close')
              this.popStateBack && this.popStateBack()
              window.removeEventListener('popstate', handlePopstate)
            }
            window.addEventListener('popstate', handlePopstate)
          }, 16)
        }
      },
      goBack () {
        window.removeEventListener('popstate', this.handlePopstate)
        this.history && window.location.href.indexOf('popup=') > -1 && history.back()
      }
    }
  }
  
  export {
    addressObject,
    historyPush
  }
  