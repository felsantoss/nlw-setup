const form = document.querySelector("#form-habits")
const nlwSetup = new NLWSetup(form)
const button = document.querySelector("header button") // adicionando função no botão da página // document.querySelector() para pesquisar o botão que está no HTML, dentro da tag header.

button.addEventListener("click", add) // evento do click do mouse e adicionar a data
form.addEventListener("change", save) // função para salvar os dados.

function add() {
  const today = new Date().toLocaleDateString('pt-br').slice(0, -5); // função para criar a data atual no padrão brasileiro e somente dia e mês.
  const dayExists = nlwSetup.dayExists(today)

  if (dayExists) {
    alert("Dia já incluso. ❗")
    return
  }

  alert("Adicionado com sucesso ✔")
  nlwSetup.addDay(today)
}

function save() {
  localStorage.setItem("NLWSetup@habits", JSON.stringify(nlwSetup.data)) // armazena os dados na memória do browser. (key, value). (qualquer nome, dado em string) // JSON.stringify - transforma o obejto em string.
}

const data = JSON.parse(localStorage.getItem("NLWSetup@habits")) || {} // JSON.parse - transforma a string em objeto.

nlwSetup.setData(data)
nlwSetup.load()
