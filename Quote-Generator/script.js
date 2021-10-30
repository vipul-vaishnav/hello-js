const likeBtn = document.querySelector('.like-cta');
likeBtn.addEventListener('click', () => {
  if (likeBtn.innerHTML !== `<i class="ri-heart-fill"></i>`) {
    likeBtn.innerHTML = `<i class="ri-heart-fill"></i>`;
  } else {
    likeBtn.innerHTML = `<i class="ri-heart-line"></i>`;
  }
});

const twitterCta = document.querySelector('.twitter-cta');
twitterCta.addEventListener('click', () => {
  location.href = 'https://twitter.com/';
});
