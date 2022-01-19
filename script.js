const menu = document.querySelector('.menu').addEventListener('click', () => {
  const targets_ = document.querySelectorAll('.target');
  targets_.forEach((item) => {
    item.classList.toggle('change');
  });
});

const wrapper = document.querySelectorAll('.wrapper');

wrapper.forEach((item) => {
  item.addEventListener('click', () => {
    const targets_ = document.querySelectorAll('.target');
    targets_.forEach((item2) => {
      item2.classList.remove('change');
    });
  });
});

const videos = document.querySelectorAll('.video');

videos.forEach((item) => {
  item.addEventListener('mouseover', () => {
    item.play();
  });
  item.addEventListener('mouseout', () => {
    item.pause();
  });
});
