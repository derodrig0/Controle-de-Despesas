function showSaving() {
  const div = document.createElement("div");
  div.classList.add("loading", "centralize");

  const label = document.createElement("label");
  label.innerText = "Salvando..."

  div.appendChild(label);

  document.body.appendChild(div);
}

function hideSaving() {
  const loadings = document.getElementsByClassName("loading");
  if (loadings.length) {
    loadings[0].remove();
  }
}