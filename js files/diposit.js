document.getElementById("diposit-btn").addEventListener("click", function () {
  const currentDiposit = getValueById("diposit-field");

  const previousDiposit = getInnerTextById("diposit-balance");

  const currentTotalDiposit = previousDiposit + currentDiposit;

  setInnerTextValueById("diposit-balance", currentTotalDiposit);

  const previousBalance = getInnerTextById("total-balance");
  const currentTotalBalance = previousBalance + currentDiposit;

  setInnerTextValueById('total-balance', currentTotalBalance);
});
