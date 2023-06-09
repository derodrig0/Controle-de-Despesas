function onChangeDate() {
  const date = form.date().value;
  form.dateRequiredError().style.display = !date ? "block" : "none";
}

function onChangeValue() {
  const value = form.value().value;
  form.valuerequirederror().style.display = !value ? "block" : "none";
  if (value < 0) {
    form.valuelessorequaltozeroerror().style.display = !value
      ? "block"
      : "none";
  }
}

const form = {
  date: () => document.getElementById("date"),
  dateRequiredError: () => document.getElementById("date-required-error"),
  value: () => document.getElementById("value"),
  valuerequirederror: () => document.getElementById("value-required-error"),
  valuelessorequaltozeroerror: () =>
    document.getElementById("value-less-or-equal-to-zero-error"),
  // transationType: () => document.getElementById(''),
};
