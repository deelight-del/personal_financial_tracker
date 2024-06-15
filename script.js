document.addEventListener('DOMContentLoader', () => {
  const form = document.getElementById('financeForm');

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    let income = document.getElementById('income').value;
    let expenses = document.getElementById('expenditure').value;
    if (income && expenses) {
      localStorage.getItem('income') ? income += localStorage.getItem('income') : income += 0;
      localStorage.getItem('expenditure') ? expenses += localStorage.getItem('expenditure') : expenses += 0;
      localStorage.setItem('income', income);
      localStorage.setItem('expenditure', expenses);
      alert('Successfully saved data');
    } else {
      alert('Fill both fields!!!!!!!!!!!!!!');
    }
  });
});
