		$(function(){
			
			new WOW().init();
			var _nav_title = $("nav ul li");
			var _pic_left = $("header div.logo_left");
			var _pic_right = $("header div.logo_right");
			var _img_back = $("header .header_back img");
			var _index = _img_back.length-1;
			var timer = null;
			_nav_title.hover(
				function(){
					var $r = $(this);
					timer = setTimeout(function(){
					$r.find(".nav_title").css("border","2px solid #c0afe6");
					$r.find(".subMenu").slideDown();
					},100);
				},
				function(){
					clearTimeout(timer);
					$(this).find(".nav_title").css("border","2px solid transparent");
					$(this).find(".subMenu").slideUp();
				}
			)
			
			_pic_right.click(
				function(){
					_index++;
					if(_index >= _img_back.length){
						_index = 0;
					}
					_img_back.eq(_index).fadeIn(500).siblings().fadeOut(500);
				}
			)

			_pic_left.click(
				function(){
					_index--;
					if(_index < 0){
						_index = _img_back.length-1;
					}
					_img_back.eq(_index).fadeIn(500).siblings().fadeOut(500);
				}
			)
			
		})