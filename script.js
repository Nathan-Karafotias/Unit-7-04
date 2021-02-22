document.getElementById('button').addEventListener('click',compare)
let age = 0
let day = "tuesday"

function compare() {
  age = document.getElementById('input').value

  if ((day == "monday" || day == "friday") || (age >14 && age <25)) {
  document.getElementById('answer').innerHTML = "You can get student pricing"
  } else {
    document.getElementById('answer').innerHTML = "You have to pay regular price"
  }
}