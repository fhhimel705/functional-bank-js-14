function getValueById(inputId) {
  const inputField = document.getElementById(inputId);
  const inputValue = parseFloat(inputField.value);
  inputField.value = '';
  return inputValue;
  
}

function getInnerTextById(inputId){
    const inputText = document.getElementById(inputId);
    const inputInnerText = parseFloat(inputText.innerText);
    return inputInnerText;
}

function setInnerTextValueById(inputId, setVar) {
  const inputText = document.getElementById(inputId);
  inputText.innerText = setVar;
}

