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
    const form = document.getElementById('form3'),
        formInput = form.querySelectorAll('input');
    let target = event.target;
    
    if(target.classList.contains('popup-close')) {
      popUp.style.display = 'none';
      popupContent.style.left = '';
      formInput.forEach(item => item.style.border = '');
      form.reset();
    } else {
      target = target.closest('.popup-content');
      if(!target) {
        popUp.style.display = 'none';
      }
    }
  });
};

export default togglePopUp;