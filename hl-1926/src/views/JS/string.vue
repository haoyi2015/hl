<template>
    <section>
        <div class="weui-panel__hd">JS - 字符串截取方法汇总（slice、substring、substr等）</div>
        <div class="weui-news_h2">一、使用 slice() 截取</div>
        <div class="weui-media-box__desc">
            <h1 class="t-h1">1，函数说明</h1>
            <p><span class="gjz">slice()</span> 方法可通过指定的开始和结束位置，提取字符串的某个部分，并以新的字符串返回被提取的部分。语法如下：</p>
        </div>
        <div class="exp-warp">
            <code>stringObject.slice(start, end)</code>
        </div>
        <div class="param-warp">
            参数说明：
            <ol>
                <li><span class="gjz">start</span> 
                （必需）：规定从何处开始选取。如果是负数，那么它规定从字符串尾部开始算起的位置。也就是说，<span class="gjz">-1</span> 指最后一个字符，<span class="gjz">-2</span> 指倒数第二个字符，以此类推。
                </li>
                <li><span class="gjz">end</span>（可选）：规定从何处结束选取，即结束处的字符下标。如果没有指定该参数，那么截取的字符串包含从 <span class="gjz">start</span> 到结束的所有字符。如果这个参数是负数，那么它规定的是从数组尾部开始算起的字符。</li>
            </ol>
        </div>
        <div class="sy-exp-warp">
            <h1 class="t-h1">2，使用样例</h1>
            <div class="container-dec">
                <pre>
        var str = "0123456789";
        console.log("原始字符串：", str);
        
        console.log("从索引为3的字符起一直到结束：", str.slice(3));  //3456789
        console.log("从倒数第3个字符起一直到结束：", str.slice(-3));  //789
        
        console.log("从开始一直到索引为5的前一个字符：", str.slice(0,5));  //01234
        console.log("从开始一直到倒数第3个字符的前一个字符：", str.slice(0,-3));  //0123456
        
        console.log("从索引为3的字符起到索引为5的前一个字符：", str.slice(3,5));  //34
        console.log("从索引为3的字符起到倒数第3个字符的前一个字符：", str.slice(3,-3));  //3456
                </pre>
            </div>
        </div>

        <div class="weui-news_h2">一、使用 substring() 截取</div>
        <div class="weui-media-box__desc">
            <h1 class="t-h1">1，函数说明</h1>
            <p><span class="gjz">substring</span>方法用于提取字符串中介于两个指定下标之间的字符 语法如下：</p>
        </div>
        <div class="exp-warp">
            <code>stringObject.substring(start, stop)</code>
        </div>
        <div class="param-warp">
            参数说明：
            <ol>
                <li><span class="gjz">start</span> 
                （必需）：一个非负的整数，规定要提取的子串的第一个字符在<span class="gjz">stringObject</span> 中的位置
                </li>
                <li><span class="gjz">stop</span>（可选）：一个非负的整数，比要提取的子串的最后一个字符在 <span class="gjz">stringObject</span> 中的位置多<span class="gjz">1</span></li>
            </ol>
            返回值说明：
            <ol>
                <li>
                    该方法返回一个新的字符串，该字符串值包含<span class="gjz">stringObject</span> 
                的一个子字符串，其内容是从<span class="gjz">start</span> 处到 <span class="gjz">stop-1 </span>处的所有字符，其长度为 <span class="gjz">stop</span> 减 <span class="gjz">start</span>。
                </li>
            </ol>
        </div>
        <div class="sy-exp-warp">
            <h1 class="t-h1">2，使用样例</h1>
            <div class="container-dec">
                <a href="http://www.hangge.com/blog/cache/detail_1887.html">原文地址</a>
            </div>
        </div>
    </section>
</template>
<style lang="scss" scoped>
    .weui-media-box__desc{
        color: #333;
    }
    .gjz{
        color: rgb(0, 128, 128);
        font-weight: bold;
        font-size: 17px;
    }
    .exp-warp{
        border-left: 3px solid #6ce26c !important;
        background-color: #f9f9f9;
        padding: 10px 0;
        padding-left: 10px;
        margin: 8px 0;
        code{
            color: #333;
        }
    }
    .param-warp{
        // background: #FEC600;
        background: #fdfddf;
        color: #333;
        padding: .6rem;
    }
    .t-h1{
        color: #333;
        font-size: 16px;
        margin: 8px 0;
    }
    .container-dec{
        background-color: #fff;
        padding: 8px;
        pre{
            color: blue;
        }
    }
    .dec-line{
        -moz-border-radius: 0 0 0 0 !important;
        -webkit-border-radius: 0 0 0 0 !important;
        background: none !important;
        border: 0 !important;
        bottom: auto !important;
        float: none !important;
        height: auto !important;
        left: auto !important;
        line-height: 1.5em !important;/*line-height: 1.1em !important;*/
        margin: 0 !important;
        outline: 0 !important;
        overflow: visible !important;
        padding: 1px 0 !important;/*padding: 0 !important;*/
        position: static !important;
        right: auto !important;
        text-align: left !important;
        top: auto !important;
        vertical-align: baseline !important;
        width: auto !important;
        box-sizing: content-box !important;
        font-family: "Consolas", "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important;
        font-weight: normal !important;
        font-style: normal !important;
        font-size: 13px !important;/*font-size: 1em !important;*/
        min-height: inherit !important;
        min-height: auto !important;
    }
</style>
