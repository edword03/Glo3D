const getDataImg = () => {
  const command = document.querySelector('.command');
  let img;
  
  command.addEventListener('mouseover', (event) => {
    let target = event.target;
    if (target.matches('.command__photo')) {
      img = target.src;
      target.src = target.dataset.img;
    }
  });

  command.addEventListener('mouseout', (event) => {
    let target = event.target;
    if (target.matches('.command__photo')) {
      target.src = img;
    }
  });
};

export default getDataImg;