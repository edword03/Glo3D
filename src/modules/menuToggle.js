const menuToggle = () => {
  const menuBtn = document.querySelector('.menu'),
        menu = document.querySelector('menu'),
        buttonSlow = document.querySelector('main>a');

  const menuHandler = () => {
    menu.classList.toggle('active-menu');
  };

  const showScroll = (event, target) => {
    event.preventDefault();
        const blockID = target.getAttribute('href').substring(1);
        document.getElementById(blockID).scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
  };

  menuBtn.addEventListener('click', menuHandler);
  menu.addEventListener('click', (event) => {
    let target = event.target;

    if (target.classList.contains('close-btn')) {
      menuHandler();
    } else {
      target = target.closest('li');
      if(target) {
        menuHandler();
      }
    }

    target = event.target;
    if (target.matches('a[href*="#"]') && !target.matches('.close-btn')) {
      showScroll(event, target);
    }
  });

  buttonSlow.addEventListener('click', () => {
    showScroll(event, buttonSlow);
  });
};

export default menuToggle;