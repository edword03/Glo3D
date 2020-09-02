'use strict';
const currentTime = () => {
  const day = document.querySelector('#day'),
        today = document.querySelector('#today'),
        currentTime = document.querySelector('#current-time'),
        timeUntilNY = document.querySelector('#time-until-NY');
  
  const date = new Date();
  
  const timeDay = () => {
    if(date.getHours() < 12 ){
      day.insertAdjacentHTML('afterbegin', `Доброе утро`);
    } else if (date.getHours() >= 12 && date.getHours() < 18) {
      day.insertAdjacentHTML('afterbegin', `Добрый день`);
    }
  };

  const getToday = () => {
    if (date.getDay() === 1) {
      today.insertAdjacentHTML('afterbegin', `Сегодня: Понедельник`);
    } else if(date.getDay() === 2) {
      today.insertAdjacentHTML('afterbegin', `Сегодня: Вторник`);
    } else if (date.getDay() === 3) {
      today.insertAdjacentHTML('afterbegin', `Сегодня: Среда`);
    } else if (date.getDay() === 4) {
      today.insertAdjacentHTML('afterbegin', `Сегодня: Четверг`);
    } else if (date.getDay() === 5) {
      today.insertAdjacentHTML('afterbegin', `Сегодня: Пятница`);
    } else if (date.getDay() === 6) {
      today.insertAdjacentHTML('afterbegin', `Сегодня: Суббота`);
    } else if(date.getDay() === 0 ) {
      today.insertAdjacentHTML('afterbegin', `Сегодня: Воскресенье`);
    }
  };

  let getCurrentTime = () => {
    let getDate = new Date();
    currentTime.innerHTML = (getDate.getHours() + ':' + getDate.getMinutes() + ':' + getDate.getSeconds());
    setInterval(getCurrentTime, 1000);
  };

  const getTimeUntilNY = () => {
    const date = new Date('31 December 2020').getTime(),
          currentTime = new Date().getTime(),
          timeLeft = Math.floor(((date - currentTime) / 1000) / 60 / 60 / 24);

    timeUntilNY.insertAdjacentHTML('afterbegin', `До нового года осталось ${timeLeft} дней`);
  };

  timeDay();
  getToday();
  getCurrentTime();
  getTimeUntilNY();
};
currentTime();