document.addEventListener("DOMContentLoaded", () => {
	
	// Фильтрация по кухням и названию ресторана
	let input = document.querySelector('#search-input');
	
	input.addEventListener('keyup', () => {
		let filter, wrapper, store, name, kitchen, txtValue;
		filter = input.value.toUpperCase();
		wrapper = document.querySelector(".stores__wrapper");
		store = wrapper.querySelectorAll('.stores__item');
		
		for (let i = 0; i < store.length; i++) {
			name = store[i].querySelectorAll(".stores__heading")[0];
			kitchen = store[i].querySelectorAll(".stores__kitchens")[0]; 
			txtValue = name.textContent || name.innerText;
			txtValue2 = kitchen.textContent || kitchen.innerText;
			if (txtValue.toUpperCase().indexOf(filter) > -1) {
				store[i].style.display = "";
			} else if (txtValue2.toUpperCase().indexOf(filter) > -1) {
				store[i].style.display = "";
			} else {
				store[i].style.display = "none";
			}
		}
	});
});