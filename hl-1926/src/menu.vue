<template>
    <div class="menu-warp">
        <div class="wrap">
            <input type="checkbox" id="checking" style="display:none;">
            <button class="blob">★</button>
            <button class="blob">✉</button>
            <button class="blob">⚙</button>
            <button class="blob">❤</button>
            <button class="blob">✌</button>
            <button class="blob">✎</button>
            <button class="blob">♫</button>
            <button class="blob">✆</button>
            <label class="blob" for="checking">
            <span class="bar"></span>      
            <span class="bar"></span>
            <span class="bar"></span>
            </label>
        </div>
    </div>
</template>
<style lang="less" scoped>
article,aside,details,figcaption,figure,footer,header,hgroup,main,nav,section,summary{display:block;}audio,canvas,video{display:inline-block;}audio:not([controls]){display:none;height:0;}[hidden]{display:none;}html{font-family:sans-serif;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;}body{margin:0;}a:focus{outline:thin dotted;}a:active,a:hover{outline:0;}h1{font-size:2em;margin:0.67em 0;}abbr[title]{border-bottom:1px dotted;}b,strong{font-weight:bold;}dfn{font-style:italic;}hr{-moz-box-sizing:content-box;box-sizing:content-box;height:0;}mark{background:#ff0;color:#000;}code,kbd,pre,samp{font-family:monospace,serif;font-size:1em;}pre{white-space:pre-wrap;}q{quotes:"\201C" "\201D" "\2018" "\2019";}small{font-size:80%;}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline;}sup{top:-0.5em;}sub{bottom:-0.25em;}img{border:0;}svg:not(:root){overflow:hidden;}figure{margin:0;}fieldset{border:1px solid #c0c0c0;margin:0 2px;padding:0.35em 0.625em 0.75em;}legend{border:0;padding:0;}button,input,select,textarea{font-family:inherit;font-size:100%;margin:0;}button,input{line-height:normal;}button,select{text-transform:none;}button,html input[type="button"],input[type="reset"],input[type="submit"]{-webkit-appearance:button;cursor:pointer;}button[disabled],html input[disabled]{cursor:default;}input[type="checkbox"],input[type="radio"]{box-sizing:border-box;padding:0;}input[type="search"]{-webkit-appearance:textfield;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;box-sizing:content-box;}input[type="search"]::-webkit-search-cancel-button,input[type="search"]::-webkit-search-decoration{-webkit-appearance:none;}button::-moz-focus-inner,input::-moz-focus-inner{border:0;padding:0;}textarea{overflow:auto;vertical-align:top;}table{border-collapse:collapse;border-spacing:0;}
[class^="icon-"], [class*=" icon-"] {
	font-family: 'icomoon';
	speak: none;
	font-style: normal;
	font-weight: normal;
	font-variant: normal;
	text-transform: none;
	line-height: 1;

	/* Better Font Rendering =========== */
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}

body, html { font-size: 100%; 	padding: 0; margin: 0;}

/* Reset */
*,
*:after,
*:before {
	-webkit-box-sizing: border-box;
	-moz-box-sizing: border-box;
	box-sizing: border-box;
}

/* Clearfix hack by Nicolas Gallagher: http://nicolasgallagher.com/micro-clearfix-hack/ */
.clearfix:before,
.clearfix:after {
	content: " ";
	display: table;
}

.clearfix:after {
	clear: both;
}

body{
	font-family: "Segoe UI", "Lucida Grande", Helvetica, Arial, "Microsoft YaHei", FreeSans, Arimo, "Droid Sans", "wenquanyi micro hei", "Hiragino Sans GB", "Hiragino Sans GB W3", "FontAwesome", sans-serif;
}
a{color: #2fa0ec;text-decoration: none;outline: none;}
a:hover,a:focus{color:#74777b;}

.htmleaf-container{
	margin: 0 auto;
	overflow: hidden;
}

.bgcolor-1 { background: #f0efee; }
.bgcolor-2 { background: #f9f9f9; }
.bgcolor-3 { background: #e8e8e8; }/*light grey*/
.bgcolor-4 { background: #2f3238; color: #fff; }/*Dark grey*/
.bgcolor-5 { background: #df6659; color: #521e18; }/*pink1*/
.bgcolor-6 { background: #2fa8ec; }/*sky blue*/
.bgcolor-7 { background: #d0d6d6; }/*White tea*/
.bgcolor-8 { background: #3d4444; color: #fff; }/*Dark grey2*/
.bgcolor-9 { background: #ef3f52; color: #fff;}/*pink2*/
.bgcolor-10{ background: #64448f; color: #fff;}/*Violet*/
.bgcolor-11{ background: #3755ad; color: #fff;}/*dark blue*/
.bgcolor-12{ background: #3498DB; color: #fff;}/*light blue*/
/* Header */
.htmleaf-header{
	text-align: center;
}
.htmleaf-header h1 {
	font-weight: 600;
	font-size: 2em;
	line-height: 1;
	margin-bottom: 0;
	font-family: "Segoe UI", "Lucida Grande", Helvetica, Arial, "Microsoft YaHei", FreeSans, Arimo, "Droid Sans", "wenquanyi micro hei", "Hiragino Sans GB", "Hiragino Sans GB W3", "FontAwesome", sans-serif;
}
.htmleaf-header h1 span {
	font-family: "Segoe UI", "Lucida Grande", Helvetica, Arial, "Microsoft YaHei", FreeSans, Arimo, "Droid Sans", "wenquanyi micro hei", "Hiragino Sans GB", "Hiragino Sans GB W3", "FontAwesome", sans-serif;
	display: block;
	font-size: 60%;
	font-weight: 400;
	padding: 0.8em 0 0.5em 0;
	color: #c3c8cd;
}
/*nav*/
.htmleaf-demo a{color: #1d7db1;text-decoration: none;}
.htmleaf-demo{width: 100%;padding-bottom: 1.2em;}
.htmleaf-demo a{display: inline-block;margin: 0.5em;padding: 0.6em 1em;border: 3px solid #1d7db1;font-weight: 700;}
.htmleaf-demo a:hover{opacity: 0.6;}
.htmleaf-demo a.current{background:#1d7db1;color: #fff; }
/* Top Navigation Style */
.htmleaf-links {
	position: relative;
	display: inline-block;
	white-space: nowrap;
	font-size: 1.5em;
	text-align: center;
}

.htmleaf-links::after {
	position: absolute;
	top: 0;
	left: 50%;
	margin-left: -1px;
	width: 2px;
	height: 100%;
	background: #dbdbdb;
	content: '';
	-webkit-transform: rotate3d(0,0,1,22.5deg);
	transform: rotate3d(0,0,1,22.5deg);
}

.htmleaf-icon {
	display: inline-block;
	margin: 0.5em;
	padding: 0em 0;
	width: 1.5em;
	text-decoration: none;
}

.htmleaf-icon span {
	display: none;
}

.htmleaf-icon:before {
	margin: 0 5px;
	text-transform: none;
	font-weight: normal;
	font-style: normal;
	font-variant: normal;
	font-family: 'icomoon';
	line-height: 1;
	speak: none;
	-webkit-font-smoothing: antialiased;
}
/* footer */
.htmleaf-footer{width: 100%;padding-top: 10px;}
.htmleaf-small{font-size: 0.8em;}
.center{text-align: center;}
/****/
.related {
	color: #fff;
	background: transparent;
	text-align: center;
	font-size: 1.25em;
	padding: 0.5em 0;
	overflow: hidden;
}

.related > a {
	vertical-align: top;
	width: calc(100% - 20px);
	max-width: 340px;
	display: inline-block;
	text-align: center;
	margin: 20px 10px;
	padding: 25px;
	font-family: "Segoe UI", "Lucida Grande", Helvetica, Arial, "Microsoft YaHei", FreeSans, Arimo, "Droid Sans", "wenquanyi micro hei", "Hiragino Sans GB", "Hiragino Sans GB W3", "FontAwesome", sans-serif;
}
.related a {
	display: inline-block;
	text-align: left;
	margin: 20px auto;
	padding: 10px 20px;
	opacity: 0.8;
	-webkit-transition: opacity 0.3s;
	transition: opacity 0.3s;
	-webkit-backface-visibility: hidden;
}

.related a:hover,
.related a:active {
	opacity: 1;
}

.related a img {
	max-width: 100%;
	opacity: 0.8;
	border-radius: 4px;
}
.related a:hover img,
.related a:active img {
	opacity: 1;
}
.related h3{font-family: "Microsoft YaHei", sans-serif;}
.related a h3 {
	font-weight: 300;
	margin-top: 0.15em;
	color: #fff;
}
/* icomoon */
.icon-htmleaf-home-outline:before {
	content: "\e5000";
}

.icon-htmleaf-arrow-forward-outline:before {
	content: "\e5001";
}

@media screen and (max-width: 50em) {
	.htmleaf-header h1 {
        font-size:1.5em;
    }
}


@media screen and (max-width: 40em) {
	.htmleaf-header h1 {
		font-size: 1.2em;
	}
}

@media screen and (max-width: 30em) {
    .htmleaf-header h1 {
        font-size:1em;
    }
}
    // @import url(http://fonts.useso.com/css?family=Lato);
body {
  margin: 0;
  padding: 0;
  background-color: #222;
}

* {
  color: #888;
  font-family: "Lato",Helvetica,sans-serif;
}

.bar {
  display: block;
  width: 40px;
  height: 5px;
  margin: 5px auto;
  background-color: #fff;
  border-radius: 2px;
  transition: all 0.4s linear 0.1s;
  -webkit-transition: all 0.4s linear 0.1s;
  -moz-transition: all 0.4s linear 0.1s;
  -o-transition: all 0.4s linear 0.1s;
  -ms-transition: all 0.4s linear 0.1s;
}
.bar:first-child {
  margin-top: 27px;
}

.wrap {
  position: absolute;
  top: 20px;
  left: 20px;
  margin: auto;
  width: 150px;
  height: 100px;
  -webkit-filter: url("#filt");
}
.wrap .blob {
  display: block;
  cursor: pointer;
  border: none;
  outline: none;
  position: absolute;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  z-index: 10;
  background-color: #F44336;
  box-shadow: 0 0 10px 1px rgba(255, 255, 255, 0.3) inset;
  -webkit-box-shadow: 0 0 10px 1px rgba(255, 255, 255, 0.3) inset;
  -moz-box-shadow: 0 0 10px 1px rgba(255, 255, 255, 0.3) inset;
  -o-box-shadow: 0 0 10px 1px rgba(255, 255, 255, 0.3) inset;
  -ms-box-shadow: 0 0 10px 1px rgba(255, 255, 255, 0.3) inset;
}
.wrap .blob[for="checking"] {
  z-index: 30;
  font-size: 60px;
  text-align: center;
  color: #fff;
  transition: transform 0.5s ease-in-out 0.2s;
  -webkit-transition: -webkit-transform 0.5s ease-in-out 0.2s;
  -moz-transition: transform 0.5s ease-in-out 0.2s;
  -o-transition: transform 0.5s ease-in-out 0.2s;
  -ms-transition: transform 0.5s ease-in-out 0.2s;
}
.wrap .blob:not([for="checking"]) {
  width: 50px;
  height: 50px;
  top: 15px;
  left: 15px;
  font-size: 30px;
  transition: all 0.5s ease-in-out;
  -webkit-transition: all 0.5s ease-in-out;
  -moz-transition: all 0.5s ease-in-out;
  -o-transition: all 0.5s ease-in-out;
  -ms-transition: all 0.5s ease-in-out;
}
.wrap .blob:not([for="checking"]):hover {
  color: #F44336;
  animation: harlem 0.5s linear forwards;
  -webkit-animation: harlem 0.5s linear forwards;
  -moz-animation: harlem 0.5s linear forwards;
  -o-animation: harlem 0.5s linear forwards;
  -ms-animation: harlem 0.5s linear forwards;
}
.wrap > #checking:checked ~ .blob:nth-child(2) {
  margin-left: 85px;
  margin-top: 10px;
  background-color: #fff;
}
.wrap > #checking:checked ~ .blob:nth-child(3) {
  margin-top: 145px;
  margin-left: 65px;
  background-color: #fff;
}
.wrap > #checking:checked ~ .blob:nth-child(4) {
  margin-top: 160px;
  margin-left: 10px;
  background-color: #fff;
}
.wrap > #checking:checked ~ .blob:nth-child(5) {
  margin-top: 85px;
  margin-left: 10px;
  background-color: #fff;
}
.wrap > #checking:checked ~ .blob:nth-child(6) {
  margin-top: 63px;
  margin-left: 63px;
  background-color: #fff;
}
.wrap > #checking:checked ~ .blob:nth-child(7) {
  margin-top: 65px;
  margin-left: 145px;
  background-color: #fff;
}
.wrap > #checking:checked ~ .blob:nth-child(8) {
  margin-top: 112px;
  margin-left: 112px;
  background-color: #fff;
}
.wrap > #checking:checked ~ .blob:nth-child(9) {
  margin-top: 10px;
  margin-left: 160px;
  background-color: #fff;
}
.wrap > #checking:checked ~ .blob[for="checking"] > .bar:nth-child(1) {
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
  -moz-transform: rotate(45deg);
  -o-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  margin-top: 37px;
}
.wrap > #checking:checked ~ .blob[for="checking"] > .bar:nth-child(2) {
  transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);
  -moz-transform: rotate(-45deg);
  -o-transform: rotate(-45deg);
  -ms-transform: rotate(-45deg);
  margin-top: -10px;
}
.wrap > #checking:checked ~ .blob[for="checking"] > .bar:nth-child(3) {
  opacity: 0;
}

@keyframes harlem {
  0% {
    transform: translate(0);
    -webkit-transform: translate(0);
    -moz-transform: translate(0);
    -o-transform: translate(0);
    -ms-transform: translate(0);
  }
  25% {
    transform: translate(5px, 5px);
    -webkit-transform: translate(5px, 5px);
    -moz-transform: translate(5px, 5px);
    -o-transform: translate(5px, 5px);
    -ms-transform: translate(5px, 5px);
  }
  50% {
    transform: translate(-5px, -5px);
    -webkit-transform: translate(-5px, -5px);
    -moz-transform: translate(-5px, -5px);
    -o-transform: translate(-5px, -5px);
    -ms-transform: translate(-5px, -5px);
  }
  75% {
    transform: translate(2px, 2px);
    -webkit-transform: translate(2px, 2px);
    -moz-transform: translate(2px, 2px);
    -o-transform: translate(2px, 2px);
    -ms-transform: translate(2px, 2px);
  }
  100% {
    transform: translate(0);
    -webkit-transform: translate(0);
    -moz-transform: translate(0);
    -o-transform: translate(0);
    -ms-transform: translate(0);
  }
}
@-webkit-keyframes harlem {
  0% {
    transform: translate(0);
    -webkit-transform: translate(0);
    -moz-transform: translate(0);
    -o-transform: translate(0);
    -ms-transform: translate(0);
  }
  25% {
    transform: translate(5px, 5px);
    -webkit-transform: translate(5px, 5px);
    -moz-transform: translate(5px, 5px);
    -o-transform: translate(5px, 5px);
    -ms-transform: translate(5px, 5px);
  }
  50% {
    transform: translate(-5px, -5px);
    -webkit-transform: translate(-5px, -5px);
    -moz-transform: translate(-5px, -5px);
    -o-transform: translate(-5px, -5px);
    -ms-transform: translate(-5px, -5px);
  }
  75% {
    transform: translate(2px, 2px);
    -webkit-transform: translate(2px, 2px);
    -moz-transform: translate(2px, 2px);
    -o-transform: translate(2px, 2px);
    -ms-transform: translate(2px, 2px);
  }
  100% {
    transform: translate(0);
    -webkit-transform: translate(0);
    -moz-transform: translate(0);
    -o-transform: translate(0);
    -ms-transform: translate(0);
  }
}
.writingshit {
  width: 60%;
  margin: 50px auto;
  background-color: #fff;
  text-align: center;
  box-shadow: 0 0 10px 2px #000;
  -webkit-box-shadow: 0 0 10px 2px #000;
  -moz-box-shadow: 0 0 10px 2px #000;
  -o-box-shadow: 0 0 10px 2px #000;
  -ms-box-shadow: 0 0 10px 2px #000;
}
.writingshit .wow {
  padding: 30px;
}
.writingshit .wow p {
  padding: 0 30px;
}
</style>