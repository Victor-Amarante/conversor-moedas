const form = document.querySelector("form")
const amount = document.getElementById("amount")
const currency = document.getElementById("currency")
const footer = document.querySelector("main footer")
const description = document.getElementById("description")

const USD = 4.87
const EUR = 5.32
const GBP = 6.08

amount.addEventListener("input", (event) => {
  const hasCharactersRegex = /\D+/g
  let inputValue = amount.value
  inputValue = inputValue.replace(hasCharactersRegex, "")
})

form.addEventListener("submit", (event) => {
  event.preventDefault()

  switch (currency.value) {
    case "USD":
      convertCurrency(amount.value, USD, "US$")
      break;
    case "EUR":
      convertCurrency(amount.value, EUR, "€")
      break;
    case "GBP":
      convertCurrency(amount.value, GBP, "£")
  }
})

function convertCurrency(amount, price, symbol) {
  try {
    description.textContent = `${symbol} 1 = ${convertCurrencyBRL(price)}`
    footer.classList.add("show-result")
  } catch (error) {
    footer.classList.remove("show-result")
    console.log(error)
    alert("Erro ao converter moeda")
  }
}

function convertCurrencyBRL(value) {
  return Number(value).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  })
}