<template>
    <div id="app">
        <div id="class" class="weui-navbar">
            <div class="weui-navbar__item">
                <router-link to="/">Home</router-link>
            </div>
            <div class="weui-navbar__item">
                <router-link to="/about">About</router-link>
            </div>
            <div class="weui-navbar__item">
                <router-link to="/examples">examples</router-link>
            </div>
        </div>
        <router-view/>
    </div>
</template>

<style lang="scss">
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
}
input,button,select,textarea{outline:none;}
#class {
    position: static;
    a {
        font-weight: bold;
        color: #2c3e50;
        &.router-link-exact-active {
            color: #42b983;
        }
    }
}
</style>
