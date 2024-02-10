//.checked=property that determines the checked state
//                    of a Html checkbox or radio buttom element

const myCheckBox = document.getElementById('myCheckBox');
const visaBtn = document.getElementById('visaBtn');
const masterCardBtn = document.getElementById('masterCardBtn');
const payPalBtn = document.getElementById('payPalBtn');
const submitBtn = document.getElementById('submitBtn');
const subResult = document.getElementById('subResult');
const paymentResult = document.getElementById('paymentResult');

submitBtn.onclick = function () {
  if (myCheckBox.checked) {
    subResult.textContent = 'you are subscribed!';
  } else {
    subResult.textContent = 'you are not subscribed!';
  }
  if (visaBtn.checked) {
    paymentResult.textContent = 'you are paying with visa!';
  } else if (masterCardBtn.checked) {
    paymentResult.textContent = 'you paying with master card!';
  } else if (payPalBtn.checked) {
    paymentResult.textContent = 'you paying with payPal!';
  } else {
    paymentResult.textContent = 'you must select a payment type!';
  }
};
