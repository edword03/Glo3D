const calc = (price = 100) => {
  const calcBlock = document.querySelector('.calc-block'),
    calcType = document.querySelector('.calc-type'),
    calcSquare = document.querySelector('.calc-square'),
    calcCount = document.querySelector('.calc-count'),
    calcDay = document.querySelector('.calc-day'),
    totalValue = document.getElementById('total');

   //validation of inputs
    const calcCost = () => {
      const calcBlock = document.querySelector('.calc-block');
      calcBlock.addEventListener('input', (event) => {
        let target = event.target;
        if (target.matches('input')) {
          target.value = target.value.replace(/[^\d]/g, '');
        }
      });
    }; 

  calcCost();

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
       total = Math.round(price * typeValue * squareValue * countValue * dayValue);
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

export default calc;