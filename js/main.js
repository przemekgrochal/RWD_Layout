var HamburgerToggle = {

	hamburger: document.getElementById("id-hamburger"),

	changeStyleHamburger: function(e) {
		HamburgerToggle.hamburger.classList.toggle("change");
	},

	initEvent () {
		this.hamburger.addEventListener("click", this.changeStyleHamburger, false);
	}
}

var NavBarScroll = {
	
	changeStyleNavBar: function(e) {
		var navBar = document.getElementById("nav");
		if(window.pageYOffset >= 50) {
			navBar.style.backgroundColor = "black";
		} else {
			navBar.style.backgroundColor = "transparent";
		}
	},

	init () {
		window.addEventListener("scroll", this.changeStyleNavBar, false);
	}
}


var Navigation = {

	nav: document.getElementById("nav"),
	ul: document.getElementById("navbar-ul"),

	changeStyleMenu: function(e) {
		var nav = Navigation.nav;
		var ul = Navigation.ul;
	
		if(!document.querySelector('navbar-open')) {
			nav.classList.toggle('navbar-open');
			ul.classList.toggle('ul-open');
		} 
	},

	init () {
		HamburgerToggle.hamburger.addEventListener("click", this.changeStyleMenu, false);
	}
}

var ScrollRevealAnimate = {
  
    showAnimate: function() {
        window.sr = ScrollReveal();
        sr.reveal('.description-heading', {
            reset: false,
            delay: 500,
            rotate: { x: 100, y: 100, z: 0 },
            duration: 1000
        });
        sr.reveal('.description-content', {
            reset: false,
            delay: 300,
            distance: '50px',
        });
        sr.reveal('.about-info', {
            reset: false,
            delay: 200,
            distance: '50px',
        });
        sr.reveal('.solution-right-container', {
            reset: false,
            delay: 200,
            distance: '50px',
        });
        sr.reveal('.offer-heading', {
            reset: false,
            delay: 200,
            distance: '50px',
        });
        sr.reveal('.offer-img-item', {
            reset: false,
            delay: 500,
            rotate: { x: 100, y: 100, z: 0 },
            duration: 1000
        });
        sr.reveal('.news-items', {
            reset: false,
            delay: 500,
            rotate: { x: 100, y: 100, z: 0 },
            duration: 1000
        });
        sr.reveal('.footer-container', {
             reset: false,
            delay: 200,
            distance: '60px',
        });
    }
}

document.addEventListener("DOMContentLoaded", function() {
	HamburgerToggle.initEvent();
	NavBarScroll.init();
	Navigation.init();
	ScrollRevealAnimate.showAnimate();
});