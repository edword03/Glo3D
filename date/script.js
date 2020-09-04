'use strict';
const currentTime = () => {
  const day = document.querySelector('#day'),
        today = document.querySelector('#today'),
        currentTime = document.querySelector('#current-time'),
        timeUntilNY = document.querySelector('#time-until-NY');
  
  const date = new Date();
  const addZero = n => n < 10 ? '0' + n : n;
    if(date.getHours() < 12 && date.getHours() > 4){
      day.textContent = `Доброе утро`;
    } else if (date.getHours() >= 12 && date.getHours() < 18) {
      day.textContent = `Добрый день`;
    } else if (date.getHours() > 18){
      day.textContent = `Добрый вечер`;
    } else if (date.getHours() >= 0 && date.getHours() < 4) {
      day.textContent = `Доброй ночи`;
    }
    
  today.textContent = `Сегодня: ${date.toLocaleString('ru', {weekday: 'long'})}`;

  let getCurrentTime = () => {
    const getDate = new Date(),
          getHours = getDate.getHours(),
          getMinutes = getDate.getMinutes(),
          getSeconds = getDate.getSeconds();

    currentTime.textContent =`Текущее время: ${addZero(getHours)}:${addZero(getMinutes)}:${addZero(getSeconds)} PM`;
    setInterval(getCurrentTime, 1000);
  };

  const getTimeUntilNY = () => {
    const date = new Date('31 December 2020').getTime(),
          currentTime = new Date().getTime(),
          timeLeft = Math.floor(((date - currentTime) / 1000) / 60 / 60 / 24);
    let days;
    const  declOfNum = (number, titles) => {  
      let cases = [2, 0, 1, 1, 1, 2];  
      return titles[ (number%100>4 && number%100<20)? 2 : cases[(number%10<5)?number%10:5] ];  
  };
    const title = declOfNum(timeLeft, ['день', 'дня', 'дней']);
    timeUntilNY.textContent = `До нового года осталось ${timeLeft} ${title}`;
  };

  getCurrentTime();
  getTimeUntilNY();
};

currentTime();