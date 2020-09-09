window.addEventListener('DOMContentLoaded', () => {
  'use strict';
  
  //timer
  const countTimer = (deadline) => {
    const timerHours = document.querySelector('#timer-hours'),
          timerMinutes = document.querySelector('#timer-minutes'),
          timerSeconds = document.querySelector('#timer-seconds');

    const getTimeRemaind = () => {
      const  dateStop = new Date(deadline).getTime(),
            dateNow = new Date().getTime(),
            timeRenaining = (dateStop - dateNow) / 1000,
            seconds = Math.floor(timeRenaining % 60),
            minutes = Math.floor((timeRenaining / 60) % 60),
            hours = Math.floor((timeRenaining / 60 / 60));
            return {timeRenaining, seconds, minutes, hours};
    };
    
    const addZero = n => n < 10 ? '0' + n : n;

    const updateClock = () => {
      const timer = getTimeRemaind();

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
    menuItems = menu.querySelectorAll('ul>li'),
    menuLinks = menu.querySelectorAll('a[href*="#"]'),
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

    menuLinks.forEach(item => {
      item.addEventListener('click', () => {
        showScroll(event, item);
      });
    });

    menuBtn.addEventListener('click', menuHandler);
    closeBtn.addEventListener('click', menuHandler);
    menuItems.forEach(item => item.addEventListener('click', menuHandler));
    buttonSlow.addEventListener('click',() => {
      showScroll(event, buttonSlow);
    });
  };
  menuToggle();

  //popup
  const togglePopUp = () => {
    const popUp = document.querySelector('.popup'),
          popupBtn = document.querySelectorAll('.popup-btn'),
          popupClose = document.querySelector('.popup-close'),
          popupContent = document.querySelector('.popup-content');

    popupBtn.forEach(item => item.addEventListener('click', () =>{
      if(document.documentElement.clientWidth > 768) {
        popUp.style.display = 'block';
        let count = 2;
        const menuMove = () => {
          count++;
          popupContent.style.left = `${count}%`;
          if(count < 38) {
            setTimeout(menuMove, 1);
          }
        };
        menuMove();
      } else {
        popUp.style.display = 'block';
      }
    }));
    popupClose.addEventListener('click', () => {
      popUp.style.display = 'none';
      popupContent.style.left = '';
    });
  };
  togglePopUp();
});