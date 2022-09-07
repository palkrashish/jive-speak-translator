var btnTranslate = document.querySelector("#btn-translate");
var btnClear = document.querySelector("#btn-clear");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");


var serverURL = "https://api.funtranslations.com/translate/minion.json";

function getTranslationURL(text) {
  return serverURL + "?" + "text=" + text;
}

function errorHandler(error) {
  console.log("Error occured", error);
  alert("Something going with wrong server try again after some time");
}

// clear handler
function clearHandler() {
  outputDiv.innerHTML = "";
  txtInput.value = "";
}

function clickHandler() {
  // taking a input
  outputDiv.innerText = "Loading...";
  var textInput = txtInput.value;

  // calling server to process
  if (textInput === "") {
    outputDiv.innerHTML = "Kindly enter some Text";
  } else {
    fetch(getTranslationURL(textInput))
      .then((response) => response.json())
      .then((json) => {
        var translatedText = json.contents.translated;
        outputDiv.innerText = translatedText; //output
      })
      .catch(errorHandler);
  }
}

btnTranslate.addEventListener("click", clickHandler);
btnClear.addEventListener("click", clearHandler);
