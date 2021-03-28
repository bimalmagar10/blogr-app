(() => {
	const modify = (e) => {
		e.target.classList.toggle("rotate");
		let el = e.target;
		el.closest(".header__nav-list").children[1].classList.toggle("opacity");
		// alert(el.closest(".header__nav-list").children[1]);
	};
	Array.from(document.querySelectorAll(".arrow-icon")).forEach(el => {
		el.addEventListener("click",modify)
	});
	const showMobileNav = (e) => {
		e.preventDefault();
		let imageName = e.target.getAttribute("src");
		if(imageName !== "../images/icon-close.svg") {
			e.target.setAttribute("src","../images/icon-close.svg");
		} else {
			e.target.setAttribute("src","../images/icon-hamburger.svg");
		}
		let mobileNavElement = document.querySelector(".mobile-nav");
		mobileNavElement.classList.toggle("show-mobile-nav");
	};
	const showMobileNavItems = (e) => {
		if(e.target.classList[0] === "js--mobile-nav"){
			let target = e.target;
			target.classList.toggle("rotate");
			target.parentNode.children[0].classList.toggle("toggle-color");
			target.closest(".mobile-nav__list").children[1].classList.toggle("show-mobile-nav-item");
		}
	};
	document.querySelector(".nav-hamburger").addEventListener("click",showMobileNav);
	// Array.from(document.querySelector(".mobile-nav__list")).forEach(el => {
	// 	el.addEventListener("click",showMobileNavItems);
	// })
	document.querySelector(".mobile-nav").addEventListener("click",showMobileNavItems);

	$("#animation-1").waypoint((direction) => {
          $("#animation-1").addClass("animate__animated animate__fadeInUp");
	},
	{
		offset:"500px"
	});
	
})();