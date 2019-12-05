/**
 * simpScroller 模拟滚动条方法
 * @param {*} container 
 * @param {*} options 
 */
export const simpScroller = ((container, options)=>{
	// 根据是否支持touch方法确定事件的类型
	let _upSupportTouch = !((window.DocumentTouch && document instanceof window.DocumentTouch) || 'ontouchstart' in window) * 1
		, _event = {
		start: ["touchstart"][_upSupportTouch],
		move: ["touchmove"][_upSupportTouch],
		end: ["touchend"][_upSupportTouch]
	};
	
	// 滚动
	let _scroller = ((container, direction, params)=>{
		let key = "top", Key = "Top", size = "height", Size = "Height", pageKey = "pageY";
		if (direction == "horizontal") {
			key = "left";
			Key = "Left"
			size = "width";
			Size = "Width"
			pageKey = "pageX";
		}
		
		// 插入滚动条
		let scroller = null;
		if (params.hideScrollBar == false) {
			scroller = document.createElement("div");
			scroller.className = "scroller_" + direction;
			params.container.appendChild(scroller);
		}
		
		// 容器尺寸以及包含滚动的尺寸
		let sizeContainer = container["client" + Size]
			// 因为有滚动动态加载等情况出现，因此默认为0
			, sizeContainerWithScroll = 0;
		
		// 滚动条位置定位方法
		let fnPosScroll = function() {
			if (scroller == null) return;
			let sizeScroller = scroller.style[size].replace("px", "")
				, keyScroller = container["scroll" + Key] / (sizeContainerWithScroll - sizeContainer) * (sizeContainer - sizeScroller);

            // 边界溢出的修正
			if (sizeContainer - sizeScroller - keyScroller <= 0) {
                keyScroller = sizeContainer - sizeScroller;
            }
            // 设置回调（滚到顶部）
            if (keyScroller == 0){
                console.log('回到顶部')
            }
            // 设置回调（滚到底部）
            if (keyScroller == (sizeContainer - sizeScroller)){
                console.log('回到底部')
            }

			// 滚动条的定位 （top方式设置）
            //scroller.style[key] = keyScroller + "px";
            scroller.style.transform = ('translate(0px,'+(keyScroller)+'px)')
            scroller.style.webkitTransform = ('translate(0px,'+(keyScroller)+'px)')
            scroller.style.transitionDuration = ('1000ms')
            scroller.style.webkitTransitionDuration = ('translate(0px,'+(keyScroller)+'px)')
		};
		
		// 事件
		let pos = {};
		container.addEventListener('touchstart', function(event) {	
			sizeContainerWithScroll = this["scroll" + Size];
			pos[pageKey] = event.touches? event.touches[0][pageKey]: event[pageKey];
			pos[key] = this["scroll" + Key];
			document.moveFollow = true;
			if (scroller && sizeContainerWithScroll > sizeContainer) {
				scroller.style.opacity = 1;
				scroller.style[size] = (sizeContainer * sizeContainer / sizeContainerWithScroll) + "px";
				fnPosScroll();	
			}
		});	
		container.addEventListener('touchmove', function(event) {		
			if (_upSupportTouch == false || (document.moveFollow == true)) {
				// touch设备或有可移动标志
				this["scroll" + Key] = pos[key] + (pos[pageKey] - (event.touches? event.touches[0][pageKey]: event[pageKey]));
				// 自定义滚动条的位置
				fnPosScroll();
				// 回调
				params.onScroll.call(this, event);
			}	
			// 阻止默认滚动
			event.preventDefault();
		});
		container.addEventListener('touchend', function(event) {
			scroller && (scroller.style.opacity = 0);
		});
		
		if (_upSupportTouch == true) {
			document.addEventListener("mouseup", function() {
				this.moveFollow = false;	
			});	
		}
    });
    
    //初始化方法
	const _init = ((container, options)=>{
        options = options || {};
		// 确定参数
		let params = new Object({
			verticalScroll: true,
			horizontalScroll: false,
			hideScrollBar: false,
			onScroll: function() {}
		}), key;
		for (key in options) {
			params[key] = options[key];	
        }
		if (window.getComputedStyle(container).position == "static") {
			container.style.position = "relative";
		}

		// 子元素们
		let childerns = container.childNodes
		// 文档片段
		, fragment = document.createDocumentFragment();
			
		// 将子元素的集合放在文档片段中
		// 方便实现wrap效果
		[].slice.call(childerns).forEach(function(child) {
			fragment.appendChild(child);	
        });
		// wrap的父元素
		let wrap = document.createElement("div");
            wrap.style.height = "100%";
            wrap.style.width = "100%";
            wrap.style.overflow = "hidden";
            
            // 容器插入包裹元素
            container.appendChild(wrap);
            // 加载子元素集合文档片段，完成wrap包裹效果
            wrap.appendChild(fragment);
            params.container = container;
            
            if (params.verticalScroll == true) {
                _scroller(wrap, "vertical", params);	
            }
            if (params.horizontalScroll == true) {
                _scroller(wrap, "horizontal",  params);	
            }
    })
	_init (container, options)
})