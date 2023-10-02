const totalAmount = document.getElementById('totalAmount');
const purchButton = document.getElementById('purchButton');
let newAmount = 0;


function clickContainer(target) {

  const allCardTitle = target.querySelector('h2.card-title').innerText;
  const itemNameList=document.getElementById('itemNameList');
 const count=itemNameList.childElementCount;
  const p = document.createElement('p');
  
  p.innerHTML = `${count+1}. ${allCardTitle}`;
  itemNameList.appendChild(p);
  itemNameList.style.fontSize ="18px";
  itemNameList.style.fontWeight ="bold";

  const allCardAmount = target.querySelector('span#productAmount').innerText;
  const allAmountNew = parseFloat(allCardAmount);
  newAmount = newAmount + allAmountNew;
  const formattedNewAmount = newAmount.toFixed(2);
  totalAmount.innerText = `${formattedNewAmount}`;
  newAmount.innerText='Initial Text';
  const oldTotal = totalAmount.innerText;
  const newTotal = parseFloat(oldTotal);

  if (newTotal >0) {
    purchButton.removeAttribute('disabled');
    purchButton.style.backgroundColor = '#E527B2';
  }
  else {
    purchButton.setAttribute('disabled', 'disabled');
    purchButton.style.backgroundColor = '';
  }
  if (newTotal>200) {
    submitButton.removeAttribute('disabled');
      submitButton.style.backgroundColor = '#E527B2';
  }
 

  return;
}
// Apply button part
const inputField = document.getElementById('inputField');
const submitButton = document.getElementById('submitButton');

// discount button
let discountedAmount = 0;
const discountAmount = document.getElementById('discountAmount');
const newtotalAmount = document.getElementById('newtotalAmount');

submitButton.addEventListener('click', function () {
  const inputField=document.getElementById('inputField');
  const inputValue=inputField.value;
  const isInputCorrect=inputValue==='SELL200';

  if (isInputCorrect) {
    const totalAm = document.getElementById('totalAmount');
    const allAmountNew = parseFloat(totalAm.innerText);
    const formattedNewAmount = allAmountNew.toFixed(2);
    totalAmount.innerText = `${formattedNewAmount}`;
    const discountPercentage = 0.20;
    discountedAmount = formattedNewAmount * (1 - discountPercentage);
    newtotalAmount.innerText = discountedAmount.toFixed(2);
  
    const namo = allAmountNew - discountedAmount;
    const newNamo = namo.toFixed(2);
    discountAmount.innerText = newNamo;
  }

});

moduleId.addEventListener('click', function () {
  newAmount=0;
  inputField.value = '';
  submitButton.setAttribute('disabled', 'disabled');
  submitButton.style.backgroundColor = ''; 
  itemNameList.innerHTML = '';
  totalAmount.innerText = '00.00';
  discountAmount.innerText = '00.00';
  newtotalAmount.innerText = '00.00';
  purchButton.setAttribute('disabled', 'disabled');
  purchButton.style.backgroundColor = '';
});

// Active button click  
document.addEventListener("DOMContentLoaded", function () {
  const navItems = document.querySelectorAll(".nav-item");

  navItems.forEach((item) => {
      item.addEventListener("click", function () {
          navItems.forEach((navItem) => {
              navItem.classList.remove("active");
          });
          this.classList.add("active");
      });
  });
});
$(document).ready(function() {
  var currentPath = window.location.pathname;
  var activeNavItem = $('li[data-link="' + currentPath + '"]');
  activeNavItem.addClass('active');
});





