(function($){
	// 手机注册
	$('.userName').blur(function(){
		var reg = /^[0-9]{11}$/g;
		if($('.userName').val() === ""){
			$('.loginLeft .msg').html('请输入用户名！').css('color','red');
			} else if (reg.test($('.userName').val())){
				$('.loginLeft .msg').html('');
			  }	else{
					$('.loginLeft .msg').html('请输入正确的手机号！').css('color','red');
				}
	});
	// 设置密码
		$('.setPassword').blur(function(){
		var reg = /^[\w]{6,16}$/g;
		if($('.setPassword').val() === ""){
			$('.loginLeft .msg').html('请设置密码！').css('color','red');
			} else if (reg.test($('.setPassword').val())){
				$('.loginLeft .msg').html('');
			  }	else{
					$('.loginLeft .msg').html('请设置6-16位密码，且只能是数字，字母，下划线！').css('color','red');
				}
	});

	// 确认密码
		$('.affirmPassword').blur(function(){
			if($('.affirmPassword').val() === ''){
				$('.loginLeft .msg').html('请确认密码！').css('color','red');
			} else if($('setPassword').val() === $('affirmPassword').val()){
				$('.loginLeft .msg').html('');
			 } else{
				$('.loginLeft .msg').html('两次输入的密码不一致，请重新输入！').css('color','red');
			   }
		});


	//检测服务条款
	$('.checkbox').click(function(){
		if($('.checkbox').is(':checked')){
			$
		}
	});

})(jQuery);