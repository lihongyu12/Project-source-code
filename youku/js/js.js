$(function() {
	
	$(".g-lunbo-img ul").children('li').eq(0).show()
	$(".g-lunbo-nav").children('ul').children('li').each(function(index,item){
		$('.top').eq(index).html(index+1);
		$(".g-lunbo-nav").children('ul').children('li').eq(index).hover(function(){
		$(this).addClass('fir').siblings('li').removeClass('fir')
		$(this).children('p').addClass('show')
		$(this).children('p').end().siblings('li').children('p').removeClass('show');

		$(".g-lunbo-img ul").children('li').eq(index).show().siblings('li').hide()
	})
	})
	$(document).scroll(function() {
		if($(document).scrollTop()>400){
			$(".g-hd").show(100)
			$(".g-hd").css('background','#fff')
			$('.g-hd').css( 'box-shadow', '0 1px 5px 0 rgba(0, 0, 0, .3)')
	    }else {
	    	$(".g-hd").css('background','transparent')
	    	$(".g-hd").css('box-shadow','none')

	    }

	})

	$(window).resize(function(){

		var nw = $('.g-menu').width();
		if(nw<1200){
		$(".g-menu-right ul").children('li').eq(0).css('display','none')
		$('.g-hd-menu').children('ul').children('li').eq(0).css('display','none')
		}
		else{
			$(".g-menu-right ul").children('li').eq(0).css('display','block')
			$('.g-hd-menu').children('ul').children('li').eq(0).css('display','block')
		}
		if(nw<1100){
			$(".g-menu-right ul").children('li').eq(1).css('display','none')
			$('.g-hd-menu').children('ul').children('li').eq(1).css('display','none')
		}
		else{
			$(".g-menu-right ul").children('li').eq(1).css('display','block')
			$('.g-hd-menu').children('ul').children('li').eq(1).css('display','block')
		}
		
	})
	
	// console.log(nw);
	 var a=0
	setInterval(function() {
		a++;
		$('.g-lunbo').mouseover(function(){
			
		$(".g-lunbo-nav").children('ul').children('li').eq(a).addClass('fir').siblings('li').removeClass('fir')
		$(".g-lunbo-nav").children('ul').children('li').eq(a).children('p').addClass('show')
		$(".g-lunbo-nav").children('ul').children('li').eq(a).children('p').end().siblings('li').children('p').removeClass('show');

		$(".g-lunbo-img ul").children('li').eq(a).show().siblings('li').hide()
	
		})
		
		
	},4000)


})