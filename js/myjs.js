var device = {
	is_android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    is_blackberry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    is_iphone: function() {
        return navigator.userAgent.match(/iPhone/i);
    },
    is_ipad: function() {
        return navigator.userAgent.match(/iPad/i);
    },
    is_ipod: function() {
        return navigator.userAgent.match(/iPod/i);
    },
    is_ios: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    is_windows_phone: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
    is_mobile: function() {
        return (device.is_android() || device.is_blackberry() || device.is_ios() || device.is_windows_phone() );
    }
};
$(window).load(function() {
	$(window).on('scroll',function(){
		if($(window).scrollTop()==0){
			$('.resume_box .resume_name_pic').removeClass('active');
			$('.resume_prevjob_box .prevjob-img').removeClass('active');
			$('.resume_other_two_box .other_two_box').removeClass('active');
			$('.resume_about_box .img_about_box').removeClass('active');
			$('.resume_contact_box .about_me_box').removeClass('active');
			$('.skill_progress_bar').css('width',0);
		}
	})
	var preText=$('.prevjob-content').height();
	var bannerH=$('.banner-img-1').height();
	//$('.img-box').height(preText);
	$('.banner-img-box').css({'height':bannerH});
	$(window).resize(function(){
		var bannerHa=$('.banner-img-1').height();
		//$('.img-box').height(preText);
		$('.banner-img-box').css({'height':bannerHa});
		console.log(bannerHa)
	})
	$('.img_carousel_box').waypoint(function(){
		$('.resume_box .resume_name_pic').addClass('active');
	},{offset:'10%'})
	$('.resume_prevjob_box').waypoint(function(){
		$('.resume_prevjob_box .prevjob-img').addClass('active');
	},{offset:'10%'})
	$('.resume_other_two_box').waypoint(function(){
		$('.resume_other_two_box .other_two_box').addClass('active');
	},{offset:'30%'})

	$('.resume_about_box').waypoint(function(){
		$('.resume_about_box .img_about_box').addClass('active');
	},{offset:'10%'})

	$('.resume_about_box').waypoint(function(){
		$('.resume_about_box .img_about_box').addClass('active');
	},{offset:'10%'})
	$('.resume_contact_box').waypoint(function(){
		$('.resume_contact_box .about_me_box').addClass('active');
	},{offset:'70%'})

	var elmArr = [],p;
	$('.skill_progress_bar').each(function(i){
		p=$(this).attr('data-progress')
		elmArr.push(p);
	});
	$('.resume_skill_box').waypoint(function(){
		var barl=$('.skill_progress_bar');
		for(var i=0;i<barl.length;i++){
			barl.eq(i).css('width',elmArr[i])
			barl.eq(i).text(elmArr[i]);
		}
	},{offset:'30%'})
	if(device.is_mobile()){
		$('#scene').parallax();
		$('.card_rotate_col').on('click',function(){
			if($(this).hasClass('active')){
				$(this).removeClass('active');
			}else{
				$(this).addClass('active');
			}
		})
	}else{
		$('#scene').parallax({
			scalarX: 2,
			scalarY: 5,
		});
		$('.card_rotate_col').hover(function(){
			if($(this).hasClass('active')){
				$(this).removeClass('active');
			}else{
				$(this).addClass('active');
			}
		},function(){
			if($(this).hasClass('active')){
				$(this).removeClass('active');
			}else{
				$(this).addClass('active');
			}
		})
	}
});