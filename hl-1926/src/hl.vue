<template>
    <div class="cont-warp">
		<h1>{{ setTime }}</h1>
		<div id="clock">
			<p class="date">{{ date }}</p>
			<p class="time">{{ time }}</p>
		</div>
		<div class="us-cont">
			<div class="first-name">
				<span> love </span>
			</div>
			<div class="heart">
				<div class="hover-cont-top">我的</div>
				<div class="right-heart"></div>
				<div class="left-heart"></div>
				<div class="hover-cont">小可爱</div>
			</div>
			<div class="last-name">
				<span> you </span>
			</div>
		</div>
		<div class="text-wrapper">
			<div class="text part1">
				<span class="letter" v-for="(letter, index) in letters" 
					:class="{ poofed: !letter }"
					>
					<div class="character">{{ letter }}</div> 
					<span></span>
				</span>
			</div>
		</div>
	</div>
</template>
<style scoped>
.cont-warp {
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
}
.cont-warp h1 {
    color: #fff;
    font-size: 16px;
}

.cont-warp .cont-dec {
    font-size: 13px;
    color: #fff;
    padding-top: .4rem;
    text-align: center;
}

#clock {
    font-family: 'Share Tech Mono', monospace;
    color: #ffffff;
    text-align: center;
    /* // position: absolute;
    // left: 50%;
    // top: 50%;
    // -webkit-transform: translate(-50%, -50%);
    // transform: translate(-50%, -50%); */
    color: #daf6ff;
    text-shadow: 0 0 20px #0aafe6, 0 0 20px rgba(10, 175, 230, 0);
}

#clock .time {
    letter-spacing: 0.05em;
    font-size: 1.6rem;
    padding: 5px 0;
}

#clock .date {
    letter-spacing: 0.1em;
    font-size: 20px;
}

.us-cont {
    display: flex;
    align-items: center;
    justify-content: center;
    align-content: center;
}

.first-name span {
    padding: .2rem;
    font-family: "Cedarville Cursive", cursive;
    font-size: 36px;
    letter-spacing: 10px;
    color: #bd2222;
}

.last-name span {
    padding: .2rem;
    font-family: "Cedarville Cursive", cursive;
    font-size: 36px;
    letter-spacing: 10px;
    color: #bd2222;
}

.heart {
    position: relative;
    height: 100px;
    width: 100px;
    background: #ff8a80;
    border-radius: 50%;
    animation: pulse 2s linear infinite;
}

.heart span {
    position: absolute;
    color: #fcc;
    font-family: "Cedarville Cursive", cursive;
    font-size: 22px;
    letter-spacing: 010px;
    z-index: 2;
    top: 0;
    left: 0;
    opacity: 0;
}

.heart span:hover {
    animation: apear 5s ease;
}

.heart .right-heart {
    position: absolute;
    right: 26px;
    top: 24px;
    height: 55%;
    width: 30%;
    border-radius: 90% 100% 0 90%;
    background: #bd2222;
    transform: rotate(45deg);
}

.heart .left-heart {
    position: absolute;
    left: 26px;
    top: 24px;
    height: 55%;
    width: 30%;
    border-radius: 100% 90% 90% 0;
    background: #bd2222;
    transform: rotate(-45deg);
}

@keyframes pulse {
    0% {
        transform: scale(0.9);
    }

    50% {
        transform: scale(1);
    }

    100% {
        transform: scale(0.9);
    }
}

@keyframes apear {
    0% {
        opacity: 0;
    }

    20% {
        opacity: 0.5;
    }

    40% {
        opacity: 1;
    }

    60% {
        opacity: 0.5;
    }

    80% {
        opacity: 0.2;
    }

    100% {
        opacity: 0;
    }
}

.text-wrapper {
    width: 100%;
    text-align: center;
}

.text {
    font-size: 8em;
    text-transform: uppercase;
    letter-spacing: -14px;
}

.text .letter {
    position: relative;
    display: inline-block;
    -webkit-transition: all .4s;
    transition: all .4s;
    margin: 0 10px;
}

.text .letter .character {
    opacity: 0.65;
    -webkit-transition: color .4s;
    transition: color .4s;
    cursor: pointer;
}

.text .letter span {
    position: absolute;
    bottom: .8rem;
    left: .4rem;
    display: block;
    width: 100%;
    height: 15px;
}

.text .letter span::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    border-radius: 50%;
    background: rgba(0, 0, 0, 0.25);
}

.text .letter:hover .character {
    color: #fff !important;
}

.text.part1 .letter:nth-child(1).poofed {
    -webkit-transform-origin: 50% 50%;
    transform-origin: 50% 50%;
    -webkit-animation: poofing1 1.4s ease-in-out infinite alternate;
    animation: poofing1 1.4s ease-in-out infinite alternate;
}

@-webkit-keyframes poofing1 {
    0% {
        -webkit-transform: rotateZ(0deg) rotateY(0) translateY(0px) scale(1);
        transform: rotateZ(0deg) rotateY(0) translateY(0px) scale(1);
    }

    50% {
        -webkit-transform: rotateZ(0deg) rotateY(360deg) translateY(0px) scale(1);
        transform: rotateZ(0deg) rotateY(360deg) translateY(0px) scale(1);
    }

    56% {
        -webkit-transform: rotateZ(459deg) rotateY(360deg) translateY(0px) scale(1);
        transform: rotateZ(459deg) rotateY(360deg) translateY(0px) scale(1);
    }

    100% {
        -webkit-transform: rotateZ(459deg) rotateY(360deg) translateY(-700px) scale(0.01);
        transform: rotateZ(459deg) rotateY(360deg) translateY(-700px) scale(0.01);
    }
}

@keyframes poofing1 {
    0% {
        -webkit-transform: rotateZ(0deg) rotateY(0) translateY(0px) scale(1);
        transform: rotateZ(0deg) rotateY(0) translateY(0px) scale(1);
    }

    50% {
        -webkit-transform: rotateZ(0deg) rotateY(360deg) translateY(0px) scale(1);
        transform: rotateZ(0deg) rotateY(360deg) translateY(0px) scale(1);
    }

    56% {
        -webkit-transform: rotateZ(459deg) rotateY(360deg) translateY(0px) scale(1);
        transform: rotateZ(459deg) rotateY(360deg) translateY(0px) scale(1);
    }

    100% {
        -webkit-transform: rotateZ(459deg) rotateY(360deg) translateY(-700px) scale(0.01);
        transform: rotateZ(459deg) rotateY(360deg) translateY(-700px) scale(0.01);
    }
}

.text.part1 .letter:nth-child(1) .character {
    color: #4e2a84;
    -webkit-animation: wave 1.2s linear infinite;
    animation: wave 1.2s linear infinite;
    -webkit-animation-delay: 0.33333s;
    animation-delay: 0.33333s;
}

.text.part1 .letter:nth-child(1) span::before {
    -webkit-animation: shadow 1.2s linear infinite;
    animation: shadow 1.2s linear infinite;
    -webkit-animation-delay: 0.33333s;
    animation-delay: 0.33333s;
}

.text.part1 .letter:nth-child(2).poofed {
    -webkit-transform-origin: 50% 50%;
    transform-origin: 50% 50%;
    -webkit-animation: poofing2 1.4s ease-in-out infinite alternate;
    animation: poofing2 1.4s ease-in-out infinite alternate;
}

@-webkit-keyframes poofing2 {
    0% {
        -webkit-transform: rotateZ(0deg) rotateY(0) translateY(0px) scale(1);
        transform: rotateZ(0deg) rotateY(0) translateY(0px) scale(1);
    }

    50% {
        -webkit-transform: rotateZ(0deg) rotateY(360deg) translateY(0px) scale(1);
        transform: rotateZ(0deg) rotateY(360deg) translateY(0px) scale(1);
    }

    56% {
        -webkit-transform: rotateZ(540deg) rotateY(360deg) translateY(0px) scale(1);
        transform: rotateZ(540deg) rotateY(360deg) translateY(0px) scale(1);
    }

    100% {
        -webkit-transform: rotateZ(540deg) rotateY(360deg) translateY(-700px) scale(0.01);
        transform: rotateZ(540deg) rotateY(360deg) translateY(-700px) scale(0.01);
    }
}

@keyframes poofing2 {
    0% {
        -webkit-transform: rotateZ(0deg) rotateY(0) translateY(0px) scale(1);
        transform: rotateZ(0deg) rotateY(0) translateY(0px) scale(1);
    }

    50% {
        -webkit-transform: rotateZ(0deg) rotateY(360deg) translateY(0px) scale(1);
        transform: rotateZ(0deg) rotateY(360deg) translateY(0px) scale(1);
    }

    56% {
        -webkit-transform: rotateZ(540deg) rotateY(360deg) translateY(0px) scale(1);
        transform: rotateZ(540deg) rotateY(360deg) translateY(0px) scale(1);
    }

    100% {
        -webkit-transform: rotateZ(540deg) rotateY(360deg) translateY(-700px) scale(0.01);
        transform: rotateZ(540deg) rotateY(360deg) translateY(-700px) scale(0.01);
    }
}

.text.part1 .letter:nth-child(2) .character {
    color: #ff5a5f;
    -webkit-animation: wave 1.2s linear infinite;
    animation: wave 1.2s linear infinite;
    -webkit-animation-delay: 0.66667s;
    animation-delay: 0.66667s;
}

.text.part1 .letter:nth-child(2) span::before {
    -webkit-animation: shadow 1.2s linear infinite;
    animation: shadow 1.2s linear infinite;
    -webkit-animation-delay: 0.66667s;
    animation-delay: 0.66667s;
}

.text.part1 .letter:nth-child(3).poofed {
    -webkit-transform-origin: 50% 50%;
    transform-origin: 50% 50%;
    -webkit-animation: poofing3 1.4s ease-in-out infinite alternate;
    animation: poofing3 1.4s ease-in-out infinite alternate;
}

@-webkit-keyframes poofing3 {
    0% {
        -webkit-transform: rotateZ(0deg) rotateY(0) translateY(0px) scale(1);
        transform: rotateZ(0deg) rotateY(0) translateY(0px) scale(1);
    }

    50% {
        -webkit-transform: rotateZ(0deg) rotateY(360deg) translateY(0px) scale(1);
        transform: rotateZ(0deg) rotateY(360deg) translateY(0px) scale(1);
    }

    56% {
        -webkit-transform: rotateZ(264deg) rotateY(360deg) translateY(0px) scale(1);
        transform: rotateZ(264deg) rotateY(360deg) translateY(0px) scale(1);
    }

    100% {
        -webkit-transform: rotateZ(264deg) rotateY(360deg) translateY(-700px) scale(0.01);
        transform: rotateZ(264deg) rotateY(360deg) translateY(-700px) scale(0.01);
    }
}

@keyframes poofing3 {
    0% {
        -webkit-transform: rotateZ(0deg) rotateY(0) translateY(0px) scale(1);
        transform: rotateZ(0deg) rotateY(0) translateY(0px) scale(1);
    }

    50% {
        -webkit-transform: rotateZ(0deg) rotateY(360deg) translateY(0px) scale(1);
        transform: rotateZ(0deg) rotateY(360deg) translateY(0px) scale(1);
    }

    56% {
        -webkit-transform: rotateZ(264deg) rotateY(360deg) translateY(0px) scale(1);
        transform: rotateZ(264deg) rotateY(360deg) translateY(0px) scale(1);
    }

    100% {
        -webkit-transform: rotateZ(264deg) rotateY(360deg) translateY(-700px) scale(0.01);
        transform: rotateZ(264deg) rotateY(360deg) translateY(-700px) scale(0.01);
    }
}

.text.part1 .letter:nth-child(3) .character {
    color: #f99b0c;
    -webkit-animation: wave 1.2s linear infinite;
    animation: wave 1.2s linear infinite;
    -webkit-animation-delay: 1s;
    animation-delay: 1s;
}

.text.part1 .letter:nth-child(3) span::before {
    -webkit-animation: shadow 1.2s linear infinite;
    animation: shadow 1.2s linear infinite;
    -webkit-animation-delay: 1s;
    animation-delay: 1s;
}

.text.part1 .letter:nth-child(4).poofed {
    -webkit-transform-origin: 50% 50%;
    transform-origin: 50% 50%;
    -webkit-animation: poofing4 1.4s ease-in-out infinite alternate;
    animation: poofing4 1.4s ease-in-out infinite alternate;
}

@-webkit-keyframes poofing4 {
    0% {
        -webkit-transform: rotateZ(0deg) rotateY(0) translateY(0px) scale(1);
        transform: rotateZ(0deg) rotateY(0) translateY(0px) scale(1);
    }

    50% {
        -webkit-transform: rotateZ(0deg) rotateY(360deg) translateY(0px) scale(1);
        transform: rotateZ(0deg) rotateY(360deg) translateY(0px) scale(1);
    }

    56% {
        -webkit-transform: rotateZ(42deg) rotateY(360deg) translateY(0px) scale(1);
        transform: rotateZ(42deg) rotateY(360deg) translateY(0px) scale(1);
    }

    100% {
        -webkit-transform: rotateZ(42deg) rotateY(360deg) translateY(-700px) scale(0.01);
        transform: rotateZ(42deg) rotateY(360deg) translateY(-700px) scale(0.01);
    }
}

@keyframes poofing4 {
    0% {
        -webkit-transform: rotateZ(0deg) rotateY(0) translateY(0px) scale(1);
        transform: rotateZ(0deg) rotateY(0) translateY(0px) scale(1);
    }

    50% {
        -webkit-transform: rotateZ(0deg) rotateY(360deg) translateY(0px) scale(1);
        transform: rotateZ(0deg) rotateY(360deg) translateY(0px) scale(1);
    }

    56% {
        -webkit-transform: rotateZ(42deg) rotateY(360deg) translateY(0px) scale(1);
        transform: rotateZ(42deg) rotateY(360deg) translateY(0px) scale(1);
    }

    100% {
        -webkit-transform: rotateZ(42deg) rotateY(360deg) translateY(-700px) scale(0.01);
        transform: rotateZ(42deg) rotateY(360deg) translateY(-700px) scale(0.01);
    }
}

.text.part1 .letter:nth-child(4) .character {
    color: #cee007;
    -webkit-animation: wave 1.2s linear infinite;
    animation: wave 1.2s linear infinite;
    -webkit-animation-delay: 1.33333s;
    animation-delay: 1.33333s;
}

.text.part1 .letter:nth-child(4) span::before {
    -webkit-animation: shadow 1.2s linear infinite;
    animation: shadow 1.2s linear infinite;
    -webkit-animation-delay: 1.33333s;
    animation-delay: 1.33333s;
}

.text.part1 .letter:nth-child(5).poofed {
    -webkit-transform-origin: 50% 50%;
    transform-origin: 50% 50%;
    -webkit-animation: poofing5 1.4s ease-in-out infinite alternate;
    animation: poofing5 1.4s ease-in-out infinite alternate;
}

@-webkit-keyframes poofing5 {
    0% {
        -webkit-transform: rotateZ(0deg) rotateY(0) translateY(0px) scale(1);
        transform: rotateZ(0deg) rotateY(0) translateY(0px) scale(1);
    }

    50% {
        -webkit-transform: rotateZ(0deg) rotateY(360deg) translateY(0px) scale(1);
        transform: rotateZ(0deg) rotateY(360deg) translateY(0px) scale(1);
    }

    56% {
        -webkit-transform: rotateZ(384deg) rotateY(360deg) translateY(0px) scale(1);
        transform: rotateZ(384deg) rotateY(360deg) translateY(0px) scale(1);
    }

    100% {
        -webkit-transform: rotateZ(384deg) rotateY(360deg) translateY(-700px) scale(0.01);
        transform: rotateZ(384deg) rotateY(360deg) translateY(-700px) scale(0.01);
    }
}

@keyframes poofing5 {
    0% {
        -webkit-transform: rotateZ(0deg) rotateY(0) translateY(0px) scale(1);
        transform: rotateZ(0deg) rotateY(0) translateY(0px) scale(1);
    }

    50% {
        -webkit-transform: rotateZ(0deg) rotateY(360deg) translateY(0px) scale(1);
        transform: rotateZ(0deg) rotateY(360deg) translateY(0px) scale(1);
    }

    56% {
        -webkit-transform: rotateZ(384deg) rotateY(360deg) translateY(0px) scale(1);
        transform: rotateZ(384deg) rotateY(360deg) translateY(0px) scale(1);
    }

    100% {
        -webkit-transform: rotateZ(384deg) rotateY(360deg) translateY(-700px) scale(0.01);
        transform: rotateZ(384deg) rotateY(360deg) translateY(-700px) scale(0.01);
    }
}

.text.part1 .letter:nth-child(5) .character {
    color: #00c6b2;
    -webkit-animation: wave 1.2s linear infinite;
    animation: wave 1.2s linear infinite;
    -webkit-animation-delay: 1.66667s;
    animation-delay: 1.66667s;
}

.text.part1 .letter:nth-child(5) span::before {
    -webkit-animation: shadow 1.2s linear infinite;
    animation: shadow 1.2s linear infinite;
    -webkit-animation-delay: 1.66667s;
    animation-delay: 1.66667s;
}

.text.part1 .letter:nth-child(6).poofed {
    -webkit-transform-origin: 50% 50%;
    transform-origin: 50% 50%;
    -webkit-animation: poofing6 1.4s ease-in-out infinite alternate;
    animation: poofing6 1.4s ease-in-out infinite alternate;
}

@-webkit-keyframes poofing6 {
    0% {
        -webkit-transform: rotateZ(0deg) rotateY(0) translateY(0px) scale(1);
        transform: rotateZ(0deg) rotateY(0) translateY(0px) scale(1);
    }

    50% {
        -webkit-transform: rotateZ(0deg) rotateY(360deg) translateY(0px) scale(1);
        transform: rotateZ(0deg) rotateY(360deg) translateY(0px) scale(1);
    }

    56% {
        -webkit-transform: rotateZ(156deg) rotateY(360deg) translateY(0px) scale(1);
        transform: rotateZ(156deg) rotateY(360deg) translateY(0px) scale(1);
    }

    100% {
        -webkit-transform: rotateZ(156deg) rotateY(360deg) translateY(-700px) scale(0.01);
        transform: rotateZ(156deg) rotateY(360deg) translateY(-700px) scale(0.01);
    }
}

@keyframes poofing6 {
    0% {
        -webkit-transform: rotateZ(0deg) rotateY(0) translateY(0px) scale(1);
        transform: rotateZ(0deg) rotateY(0) translateY(0px) scale(1);
    }

    50% {
        -webkit-transform: rotateZ(0deg) rotateY(360deg) translateY(0px) scale(1);
        transform: rotateZ(0deg) rotateY(360deg) translateY(0px) scale(1);
    }

    56% {
        -webkit-transform: rotateZ(156deg) rotateY(360deg) translateY(0px) scale(1);
        transform: rotateZ(156deg) rotateY(360deg) translateY(0px) scale(1);
    }

    100% {
        -webkit-transform: rotateZ(156deg) rotateY(360deg) translateY(-700px) scale(0.01);
        transform: rotateZ(156deg) rotateY(360deg) translateY(-700px) scale(0.01);
    }
}

.text.part1 .letter:nth-child(6) .character {
    color: #4e2a84;
    -webkit-animation: wave 1.2s linear infinite;
    animation: wave 1.2s linear infinite;
    -webkit-animation-delay: 2s;
    animation-delay: 2s;
}

.text.part1 .letter:nth-child(6) span::before {
    -webkit-animation: shadow 1.2s linear infinite;
    animation: shadow 1.2s linear infinite;
    -webkit-animation-delay: 2s;
    animation-delay: 2s;
}

.text.part2 span:nth-child(1).poofed {
    -webkit-animation: sec_poofing1 1.4s ease-in-out infinite alternate;
    animation: sec_poofing1 1.4s ease-in-out infinite alternate;
}

@-webkit-keyframes sec_poofing1 {
    0% {
        -webkit-transform: rotateZ(0deg) rotateY(0) translateY(0px) scale(1);
        transform: rotateZ(0deg) rotateY(0) translateY(0px) scale(1);
    }

    50% {
        -webkit-transform: rotateZ(0deg) rotateY(360deg) translateY(0px) scale(1);
        transform: rotateZ(0deg) rotateY(360deg) translateY(0px) scale(1);
    }

    56% {
        -webkit-transform: rotateZ(268deg) rotateY(360deg) translateY(0px) scale(1);
        transform: rotateZ(268deg) rotateY(360deg) translateY(0px) scale(1);
    }

    100% {
        -webkit-transform: rotateZ(268deg) rotateY(360deg) translateY(-700px) scale(0.01);
        transform: rotateZ(268deg) rotateY(360deg) translateY(-700px) scale(0.01);
    }
}

@keyframes sec_poofing1 {
    0% {
        -webkit-transform: rotateZ(0deg) rotateY(0) translateY(0px) scale(1);
        transform: rotateZ(0deg) rotateY(0) translateY(0px) scale(1);
    }

    50% {
        -webkit-transform: rotateZ(0deg) rotateY(360deg) translateY(0px) scale(1);
        transform: rotateZ(0deg) rotateY(360deg) translateY(0px) scale(1);
    }

    56% {
        -webkit-transform: rotateZ(268deg) rotateY(360deg) translateY(0px) scale(1);
        transform: rotateZ(268deg) rotateY(360deg) translateY(0px) scale(1);
    }

    100% {
        -webkit-transform: rotateZ(268deg) rotateY(360deg) translateY(-700px) scale(0.01);
        transform: rotateZ(268deg) rotateY(360deg) translateY(-700px) scale(0.01);
    }
}

.text.part2 span:nth-child(1) .character {
    color: #ff5a5f;
    -webkit-animation: wave 1.2s linear infinite;
    animation: wave 1.2s linear infinite;
    -webkit-animation-delay: 2.33333s;
    animation-delay: 2.33333s;
}

.text.part2 span:nth-child(1) span::before {
    -webkit-animation: shadow 1.2s linear infinite;
    animation: shadow 1.2s linear infinite;
    -webkit-animation-delay: 2.33333s;
    animation-delay: 2.33333s;
}

.text.part2 span:nth-child(2).poofed {
    -webkit-animation: sec_poofing2 1.4s ease-in-out infinite alternate;
    animation: sec_poofing2 1.4s ease-in-out infinite alternate;
}

@-webkit-keyframes sec_poofing2 {
    0% {
        -webkit-transform: rotateZ(0deg) rotateY(0) translateY(0px) scale(1);
        transform: rotateZ(0deg) rotateY(0) translateY(0px) scale(1);
    }

    50% {
        -webkit-transform: rotateZ(0deg) rotateY(360deg) translateY(0px) scale(1);
        transform: rotateZ(0deg) rotateY(360deg) translateY(0px) scale(1);
    }

    56% {
        -webkit-transform: rotateZ(135deg) rotateY(360deg) translateY(0px) scale(1);
        transform: rotateZ(135deg) rotateY(360deg) translateY(0px) scale(1);
    }

    100% {
        -webkit-transform: rotateZ(135deg) rotateY(360deg) translateY(-700px) scale(0.01);
        transform: rotateZ(135deg) rotateY(360deg) translateY(-700px) scale(0.01);
    }
}

@keyframes sec_poofing2 {
    0% {
        -webkit-transform: rotateZ(0deg) rotateY(0) translateY(0px) scale(1);
        transform: rotateZ(0deg) rotateY(0) translateY(0px) scale(1);
    }

    50% {
        -webkit-transform: rotateZ(0deg) rotateY(360deg) translateY(0px) scale(1);
        transform: rotateZ(0deg) rotateY(360deg) translateY(0px) scale(1);
    }

    56% {
        -webkit-transform: rotateZ(135deg) rotateY(360deg) translateY(0px) scale(1);
        transform: rotateZ(135deg) rotateY(360deg) translateY(0px) scale(1);
    }

    100% {
        -webkit-transform: rotateZ(135deg) rotateY(360deg) translateY(-700px) scale(0.01);
        transform: rotateZ(135deg) rotateY(360deg) translateY(-700px) scale(0.01);
    }
}

.text.part2 span:nth-child(2) .character {
    color: #f99b0c;
    -webkit-animation: wave 1.2s linear infinite;
    animation: wave 1.2s linear infinite;
    -webkit-animation-delay: 2.66667s;
    animation-delay: 2.66667s;
}

.text.part2 span:nth-child(2) span::before {
    -webkit-animation: shadow 1.2s linear infinite;
    animation: shadow 1.2s linear infinite;
    -webkit-animation-delay: 2.66667s;
    animation-delay: 2.66667s;
}

.text.part2 span:nth-child(3).poofed {
    -webkit-animation: sec_poofing3 1.4s ease-in-out infinite alternate;
    animation: sec_poofing3 1.4s ease-in-out infinite alternate;
}

@-webkit-keyframes sec_poofing3 {
    0% {
        -webkit-transform: rotateZ(0deg) rotateY(0) translateY(0px) scale(1);
        transform: rotateZ(0deg) rotateY(0) translateY(0px) scale(1);
    }

    50% {
        -webkit-transform: rotateZ(0deg) rotateY(360deg) translateY(0px) scale(1);
        transform: rotateZ(0deg) rotateY(360deg) translateY(0px) scale(1);
    }

    56% {
        -webkit-transform: rotateZ(442deg) rotateY(360deg) translateY(0px) scale(1);
        transform: rotateZ(442deg) rotateY(360deg) translateY(0px) scale(1);
    }

    100% {
        -webkit-transform: rotateZ(442deg) rotateY(360deg) translateY(-700px) scale(0.01);
        transform: rotateZ(442deg) rotateY(360deg) translateY(-700px) scale(0.01);
    }
}

@keyframes sec_poofing3 {
    0% {
        -webkit-transform: rotateZ(0deg) rotateY(0) translateY(0px) scale(1);
        transform: rotateZ(0deg) rotateY(0) translateY(0px) scale(1);
    }

    50% {
        -webkit-transform: rotateZ(0deg) rotateY(360deg) translateY(0px) scale(1);
        transform: rotateZ(0deg) rotateY(360deg) translateY(0px) scale(1);
    }

    56% {
        -webkit-transform: rotateZ(442deg) rotateY(360deg) translateY(0px) scale(1);
        transform: rotateZ(442deg) rotateY(360deg) translateY(0px) scale(1);
    }

    100% {
        -webkit-transform: rotateZ(442deg) rotateY(360deg) translateY(-700px) scale(0.01);
        transform: rotateZ(442deg) rotateY(360deg) translateY(-700px) scale(0.01);
    }
}

.text.part2 span:nth-child(3) .character {
    color: #cee007;
    -webkit-animation: wave 1.2s linear infinite;
    animation: wave 1.2s linear infinite;
    -webkit-animation-delay: 3s;
    animation-delay: 3s;
}

.text.part2 span:nth-child(3) span::before {
    -webkit-animation: shadow 1.2s linear infinite;
    animation: shadow 1.2s linear infinite;
    -webkit-animation-delay: 3s;
    animation-delay: 3s;
}

.text.part2 span:nth-child(4).poofed {
    -webkit-animation: sec_poofing4 1.4s ease-in-out infinite alternate;
    animation: sec_poofing4 1.4s ease-in-out infinite alternate;
}

@-webkit-keyframes sec_poofing4 {
    0% {
        -webkit-transform: rotateZ(0deg) rotateY(0) translateY(0px) scale(1);
        transform: rotateZ(0deg) rotateY(0) translateY(0px) scale(1);
    }

    50% {
        -webkit-transform: rotateZ(0deg) rotateY(360deg) translateY(0px) scale(1);
        transform: rotateZ(0deg) rotateY(360deg) translateY(0px) scale(1);
    }

    56% {
        -webkit-transform: rotateZ(525deg) rotateY(360deg) translateY(0px) scale(1);
        transform: rotateZ(525deg) rotateY(360deg) translateY(0px) scale(1);
    }

    100% {
        -webkit-transform: rotateZ(525deg) rotateY(360deg) translateY(-700px) scale(0.01);
        transform: rotateZ(525deg) rotateY(360deg) translateY(-700px) scale(0.01);
    }
}

@keyframes sec_poofing4 {
    0% {
        -webkit-transform: rotateZ(0deg) rotateY(0) translateY(0px) scale(1);
        transform: rotateZ(0deg) rotateY(0) translateY(0px) scale(1);
    }

    50% {
        -webkit-transform: rotateZ(0deg) rotateY(360deg) translateY(0px) scale(1);
        transform: rotateZ(0deg) rotateY(360deg) translateY(0px) scale(1);
    }

    56% {
        -webkit-transform: rotateZ(525deg) rotateY(360deg) translateY(0px) scale(1);
        transform: rotateZ(525deg) rotateY(360deg) translateY(0px) scale(1);
    }

    100% {
        -webkit-transform: rotateZ(525deg) rotateY(360deg) translateY(-700px) scale(0.01);
        transform: rotateZ(525deg) rotateY(360deg) translateY(-700px) scale(0.01);
    }
}

.text.part2 span:nth-child(4) .character {
    color: #00c6b2;
    -webkit-animation: wave 1.2s linear infinite;
    animation: wave 1.2s linear infinite;
    -webkit-animation-delay: 3.33333s;
    animation-delay: 3.33333s;
}

.text.part2 span:nth-child(4) span::before {
    -webkit-animation: shadow 1.2s linear infinite;
    animation: shadow 1.2s linear infinite;
    -webkit-animation-delay: 3.33333s;
    animation-delay: 3.33333s;
}

.text.part2 span:nth-child(5).poofed {
    -webkit-animation: sec_poofing5 1.4s ease-in-out infinite alternate;
    animation: sec_poofing5 1.4s ease-in-out infinite alternate;
}

@-webkit-keyframes sec_poofing5 {
    0% {
        -webkit-transform: rotateZ(0deg) rotateY(0) translateY(0px) scale(1);
        transform: rotateZ(0deg) rotateY(0) translateY(0px) scale(1);
    }

    50% {
        -webkit-transform: rotateZ(0deg) rotateY(360deg) translateY(0px) scale(1);
        transform: rotateZ(0deg) rotateY(360deg) translateY(0px) scale(1);
    }

    56% {
        -webkit-transform: rotateZ(419deg) rotateY(360deg) translateY(0px) scale(1);
        transform: rotateZ(419deg) rotateY(360deg) translateY(0px) scale(1);
    }

    100% {
        -webkit-transform: rotateZ(419deg) rotateY(360deg) translateY(-700px) scale(0.01);
        transform: rotateZ(419deg) rotateY(360deg) translateY(-700px) scale(0.01);
    }
}

@keyframes sec_poofing5 {
    0% {
        -webkit-transform: rotateZ(0deg) rotateY(0) translateY(0px) scale(1);
        transform: rotateZ(0deg) rotateY(0) translateY(0px) scale(1);
    }

    50% {
        -webkit-transform: rotateZ(0deg) rotateY(360deg) translateY(0px) scale(1);
        transform: rotateZ(0deg) rotateY(360deg) translateY(0px) scale(1);
    }

    56% {
        -webkit-transform: rotateZ(419deg) rotateY(360deg) translateY(0px) scale(1);
        transform: rotateZ(419deg) rotateY(360deg) translateY(0px) scale(1);
    }

    100% {
        -webkit-transform: rotateZ(419deg) rotateY(360deg) translateY(-700px) scale(0.01);
        transform: rotateZ(419deg) rotateY(360deg) translateY(-700px) scale(0.01);
    }
}

.text.part2 span:nth-child(5) .character {
    color: #4e2a84;
    -webkit-animation: wave 1.2s linear infinite;
    animation: wave 1.2s linear infinite;
    -webkit-animation-delay: 3.66667s;
    animation-delay: 3.66667s;
}

.text.part2 span:nth-child(5) span::before {
    -webkit-animation: shadow 1.2s linear infinite;
    animation: shadow 1.2s linear infinite;
    -webkit-animation-delay: 3.66667s;
    animation-delay: 3.66667s;
}

.text.part2 span:nth-child(6).poofed {
    -webkit-animation: sec_poofing6 1.4s ease-in-out infinite alternate;
    animation: sec_poofing6 1.4s ease-in-out infinite alternate;
}

@-webkit-keyframes sec_poofing6 {
    0% {
        -webkit-transform: rotateZ(0deg) rotateY(0) translateY(0px) scale(1);
        transform: rotateZ(0deg) rotateY(0) translateY(0px) scale(1);
    }

    50% {
        -webkit-transform: rotateZ(0deg) rotateY(360deg) translateY(0px) scale(1);
        transform: rotateZ(0deg) rotateY(360deg) translateY(0px) scale(1);
    }

    56% {
        -webkit-transform: rotateZ(246deg) rotateY(360deg) translateY(0px) scale(1);
        transform: rotateZ(246deg) rotateY(360deg) translateY(0px) scale(1);
    }

    100% {
        -webkit-transform: rotateZ(246deg) rotateY(360deg) translateY(-700px) scale(0.01);
        transform: rotateZ(246deg) rotateY(360deg) translateY(-700px) scale(0.01);
    }
}

@keyframes sec_poofing6 {
    0% {
        -webkit-transform: rotateZ(0deg) rotateY(0) translateY(0px) scale(1);
        transform: rotateZ(0deg) rotateY(0) translateY(0px) scale(1);
    }

    50% {
        -webkit-transform: rotateZ(0deg) rotateY(360deg) translateY(0px) scale(1);
        transform: rotateZ(0deg) rotateY(360deg) translateY(0px) scale(1);
    }

    56% {
        -webkit-transform: rotateZ(246deg) rotateY(360deg) translateY(0px) scale(1);
        transform: rotateZ(246deg) rotateY(360deg) translateY(0px) scale(1);
    }

    100% {
        -webkit-transform: rotateZ(246deg) rotateY(360deg) translateY(-700px) scale(0.01);
        transform: rotateZ(246deg) rotateY(360deg) translateY(-700px) scale(0.01);
    }
}

.text.part2 span:nth-child(6) .character {
    color: #ff5a5f;
    -webkit-animation: wave 1.2s linear infinite;
    animation: wave 1.2s linear infinite;
    -webkit-animation-delay: 4s;
    animation-delay: 4s;
}

.text.part2 span:nth-child(6) span::before {
    -webkit-animation: shadow 1.2s linear infinite;
    animation: shadow 1.2s linear infinite;
    -webkit-animation-delay: 4s;
    animation-delay: 4s;
}

.text.part2 span:nth-child(7).poofed {
    -webkit-animation: sec_poofing7 1.4s ease-in-out infinite alternate;
    animation: sec_poofing7 1.4s ease-in-out infinite alternate;
}

@-webkit-keyframes sec_poofing7 {
    0% {
        -webkit-transform: rotateZ(0deg) rotateY(0) translateY(0px) scale(1);
        transform: rotateZ(0deg) rotateY(0) translateY(0px) scale(1);
    }

    50% {
        -webkit-transform: rotateZ(0deg) rotateY(360deg) translateY(0px) scale(1);
        transform: rotateZ(0deg) rotateY(360deg) translateY(0px) scale(1);
    }

    56% {
        -webkit-transform: rotateZ(206deg) rotateY(360deg) translateY(0px) scale(1);
        transform: rotateZ(206deg) rotateY(360deg) translateY(0px) scale(1);
    }

    100% {
        -webkit-transform: rotateZ(206deg) rotateY(360deg) translateY(-700px) scale(0.01);
        transform: rotateZ(206deg) rotateY(360deg) translateY(-700px) scale(0.01);
    }
}

@keyframes sec_poofing7 {
    0% {
        -webkit-transform: rotateZ(0deg) rotateY(0) translateY(0px) scale(1);
        transform: rotateZ(0deg) rotateY(0) translateY(0px) scale(1);
    }

    50% {
        -webkit-transform: rotateZ(0deg) rotateY(360deg) translateY(0px) scale(1);
        transform: rotateZ(0deg) rotateY(360deg) translateY(0px) scale(1);
    }

    56% {
        -webkit-transform: rotateZ(206deg) rotateY(360deg) translateY(0px) scale(1);
        transform: rotateZ(206deg) rotateY(360deg) translateY(0px) scale(1);
    }

    100% {
        -webkit-transform: rotateZ(206deg) rotateY(360deg) translateY(-700px) scale(0.01);
        transform: rotateZ(206deg) rotateY(360deg) translateY(-700px) scale(0.01);
    }
}

.text.part2 span:nth-child(7) .character {
    color: #f99b0c;
    -webkit-animation: wave 1.2s linear infinite;
    animation: wave 1.2s linear infinite;
    -webkit-animation-delay: 4.33333s;
    animation-delay: 4.33333s;
}

.text.part2 span:nth-child(7) span::before {
    -webkit-animation: shadow 1.2s linear infinite;
    animation: shadow 1.2s linear infinite;
    -webkit-animation-delay: 4.33333s;
    animation-delay: 4.33333s;
}

.text.part2 span:nth-child(8).poofed {
    -webkit-animation: sec_poofing8 1.4s ease-in-out infinite alternate;
    animation: sec_poofing8 1.4s ease-in-out infinite alternate;
}

@-webkit-keyframes sec_poofing8 {
    0% {
        -webkit-transform: rotateZ(0deg) rotateY(0) translateY(0px) scale(1);
        transform: rotateZ(0deg) rotateY(0) translateY(0px) scale(1);
    }

    50% {
        -webkit-transform: rotateZ(0deg) rotateY(360deg) translateY(0px) scale(1);
        transform: rotateZ(0deg) rotateY(360deg) translateY(0px) scale(1);
    }

    56% {
        -webkit-transform: rotateZ(60deg) rotateY(360deg) translateY(0px) scale(1);
        transform: rotateZ(60deg) rotateY(360deg) translateY(0px) scale(1);
    }

    100% {
        -webkit-transform: rotateZ(60deg) rotateY(360deg) translateY(-700px) scale(0.01);
        transform: rotateZ(60deg) rotateY(360deg) translateY(-700px) scale(0.01);
    }
}

@keyframes sec_poofing8 {
    0% {
        -webkit-transform: rotateZ(0deg) rotateY(0) translateY(0px) scale(1);
        transform: rotateZ(0deg) rotateY(0) translateY(0px) scale(1);
    }

    50% {
        -webkit-transform: rotateZ(0deg) rotateY(360deg) translateY(0px) scale(1);
        transform: rotateZ(0deg) rotateY(360deg) translateY(0px) scale(1);
    }

    56% {
        -webkit-transform: rotateZ(60deg) rotateY(360deg) translateY(0px) scale(1);
        transform: rotateZ(60deg) rotateY(360deg) translateY(0px) scale(1);
    }

    100% {
        -webkit-transform: rotateZ(60deg) rotateY(360deg) translateY(-700px) scale(0.01);
        transform: rotateZ(60deg) rotateY(360deg) translateY(-700px) scale(0.01);
    }
}

.text.part2 span:nth-child(8) .character {
    color: #cee007;
    -webkit-animation: wave 1.2s linear infinite;
    animation: wave 1.2s linear infinite;
    -webkit-animation-delay: 4.66667s;
    animation-delay: 4.66667s;
}

.text.part2 span:nth-child(8) span::before {
    -webkit-animation: shadow 1.2s linear infinite;
    animation: shadow 1.2s linear infinite;
    -webkit-animation-delay: 4.66667s;
    animation-delay: 4.66667s;
}

.text.part2 span:nth-child(9).poofed {
    -webkit-animation: sec_poofing9 1.4s ease-in-out infinite alternate;
    animation: sec_poofing9 1.4s ease-in-out infinite alternate;
}

@-webkit-keyframes sec_poofing9 {
    0% {
        -webkit-transform: rotateZ(0deg) rotateY(0) translateY(0px) scale(1);
        transform: rotateZ(0deg) rotateY(0) translateY(0px) scale(1);
    }

    50% {
        -webkit-transform: rotateZ(0deg) rotateY(360deg) translateY(0px) scale(1);
        transform: rotateZ(0deg) rotateY(360deg) translateY(0px) scale(1);
    }

    56% {
        -webkit-transform: rotateZ(496deg) rotateY(360deg) translateY(0px) scale(1);
        transform: rotateZ(496deg) rotateY(360deg) translateY(0px) scale(1);
    }

    100% {
        -webkit-transform: rotateZ(496deg) rotateY(360deg) translateY(-700px) scale(0.01);
        transform: rotateZ(496deg) rotateY(360deg) translateY(-700px) scale(0.01);
    }
}

@keyframes sec_poofing9 {
    0% {
        -webkit-transform: rotateZ(0deg) rotateY(0) translateY(0px) scale(1);
        transform: rotateZ(0deg) rotateY(0) translateY(0px) scale(1);
    }

    50% {
        -webkit-transform: rotateZ(0deg) rotateY(360deg) translateY(0px) scale(1);
        transform: rotateZ(0deg) rotateY(360deg) translateY(0px) scale(1);
    }

    56% {
        -webkit-transform: rotateZ(496deg) rotateY(360deg) translateY(0px) scale(1);
        transform: rotateZ(496deg) rotateY(360deg) translateY(0px) scale(1);
    }

    100% {
        -webkit-transform: rotateZ(496deg) rotateY(360deg) translateY(-700px) scale(0.01);
        transform: rotateZ(496deg) rotateY(360deg) translateY(-700px) scale(0.01);
    }
}

.text.part2 span:nth-child(9) .character {
    color: #00c6b2;
    -webkit-animation: wave 1.2s linear infinite;
    animation: wave 1.2s linear infinite;
    -webkit-animation-delay: 5s;
    animation-delay: 5s;
}

.text.part2 span:nth-child(9) span::before {
    -webkit-animation: shadow 1.2s linear infinite;
    animation: shadow 1.2s linear infinite;
    -webkit-animation-delay: 5s;
    animation-delay: 5s;
}

@-webkit-keyframes wave {
    0% {
        -webkit-transform: translateY(0);
        transform: translateY(0);
    }

    50% {
        -webkit-transform: translateY(-10px);
        transform: translateY(-10px);
    }

    100% {
        -webkit-transform: translateY(0);
        transform: translateY(0);
    }
}

@keyframes wave {
    0% {
        -webkit-transform: translateY(0);
        transform: translateY(0);
    }

    50% {
        -webkit-transform: translateY(-10px);
        transform: translateY(-10px);
    }

    100% {
        -webkit-transform: translateY(0);
        transform: translateY(0);
    }
}

@-webkit-keyframes shadow {
    0% {
        width: 0;
        height: 0;
    }

    50% {
        width: 100%;
        height: 100%;
    }

    100% {
        width: 0;
        height: 0;
    }
}

@keyframes shadow {
    0% {
        width: 0;
        height: 0;
    }

    50% {
        width: 100%;
        height: 100%;
    }

    100% {
        width: 0;
        height: 0;
    }
}

.how-to {
    margin: 2rem 0 2rem 1rem;
    font-family: "Opens Sans", sans-serif;
    font-weight: 300;
    font-size: .85em;
    letter-spacing: 4px;
    color: rgba(255, 255, 255, 0.6);
}

.reset {
    position: absolute;
    bottom: 0;
    right: 0;
    padding: .5rem;
    font-family: "Opens Sans", sans-serif;
    font-weight: 300;
    font-size: .85em;
    color: rgba(255, 255, 255, 0.4);
    cursor: pointer;
    border: 1px solid rgba(255, 255, 255, 0.3);
    border-right: none;
    border-bottom: none;
    -webkit-transition: color .4s;
    transition: color .4s;
}

.reset svg {
    display: block;
    -webkit-transform: scale(0.7);
    transform: scale(0.7);
    -webkit-transform-origin: center center;
    transform-origin: center center;
}

.reset:hover {
    color: rgba(255, 255, 255, 0.8);
}

.reset:hover svg {
    -webkit-animation: rotate 1s linear infinite;
    animation: rotate 1s linear infinite;
}

@-webkit-keyframes rotate {
    0% {
        -webkit-transform: rotateZ(0) scale(0.7);
        transform: rotateZ(0) scale(0.7);
    }

    100% {
        -webkit-transform: rotateZ(360deg) scale(0.7);
        transform: rotateZ(360deg) scale(0.7);
    }
}

@keyframes rotate {
    0% {
        -webkit-transform: rotateZ(0) scale(0.7);
        transform: rotateZ(0) scale(0.7);
    }

    100% {
        -webkit-transform: rotateZ(360deg) scale(0.7);
        transform: rotateZ(360deg) scale(0.7);
    }
}

@media only screen and (max-width: 767px) {
    .text {
        font-size: 6em;
    }

    .text .letter span {
        bottom: .5rem;
    }
}

@media only screen and (max-width: 480px) {
    .text {
        font-size: 4em;
    }

    .text .letter span {
        bottom: 0;
    }
}

.hover-cont{
    /* visibility: hidden; */
    position: absolute;
    top: 80%;
    left: 50%;
    transform: translate(-50%, -20%);
    color: #fff;
    font-weight: bold;
}
.hover-cont-top{
    position: absolute;
    top: 15%;
    left: 50%;
    transform: translate(-50%, -20%);
    color: #fff;
    font-weight: bold;
    /* visibility: hidden; */
}
.heart:hover .hover-cont-top,
.heart:hover .hover-cont{
    /* visibility: visible; */
    -webkit-animation-name: fadeIn1; /*动画名称*/
    -webkit-animation-duration: 3s; /*动画持续时间*/
    -webkit-animation-iteration-count: 1; /*动画次数*/
    -webkit-animation-delay: 0s; /*延迟时间*/
}
@-webkit-keyframes fadeIn {
    0% {
        opacity: 0; /*初始状态 透明度为0*/
    }
    50% {
        opacity: 0; /*中间状态 透明度为0*/
    }
    100% {
        opacity: 1; /*结尾状态 透明度为1*/
    }
}
/* latin */
@font-face {
    font-family: 'Cedarville Cursive';
    font-style: normal;
    font-weight: 400;
    src: local('Cedarville Cursive'), local('Cedarville-Cursive'), url('/../font/yYL00g_a2veiudhUmxjo5VKkoqA-B_nuIrpw4cNOTw.woff2') format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
</style>
<script>
export default {
	data () {
		return {
			showLeftMenu: false,
			showWeatherList: false,
			setTime: '',
			time: '',
			date: '',
			goDate: '',
			letters: []
		}
	},
	methods: {
		setDateFun (){
			const _this = this
			function fnDate(){
				let oDiv = _this.$refs.dates;
				let date = new Date();
				let year = date.getFullYear();//当前年份
				let month = date.getMonth();//当前月份
				let data = date.getDate();//天
				let hours = date.getHours();//小时
				let minute = date.getMinutes();//分
				let second = date.getSeconds();//秒
				let time = year+"年"+fnW((month+1))+"月"+fnW(data)+"日 "+fnW(hours)+"时"+fnW(minute)+"分"+fnW(second)+"秒";
				_this.setTime = time
			}
			//补位 当某个字段不是两位数时补0
			function fnW(str){
				let num;
				str>=10?num=str:num="0"+str;
				return num;
			}
			//定时器每秒调用一次fnDate()
			setInterval(function(){
				fnDate();
			},1000);
		}
	},
	mounted () {
		// this.setDateFun()
		const _this = this
		let week = ['星期天', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
		let timerID = setInterval(updateTime, 1000);
		updateTime();
		function updateTime() {
			let cd = new Date();
			_this.time = zeroPadding(cd.getHours(), 2) + ':' + zeroPadding(cd.getMinutes(), 2) + ':' + zeroPadding(cd.getSeconds(), 2);
			_this.date = zeroPadding(cd.getFullYear(), 4) + '年' + zeroPadding(cd.getMonth()+1, 2) + '月' + zeroPadding(cd.getDate(), 2) + '日 ' + week[cd.getDay()];
		};

		function zeroPadding(num, digit) {
			let zero = '';
			for(let i = 0; i < digit; i++) {
				zero += '0';
			}
			return (zero + num).slice(-digit);
		}
		let date1 = new Date();
		let date2 = new Date('2019-02-6');
		let date = (date1.getTime() - date2.getTime()) / (24 * 60 * 60 * 1000);
		//this.goDate = parseInt(date)
		String(100).split("")
		console.log(parseInt(date).toString().split(''))
		// this.goDate
		let dateTime = ''
		dateTime = parseInt(date).toString().split('')
		// dateTime.splice(0, 0, "在一起");
		dateTime.push('天')
		this.letters = dateTime
	}
}
</script>