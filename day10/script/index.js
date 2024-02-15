window.addEventListener("scroll", (ev) => {
	let scrollY = window.scrollY;
	let aboutSec = document.getElementById("about");
	let servicesSec = document.getElementById("services");
	console.log(
		servicesSec.offsetTop,
		scrollY,
		window.screen.height - aboutSec.offsetTop + aboutSec.scrollHeight
	);

	if (scrollY >= window.screen.height - aboutSec.offsetTop) {
		aboutSec.querySelector(".slide-left").classList.add("show");
		aboutSec.querySelector(".slide-right").classList.add("show");
	} else {
		aboutSec.querySelector(".slide-left").classList.remove("show");
		aboutSec.querySelector(".slide-right").classList.remove("show");
	}

	if (
		scrollY >=
		window.screen.height - aboutSec.offsetTop + aboutSec.scrollHeight
	) {
		servicesSec.querySelector(".slide-left").classList.add("show");
		servicesSec.querySelector(".slide-right").classList.add("show");
		servicesSec.querySelector(".fade-in").classList.add("show");
	} else {
		servicesSec.querySelector(".slide-left").classList.remove("show");
		servicesSec.querySelector(".slide-right").classList.remove("show");
		servicesSec.querySelector(".fade-in").classList.remove("show");
	}
});