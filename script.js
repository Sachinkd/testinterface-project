const form = document.querySelector('form');
const testType = document.querySelector('#testType');
const testDate = document.querySelector('#testDate');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  const selectedTest = testType.value;
  const selectedDate = testDate.value;
  // TODO: Redirect to test prep page for selected test and date
});
