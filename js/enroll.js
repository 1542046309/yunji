$(function(){
	$('.imglo').click(function(){
		$('#head').hide()
	})
});

	$(document).ready(function(){	

		$(".someone").bind("mouseenter",function () {
    			$('.hide').show();
				$(".someone").css("background","#FFFFFF");
		});

		$(".someone").bind("mouseleave",function () {
			iTimer = setTimeout(function(){
				$('.hide').hide();
				$(".someone").css("background","#F1F1F1");
			},2);
		});

		$(".hide").bind("mouseenter",function () {
    		clearTimeout(iTimer);
		});	

		$(".hide").mouseleave(function(){
			$('.hide').hide();
			$(".someone").css("background","#F1F1F1");
		})

	});
	
	
		$(document).ready(function(){	

		$(".sometwo").bind("mouseenter",function () {
    			$('.hide2').show();
				$(".sometwo").css("background","#FFFFFF");
		});

		$(".sometwo").bind("mouseleave",function () {
			iTimer = setTimeout(function(){
				$('.hide2').hide();
				$(".sometwo").css("background","#F1F1F1");
			},2);
		});

		$(".hide2").bind("mouseenter",function () {
    		clearTimeout(iTimer);
		});	

		$(".hide2").mouseleave(function(){
			$('.hide2').hide();
			$(".sometwo").css("background","#F1F1F1");
		})

	});
	//
	$(document).ready(function(){	

		$(".somefour").bind("mouseenter",function () {
    			$('.fourhide').show();
				$(".somefour").css("background","#FFFFFF");
		});

		$(".somefour").bind("mouseleave",function () {
			iTimer = setTimeout(function(){
				$('.fourhide').hide();
				$(".somefour").css("background","#F1F1F1");
			},2);
		});

		$(".fourhide").bind("mouseenter",function () {
    		clearTimeout(iTimer);
		});	

		$(".fourhide").mouseleave(function(){
			$('.fourhide').hide();
			$(".somefour").css("background","#F1F1F1");
			
		})

	});
	//
	
	$(document).ready(function(){	

		$(".somefive").bind("mouseenter",function () {
    			$('.fivehide').show();
				$(".somefive").css("background","#FFFFFF");
		});

		$(".somefive").bind("mouseleave",function () {
			iTimer = setTimeout(function(){
				$('.fivehide').hide();
				$(".somefive").css("background","#F1F1F1");
			},2);
		});

		$(".fivehide").bind("mouseenter",function () {
    		clearTimeout(iTimer);
		});	

		$(".fivehide").mouseleave(function(){
			$('.fivehide').hide();
			$(".somefive").css("background","#F1F1F1");
			
		})

	});
	//
	
	$(document).ready(function(){	

		$(".somethree").bind("mouseenter",function () {
    			$('.threehide').show();
			
		});

		$(".somethree").bind("mouseleave",function () {
			iTimer = setTimeout(function(){
				$('.threehide').hide();
				
			},2);
		});

		$(".threehide").bind("mouseenter",function () {
    		clearTimeout(iTimer);
		});	

		$(".threehide").mouseleave(function(){
			$('.threehide').hide();
			
			
		})

	});
	
	//

$(document).ready(function(){	

		$("#globals").bind("mouseenter",function () {
    			$('#global').show();
				
		});

		$("#globals").bind("mouseleave",function () {
			iTimer = setTimeout(function(){
				$('#global').hide();
				
			},2);
		});

		$("#global").bind("mouseenter",function () {
    		clearTimeout(iTimer);
		});	

		$("#global").mouseleave(function(){
			$('#global').hide();
			
			
		})
		
		$("#global a").hover(function(){
				$(this).css("color","#ed4242");
			
		});
		
		$("#global a").mouseleave(function(){
				$(this).css("color","#333");
			
		});

	});







$(function(){
	$('.phones').click(function(){
		$('#mailbox').css('display','none');
		$('#mailbox1').css('display','block');

		$(this).css({
			borderColor:"red"
		})
		console.log($(this).parent().siblings().children().first())
		$(this).parent().siblings().children().first().css({
			borderColor:"transparent"
		})
		
		
	})
	$('.meils').click(function(){
		$('#mailbox1').css('display','none');
		$('#mailbox').css('display','block');
		$(this).css({
			borderColor:"red"
		})
		console.log($(this).parent().siblings().children().first())
		$(this).parent().siblings().children().first().css({
			borderColor:"transparent"
		})
		
	})

//		$('#mailphone a').on('click',function(){
//			console.log($(this))
//			$(this).parent().siblings().children().first().css({
//		      borderColor:"transparent"
//		})
//			$(this).css('borderColor','red') 
//		});
});
