document.getElementById("withdraw-btn").addEventListener("click", function () {

  const currentWithdraw = getValueById("withdraw-field");

  const withdrawField = document.getElementById("withdraw-field");
  

  const previousWithdraw = getInnerTextById("withdraw-balance");

  const currentTotalWithdraw = currentWithdraw + previousWithdraw;

  //   const withdrawBalance = document.getElementById("withdraw-balance");
  //   withdrawBalance.innerText = currentTotalWithdraw;

  setInnerTextValueById("withdraw-balance", currentTotalWithdraw);

  const previousBalance = getInnerTextById("total-balance");
  const currentTotalBalance = previousBalance - currentWithdraw;

  //   const totalBalance = document.getElementById("total-balance");
  //   totalBalance.innerText = currentTotalBalance;

  setInnerTextValueById("total-balance", currentTotalBalance);
});
