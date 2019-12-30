<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
// import {mapState,mapGetters,mapActions} from 'vuex'; //先要引入
import { mapState, mapActions, mapGetters } from 'vuex'
export default {
  name: 'app',
  data() {
	return{
		item:{
			id:'01',
			productName: '苹果',
			price:'1.6元/斤'
		}
	}
  },
  components: {
    
  },
//   computed:{
//     ...mapState({
//         isShow:state=>state.footerStatus.showFooter
// 	}),
// 	...mapGetters('collection',{
// 		arrList:'renderCollects'
// 	}),
//     ...mapGetters('footerStatus',{
//          isShow:'isShow'
//       })
//   },
//   mounted() {
//     this.$store.dispatch('footerStatus/hideFooter')
//   },
//   methods:{
//       ...mapActions('collection',[
//           'invokePushItems'
// 	  ])
//   },
//   watch:{
//       $route(to,from){
//         if(to.name=='book'||to.name=='my'){
//            this.$store.dispatch('footerStatus/showFooter')
//         }else{
//            this.$store.dispatch('footerStatus/hideFooter')
//         }
//       }
//   }
}
</script>
<style>
  #app,body{
    width: 480px;
    margin: 0 auto;
    background: #f0f3f6;
  }
</style>
<style>
  @import './assets/css/common.css';
</style>
