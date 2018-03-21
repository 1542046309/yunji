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
//邮箱正则
$(function(){
	var phoneck1 = false;
    $("#hi1").blur(function(){
        phone1();
    })
    function phone1(){
        var regPhone1 = /^\w+@\w+\.(com|cn|net|cc|com\.cn)$/;  ////若干个数字字母下划线开头，紧接着是@,紧接着若干个数字字母下划线，紧接着是 . 紧接着com，或者net，或者cn
        if (!regPhone1.test($("#hi1").val())) {
            $(".rr1").html("邮箱格式不正确");
            $(".rr1").show()
        }else{
            phoneck1 = true;
            $(".rr1").html("")
        }
    }

})

var passw1 = false;
    $("#hi2").blur(function(){
        phonepass1();
    })
    function phonepass1(){
        var regPhone1 = /^[\w]{6,20}$/;  //6-20位
        if (!regPhone1.test($("#hi2").val())) {
            $(".rr2").html("密码格式不正确")
            $(".rr2").show()
        }else{
            passw1 = true;
            $(".rr2").html("")
        }
    }

$(function(){
	var passa1 = false;
	$("#hi3").blur(function(){
        pass1();
    })
	function pass1(){
		if($("#hi2").val() != $("#hi3").val()){
			$('.rr3').show();
			$(".rr3").html("密码不正确")
		}else{
            passa1 = true;
            $(".rr3").html("")
        }
	}
	
})




//手机号验证
$(function(){
	var phoneck = false;
    $("#phonet").blur(function(){
    	console.log(1)
        phone();
    })
    function phone(){
        var regPhone = /^1(3|4|5|7|8|9)\d{9}$/;  //一共十一位数，1开头，后面是十位数字
        if (!regPhone.test($("#phonet").val())) {
            $(".ff1").html("手机格式不正确");
            $(".ff1").show()
        }else{
            phoneck = true;
            $(".ff1").html("")
        }
    }

})
var passw = false;
    $("#phonet1").blur(function(){
        phonepass();
    })
    function phonepass(){
        var regPhone = /^[\w]{6,20}$/;  //6-20位
        if (!regPhone.test($("#phonet1").val())) {
            $(".ff2").html("密码格式不正确")
            $(".ff2").show()
        }else{
            passw = true;
            $(".ff2").html("")
        }
    }
$(function(){
	var passa = false;
	$("#phonet2").blur(function(){
        pass();
    })
	function pass(){
		if($("#phonet1").val() != $("#phonet2").val()){
			$('#usermi').show();
			$("#usermi").html("密码不正确")
		}else{
            passa = true;
            $("#usermi").html("")
        }
	}
	
})
