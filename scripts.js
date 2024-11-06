const amount = document.getElementById("amount")

amount.addEventListener("input", (event) => {
  const hasCharactersRegex = /\D+/g
  let inputValue = amount.value
  inputValue = inputValue.replace(hasCharactersRegex, "")
  console.log(inputValue)
})