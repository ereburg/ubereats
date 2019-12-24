document.addEventListener("DOMContentLoaded", () => {
  'use strict';
  const page = document.querySelector('.page');
  const authBtn = document.querySelector('.authorization__button');
  const loginModal = document.querySelector('.login');
  const loginForm = document.querySelector('.login__form');

  const pageToggle = () => {
    page.classList.toggle('page--modal');
  };

  const loginModalToggle = () => {
    loginModal.classList.toggle('login--hide');
  };

  authBtn.addEventListener('click', (e) => {
    e.preventDefault(e);

    pageToggle();
    loginModalToggle();
  });

  loginModal.addEventListener('click', e => {
    let target = e.target;
    let its_form = target == loginForm || loginForm.contains(target);
    let modal_is_active = page.classList.contains('page--modal');

    if (!its_form && modal_is_active) {
      pageToggle();
      loginModalToggle();
    }
  });
});