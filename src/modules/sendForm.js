const sendForm = () => {
  const errorMessage = 'Что-то пошло не так...',
    loadMessage = 'Загрузка...',
    successMessage = 'Спасибо! Мы скоро с вами свяжемся!';

    const forms = document.querySelectorAll('form');
    const statusMessage = document.createElement('div');
    statusMessage.style.cssText = 'font-size: 2 rem;';
    
    const validForm = (forms) => {
      forms.addEventListener('input', (event) => {
        let target = event.target;
        if (target.matches('.form-phone')) {
          target.value = target.value.replace(/[^\d+]/g, '');
          if (target.value[0] === '+') {
            target.value.slice(0, 12);
          } 
          if (target.value[0] !== '+') {
            target.value.slice(0, 11);
          }
        }
        if (target.matches('.form-name')|| target.matches('#form2-message') || target.matches('#form2-name')) {
          target.value = target.value.replace(/[^А-я\s]/g, '');
        }
      });
    }; 

  forms.forEach((item) => {
    validForm(item);
    item.addEventListener('submit',  e => formSend(e, item));
  });

  const formSend = (e, form, phoneValue) => {
    e.preventDefault();
    phoneValue = form.querySelector('.form-phone');

      if ((phoneValue.value.slice(0, 1) === '+' && phoneValue.value.length === 12) ||
                (phoneValue.value.slice(0, 1) === '8' && phoneValue.value.length === 11)){
        statusMessage.textContent = loadMessage;
        form.appendChild(statusMessage);
    
        if (form.matches('#form3')) {
          statusMessage.style.cssText = `color: #fff`;
        }

        const formData = new FormData(form);
        let body = {};
        formData.forEach((item, key) => {
          body[key] = item;
        });

        sendData(body)
          .then((response) => {
            if (response.status !== 200) {
              throw new Error('status network in not 200');
            }
            statusMessage.textContent = successMessage;
          }).catch((error) => {
            statusMessage.textContent = errorMessage;
            console.error(error);
          });

        const removeStatus = () => {
          statusMessage.remove();
        };

        const popup = document.querySelector('.popup');
        popup.addEventListener('click', () => {
          if (popup.style.display === 'none') {
            removeStatus();
          }
        });
        setTimeout(removeStatus, 10000);
        form.reset();
        phoneValue.style.border = '';
     } else {
      phoneValue.style.border = '2px solid red';
      phoneValue.addEventListener('input', () => phoneValue.style.border = '');
     }
    
  };

  //sending data to server
  const sendData = (body) => {
    return fetch('./server.php', {
      method: 'POST',
      headers: {
        'Content-type':'application/json'
      },
      body: JSON.stringify(body)
    });
  };
};

export default sendForm;