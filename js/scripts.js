function init() {

	//Section Home
	var tmlHome = new TimelineMax();
	tmlHome.to('#home .bg', 1, 	{ y:'50%', ease:Linear.easeNone });

	var sceneHome = new ScrollMagic.Scene({ triggerHook:'onLeave', triggerElement:'#home', duration:'100%' });
	sceneHome.setTween(tmlHome);
	//sceneHome.addIndicators();

	//Section About
	var tmlAbout = new TimelineMax();
	tmlAbout.fromTo('#about .bg', 1, { y:'-50%' }, { y:'50%', ease:Linear.easeNone }, 0);

	var sceneAbout = new ScrollMagic.Scene({ triggerHook:'onCenter', triggerElement:'#about', offset:-($(window).height()*.5), duration:'200%' });
	sceneAbout.setTween(tmlAbout);
	//sceneAbout.addIndicators();

	//Section Contact
	var tmlContact = new TimelineMax();
	tmlContact.set('#contact .bg',		{ y:'-50%' }, 0);
	tmlContact.to('#contact .bg', 1, 	{ y:'0%', ease:Linear.easeNone }, 0);

	var sceneContact = new ScrollMagic.Scene({ triggerHook:'onEnter', triggerElement:'#contact', duration:'100%' });
	sceneContact.setTween(tmlContact);
	//sceneContact.addIndicators();

	//Controller
	var controller = new ScrollMagic.Controller();
	controller.addScene(sceneHome);
	controller.addScene(sceneAbout);
	controller.addScene(sceneContact);
}

//Navigation
var ScrollTop = { posY:0 };
$("nav button").click(function( pEvt ) {
	pEvt.preventDefault();
	var id = $(this).attr('data-id');
	var posY = $('#' + id).position().top;
	TweenMax.to(ScrollTop, 1.25, { posY:posY, ease:Cubic.easeInOut, onUpdate:function(){ $('html, body').scrollTop(ScrollTop.posY) } });
});
$(window).scroll(function(pEvt) {
	ScrollTop.posY = $(window).scrollTop();
});

$(window).ready(init);

var navigate = (function() {
	$('.dd').toggle();
	$('.dd_btn').click(function() {
		var dataName = $(this).attr('data-name');
		$('.dd').hide();
		$('.' + dataName).toggle();
	});
})();
