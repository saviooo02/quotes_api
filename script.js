async function getQuote() {
  const response = await fetch("https://api.adviceslip.com/advice");
  const data = await response.json();
  const box = document.getElementsByClassName("quote")[0];
  box.innerHTML = data.slip.advice;
}
