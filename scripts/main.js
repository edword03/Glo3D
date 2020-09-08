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
        menuHandler();
      } else {
        target = target.closest('li');
        if(target) {
          menuHandler();
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

    popUp.addEventListener('click', (event) => {
      let target = event.target;

      if(target.classList.contains('popup-close')) {
        popUp.style.display = 'none';
        popupContent.style.left = '';
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
    const tabHeader = document.querySelector('.service-header'),
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

  //slider
  const slider = () => {
    const slide = document.querySelectorAll('.portfolio-item'),
          btn = document.querySelectorAll('.portfolio-btn'),
          slider = document.querySelector('.portfolio-content'),
          dots = document.querySelector('.portfolio-dots');


          
    let currentSlide = 0,
    interval;
          
    for (let i = 0; i < slide.length; i++) {
      let dot = document.createElement('li');
      dot.classList.add('dot');
      dots.append(dot);
      dot = dots.querySelectorAll('.dot')[0].classList.add('dot-active');
    }

    const dot = dots.querySelectorAll('.dot');
    
    const prevSlide = (elem, index, strClass) => {
      elem[index].classList.remove(strClass);
    };
    
    const nextSlide = (elem, index, strClass) => {
      elem[index].classList.add(strClass);
    };
  
    const autoPlaySlide = () => {
      prevSlide(slide, currentSlide, 'portfolio-item-active');
      prevSlide(dot, currentSlide, 'dot-active');
      currentSlide++;
      if (currentSlide >= slide.length) {
        currentSlide = 0;
      }
      nextSlide(slide, currentSlide, 'portfolio-item-active');
      nextSlide(dot, currentSlide, 'dot-active');
    };

    const startSlide = (time = 3000) => {
      interval = setInterval(autoPlaySlide, time);
    };

    const stopSlide = () => {
      clearInterval(interval);
    };

    slider.addEventListener('click', (event) => {
      event.preventDefault();
      let target = event.target;

      if (!target.matches('.portfolio-btn, .dot')) {
        return;
      }

      prevSlide(slide, currentSlide, 'portfolio-item-active');
      prevSlide(dot, currentSlide, 'dot-active');

      if (target.matches('#arrow-right')) {
        currentSlide++;
      } else if (target.matches('#arrow-left')) {
        currentSlide--;
      } else if (target.matches('.dot')) {
        dot.forEach((elem, index) => {
          if (elem === target) {
            currentSlide = index;
          }
        });
      }

      if (currentSlide >= slide.length) {
        currentSlide = 0;
      }

      if (currentSlide < 0) {
        currentSlide = slide.length - 1;
      }
      nextSlide(slide, currentSlide, 'portfolio-item-active');
      nextSlide(dot, currentSlide, 'dot-active');
    });

    slider.addEventListener('mouseover', event => {
      if (event.target.matches('.portfolio-btn') || event.target.matches('.dot')) {
        stopSlide();
      }
    });

    slider.addEventListener('mouseout', event => {
      if (event.target.matches('.portfolio-btn') || event.target.matches('.dot')) {
        startSlide();
      }
    });

    startSlide(1500);

  };

  slider();

  //changing img
  const getDataImg = () => {
    const command = document.querySelector('.command');
    command.addEventListener('mouseover', (event) => {
      let target = event.target;
      if (target.matches('.command__photo')) {
        let img = target.src;
        target.src = target.dataset.img;
        command.addEventListener('mouseout', () => {
          if (target.matches('.command__photo')) {
            target.src = img;
          }
        });
      }
    });
  };
  getDataImg();

  //validation of inputs
  const calcCost = () => {
    const calcBlock = document.querySelector('.calc-block');
    calcBlock.addEventListener('input', (event) => {
      let target = event.target;
      if (target.matches('.calc-item')) {
        target.value = target.value.replace(/[^\d]/g, '');
      }
    });
  }; 
  
  calcCost();

  //calculator
  const calc = (price = 100) => {
    const calcBlock = document.querySelector('.calc-block'),
      calcType = document.querySelector('.calc-type'),
      calcSquare = document.querySelector('.calc-square'),
      calcCount = document.querySelector('.calc-count'),
      calcDay = document.querySelector('.calc-day'),
      totalValue = document.getElementById('total');

    const countSum = () => {
      let total = 0,
      countValue = 1,
      dayValue = 1;
      const typeValue = calcType.options[calcType.selectedIndex].value,
       squareValue = +calcSquare.value;

       if (calcCount.value > 1) {
        countValue += (calcCount.value - 1) / 10;
       }

       if (calcDay.value && calcDay.value < 5) {
        dayValue *= 2;
       } else if (calcDay.value && calcDay.value < 10) {
        dayValue *= 1.5;
       }

       if (typeValue && squareValue) {
         total = price * typeValue * squareValue * countValue * dayValue;
       }

      totalValue.textContent = total;
    };

      calcBlock.addEventListener('change', (event) => {
        const target = event.target;

        if (target.matches('select') || target.matches('input')) {
            countSum();
        }
      });

  };
  calc(100);
});