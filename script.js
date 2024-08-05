async function getQuote() {
  const response = await fetch("https://api.adviceslip.com/advice");
  const data = await response.json();
  console.log(`${data.slip.advice}`);
}
