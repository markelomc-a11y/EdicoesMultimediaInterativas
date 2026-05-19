const cards = document.querySelectorAll('.card');

cards.forEach((card) => {
  card.addEventListener('click', (event) => {
    if (event.target.closest('.card-button')) return;
    card.classList.toggle('is-active');
  });

  card.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      card.classList.toggle('is-active');
    }
  });
});