document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form');

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    let incomeF = parseFloat(document.getElementById('income').value);
    let expensesF = parseFloat(document.getElementById('expenditure').value);
    if (incomeF && expensesF) {
      incomeF += parseFloat(localStorage.getItem('income') || '0');
      expensesF += parseFloat(localStorage.getItem('expenditure') || '0');
      localStorage.setItem('income', incomeF);
      localStorage.setItem('expenditure', expensesF);
      alert('Successfully saved data');
    } else {
      alert('Fill both fields with Numbers!');
    }
  });

  const income = localStorage.getItem('income') || 0;
  const expenses = localStorage.getItem('expenditure') || 0;
  // Select container.
  const container = document.getElementById('content');
  const dynamicContent = `
  <h2>How You Fare</h2>
  <p>Expenses: ${expenses}</p>
  <p>Income: ${income}</p>`;
  container.innerHTML = dynamicContent;
});
