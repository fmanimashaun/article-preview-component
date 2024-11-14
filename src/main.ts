import './assets/scss/main.scss'

const baseUrl = import.meta.env.BASE_URL;
const shareBtns = document.querySelectorAll('.card__share-btn') as NodeListOf<HTMLButtonElement>;
const shareContainer = document.querySelector('.card__content-social') as HTMLDivElement;

const shareTooltip = document.querySelector('.card__btn-wrapper .card__social') as HTMLDivElement;

console.log(window.innerWidth < 1024);

shareBtns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    e.stopPropagation();

    if (window.innerWidth >= 1024) {
      const shareTooltipEl = `
    <span>SHARE</span>
    <div class="card__social-icons">
      <img class="card__social-icon" src="${baseUrl}assets/images/icon-facebook.svg" alt="Facebook" />
      <img class="card__social-icon" src="${baseUrl}assets/images/icon-twitter.svg" alt="Twitter" />
      <img class="card__social-icon" src="${baseUrl}assets/images/icon-pinterest.svg" alt="Pinterest" />
    </div>`;

      // Insert shareTooltip as the first child of btnwrapper
      shareTooltip.innerHTML = shareTooltipEl;

      // Add active class to shareTooltip
      shareTooltip.classList.toggle('active');
    } else if (window.innerWidth < 1024) {
      shareContainer.classList.toggle('active');
    }

  });
});

// Close share container when clicked away
document.addEventListener('click', (e) => {
  const target = e.target as HTMLElement;

  if (!shareContainer.contains(target) &&
    ![...shareBtns].some((btn) => btn.contains(target)) &&
    !shareTooltip.contains(target)) {
    shareContainer.classList.remove('active');
    shareTooltip.classList.remove('active');
    shareTooltip.innerHTML = '';
  }
});

// Remove active states on window resize
window.addEventListener('resize', () => {
  shareContainer.classList.remove('active');
  shareTooltip.classList.remove('active');
  shareTooltip.innerHTML = '';
});