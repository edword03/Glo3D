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
          menu = document.querySelector('menu');

    const menuHandler = () => {
      menu.classList.toggle('active-menu');
    };

    menuBtn.addEventListener('click', menuHandler);
    menu.addEventListener('click', (event) => {
      let target = event.target;

      if (target.classList.contains('close-btn')) {
        menu.classList.toggle('active-menu');
      } else {
        target = target.closest('li');
        if(target) {
          menu.classList.toggle('active-menu');
        }
      }
    });
  };
  menuToggle();

  //popup
  const togglePopUp = () => {
    const popUp = document.querySelector('.popup'),
          popupBtn = document.querySelectorAll('.popup-btn'),
          popupContent = document.querySelector('.popup-content');

    popupBtn.forEach(item => item.addEventListener('click', () =>{
      if(document.documentElement.clientWidth > 768) {
        popUp.style.display = 'block';
        let count = 400;
        const menuMove = () => {
          count++;
          popupContent.style.left = `${count}px`;
          if(count < 700) {
            setTimeout(menuMove, 1);
          }
        };
        menuMove();
      } else {
        popupContent.style.left = '15%';
        popUp.style.display = 'block';
      }
    }));

    popUp.addEventListener('click', (event) => {
      let target = event.target;

      if(target.classList.contains('popup-close')) {
        popUp.style.display = 'none';
      } else {
        target = target.closest('.popup-content');
        if(!target) {
          popUp.style.display = 'none';
        }
      }
    });
  };
  togglePopUp();

  //tabs
  const toggleTab = (event) => {
    const serviceBlock = document.querySelector('.service-block'),
          tabHeader = document.querySelector('.service-header'),
          tab = tabHeader.querySelectorAll('.service-header-tab'),
          tabContent = document.querySelectorAll('.service-tab');
          
    const toggleTabContent = (index) => {
      for (let i = 0; i < tabContent.length; i++) {
        if (index === i) {
          tab[i].classList.add('active');
          tabContent[i].classList.remove('d-none');
        } else {
          tabContent[i].classList.add('d-none');
          tab[i].classList.remove('active');
        }
      }
    };

    tabHeader.addEventListener('click', event => {
      let target = event.target;
          target = target.closest('.service-header-tab');

        if (target) {
          tab.forEach((item, i) => {
            if (item === target) {
              toggleTabContent(i);
            }
          });
        }
    });
  };
  toggleTab();
});