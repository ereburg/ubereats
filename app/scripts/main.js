document.addEventListener("DOMContentLoaded", () => {
	// Filter

	let input = document.querySelector('#search-input');
	// let	kitchen = document.querySelectorAll(".stores__description");
	
	input.addEventListener('keyup', () => {
		let filter, wrapper, store, name, kitchen, txtValue;
		filter = input.value.toUpperCase();
		wrapper = document.querySelector(".stores__wrapper");
		store = wrapper.querySelectorAll('.stores__item');
		
		for (let i = 0; i < store.length; i++) {
			name = store[i].querySelectorAll(".stores__heading")[0];
			kitchen = store[i].querySelectorAll(".stores__description")[0]; 
			txtValue = name.textContent || name.innerText || kitchen.textContent || kitchen.innerText; console.log(kitchen.textContent);
			if (txtValue.toUpperCase().indexOf(filter) > -1) {
				store[i].style.display = "";
			} else {
				store[i].style.display = "none";
			}
		}
	});

	// input.addEventListener('keydown', myFilterFunction());
});