const LIMIT = 10000;
const CURRENCY = "руб.";
const STATUS_IN_LIMIT = "Всё хорошо";
const STATUS_OUT_OF_LIMIT = "Всё плохо";
const STATUS_OUT_OF_LIMIT_CLASSNAME = "limit_red";

const inputNode = document.querySelector(".js-input");
const buttonNode = document.querySelector(".js-button");
const historyNode = document.querySelector(".js-history");
const sumNode = document.querySelector(".js-sam");
const limitNode = document.querySelector(".js-limit");
const ststusNode = document.querySelector(".js-status");

const expenses = [];

init(expenses);

buttonNode.addEventListener("click", function () {
  const expense = gerExpanseFromUser();

  if (!expense) {
    return;
  }

  trackExpanse(expense);

  render(expenses);
});

function trackExpanse(expense) {
  expenses.push(expense);
}

function gerExpanseFromUser() {
  if (inputNode.value === "") {
    return null;
  }

  const expense = parseInt(inputNode.value);

  clearInput();

  return expense;
}

function clearInput() {
  inputNode.value = "";
}

function init(expenses) {
  limitNode.innerText = LIMIT;
  ststusNode.innerText = STATUS_IN_LIMIT;
  sumNode.innerText = calculateExpenses(expenses);
}

function calculateExpenses(expenses) {
  let sum = 0;

  expenses.forEach((element) => {
    sum += element;
  });

  return sum;
}

function render(expenses) {
  const sum = calculateExpenses(expenses);

  renderHistory(expenses);
  renderSum(sum);
  renderStatus(sum);
}

function renderHistory(expenses) {
  let expensesListHTML = "";

  expenses.forEach((element) => {
    expensesListHTML += `<li> ${element} руб.</li>`;
  });

  historyNode.innerHTML = `<ol> ${expensesListHTML}</ol>`;
}

function renderSum(sum) {
  sumNode.innerText = sum;
}

function renderStatus(sum) {
  if (sum <= LIMIT) {
    ststusNode.innerText = STATUS_IN_LIMIT;
  } else {
    ststusNode.innerText = STATUS_OUT_OF_LIMIT;
    ststusNode.classList.add(STATUS_OUT_OF_LIMIT_CLASSNAME);
  }
}
