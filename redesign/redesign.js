function hamburgerClick() {
	var dropdown = document.getElementById('small-screen-header-links');
	if (dropdown.className == "shown") {
		dropdown.classList.remove('shown');
	}
	else {
		dropdown.classList.add('shown');
	}
}