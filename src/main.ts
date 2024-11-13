import './assets/scss/main.scss'

const shareBtn = document.querySelectorAll('.card__share-btn') as NodeListOf<HTMLButtonElement>;
const shareContainer = document.querySelector('.card__content-social') as HTMLDivElement;

shareBtn.forEach((btn) => {
  btn.addEventListener('click', () => {
    shareContainer.classList.toggle('active');
  });
});