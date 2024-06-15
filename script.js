document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('financeForm');

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    let income = parseFloat(document.getElementById('income').value);
    let expenses = parseFloat(document.getElementById('expenditure').value);
    if (income && expenses) {
      income += parseFloat(localStorage.getItem('income') || '0');
      expenses += parseFloat(localStorage.getItem('expenditure') || '0');
      localStorage.setItem('income', income);
      localStorage.setItem('expenditure', expenses);
      alert('Successfully saved data');
    } else {
      alert('Fill both fields!!!!!!!!!!!!!!');
    }
  });
});
