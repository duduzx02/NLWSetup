const form = document.querySelector('#form-habits');
const nlwSetup = new NLWSetup(form);
const button = document.querySelector("header button");

button.addEventListener('click', () => {
  const today = new Date().toLocaleDateString().slice(0, 5)
  const dayExists = nlwSetup.dayExists(today);

  if (dayExists) {
    alert("Dia já incluso! ❌");
    return;
  }

  alert("Adicionado com sucesso ✅")
  nlwSetup.addDay(today);
});

form.addEventListener('change', function(){
  localStorage.setItem("NLWSetup_habits", JSON.stringify(nlwSetup.data))
});

const data = JSON.parse(localStorage.getItem("NLWSetup_habits")) || {};

// const data = {
//   run: ['01-01', '01-02', '01-06', '01-10', '01-11', '01-12'],
//   water: ['01-04', '01-05'],
//   food: ['01-01', '01-03'],
// }

nlwSetup.setData(data)
nlwSetup.load()