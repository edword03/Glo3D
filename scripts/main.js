window.addEventListener('DOMContentLoaded', () => {
  'use strict';
  
  //timer
  const countTimer = (deadline) => {
    const timerHours = document.querySelector('#timer-hours'),
          timerMinutes = document.querySelector('#timer-minutes'),
          timerSeconds = document.querySelector('#timer-seconds');

    const getTimeRemaind = () => {
      let  dateStop = new Date(deadline).getTime(),
            dateNow = new Date().getTime(),
            timeRenaining = (dateStop - dateNow) / 1000,
            seconds = Math.floor(timeRenaining % 60),
            minutes = Math.floor((timeRenaining / 60) % 60),
            hours = Math.floor((timeRenaining / 60 / 60));
            return {timeRenaining, seconds, minutes, hours};
    };
    
    const addZero = n => n < 10 ? '0' + n : n;

    const updateClock = () => {
      let timer = getTimeRemaind();

      const changeValueTimer = () => {
        timerHours.textContent = `${addZero(timer.hours)}`;
        timerMinutes.textContent = `${addZero(timer.minutes)}`;
        timerSeconds.textContent = `${addZero(timer.seconds)}`;
      };

      if (timer.timeRenaining > 0) {
        changeValueTimer();
      } else {
        timerHours.textContent = addZero(0);
        timerMinutes.textContent = addZero(0);
        timerSeconds.textContent = addZero(0);
      }

    };
    setInterval(updateClock, 1000);
  };

  countTimer('23 september 2020');

  //menu
  const menuToggle = () => {
    const menuBtn = document.querySelector('.menu'),
    menu = document.querySelector('menu'),
    closeBtn = document.querySelector('.close-btn'),
    menuItems = menu.querySelectorAll('ul>li');

    const closeMenu = () => {
      menu.style.transform = 'translateX(-100%)';
      menu.style.left = 0;
    };
    const menuHandler = () => {
      if (document.documentElement.clientWidth > 768) {
        let count = 800;
        const menuMove = () => {
          count++;
          menu.style.left = `${count}px`;
          if(count < 922) {
            setTimeout(menuMove, 1);
          }
        };
        menuMove();
      } else {
        if (!menu.style.transform || menu.style.transform === 'translateX(-100%)'){
          menu.style.transform = 'translateX(0)';
        } else {
          menu.style.transform = 'translateX(-100%)';
        }
      }
    };

    menuBtn.addEventListener('click', menuHandler);
    closeBtn.addEventListener('click', closeMenu);
    menuItems.forEach(item => item.addEventListener('click', closeMenu));
  };
  menuToggle();

  //popup
  const togglePopUp = () => {
    const popUp = document.querySelector('.popup'),
          popupBtn = document.querySelectorAll('.popup-btn'),
          popupClose = document.querySelector('.popup-close');

    popupBtn.forEach(item => item.addEventListener('click', () => popUp.style.display = 'block'));
    popupClose.addEventListener('click', () => popUp.style.display = 'none');
  };
  togglePopUp();
});