
$(window).scroll( () => {
	var self = $(this);
	var menu = $('.menu');
	var body = $('body');
	var menuHeight = menu.prop('offsetHeight');
	if(self.scrollTop() > self.height() - menuHeight){
		menu.addClass('fixed');
		body.css({paddingTop: menuHeight + 'px'});
	}else{
		menu.removeClass('fixed');
		body.css({paddingTop: 'initial'});
	}
});