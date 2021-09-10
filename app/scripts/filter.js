document.addEventListener("DOMContentLoaded", () => {

	// Фильтрация по кухням и названию ресторана
	let input = document.querySelector('#search-input');
	const wrapper = document.querySelector(".stores__wrapper"),
		store = wrapper.querySelectorAll('.stores__item');

	function check() {
		let counter = 0;
		let p = document.createElement('p');
		p.classList.add('added');
		p.textContent = 'Мы очень старались, но так ничего и не нашли... Но зато вы можете взять Евгения на работу :)';

		store.forEach(e => {
			if (e.hasAttribute('hidden', '')) {
				counter++;
			}
		});

		let newEl = document.querySelector('.added');

		if (counter < store.length && wrapper.contains(newEl)) {
			newEl.remove();
		}
		else if (counter >= store.length && !wrapper.contains(newEl)) {
			wrapper.append(p);
		}
	}

	input.addEventListener('keyup', () => {
		let filter, name, kitchen;
		filter = input.value.toUpperCase();

		for (let i = 0; i < store.length; i++) {
			name = store[i].querySelector(".stores__heading");
			kitchen = store[i].querySelector(".stores__kitchens");
			const storeText = name.textContent || name.innerText,
				kitchenText = kitchen.textContent || kitchen.innerText,
				checkStore = storeText.toUpperCase().indexOf(filter) > -1,
				checkKitchen = kitchenText.toUpperCase().indexOf(filter) > -1;

			if (checkStore || checkKitchen) {
				store[i].removeAttribute('hidden', '');
				check();
			} else {
				store[i].setAttribute('hidden', '');
				check();
			}
		}
	});
});