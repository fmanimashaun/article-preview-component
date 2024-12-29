import './assets/scss/main.scss'

const baseUrl = import.meta.env.BASE_URL;
const authorBtn = document.querySelector('#author-btn') as HTMLDivElement;
const shareBtn = document.querySelector('#social-btn') as HTMLDivElement;
const shareContainer = document.querySelector('.card__footer-social') as HTMLDivElement;
const authorContainer = document.querySelector('.card__author') as HTMLDivElement;
const facebookShare = document.getElementById("facebook-share") as HTMLAnchorElement;
const xShare = document.getElementById("twitter-share") as HTMLAnchorElement;
const pinterestShare = document.getElementById("pinterest-share") as HTMLAnchorElement;

const shareTooltip = document.querySelector('.card__btn-wrapper .card__social') as HTMLDivElement;
const currentURL = encodeURIComponent(window.location.href);
const description = encodeURIComponent("Practice my layout skills with this article preview component. There's lots of fun to be had playing around with animations for the sharing icons as well.");


document.addEventListener("DOMContentLoaded", () => {

  if (facebookShare) {
    facebookShare.href = `https://www.facebook.com/sharer/sharer.php?u=${currentURL}`;
  }

  if (xShare) {
    xShare.href = `https://x.com/intent/post?url=${currentURL}&text=${description}&via=FrontendMentor&related=FrontendMentor,DesignPractice`;
  }

  if (pinterestShare) {
    pinterestShare.href = `https://www.pinterest.com/pin-builder/?description=${description}&method=button&url=${currentURL}`;
  }
});


authorBtn.addEventListener('click', (e: MouseEvent) => {
  e.stopPropagation();

  if (window.innerWidth >= 840) {
    const shareTooltipEl = `
    <span>SHARE</span>
    <div class="card__social-icons">
      <a href="https://www.facebook.com/sharer/sharer.php?u=${currentURL}" target="_blank">
        <img class="card__social-icon" src="${baseUrl}assets/images/icon-facebook.svg" alt="Facebook" />
      </a>
      <a href="https://x.com/intent/post?url=${currentURL}&text=${description}&via=FrontendMentor&related=FrontendMentor,DesignPractice" target="_blank">
        <img class="card__social-icon" src="${baseUrl}assets/images/icon-twitter.svg" alt="Twitter" />
      </a>
      <a href="https://www.pinterest.com/pin-builder/?description=${description}&method=button&url=${currentURL}" target="_blank">
        <img class="card__social-icon" src="${baseUrl}assets/images/icon-pinterest.svg" alt="Pinterest" />
      </a>
    </div>`;

    console.log(shareTooltipEl);
    // Insert shareTooltip as the first child of btnwrapper
    shareTooltip.innerHTML = shareTooltipEl;

    // Add active class to shareTooltip
    shareTooltip.classList.toggle('active');
  } else if (window.innerWidth < 840) {
    shareContainer.classList.toggle('active');
    authorContainer.classList.toggle('close');
  }

});

shareBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  shareContainer.classList.toggle('active');
  authorContainer.classList.toggle('close');
})


// Close share container when clicked away
document.addEventListener('click', (e) => {
  const target = e.target as HTMLElement;

  if (!shareContainer.contains(target) &&
    !shareBtn.contains(target) &&
    !shareTooltip.contains(target)) {
    shareContainer.classList.remove('active');
    shareTooltip.classList.remove('active');
    authorContainer.classList.remove('close');
    shareTooltip.innerHTML = '';
  }
});

// Remove active states on window resize
window.addEventListener('resize', () => {
  shareContainer.classList.remove('active');
  shareTooltip.classList.remove('active');
  authorContainer.classList.remove('close');
  shareTooltip.innerHTML = '';
});