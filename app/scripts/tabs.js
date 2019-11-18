document.addEventListener("DOMContentLoaded", () => {
	// Вкладки
	const tab = document.querySelectorAll('.tab-button');

	tab.forEach((trigger) => {
		trigger.addEventListener('click', function () {
			
			let id = this.getAttribute('data-tab'),
				content = document.querySelector('.tabcontent[data-tab="' + id + '"]'), 
				activeTrigger = document.querySelector('.tab-button.active'), 
				activeContent = document.querySelector('.tabcontent.active');

			activeTrigger.classList.remove('active');
			trigger.classList.add('active');

			activeContent.classList.remove('active');
			content.classList.add('active');
		});
	});
});