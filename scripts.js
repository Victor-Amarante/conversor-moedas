const form = document.querySelector("form")
const amount = document.getElementById("amount")
const currency = document.getElementById("currency")

amount.addEventListener("input", (event) => {
  const hasCharactersRegex = /\D+/g
  let inputValue = amount.value
  inputValue = inputValue.replace(hasCharactersRegex, "")
  console.log(inputValue)
})

form.addEventListener("submit", (event) => {
  event.preventDefault()
  console.log(currency.value)
})