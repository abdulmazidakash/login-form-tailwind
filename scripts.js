let mobile_icon = document.getElementById("mobile_icon");
let main_menu = document.getElementById("main_menu");

mobile_icon.addEventListener("click", () => {
	main_menu.classList.toggle('hidden');
})