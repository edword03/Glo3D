const countTimer = (deadline) => {
  const timerHours = document.querySelector('#timer-hours'),
        timerMinutes = document.querySelector('#timer-minutes'),
        timerSeconds = document.querySelector('#timer-seconds');

  let intervalID;

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
    
    timerHours.textContent = `${addZero(timer.hours)}`;
    timerMinutes.textContent = `${addZero(timer.minutes)}`;
    timerSeconds.textContent = `${addZero(timer.seconds)}`;
    
    if (timer.timeRenaining <= 0) {
      timerHours.textContent = addZero(0);
      timerMinutes.textContent = addZero(0);
      timerSeconds.textContent = addZero(0);
      clearInterval(intervalID);
    } 
  };
  
  updateClock();
  intervalID = setInterval(updateClock, 1000);
};

export default countTimer;