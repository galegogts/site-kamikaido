class MobileNavbar{
	constructor(mobileMenu, navList, navLinks,menuBonus,menuOut){
		this.mobileMenu	= document.querySelector(mobileMenu);
		this.navList 	= document.querySelector(navList);
		this.menuOut 	= document.querySelector(menuOut);
		this.navLinks 	= document.querySelectorAll(navLinks);
		this.menuBonus 	= document.querySelectorAll(menuBonus);
		this.activeClass = "active";
		this.handleClick = this.handleClick.bind(this);
	}
	animateLinks(){
		this.navLinks.forEach((link, index) => {
			link.style.animation
				? (link.style.animation = "")
				: (link.style.animation = `navLinkFade 0.5s ease forwards ${index / 10 + 0.3}s`)
		})
	}
	handleClick(){
		this.navList.classList.toggle(this.activeClass);
		this.mobileMenu.classList.toggle(this.activeClass);
		this.menuOut.classList.toggle(this.activeClass);
		this.menuBonus.forEach((bonus) => {
			bonus.classList.toggle(this.activeClass);
		})
		this.animateLinks();
	}
	addClickEvent(){
		this.mobileMenu.addEventListener("click", this.handleClick);
		this.menuOut.addEventListener("click", this.handleClick);
	}
	init(){
		if (this.mobileMenu) {
			this.addClickEvent();
		}
		return this;
	}
}
const mobileNavbar = new MobileNavbar(".mobile-menu",".cabecalho-menu",".cabecalho-menu-item",".menu-bonus",".menu-out")
mobileNavbar.init();
//------------------------------------------------------------------------------------------------------------------------------------------------
const nav = document.querySelector('.cabecalho');
window.addEventListener('scroll', function(event) { 
	if (window.scrollY >= 50) {
	    nav.classList.add('cabecalho-bg');
	} else {
	     nav.classList.remove('cabecalho-bg');
	}
});