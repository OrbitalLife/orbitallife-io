document.addEventListener ('DOMContentLoaded', () => {
	// Show a go-to-top button when page scrolls
	let btn = document.getElementById('go-to-top');
	window.addEventListener ('scroll', () => {
		if (document.body.clientWidth >= 1024 && (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20)) {
			btn.style.display = 'flex';
		} else {
			btn.style.display = 'none';
		}
	});
	btn.addEventListener ('click', () => {
		document.body.scrollTop = 0;
		window.scrollTo ({ top: 0, behavior: 'smooth' })
	});
});