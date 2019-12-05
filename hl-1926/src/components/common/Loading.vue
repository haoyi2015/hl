<template>
	 <div class="loading-gallery">
    	<spinner type="triple-bounce" :size="50" color="#f3ab3c"></spinner>
    </div>
</template>
<script>
import {Spinner} from 'mint-ui'
export default {
	 components:{
        Spinner 
    }
}
</script>
<style lang="less">
	.loading-gallery{
		.mint-spinner-triple-bounce{
			position: absolute;
		    top: 50%;
		    left: 43%;
		}
		position: fixed;
	    top: 0;
	    right: 0;
	    bottom: 0;
	    left: 0;
	    background-color: rgba(0,0,0,.5);
	    z-index: 1000;
		.loading{
	        width: 80px;
	        height: 80px;
	        margin: 0 auto;
	        position: absolute;
	        top: 50%;
	        left: 50%;
	        margin-top: -40px;
	        margin-left: -40px;
	        text-align: center;
	    }
	    .loading span{
	        display: inline-block;
	        width: 6px;
	        height: 100%;
	        border-radius: 8px;
	        background: #ec682c;
	        -webkit-animation: load 1s ease infinite;
	    }
	    @-webkit-keyframes load{
	        0%,100%{
	            height: 40px;
	            background: #ec682c;
	        }
	        50%{
	            height: 70px;
	            margin: -15px 0;
	            background: #f3ab3c;
	        }
	    }
	    .loading span:nth-child(2){
	        -webkit-animation-delay:0.2s;
	    }
	    .loading span:nth-child(3){
	        -webkit-animation-delay:0.4s;
	    }
	    .loading span:nth-child(4){
	        -webkit-animation-delay:0.6s;
	    }
	    .loading span:nth-child(5){
	        -webkit-animation-delay:0.8s;
	    }
	}
</style>