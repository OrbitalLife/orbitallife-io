document.addEventListener ('DOMContentLoaded', () => {
	let menuBtn = document.getElementById ('menu-button');
	let menuItems = document.getElementById ('nav-list');
	let menuIcon = menuBtn.firstChild;
	let dimmer = document.getElementById ('dimmer');
	if (!menuBtn || !menuItems) return;
	menuBtn.addEventListener ('click', () => {
		toggleMenu (menuItems, menuIcon, dimmer);
	});
	let listItems = menuItems.querySelectorAll ('li');
	listItems.forEach ((elem)=> {
		elem.addEventListener ('click', () => {
			if (menuItems.classList.contains ('showing')) {
				toggleMenu (menuItems, menuIcon, dimmer);
			}
		})
	});
	let toggleMenu = (menuItems, menuIcon, dimmer) => {
		menuItems.classList.toggle ('showing');
		if (menuIcon.classList.contains ('fa-bars')) {
			dimmer.style.display = 'block';
			menuIcon.classList.add ('fa-xmark');
			menuIcon.classList.remove ('fa-bars');
		} else {
			dimmer.style.display = 'none';
			menuIcon.classList.add ('fa-bars');
			menuIcon.classList.remove ('fa-xmark');
		}
	}
});