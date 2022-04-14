const menubtn = document.querySelector('.hamburger-button');
const navlist = document.querySelector('#navbar-list');
const closebtn = document.querySelector('.close-btn');

menubtn.addEventListener('click', () => {
  navlist.classList.toggle('show');
  closebtn.classList.toggle('show');
  menubtn.classList.toggle('hide');
});

closebtn.addEventListener('click', () => {
  navlist.classList.toggle('show');
  closebtn.classList.toggle('show');
  menubtn.classList.toggle('hide');
});
