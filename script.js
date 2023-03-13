const options = document.querySelectorAll('.option');

options.forEach(option => {
  option.addEventListener('click', () => {
    if (!option.classList.contains('selected')) {
      options.forEach(option => {
        option.classList.remove('selected');
      });
      option.classList.add('selected');
    }
  });
});