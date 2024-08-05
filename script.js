async function getQuote() {
  const response = await fetch(
    "https://evilinsult.com/generate_insult.php?lang=en&type=json"
  );
  const data = await response.json();
  console.log(`${data}`);
}
