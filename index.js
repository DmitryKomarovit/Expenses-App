const expenses = [];

const inputNode = document.querySelector(".js-input");
const buttonNode = document.querySelector(".js-button");
const historyNode = document.querySelector(".js-history");

buttonNode.addEventListener("click", function () {
  if (inputNode.value === "") {
    return;
  }

  const expense = parseInt(inputNode.value);
  let expensesListHTML = "";

  expenses.push(expense);

  inputNode.value = "";

  expenses.forEach((element) => {
    expensesListHTML += `<li> ${element}</li>`;
  });

  console.log(expensesListHTML);

  const html = `<ol> ${expensesListHTML}</ol>`;

  historyNode.innerHTML = html;

  //console.log(expenses);
});
