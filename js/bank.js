/*
================================================================ 
simple bank calculator 
=================================================================
*/

/*
================================================================ 
update balance and display balance 
* first parameter is the current balance
* second parameter is an get user input amount 
return the new balance
=================================================================
*/
function updateBalance(id, balance) {
  const amount = document.getElementById(id).innerText;
  const amountInt = parseInt(amount);
  const total = amountInt + balance;
  document.getElementById(id).innerText = total;
}

/*
================================================================ 
get input value string to int and store in variable
=================================================================
*/
function getInputAmountInt(id) {
  const amount = document.getElementById(id).value;
  const amountInt = parseInt(amount);

  if (amountInt < 1 || amount === "") {
    alert("Please enter a valid amount");
    return false;
  }
  document.getElementById(id).value = "";
  return amountInt;
}

/*
================================================================ 
deposit amount when click on deposit button
=================================================================
*/
document.getElementById("deposit-btn").addEventListener("click", function () {
  // get input amount
  const DepositAmount = getInputAmountInt("deposit-input");

  // update balance deposit and main balance
  updateBalance("balance", DepositAmount);
  updateBalance("deposit", DepositAmount);
});

/*
================================================================ 
withdraw amount when click on withdraw button
=================================================================
*/
document.getElementById("withdraw-btn").addEventListener("click", function () {
  // get input amount
  const WithdrawAmount = getInputAmountInt("withdraw-input");

  // check if the withdraw amount is less than the balance
  const balanceInt = parseInt(document.getElementById("balance").innerText);
  if (WithdrawAmount > balanceInt) {
    alert("Insufficient funds");
    return false;
  }

  // update withdraw balance and main balance
  updateBalance("balance", -WithdrawAmount);
  updateBalance("withdraw", WithdrawAmount);
});
