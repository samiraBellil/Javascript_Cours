const car = document.getElementById('car');
const myCar = document.getElementById('myCar');

car.addEventListener('click', () => {
  if (myCar.style.display === 'none') {
    myCar.style.display = 'block';
    car.textContent = 'Hide';
  } else {
    myCar.style.display = 'none';
    car.textContent = 'Show';
  }
});
