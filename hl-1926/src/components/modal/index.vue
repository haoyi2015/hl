<template>
    <div class="md-modal md-effect-7" :class="{' md-show':mdShow}">
        <div class="md-content">
            <h3>Modal Dialog</h3>
            <div>
                <p>This is a modal window. You can do the following things with it:</p>
                <ul>
                    <li><strong>Read:</strong> modal windows will probably tell you something important so don't forget to read what they say.</li>
                    <li><strong>Look:</strong> a modal window enjoys a certain kind of attention; just look at it and appreciate its presence.</li>
                    <li><strong>Close:</strong> click on the button below to close the modal.</li>
                </ul>
                <button class="md-close">Close me!</button>
            </div>
        </div>
    </div>
</template>
<style lang="less" scoped>
    .md-modal {
        position: fixed;
        top: 50%;
        left: 50%;
        width: 50%;
        max-width: 630px;
        min-width: 320px;
        height: auto;
        z-index: 2000;
        visibility: hidden;
        -webkit-backface-visibility: hidden;
        -moz-backface-visibility: hidden;
        backface-visibility: hidden;
        -webkit-transform: translateX(-50%) translateY(-50%);
        -moz-transform: translateX(-50%) translateY(-50%);
        -ms-transform: translateX(-50%) translateY(-50%);
        transform: translateX(-50%) translateY(-50%);
    }
    .md-content {
        color: #fff;
        background: #e74c3c;
        position: relative;
        border-radius: 3px;
        margin: 0 auto;
    }

    .md-content h3 {
        margin: 0;
        padding: 0.4em;
        text-align: center;
        font-size: 2.4em;
        font-weight: 300;
        opacity: 0.8;
        background: rgba(0,0,0,0.1);
        border-radius: 3px 3px 0 0;
    }
    .md-content > div {
        padding: 15px 40px 30px;
        margin: 0;
        font-weight: 300;
        font-size: 1.15em;
    }
    .md-content button {
        display: block;
        margin: 0 auto;
        font-size: 0.8em;
    }
    button {
        border: none;
        padding: 0.6em 1.2em;
        background: #c0392b;
        color: #fff;
        font-family: 'Lato', Calibri, Arial, sans-serif;
        font-size: 1em;
        letter-spacing: 1px;
        text-transform: uppercase;
        cursor: pointer;
        display: inline-block;
        margin: 3px 2px;
        border-radius: 2px;
    }
    .md-show {
        visibility: visible;
    }
    .md-show.md-effect-1 .md-content {
        -webkit-transform: scale(1);
        -moz-transform: scale(1);
        -ms-transform: scale(1);
        transform: scale(1);
        opacity: 1;
    }
    .md-effect-1 .md-content {
        -webkit-transform: scale(0.7);
        -moz-transform: scale(0.7);
        -ms-transform: scale(0.7);
        transform: scale(0.7);
        opacity: 0;
        -webkit-transition: all 0.3s;
        -moz-transition: all 0.3s;
        transition: all 0.3s;
    }
    /* Effect 5: fall */
    .md-effect-5.md-modal {
        -webkit-perspective: 1300px;
        -moz-perspective: 1300px;
        perspective: 1300px;
    }

    .md-effect-5 .md-content {
        -webkit-transform-style: preserve-3d;
        -moz-transform-style: preserve-3d;
        transform-style: preserve-3d;
        -webkit-transform: translateZ(600px) rotateX(20deg); 
        -moz-transform: translateZ(600px) rotateX(20deg); 
        -ms-transform: translateZ(600px) rotateX(20deg); 
        transform: translateZ(600px) rotateX(20deg); 
        opacity: 0;
    }

    .md-show.md-effect-5 .md-content {
        -webkit-transition: all 0.3s ease-in;
        -moz-transition: all 0.3s ease-in;
        transition: all 0.3s ease-in;
        -webkit-transform: translateZ(0px) rotateX(0deg);
        -moz-transform: translateZ(0px) rotateX(0deg);
        -ms-transform: translateZ(0px) rotateX(0deg);
        transform: translateZ(0px) rotateX(0deg); 
        opacity: 1;
    }
    /* Effect 7:  slide and stick to top */
    .md-effect-7{
        top: 0;
        -webkit-transform: translateX(-50%);
        -moz-transform: translateX(-50%);
        -ms-transform: translateX(-50%);
        transform: translateX(-50%);
    }

    .md-effect-7 .md-content {
        -webkit-transform: translateY(-200%);
        -moz-transform: translateY(-200%);
        -ms-transform: translateY(-200%);
        transform: translateY(-200%);
        -webkit-transition: all .3s;
        -moz-transition: all .3s;
        transition: all .3s;
        opacity: 0;
    }

    .md-show.md-effect-7 .md-content {
        -webkit-transform: translateY(0%);
        -moz-transform: translateY(0%);
        -ms-transform: translateY(0%);
        transform: translateY(0%);
        border-radius: 0 0 3px 3px;
        opacity: 1;
    }
</style>
<script>
export default {
    props: {
        mdShow: {
            type: '',
            default: false
        }
    }
}
</script>
