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
	
	//
	$(function(){
		$('#dele').click(function(){
			$('.piao').hide()
		})
	})
//实现商品的添加和减少的功能;
$(document).ready(function(){
//获得文本框对象
    var t = $("#nn");
//初始化数量为1,并失效减
    $('.n1').attr('disabled',true);
    //数量增加操作
    $(".n2").click(function(){
        // 给获取的val加上绝对值，避免出现负数
        t.val(Math.abs(parseInt(t.val()))+1);
        $("#zongjia").html(Number($("#nn").val())*Number($("#danjia").html()))
        if (parseInt(t.val())!=1){
            $('.n1').attr('disabled',false);

        };
    })
    //数量减少操作
    $(".n1").click(function(){
    	if($(this).next().val() <= 1){
//  		alert("不能为零！");
    		return;
    	}
        t.val(Math.abs(parseInt(t.val()))-1);
        $("#zongjia").html(Number($("#nn").val())*Number($("#danjia").html()))
        if (parseInt(t.val())==1){
            $('.n1').attr('disabled',true);
        };
    })
});

jQuery.fn.extend({
    "checkAll":function (isChecked) {
        //this是jQuery对象
        this.each(function () {
            this.checked = isChecked;
        })
    },

    "uncheck":function () {
        //this是jQuery对象
        this.each(function () {
            this.checked = !this.checked;
        })
    }
});

//主函数
$(function(){
    $("#checkedAllId").click(function () {
        $("#list :checkbox").checkAll(this.checked);
    });


    $("#btnUnCheckId").click(function () {
        $("#list :checkbox").uncheck();
    });
});