(function(){
	//nav ��������ʾ/����
	$(".sear").mouseover(function(){
		$("#searchForm").show();
		$(this).mouseleave(function(){
			$("#searchForm").hide();
		});
	});
	$("#searchForm").mouseover(function(){
			$(this).show();
			$(this).mouseleave(function(){
				$("#searchForm").hide();
			});
	});
	//����ͷ��������ɫ
	var _top=$('#header')[0].clientHeight;
	$(window).scroll(function(){
		var scr_top=$(this).scrollTop();
		if(scr_top>_top){
			//ͷ������
			$("#header").css({
				background:'rgba(0,0,0,.6)'
			});
			//a��ǩ������ɫ
			$("#header a").css({
				color:'#eee'
			});

			//�����˵�������ɫ
			$(".secondMenu").css({
				background:'rgba(0,0,0,.6)'
			});
		}else{
			$("#header").css({
				background:'rgba(230, 249, 244,.8)'
			});
			$("#header a").css({
				color:'#6f6767'
			});
			$(".secondMenu").css({
				background:'rgba(108,108,108,0.1)'
			});
			$("#header .secondMenu a").css({
				color:'#6f6767;'
			});
		}
		
	});
	
})();