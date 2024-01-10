//import Header from './scripts/components/Header.js';

//const header = new Header();

//console.log(header);

// Swiper hero
const swiperHero = new Swiper('.js-swiper-hero', {
	//slidesPerView: 1,
	direction: 'vertical',
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
});

// Swiper news
const swiperNews = new Swiper('.js-swiper-news', {
	slidesPerView: 1,
	spaceBetween: 30,
	breakpoints: {
		758: {
			slidesPerView: 2,
		},
		992: {
			slidesPerView: 3,
		},
	},

	pagination: {
		el: '.js-custom-pagination',
		clickable: true,
	},
});

console.log('test');
