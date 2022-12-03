// header
// const header = document.querySelector('.header');
// const main__timetable = document.querySelector('.main__timetable');
// const headerHeight = header.offsetHeight;
// const main__timetableHeight = main__timetable.offsetHeight;
// let lastScrollTop = 0;

// window.addEventListener('scroll', () => {
//     let scrollDistance = window.scrollY;
    
//     if (scrollDistance > lastScrollTop) {
//         header.classList.remove('header__fixed');
//         main__timetable.style.marginTop = null;
//     }else {
//         header.classList.add('header__fixed');
//         main__timetable.style.marginTop = `${headerHeight}px`;
//     }

//     if (scrollDistance === 0) {
//         header.classList.remove('header__fixed');
//         main__timetable.style.marginTop = null;
//     }

//     lastScrollTop = scrollDistance;
// });

// eyes
document.querySelector('body').addEventListener('mousemove', eyeball)
function eyeball(){
    const eye = document.querySelectorAll('.eye');
    eye.forEach(function(eye){
        let x = (eye.getBoundingClientRect().left) + (eye.clientWidth / 2);
        let y = (eye.getBoundingClientRect().top) + (eye.clientHeight / 2);

        let radian = Math.atan2(event.pageX - x,event.pageY - y);
        let rotation = (radian * (180/Math.PI) * -1) + 270;

        eye.style.transform = "rotate("+rotation+"deg)";
    });
};

// contacts page
jQuery(document).ready(function() {
	// /* How to Handle Hashtags */
	jQuery(window).hashchange(function(){
		var hash = location.hash;
		jQuery('a[href='+hash+']').trigger('click');
	});
	jQuery('section.content.hide').hide();
	/* Main Navigation Clicks */
	jQuery('.info__nav ul li a').click(function() {
		var link = jQuery(this).attr('href').substr(1);
		
		if ( !jQuery('section.content.show, section#' + link).is(':animated') ) {
			jQuery('.info__nav ul li a').removeClass('active'); //remove active		
			jQuery('section.content.show').addClass('show').animate({'opacity' : 0}, {queue: false, duration: 500,
				complete: function() {
					jQuery('section.content.show').hide();
					jQuery('a[href="#'+link+'"]').addClass('active'); // add active
					jQuery('section#' + link).show();
					jQuery('section#' + link).addClass('show').animate({'opacity' : 1}, {queue: false, duration: 500});	
				}
			});
		}
	});

});

// anchor without link change

$(function(){
    $(".info__nav, .info__link, logo").on("click","a", function (event) {
		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();

		//забираем идентификатор бока с атрибута href
		var id  = $(this).attr('href'),

		//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top;
		
		//анимируем переход на расстояние - top за 1500 мс
		$('body,html').animate({scrollTop: top}, 1000);
	});
});


// menu-mobile
const navBtn = document.querySelector('.menu-icon-wrapper');
const mobileNav = document.querySelector('.header__inner');
const menuIcon = document.querySelector('.menu-icon');


navBtn.onclick = function(){
	mobileNav.classList.toggle('menu-mobile');
    menuIcon.classList.toggle('menu-icon-active');
};

// menuInfo.onclick = function(){
// 	mobileNav.classList.remove('menu-mobile');
//     menuIcon.classList.toggle('menu-icon-active');
// };
// menuChar.onclick = function(){
// 	mobileNav.classList.remove('menu-mobile');
//     menuIcon.classList.toggle('menu-icon-active');
// };
// menuPrice.onclick = function(){
// 	mobileNav.classList.remove('menu-mobile');
//     menuIcon.classList.toggle('menu-icon-active');
// };


// document.querySelector('.menu-icon-wrapper').onclick = function(){
//     document.querySelector('.menu-icon').classList.toggle('menu-icon-active');
// };
